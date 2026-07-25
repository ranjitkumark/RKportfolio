const RAD = Math.PI / 180;
const DAY_MS = 1000 * 60 * 60 * 24;
const J1970 = 2440588;
const J2000 = 2451545;
const OBLIQUITY = RAD * 23.4397;

const toJulian = (date) => date.valueOf() / DAY_MS - 0.5 + J1970;
const fromJulian = (j) => new Date((j + 0.5 - J1970) * DAY_MS);
const toDays = (date) => toJulian(date) - J2000;

const solarMeanAnomaly = (d) => RAD * (357.5291 + 0.98560028 * d);

const eclipticLongitude = (M) => {
  const C = RAD * (1.9148 * Math.sin(M) + 0.02 * Math.sin(2 * M) + 0.0003 * Math.sin(3 * M));
  const P = RAD * 102.9372;
  return M + C + P + Math.PI;
};

const declination = (L) => Math.asin(Math.sin(L) * Math.sin(OBLIQUITY));

const hourAngle = (h, phi, dec) =>
  Math.acos((Math.sin(h) - Math.sin(phi) * Math.sin(dec)) / (Math.cos(phi) * Math.cos(dec)));

const SUNSET_ANGLE = -0.833 * RAD;

/**
 * Approximate sunrise/sunset for a given date + coordinates (NOAA-style
 * solar position formula, same core math used by well-known sun-time
 * calculators). Accurate to within a minute or two — plenty for a
 * day/night theme switch.
 */
export function getSunTimes(date, lat, lon) {
  const lw = RAD * -lon;
  const phi = RAD * lat;
  const d = toDays(date);
  const n = Math.round(d - 0.0009 - lw / (2 * Math.PI));
  const ds = 0.0009 + lw / (2 * Math.PI) + n;

  const M = solarMeanAnomaly(ds);
  const L = eclipticLongitude(M);
  const dec = declination(L);

  const Jnoon = J2000 + ds + 0.0053 * Math.sin(M) - 0.0069 * Math.sin(2 * L);
  const w = hourAngle(SUNSET_ANGLE, phi, dec);
  const a = 0.0053 * Math.sin(M) - 0.0069 * Math.sin(2 * L);

  const Jset = J2000 + (0.0009 + (w + lw) / (2 * Math.PI) + n) + a;
  const Jrise = Jnoon - (Jset - Jnoon);

  return {
    sunrise: fromJulian(Jrise),
    sunset: fromJulian(Jset),
  };
}

export function isNightAt(date, lat, lon) {
  const { sunrise, sunset } = getSunTimes(date, lat, lon);
  if (Number.isNaN(sunrise.getTime()) || Number.isNaN(sunset.getTime())) return null;
  return date < sunrise || date >= sunset;
}
