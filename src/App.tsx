/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { EngineeringSection } from './components/EngineeringSection';
import { HeaderNav } from './components/HeaderNav';
import { PrivateViewingSection } from './components/PrivateViewingSection';
import { ResidencesSection } from './components/ResidencesSection';
import { ResilientImage } from './components/ResilientImage';
import {
  ARCHITECTURE_DETAILS,
  KEY_FIGURES,
  RENOME_IMAGES,
} from './data/renomeData';

export default function App() {
  const [consultationTopic, setConsultationTopic] = useState(
    'Приватный показ клубного дома «Реноме»'
  );

  const scrollToConsultation = (topic?: string) => {
    if (topic) {
      setConsultationTopic(topic);
    }
    const el = document.getElementById('consultation');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="top" className="min-h-screen bg-[#F7F5F2] text-[#181715]">
      <HeaderNav onOpenConsultation={scrollToConsultation} />

      <main>
        <section className="mx-auto max-w-[1280px] px-5 sm:px-8 pt-10 pb-14 sm:pt-14 sm:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-between space-y-8 py-2">
              <div className="space-y-6">
                <p className="text-xs font-medium text-[#57534E]">
                  Ростов-на-Дону <span aria-hidden="true">·</span> Исторический центр{' '}
                  <span aria-hidden="true">·</span> Камерный клубный дом
                </p>

                <h1 className="font-display text-[clamp(2.35rem,4.2vw,3.75rem)] font-semibold leading-[1.06] tracking-tight text-[#181715] text-balance">
                  Уважение к личному пространству и внимательный сервис дома
                </h1>

                <p className="text-base sm:text-lg leading-relaxed text-[#57534E] max-w-xl">
                  «Реноме» — клубный дом на 36 квартир. У хорошего гостеприимства мы заимствуем качество внимания, но здесь вы не в гостях. Вы дома — со своим ритмом, привычками и планами. Пространства и сервисы не задают обязательный сценарий: внимание — рядом, выбор — за вами.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-5 pt-2">
                <button
                  type="button"
                  onClick={() =>
                    scrollToConsultation('Приватный показ и презентация проекта')
                  }
                  className="inline-flex items-center gap-2.5 rounded-lg bg-[#181715] px-6 py-3.5 text-sm font-medium text-[#F7F5F2] hover:bg-[#2F2C28] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#8A6A4B]"
                >
                  <span>Записаться на приватный показ</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <a
                  href="#residences"
                  className="text-sm font-medium text-[#181715] underline decoration-[#C5BCB0] underline-offset-4 hover:decoration-[#181715] transition-colors whitespace-nowrap shrink-0"
                >
                  Смотреть форматы квартир
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="h-full min-h-[340px] lg:min-h-[480px] rounded-xl overflow-hidden border border-[#E5E0D8] bg-[#EFECE6]">
                <ResilientImage
                  src={RENOME_IMAGES.heroFacade}
                  alt="Фасад клубного дома Реноме в историческом центре Ростова-на-Дону из клинкерного кирпича ручной работы"
                  fallbackTitle="Клубный дом «РЕНОМЕ»"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border border-[#E5E0D8] rounded-xl bg-white divide-y sm:divide-y-0 sm:divide-x divide-[#E5E0D8] overflow-hidden">
            {KEY_FIGURES.map((fig) => (
              <div key={fig.label} className="p-5 sm:p-6">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-3xl font-semibold text-[#181715] tabular-nums">
                    {fig.value}
                  </span>
                  <span className="text-xs font-medium text-[#8A6A4B]">
                    {fig.label}
                  </span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-[#57534E]">
                  {fig.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="architecture"
          className="border-t border-[#E5E0D8] bg-white py-16 sm:py-24"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-5">
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#8A6A4B]">
                Архитектура и опыт
              </p>
              <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-[#181715] text-balance">
                Характер, который складывается из деталей
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-[#57534E]">
                Архитектура «Реноме» не стремится произвести впечатление одним громким жестом. Она строится на согласованности фасада, инженерии, интерьеров и дальнейшей эксплуатации — подходе, сформированном командой на международных жилых и бутик-отельных проектах.
              </p>
              <p className="text-sm leading-relaxed text-[#57534E]">
                Здесь материал не выбирают отдельно от интерьера, а решение не ограничивается моментом сдачи дома — заложено всё, что делает ежедневную жизнь спокойной.
              </p>
            </div>

            <div className="lg:col-span-7 divide-y divide-[#E5E0D8] border-y border-[#E5E0D8]">
              {ARCHITECTURE_DETAILS.map((detail) => (
                <div
                  key={detail.index}
                  className="py-6 sm:py-7 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-baseline"
                >
                  <div className="sm:col-span-5 flex items-baseline gap-3">
                    <span className="font-mono text-xs text-[#8A6A4B] tabular-nums shrink-0">
                      {detail.index}
                    </span>
                    <h3 className="font-display text-2xl font-semibold text-[#181715]">
                      {detail.title}
                    </h3>
                  </div>
                  <p className="sm:col-span-7 text-sm leading-relaxed text-[#57534E]">
                    {detail.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="hospitality"
          className="border-t border-[#E5E0D8] py-16 sm:py-24"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8 space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              <div className="lg:col-span-6">
                <div className="h-full min-h-[340px] rounded-xl overflow-hidden border border-[#E5E0D8] bg-[#EFECE6]">
                  <ResilientImage
                    src={RENOME_IMAGES.lobbyMarble}
                    alt="Лобби-гостиная клубного дома Реноме с отделкой мрамором Palissandro Tigrato, Emperador Dark и кварцитом Patagonia"
                    fallbackTitle="Лобби-гостиная «Реноме»"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
                <div className="space-y-4">
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#8A6A4B]">
                    Дома вас встречают
                  </p>
                  <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-[#181715] text-balance">
                    Входное пространство как гостиная дома
                  </h2>
                  <p className="text-sm sm:text-base leading-relaxed text-[#57534E]">
                    Возвращение домой начинается раньше, чем открывается дверь квартиры. Натуральный мрамор Palissandro Tigrato и Emperador Dark, кварцит Patagonia и спокойный свет формируют атмосферу частной резиденции, а круглосуточный консьерж-сервис помогает в повседневных вопросах без навязчивости.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-[#E5E0D8] pt-6">
                  <div>
                    <h3 className="text-sm font-semibold text-[#181715]">
                      Движение и восстановление
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#57534E]">
                      Собственный фитнес-зал, тихое помещение для йоги и медитаций, а также массажный кабинет. Свой режим в пределах дома без дороги в городской клуб.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#181715]">
                      Паркинг и забота о доме
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#57534E]">
                      53 машиноместа на 2 подземных уровнях с бесконтактным проездом и СКУД. Профессиональная служба эксплуатации с прозрачным регламентом обращений.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-[#E5E0D8] min-h-[420px] sm:min-h-[500px] flex items-end">
              <ResilientImage
                src={RENOME_IMAGES.rooftopPark}
                alt="Ландшафтный парк на кровле клубного дома Реноме с панорамным видом на исторический центр Ростова-на-Дону"
                fallbackTitle="Парк на кровле с панорамой центра"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/15"
              />
              <div className="relative z-10 p-6 sm:p-10 lg:p-12 max-w-3xl space-y-3 text-white">
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#E6D5C1]">
                  Парк на кровле
                </p>
                <h3 className="font-display text-3xl sm:text-5xl font-semibold leading-tight text-balance">
                  Подняться над ритмом города, не выходя из дома
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-white/90">
                  На кровле «Реноме» предусмотрен ландшафтный парк с живым озеленением, прогулочными маршрутами, тихими зонами отдыха и панорамным видом на исторический центр Ростова-на-Дону. Продолжение квартиры под открытым небом для утренней прогулки или вечернего света над городом.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ResidencesSection
          onSelectLot={(lotSummary) =>
            scrollToConsultation(`Запрос планировки и условий: ${lotSummary}`)
          }
        />

        <EngineeringSection
          onRequestSpec={(topic) => scrollToConsultation(topic)}
        />

        <PrivateViewingSection selectedTopic={consultationTopic} />
      </main>

      <footer className="border-t border-white/10 bg-[#181715] text-[#A8A29E] py-8">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-display text-base font-semibold tracking-[0.08em] text-white">
              РЕНОМЕ
            </span>
            <span aria-hidden="true">·</span>
            <span>Клубный дом на 36 квартир, Ростов-на-Дону</span>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <a href="#architecture" className="hover:text-white transition-colors">
              Архитектура
            </a>
            <a href="#entrances" className="hover:text-white transition-colors">
              Подъезды
            </a>
            <a href="#engineering" className="hover:text-white transition-colors">
              Инженерия
            </a>
            <a href="#residences" className="hover:text-white transition-colors">
              Лоты
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
