import Link from 'next/link';
import { navItems, profile } from '@/lib/content';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-violet-500/15 bg-ink-900">
      <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-violet-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
        <div className="max-w-sm">
          <h3 className="text-2xl font-bold">
            <span className="text-violet-400">{profile.firstName.charAt(0)}</span>
            {profile.firstName.slice(1)}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            A creative portfolio showcasing innovative XR projects and immersive experiences through
            interactive design.
          </p>
          <div className="mt-6 flex gap-3">
            <FooterSocial href={profile.socials.github} label="GitHub">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </FooterSocial>
            <FooterSocial href={profile.socials.linkedin} label="LinkedIn">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </FooterSocial>
            <FooterSocial href={`mailto:${profile.email}`} label="Email">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
            </FooterSocial>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted">Navigate</h4>
          <ul className="space-y-2.5">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link href={item.path} className="text-paper/70 transition-colors hover:text-violet-300">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted">Let&apos;s build something</h4>
          <p className="mb-5 text-sm leading-relaxed text-paper/70">
            Have an idea or an opportunity in XR? I&apos;m always open to a conversation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-accent px-6 py-3 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
          >
            Get in touch
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/10 px-6 py-6 text-sm text-muted md:flex-row">
        <p>
          &copy; {year} {profile.name}. All rights reserved.
        </p>
        <p>
          Built with <span className="text-violet-300">Next.js</span> &amp; a lot of curiosity.
        </p>
      </div>
    </footer>
  );
}

function FooterSocial({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-paper/70 transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-500/15 hover:text-paper"
    >
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        {children}
      </svg>
    </a>
  );
}
