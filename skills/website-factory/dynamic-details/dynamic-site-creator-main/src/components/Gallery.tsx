import { Button } from "@/components/ui/button";
import ba1 from "@/assets/before-after-1.jpg";
import ba2 from "@/assets/before-after-2.jpg";
import ba3 from "@/assets/before-after-3.jpg";

const images = [
  { src: ba1, alt: "Before and after exterior detailing in San Antonio" },
  { src: ba2, alt: "Before and after interior detailing San Antonio" },
  { src: ba3, alt: "Before and after ceramic coating San Antonio" },
];

const Gallery = () => (
  <section id="gallery" className="py-20 px-4 border-t border-border">
    <div className="container mx-auto">
      <h2 className="font-display text-3xl md:text-5xl font-bold text-center text-cream tracking-wider mb-4">
        BEFORE & AFTER
      </h2>
      <p className="text-center text-muted-foreground mb-12">
        Follow us{" "}
        <a
          href="https://instagram.com/dynamic.detailzz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          @dynamic.detailzz
        </a>{" "}
        for more transformations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <div key={i} className="rounded-xl overflow-hidden border border-border shadow-[var(--shadow-card)]">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button variant="book" size="xl" asChild>
          <a href="#services">BOOK NOW</a>
        </Button>
      </div>
    </div>
  </section>
);

export default Gallery;
