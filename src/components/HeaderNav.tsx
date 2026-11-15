import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderNavProps {
  onOpenConsultation: (topic?: string) => void;
}

const NAV_LINKS = [
  { href: '#architecture', label: 'Архитектура' },
  { href: '#hospitality', label: 'Среда и парк' },
  { href: '#entrances', label: 'Подъезды' },
  { href: '#engineering', label: 'Инженерия' },
  { href: '#residences', label: 'Лоты' },
];

export function HeaderNav({ onOpenConsultation }: HeaderNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#E5E0D8] bg-[#F7F5F2]/95 backdrop-blur-xs">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-8 px-5 sm:px-8">
        <a
          href="#top"
          className="font-display text-2xl font-semibold tracking-[0.08em] text-[#181715] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#8A6A4B]"
        >
          РЕНОМЕ
        </a>

        <nav
          aria-label="Основная навигация"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#57534E]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#181715] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#8A6A4B]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onOpenConsultation('Приватный показ клубного дома')}
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-[#181715] px-4 py-2 text-xs font-medium text-[#F7F5F2] hover:bg-[#2F2C28] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#8A6A4B]"
          >
            Приватный показ
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Закрыть меню' : 'Открыть меню'}
            className="md:hidden rounded-lg p-2 text-[#181715] hover:bg-[#EFECE6] focus-visible:outline-2 focus-visible:outline-[#8A6A4B]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-[#E5E0D8] bg-[#F7F5F2] px-5 py-4 space-y-2">
          <nav className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#181715] hover:bg-[#EFECE6]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenConsultation('Приватный показ клубного дома');
              }}
              className="w-full rounded-lg bg-[#181715] px-4 py-2.5 text-sm font-medium text-[#F7F5F2]"
            >
              Приватный показ
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
