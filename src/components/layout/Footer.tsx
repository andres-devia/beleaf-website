import Link from "next/link";
import Image from "next/image";
import { Mail, MessageCircle, MapPin } from "lucide-react";
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
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.top}>
        <div className={styles.brand}>
          <Link href="/" aria-label="beleafdesign — inicio">
            <Image className={styles.logoImg} src="/images/logo-dark.svg" alt="beleafdesign" width={150} height={37} />
          </Link>
          <p className={styles.tag}>Diseño, tecnología y estrategia para marcas que quieren crecer.</p>
        </div>

        {FOOTER_COLUMNS.map((col) => (
          <div key={col.heading}>
            <h4 className={styles.colHead}>{col.heading}</h4>
            <div className={styles.links}>
              {col.links.map((link) => (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div className={styles.contactCol}>
          <h4 className={styles.colHead}>Contacto</h4>
          <div className={styles.contact}>
            <a href={`mailto:${SITE.email}`}>
              <Mail size={16} className={styles.contactIcon} />
              {SITE.email}
            </a>
            <a href={SITE.socials.instagram} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={16} className={styles.contactIcon} />
              WhatsApp
            </a>
            <span className={styles.place}>
              <MapPin size={16} className={styles.contactIcon} />
              Medellín, Colombia — atención LATAM & US
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

      <div className={styles.legal}>
        <div className={styles.legalIn}>
          <span className={styles.legalCopy}>© 2026 beleafdesign. Todos los derechos reservados.</span>
          <span className={styles.legalCopy}>Hecho en Medellín, Colombia.</span>
        </div>
      </div>
    </footer>
  );
}
