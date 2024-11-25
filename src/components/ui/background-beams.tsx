"use client";
import { cn } from "@/lib/utils";
import React from "react";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 z-0 overflow-hidden",
        className
      )}
    >
      <div
        className="absolute -inset-[10px] opacity-50"
        style={{
          background:
            "linear-gradient(to right, #00000000 0%, #00000040 20%, #00000060 60%, #00000000 100%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/70" />
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
    </div>
  );
};
