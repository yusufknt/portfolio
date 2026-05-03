import type { ContributionDay } from "@/lib/githubContributions";
import { buildContributionWeeks } from "@/lib/githubContributions";

function intensity(day: ContributionDay): number {
  if (typeof day.level === "number") return Math.min(4, Math.max(0, day.level));
  const c = day.count;
  if (c <= 0) return 0;
  if (c <= 3) return 1;
  if (c <= 7) return 2;
  if (c <= 13) return 3;
  return 4;
}

function cellClass(level: number) {
  const map = [
    "bg-white/[0.06]",
    "bg-sky-500/22",
    "bg-sky-500/38",
    "bg-sky-500/55",
    "bg-sky-400/75",
  ] as const;
  return map[level] ?? map[0];
}

export function ContributionHeatmap({ contributions }: { contributions: ContributionDay[] }) {
  const weeks = buildContributionWeeks(contributions);

  return (
    <div className="overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="inline-grid grid-flow-col gap-[3px]" role="img" aria-label="GitHub contributions calendar">
        {weeks.map((week, wi) => (
          <div key={wi} className="grid grid-rows-7 gap-[3px]">
            {week.map((day) => (
              <div
                key={day.date}
                title={`${day.date}: ${day.count} contributions`}
                className={`size-[10px] rounded-[2px] sm:size-[11px] ${cellClass(intensity(day))}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
