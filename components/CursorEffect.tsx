"use client";
import { useEffect, useRef } from "react";

export default function CursorEffect() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.cursor = "none";

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let ringX = 0, ringY = 0;

    const onMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      // Dot follows instantly
      dot.style.left = x + "px";
      dot.style.top = y + "px";

      // Ring follows with delay
      setTimeout(() => {
        ringX = x;
        ringY = y;
        ring.style.left = ringX + "px";
        ring.style.top = ringY + "px";
      }, 80);
    };

    const onEnter = () => ring.classList.add("cursor-grow");
    const onLeave = () => ring.classList.remove("cursor-grow");

    window.addEventListener("mousemove", onMove);

    const addListeners = () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };
    addListeners();

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          width: 6,
          height: 6,
          borderRadius: "50%",
          backgroundColor: "#00c2ff",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
          left: "-100px",
          top: "-100px",
        }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          position: "fixed",
          width: 28,
          height: 28,
          borderRadius: "50%",
          border: "1.5px solid #8b5cf6",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9998,
          left: "-100px",
          top: "-100px",
          transition: "transform 0.2s ease",
        }}
      />
    </>
  );
}
