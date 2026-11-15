import { ArrowRight } from 'lucide-react';
import { useMemo, useState } from 'react';
import {
  RENOME_IMAGES,
  RESIDENCE_LOTS,
  SELECTION_CHECKLIST,
  type ResidenceLot,
} from '../data/renomeData';
import { ResilientImage } from './ResilientImage';

interface ResidencesSectionProps {
  onSelectLot: (lotSummary: string) => void;
}

export function ResidencesSection({ onSelectLot }: ResidencesSectionProps) {
  const [entranceFilter, setEntranceFilter] = useState<'all' | 1 | 2>('all');
  const [roomFilter, setRoomFilter] = useState<
    'Все' | '2К' | '3К' | '4К / Пентхаус'
  >('Все');

  const filteredLots = useMemo(() => {
    return RESIDENCE_LOTS.filter((lot) => {
      if (entranceFilter !== 'all' && lot.entrance !== entranceFilter) {
        return false;
      }
      if (roomFilter !== 'Все' && lot.rooms !== roomFilter) {
        return false;
      }
      return true;
    });
  }, [entranceFilter, roomFilter]);

  const formatLotLabel = (lot: ResidenceLot) =>
    `${lot.rooms}, ${lot.area} м², ${lot.floor} этаж · ${lot.entranceLabel} (${lot.condition})`;

  return (
    <>
      <section
        id="entrances"
        className="border-t border-[#E5E0D8] py-16 sm:py-24"
      >
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#8A6A4B]">
                  Два подъезда · Два сценария
                </p>
                <h2 className="mt-3 font-display text-3xl sm:text-5xl font-semibold tracking-tight text-[#181715] text-balance">
                  Один дом. Два подхода к своему интерьеру.
                </h2>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#57534E]">
                  Кто-то хочет увидеть готовый интерьер до покупки и переехать без ремонта. Кому-то важно пройти путь от первого эскиза до последней детали со своим дизайнером. В «Реноме» оба сценария реализованы на единой архитектурной и инженерной основе.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-[#E5E0D8] bg-white p-6 flex flex-col justify-between">
                  <div>
                    <p className="font-mono text-xs text-[#8A6A4B]">
                      Первый подъезд
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-[#181715]">
                      Выбрать готовое решение
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#57534E]">
                      Квартиры с выполненной отделкой: мрамор в кухне, прихожей и санузлах, инженерная доска, двери 2,3 м, гипсовый декор и плинтусы из окрашенного МДФ. Состав передачи зафиксирован в спецификации.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setEntranceFilter(1);
                      document
                        .getElementById('residences')
                        ?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#181715] hover:text-[#8A6A4B] transition-colors self-start"
                  >
                    <span>Смотреть лоты с отделкой</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div className="rounded-xl border border-[#E5E0D8] bg-white p-6 flex flex-col justify-between">
                  <div>
                    <p className="font-mono text-xs text-[#8A6A4B]">
                      Второй подъезд
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-[#181715]">
                      Создать собственное
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#57534E]">
                      Квартиры в состоянии стройварианта для авторского проекта. Для строительных бригад, доставки материалов и вывоза мусора предусмотрен отдельный вход, не пересекающийся с маршрутом жителей.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setEntranceFilter(2);
                      document
                        .getElementById('residences')
                        ?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#181715] hover:text-[#8A6A4B] transition-colors self-start"
                  >
                    <span>Смотреть лоты в стройварианте</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="h-full min-h-[340px] rounded-xl overflow-hidden border border-[#E5E0D8] bg-[#EFECE6]">
                <ResilientImage
                  src={RENOME_IMAGES.interiorLiving}
                  alt="Готовый интерьер 1-го подъезда клубного дома Реноме: инженерная доска, мрамор на кухне, двери 2,3 метра"
                  fallbackTitle="Интерьер 1-го подъезда «Реноме»"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-[#E5E0D8] bg-white p-6 sm:p-8">
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#8A6A4B]">
                Методика выбора резиденции
              </p>
              <h3 className="mt-2 font-display text-2xl sm:text-3xl font-semibold text-[#181715]">
                На что обратить внимание при выборе квартиры
              </h3>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 border-t border-[#E5E0D8] pt-6">
              {SELECTION_CHECKLIST.map((item) => (
                <div key={item.index} className="space-y-2">
                  <span className="font-mono text-xs font-medium text-[#8A6A4B] tabular-nums">
                    {item.index}
                  </span>
                  <h4 className="text-sm font-semibold text-[#181715]">
                    {item.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-[#57534E]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="residences"
        className="border-t border-[#E5E0D8] py-16 sm:py-24"
      >
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#8A6A4B]">
                Коллекция из 36 квартир
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-5xl font-semibold tracking-tight text-[#181715] text-balance">
                Примеры доступных форматов
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className="inline-flex items-center gap-1 rounded-lg bg-[#EFECE6] p-1">
                {[
                  { id: 'all' as const, label: 'Оба подъезда' },
                  { id: 1 as const, label: '1-й · Отделка' },
                  { id: 2 as const, label: '2-й · Стройвариант' },
                ].map((tab) => (
                  <button
                    key={String(tab.id)}
                    type="button"
                    onClick={() => setEntranceFilter(tab.id)}
                    className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#8A6A4B] ${
                      entranceFilter === tab.id
                        ? 'bg-white text-[#181715] shadow-xs'
                        : 'text-[#57534E] hover:text-[#181715]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="inline-flex items-center gap-1 rounded-lg bg-[#EFECE6] p-1">
                {(['Все', '2К', '3К', '4К / Пентхаус'] as const).map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRoomFilter(r)}
                    className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#8A6A4B] ${
                      roomFilter === r
                        ? 'bg-white text-[#181715] shadow-xs'
                        : 'text-[#57534E] hover:text-[#181715]'
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {filteredLots.length === 0 ? (
            <div className="mt-8 rounded-xl border border-[#E5E0D8] bg-white p-10 text-center">
              <p className="font-display text-2xl font-semibold text-[#181715]">
                По выбранным параметрам лоты не найдены
              </p>
              <p className="mt-2 text-sm text-[#57534E]">
                Сбросьте фильтр или запросите индивидуальный подбор среди всех 36 квартир дома.
              </p>
              <button
                type="button"
                onClick={() => {
                  setEntranceFilter('all');
                  setRoomFilter('Все');
                }}
                className="mt-5 rounded-lg bg-[#181715] px-4 py-2 text-xs font-medium text-[#F7F5F2] hover:bg-[#2F2C28]"
              >
                Показать все форматы
              </button>
            </div>
          ) : (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredLots.map((lot) => (
                <article
                  key={lot.id}
                  className="rounded-xl border border-[#E5E0D8] bg-white p-6 flex flex-col justify-between space-y-6"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs text-[#57534E]">
                      <span>{lot.entranceLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-medium text-[#8A6A4B]">
                        {lot.condition}
                      </span>
                    </div>

                    <div className="mt-4 flex items-baseline justify-between gap-4 border-b border-[#EFECE6] pb-4">
                      <h3 className="font-display text-3xl font-semibold text-[#181715] tabular-nums">
                        {lot.area} м²
                      </h3>
                      <span className="font-mono text-sm font-medium text-[#181715] tabular-nums">
                        {lot.rooms} · {lot.floor} этаж
                      </span>
                    </div>

                    <dl className="mt-4 space-y-2.5 text-xs">
                      <div className="flex justify-between gap-4">
                        <dt className="text-[#57534E]">Стороны света</dt>
                        <dd className="font-medium text-[#181715] text-right">
                          {lot.orientation}
                        </dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt className="text-[#57534E]">Высота потолков</dt>
                        <dd className="font-mono font-medium text-[#181715] tabular-nums">
                          {lot.ceiling}
                        </dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt className="text-[#57534E]">Лоджия</dt>
                        <dd className="font-medium text-[#181715] text-right">
                          {lot.loggia}
                        </dd>
                      </div>
                    </dl>

                    <p className="mt-4 text-sm leading-relaxed text-[#57534E]">
                      {lot.highlights}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectLot(formatLotLabel(lot))}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-[#181715] bg-white px-4 py-2.5 text-xs font-semibold text-[#181715] hover:bg-[#181715] hover:text-[#F7F5F2] transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#8A6A4B]"
                  >
                    <span>Получить планировку и стоимость</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
