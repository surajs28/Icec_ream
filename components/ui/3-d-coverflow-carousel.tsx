"use client";

import React, { useCallback, useEffect, useId, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { signatureFlavours } from "@/src/signature-flavours";
import { cn } from "@/lib/utils";

export interface CarouselItem {
  tag?: string;
  titleLine1: string;
  titleLine2?: string;
  desc?: string;
  img: string;
  ctaText?: string;
  ctaUrl?: string;
  imgAlt?: string;
  imagePosition?: string;
}

export interface CoverFlowCarouselProps {
  items?: CarouselItem[];
  sectionLabel?: string;
  initialIndex?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  className?: string;
  onCtaClick?: (item: CarouselItem) => void;
}

export const defaultDishes: CarouselItem[] = signatureFlavours.map(flavour => ({
  titleLine1: flavour.name,
  img: "assets/signature-atlas.png",
  imagePosition: flavour.position,
  imgAlt: `Illustrative ${flavour.name} gelato in a glass dessert bowl`,
  ctaText: "Explore flavour",
  ctaUrl: `flavours.html?flavour=${encodeURIComponent(flavour.name)}#flavours`,
}));

/** Adapted from the supplied coverflow: same public API, with scoped keyboard
 * handling, safe empty/single/dynamic collections, responsive sizing and pause. */
export function CoverFlowCarousel({
  items = defaultDishes,
  sectionLabel = "Meet your next favourite.",
  initialIndex = 2,
  autoplay = true,
  autoplayDelay = 5000,
  className = "",
  onCtaClick,
}: CoverFlowCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(() => Math.max(0, Math.min(initialIndex, items.length - 1)));
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [visible, setVisible] = useState(true);
  const [documentVisible, setDocumentVisible] = useState(true);
  const [stageWidth, setStageWidth] = useState(1000);
  const [announcement, setAnnouncement] = useState("");
  const section = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const labelId = useId();
  const total = items.length;
  const index = total ? Math.min(currentIndex, total - 1) : 0;
  const active = items[index];
  const canRotate = autoplay && total > 1 && !hovered && !focused && !paused && !reduceMotion && visible && documentVisible;

  useEffect(() => { setCurrentIndex(prev => total ? Math.min(prev, total - 1) : 0); }, [total]);
  useEffect(() => {
    const query = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(query.matches || document.documentElement.classList.contains("motion-paused"));
    update(); query.addEventListener("change", update); window.addEventListener("gelato-motion", update);
    const visibility = () => setDocumentVisible(!document.hidden);
    visibility(); document.addEventListener("visibilitychange", visibility);
    return () => { query.removeEventListener("change", update); window.removeEventListener("gelato-motion", update); document.removeEventListener("visibilitychange", visibility); };
  }, []);
  useEffect(() => {
    if (!section.current || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(entries => setVisible(entries[0].isIntersecting), { threshold: .12 });
    observer.observe(section.current); return () => observer.disconnect();
  }, [total]);
  useEffect(() => {
    if (!stage.current) return;
    const update = () => setStageWidth(stage.current?.clientWidth || 1000); update();
    if (typeof ResizeObserver === "undefined") { window.addEventListener("resize", update); return () => window.removeEventListener("resize", update); }
    const observer = new ResizeObserver(update); observer.observe(stage.current); return () => observer.disconnect();
  }, [total]);

  const move = useCallback((delta: number, manual = true) => {
    if (total <= 1) return;
    if (manual) setPaused(true);
    setCurrentIndex(prev => { const next = (Math.min(prev, total - 1) + delta + total) % total;
      if (manual) setAnnouncement(`${items[next].titleLine1}, slide ${next + 1} of ${total}`); return next; });
  }, [items, total]);
  const goToSlide = (next: number) => { if (!total) return; setCurrentIndex(next); setPaused(true); setAnnouncement(`${items[next].titleLine1}, slide ${next + 1} of ${total}`); };
  useEffect(() => {
    if (!canRotate) return;
    const interval = window.setInterval(() => move(1, false), Math.max(3000, autoplayDelay));
    return () => window.clearInterval(interval);
  }, [canRotate, autoplayDelay, move]);

  if (!total || !active) return null;
  const cardWidth = Math.min(330, Math.max(240, stageWidth * .77));
  const step = stageWidth < 600 ? cardWidth * .77 : 285;
  const transition = reduceMotion ? "none" : "transform 650ms cubic-bezier(.25,1,.5,1), opacity 450ms ease-out";

  return (
    <section ref={section} className={cn("coverflow relative isolate w-full overflow-hidden", className)}
      role="region" aria-roledescription="carousel" aria-labelledby={labelId}
      onPointerEnter={e => { if (e.pointerType === "mouse") setHovered(true); }} onPointerLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)} onBlurCapture={e => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setFocused(false); }}
      onKeyDown={e => {
        if ((e.target as HTMLElement).matches("input,select,textarea") || e.altKey || e.ctrlKey || e.metaKey) return;
        if (e.key === "ArrowLeft") { e.preventDefault(); move(-1); }
        if (e.key === "ArrowRight") { e.preventDefault(); move(1); }
        if (e.key === "Home") { e.preventDefault(); goToSlide(0); }
        if (e.key === "End") { e.preventDefault(); goToSlide(total - 1); }
      }}>
      <div className="coverflow-inner relative z-10 mx-auto flex w-full flex-col items-center">
        <div className="coverflow-heading"><div><h2 id={labelId}>{sectionLabel}</h2><p>Six signature flavours, made for your next visit.</p></div><a className="btn outline" href="flavours.html">View full menu<ArrowRight size={18} aria-hidden="true" /></a></div>
        <div ref={stage} className="coverflow-stage relative flex w-full items-center justify-center"
          style={{ perspective: "1400px", touchAction: "pan-y" }}
          onTouchStart={e => { if (e.touches.length === 1) touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }; }}
          onTouchCancel={() => { touchStart.current = null; }}
          onTouchEnd={e => { const start = touchStart.current; touchStart.current = null; if (!start || !e.changedTouches[0]) return;
            const dx = e.changedTouches[0].clientX - start.x, dy = e.changedTouches[0].clientY - start.y;
            if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.25) move(dx < 0 ? 1 : -1); }}>
          {items.map((item, idx) => {
            const rawOffset = (idx - index + total) % total;
            const offset = rawOffset > total / 2 ? rawOffset - total : rawOffset;
            const distance = Math.abs(offset), center = distance === 0, shown = distance <= 2;
            const scale = distance === 0 ? 1 : distance === 1 ? .84 : .68;
            const x = offset * (distance > 1 ? step * .89 : step);
            const turn = offset === 0 ? 0 : offset > 0 ? -(distance === 1 ? 12 : 20) : distance === 1 ? 12 : 20;
            return (
              <article key={`${item.titleLine1}-${idx}`} className="coverflow-card" role="group" aria-roledescription="slide"
                aria-label={`${idx + 1} of ${total}: ${item.titleLine1}`} aria-hidden={!center}
                style={{ width: cardWidth, transform: `translateX(${x}px) scale(${scale}) rotateY(${reduceMotion ? 0 : turn}deg)`, opacity: shown ? center ? 1 : distance === 1 ? 1 : .92 : 0,
                  zIndex: 30 - distance * 10, transition, pointerEvents: shown ? "auto" : "none" }}>
                {item.imagePosition ? <div className="coverflow-photo atlas-photo" role="img" aria-label={item.imgAlt || item.titleLine1}
                  style={{ backgroundImage: `url(${item.img})`, backgroundPosition: item.imagePosition }} /> :
                  <img className="coverflow-photo" src={item.img} alt={item.imgAlt || item.titleLine1} loading="lazy" decoding="async" />}
                {!center && shown && <button className="coverflow-select" type="button" tabIndex={-1} onClick={() => goToSlide(idx)} aria-label={`Show ${item.titleLine1}`} />}
                <div className="coverflow-content" style={{ opacity: 1, pointerEvents: center ? "auto" : "none", transition: reduceMotion ? "none" : "opacity 300ms ease-out" }}>
                  
                  <div className="coverflow-body"><h3>{item.titleLine1}</h3>{item.titleLine2 && <p className="coverflow-subtitle">{item.titleLine2}</p>}
                    {item.desc && <p className="coverflow-description">{item.desc}</p>}
                    <a className="coverflow-cta" href={item.ctaUrl || "#flavours"} tabIndex={center ? 0 : -1}
                      onClick={e => { if (onCtaClick) { e.preventDefault(); onCtaClick(item); } }}>
                      {item.ctaText || "View menu"}<ArrowRight size={16} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <div className="coverflow-controls flex items-center justify-center">
          <button className="coverflow-arrow" type="button" onClick={() => move(-1)} aria-label="Previous flavour" disabled={total <= 1}><ChevronLeft size={21} aria-hidden="true" /></button>
          <div className="coverflow-dots flex items-center justify-center" aria-label="Choose a flavour">
            {items.map((item, idx) => <button type="button" key={idx} className="coverflow-dot" onClick={() => goToSlide(idx)} aria-label={`Show ${item.titleLine1}, slide ${idx + 1}`} aria-current={idx === index ? "true" : undefined}><span /></button>)}
          </div>
          <button className="coverflow-arrow" type="button" onClick={() => move(1)} aria-label="Next flavour" disabled={total <= 1}><ChevronRight size={21} aria-hidden="true" /></button>
          {autoplay && total > 1 && <button className="coverflow-arrow coverflow-pause" type="button" disabled={reduceMotion} onClick={() => setPaused(value => !value)}
            aria-label={reduceMotion ? "Autoplay disabled by motion preference" : paused ? "Start autoplay" : "Pause autoplay"} aria-pressed={paused || reduceMotion}>
            {paused || reduceMotion ? <Play size={17} aria-hidden="true" /> : <Pause size={17} aria-hidden="true" />}
          </button>}
        </div>
        <p className="coverflow-credit">Illustrative product photography. Final recipes and availability to be confirmed.</p>
        <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">{announcement}</p>
      </div>
    </section>
  );
}

export const Component = CoverFlowCarousel;
export default CoverFlowCarousel;

