export const site = {
  name: "КРУЧУ-ВЕРЧУ",
  tagline: "Прачечная самообслуживания",
  description:
    "Современная прачечная самообслуживания: быстро, чисто и недорого. Стиральные и сушильные машины, моющие средства и комфортная зона ожидания.",
  phone: "+7 (999) 123-45-67",
  phoneHref: "tel:+79991234567",
  address: "г. Москва, ул. Примерная, д. 10",
  mapUrl: "https://yandex.ru/maps/",
  hours: "Ежедневно с 08:00 до 22:00",
  email: "info@kruchu-verchu.ru",
  emailHref: "mailto:info@kruchu-verchu.ru",
} as const;

export const services = [
  {
    id: "wash",
    title: "Стирка",
    description:
      "Стиральные машины 5–10 кг. Режимы для хлопка, синтетики и деликатных тканей.",
    icon: "wash",
  },
  {
    id: "dry",
    title: "Сушка",
    description:
      "Сушильные барабаны с регулировкой температуры. Бельё готово за 30–45 минут.",
    icon: "dry",
  },
  {
    id: "detergent",
    title: "Средства",
    description:
      "Автоматы с порошком, кондиционером и пятновыводителем — всё под рукой.",
    icon: "detergent",
  },
  {
    id: "comfort",
    title: "Комфорт",
    description:
      "Бесплатный Wi‑Fi, зона ожидания, розетки и чистые помещения каждый день.",
    icon: "comfort",
  },
] as const;

export const pricing = [
  { id: "wash-5", label: "Стирка до 5 кг", price: "от 200 ₽" },
  { id: "wash-10", label: "Стирка до 10 кг", price: "от 350 ₽" },
  { id: "dry", label: "Сушка", price: "от 150 ₽" },
  { id: "detergent", label: "Моющие средства", price: "от 50 ₽" },
] as const;

export const steps = [
  {
    id: "step-1",
    step: "01",
    title: "Выберите машину",
    description: "Подберите стиральную или сушильную машину по загрузке.",
  },
  {
    id: "step-2",
    step: "02",
    title: "Оплатите",
    description: "Картой, СБП или наличными в автомате на месте.",
  },
  {
    id: "step-3",
    step: "03",
    title: "Заберите бельё",
    description: "Чистое и свежее — готово за 40–90 минут.",
  },
] as const;

export const navLinks = [
  { id: "services", label: "Услуги", href: "#services" },
  { id: "pricing", label: "Цены", href: "#pricing" },
  { id: "how", label: "Как это работает", href: "#how" },
  { id: "contact", label: "Контакты", href: "#contact" },
] as const;
