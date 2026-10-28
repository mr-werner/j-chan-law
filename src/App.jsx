import React, { useEffect, useState } from "react";
import {
  ArrowRight, ArrowUpRight, Briefcase, Building, Car, FileText, Gavel, Home, Landmark, Mail, MapPin, Menu, Phone, Printer,
  Scale, Shield, Users, X,
} from "lucide-react";
import { ConceptWidget, StudioCredit } from "./concept.jsx";
import logo from "./assets/jcl-logo.png";
import portrait from "./assets/chan-portrait.jpg";

// ------------------------------------------------------------ Content (from jchanlawct.com: home, about, practice,
// attorney profile, pro bono, directions and contact info pages)
const COMPANY = "J Chan Law, LLC";
const ABBR = "jcl";
const END_DATE = "2026-12-02T23:59:59-05:00";
const ADMITTED = 1974;
const YEARS = new Date().getFullYear() - ADMITTED;
const PHONE = "(203) 942-2386";
const PHONE_TEL = "+12039422386";
const DIRECT = "(203) 798-3829";
const DIRECT_TEL = "+12037983829";
const FAX = "(203) 900-0248";
const EMAIL = "JChan@jchanlawct.com";
const ADDRESS = ["44 North Street", "Danbury, CT 06810"];
const MAP_URL = "https://www.google.com/maps/search/?api=1&query=44+North+Street+Danbury+CT+06810";

const NAV = [
  ["Practice Areas", "#practice"],
  ["Attorney Chan", "#attorney"],
  ["Record", "#record"],
  ["Pro Bono", "#probono"],
  ["Contact", "#contact"],
];

const PRACTICE = [
  { icon: Gavel, title: "Litigation", items: ["Personal injury, including auto accidents and slip and fall injuries", "Business disputes", "Real estate & construction", "Mediation & arbitration"] },
  { icon: Shield, title: "Criminal Defense", items: ["State and federal matters", "Felony and misdemeanor charges", "Motor vehicle matters, including DUI and traffic offenses", "Restraining orders and juvenile matters"] },
  { icon: Users, title: "Family Law", items: ["Divorce and separation", "Child custody, parenting and visitation", "Alimony and child support", "Prenuptial agreements, paternity, restraining orders"] },
  { icon: Home, title: "Real Estate", items: ["Commercial & residential closings", "Refinances", "Land use", "Lender representation"] },
  { icon: Briefcase, title: "Business Law", items: ["Formation of business entities", "Sales, mergers & acquisitions", "Real estate & construction", "Employment agreements and relations"] },
  { icon: FileText, title: "Estate Planning & Probate", items: ["Wills", "Probate administration"] },
  { icon: Building, title: "Landlord & Tenant", items: ["Eviction", "Foreclosure", "Renters' right to relocation", "Security deposits and rent increases"] },
  { icon: Landmark, title: "Administrative Law", items: ["Governmental legal procedures", "Regulations"] },
];

const ADMISSIONS = [
  ["1974", "Connecticut"],
  ["1976", "U.S. District Court, District of Connecticut"],
  ["1982", "U.S. Court of Appeals, Second Circuit"],
  ["1982", "U.S. Supreme Court"],
  ["1993", "U.S. District Court, Southern District of New York"],
  ["1994", "U.S. District Court, Eastern District of New York"],
];

const CASES = [
  ["Abel v. Langellotti", "172 Conn. 286", "Connecticut Supreme Court"],
  ["George v. St. Ann's Church", "182 Conn. 322", "Connecticut Supreme Court"],
  ["Grenier v. Compratt", "189 Conn. 144", "Connecticut Supreme Court"],
  ["State v. Morrill", "193 Conn. 602", "Connecticut Supreme Court"],
  ["In re Theresa S.", "196 Conn. 18", "Connecticut Supreme Court"],
  ["State v. Lynch", "287 Conn. 464", "Connecticut Supreme Court"],
  ["Powers v. Grenier Construction, Inc.", "10 Conn. App. 56", "Connecticut Appellate Court"],
  ["R. Zemper v. Scozzafava", "28 Conn. App. 557", "Connecticut Appellate Court"],
  ["State v. Nero", "122 Conn. App. 763", "Connecticut Appellate Court"],
];

const SERVICE = [
  ["President", "Danbury Bar Association, 1985–1986"],
  ["Board of Governors", "Connecticut Bar Association, 1989–1994"],
  ["House of Delegates", "Connecticut Bar Association, 1989–1991"],
  ["Fact-Finder & Attorney Trial Referee", "State of Connecticut, since 1984"],
  ["Special Public Defender", "Danbury Superior Court, 1980"],
  ["Special Court Advocate", "Danbury Superior Court Juvenile Matters, 1983"],
];

const ASSOCIATIONS = [
  "Connecticut Bar Association", "Danbury Bar Association", "Connecticut Trial Lawyers Association",
  "National Asian Pacific American Bar Association", "Connecticut Asian Pacific American Bar Association", "Connecticut Criminal Defense Lawyers Association",
];

// ------------------------------------------------------------ Components
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <a href="#top" className="brand" aria-label="J Chan Law home"><img src={logo} alt="J Chan Law, LLC · Attorney at Law" width="480" height="86" /></a>
      <nav className={`nav${open ? " is-open" : ""}`} aria-label="Main">
        {NAV.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-phone" href={`tel:${PHONE_TEL}`} onClick={() => setOpen(false)}><Phone size={16} /> {PHONE}</a>
      </nav>
      <button type="button" className="menu-btn" onClick={() => setOpen((v) => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
        {open ? <X size={26} /> : <Menu size={26} />}
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Attorney at Law · Danbury, Connecticut</p>
          <h1>Trusted counsel in Danbury <em>since {ADMITTED}.</em></h1>
          <p className="lede">Attorney Jackie Chan has tried civil and criminal cases in Connecticut's Superior, Appellate and Supreme Courts for {YEARS} years. A full-service practice with local roots, for families, business owners and anyone facing an important legal matter.</p>
          <div className="hero-actions">
            <a className="btn btn-gold" href="#contact">Request a consultation <ArrowRight size={18} /></a>
            <a className="btn btn-line" href={`tel:${PHONE_TEL}`}><Phone size={18} /> {PHONE}</a>
          </div>
          <dl className="hero-facts">
            <div><dt>{YEARS}</dt><dd>Years in practice</dd></div>
            <div><dt>9</dt><dd>Reported appellate cases</dd></div>
            <div><dt>8</dt><dd>Practice areas</dd></div>
          </dl>
        </div>
        <figure className="hero-portrait">
          <div className="frame"><img src={portrait} alt="Attorney Jackie Chan" width="1100" height="1650" /></div>
          <figcaption><strong>Jackie Chan</strong><span>Principal · Admitted {ADMITTED}</span></figcaption>
        </figure>
      </div>
    </section>
  );
}

function Pledge() {
  return (
    <section className="pledge" aria-label="Our commitment">
      <div className="wrap pledge-grid">
        <blockquote>“Clients expect us to help them achieve their goals. They entrust us with their most important legal matters.”</blockquote>
        <span className="pledge-mark" aria-hidden="true"><Scale size={30} /></span>
        <blockquote>“We communicate openly, follow up frequently and are always available. Our clients' goals become our goals.”</blockquote>
      </div>
    </section>
  );
}

function Practice() {
  return (
    <section className="section practice" id="practice">
      <div className="wrap">
        <header className="sec-head">
          <p className="eyebrow">Areas of practice</p>
          <h2>One office for the matters that change your life.</h2>
          <p>Personal injuries, criminal charges, divorce and custody, buying and selling a home, forming a business or settling an estate. We take the time to explain your options, give you straight advice, and stay with you through the result.</p>
        </header>
        <div className="practice-grid">
          {PRACTICE.map(({ icon: Icon, title, items }) => (
            <article key={title} className="area">
              <h3><Icon size={24} /><span>{title}</span></h3>
              <ul>{items.map((it) => <li key={it}>{it}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Attorney() {
  return (
    <section className="section attorney" id="attorney">
      <div className="wrap attorney-grid">
        <div className="bio">
          <p className="eyebrow">Meet your attorney</p>
          <h2>Jackie Chan, Principal</h2>
          <p>Attorney Chan was admitted to the practice of law in {ADMITTED} and has extensive experience in civil and criminal trial and appellate matters. He has tried numerous criminal and civil jury and court-side trials in Connecticut Superior Court and the federal courts, and has argued cases before the Connecticut Supreme and Appellate Courts.</p>
          <p>He is well versed in commercial and residential real estate, mortgage lending, business formation and dissolution, wills and trusts, and probate administration.</p>
          <p>Born in mainland China, he immigrated to the United States as an infant and has called Danbury home since 1950. Away from the office he enjoys golfing, skiing, cycling, travel and cooking.</p>
          <div className="edu">
            <div><span>J.D.</span><strong>St. John's University School of Law</strong><em>1973</em></div>
            <div><span>B.A.</span><strong>Colgate University</strong><em>1970</em></div>
          </div>
        </div>
        <aside className="admissions" aria-label="Bar admissions">
          <h3>Bar admissions</h3>
          <ol>
            {ADMISSIONS.map(([y, court]) => <li key={court}><span>{y}</span>{court}</li>)}
          </ol>
          <div className="award"><span>Award</span><strong>American Dream Award</strong><em>Danbury Bar Association, 2003</em></div>
        </aside>
      </div>
    </section>
  );
}

function Record() {
  return (
    <section className="section record" id="record">
      <div className="wrap">
        <header className="sec-head light">
          <p className="eyebrow">On the record</p>
          <h2>Argued before Connecticut's highest courts.</h2>
          <p>Reported decisions from Attorney Chan's appellate work, plus decades of service to the courts and the bar.</p>
        </header>
        <div className="record-grid">
          <ol className="docket">
            {CASES.map(([name, cite, court], i) => (
              <li key={cite}>
                <span className="docket-no">{String(i + 1).padStart(2, "0")}</span>
                <div><strong><em>{name}</em></strong><span>{cite} · {court}</span></div>
              </li>
            ))}
          </ol>
          <div className="service">
            <h3>Service to the courts & the bar</h3>
            <ul>{SERVICE.map(([role, org]) => <li key={role}><strong>{role}</strong><span>{org}</span></li>)}</ul>
            <h3>Professional associations</h3>
            <div className="chips">{ASSOCIATIONS.map((a) => <span key={a}>{a}</span>)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProBono() {
  return (
    <section className="section probono" id="probono">
      <div className="wrap probono-grid">
        <div>
          <p className="eyebrow">Pro bono</p>
          <h2>Dedication, regardless of ability to pay.</h2>
        </div>
        <div>
          <p>The firm is committed to serving the legal needs of those who can't afford representation, with the same commitment and diligence we give every traditional client. Our attorneys have served as Superior Court Fact Finder, Arbitrator, Special Master and court-appointed Guardian Ad Litem in criminal matters on a pro bono basis, and the firm has been recognized for that commitment.</p>
          <p className="probono-note">Attorney Chan also served on the Board of Directors of Nutmeg Federal Savings and Loan Association from 1988 to 2000.</p>
        </div>
      </div>
    </section>
  );
}

function ConsultForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", notes: "", website: "" });
  const [status, setStatus] = useState("idle");
  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  async function submit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const d = await r.json().catch(() => ({}));
      setStatus(r.ok && d.success ? (d.demo ? "demo" : "sent") : "error");
    } catch { setStatus("error"); }
  }
  if (status === "sent" || status === "demo") {
    return (
      <div className="form-done">
        <h3>Thank you.</h3>
        <p>{status === "demo" ? `This concept's form isn't connected yet. Please call ${PHONE} or email ${EMAIL}.` : "Your request has been received. We'll call you back shortly."}</p>
      </div>
    );
  }
  return (
    <form className="consult-form" onSubmit={submit}>
      <label>Full name *<input required value={form.name} onChange={(e) => update("name", e.target.value)} autoComplete="name" /></label>
      <div className="form-row">
        <label>Phone *<input required type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} autoComplete="tel" /></label>
        <label>Email<input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} autoComplete="email" /></label>
      </div>
      <label>What is your matter about?
        <select value={form.service} onChange={(e) => update("service", e.target.value)}>
          <option value="">Select a practice area...</option>
          {PRACTICE.map((p) => <option key={p.title}>{p.title}</option>)}
          <option>Something else</option>
        </select>
      </label>
      <label>Briefly describe your situation<textarea rows={4} value={form.notes} onChange={(e) => update("notes", e.target.value)} placeholder="Please don't include confidential details here." /></label>
      <input className="hp" tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => update("website", e.target.value)} aria-hidden="true" />
      {status === "error" && <p className="form-error" role="alert">That didn't go through. Please call {PHONE}.</p>}
      <button className="btn btn-gold" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Request a consultation"} <ArrowRight size={18} /></button>
      <p className="form-fine">Sending this form does not create an attorney-client relationship.</p>
    </form>
  );
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-info">
          <p className="eyebrow">Contact</p>
          <h2>Talk it through with an attorney.</h2>
          <p>Call the office, email Attorney Chan directly, or send a short note and we'll call you back.</p>
          <ul className="contact-list">
            <li><Phone size={18} /><div><span>Office</span><a href={`tel:${PHONE_TEL}`}>{PHONE}</a></div></li>
            <li><Phone size={18} /><div><span>Direct line</span><a href={`tel:${DIRECT_TEL}`}>{DIRECT}</a></div></li>
            <li><Mail size={18} /><div><span>Email</span><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div></li>
            <li><Printer size={18} /><div><span>Fax</span>{FAX}</div></li>
            <li><MapPin size={18} /><div><span>Office</span><a href={MAP_URL} target="_blank" rel="noopener noreferrer">{ADDRESS[0]}, {ADDRESS[1]} <ArrowUpRight size={14} /></a></div></li>
          </ul>
          <a className="directions" href={MAP_URL} target="_blank" rel="noopener noreferrer"><Car size={18} /> Get driving directions</a>
        </div>
        <div className="contact-card"><h3>Request a consultation</h3><ConsultForm /></div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <img className="footer-logo" src={logo} alt="J Chan Law, LLC" width="480" height="86" loading="lazy" />
          <p>A full-service law firm with local roots and global reach.</p>
        </div>
        <div>
          <h4>Office</h4>
          <p>{ADDRESS[0]}<br />{ADDRESS[1]}</p>
          <p><a href={`tel:${PHONE_TEL}`}>{PHONE}</a><br />Fax {FAX}</p>
        </div>
        <div>
          <h4>Practice</h4>
          {PRACTICE.slice(0, 5).map((p) => <a key={p.title} href="#practice">{p.title}</a>)}
        </div>
      </div>
      <div className="wrap footer-base">
        <p className="disclaimer">Attorney advertising. The information on this website is general and is not legal advice. Contacting the firm does not create an attorney-client relationship. Prior results do not guarantee a similar outcome.</p>
        <div className="footer-line">
          <span>© {new Date().getFullYear()} {COMPANY} · Independent concept, not for official use</span>
          <StudioCredit />
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Pledge />
        <Practice />
        <Attorney />
        <Record />
        <ProBono />
        <Contact />
      </main>
      <Footer />
      <ConceptWidget company={COMPANY} abbr={ABBR} endDate={END_DATE} />
    </>
  );
}
