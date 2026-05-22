import { GithubLogo, TwitterLogo, LinkedinLogo } from "@/lib/icons";

const footerLinks = [
  {
    label: "Product",
    links: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "API", href: "#" },
    ],
  },
  {
    label: "Company",
    links: [
      { name: "Contact", href: "#contact" },
      { name: "Blog", href: "#" },
    ],
  },
  {
    label: "Legal",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200/50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="sm:col-span-2 md:col-span-1">
            <span className="text-lg font-semibold tracking-tight text-zinc-900">
              Karios
            </span>
            <p className="mt-3 text-sm leading-relaxed text-zinc-500 max-w-[30ch]">
              Real-time intelligence for engineering teams that need to move
              fast without breaking things.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                className="rounded-full border border-zinc-200 p-2 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-700"
                aria-label="GitHub"
              >
                <GithubLogo size={16} />
              </a>
              <a
                href="#"
                className="rounded-full border border-zinc-200 p-2 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-700"
                aria-label="Twitter"
              >
                <TwitterLogo size={16} />
              </a>
              <a
                href="#"
                className="rounded-full border border-zinc-200 p-2 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-700"
                aria-label="LinkedIn"
              >
                <LinkedinLogo size={16} />
              </a>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.label}>
              <h4 className="mb-4 text-xs font-semibold tracking-widest text-zinc-500 uppercase">
                {group.label}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-600 transition-colors hover:text-zinc-900"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-zinc-100 pt-8 text-xs text-zinc-400 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Karios, Inc. All rights reserved.</p>
          <p>
            Built by{" "}
            <a
              href="https://lazarpetkovic.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors hover:text-zinc-600"
            >
              Lazar Petkovic
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
