"use client";

import Link from "next/link";
import React, { useRef, useState } from "react";



export default function NavbarMenu({items}:any) {
  const containerRef = useRef<HTMLUListElement>(null);

  const [style, setStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const moveIndicator = (el: HTMLLIElement) => {
    const rect = el.getBoundingClientRect();
    const parentRect =
      containerRef.current!.getBoundingClientRect();

    setStyle({
      left: rect.left - parentRect.left,
      width: rect.width,
      opacity: 1,
    });
  };

  const hideIndicator = () => {
    setStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <ul
      ref={containerRef}
      className="relative hidden md:flex items-center gap-2"
      onMouseLeave={hideIndicator}
    >
      {/* 🔥 SINGLE HOVER BACKGROUND */}
      <div
        className="absolute top-0 h-full bg-brand  rounded-full transition-all duration-300 ease-out pointer-events-none"
        style={{
          left: style.left,
          width: style.width,
          opacity: style.opacity,
        }}
      />

      {items.map((item : any) => (
        <li
          key={item.label}
          onMouseEnter={(e) =>
            moveIndicator(e.currentTarget)
          }
          className="relative px-4 py-2 cursor-pointer z-10 text-gray-700 hover:text-white  transition-all duration-300 ease-out"
        >
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
}
