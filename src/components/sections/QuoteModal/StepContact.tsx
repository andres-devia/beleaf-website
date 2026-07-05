import styles from "./QuoteModal.module.css";

interface StepContactProps {
  name: string;
  email: string;
  phone: string;
  company: string;
  onChange: (patch: { name?: string; email?: string; phone?: string; company?: string }) => void;
}

export function StepContact({ name, email, phone, company, onChange }: StepContactProps) {
  return (
    <>
      <h3 className={styles.heading}>¿A quién le respondemos?</h3>
      <div className={styles.col2}>
        <label className="field">
          <span>Nombre</span>
          <input required placeholder="¿Cómo te llamas?" value={name} onChange={(e) => onChange({ name: e.target.value })} />
        </label>
        <label className="field">
          <span>Correo</span>
          <input required type="email" placeholder="hola@empresa.co" value={email} onChange={(e) => onChange({ email: e.target.value })} />
        </label>
        <label className="field">
          <span>
            Teléfono <em className={styles.opt}>opcional</em>
          </span>
          <input type="tel" placeholder="+57 300 123 4567" value={phone} onChange={(e) => onChange({ phone: e.target.value })} />
        </label>
        <label className="field">
          <span>
            Empresa <em className={styles.opt}>opcional</em>
          </span>
          <input placeholder="Nombre de tu empresa" value={company} onChange={(e) => onChange({ company: e.target.value })} />
        </label>
      </div>
    </>
  );
}
