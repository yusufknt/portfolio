"use client";

import { getSite } from "@/content/getSite";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useLocale } from "./LocaleProvider";

export function CommandPalette() {
  const locale = useLocale();
  const router = useRouter();
  const site = getSite(locale);
  const [open, setOpen] = useState(false);
  const l = site.labels;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  const item =
    "flex cursor-pointer items-center rounded-lg px-3 py-2 text-[14px] text-slate-300 data-[selected=true]:bg-white/[0.06] data-[selected=true]:text-white";

  return (
    <Command.Dialog
      label={l.commandPaletteLabel}
      open={open}
      onOpenChange={setOpen}
      overlayClassName="fixed inset-0 z-[90] bg-black/55 backdrop-blur-sm"
      contentClassName="fixed left-1/2 top-[12vh] z-[100] w-[min(94vw,480px)] -translate-x-1/2 overflow-hidden rounded-xl border border-white/[0.06] bg-[#0c1322] shadow-[0_32px_80px_-40px_rgba(0,0,0,0.65)]"
    >
      <Command.Input
        placeholder={l.commandPalettePlaceholder}
        className="h-12 w-full border-b border-white/[0.07] bg-transparent px-4 text-base text-slate-100 outline-none placeholder:text-slate-600"
      />
      <Command.List className="max-h-[min(52vh,420px)] overflow-y-auto p-2">
        <Command.Empty className="px-3 py-8 text-center text-sm text-slate-500">{l.commandPaletteEmpty}</Command.Empty>

        <Command.Group
          heading={l.commandPaletteLabel}
          className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:pb-2 [&_[cmdk-group-heading]]:pt-3 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-[0.22em] [&_[cmdk-group-heading]]:text-slate-500"
        >
          <Command.Item className={item} value={`${l.navWork} work showcase`} onSelect={() => go(`/${locale}#showcase`)}>
            {l.navWork}
          </Command.Item>
          <Command.Item className={item} value={`${l.navAbout} about github`} onSelect={() => go(`/${locale}#about`)}>
            {l.navAbout}
          </Command.Item>
          <Command.Item className={item} value={`${l.navContact} contact email`} onSelect={() => go(`/${locale}#contact`)}>
            {l.navContact}
          </Command.Item>
          <Command.Item
            className={item}
            value="GitHub profile opensource"
            onSelect={() => {
              setOpen(false);
              window.open(site.contact.github, "_blank", "noopener,noreferrer");
            }}
          >
            GitHub
          </Command.Item>
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
}
