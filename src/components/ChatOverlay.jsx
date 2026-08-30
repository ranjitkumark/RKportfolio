import React, { useEffect, useRef, useState } from "react";
import { X, ArrowUp } from "./icons.jsx";
import { ImagePlus } from "lucide-react";

const GREETING = "Hi! I'm Ranjit's AI assistant. Ask me anything about his work, process, or experience.";

const SUGGESTIONS = [
  { label: "Review my product screenshot", action: "file" },
  { label: "Help me with a UX problem", action: "send" },
  { label: "AI product experience", action: "send" },
  { label: "Benefits SaaS experience", action: "send" },
];

const ACCEPTED_IMAGE_TYPES = ["image/png", "image/jpeg", "image/jpg", "image/webp", "image/gif"];
const MAX_FILE_BYTES = 10 * 1024 * 1024;
const MAX_LONG_EDGE = 1568;
const SKIP_RESIZE_MAX_BYTES = 1.5 * 1024 * 1024;
const DEFAULT_IMAGE_PROMPT = "Here's a screenshot of my product. What would you change?";

function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("Couldn't read that file."));
    reader.readAsDataURL(file);
  });
}

function loadImageElement(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Couldn't decode that image."));
    img.src = src;
  });
}

// Downscales to a 1568px long edge and re-encodes as JPEG (flattened onto white,
// since JPEG has no alpha) unless the file is already small enough — image tokens
// scale with dimensions, so a raw 4K screenshot costs several times more for no
// extra detail the model can actually use.
async function prepareImage(file) {
  const dataUrl = await readFileAsDataURL(file);
  const img = await loadImageElement(dataUrl);
  const longEdge = Math.max(img.width, img.height);

  if (longEdge <= MAX_LONG_EDGE && file.size <= SKIP_RESIZE_MAX_BYTES) {
    return { dataUrl, mediaType: file.type };
  }

  const scale = Math.min(1, MAX_LONG_EDGE / longEdge);
  const width = Math.max(1, Math.round(img.width * scale));
  const height = Math.max(1, Math.round(img.height * scale));

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, width, height);
  ctx.drawImage(img, 0, 0, width, height);

  return { dataUrl: canvas.toDataURL("image/jpeg", 0.85), mediaType: "image/jpeg" };
}

function userMessageText(content) {
  if (typeof content === "string") return content;
  const block = Array.isArray(content) ? content.find((b) => b.type === "text") : null;
  return block?.text || "";
}

export default function ChatOverlay({ onClose }) {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [attachment, setAttachment] = useState(null);
  const [attachError, setAttachError] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const scrollRef = useRef(null);
  const fileInputRef = useRef(null);
  const dragDepthRef = useRef(0);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  // Paste works anywhere in the overlay, not just while the text input is focused —
  // someone takes a screenshot and pastes, they shouldn't have to click into the box first.
  useEffect(() => {
    const onPaste = (e) => {
      const items = e.clipboardData?.items;
      if (!items) return;
      for (const item of items) {
        if (item.type && item.type.startsWith("image/")) {
          const file = item.getAsFile();
          if (file) {
            e.preventDefault();
            handleFile(file);
          }
          break;
        }
      }
    };
    window.addEventListener("paste", onPaste);
    return () => window.removeEventListener("paste", onPaste);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFile = async (file) => {
    setAttachError(null);
    if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
      setAttachError("Please attach a PNG, JPG, WEBP, or GIF image.");
      return;
    }
    if (file.size > MAX_FILE_BYTES) {
      setAttachError("That file's over 10MB — try a smaller export.");
      return;
    }
    try {
      const { dataUrl, mediaType } = await prepareImage(file);
      const base64 = dataUrl.split(",")[1] || "";
      setAttachment({ previewUrl: dataUrl, mediaType, base64, fileName: file.name });
    } catch {
      setAttachError("Couldn't read that image — try a different file.");
    }
  };

  const onFileInputChange = (e) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
    e.target.value = "";
  };

  const onDragEnter = (e) => {
    e.preventDefault();
    if (!e.dataTransfer?.types?.includes("Files")) return;
    dragDepthRef.current += 1;
    setIsDragging(true);
  };
  const onDragOver = (e) => {
    e.preventDefault();
  };
  const onDragLeave = (e) => {
    e.preventDefault();
    dragDepthRef.current = Math.max(0, dragDepthRef.current - 1);
    if (dragDepthRef.current === 0) setIsDragging(false);
  };
  const onDrop = (e) => {
    e.preventDefault();
    dragDepthRef.current = 0;
    setIsDragging(false);
    const file = e.dataTransfer?.files?.[0];
    if (file) handleFile(file);
  };

  const send = async (text) => {
    if (loading) return;
    const trimmed = (text || "").trim();
    if (!trimmed && !attachment) return;

    let content;
    let previewUrl;
    let fileName;
    if (attachment) {
      content = [
        { type: "image", source: { type: "base64", media_type: attachment.mediaType, data: attachment.base64 } },
        { type: "text", text: trimmed || DEFAULT_IMAGE_PROMPT },
      ];
      previewUrl = attachment.previewUrl;
      fileName = attachment.fileName;
    } else {
      content = trimmed;
    }

    const userMessage = { role: "user", content, ...(previewUrl ? { previewUrl, fileName } : {}) };
    const nextHistory = [...messages, userMessage];
    setMessages(nextHistory);
    setValue("");
    setAttachment(null);
    setAttachError(null);
    setLoading(true);
    try {
      // Strip the client-only preview/fileName fields — only the base64 already
      // embedded in `content` should go over the wire, not a second copy of the image.
      const wireMessages = nextHistory.map(({ role, content }) => ({ role, content }));
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: wireMessages, provider: "claude" }),
      });
      if (!res.ok) throw new Error("request failed");
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply || "Sorry, I couldn't quite get that — mind rephrasing?" },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I'm having trouble connecting right now — reach Ranjit directly at postranjitk@gmail.com.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const submit = () => send(value);

  return (
    <div
      className="fixed inset-0 z-50 bg-mint flex flex-col animate-fadeIn font-poppins"
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close chat"
        className="absolute top-5 right-5 sm:top-8 sm:right-10 w-8 h-8 rounded-full bg-[#484848] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
      >
        <X size={14} />
      </button>

      <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 sm:px-10 pt-16 sm:pt-14 pb-6">
        <div className="max-w-2xl mx-auto w-full space-y-5">
          <div className="flex items-start gap-3">
            <span className="w-7 h-7 shrink-0 rounded-full bg-[#7b8d8d] border border-[#597171] text-white text-[11px] font-semibold flex items-center justify-center">
              R
            </span>
            <div className="bg-white dark:bg-card border border-[#b9c7c9] dark:border-white/10 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl rounded-tl-md px-[16px] py-[12px] text-[14px] leading-[22.4px] text-ink max-w-[85%]">
              {GREETING}
            </div>
          </div>

          {messages.length === 0 && (
            <div className="flex flex-wrap gap-3 pl-10">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s.label}
                  type="button"
                  onClick={() => (s.action === "file" ? fileInputRef.current?.click() : send(s.label))}
                  className="text-[12px] font-medium text-body bg-white dark:bg-card border-[0.75px] border-black/20 dark:border-white/10 rounded-full h-[30px] px-[16px] shadow-[0px_1px_1px_rgba(0,0,0,0.24)] hover:border-black/40 dark:hover:border-white/30 transition-colors"
                >
                  {s.label}
                </button>
              ))}
            </div>
          )}

          {messages.map((m, i) =>
            m.role === "assistant" ? (
              <div key={i} className="flex items-start gap-3">
                <span className="w-7 h-7 shrink-0 rounded-full bg-[#7b8d8d] border border-[#597171] text-white text-[11px] font-semibold flex items-center justify-center">
                  R
                </span>
                <div className="bg-white dark:bg-card border border-[#b9c7c9] dark:border-white/10 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl rounded-tl-md px-[16px] py-[12px] text-[14px] leading-[22.4px] text-ink max-w-[85%] whitespace-pre-wrap">
                  {m.content}
                </div>
              </div>
            ) : (
              <div key={i} className="flex justify-end">
                <div className="flex flex-col items-end gap-2 max-w-[85%]">
                  {m.previewUrl && (
                    <img
                      src={m.previewUrl}
                      alt={`Screenshot attached for review: ${m.fileName || "product screenshot"}`}
                      className="max-w-[220px] max-h-[220px] rounded-2xl border border-black/10 object-cover"
                    />
                  )}
                  {userMessageText(m.content) && (
                    <div className="bg-navy text-white rounded-tl-2xl rounded-bl-2xl rounded-br-2xl rounded-tr-md px-[16px] py-[12px] text-[14px] leading-[22.4px]">
                      {userMessageText(m.content)}
                    </div>
                  )}
                </div>
              </div>
            )
          )}

          {loading && (
            <div className="flex items-start gap-3">
              <span className="w-7 h-7 shrink-0 rounded-full bg-[#7b8d8d] border border-[#597171] text-white text-[11px] font-semibold flex items-center justify-center">
                R
              </span>
              <div className="bg-white dark:bg-card border border-[#b9c7c9] dark:border-white/10 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl rounded-tl-md px-[16px] py-[12px]">
                <span className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-muted animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-muted animate-bounce" />
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="px-5 sm:px-10 pb-8 font-poppins">
        <div className="max-w-2xl mx-auto w-full">
          {attachError && (
            <div role="status" className="mb-2 px-1 text-[12.5px] text-[#b3261e]">
              {attachError}
            </div>
          )}

          {attachment && (
            <div className="mb-2 flex items-center gap-3 bg-white dark:bg-card border border-[#b9c7c9] dark:border-white/10 rounded-2xl px-3 py-2">
              <img src={attachment.previewUrl} alt="" className="w-10 h-10 rounded-lg object-cover shrink-0" />
              <span className="flex-1 min-w-0 text-[13px] text-body truncate">{attachment.fileName}</span>
              <button
                type="button"
                onClick={() => setAttachment(null)}
                aria-label="Remove attached image"
                className="w-11 h-11 shrink-0 rounded-full flex items-center justify-center text-muted hover:text-ink transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          )}

          <div className="flex items-center gap-1 bg-white dark:bg-card border border-[#b9c7c9] dark:border-white/10 rounded-full shadow-[0px_0px_2.5px_rgba(32,32,32,0.1)] pl-[6px] pr-[8px] py-[8px]">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              aria-label="Attach an image"
              className="w-11 h-11 shrink-0 rounded-full flex items-center justify-center text-muted hover:text-ink transition-colors"
            >
              <ImagePlus size={18} />
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/png,image/jpeg,image/webp,image/gif"
              onChange={onFileInputChange}
              className="hidden"
            />
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && submit()}
              placeholder="Ask me anything…"
              className="flex-1 min-w-0 bg-transparent outline-none text-[14px] text-ink placeholder:text-muted"
            />
            <button
              type="button"
              onClick={submit}
              disabled={loading || (!value.trim() && !attachment)}
              aria-label="Send"
              className="w-8 h-8 shrink-0 rounded-full bg-navy text-white flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-[#ced7d9] dark:border-white/10 py-8 flex items-center justify-center gap-3 font-poppins">
        <span className="bg-[#dee2e3] dark:bg-card border border-[#9fa6ab] dark:border-white/20 rounded text-[14px] text-body px-[8px] py-[4px]">
          ESC
        </span>
        <span className="text-[16px] font-medium text-body">CLOSE</span>
      </div>

      {isDragging && (
        <div className="absolute inset-4 sm:inset-8 z-20 rounded-3xl border-2 border-dashed border-navy/50 bg-mint/95 dark:bg-card/95 flex items-center justify-center pointer-events-none">
          <p className="text-[15px] font-medium text-navy dark:text-heading">Drop your screenshot here</p>
        </div>
      )}
    </div>
  );
}
