import { createRoot } from "react-dom/client";
import { CoverFlowCarousel, type CarouselItem } from "@/components/ui/3-d-coverflow-carousel";

const container = document.getElementById("menu-coverflow");
if (container) createRoot(container).render(<CoverFlowCarousel onCtaClick={(item: CarouselItem) => {
  const layer = document.getElementById("layer-1") as HTMLSelectElement | null;
  if (!layer) { location.hash = "flavours"; return; }
  const flavour = Array.from(layer.options).some(option => option.value === item.titleLine1);
  if (flavour) {
    layer.value = item.titleLine1;
    layer.dispatchEvent(new Event("change", { bubbles: true }));
  }
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches || document.documentElement.classList.contains("motion-paused");
  document.getElementById("builder")?.scrollIntoView({ behavior: reduced ? "instant" : "smooth" });
  layer.focus({ preventScroll: true });
  const status = document.getElementById("mix-status");
  if (status) status.textContent = flavour ? `${item.titleLine1} added to your first scoop. Choose your other layers below.` : "Choose three flavours below to create your own pint.";
}} />);
