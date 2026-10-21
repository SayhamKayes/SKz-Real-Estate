import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Check } from 'lucide-react';
import { PORTFOLIO_SHOWCASE_ITEMS } from '../../data/portfolioShowcaseData.js';

export default function PortfolioShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const totalSlides = PORTFOLIO_SHOWCASE_ITEMS.length;

  // Track scroll position inside the 500vh container to determine active slide
  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const totalScrollable = rect.height - windowHeight;

    if (totalScrollable <= 0) return;

    // Progress from 0 to 1 as the user scrolls through the container
    const rawProgress = -rect.top / totalScrollable;
    const clampedProgress = Math.min(Math.max(rawProgress, 0), 0.999);

    const newIndex = Math.min(
      Math.floor(clampedProgress * totalSlides),
      totalSlides - 1
    );

    setActiveIndex(newIndex);
  }, [totalSlides]);

  useEffect(() => {
    let animationFrameId;

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [handleScroll]);

  const currentItem = PORTFOLIO_SHOWCASE_ITEMS[activeIndex];

  return (
    <section
      ref={containerRef}
      id="portfolio-showcase"
      className="relative w-full h-[450vh] sm:h-[500vh] bg-stone-950"
      aria-label="Architectural Portfolio Showcase"
    >
      {/* 100vh Sticky Viewport pinned while scrolling */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-between">
        
        {/* Fullscreen Background Images Layer with Vertical Parallax Curtain Slide-Up Effect */}
        <div className="absolute inset-0 w-full h-full select-none pointer-events-none overflow-hidden bg-black">
          {PORTFOLIO_SHOWCASE_ITEMS.map((item, idx) => {
            const isActive = idx === activeIndex;
            const isPast = idx < activeIndex;

            // Luxury Parallax Vertical Curtain Slide-Up calculation:
            // Past slides recede slightly upward and dim for spatial depth
            // Active slide rests at 0%
            // Future slides wait below at 100% and slide up when active
            let transform = 'translate3d(0, 100%, 0) scale(1.04)';
            let opacity = 0;
            let zIndex = idx + 1;
            let filter = 'brightness(1)';
            let boxShadow = 'none';

            if (isActive) {
              transform = 'translate3d(0, 0%, 0) scale(1)';
              opacity = 1;
              zIndex = 10;
              boxShadow = '0 -30px 60px rgba(0, 0, 0, 0.7)';
            } else if (isPast) {
              transform = 'translate3d(0, -14%, 0) scale(0.96)';
              opacity = 0.55;
              zIndex = idx;
              filter = 'brightness(0.6)';
            } else {
              transform = 'translate3d(0, 100%, 0) scale(1.04)';
              opacity = 0;
              zIndex = 20 + idx;
            }

            return (
              <div
                key={item.id}
                className="absolute inset-0 w-full h-full will-change-transform"
                style={{
                  transform,
                  opacity,
                  zIndex,
                  filter,
                  boxShadow,
                  transition: 'transform 850ms cubic-bezier(0.16, 1, 0.3, 1), opacity 500ms ease, filter 850ms ease',
                }}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />
              </div>
            );
          })}

          {/* Cinematic Vignette & Ambient Gradient Overlays for High Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60 pointer-events-none z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-black/75 pointer-events-none z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.7)_100%)] pointer-events-none z-10" />
        </div>

        {/* Main Content: Clean Architectural Overlay Box on LEFT, Monumental Typography on RIGHT */}
        <div className="relative z-30 w-full h-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 flex flex-col lg:flex-row items-center justify-between py-12 md:py-16 gap-6 md:gap-12">
          
          {/* ======================================================== */}
          {/* LEFT: Clean Minimal Architectural Overlay Card */}
          {/* ======================================================== */}
          <div className="w-full max-w-[400px] sm:max-w-[440px] lg:max-w-[450px] xl:max-w-[480px] shrink-0 self-center lg:self-center">
            <div className="bg-white/95 backdrop-blur-2xl border border-stone-200/90 rounded-2xl sm:rounded-3xl p-6 sm:p-8 xl:p-9 shadow-[0_30px_70px_rgba(0,0,0,0.45)] relative overflow-hidden">
              
              {/* Subtle Luxury Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#DFBA73] via-[#B48C57] to-[#8C6B38]" />

              {/* Card Header: Clean Architectural Slide Counter */}
              <div className="flex items-baseline pb-3 border-b border-stone-100 select-none">
                <span
                  key={`num-${activeIndex}`}
                  className="font-mono text-2xl sm:text-3xl font-medium tracking-tight text-stone-900 animate-luxury-number inline-block"
                >
                  {currentItem.number}
                </span>
                <span className="text-stone-300 font-sans mx-2.5 text-lg font-light leading-none">
                  -
                </span>
                <span className="text-stone-400 font-mono text-base font-normal">
                  0{totalSlides}
                </span>
              </div>

              {/* Card Title with Smooth Blur Slide-Up Animation */}
              <div className="mt-4 mb-2 overflow-hidden">
                <h3
                  key={`title-${activeIndex}`}
                  className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 tracking-tight leading-snug animate-luxury-slide-up"
                >
                  {currentItem.title}
                </h3>
              </div>

              {/* Inner Thumbnail Preview Window with Smooth Zoom Reveal (Removed Spec Badge) */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden border border-stone-200 shadow-sm bg-stone-100 my-4 group/thumb">
                <img
                  key={`thumb-${currentItem.id}`}
                  src={currentItem.image}
                  alt={currentItem.alt}
                  className="w-full h-full object-cover animate-luxury-zoom"
                />
              </div>

              {/* Description Body with Smooth Slide-Up Reveal */}
              <div className="overflow-hidden min-h-[58px]">
                <p
                  key={`desc-${activeIndex}`}
                  className="text-stone-600 font-sans text-xs sm:text-[13px] leading-relaxed animate-luxury-slide-up"
                >
                  {currentItem.description}
                </p>
              </div>

              {/* Key Specs Highlights with Smooth Fade-In */}
              <div className="mt-4 pt-3.5 border-t border-stone-100">
                <ul
                  key={`specs-${activeIndex}`}
                  className="space-y-2 text-xs text-stone-700 animate-luxury-slide-up"
                >
                  {currentItem.specs.map((spec, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <Check className="w-3.5 h-3.5 text-[#B48C57] shrink-0" />
                      <span className="truncate">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT: Monumental Architectural Headline */}
          {/* ======================================================== */}
          <div className="w-full lg:flex-1 flex flex-col items-center lg:items-end text-center lg:text-right select-none self-end lg:self-end pb-4 lg:pb-8">
            
            {/* Architectural Eyebrow */}
            <div className="hidden lg:flex items-center gap-3 mb-3 text-xs uppercase tracking-[0.3em] font-mono text-stone-300">
              <span className="w-10 h-px bg-[#DFBA73]" />
              <span className="text-[#DFBA73]">ARCHITECTURAL MASTERWORK</span>
            </div>

            {/* Monumental Headline: "ALL EYES ON DESIGNS" with Custom Gold Accent */}
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[96px] 2xl:text-[112px] font-normal leading-[0.92] tracking-tight uppercase text-white drop-shadow-2xl">
              <span className="block text-white/95">All Eyes</span>
              <span className="block bg-gradient-to-r from-[#FFF5E1] via-[#DFBA73] to-[#B48C57] bg-clip-text text-transparent font-medium">
                On Designs
              </span>
            </h2>

            {/* Bottom Supporting Caption & Dynamic Slide Indicator */}
            <div className="mt-4 sm:mt-6 hidden sm:flex items-center gap-4 text-xs font-mono tracking-widest text-white/60 uppercase">
              <span
                key={`caption-title-${activeIndex}`}
                className="animate-luxury-slide-up inline-block"
              >
                {currentItem.title.replace('.', '')}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#DFBA73]" />
              <span>EDITION {currentItem.number} OF 0{totalSlides}</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
