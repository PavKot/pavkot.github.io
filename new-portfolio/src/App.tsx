import {
  type PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Box,
  Braces,
  Brush,
  Camera,
  Chrome,
  Code2,
  Component,
  Database,
  Download,
  ExternalLink,
  Facebook,
  Figma,
  Briefcase,
  Folder,
  Framer,
  Instagram,
  Layers,
  Linkedin,
  Mail,
  MonitorSmartphone,
  Moon,
  Palette,
  PenTool,
  Send,
  Smartphone,
  Sparkle,
  Sun,
  User,
  WandSparkles,
  Wrench,
} from "lucide-react";
import {
  experiences,
  marqueeImages,
  projects,
  services,
  type Project,
} from "./data";
import { CursorSpotlight } from "@/components/ui/cursor-spotlight";

const EASE = [0.25, 0.1, 0.25, 1] as const;
const THEME_STORAGE_KEY = "pavlo-portfolio-theme";
const HERO_TITLE = "Hi, I'm Pavkot";

type Theme = "dark" | "light";

function getInitialTheme(): Theme {
  if (typeof document === "undefined") return "dark";

  try {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
  } catch {
    // Keep the default theme when browser storage is unavailable.
  }

  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className = "",
}: PropsWithChildren<{
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
}>) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ delay, duration, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

function ContactButton({ label = "Contact me" }: { label?: string }) {
  return (
    <a className="contact-button group" href="mailto:pavlo.melnik.2004@gmail.com">
      <span>{label}</span>
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

function ThemeToggle({
  theme,
  onToggle,
}: {
  theme: Theme;
  onToggle: () => void;
}) {
  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={`Switch to ${nextTheme} theme`}
      aria-pressed={theme === "light"}
      title={`Switch to ${nextTheme} theme`}
    >
      {theme === "dark" ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
    </button>
  );
}

function HeaderSocials({ className = "" }: { className?: string }) {
  return (
    <div className={`header-socials ${className}`} role="navigation" aria-label="Social media">
      <a href="https://www.linkedin.com/in/pavkot/" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
        <Linkedin aria-hidden="true" />
      </a>
      <a href="https://t.me/pavkot" target="_blank" rel="noreferrer" aria-label="Telegram" title="Telegram">
        <Send aria-hidden="true" />
      </a>
      <a href="https://www.instagram.com/pavkot.png/" target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram">
        <Instagram aria-hidden="true" />
      </a>
      <a href="https://www.facebook.com/profile.php?id=100008172401365" target="_blank" rel="noreferrer" aria-label="Facebook" title="Facebook">
        <Facebook aria-hidden="true" />
      </a>
    </div>
  );
}

function ScrollCue({ mobile = false }: { mobile?: boolean }) {
  return (
    <a
      className={`scroll-cue ${mobile ? "scroll-cue-mobile" : "scroll-cue-desktop"}`}
      href="#work-strip"
      aria-label="Scroll down to selected work"
    >
      <ArrowDown className="scroll-cue-arrow h-4 w-4" aria-hidden="true" />
      <span className="mobile-scroll-mouse" aria-hidden="true">
        <span />
      </span>
      <span className="mobile-scroll-label">Scroll Down</span>
    </a>
  );
}

function TypingHeadline() {
  const [visibleCharacters, setVisibleCharacters] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisibleCharacters(HERO_TITLE.length);
      return;
    }

    let currentCharacter = 0;
    const typingInterval = window.setInterval(() => {
      currentCharacter += 1;
      setVisibleCharacters(currentCharacter);

      if (currentCharacter >= HERO_TITLE.length) {
        window.clearInterval(typingInterval);
      }
    }, 50);

    return () => window.clearInterval(typingInterval);
  }, []);

  return (
    <h1 className="hero-heading hero-title" aria-label={HERO_TITLE}>
      <span className="typing-line" aria-hidden="true">
        <span className="typing-ghost">{HERO_TITLE}</span>
        <span className="typing-progress">
          {HERO_TITLE.slice(0, visibleCharacters)}
          <span className="typing-caret" />
        </span>
      </span>
    </h1>
  );
}

function HeroSection({
  theme,
  onToggleTheme,
}: {
  theme: Theme;
  onToggleTheme: () => void;
}) {
  return (
    <CursorSpotlight
      className="hero-spotlight"
      childrenClassName="hero-spotlight-content"
      spotlightSize={520}
      spotlightOpacity={0.14}
      baseColor="var(--ink)"
      falloff="72%"
    >
      <header id="home" className="hero-section">
        <img
          className="hero-backdrop-portrait"
          src="/assets/profile-pic-new.png"
          alt=""
          aria-hidden="true"
        />

        <FadeIn y={-20} className="hero-header-stack">
          <nav className="hero-nav" aria-label="Primary navigation">
            <a href="#about" aria-label="About" title="About">
              <User className="hero-nav-icon" aria-hidden="true" />
              <span className="hero-nav-label">About</span>
            </a>
            <a href="#experience" aria-label="Experience" title="Experience">
              <Briefcase className="hero-nav-icon" aria-hidden="true" />
              <span className="hero-nav-label">Experience</span>
            </a>
            <a href="#services" aria-label="Services" title="Services">
              <Wrench className="hero-nav-icon" aria-hidden="true" />
              <span className="hero-nav-label">Services</span>
            </a>
            <a href="#projects" aria-label="Projects" title="Projects">
              <Folder className="hero-nav-icon" aria-hidden="true" />
              <span className="hero-nav-label">Projects</span>
            </a>
            <a href="#contact" aria-label="Contact" title="Contact">
              <Mail className="hero-nav-icon" aria-hidden="true" />
              <span className="hero-nav-label">Contact</span>
            </a>
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </nav>
          <HeaderSocials className="header-socials-desktop" />
        </FadeIn>

        <div className="hero-title-wrap">
          <TypingHeadline />
        </div>

        <FadeIn delay={0.3} x={-18} y={0} className="hero-left">
          <p className="hero-left-copy">
            Passionate about creating beautiful, functional, and user-friendly websites.{" "}
            <span className="hero-intro-accent">
              Bringing ideas to life through clean code and creative design.
            </span>
          </p>
          <div className="hero-left-actions">
            <a className="hero-action hero-action-primary" href="#projects">
              <span>View my work</span>
              <ArrowUpRight aria-hidden="true" />
            </a>
            <a
              className="hero-action hero-action-secondary"
              href="/Pavlo Melnyk CV.pdf"
              download="Pavlo Melnyk CV"
            >
              <Download aria-hidden="true" />
              <span>Download CV</span>
            </a>
          </div>
        </FadeIn>

        <div className="portrait-position">
          <FadeIn delay={0.6} y={30}>
            <div className="portrait-media">
              <div className="portrait-glow" />
              <img
                className="hero-portrait"
                src="/assets/profile-pic-new.png"
                alt="Pavlo Melnyk working on a laptop"
              />
            </div>
          </FadeIn>
        </div>

        <div className="hero-mobile-middle">
          <HeaderSocials className="header-socials-mobile" />
          <ScrollCue mobile />
        </div>

        <div className="hero-bottom">
          <FadeIn delay={0.35} y={20}>
            <p className="hero-intro">
              A frontend developer crafting thoughtful,{" "}
              <span className="hero-intro-accent">memorable digital experiences.</span>
            </p>
          </FadeIn>
          <FadeIn delay={0.5} y={20} className="relative z-20">
            <ContactButton />
          </FadeIn>
        </div>

        <ScrollCue />
      </header>
    </CursorSpotlight>
  );
}

function MarqueeRow({
  images,
  direction,
  offset,
}: {
  images: string[];
  direction: "left" | "right";
  offset: number;
}) {
  const repeated = [...images, ...images, ...images];
  const distance = offset - 200;
  const transform =
    direction === "right"
      ? `translate3d(calc(-33.333% + ${distance}px), 0, 0)`
      : `translate3d(${-distance}px, 0, 0)`;

  return (
    <div className="marquee-viewport">
      <div className="marquee-track" style={{ transform }}>
        {repeated.map((image, index) => (
          <img
            key={`${image}-${index}`}
            src={image}
            alt=""
            loading="lazy"
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
}

function MarqueeSection() {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const sectionTop = ref.current?.offsetTop ?? 0;
        setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section ref={ref} id="work-strip" className="marquee-section" aria-label="Project gallery">
      <MarqueeRow images={marqueeImages.slice(0, 9)} direction="right" offset={offset} />
      <MarqueeRow images={marqueeImages.slice(9)} direction="left" offset={offset} />
    </section>
  );
}

const SOFTWARE_ROW_ONE = [
  Figma,
  Code2,
  Braces,
  Smartphone,
  Layers,
  Palette,
  PenTool,
  Component,
];

const SOFTWARE_ROW_TWO = [
  Database,
  MonitorSmartphone,
  Chrome,
  Framer,
  Camera,
  Brush,
  Box,
  WandSparkles,
];

function AboutLabel({ children, align = "center" }: PropsWithChildren<{ align?: "left" | "center" }>) {
  return (
    <div className={`about-card-label ${align === "left" ? "is-left" : ""}`}>
      <Sparkle aria-hidden="true" />
      <span>{children}</span>
      <Sparkle aria-hidden="true" />
    </div>
  );
}

function SoftwareMarquee({
  icons,
  direction,
}: {
  icons: typeof SOFTWARE_ROW_ONE;
  direction: "left" | "right";
}) {
  return (
    <div className="about-tool-viewport" aria-hidden="true">
      <div className={`about-tool-track is-${direction}`}>
        {[0, 1].map((setIndex) => (
          <div className="about-tool-set" key={setIndex}>
            {icons.map((Icon, iconIndex) => (
              <span className="about-tool-tile about-liquid-glass" key={`${setIndex}-${iconIndex}`}>
                <Icon />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="about-shell">
        <header className="about-header">
          <FadeIn y={24} className="about-intro">
            <h2 id="about-title">ABOUT ME</h2>
            <p>
              A frontend and mobile developer crafting thoughtful digital products with clean code,
              intuitive interactions, and a sharp eye for design.
            </p>
          </FadeIn>
          <FadeIn y={24} delay={0.08} className="about-header-action">
            <a className="about-team-button about-liquid-glass" href="mailto:pavlo.melnik.2004@gmail.com">
              <span>Let&apos;s team up</span>
              <ArrowUpRight aria-hidden="true" />
            </a>
          </FadeIn>
        </header>

        <div className="about-feature-grid">
          <FadeIn y={28} className="about-background-cell">
            <article className="about-card about-media-card about-background-card">
              <img
                className="about-background-photo"
                src="/assets/my-photo.jpg"
                alt="Pavlo Melnyk"
                loading="lazy"
                decoding="async"
              />
              <div className="about-media-shade" aria-hidden="true" />
              <AboutLabel>Me</AboutLabel>
            </article>
          </FadeIn>

          <div className="about-stack about-middle-stack">
            <FadeIn y={28} delay={0.06} className="about-card-cell">
              <article className="about-card about-copy-card about-noise">
                <AboutLabel align="left">My approach</AboutLabel>
                <p>
                  I transform ideas into responsive web and mobile experiences that feel polished,
                  useful, and easy to navigate — from the first screen to the final detail.
                </p>
                <div className="about-mini-stats" aria-label="Career statistics">
                  <span><strong>4+</strong> Years experience</span>
                  <span><strong>100%</strong> Client satisfaction</span>
                </div>
              </article>
            </FadeIn>

            <FadeIn y={28} delay={0.12} className="about-card-cell">
              <article className="about-card about-media-card about-metric-card">
                <video
                  src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_154543_d5b83fc1-9cea-44f3-b5e8-8f325935211a.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                />
                <div className="about-media-shade is-soft" aria-hidden="true" />
                <strong>20+</strong>
                <span>Projects completed</span>
              </article>
            </FadeIn>
          </div>

          <div className="about-stack about-right-stack">
            <FadeIn y={28} delay={0.1} className="about-card-cell">
              <article className="about-card about-media-card about-software-card">
                <video
                  src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_153148_d7a3e1dd-e5d0-4ce6-8306-00d7522ecc44.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                />
                <div className="about-media-shade" aria-hidden="true" />
                <AboutLabel>Daily toolkit</AboutLabel>
                <div className="about-tool-marquees">
                  <SoftwareMarquee icons={SOFTWARE_ROW_ONE} direction="left" />
                  <SoftwareMarquee icons={SOFTWARE_ROW_TWO} direction="right" />
                </div>
              </article>
            </FadeIn>

            <FadeIn y={28} delay={0.16} className="about-card-cell">
              <article className="about-card about-reach-card about-noise">
                <div className="about-reach-head">
                  <AboutLabel align="left">Reach me</AboutLabel>
                  <a href="mailto:pavlo.melnik.2004@gmail.com" aria-label="Email Pavlo">
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </div>
                <div className="about-contact-lines">
                  <a href="mailto:pavlo.melnik.2004@gmail.com">pavlo.melnik.2004@gmail.com</a>
                  <a href="https://t.me/pavkot" target="_blank" rel="noreferrer">Telegram · @pavkot</a>
                </div>
                <a className="about-cv-link" href="/Pavlo Melnyk CV.pdf" download="Pavlo Melnyk CV">
                  <Download aria-hidden="true" />
                  Download CV
                </a>
              </article>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="experience-section" aria-labelledby="experience-title">
      <div className="experience-shell">
        <header className="experience-header">
          <FadeIn y={24}>
            <p className="experience-kicker">Career path · 2022—Now</p>
            <h2 id="experience-title">Experience</h2>
          </FadeIn>
          <FadeIn y={24} delay={0.08} className="experience-intro">
            <p>
              From visual design to production-ready web and mobile products — a timeline of the
              teams, clients, and projects that shaped my work.
            </p>
          </FadeIn>
        </header>

        <div className="experience-timeline" role="list" aria-label="Work experience timeline">
          {experiences.map((experience, index) => (
            <FadeIn
              className="experience-entry"
              delay={Math.min(index * 0.07, 0.28)}
              x={index % 2 === 0 ? 18 : -18}
              y={18}
              key={`${experience.company}-${experience.role}`}
            >
              <article className="experience-card" role="listitem">
                <div className="experience-date">
                  <span>{experience.date}</span>
                </div>

                <div className="experience-marker" aria-hidden="true">
                  <span />
                </div>

                <div className="experience-card-body">
                  <div className="experience-card-head">
                    <div>
                      <p>{experience.company}</p>
                      <h3>{experience.role}</h3>
                    </div>
                    <span className="experience-index">{String(index + 1).padStart(2, "0")}</span>
                  </div>

                  <ul className="experience-bullets">
                    {experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>

                  <div className="experience-tags" aria-label={`Technologies used at ${experience.company}`}>
                    {experience.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <FadeIn>
        <p className="eyebrow centered dark">What I do</p>
        <h2 className="section-heading services-heading">Services</h2>
      </FadeIn>
      <div className="services-list">
        {services.map((service, index) => (
          <FadeIn key={service.name} delay={index * 0.1}>
            <article className="service-item">
              <div className="service-number">{String(index + 1).padStart(2, "0")}</div>
              <div className="service-copy">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
              <ArrowUpRight className="service-arrow" aria-hidden="true" />
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const projectUrl = project.url ?? project.image;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 0.4, 1], [1, 1, targetScale]);

  return (
    <div ref={ref} className="project-sticky-space">
      <motion.article
        className={`project-card project-card-${index}`}
        style={{ scale }}
      >
        <div className="project-card-head">
          <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
          <div className="project-meta">
            <span>{project.category}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
          <a className="live-button" href={projectUrl} target="_blank" rel="noreferrer">
            {project.url ? "Live project" : "View concept"} <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="project-mosaic">
          <div className="project-mosaic-left">
            <img src={project.image} alt="" loading="lazy" />
            <div className="project-tags-on-image">
              {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <img src={project.secondaryImage ?? project.image} alt="" loading="lazy" />
          </div>
          <img className="project-main-image" src={project.image} alt={`${project.title} project preview`} loading="lazy" />
        </div>
      </motion.article>
    </div>
  );
}

function ProjectsSection() {
  const featured = projects.slice(0, 4);
  return (
    <section id="projects" className="projects-section">
      <FadeIn>
        <p className="eyebrow centered">Selected work</p>
        <h2 className="hero-heading section-heading projects-heading">Projects</h2>
      </FadeIn>

      <div className="sticky-projects">
        {featured.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            total={featured.length}
          />
        ))}
      </div>

      <div className="archive-wrap">
        <FadeIn>
          <p className="eyebrow">Project archive</p>
          <h3 className="archive-heading">More things I&apos;ve built</h3>
        </FadeIn>
        <div className="archive-grid">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={(index % 3) * 0.06}>
              <a className="archive-card group" href={project.url ?? project.image} target="_blank" rel="noreferrer">
                <div className="archive-image-wrap">
                  <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
                  <span className="archive-open"><ArrowUpRight /></span>
                </div>
                <div className="archive-card-copy">
                  <span>{String(index + 1).padStart(2, "0")} / {project.category}</span>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="contact-immersive relative w-full min-h-[115vh] overflow-hidden flex flex-col items-center font-sans selection:bg-white/20 selection:text-white"
    >
      <video
        className="fixed inset-0 w-full h-full object-cover z-[0]"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_114316_1c7889ad-2885-410e-b493-98119fee0ddb.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-[1] bg-black/25" aria-hidden="true" />

      <div className="relative z-10 flex min-h-[115vh] w-full max-w-7xl flex-col items-center justify-center px-4 py-8 text-center md:px-6 md:py-12">
        <div className="flex w-full flex-col items-center justify-center text-white">
          <motion.p
            className="mb-5 text-xs uppercase tracking-[0.28em] text-white/60"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Have an idea in mind?
          </motion.p>
          <motion.h2
            className="max-w-5xl text-6xl font-medium leading-[0.88] tracking-[-0.06em] md:text-8xl lg:text-[8rem]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
          >
            Let&apos;s build something remarkable.
          </motion.h2>
          <motion.a
            className="contact-button contact-project-button group"
            href="mailto:pavlo.melnik.2004@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <span>Start a project</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    const themeColor = theme === "light" ? "#f4f2ed" : "#0c0c0c";

    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", themeColor);

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Theme switching still works when browser storage is unavailable.
    }
  }, [theme]);

  return (
    <main className="site-shell relative w-full min-h-[115vh] overflow-x-hidden flex flex-col items-center font-sans selection:bg-white/20 selection:text-white">
      <HeroSection
        theme={theme}
        onToggleTheme={() => setTheme((currentTheme) => currentTheme === "dark" ? "light" : "dark")}
      />
      <MarqueeSection />
      <AboutSection />
      <ExperienceSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
