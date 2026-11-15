import { CheckCircle2 } from 'lucide-react';
import { useEffect, useState, type FormEvent } from 'react';

interface PrivateViewingSectionProps {
  selectedTopic: string;
}

export function PrivateViewingSection({
  selectedTopic,
}: PrivateViewingSectionProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [scenario, setScenario] = useState<'ready' | 'custom' | 'both'>('both');
  const [topic, setTopic] = useState(selectedTopic);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setTopic(selectedTopic);
    setSubmitted(false);
  }, [selectedTopic]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const cleanedName = name.trim();
    const digits = phone.replace(/\D/g, '');

    if (cleanedName.length < 2) {
      setError('Пожалуйста, укажите ваше имя.');
      return;
    }
    if (digits.length < 10) {
      setError('Пожалуйста, укажите корректный номер телефона для связи.');
      return;
    }

    setError(null);
    setSubmitted(true);
  };

  return (
    <section
      id="consultation"
      className="border-t border-[#E5E0D8] bg-[#181715] text-[#F7F5F2] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-6 space-y-6">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#C5A482]">
            Приватная консультация
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-white text-balance">
            Внимание — рядом. Выбор — за вами.
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#D6D1C9] max-w-xl">
            Мы проводим индивидуальные встречи без суеты и массовых экскурсий. На встрече предоставим поэтажные планы всех 36 квартир, ведомость отделки 1-го подъезда, техническую спецификацию и условия приобретения машиномест в паркинге.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-white/15 pt-6 text-sm">
            <div>
              <p className="text-xs text-[#A8A29E]">Локация</p>
              <p className="mt-1 font-medium text-white">
                Исторический центр Ростова-на-Дону
              </p>
            </div>
            <div>
              <p className="text-xs text-[#A8A29E]">Материалы к встрече</p>
              <p className="mt-1 font-medium text-white">
                Планировки · Спецификация · Условия по м/м
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-xl border border-white/15 bg-[#22201D] p-6 sm:p-8">
            {submitted ? (
              <div className="py-6 space-y-4">
                <CheckCircle2 className="h-8 w-8 text-[#C5A482]" />
                <h3 className="font-display text-3xl font-semibold text-white">
                  Запрос принят
                </h3>
                <p className="text-sm leading-relaxed text-[#D6D1C9]">
                  {name.trim()}, персональный брокер клубного дома «Реноме» свяжется с вами по номеру{' '}
                  <span className="font-mono text-white">{phone}</span>, чтобы согласовать удобное время приватного показа и направить запрошенные материалы ({topic}).
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setPhone('');
                  }}
                  className="mt-2 inline-flex rounded-lg border border-white/25 px-4 py-2 text-xs font-medium text-white hover:bg-white/10 transition-colors"
                >
                  Отправить ещё один запрос
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <p className="text-xs text-[#A8A29E]">Тема обращения</p>
                  <p className="mt-1 text-sm font-medium text-white">
                    {topic}
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="renome-scenario"
                    className="block text-xs font-medium text-[#D6D1C9] mb-2"
                  >
                    Какой формат вам ближе
                  </label>
                  <div
                    id="renome-scenario"
                    className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 rounded-lg bg-[#181715] p-1"
                  >
                    {[
                      { id: 'ready' as const, label: '1-й · С отделкой' },
                      { id: 'custom' as const, label: '2-й · Стройвариант' },
                      { id: 'both' as const, label: 'Сравнить оба' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setScenario(opt.id)}
                        className={`rounded-md px-3 py-2 text-xs font-medium transition-colors whitespace-nowrap ${
                          scenario === opt.id
                            ? 'bg-[#F7F5F2] text-[#181715]'
                            : 'text-[#A8A29E] hover:text-white'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="renome-name"
                      className="block text-xs font-medium text-[#D6D1C9] mb-1.5"
                    >
                      Имя
                    </label>
                    <input
                      id="renome-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Александр"
                      className="w-full rounded-lg border border-white/15 bg-[#181715] px-3.5 py-2.5 text-sm text-white placeholder:text-[#78716C] focus:border-[#C5A482] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="renome-phone"
                      className="block text-xs font-medium text-[#D6D1C9] mb-1.5"
                    >
                      Телефон
                    </label>
                    <input
                      id="renome-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+7 (900) 000-00-00"
                      className="w-full rounded-lg border border-white/15 bg-[#181715] px-3.5 py-2.5 text-sm text-white placeholder:text-[#78716C] focus:border-[#C5A482] focus:outline-none font-mono"
                    />
                  </div>
                </div>

                {error && (
                  <p role="alert" className="text-xs font-medium text-red-400">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#F7F5F2] px-5 py-3 text-sm font-semibold text-[#181715] hover:bg-[#E5E0D8] transition-colors focus-visible:outline-2 focus-visible:outline-[#C5A482]"
                >
                  Записаться на приватный показ
                </button>

                <p className="text-xs leading-relaxed text-[#A8A29E]">
                  Конфиденциальность гарантирована: контакт используется только для согласования встречи и передачи спецификации проекта.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
