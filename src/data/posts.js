// Real posts live alongside placeholders here — swap in more real
// title/excerpt/date/body content as Ranjit's writing is ready. Body is a
// list of blocks ({ type: "p" | "h2" | "note", text }) so posts can mix
// paragraphs, subheadings, and a closing note; *word* renders as italic,
// **word** renders as bold.
export const POSTS = [
  {
    slug: "psychology-of-variable-rewards",
    date: "July 23, 2026",
    readTime: "4 min read",
    title: "Why Uncertainty Is More Addictive Than Reward Itself",
    excerpt:
      "Why a maybe is more compelling than a guarantee — and why willpower alone can't beat a variable-ratio schedule.",
    body: [
      {
        type: "p",
        text:
          "If you want to understand why you can't put your phone down, forget the app icons and the color schemes. Look at a pigeon in a box.",
      },
      {
        type: "p",
        text:
          "In the 1950s, B.F. Skinner ran an experiment that quietly built the entire attention economy. He put pigeons in a box with a lever. Peck the lever, get a food pellet. Simple enough — the bird learns the pattern, pecks when hungry, stops when full. Predictable behavior for a predictable reward.",
      },
      {
        type: "p",
        text:
          "Then he changed one variable. Instead of a pellet every time, the lever paid out on a *random* schedule. Sometimes one peck. Sometimes twenty. No pattern the bird could learn.",
      },
      {
        type: "p",
        text:
          "The pigeons didn't peck less. They pecked obsessively — faster, longer, and far harder to get to stop than the pigeons on the predictable schedule. Skinner called it a variable-ratio reinforcement schedule, and it turned out to be one of the most powerful behavior-shaping tools psychology has ever documented.",
      },
      { type: "h2", text: "Certainty Is Boring. Your Brain Knows It." },
      {
        type: "p",
        text: "Here's the counterintuitive part: a guaranteed reward is less compelling than a maybe.",
      },
      {
        type: "p",
        text:
          "When a reward is certain, the anticipation and the payoff barely register differently — dopamine fires, you get what you expected, done. But when a reward is uncertain, dopamine doesn't just fire *at* the reward. It fires in the gap of not knowing, in the reaching itself. Neuroscientist Wolfram Schultz's research on dopamine neurons found that reward-predicting cues generate the largest dopamine response when the outcome is *maximally uncertain* — right around a 50/50 chance — not when the reward is guaranteed or impossible.",
      },
      { type: "p", text: "Translation: your brain isn't chasing the reward. It's chasing the not-knowing." },
      {
        type: "p",
        text:
          "This is why a slot machine is more compelling than a vending machine, even though the vending machine has a 100% success rate. It's why \"check email\" turns into a reflex faster than \"check bank balance,\" even though your bank balance changes far less often. Certainty kills the itch. Ambiguity feeds it.",
      },
      { type: "h2", text: "Three Flavors of Maybe" },
      {
        type: "p",
        text: "Not all variable rewards work the same way, and the products that hook you hardest usually stack more than one.",
      },
      {
        type: "p",
        text:
          "**Rewards of the tribe** — social validation you didn't see coming. A like, a comment, a reply. You don't know if it's there until you check, and it's never guaranteed, which is exactly why checking becomes reflexive.",
      },
      {
        type: "p",
        text:
          "**Rewards of the hunt** — material or informational payoff with unpredictable value. The next scroll on a feed might be boring or it might be the best thing you've seen all week. Slot machines, loot boxes, and infinite-scroll feeds all run on this same hunt logic — you're foraging, not consuming.",
      },
      {
        type: "p",
        text:
          "**Rewards of the self** — a private sense of competence or progress that shows up unpredictably. A high score you didn't expect. A streak you almost broke. Games are especially good at manufacturing this one because they control the entire reward schedule from scratch.",
      },
      {
        type: "p",
        text:
          "Stack all three — you don't know if anyone liked your post, you don't know what you'll see next, you don't know if you'll beat your record — and you've built something closer to a casino than an app.",
      },
      { type: "h2", text: "Why Your Willpower Isn't the Problem" },
      {
        type: "p",
        text:
          "This is the part that matters most and gets said least: if you've ever felt weak-willed for checking your phone compulsively, you're diagnosing the wrong system. Variable-ratio schedules are, by design, the most resistant to extinction of any reinforcement pattern psychology has studied. Behavior trained on a variable schedule doesn't just persist longer — it's *harder to unlearn* than behavior trained on a predictable one, even after the rewards stop coming entirely. That's not a personal failing. That's the mechanism working exactly as engineered.",
      },
      {
        type: "p",
        text:
          "Which is the uncomfortable truth sitting underneath every \"just have more self-control\" take on phone addiction: you're applying willpower to a system that was specifically selected, tested, and iterated on *because* it defeats willpower. Skinner didn't design his box to be resisted. Neither did the product teams who read his research afterward.",
      },
      { type: "h2", text: "The Only Real Defense" },
      {
        type: "p",
        text:
          "Since the mechanism runs on uncertainty, the only thing that actually breaks it is removing the uncertainty — not gritting your teeth through it. Turn off notifications so the trigger doesn't arrive uninvited. Batch-check things on your own schedule instead of theirs. Make the reward predictable again — check email at set times and it stops being a slot machine and goes back to being a mailbox.",
      },
      {
        type: "p",
        text: "You can't out-discipline a variable-ratio schedule. You can only stop feeding it a random one.",
      },
    ],
  },
  {
    slug: "hooked-ethics-of-habit-design",
    date: "July 23, 2026",
    readTime: "5 min read",
    title: "The Hook Model Isn't Neutral — And Hooked Never Pretended It Was",
    excerpt:
      "A critical look at Nir Eyal's Hooked — and why calling compulsive design a 'habit' doesn't make it a neutral one.",
    body: [
      {
        type: "p",
        text:
          "Nir Eyal's *Hooked: How to Build Habit-Forming Products* is one of the most quietly influential books in tech. You've probably never read it, but you've definitely felt it. Every time you check a notification you didn't ask for, refresh a feed out of pure reflex, or feel a phantom buzz in your pocket — that's the Hook Model at work. Trigger, action, variable reward, investment. Rinse, repeat, addict.",
      },
      {
        type: "p",
        text:
          "I'm not here to pretend the book is bad. It's clear, well-researched, and genuinely useful if you're building a product. That's exactly the problem.",
      },
      { type: "h2", text: "The Slot Machine in Your Pocket" },
      {
        type: "p",
        text:
          "The most honest chapter in *Hooked* is the one on variable rewards, because it doesn't dress up the psychology — it just uses it. Eyal draws directly on B.F. Skinner's research on variable-ratio reinforcement, the same mechanism that makes slot machines so effective at extracting money from people who know, rationally, that the house always wins.",
      },
      {
        type: "p",
        text:
          "Pull-to-refresh. The infinite scroll. The \"someone liked your post\" notification that may or may not be waiting for you. These aren't accidents of design. They're slot machine mechanics, ported directly into your social feed, and Eyal tells founders exactly how to build them, sentence by sentence.",
      },
      { type: "p", text: "That's not a conspiracy theory. It's the book's stated purpose." },
      { type: "h2", text: "“Habit” Is a Nice Word for Compulsion" },
      {
        type: "p",
        text:
          "Here's the sleight of hand at the center of the whole framework: Eyal calls the goal a \"habit.\" Habits sound healthy. Brushing your teeth is a habit. Going for a run is a habit. The word carries none of the baggage that \"addiction\" or \"compulsion\" would.",
      },
      {
        type: "p",
        text:
          "But the mechanism the book describes — an external trigger fading into an internal one, so that boredom or loneliness itself becomes the cue to open the app — isn't habit formation in the neutral, toothbrushing sense. It's the deliberate engineering of an itch you didn't have before, sold back to you as a feature.",
      },
      {
        type: "p",
        text:
          "The tell is in the metrics the book cares about: frequency, retention, engagement. Not satisfaction. Not whether the behavior serves the user's actual goals. A habit built around your wellbeing and a habit built around a company's DAU chart *look identical from the inside of the Hook Model*. The framework doesn't distinguish between them, because it isn't designed to.",
      },
      { type: "h2", text: "Eyal's Own Reversal Says Everything" },
      {
        type: "p",
        text:
          "The most damning evidence against *Hooked* isn't a critic's review — it's Eyal's second book. Five years later, he published *Indistractable*, a guide for individuals to resist compulsive technology use. Notification fatigue. Phantom vibrations. The inability to sit with boredom without reaching for a screen.",
      },
      { type: "p", text: "He wrote the playbook, and then he wrote the antidote, and sold both." },
      {
        type: "p",
        text:
          "I don't think that makes him a villain. I think it makes him a very accurate mirror of the industry: build the hook, wait for the backlash, monetize the cure. It's a pattern worth noticing, because it's not just Eyal's pattern — it's tech's.",
      },
      { type: "h2", text: "“Ethical” Is Doing a Lot of Work in That Subtitle" },
      {
        type: "p",
        text:
          "Later editions of *Hooked* added a section on the \"Manipulation Matrix\" — a framework for founders to ask whether they'd use their own product, and whether it genuinely improves users' lives. It's a fig leaf, and a thin one. The matrix is optional. The Hook Model is not. You can build every habit-forming mechanic in the book and simply skip the two pages asking whether you should have.",
      },
      {
        type: "p",
        text:
          "Nothing in the core framework requires the product to be good for anyone. A framework that works exactly as well for a meditation app as it does for a slot-machine-shaped social feed isn't an ethics framework. It's a persuasion technology with an ethics afterword.",
      },
      { type: "h2", text: "So What Do You Do With a Book Like This?" },
      {
        type: "p",
        text:
          "Read it. Genuinely — it's one of the clearest explanations of behavioral design you'll find, and understanding the mechanics is the first step to resisting them, whether you're building products or just trying to put your phone down at dinner.",
      },
      {
        type: "p",
        text:
          "But read it the way you'd read a manual on persuasive rhetoric or a magician's trick book: as a description of leverage, not a moral endorsement of using it. The Hook Model isn't evil. It's a lever. The question *Hooked* never quite forces you to answer — the one buried under 200 pages of case studies — is who the lever is supposed to be pulling for.",
      },
      {
        type: "p",
        text:
          "If your product needs someone to be a little worse off, a little more anxious, a little more compulsive in order to hit its retention numbers, no amount of \"does this genuinely help the user\" framing at the end of the book fixes that. The hook was already set on page one.",
      },
      {
        type: "note",
        text:
          "If you're building something and reaching for this framework, ask the boring question first: would this feature exist if engagement metrics weren't watching? If the honest answer is no, you're not building a habit. You're building a hook — and now you know exactly what that word costs.",
      },
    ],
  },
  {
    slug: "post-2",
    date: "February 20, 2026",
    readTime: "2 min read",
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966",
    body: [
      {
        type: "p",
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        type: "p",
        text:
          "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      },
      {
        type: "p",
        text:
          "More recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum, the practice has continued into digital design tools and templates used across the industry today.",
      },
    ],
  },
  {
    slug: "post-3",
    date: "February 20, 2026",
    readTime: "2 min read",
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966",
    body: [
      {
        type: "p",
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        type: "p",
        text:
          "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      },
      {
        type: "p",
        text:
          "More recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum, the practice has continued into digital design tools and templates used across the industry today.",
      },
    ],
  },
  {
    slug: "post-4",
    date: "February 20, 2026",
    readTime: "2 min read",
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966",
    body: [
      {
        type: "p",
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        type: "p",
        text:
          "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      },
      {
        type: "p",
        text:
          "More recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum, the practice has continued into digital design tools and templates used across the industry today.",
      },
    ],
  },
];
