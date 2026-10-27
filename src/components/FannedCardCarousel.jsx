// src/components/FannedCardCarousel.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowLeftRight } from 'lucide-react';

const SHOWCASE_CARDS = [
  {
    id: 'halal-grill',
    title: 'Halal Grill Eats',
    subtitle: 'QSR & Fast Casual',
    domain: 'app.engivo.com/halal-grill',
    badge: 'Customer PWA',
    image: '/engivo-app-halalgrill.png',
    tag: 'Halal Grill Eats'
  },
  {
    id: 'mumbai-spice',
    title: 'Mumbai Spice',
    subtitle: 'Fine Dining & Hospitality',
    domain: 'app.engivo.com/mumbai-spice',
    badge: 'Customer PWA',
    image: '/engivo-app-mumbaispice.png',
    tag: 'Mumbai Spice'
  },
  {
    id: 'royal-pearl',
    title: 'Royal Pearl Bakery',
    subtitle: 'Bakery, Cafe & Retail',
    domain: 'app.engivo.com/royal-pearl',
    badge: 'Customer PWA',
    image: '/engivo-app-royalpearl.png',
    tag: 'Royal Pearl Bakery'
  }
];

export default function FannedCardCarousel() {
  const [activeIdx, setActiveIdx] = useState(0);

  const paginate = (newDirection) => {
    setActiveIdx((prev) => (prev + newDirection + SHOWCASE_CARDS.length) % SHOWCASE_CARDS.length);
  };

  return (
    <div className="w-full flex flex-col items-center select-none">
      {/* 3D Fanned Card Stack Container */}
      <div className="relative w-full max-w-[320px] h-[520px] sm:h-[550px] flex items-center justify-center">
        {SHOWCASE_CARDS.map((card, i) => {
          // Calculate relative offset from active card: 0 = front, 1 = right, 2 = left
          const offset = (i - activeIdx + SHOWCASE_CARDS.length) % SHOWCASE_CARDS.length;
          const isFront = offset === 0;

          // Fanning transformations
          let x = 0;
          let y = 0;
          let rotate = 0;
          let scale = 1;
          let zIndex = 30;
          let opacity = 1;
          let brightness = 'brightness(1)';

          if (offset === 1) {
            // Fanned out to the right
            x = 28;
            y = 10;
            rotate = 6;
            scale = 0.92;
            zIndex = 20;
            opacity = 0.82;
            brightness = 'brightness(0.78)';
          } else if (offset === 2) {
            // Fanned out to the left
            x = -28;
            y = 10;
            rotate = -6;
            scale = 0.92;
            zIndex = 10;
            opacity = 0.82;
            brightness = 'brightness(0.78)';
          }

          return (
            <motion.div
              key={card.id}
              className="absolute top-2 w-[255px] sm:w-[270px] cursor-grab active:cursor-grabbing origin-bottom"
              style={{
                zIndex,
                touchAction: 'pan-y'
              }}
              animate={{
                x,
                y,
                rotate,
                scale,
                opacity,
                filter: brightness
              }}
              transition={{
                type: 'spring',
                stiffness: 320,
                damping: 26
              }}
              drag={isFront ? 'x' : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.65}
              onDragEnd={(e, { offset: dragOffset, velocity }) => {
                const swipeThreshold = 45;
                if (dragOffset.x < -swipeThreshold || velocity.x < -200) {
                  paginate(1);
                } else if (dragOffset.x > swipeThreshold || velocity.x > 200) {
                  paginate(-1);
                }
              }}
              onClick={() => {
                if (!isFront) {
                  setActiveIdx(i);
                }
              }}
              whileHover={!isFront ? { scale: 0.95, opacity: 0.95, filter: 'brightness(0.92)' } : undefined}
            >
              {/* Phone Mockup Frame */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800 bg-slate-950 ring-1 ring-white/10">
                {/* Browser bar */}
                <div className="bg-slate-900 text-[11px] text-slate-400 px-3 py-1.5 flex items-center justify-between border-b border-slate-800">
                  <span className="font-semibold text-white flex items-center gap-1.5 truncate max-w-[160px]">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                    {card.domain}
                  </span>
                  <span className="text-[10px] text-slate-400 shrink-0">{card.badge}</span>
                </div>

                {/* Screenshot viewport */}
                <div className="relative overflow-hidden bg-slate-950 aspect-[470/1000] max-h-[460px] sm:max-h-[490px]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover object-top select-none pointer-events-none"
                    draggable={false}
                  />

                  {/* Dark subtle overlay for non-active cards */}
                  {!isFront && (
                    <div className="absolute inset-0 bg-slate-950/25 transition-opacity pointer-events-none" />
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Brand Switcher Pills */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 pt-3 max-w-[320px]">
        {SHOWCASE_CARDS.map((card, idx) => (
          <button
            key={card.id}
            onClick={() => setActiveIdx(idx)}
            className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
              activeIdx === idx
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 ring-1 ring-blue-400'
                : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
            }`}
          >
            {card.tag}
          </button>
        ))}
      </div>

      {/* Navigation Controls: Arrows & Dots */}
      <div className="flex items-center justify-between w-full max-w-[270px] pt-3">
        <button
          onClick={() => paginate(-1)}
          aria-label="Previous store theme"
          className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
        >
          <ChevronLeft size={16} />
        </button>

        <div className="flex items-center gap-1.5">
          {SHOWCASE_CARDS.map((card, idx) => (
            <button
              key={card.id}
              onClick={() => setActiveIdx(idx)}
              aria-label={`Switch to ${card.title}`}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                activeIdx === idx ? 'w-6 bg-blue-500' : 'w-2 bg-slate-600 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => paginate(1)}
          aria-label="Next store theme"
          className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Swipe Instruction Hint */}
      <div className="text-[11px] text-slate-400 flex items-center gap-1.5 pt-2">
        <ArrowLeftRight size={12} className="text-blue-400 animate-pulse" />
        <span>Swipe or tap cards to flip between themes</span>
      </div>
    </div>
  );
}
