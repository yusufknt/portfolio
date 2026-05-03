export type ContributionDay = {
  date: string;
  count: number;
  level?: number;
};

export async function fetchContributions(username: string): Promise<ContributionDay[] | null> {
  try {
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}`, {
      next: { revalidate: 3600 },
      headers: { Accept: "application/json" },
    });
    if (!res.ok) return null;
    const json = (await res.json()) as { contributions?: ContributionDay[] };
    return json.contributions ?? null;
  } catch {
    return null;
  }
}

export type ContributionWeek = ContributionDay[];

/**
 * Columns are weeks (Sun→Sat). Rows rendered top-down Sun first cell at row 0.
 */
export function buildContributionWeeks(days: ContributionDay[]): ContributionWeek[] {
  if (!days.length) return [];

  const byDate = new Map(days.map((d) => [d.date.slice(0, 10), d]));
  const sortedKeys = [...byDate.keys()].sort();

  const padWeekStart = (dateStr: string) => {
    const d = new Date(`${dateStr}T12:00:00Z`);
    const dow = d.getUTCDay();
    const start = new Date(d);
    start.setUTCDate(d.getUTCDate() - dow);
    return start;
  };

  const padWeekEnd = (dateStr: string) => {
    const d = new Date(`${dateStr}T12:00:00Z`);
    const dow = d.getUTCDay();
    const end = new Date(d);
    end.setUTCDate(d.getUTCDate() + (6 - dow));
    return end;
  };

  const first = sortedKeys[0];
  const last = sortedKeys[sortedKeys.length - 1];
  const rangeStart = padWeekStart(first);
  const rangeEnd = padWeekEnd(last);

  const weeks: ContributionWeek[] = [];
  const cursor = new Date(rangeStart);

  while (cursor <= rangeEnd) {
    const week: ContributionDay[] = [];
    for (let i = 0; i < 7; i += 1) {
      const y = cursor.getUTCFullYear();
      const m = String(cursor.getUTCMonth() + 1).padStart(2, "0");
      const day = String(cursor.getUTCDate()).padStart(2, "0");
      const key = `${y}-${m}-${day}`;
      week.push(
        byDate.get(key) ?? {
          date: key,
          count: 0,
          level: 0,
        },
      );
      cursor.setUTCDate(cursor.getUTCDate() + 1);
    }
    weeks.push(week);
  }

  return weeks;
}
