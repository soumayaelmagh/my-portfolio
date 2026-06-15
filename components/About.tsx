"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function useTypewriter(text: string, speed = 40, active = true) {
  const [out, setOut] = useState("");
  useEffect(() => {
    if (!active) return;
    let i = 0; const id = setInterval(() => {
      setOut((p) => p + text[i]); i++; if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed, active]);
  return out;
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const text = " I am a product manager with a full-stack engineering background, focused on turning user problems into clear product decisions, practical roadmaps, and well-scoped solutions. My developer experience helps me collaborate closely with engineering teams, understand technical tradeoffs, and keep products both useful and buildable.";
  const typed = useTypewriter(text, 22, inView);

  return (
    <motion.section id="about" ref={ref} className="px-8 py-20 max-w-4xl mx-auto text-center"
      initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .7 }}>
      <h2 className="text-3xl font-semibold mb-6">About Me</h2>
      <p className="text-gray-300 text-lg leading-relaxed">{typed}<span className="text-yellow-400">{inView && "|"}</span></p>
    </motion.section>
  );
}
