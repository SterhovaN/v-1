import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { ENGINEERING_CATEGORIES, type EngineeringCategory } from '../data/renomeData';

interface EngineeringSectionProps {
  onRequestSpec: (topic: string) => void;
}

export function EngineeringSection({ onRequestSpec }: EngineeringSectionProps) {
  const [activeTab, setActiveTab] =
    useState<EngineeringCategory['id']>('climate');

  const current =
    ENGINEERING_CATEGORIES.find((cat) => cat.id === activeTab) ??
    ENGINEERING_CATEGORIES[0];

  return (
    <section
      id="engineering"
      className="border-t border-[#E5E0D8] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#8A6A4B]">
              Инженерия и материальная основа
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-semibold tracking-tight text-[#181715] text-balance">
              Комфорт понятен в быту, даже если за ним стоит сложная система
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#57534E]">
              В «Реноме» класс дома подтверждается конкретными техническими решениями и европейскими брендами оборудования, зафиксированными в проектной документации.
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              onRequestSpec('Полная техническая спецификация и ведомость отделки')
            }
            className="inline-flex items-center gap-2 rounded-lg border border-[#D4CEC4] bg-white px-4 py-2.5 text-xs font-semibold text-[#181715] hover:bg-[#EFECE6] transition-colors whitespace-nowrap shrink-0 self-start lg:self-auto focus-visible:outline-2 focus-visible:outline-[#8A6A4B]"
          >
            <span>Запросить спецификацию</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-1.5 rounded-lg bg-[#EFECE6] p-1.5 w-fit max-w-full">
          {ENGINEERING_CATEGORIES.map((cat) => {
            const isActive = cat.id === activeTab;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`rounded-md px-3.5 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#8A6A4B] ${
                  isActive
                    ? 'bg-white text-[#181715] shadow-xs'
                    : 'text-[#57534E] hover:text-[#181715]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <div className="mt-8 rounded-xl border border-[#E5E0D8] bg-white overflow-hidden">
          <div className="border-b border-[#E5E0D8] px-6 py-5 bg-[#FAF9F6]">
            <h3 className="font-display text-2xl font-semibold text-[#181715]">
              {current.label}
            </h3>
            <p className="mt-1 text-sm text-[#57534E]">{current.subtitle}</p>
          </div>

          <div className="divide-y divide-[#E5E0D8]">
            {current.items.map((item, idx) => (
              <div
                key={item.title}
                className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 px-6 py-5 items-baseline"
              >
                <div className="md:col-span-4 flex items-baseline gap-3">
                  <span className="font-mono text-xs text-[#8A6A4B] tabular-nums shrink-0">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-[#181715]">
                    {item.title}
                  </p>
                </div>
                <div className="md:col-span-3">
                  <p className="text-xs sm:text-sm font-medium text-[#8A6A4B]">
                    {item.spec}
                  </p>
                </div>
                <div className="md:col-span-5">
                  <p className="text-sm leading-relaxed text-[#57534E]">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
