"use client";
import { randomUUID } from "crypto";
import { useState } from "react";

export function GroupList({
  groups,
}: {
  groups: { group: string; reason: string }[];
}) {
  return (
    <div className="w-full h-full p-4">
      You text is going to offend(Click to expand):
      {groups.map((item) => {
        return (
          <ListItem key={item.group} group={item.group} reason={item.reason} />
        );
      })}
    </div>
  );
}

function ListItem({ group, reason }: { group: string; reason: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-slate-700 p-2  m-1 rounded-xl transition-[height] duration-200">
      <div
        onClick={() => setOpen(!open)}
        className="text-white text-xl cursor-pointer"
      >
        {open ? "⮟" : "⮞"} {group}
      </div>
      {open && (
        <div className="border-t-2 border-slate-400 text-slate-100 p-2">
          {reason}
        </div>
      )}
    </div>
  );
}
