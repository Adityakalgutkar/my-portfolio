"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import CustomCursor from "@/components/chess/custom-cursor";
import ChessBoard from "@/components/chess/chess-board";
import Particles from "@/components/chess/particles";
import IntroScreen from "@/components/chess/intro-screen";
import ScrollProgress from "@/components/chess/scroll-progress";
import ChessNav from "@/components/chess/chess-nav";
import MoveSection from "@/components/chess/move-section";
import ProjectModal from "@/components/chess/project-modal";
import KonamiBoard from "@/components/chess/konami-board";
import ChessContactForm from "@/components/chess/chess-contact-form";
import {
  GOLD,
  GOLD_LIGHT,
  INITIAL_BOARD,
  MOVES,
  CHESS_PROJECTS,
  CHESS_SKILLS,
  CHESS_SERVICES,
  KONAMI,
  type ChessProject,
} from "@/lib/chess-data";

export default function ChessPortfolio() {
  const [introComplete, setIntroComplete] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ChessProject | null>(
    null,
  );
  const [konamiActive, setKonamiActive] = useState(false);
  const [checkmateTheme, setCheckmateTheme] = useState(false);
  const konamiSeq = useRef<number[]>([]);
  const checkmateInput = useRef("");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.on("scroll", ScrollTrigger.update);

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      konamiSeq.current = [...konamiSeq.current.slice(-9), e.keyCode];
      if (JSON.stringify(konamiSeq.current) === JSON.stringify(KONAMI)) {
        setKonamiActive(true);
      }

      if (e.key.length === 1) {
        checkmateInput.current = (checkmateInput.current + e.key).slice(-9);
        if (checkmateInput.current === "checkmate") {
          setCheckmateTheme((t) => !t);
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const heroHighlighted: [number, number][] = [
    [4, 4],
    [3, 3],
    [2, 5],
  ];

  const divider = (
    <div
      className="mx-6 h-px md:mx-12"
      style={{
        background: `linear-gradient(90deg, transparent, ${GOLD}22, transparent)`,
      }}
    />
  );

  return (
    <div
      className="chess-theme transition-colors duration-800"
      style={{ background: checkmateTheme ? "#0A0804" : "#080808" }}
    >
      <CustomCursor />
      <ScrollProgress />

      <IntroScreen onDone={() => setIntroComplete(true)} />
      <ChessNav ready={introComplete} />

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
        <Particles count={40} />
        <div
          className="pointer-events-none absolute left-1/2 top-[20%] h-[800px] w-[800px] -translate-x-1/2"
          style={{
            background:
              "radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 65%)",
          }}
        />

        <div className="chess-hero-grid mobile-pad mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 md:gap-20 md:px-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={introComplete ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] text-[var(--gold)]"
            >
              <span className="inline-block h-px w-7 bg-[var(--gold)]" />
              THE OPENING · FREELANCE WEB DEVELOPER
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={introComplete ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-display mb-7 text-[clamp(52px,7vw,96px)] font-extrabold leading-[1.02] tracking-[-0.03em]"
              style={{ color: checkmateTheme ? GOLD : "#F5F5F0" }}
            >
              Code as
              <br />
              <span className="shimmer-text">calculated</span>
              <br />
              as chess.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={introComplete ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mb-11 max-w-[440px] text-[17px] leading-[1.75] text-[#555]"
            >
              Freelance developer. I build fast, responsive, conversion‑focused
              digital experiences — from Shopify storefronts to custom React
              applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={introComplete ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex items-center gap-4"
            >
              <Link
                href="#work"
                className="rounded-sm bg-[var(--gold)] px-9 py-4 font-mono text-xs font-bold tracking-widest text-[#0A0A0A] no-underline transition-opacity duration-200 hover:opacity-85"
              >
                VIEW WORK
              </Link>
              <Link
                href="#contact"
                className="flex items-center gap-2 font-mono text-xs tracking-widest text-[#555] no-underline transition-colors duration-200 hover:text-[#F5F5F0]"
              >
                GET IN TOUCH <span className="text-base">→</span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={introComplete ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <ChessBoard
              board={INITIAL_BOARD}
              size={460}
              highlighted={heroHighlighted}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={introComplete ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        >
          <span className="font-mono text-[9px] tracking-[0.22em] text-[#333]">
            SCROLL TO PLAY
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-px"
            style={{
              background: `linear-gradient(180deg, ${GOLD}, transparent)`,
            }}
          />
        </motion.div>
      </section>

      {/* Skills */}
      <MoveSection move={MOVES[0]} id="skills">
        <div className="chess-two-col grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display mb-5 text-[clamp(36px,4vw,58px)] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#F5F5F0]"
            >
              {MOVES[0].name}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mb-4 text-[15px] leading-[1.8] text-[#555]"
            >
              {MOVES[0].story}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-[15px] leading-[1.8] text-[#555]"
            >
              Two years of shipping real products — from a Shopify store serving
              thousands of customers to enterprise Next.js applications. Every
              stack mastered with intent.
            </motion.p>
          </div>

          <div className="flex flex-col gap-5">
            {CHESS_SKILLS.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="mb-2 flex justify-between">
                  <span className="text-[13px] text-[#888]">{skill.name}</span>
                  <span className="font-mono text-[11px] text-[var(--gold)]">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-px rounded-sm bg-[#1A1A1A]">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: i * 0.1 + 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="h-full origin-left rounded-sm"
                    style={{
                      width: `${skill.level}%`,
                      background: `linear-gradient(90deg, ${GOLD}, ${GOLD_LIGHT})`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </MoveSection>

      {divider}

      {/* Projects */}
      <MoveSection move={MOVES[1]} id="work">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display mb-4 text-[clamp(36px,4vw,58px)] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#F5F5F0]"
        >
          {MOVES[1].name}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-14 text-[15px] text-[#555]"
        >
          {MOVES[1].story} Click any piece to open the case study.
        </motion.p>

        <div className="chess-projects-grid grid grid-cols-1 gap-4 md:grid-cols-2">
          {CHESS_PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={() => setSelectedProject(project)}
              data-cursor="pointer"
              className="relative cursor-none overflow-hidden rounded-md border border-[#1A1A1A] bg-[#0E0E0E] p-8 transition-colors duration-300 hover:border-[rgba(201,168,76,0.27)] hover:bg-[#111]"
            >
              <div
                className="pointer-events-none absolute right-0 top-0 h-[120px] w-[120px]"
                style={{
                  background: `radial-gradient(circle at top right, ${project.color}12, transparent 70%)`,
                }}
              />
              <div className="mb-5 flex items-start justify-between">
                <span
                  className="text-[44px]"
                  style={{
                    filter: `drop-shadow(0 0 12px ${project.color}66)`,
                  }}
                >
                  {project.piece}
                </span>
                <span className="font-mono text-[10px] tracking-widest text-[#333]">
                  {project.role.toUpperCase()}
                </span>
              </div>
              <h3 className="font-display mb-1.5 text-2xl text-[#F5F5F0]">
                {project.title}
              </h3>
              <div className="mb-3.5 font-mono text-[10px] tracking-widest text-[var(--gold)]">
                {project.category.toUpperCase()}
              </div>
              <p className="mb-5 text-[13px] leading-[1.7] text-[#555]">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-sm border border-[#222] px-2 py-1 font-mono text-[10px] tracking-wide text-[#444]"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="absolute bottom-7 right-7 font-mono text-[11px] tracking-widest opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                VIEW →
              </div>
            </motion.div>
          ))}
        </div>
      </MoveSection>

      {divider}

      {/* Services */}
      <MoveSection move={MOVES[2]}>
        <div className="chess-services-layout grid grid-cols-1 items-start gap-16 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display mb-5 text-[clamp(36px,4vw,58px)] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#F5F5F0]"
            >
              {MOVES[2].name}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[15px] leading-[1.8] text-[#555]"
            >
              {MOVES[2].story} Every service delivered with precision.
            </motion.p>
          </div>

          <div className="chess-services-grid grid grid-cols-1 overflow-hidden rounded-md border border-[#1A1A1A] bg-[#1A1A1A] sm:grid-cols-2">
            {CHESS_SERVICES.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="bg-[#0E0E0E] p-6 transition-colors duration-200 hover:bg-[#141414]"
              >
                <div
                  className="mb-3 text-2xl"
                  style={{ filter: `drop-shadow(0 0 6px ${GOLD}66)` }}
                >
                  {svc.icon}
                </div>
                <h3 className="mb-2 text-sm font-semibold text-[#F5F5F0]">
                  {svc.title}
                </h3>
                <p className="text-[13px] leading-[1.65] text-[#444]">
                  {svc.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </MoveSection>

      {divider}

      {/* Trust / Stats */}
      <MoveSection move={MOVES[3]}>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display mb-14 max-w-[600px] text-[clamp(36px,4vw,58px)] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#F5F5F0]"
        >
          {MOVES[3].name}
          <br />
          <span className="text-[0.6em] text-[#333]">Position secured.</span>
        </motion.h2>

        <div className="chess-stats-grid mb-10 grid grid-cols-2 overflow-hidden rounded-md border border-[#1A1A1A] bg-[#1A1A1A] lg:grid-cols-4">
          {[
            { val: "2+", label: "Years Experience" },
            { val: "20+", label: "Projects Shipped" },
            { val: "97", label: "Lighthouse Score" },
            { val: "24h", label: "Response Time" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[#0E0E0E] px-7 py-9 text-center"
            >
              <div className="font-display text-[52px] font-extrabold leading-none text-[#F5F5F0]">
                {s.val}
              </div>
              <div className="mt-2.5 font-mono text-[10px] tracking-widest text-[#444]">
                {s.label.toUpperCase()}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="chess-trust-grid grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              title: "Mobile-First Always",
              desc: "Every build starts at 375px and scales up. Not the other way around.",
            },
            {
              title: "Speed by Default",
              desc: "Sub-second load times and optimized assets. Performance is not a feature — it's a baseline.",
            },
            {
              title: "Clean, Documented Code",
              desc: "Readable, maintainable, and scalable. Your next developer will thank you.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border-t pt-7"
              style={{ borderColor: `${GOLD}33` }}
            >
              <div className="mb-5 h-px w-7 bg-[var(--gold)]" />
              <h3 className="mb-2.5 text-[15px] font-semibold text-[#F5F5F0]">
                {item.title}
              </h3>
              <p className="text-[13px] leading-[1.7] text-[#444]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </MoveSection>

      {divider}

      {/* Featured */}
      <MoveSection move={MOVES[4]}>
        <div className="chess-two-col grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display mb-6 text-[clamp(36px,4vw,58px)] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#F5F5F0]"
            >
              {MOVES[4].name}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-4 text-[15px] leading-[1.8] text-[#555]"
            >
              {MOVES[4].story}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-9 text-[15px] leading-[1.8] text-[#555]"
            >
              Flagship project: La Belle Hélène. A luxury resort website demanding
              premium motion design, pixel-perfect typography, and silky 60fps
              animations.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href="https://bellehelene.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-sm border px-7 py-3.5 font-mono text-[11px] font-bold tracking-widest no-underline transition-colors duration-200 hover:bg-[rgba(201,168,76,0.08)]"
                style={{ borderColor: `${GOLD}66`, color: GOLD }}
              >
                VIEW FLAGSHIP PROJECT →
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-md border bg-[#0E0E0E] p-14 text-center"
            style={{ borderColor: `${GOLD}33` }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(ellipse at center, ${GOLD}08, transparent 70%)`,
              }}
            />
            <div
              className="relative mb-6 text-[120px] leading-none"
              style={{ filter: `drop-shadow(0 0 40px ${GOLD}88)` }}
            >
              ♛
            </div>
            <h3 className="font-display relative mb-2 text-2xl text-[#F5F5F0]">
              La Belle Hélène
            </h3>
            <p className="relative font-mono text-[10px] tracking-widest text-[var(--gold)]">
              LUXURY RESORT · WORDPRESS · GSAP
            </p>
          </motion.div>
        </div>
      </MoveSection>

      {divider}

      {/* Contact CTA */}
      <section
        id="contact"
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
      >
        <Particles count={20} />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at center, ${GOLD}07, transparent 60%)`,
          }}
        />

        <div className="mobile-pad relative z-[1] mx-auto max-w-[900px] px-6 py-24 text-center md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-7 flex items-center justify-center gap-4 font-mono text-[11px] tracking-[0.2em] text-[var(--gold)]"
          >
            <div
              className="h-px w-12"
              style={{
                background: `linear-gradient(90deg, transparent, ${GOLD})`,
              }}
            />
            {MOVES[5].label} · {MOVES[5].name.toUpperCase()}
            <div
              className="h-px w-12"
              style={{
                background: `linear-gradient(90deg, ${GOLD}, transparent)`,
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 text-[100px] leading-none"
            style={{ filter: `drop-shadow(0 0 60px ${GOLD}88)` }}
          >
            ♚
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-display mb-6 text-[clamp(40px,6vw,80px)] font-extrabold leading-[1.04] tracking-[-0.03em] text-[#F5F5F0]"
          >
            Your move.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mx-auto mb-12 max-w-[560px] text-[17px] leading-[1.75] text-[#444]"
          >
            Ready to build something worth visiting? Reach out and I&apos;ll send
            a clear proposal within 24 hours.
          </motion.p>

          <ChessContactForm />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-8"
          >
              <Link
                href="https://github.com/Adityakalgutkar"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] tracking-widest text-[#333] no-underline transition-colors duration-200 hover:text-[var(--gold)]"
              >
                GITHUB
              </Link>
              <div className="h-[3px] w-[3px] rounded-full bg-[#222]" />
              <Link
                href="https://linkedin.com/in/aditya-kalgutkar"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] tracking-widest text-[#333] no-underline transition-colors duration-200 hover:text-[var(--gold)]"
              >
                LINKEDIN
              </Link>
              <div className="h-[3px] w-[3px] rounded-full bg-[#222]" />
              <span className="font-mono text-[11px] tracking-widest text-[#333]">
                INDIA · AVAILABLE NOW
              </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-20 font-mono text-[9px] tracking-[0.18em] text-[#222]"
          >
            ↑↑↓↓←→←→BA · type &quot;checkmate&quot; · secrets await
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-[#111] px-6 py-8 md:px-12">
        <span className="font-mono text-[11px] tracking-widest text-[#2A2A2A]">
          © {new Date().getFullYear()} ADITYA KALGUTKAR
        </span>
        <div className="flex items-center gap-2.5">
          <span
            className="text-base"
            style={{ filter: `drop-shadow(0 0 6px ${GOLD}55)` }}
          >
            ♔
          </span>
          <span className="font-mono text-[11px] tracking-widest text-[#2A2A2A]">
            THE GAME CONTINUES
          </span>
        </div>
      </footer>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
        {konamiActive && (
          <KonamiBoard onClose={() => setKonamiActive(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
