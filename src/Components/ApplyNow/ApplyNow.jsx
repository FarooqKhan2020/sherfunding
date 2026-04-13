import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ApplyNow.css";
const LOANS = [
  {
    id: "collateral",
    title: "Collateral Loans",
    tag: "Secured",
    desc: "Use your business assets as security to unlock higher loan amounts with competitive interest rates and flexible repayment terms.",
    amount: "Up to $5M",
    rate: "4.5% APR",
    color: {
      rgb: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
      soft: "rgba(59,130,246,0.08)",
      border: "rgba(59,130,246,0.3)",
      tag: "#60a5fa",
      hover: "rgba(59,130,246,0.18)",
      glow: "rgba(59,130,246,0.4)",
      bg1: "#1e3a5f", bg2: "#0f2040",
    },
    icon: (
      <svg viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="an-card-svg">
        <rect x="4" y="14" width="30" height="20" rx="3" stroke="#60a5fa" strokeWidth="2"/>
        <path d="M13 14V11a6 6 0 1 1 12 0v3" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="19" cy="24" r="3" fill="#60a5fa"/>
        <path d="M19 27v3" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "sba7a",
    title: "SBA 7(A) Loan",
    tag: "Government-Backed",
    desc: "The most popular SBA loan program offering flexible funding for working capital, equipment, real estate, and business expansion.",
    amount: "Up to $5M",
    rate: "5.5% APR",
    color: {
      rgb: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
      soft: "rgba(139,92,246,0.08)",
      border: "rgba(139,92,246,0.3)",
      tag: "#a78bfa",
      hover: "rgba(139,92,246,0.18)",
      glow: "rgba(139,92,246,0.4)",
      bg1: "#3b1f6e", bg2: "#1f0f40",
    },
    icon: (
      <svg viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="an-card-svg">
        <rect x="4" y="8" width="30" height="22" rx="3" stroke="#a78bfa" strokeWidth="2"/>
        <path d="M4 14h30" stroke="#a78bfa" strokeWidth="2"/>
        <circle cx="10" cy="11" r="1.5" fill="#a78bfa"/>
        <circle cx="16" cy="11" r="1.5" fill="#a78bfa"/>
        <path d="M10 21h6M10 25h10" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M24 21l2 2 4-4" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "smallbiz",
    title: "Small Business Loans",
    tag: "Fast Approval",
    desc: "Tailored financing solutions designed specifically for small businesses. Get the capital you need within 24 hours of approval.",
    amount: "Up to $500K",
    rate: "6.9% APR",
    color: {
      rgb: "linear-gradient(135deg, #06b6d4, #0891b2)",
      soft: "rgba(6,182,212,0.08)",
      border: "rgba(6,182,212,0.3)",
      tag: "#22d3ee",
      hover: "rgba(6,182,212,0.18)",
      glow: "rgba(6,182,212,0.4)",
      bg1: "#0a3d4a", bg2: "#052030",
    },
    icon: (
      <svg viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="an-card-svg">
        <path d="M6 30V16l13-8 13 8v14H6z" stroke="#22d3ee" strokeWidth="2" strokeLinejoin="round"/>
        <rect x="14" y="20" width="10" height="10" rx="1.5" stroke="#22d3ee" strokeWidth="1.8"/>
        <path d="M19 20v10" stroke="#22d3ee" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M14 25h10" stroke="#22d3ee" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "equipment",
    title: "Equipment Financing",
    tag: "Asset-Based",
    desc: "Finance the machinery, technology, and equipment your business needs to grow — without draining your working capital reserves.",
    amount: "Up to $2M",
    rate: "5.9% APR",
    color: {
      rgb: "linear-gradient(135deg, #f59e0b, #d97706)",
      soft: "rgba(245,158,11,0.08)",
      border: "rgba(245,158,11,0.3)",
      tag: "#fbbf24",
      hover: "rgba(245,158,11,0.18)",
      glow: "rgba(245,158,11,0.4)",
      bg1: "#4a300a", bg2: "#2a1a04",
    },
    icon: (
      <svg viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="an-card-svg">
        <circle cx="19" cy="19" r="6" stroke="#fbbf24" strokeWidth="2"/>
        <circle cx="19" cy="19" r="2" fill="#fbbf24"/>
        <path d="M19 4v5M19 29v5M4 19h5M29 19h5" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8.5 8.5l3.5 3.5M26 26l3.5 3.5M26 12l3.5-3.5M8.5 29.5l3.5-3.5" stroke="#fbbf24" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "working",
    title: "Working Capital",
    tag: "Flexible",
    desc: "Keep your day-to-day operations running smoothly. Cover payroll, inventory, and expenses with fast, flexible working capital loans.",
    amount: "Up to $1M",
    rate: "7.9% APR",
    color: {
      rgb: "linear-gradient(135deg, #10b981, #059669)",
      soft: "rgba(16,185,129,0.08)",
      border: "rgba(16,185,129,0.3)",
      tag: "#34d399",
      hover: "rgba(16,185,129,0.18)",
      glow: "rgba(16,185,129,0.4)",
      bg1: "#0a3d28", bg2: "#052016",
    },
    icon: (
      <svg viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="an-card-svg">
        <path d="M6 28c0-7.732 6.268-14 13-14 4.418 0 8 2.686 8 6" stroke="#34d399" strokeWidth="2" strokeLinecap="round"/>
        <path d="M32 22l-5 5-5-5" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="19" cy="12" r="4" stroke="#34d399" strokeWidth="2"/>
        <path d="M19 8V5M22 10l2-2M22 14l2 2M16 14l-2 2M16 10l-2-2" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "mca",
    title: "Merchant Cash Advance",
    tag: "Revenue-Based",
    desc: "Get an advance on your future sales. Repay as a percentage of daily revenue — ideal for businesses with strong card sales.",
    amount: "Up to $750K",
    rate: "No Fixed Rate",
    color: {
      rgb: "linear-gradient(135deg, #f43f5e, #e11d48)",
      soft: "rgba(244,63,94,0.08)",
      border: "rgba(244,63,94,0.3)",
      tag: "#fb7185",
      hover: "rgba(244,63,94,0.18)",
      glow: "rgba(244,63,94,0.4)",
      bg1: "#4a0a18", bg2: "#2a040e",
    },
    icon: (
      <svg viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="an-card-svg">
        <rect x="4" y="10" width="30" height="20" rx="4" stroke="#fb7185" strokeWidth="2"/>
        <path d="M4 17h30" stroke="#fb7185" strokeWidth="2"/>
        <rect x="8" y="22" width="8" height="4" rx="1" fill="#fb7185" opacity="0.5"/>
        <path d="M22 24h8" stroke="#fb7185" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M22 26.5h5" stroke="#fb7185" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

function Card({ loan, index, onApply }) {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -10;
    const rotY = ((x - cx) / cx) * 10;
    setRotate({ x: rotX, y: rotY });
    setMousePos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <div
      className="an-card-wrap"
      style={{ animationDelay: `${0.15 + index * 0.1}s` }}
    >
      <div
        ref={cardRef}
        className="an-card"
        onClick={() => onApply(loan)}
        style={{
          "--card-rgb": loan.color.rgb,
          "--card-rgb-soft": loan.color.soft,
          "--card-rgb-border": loan.color.border,
          "--card-tag-color": loan.color.tag,
          "--card-btn-hover": loan.color.hover,
          "--card-glow": loan.color.glow,
          transform: hovered
            ? `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateZ(0) scale(1.02)`
            : "rotateX(0deg) rotateY(0deg) translateZ(0) scale(1)",
          transition: hovered ? "transform 0.08s ease-out" : "transform 0.5s cubic-bezier(0.22,1,0.36,1)",
          boxShadow: hovered ? `0 24px 60px rgba(0,0,0,0.5), 0 0 40px ${loan.color.glow}` : "0 8px 32px rgba(0,0,0,0.3)",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        {/* Shimmer */}
        <div
          className="an-card-shimmer"
          style={{ "--mx": `${mousePos.x}%`, "--my": `${mousePos.y}%` }}
        />

        <div className="an-card-inner">
          {/* Image zone */}
          <div className="an-card-img">
            <div
              className="an-card-img-bg"
              style={{
                background: `radial-gradient(ellipse at center, ${loan.color.bg1} 0%, ${loan.color.bg2} 100%)`,
              }}
            />
            {/* Decorative rings */}
            <div style={{
              position: "absolute",
              width: 200, height: 200,
              borderRadius: "50%",
              border: `1px solid ${loan.color.border}`,
              opacity: 0.3,
              transform: "scale(0.6)",
            }} />
            <div style={{
              position: "absolute",
              width: 200, height: 200,
              borderRadius: "50%",
              border: `1px solid ${loan.color.border}`,
              opacity: 0.15,
            }} />
            <div className="an-card-icon-wrap">
              {loan.icon}
            </div>
          </div>

          {/* Body */}
          <div className="an-card-body">
            <span className="an-card-tag">{loan.tag}</span>
            <div className="an-card-title">{loan.title}</div>
            <p className="an-card-desc">{loan.desc}</p>

            <div className="an-card-meta">
              <div className="an-card-stat">
                <span className="an-card-stat-val">{loan.amount}</span>
                <span className="an-card-stat-lbl">Max Amount</span>
              </div>
              <div className="an-card-stat">
                <span className="an-card-stat-val">{loan.rate}</span>
                <span className="an-card-stat-lbl">Starting Rate</span>
              </div>
            </div>

            <button
              type="button"
              className="an-card-btn"
              onClick={() => onApply(loan)}
            >
              Apply Now
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Particles() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    lx: `${Math.random() * 100}%`,
    dx: `${(Math.random() - 0.5) * 120}px`,
    dur: `${8 + Math.random() * 14}s`,
    delay: `-${Math.random() * 20}s`,
  }));
  return (
    <div className="an-particles">
      {particles.map((p) => (
        <div
          key={p.id}
          className="an-particle"
          style={{
            "--lx": p.lx,
            "--dx": p.dx,
            "--dur": p.dur,
            "--delay": p.delay,
          }}
        />
      ))}
    </div>
  );
}

export default function ApplyNow() {
  const [applied, setApplied] = useState(null);
  const navigate = useNavigate();

  const handleApply = (loan) => {
    setApplied(loan);
    navigate('/form');
  };

  return (
    <>
      <div className="an-root">
        {/* Background */}
        <div className="an-bg">
          <div className="an-bg-orb" />
        </div>
        <div className="an-grid" />
        <Particles />

        {/* Toast notification */}
        {applied && (
          <div style={{
            position: "absolute",
            top: 28,
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(13,15,26,0.96)",
            border: `1px solid ${applied.color.border}`,
            borderRadius: 14,
            padding: "14px 28px",
            color: applied.color.tag,
            fontFamily: "'DM Sans',sans-serif",
            fontWeight: 600,
            fontSize: 14,
            zIndex: 100,
            boxShadow: `0 8px 40px ${applied.color.glow}`,
            backdropFilter: "blur(12px)",
            animation: "fadeUp 0.4s ease",
            display: "flex",
            alignItems: "center",
            gap: 10,
            whiteSpace: "nowrap",
          }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M5.5 9l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Application started for {applied.title}!
          </div>
        )}

        {/* Main content */}
        <div className="an-content">
          {/* Hero */}
          <div className="an-hero">
            <div className="an-hero-badge">
              <div className="an-hero-badge-dot" />
              SherFunding Capital Solutions
            </div>
            <h1 className="an-hero-title">
              Fund Your <span>Business Growth</span>
            </h1>
            <p className="an-hero-sub">
              Choose from our range of flexible financing options. Fast approvals, competitive rates, and funding within 24 hours.
            </p>
          </div>

          {/* Cards grid */}
          <div className="an-grid-wrap">
            {LOANS.map((loan, i) => (
              <Card key={loan.id} loan={loan} index={i} onApply={handleApply} />
            ))}
          </div>

          {/* CTA */}
          <div className="an-cta">
            <p className="an-cta-text">Not sure which loan fits your business?</p>
            <button className="an-cta-btn"
              onClick={() => navigate('/contact')}
              // onClick={ ()=> window.location.href="/contact"}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 2v14M2 9h14" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </>
  );
}