import React from "react";

function SkillsTicker() {
  return (
    <div class="relative flex overflow-x-hidden bg-secondary-color text-white font-mono">
      <div class="py-8 animate-marquee whitespace-nowrap">
        <span class="text-4xl mx-4">Python</span>
        <span class="text-4xl mx-4">JS</span>
        <span class="text-4xl mx-4">Java</span>
        <span class="text-4xl mx-4">C++</span>
        <span class="text-4xl mx-4">React Tailwind Redux</span>
        <span class="text-4xl mx-4">Node.js</span>
        <span class="text-4xl mx-4">Next.js</span>
        <span class="text-4xl mx-4">Flask</span>
        <span class="text-4xl mx-4">AWS Postgre SQL Azure</span>
      </div>
      <div class="absolute top-0 py-8 animate-marquee2 whitespace-nowrap">
      <span class="text-4xl mx-4">Python</span>
        <span class="text-4xl mx-4">JS</span>
        <span class="text-4xl mx-4">Java</span>
        <span class="text-4xl mx-4">C++</span>
        <span class="text-4xl mx-4">React Tailwind Redux</span>
        <span class="text-4xl mx-4">Node.js</span>
        <span class="text-4xl mx-4">Next.js</span>
        <span class="text-4xl mx-4">Flask</span>
        <span class="text-4xl mx-4">AWS Postgre SQL Azure</span>
      </div>
    </div>
  );
}

export default SkillsTicker;
