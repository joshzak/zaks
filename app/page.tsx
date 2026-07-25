import Image from "next/image";
import { companies, type Company } from "./portfolio";
import { activeIdentityImagePath } from "./site-config";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Zaks & Co",
  url: "https://zaks.co",
  description: "A couple of investors turning ideas into assets.",
  email: "the@zaks.co",
  founder: [
    { "@type": "Person", name: "Josh Zak" },
    { "@type": "Person", name: "Tessa Zak" }
  ]
};

function CardContents({ company }: { company: Company }) {
  return <>
    <div className="company-logo" aria-hidden="true">
      {company.logoPath ? <img src={company.logoPath} alt="" /> : <span className="placeholder-mark">Z&amp;Co.</span>}
    </div>
    <div className="company-copy">
      <h2>{company.name}</h2>
      <p>{company.description}</p>
      {company.placeholder
        ? company.ctaUrl && <a className="placeholder-cta" href={company.ctaUrl}>{company.ctaLabel}</a>
        : <div className="company-meta"><span>{company.category}</span><span>{company.year}</span></div>
      }
    </div>
  </>;
}

export default function Home() {
  return <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }}
    />
    <main className="site-shell">
    <h1 className="masthead" aria-label="Zaks and Company">
      <span className="brand-left">ZAKS</span><span className="ampersand">&amp;</span><span className="brand-right">CO</span>
    </h1>

    <section className="zaks-panel" aria-labelledby="zaks-story">
      <div className="zaks-content">
        <Image
          className="zaks-photo"
          src={activeIdentityImagePath}
          alt="Josh and Tessa Zak together in Croatia"
          width={1080}
          height={810}
          sizes="(max-width: 540px) calc(100vw - 36px), (max-width: 1080px) min(540px, calc(100vw - 48px)), min(465px, 36.328125vw)"
          quality={94}
          preload
        />
        <div className="identity-block">
          <Image
            className="zaks-seal"
            src="/logos/zc-wax-seal-v2.webp"
            alt=""
            aria-hidden="true"
            width={256}
            height={257}
            sizes="(max-width: 540px) 92px, 118px"
            quality={92}
          />
          <div className="identity-copy">
            <p className="manifesto" id="zaks-story">A couple of investors<br />turning ideas into assets.</p>
            <p className="signature"><span>Josh &amp; Tessa Zak</span><span className="signature-divider" aria-hidden="true" /><a href="mailto:the@zaks.co">the@zaks.co</a></p>
          </div>
        </div>
      </div>
    </section>

    <section className="portfolio-panel" aria-label="Zaks and Company portfolio">
      <div className="portfolio-list">
        {companies.map((company, index) => company.enabled && company.url
          ? <a className="company-card" href={company.url} key={`${company.name}-${index}`}><CardContents company={company} /></a>
          : <article className="company-card company-card--placeholder" aria-label={`${company.name}, placeholder`} key={`${company.name}-${index}`}><CardContents company={company} /></article>
        )}
      </div>
    </section>
    </main>
  </>;
}
