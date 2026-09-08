"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  const goToSection = (id: string) => {
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    router.push(`/#${id}`);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <Image
            src="/monarch_logo.png"
            alt="Monarch AI Logo"
            width={140}
            height={36}
            className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Platform", id: "platform" },
            { label: "Capabilities", id: "capabilities" },
            { label: "Trust & Ethics", id: "trust-ethics" },
            { label: "About", id: "about" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => goToSection(item.id)}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => goToSection("contact")}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium bg-[#0094C5] text-white hover:bg-[#0094C5]/90 h-11 px-6 py-2 shadow-md shadow-[#0094C5]/20 transition-colors cursor-pointer"
          >
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}
