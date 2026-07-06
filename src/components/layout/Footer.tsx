"use client";

import { useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Mail, MessageCircle, MapPin, ArrowRight } from "lucide-react";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { FOOTER_COLUMNS } from "@/content/navigation";
import { SITE } from "@/content/site";
import { InstagramIcon, LinkedinIcon, FacebookIcon, GoogleIcon } from "@/components/ui/SocialIcons";
import styles from "./Footer.module.css";

const SOCIALS = [
  { key: "ig", label: "Instagram de beleafdesign", href: SITE.socials.instagram, icon: <InstagramIcon /> },
  { key: "li", label: "LinkedIn de beleafdesign", href: SITE.socials.linkedin, icon: <LinkedinIcon /> },
  { key: "fb", label: "Facebook de beleafdesign", href: SITE.socials.facebook, icon: <FacebookIcon /> },
  { key: "gb", label: "Perfil de Google Business de beleafdesign", href: SITE.socials.googleBusiness, icon: <GoogleIcon /> },
];

export function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const switchLocale = (next: AppLocale) => {
    if (next === locale) return;
    router.replace(pathname, { locale: next });
  };

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.top}>
        <div className={styles.brand}>
          <Link href="/" aria-label="beleafdesign — inicio">
            <Image className={styles.logoImg} src="/images/logo-dark.svg" alt="beleafdesign" width={150} height={37} />
          </Link>
          <p className={styles.tag}>{t("tagline")}</p>

          <div className={styles.langToggle} role="group" aria-label="Language / Idioma">
            <button
              type="button"
              className={`${styles.langBtn} ${locale === "en" ? styles.langBtnOn : ""}`}
              aria-pressed={locale === "en"}
              onClick={() => switchLocale("en")}
            >
              {t("langEn")}
            </button>
            <button
              type="button"
              className={`${styles.langBtn} ${locale === "es" ? styles.langBtnOn : ""}`}
              aria-pressed={locale === "es"}
              onClick={() => switchLocale("es")}
            >
              {t("langEs")}
            </button>
          </div>
        </div>

        {FOOTER_COLUMNS.map((col) => (
          <div key={col.key}>
            <h4 className={styles.colHead}>{col.key === "services" ? t("servicesHeading") : t("agencyHeading")}</h4>
            <div className={styles.links}>
              {col.links.map((link) => (
                <Link key={link.key} href={link.href as "/servicios"}>
                  {t(`links.${link.key}`)}
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div className={styles.contactCol}>
          <h4 className={styles.colHead}>{t("contactHeading")}</h4>
          <div className={styles.contact}>
            <a href={`mailto:${SITE.email}`}>
              <Mail size={16} className={styles.contactIcon} />
              {SITE.email}
            </a>
            <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={16} className={styles.contactIcon} />
              {t("whatsapp")}
            </a>
            <span className={styles.place}>
              <MapPin size={16} className={styles.contactIcon} />
              {t("location")}
            </span>
          </div>
          <div className={styles.socials}>
            {SOCIALS.map((s) => (
              <a key={s.key} className={styles.soc} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.newsletter}>
        <span className={styles.newsletterDot} aria-hidden="true" />
        <div className={styles.newsletterIn}>
          <div>
            <span className={styles.newsletterLabel}>
              <Mail size={14} />
              {t("newsletterLabel")}
            </span>
            <p className={styles.newsletterTitle}>{t("newsletterTitle")}</p>
          </div>
          <form
            className={styles.newsletterForm}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="email"
              required
              className={styles.newsletterInput}
              placeholder={t("newsletterPlaceholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className={styles.newsletterButton} disabled={!emailValid}>
              {t("newsletterButton")}
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>

      <div className={styles.legal}>
        <div className={styles.legalIn}>
          <span className={styles.legalCopy}>{t("legalCopy", { year: new Date().getFullYear() })}</span>
          <span className={styles.legalCopy}>{t("legalMade")}</span>
        </div>
      </div>
    </footer>
  );
}
