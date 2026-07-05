"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { PILLARS, NAV_PAGES } from "@/content/navigation";
import { useQuoteModal } from "@/hooks/useQuoteModal";
import styles from "./PillNav.module.css";

interface NavItem {
  key: string;
  label: string;
  href?: string;
  drop?: boolean;
  cta?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { key: "inicio", label: "Inicio", href: "/" },
  { key: "servicios", label: "Servicios", href: "/servicios", drop: true },
  { key: "nosotros", label: "Nosotros", href: "/nosotros" },
  { key: "contacto", label: "Contacto", cta: true },
  ...NAV_PAGES.map((p) => ({ key: p.key, label: p.label, href: p.href })),
];

export function PillNav() {
  const pathname = usePathname();
  const { open } = useQuoteModal();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const sentinelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const io = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting), {
      rootMargin: "-64px 0px 0px 0px",
    });
    io.observe(sentinel);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <nav className={styles.nav} aria-label="Principal">
        <div className={styles.inner}>
          <Link href="/" className={styles.logo} aria-label="beleafdesign — inicio">
            <Image className={styles.logoImg} src="/images/logo-dark.svg" alt="beleafdesign" width={150} height={37} priority />
          </Link>

          <div className={`${styles.rail} ${scrolled ? styles.railScrolled : ""}`} role="menubar">
            {NAV_ITEMS.map((item) =>
              item.cta ? (
                <button key={item.key} type="button" className={styles.pill} onClick={() => open()}>
                  <NavLabel label={item.label} active={false} />
                </button>
              ) : item.drop ? (
                <div
                  key={item.key}
                  className={styles.dropWrap}
                  onMouseEnter={() => setDropOpen(true)}
                  onMouseLeave={() => setDropOpen(false)}
                >
                  <Link href={item.href ?? "/"} className={`${styles.pill} ${pathname === item.href ? styles.on : ""}`}>
                    <NavLabel label={item.label} active={pathname === item.href} />
                  </Link>
                  <div className={`${styles.drop} ${dropOpen ? styles.dropShow : ""}`}>
                    <div className={styles.dropHead}>Páginas de servicio</div>
                    {PILLARS.map((p) => (
                      <Link key={p.slug} href={p.slug} className={styles.dropItem}>
                        {p.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.key}
                  href={item.href ?? "/"}
                  className={`${styles.pill} ${pathname === item.href ? styles.on : ""}`}
                >
                  <NavLabel label={item.label} active={pathname === item.href} />
                </Link>
              ),
            )}
          </div>

          <button type="button" className={styles.cta} onClick={() => open()}>
            Cotiza tu proyecto
          </button>

          <button
            type="button"
            className={styles.burger}
            aria-label="Menú"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <div className={`${styles.mobile} ${mobileOpen ? styles.mobileShow : ""}`}>
          {NAV_ITEMS.map((item) =>
            item.cta ? (
              <button
                key={item.key}
                type="button"
                className={styles.mLink}
                onClick={() => {
                  setMobileOpen(false);
                  open();
                }}
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={item.key}
                href={item.href ?? "/"}
                className={`${styles.mLink} ${pathname === item.href ? styles.mLinkOn : ""}`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ),
          )}
          <div className={styles.mSub}>
            {PILLARS.map((p) => (
              <Link key={p.slug} href={p.slug} className={styles.mSublink} onClick={() => setMobileOpen(false)}>
                {p.short}
              </Link>
            ))}
          </div>
          <button
            type="button"
            className={`${styles.cta} ${styles.ctaMobile}`}
            onClick={() => {
              setMobileOpen(false);
              open();
            }}
          >
            Cotiza tu proyecto
          </button>
        </div>
      </nav>
      <span id="nav-sentinel" ref={sentinelRef} />
    </>
  );
}

function NavLabel({ label, active }: { label: string; active: boolean }) {
  return (
    <span className={`${styles.stack} ${active ? styles.on : ""}`} aria-hidden="true">
      <span className={styles.l1}>{label}</span>
      <span className={styles.l2}>{label}</span>
      {active && <span className={styles.dot} />}
    </span>
  );
}
