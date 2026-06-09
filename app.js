import React, { useEffect, useMemo, useState } from "https://esm.sh/react@18.2.0";
import { createRoot } from "https://esm.sh/react-dom@18.2.0/client";
import htm from "https://esm.sh/htm@3.1.1";
import { AnimatePresence, motion } from "https://esm.sh/framer-motion@11.11.17?deps=react@18.2.0,react-dom@18.2.0";
import gsap from "https://esm.sh/gsap@3.12.5";
import { ScrollTrigger } from "https://esm.sh/gsap@3.12.5/ScrollTrigger";
import Lenis from "https://esm.sh/@studio-freight/lenis@1.0.42";
import {
  ArrowRight,
  Award,
  Building2,
  CalendarCheck,
  ChefHat,
  ChevronDown,
  Flame,
  Mail,
  Menu,
  Phone,
  Send,
  Sparkles,
  Star,
  Utensils,
  Wine,
  X,
} from "https://esm.sh/lucide-react@0.468.0?deps=react@18.2.0";

const html = htm.bind(React.createElement);
gsap.registerPlugin(ScrollTrigger);

const heroVideo = "https://assets.mixkit.co/videos/preview/mixkit-chef-decorating-a-plate-of-food-42729-large.mp4";
const heroPoster = "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1800&q=88";

const storySlides = [
  {
    title: "Every Celebration Begins With A Dream",
    copy: "Before the menu, before the table, before the first welcome drink, there is a feeling the host wants guests to remember.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1800&q=86",
  },
  {
    title: "Our Kitchen Never Stops Moving",
    copy: "The Active Kuzina is timing, heat, hands, rhythm, and care working together behind the scenes.",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1800&q=86",
  },
  {
    title: "Precision. Passion. Perfection.",
    copy: "Each counter, garnish, service route, and plated course is planned so the experience feels effortless.",
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1800&q=86",
  },
];

const experiences = [
  {
    icon: Flame,
    title: "Live Kitchens",
    copy: "Chef-led stations where flame, fragrance, and movement turn service into theatre.",
  },
  {
    icon: Sparkles,
    title: "Visual Styling",
    copy: "Buffets, counters, and plated details composed to match the occasion and venue.",
  },
  {
    icon: Utensils,
    title: "Thematic Menus",
    copy: "Regional classics, global influences, and personal favourites shaped into one story.",
  },
  {
    icon: Building2,
    title: "Institutional Dining",
    copy: "Reliable food operations for venues, campuses, offices, and recurring service needs.",
  },
];

const events = [
  {
    tag: "Wedding",
    title: "Royal Hyderabad Wedding",
    guests: "1,200 guests",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1400&q=86",
  },
  {
    tag: "Corporate",
    title: "Annual Leadership Dinner",
    guests: "480 guests",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1400&q=86",
  },
  {
    tag: "Private",
    title: "Candlelit Anniversary Table",
    guests: "80 guests",
    image: "https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=1400&q=86",
  },
];

const journey = [
  ["01", "Discover", "We learn your occasion, guest profile, venue, rituals, and service format."],
  ["02", "Design", "Chefs curate the menu architecture, live stations, and beverage story."],
  ["03", "Serve", "The team executes with warmth, precision, and a pace that lets hosts stay present."],
];

const chefs = [
  {
    name: "Chef Arjun Rao",
    role: "Executive Chef",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=900&q=86",
  },
  {
    name: "Chef Meera Shah",
    role: "Menu Curator",
    image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=900&q=86",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=86",
  "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=1000&q=86",
  "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=86",
  "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=1000&q=86",
];

const testimonials = [
  [
    "The mocktails were delicious, the starters were unique, and every plate felt refined. They understand what high-quality food should feel like.",
    "Mrs. Deepa Rajan Karri",
    "IT Consultant",
  ],
  [
    "Every flavour had meaning and every detail felt taken care of. Our guests enjoyed the evening completely.",
    "Ananya & Kunal",
    "Wedding Hosts",
  ],
];

const faqs = [
  ["Do you customize every menu?", "Yes. Every menu is curated around the occasion, guest count, cuisine preferences, and dietary requirements."],
  ["Can you manage large weddings?", "Yes. The Steam Engine is positioned for premium social events, corporate catering, and institutional operations."],
];

function WordReveal({ text, className = "" }) {
  const words = useMemo(() => text.split(" "), [text]);
  return html`
    <span className=${`word-reveal ${className}`} aria-label=${text}>
      ${words.map(
        (word, index) =>
          html`<span className="word" aria-hidden="true" key=${`${word}-${index}`}>${word}</span>`
      )}
    </span>
  `;
}

function LuxuryButton({
  href = "#contact",
  icon: Icon = ArrowRight,
  children,
  variant = "primary",
  type = "button",
  onClick,
  className = "",
}) {
  const isButton = type === "submit" || !!onClick;
  const classes = `${
    variant === "primary" ? "lux-button lux-button-primary group" : "lux-button lux-button-ghost group"
  } ${className}`;

  const content = html`
    <span>${children}</span>
    <${Icon}
      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110"
      aria-hidden="true"
    />
  `;

  if (isButton) {
    return html`
      <button type=${type} className=${classes} onClick=${onClick} data-magnetic="true">
        ${content}
      </button>
    `;
  }

  return html`
    <a href=${href} className=${classes} data-magnetic="true">
      ${content}
    </a>
  `;
}

function LoadingScreen({ progress }) {
  return html`
    <${motion.div}
      className="loading-screen"
      initial=${{ opacity: 1 }}
      exit=${{ opacity: 0, transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } }}
      aria-label="Loading The Steam Engine homepage"
    >
      <div className="loading-ring">
        <div className="text-center">
          <p className="micro-label mb-4">The Steam Engine</p>
          <p className="lux-heading text-5xl md:text-7xl">Active Kuzina</p>
          <div className="mx-auto mt-8 h-px w-52 overflow-hidden bg-cream/15">
            <div className="h-full bg-gold" style=${{ width: `${progress}%` }}></div>
          </div>
          <p className="mt-5 text-sm font-bold text-cream/55">${progress}%</p>
        </div>
      </div>
    </${motion.div}>
  `;
}

function Navigation({ open, setOpen }) {
  const links = [
    ["About", "#about"],
    ["Story", "#story"],
    ["Experiences", "#experiences"],
    ["Events", "#events"],
    ["Contact", "#contact"],
  ];

  return html`
    <header className="fixed left-0 right-0 top-4 z-80 px-4 md:top-6">
      <div className="glass-nav mx-auto flex max-w-7xl items-center justify-between gap-5 rounded-full p-2 pr-4 md:p-3 md:pr-6">
        <a href="#home" className="branding-container ml-1" aria-label="The Steam Engine home">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/20 bg-white/5 font-serif text-xl font-bold text-white shadow-lg">SE</span>
          <span className="min-w-0">
            <strong className="company-name block">The Steam Engine</strong>
            <small className="tagline-gold mt-1 block">The Active Kuzina</small>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-bold text-white/75 lg:flex" aria-label="Main navigation">
          ${links.map(([label, href]) => html`<a key=${href} className="transition hover:text-white" href=${href}>${label}</a>`)}
        </nav>

        <div className="hidden lg:block">
          <${LuxuryButton} href="#contact" icon=${CalendarCheck}>Book Event</${LuxuryButton}>
        </div>

        <button
          className="grid h-11 w-11 place-items-center rounded-full border border-cream/20 bg-cream/5 text-cream lg:hidden"
          type="button"
          aria-label=${open ? "Close navigation" : "Open navigation"}
          aria-expanded=${open}
          onClick=${() => setOpen(!open)}
        >
          ${open
            ? html`<${X} className="h-5 w-5" aria-hidden="true" />`
            : html`<${Menu} className="h-5 w-5" aria-hidden="true" />`}
        </button>
      </div>

      <${AnimatePresence}>
        ${open &&
        html`
          <${motion.nav}
            className="mobile-menu glass-nav mx-4 mt-3 grid gap-1 rounded-[24px] p-3 text-sm font-bold text-cream/78 lg:hidden"
            initial=${{ opacity: 0, scale: 0.96, y: -10 }}
            animate=${{ opacity: 1, scale: 1, y: 0 }}
            exit=${{ opacity: 0, scale: 0.96, y: -10 }}
            aria-label="Mobile navigation"
          >
            ${links.map(
              ([label, href]) =>
                html`<a key=${href} className="rounded-2xl px-4 py-3 hover:bg-cream/8" href=${href} onClick=${() => setOpen(false)}>${label}</a>`
            )}
            <${LuxuryButton} href="#contact" icon=${CalendarCheck} onClick=${() => setOpen(false)}>
              Book Event
            </${LuxuryButton}>
          </${motion.nav}>
        `}
      </${AnimatePresence}>
    </header>
  `;
}

function Hero({ loading }) {
  return html`
    <section id="home" className="hero-video-wrap relative min-h-screen overflow-hidden bg-ink">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        src=${heroVideo}
        poster=${heroPoster}
        autoPlay
        muted
        loop
        playsInline
      ></video>
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent"></div>
      <div className="parallax-bg absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(216,173,97,0.20),transparent_28%)]"></div>
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-end px-5 pb-16 pt-32 md:px-8 md:pb-20">
        <${motion.div}
          className="max-w-5xl lux-stagger"
          initial=${{ opacity: 0, y: 34 }}
          animate=${loading ? { opacity: 0, y: 34 } : { opacity: 1, y: 0 }}
          transition=${{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <p className="micro-label mb-6">Hyderabad premium catering</p>
          <h1 className="lux-heading max-w-5xl text-[16vw] text-cream sm:text-[11vw] lg:text-[112px] xl:text-[122px]">
            Celebrations, Served Cinematically.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-cream/72 md:text-xl md:leading-9">
            Custom menus, live kitchens, and luxury event dining crafted with precision for weddings, corporate evenings,
            private gatherings, and festive milestones.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <${LuxuryButton} href="#contact" icon=${Sparkles}>Get Quote</${LuxuryButton}>
            <${LuxuryButton} href="#story" icon=${ArrowRight} variant="ghost">Explore Services</${LuxuryButton}>
          </div>
        </${motion.div}>
      </div>
      <div className="absolute bottom-7 right-5 z-10 hidden rounded-full border border-cream/15 bg-cream/8 px-4 py-3 text-xs font-bold text-cream/60 backdrop-blur-2xl md:block">
        Scroll to orchestrate the experience
      </div>
    </section>
  `;
}

function About() {
  return html`
    <section id="about" className="snap-section section-pad relative bg-ink">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-[0.92fr_1.08fr] md:px-8">
        <div className="fade-rise">
          <p className="micro-label mb-5">About The Steam Engine</p>
          <h2 className="lux-heading text-5xl text-cream md:text-7xl lg:text-8xl">
            Hospitality that moves with precision.
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-9 text-cream/64">
            The Steam Engine brings calm execution to premium catering. The Active
            Kuzina is a kitchen in constant motion, where teamwork, timing, and taste create moments guests remember.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-4 border-y border-cream/10 py-7">
            <div>
              <strong className="block text-4xl font-black text-gold" data-count="120" data-suffix="+">0</strong>
              <span className="mt-1 block text-xs font-bold text-cream/42">Event Menus</span>
            </div>
            <div>
              <strong className="block text-4xl font-black text-gold" data-count="18" data-suffix="+">0</strong>
              <span className="mt-1 block text-xs font-bold text-cream/42">Live Formats</span>
            </div>
            <div>
              <strong className="block text-4xl font-black text-gold" data-count="6" data-suffix="">0</strong>
              <span className="mt-1 block text-xs font-bold text-cream/42">Service Lanes</span>
            </div>
          </div>
        </div>
        <div className="clip-reveal relative min-h-[520px] overflow-hidden rounded-[28px] shadow-luxury md:min-h-[680px]">
          <img className="ken-burns h-full min-h-[520px] w-full object-cover md:min-h-[680px]" src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1400&q=86" alt="Chef finishing a premium dish" />
          <div className="absolute inset-x-6 bottom-6 rounded-[24px] border border-cream/12 bg-ink/42 p-5 backdrop-blur-2xl">
            <p className="micro-label mb-2">The Active Kuzina</p>
            <p className="text-xl font-bold text-cream">A kitchen in constant motion, built for celebrations at scale.</p>
          </div>
        </div>
      </div>
      <div className="mt-16 overflow-hidden border-y border-cream/10 py-5">
        <div className="marquee text-sm font-bold text-cream/48">
          ${["Luxury Weddings", "Corporate Evenings", "Live Stations", "Premium Bar Service", "Festive Celebrations", "Institutional Dining", "Menu Curation", "Venue Partnerships", "Luxury Weddings", "Corporate Evenings", "Live Stations", "Premium Bar Service", "Festive Celebrations", "Institutional Dining", "Menu Curation", "Venue Partnerships"].map(
            (item, index) => html`<span key=${`${item}-${index}`} className="rounded-full border border-cream/10 px-5 py-3">${item}</span>`
          )}
        </div>
      </div>
    </section>
  `;
}

function StoryPinned() {
  return html`
    <section id="story" className="story-pin snap-section relative h-screen overflow-hidden bg-ink" aria-label="Pinned cinematic story">
      ${storySlides.map(
        (slide, index) => html`
          <article className="story-slide" key=${slide.title}>
            <img className="story-image absolute inset-0 h-full w-full object-cover" src=${slide.image} alt="" />
            <div className="story-parallax absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(216,173,97,0.18),transparent_34%)]"></div>
            <div className="relative z-10 mx-auto max-w-5xl px-5 text-center">
              <p className="micro-label mb-6">Chapter 0${index + 1}</p>
              <h2 className="story-title lux-heading text-5xl text-cream md:text-8xl lg:text-[116px]">${slide.title}</h2>
              <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-cream/72 md:text-xl">${slide.copy}</p>
            </div>
          </article>
        `
      )}
    </section>
  `;
}

function Experiences() {
  return html`
    <section id="experiences" className="snap-section section-pad relative bg-obsidian">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="fade-rise mb-14 max-w-4xl">
          <p className="micro-label mb-5">Signature Catering Experiences</p>
          <h2 className="lux-heading text-5xl text-cream md:text-7xl lg:text-8xl">
            Designed around the way your event should feel.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          ${experiences.map(
            (item) => html`
              <article key=${item.title} className="fade-rise group rounded-[28px] border border-cream/10 bg-cream/[0.045] p-7 shadow-luxury transition duration-500 hover:-translate-y-2 hover:border-gold/45 hover:bg-cream/[0.075]">
                <span className="grid h-13 w-13 place-items-center rounded-full bg-gold/12 text-gold">
                  <${item.icon} className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-10 font-serif text-4xl font-bold text-cream">${item.title}</h3>
                <p className="mt-4 leading-8 text-cream/58">${item.copy}</p>
              </article>
            `
          )}
        </div>
      </div>
    </section>
  `;
}

function HorizontalEvents() {
  return html`
    <section id="events" className="horizontal-pin snap-section relative flex h-screen items-center bg-ink py-12">
      <div className="absolute left-5 top-24 z-10 md:left-8">
        <p className="micro-label mb-4">Featured Events</p>
        <h2 className="lux-heading max-w-xl text-5xl text-cream md:text-7xl">Vertical scroll. Horizontal memories.</h2>
      </div>
      <div className="horizontal-track pl-[5vw] pr-[12vw] pt-28">
        ${events.map(
          (event) => html`
            <article key=${event.title} className="event-card clip-reveal relative overflow-hidden rounded-[32px] border border-cream/10 bg-charcoal shadow-luxury">
              <img className="ken-burns absolute inset-0 h-full w-full object-cover" src=${event.image} alt=${event.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/28 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-10">
                <p className="micro-label mb-3">${event.tag}</p>
                <h3 className="font-serif text-5xl font-bold leading-none text-cream md:text-6xl">${event.title}</h3>
                <p className="mt-4 font-bold text-cream/58">${event.guests}</p>
              </div>
            </article>
          `
        )}
      </div>
    </section>
  `;
}

function Journey() {
  return html`
    <section className="journey section-pad relative bg-ink">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="fade-rise mb-16 max-w-4xl">
          <p className="micro-label mb-5">Event Planning Journey</p>
          <h2 className="lux-heading text-5xl text-cream md:text-7xl lg:text-8xl">
            A scroll-driven timeline from first call to final memory.
          </h2>
        </div>
        <div className="relative grid gap-8 md:grid-cols-[120px_1fr]">
          <div className="relative hidden md:block">
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-cream/10"></div>
            <div className="journey-line absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gold"></div>
          </div>
          <div className="grid gap-6">
            ${journey.map(
              ([num, title, copy]) => html`
                <article key=${title} className="journey-item grid gap-5 rounded-[28px] border border-cream/10 bg-cream/[0.045] p-6 md:grid-cols-[90px_1fr] md:p-8">
                  <span className="font-serif text-6xl font-bold text-gold">${num}</span>
                  <div>
                    <h3 className="font-serif text-4xl font-bold text-cream md:text-5xl">${title}</h3>
                    <p className="mt-3 max-w-2xl leading-8 text-cream/60">${copy}</p>
                  </div>
                </article>
              `
            )}
          </div>
        </div>
      </div>
    </section>
  `;
}

function Chefs() {
  return html`
    <section className="section-pad relative bg-obsidian">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="fade-rise mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="micro-label mb-5">Meet Our Chefs</p>
            <h2 className="lux-heading max-w-4xl text-5xl text-cream md:text-7xl">The hands behind the memory.</h2>
          </div>
          <p className="max-w-sm leading-8 text-cream/58">
            A composed culinary team for live stations, curated menus, premium plating, and event-scale consistency.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          ${chefs.map(
            (chef) => html`
              <article key=${chef.name} className="fade-rise group overflow-hidden rounded-[30px] border border-cream/10 bg-cream/[0.045]">
                <div className="clip-reveal relative aspect-[4/5] overflow-hidden">
                  <img className="ken-burns h-full w-full object-cover" src=${chef.image} alt=${chef.name} />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-4xl font-bold text-cream">${chef.name}</h3>
                  <p className="mt-1 font-bold text-gold">${chef.role}</p>
                </div>
              </article>
            `
          )}
        </div>
      </div>
    </section>
  `;
}

function PremiumGallery() {
  return html`
    <section id="gallery" className="section-pad relative bg-ink">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="fade-rise mb-14 max-w-4xl">
          <p className="micro-label mb-5">Premium Gallery</p>
          <h2 className="lux-heading text-5xl text-cream md:text-7xl lg:text-8xl">A feast before the first bite.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          ${gallery.map(
            (src, index) => html`
              <figure key=${src} className="clip-reveal relative min-h-[340px] overflow-hidden rounded-[28px]">
                <img className="ken-burns h-full min-h-[340px] w-full object-cover" src=${src} alt="The Steam Engine hospitality gallery ${index + 1}" />
                <figcaption className="absolute bottom-4 left-4 rounded-full border border-cream/15 bg-ink/42 px-4 py-2 text-xs font-bold text-cream/70 backdrop-blur-xl">
                  Moment 0${index + 1}
                </figcaption>
              </figure>
            `
          )}
        </div>
      </div>
    </section>
  `;
}

function Testimonials() {
  return html`
    <section className="section-pad relative bg-obsidian">
      <div className="mx-auto max-w-5xl px-5 text-center md:px-8">
        <p className="micro-label mb-5">Client Testimonials</p>
        <${WordReveal}
          className="lux-heading block text-5xl text-cream md:text-7xl"
          text="Food remembered long after the lights go down."
        />
        <div className="mt-14 grid gap-5">
          ${testimonials.map(
            ([quote, name, role]) => html`
              <article key=${name} className="fade-rise rounded-[30px] border border-cream/10 bg-cream/[0.045] p-6 text-left md:p-9">
                <div className="mb-6 flex gap-1 text-gold">
                  ${[0, 1, 2, 3, 4].map((star) => html`<${Star} key=${star} className="h-4 w-4 fill-current" aria-hidden="true" />`)}
                </div>
                <p className="font-serif text-3xl font-semibold leading-tight text-cream md:text-5xl">"${quote}"</p>
                <strong className="mt-7 block text-gold">${name}</strong>
                <span className="mt-1 block text-sm font-bold text-cream/42">${role}</span>
              </article>
            `
          )}
        </div>
      </div>
    </section>
  `;
}

function FAQ() {
  return html`
    <section className="section-pad relative bg-ink">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.85fr_1.15fr] md:px-8">
        <div className="fade-rise">
          <p className="micro-label mb-5">FAQ</p>
          <h2 className="lux-heading text-5xl text-cream md:text-7xl">Before the tasting.</h2>
        </div>
        <div className="fade-rise divide-y divide-cream/10 border-y border-cream/10">
          ${faqs.map(
            ([question, answer]) => html`
              <details key=${question} className="group py-6" open=${question === faqs[0][0]}>
                <summary className="flex cursor-pointer items-center justify-between gap-5 font-serif text-3xl font-bold text-cream">
                  ${question}
                  <${ChevronDown} className="h-5 w-5 shrink-0 text-gold transition group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="mt-4 max-w-2xl leading-8 text-cream/58">${answer}</p>
              </details>
            `
          )}
        </div>
      </div>
    </section>
  `;
}

function Contact() {
  const [note, setNote] = useState("");

  return html`
    <section id="contact" className="contact-bg section-pad relative overflow-hidden bg-ink">
      <img className="absolute inset-0 h-full w-full object-cover opacity-50" src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1800&q=86" alt="" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.82fr_1.18fr] md:px-8">
        <div className="fade-rise">
          <p className="micro-label mb-5">Contact And Booking</p>
          <h2 className="lux-heading text-5xl text-cream md:text-7xl lg:text-8xl">Craft your menu.</h2>
          <p className="mt-7 max-w-xl text-lg leading-9 text-cream/68">
            Share your event, guest count, and date. The curators can shape a premium dining experience that feels
            specific to your celebration.
          </p>
          <div className="mt-9 grid gap-3">
            <a className="inline-flex items-center gap-3 font-extrabold text-gold" href="tel:+919468256666">
              <${Phone} className="h-5 w-5" aria-hidden="true" />
              +91 9468256666
            </a>
            <a className="inline-flex items-center gap-3 font-extrabold text-gold" href="mailto:info@steamengine.in">
              <${Mail} className="h-5 w-5" aria-hidden="true" />
              info@steamengine.in
            </a>
          </div>
        </div>
        <form
          className="fade-rise grid gap-4 rounded-[32px] border border-cream/12 bg-cream/[0.07] p-5 shadow-luxury backdrop-blur-2xl md:grid-cols-2 md:p-8"
          onSubmit=${(event) => {
            event.preventDefault();
            setNote("Prototype note: ready to connect with WhatsApp, email, or a booking backend.");
          }}
        >
          <label className="grid gap-2 text-xs font-bold text-cream/55">
            Name
            <input className="h-13 rounded-2xl border border-cream/12 bg-ink/70 px-4 text-base text-cream outline-none focus:border-gold" required placeholder="Your name" />
          </label>
          <label className="grid gap-2 text-xs font-bold text-cream/55">
            Phone
            <input className="h-13 rounded-2xl border border-cream/12 bg-ink/70 px-4 text-base text-cream outline-none focus:border-gold" required placeholder="+91" />
          </label>
          <label className="grid gap-2 text-xs font-bold text-cream/55">
            Occasion
            <select className="h-13 rounded-2xl border border-cream/12 bg-ink/70 px-4 text-base text-cream outline-none focus:border-gold" required>
              <option value="">Select occasion</option>
              <option>Wedding</option>
              <option>Corporate event</option>
              <option>Private celebration</option>
              <option>Institutional dining</option>
            </select>
          </label>
          <label className="grid gap-2 text-xs font-bold text-cream/55">
            Guest Count
            <input className="h-13 rounded-2xl border border-cream/12 bg-ink/70 px-4 text-base text-cream outline-none focus:border-gold" type="number" min="1" placeholder="500" />
          </label>
          <label className="grid gap-2 text-xs font-bold text-cream/55 md:col-span-2">
            Notes
            <textarea className="min-h-32 rounded-2xl border border-cream/12 bg-ink/70 p-4 text-base text-cream outline-none focus:border-gold" placeholder="Tell us the date, venue, cuisines, and event mood."></textarea>
          </label>
          <${LuxuryButton} type="submit" icon=${Send} className="md:col-span-2">
            Contact Us
          </${LuxuryButton}>
          <p className="min-h-6 text-sm font-bold text-gold md:col-span-2" aria-live="polite">${note}</p>
        </form>
      </div>
    </section>
  `;
}

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("loading", loading);
  }, [loading]);

  useEffect(() => {
    let value = 0;
    const interval = window.setInterval(() => {
      value = Math.min(100, value + Math.ceil(Math.random() * 16));
      setProgress(value);
      if (value >= 100) {
        window.clearInterval(interval);
        window.setTimeout(() => setLoading(false), 420);
      }
    }, 130);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (loading) {
      return undefined;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanupFns = [];
    let lenis;
    let lenisTicker;

    if (!reduceMotion) {
      lenis = new Lenis({
        lerp: 0.075,
        smoothWheel: true,
        smoothTouch: false,
        wheelMultiplier: 0.86,
      });

      lenis.on("scroll", ScrollTrigger.update);
      lenisTicker = (time) => lenis.raf(time * 1000);
      gsap.ticker.add(lenisTicker);
      gsap.ticker.lagSmoothing(0);
    }

    const pointerMove = (event) => {
      document.documentElement.style.setProperty("--mouse-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", pointerMove, { passive: true });
    cleanupFns.push(() => window.removeEventListener("pointermove", pointerMove));

    const ctx = gsap.context(() => {
      const progressBar = document.querySelector(".scroll-progress");
      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          gsap.set(progressBar, { scaleX: self.progress });
          document.documentElement.style.setProperty("--nav-alpha", (0.52 + self.progress * 0.18).toFixed(2));
        },
      });

      gsap.utils.toArray(".fade-rise").forEach((item) => {
        gsap.fromTo(
          item,
          { autoAlpha: 0, y: 54 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 82%",
            },
          }
        );
      });

      gsap.utils.toArray(".lux-stagger").forEach((wrap) => {
        gsap.fromTo(
          wrap.children,
          { autoAlpha: 0, y: 38 },
          {
            autoAlpha: 1,
            y: 0,
            stagger: 0.12,
            duration: 1,
            ease: "power3.out",
            delay: 0.3,
          }
        );
      });

      gsap.utils.toArray(".word-reveal").forEach((block) => {
        const words = block.querySelectorAll(".word");
        gsap.to(words, {
          y: 0,
          opacity: 1,
          stagger: 0.045,
          ease: "none",
          scrollTrigger: {
            trigger: block,
            start: "top 82%",
            end: "bottom 55%",
            scrub: 0.9,
          },
        });
      });

      gsap.utils.toArray(".clip-reveal").forEach((item) => {
        gsap.fromTo(
          item,
          { clipPath: "inset(22% 18% 18% 18% round 28px)", scale: 1.06 },
          {
            clipPath: "inset(0% 0% 0% 0% round 28px)",
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 78%",
            },
          }
        );
      });

      gsap.utils.toArray(".parallax-bg, .story-parallax").forEach((item) => {
        gsap.to(item, {
          yPercent: 18,
          ease: "none",
          scrollTrigger: {
            trigger: item.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      const storySlidesNodes = gsap.utils.toArray(".story-slide");
      if (storySlidesNodes.length) {
        gsap.set(storySlidesNodes, {
          autoAlpha: 0,
          scale: 1.08,
          clipPath: "inset(14% 14% 14% 14%)",
          filter: "blur(8px)",
        });
        gsap.set(storySlidesNodes[0], {
          autoAlpha: 1,
          scale: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          filter: "blur(0px)",
        });

        const storyTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".story-pin",
            start: "top top",
            end: () => `+=${storySlidesNodes.length * 860}`,
            pin: true,
            scrub: 1.05,
            snap: {
              snapTo: 1 / (storySlidesNodes.length - 1),
              duration: 0.65,
              ease: "power2.inOut",
            },
          },
        });

        storySlidesNodes.forEach((slide, index) => {
          if (index === 0) {
            storyTimeline.to(slide.querySelector(".story-image"), { scale: 1.1, duration: 1.2, ease: "none" }, 0);
            return;
          }

          storyTimeline
            .to(
              storySlidesNodes[index - 1],
              {
                autoAlpha: 0,
                scale: 0.94,
                clipPath: "inset(12% 12% 12% 12%)",
                filter: "blur(10px)",
                duration: 1,
                ease: "power2.inOut",
              },
              index
            )
            .fromTo(
              slide,
              {
                autoAlpha: 0,
                scale: 1.08,
                clipPath: "inset(18% 18% 18% 18%)",
                filter: "blur(12px)",
              },
              {
                autoAlpha: 1,
                scale: 1,
                clipPath: "inset(0% 0% 0% 0%)",
                filter: "blur(0px)",
                duration: 1,
                ease: "power2.inOut",
              },
              index
            )
            .fromTo(
              slide.querySelector(".story-title"),
              { y: 55, autoAlpha: 0 },
              { y: 0, autoAlpha: 1, duration: 0.72, ease: "power3.out" },
              index + 0.18
            )
            .to(slide.querySelector(".story-image"), { scale: 1.1, duration: 1.2, ease: "none" }, index);
        });
      }

      const horizontalTrack = document.querySelector(".horizontal-track");
      if (horizontalTrack) {
        gsap.to(horizontalTrack, {
          x: () => -Math.max(0, horizontalTrack.scrollWidth - window.innerWidth + window.innerWidth * 0.12),
          ease: "none",
          scrollTrigger: {
            trigger: ".horizontal-pin",
            start: "top top",
            end: () => `+=${Math.max(1400, horizontalTrack.scrollWidth)}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      }

      gsap.fromTo(
        ".journey-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".journey",
            start: "top 70%",
            end: "bottom 38%",
            scrub: true,
          },
        }
      );

      gsap.utils.toArray(".journey-item").forEach((item, index) => {
        gsap.fromTo(
          item,
          { autoAlpha: 0.35, x: index % 2 === 0 ? -24 : 24 },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 82%",
            },
          }
        );
      });

      gsap.utils.toArray("[data-count]").forEach((item) => {
        const target = Number(item.dataset.count || 0);
        const suffix = item.dataset.suffix || "";
        const value = { current: 0 };
        gsap.to(value, {
          current: target,
          duration: 2.2,
          ease: "power2.out",
          onUpdate: () => {
            item.textContent = `${Math.floor(value.current).toLocaleString()}${suffix}`;
          },
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            once: true,
          },
        });
      });
    });

    const magneticButtons = gsap.utils.toArray("[data-magnetic]");
    magneticButtons.forEach((button) => {
      const move = (event) => {
        const rect = button.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        gsap.to(button, { x: x * 0.22, y: y * 0.28, duration: 0.45, ease: "power3.out" });
      };
      const leave = () => gsap.to(button, { x: 0, y: 0, duration: 0.55, ease: "elastic.out(1, 0.35)" });
      button.addEventListener("mousemove", move);
      button.addEventListener("mouseleave", leave);
      cleanupFns.push(() => {
        button.removeEventListener("mousemove", move);
        button.removeEventListener("mouseleave", leave);
      });
    });

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const refreshTimer = window.setTimeout(refresh, 900);

    return () => {
      window.clearTimeout(refreshTimer);
      window.removeEventListener("load", refresh);
      cleanupFns.forEach((cleanup) => cleanup());
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      if (lenisTicker) {
        gsap.ticker.remove(lenisTicker);
      }
      if (lenis) {
        lenis.destroy();
      }
    };
  }, [loading]);

  return html`
    <${React.Fragment}>
      <a href="#main" className="skip-link">Skip to content</a>
      <div className="scroll-progress" aria-hidden="true"></div>
      <div className="spotlight" aria-hidden="true"></div>
      <div className="grain" aria-hidden="true"></div>
      <${AnimatePresence}>${loading && html`<${LoadingScreen} progress=${progress} />`}</${AnimatePresence}>
      <div className="page-shell">
        <${Navigation} open=${open} setOpen=${setOpen} />
        <main id="main">
          <${Hero} loading=${loading} />
          <${About} />
          <${StoryPinned} />
          <${Experiences} />
          <${HorizontalEvents} />
          <${Journey} />
          <${Chefs} />
          <${PremiumGallery} />
          <${Testimonials} />
          <${FAQ} />
          <${Contact} />
        </main>
        <footer className="border-t border-cream/10 bg-[#030303] px-5 py-10 md:px-8">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-cream/52 md:flex-row md:items-center">
            <div>
              <strong className="font-serif text-3xl text-cream">The Steam Engine</strong>
              <p className="mt-2 max-w-lg">The Active Kuzina. Luxury catering for celebrations that deserve to be remembered.</p>
            </div>
            <a className="inline-flex items-center gap-2 font-extrabold text-gold" href="#home">
              Back to top
              <${ArrowRight} className="h-4 w-4 -rotate-90" aria-hidden="true" />
            </a>
          </div>
        </footer>
      </div>
    </${React.Fragment}>
  `;
}

createRoot(document.getElementById("root")).render(html`<${App} />`);
