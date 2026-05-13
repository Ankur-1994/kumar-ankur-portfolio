/** Full-time career start (first production role). Used for live “years of experience” copy. */
export function getExperienceYears(careerStartISO: string, now = new Date()): { years: number; label: string } {
  const start = new Date(`${careerStartISO}T00:00:00`);
  if (Number.isNaN(start.getTime())) {
    return { years: 0, label: "0" };
  }
  const ms = now.getTime() - start.getTime();
  const years = ms / (365.2425 * 24 * 60 * 60 * 1000);
  const y = Math.floor(Math.max(0, years));
  const label = y >= 10 ? `${y}+` : y < 1 ? "<1" : `${y}`;
  return { years: y, label };
}

export function injectYears(text: string, label: string): string {
  return text.replace(/\{\{years\}\}/g, label);
}
