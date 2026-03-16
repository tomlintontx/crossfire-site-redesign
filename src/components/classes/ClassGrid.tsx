"use client";

import { useState } from "react";
import { classes, ClassCategory, categoryLabels } from "@/data/classes";
import ClassCard from "./ClassCard";
import { cn } from "@/lib/utils";

type FilterValue = ClassCategory | "all";

const filters: FilterValue[] = ["all", "toddler", "girls", "ninja", "tumbling", "team"];

export default function ClassGrid() {
  const [active, setActive] = useState<FilterValue>("all");

  const filtered =
    active === "all" ? classes : classes.filter((c) => c.category === active);

  return (
    <div>
      {/* Sticky filter bar */}
      <div className="sticky top-16 md:top-20 z-20 bg-white/95 backdrop-blur border-b border-slate-100 py-3 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 mb-8">
        <div className="max-w-7xl mx-auto flex gap-2 overflow-x-auto pb-0.5">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-150",
                active === f
                  ? "bg-brand-orange text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              )}
            >
              {categoryLabels[f]}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((cls) => (
          <ClassCard key={cls.id} gymClass={cls} mode="full" />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-16 text-center text-slate-400">
          No classes found for this category.
        </div>
      )}
    </div>
  );
}
