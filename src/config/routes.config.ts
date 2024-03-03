import type { ComponentType } from "react";
import {
  Home,
  About,
  Services,
  AboutUs,
  Blog,
  Contacts,
  Article,
  Escort,
  QuestionsAndAnswers,
  SupportOfCriminalCases,
  ParallelImport,
  ProtectionFromSubsidiaryResponsibility,
  ComprehensiveProtection,
} from "../containers";

const DESC_SUFFIX = "КИ";

export type MetaInfoProps = Partial<
  Readonly<{
    meta: any[];
    lang: string;
    title: string;
    defer: boolean;
    locale: string;
    description: string;
    isDarkMenu: boolean;
  }>
>;

export type Route = Readonly<{
  path: string;
  name: string;
  metaInfo: MetaInfoProps;
  Component: ComponentType;
}>;

export const routes: Route[] = [
  {
    path: "/",
    name: "Home",
    Component: Home,
    metaInfo: {
      title: "Юридические услуги по защите малого и среднего бизнеса| Комитет информации",
      description: "Услуги в области банкротства, защиты от субсидиарной ответственности, взыскания долгов, " +
          "недобросовестной конкуренции, необоснованных претензий госорганов, разрешение корпоративных споров, " +
          "сделок слияния и поглощения (М&А), управления проблемными активами и форензика. Звоните ☎ +7 (495) 088-33-33",
      isDarkMenu: false
    },
  },
  {
    path: "/about",
    name: "About",
    Component: About,
    metaInfo: {
      title: "О компании | Комитет информации",
      description: "Ценности, история, философия, сотрудники компании «Комитет информации». Звоните ☎ +7 (495) 088-33-33",
      isDarkMenu: true,
    },
  },
  {
    path: "/news",
    name: "Blog",
    Component: Blog,
    metaInfo: {
      title: "Blog",
      description: `Blog ${DESC_SUFFIX}`,
      isDarkMenu: true,
    },
  },
  {
    path: "/about-us",
    name: "AboutUs",
    Component: AboutUs,
    metaInfo: {
      title: "О компании | Комитет информации",
      description: "Ценности, история, философия, сотрудники компании «Комитет информации». Звоните ☎ +7 (495) 088-33-33",
      isDarkMenu: true,
    },
  },
  {
    path: "/services",
    name: "Services",
    Component: Services,
    metaInfo: {
      title: "Оказываемые юридические услуги | Комитет информации",
      description: "Перечень оказываемых юридических услуг. Звоните ☎ +7 (495) 088-33-33",
      isDarkMenu: true,
    },
  },
  {
    path: "/contacts",
    name: "Contacts",
    Component: Contacts,
    metaInfo: {
      title: "Юридическая компания в Москве, услуги для малого и среднего бизнеса | Комитет информации",
      description: "Комитет информации – адрес и контакты юридической компании в Москве. Звоните ☎ +7 (495)-088-33-33",
      isDarkMenu: true,
    },
  },
  {
    path: "/article",
    name: "Article",
    Component: Article,
    metaInfo: {
      title: "Article",
      description: `Article ${DESC_SUFFIX}`,
      isDarkMenu: true,
    },
  },
  {
    path: "/questions-and-answers",
    name: "QuestionsAndAnswers",
    Component: QuestionsAndAnswers,
    metaInfo: {
      title: "Раздел Вопрос-Ответ|Комитет информации",
      description: "Популярные вопросы и ответы",
      isDarkMenu: true,
    },
  },
  {
    path: "/services/escort",
    name: "Escort",
    Component: Escort,
    metaInfo: {
      title: "Сопровождение банкротства юридических и физических лиц под ключ, помощь в списании долгов| КИ",
      description: "Банкротство юридических и физических лиц. Оформим и процедуру банкротства под ключ, " +
          "спишем долги законно. Звоните +7 (495)-088-33-33",
      isDarkMenu: false,
    },
  },
  {
    path: "/services/support-of-criminal-cases",
    name: "SupportOfCriminalCases",
    Component: SupportOfCriminalCases,
    metaInfo: {
      title: "Сопровождение уголовных дел экономической направленности | КИ",
      description: "Сопровождение и ведение экономических уголовных дел. Успешное прекращение дел, " +
          "помощь на всех этапах рассмотрения. Эффективная защита прав клиентов. Звоните +7 (495)-088-33-33",
      isDarkMenu: true,
    },
  },
  {
    path: "/services/parallel-import",
    name: "ParallelImport",
    Component: ParallelImport,
    metaInfo: {
      title: "Параллельный импорт высокотехнологичного  оборудования | КИ",
      description: "Услуги по параллельному импорту высокотехнологичного  оборудования. Решаем все вопросы по закупке, " +
          "ввозу, оплате и оформлению. Звоните +7 (495)-088-33-33",
      isDarkMenu: true,
    },
  },
  {
    path: "/services/comprehensive-protection",
    name: "ComprehensiveProtection",
    Component: ComprehensiveProtection,
    metaInfo: {
      title: "Защита прав и интересов должников от кредиторов | КИ",
      description: "Защитим права должника от требований кредиторов. Звоните +7 (495)-088-33-33",
      isDarkMenu: true,
    },
  },
  {
    path: "/services/protection-from-subsidiary-responsibility",
    name: "ProtectionFromSubsidiaryResponsibility",
    Component: ProtectionFromSubsidiaryResponsibility,
    metaInfo: {
      title: "Защита от субсидиарной ответственности. Защитим ваши активы при угрозе субсидиарки | КИ",
      description: "Защита от субсидиарной ответственности владельцев,  участников бизнеса и прочих юридических лиц. " +
          "Добьемся списания задолженностей законно. Звоните +7 (495) -088-33-33",
      isDarkMenu: true,
    },
  }
];

export const getRouteMetaInfo = (name: string): MetaInfoProps => {
  const route = routes.find((r) => r.name === name);
  return route?.metaInfo ?? {};
};

export const isLocationValidRoute = (pathname: string): boolean => {
  return routes.some((r) => r.path === pathname);
};
