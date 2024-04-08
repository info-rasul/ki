export const meta = {
  ["Home"]: {
    title: "Юридические услуги по защите малого и среднего бизнеса | Комитет информации",
    description: "Услуги в области банкротства, защиты от субсидиарной ответственности, взыскания долгов, " +
        "недобросовестной конкуренции, необоснованных претензий госорганов, разрешение корпоративных споров, " +
        "сделок слияния и поглощения (М&А), управления проблемными активами и форензика. Звоните ☎ +7 (495) 248-37-37",
    isDarkMenu: false
  },
  ["AboutUs"]: {
    title: "О компании | Комитет информации",
    description: "Ценности, история, философия, сотрудники компании «Комитет информации». Звоните ☎ +7 (495) 248-37-37",
    isDarkMenu: false,
  },
  ["Services"]: {
    title: "Оказываемые юридические услуги | Комитет информации",
    description: "Перечень оказываемых юридических услуг. Звоните ☎ +7 (495) 248-37-37",
    isDarkMenu: true,
  },
  ["PrivacyPolicy"]: {
    title: "Политика конфиденциальности | Комитет информации",
    description: "Политика конфиденциальности. Звоните ☎ +7 (495) 248-37-37",
    isDarkMenu: true,
  },
  ["Contacts"]: {
    title: "Юридическая компания в Москве, услуги для малого и среднего бизнеса | Комитет информации",
    description: "Комитет информации – адрес и контакты юридической компании в Москве. Звоните ☎ +7 (495)-248-37-37",
    isDarkMenu: true,
  },
  ["QuestionsAndAnswers"]: {
    title: "Раздел Вопрос-Ответ | Комитет информации",
    description: "Популярные вопросы и ответы",
    isDarkMenu: true,
  },
  ["Escort"]: {
    title: "Сопровождение банкротства юридических и физических лиц под ключ, помощь в списании долгов | КИ",
    description: "Банкротство юридических и физических лиц. Оформим процедуру банкротства под ключ, " +
        "спишем долги законно. Звоните +7 (495)-248-37-37",
    isDarkMenu: false,
  },
  ["SupportOfCriminalCases"]: {
    title: "Сопровождение уголовных дел экономической направленности | КИ",
    description: "Сопровождение и ведение экономических уголовных дел. Успешное прекращение дел, " +
        "помощь на всех этапах рассмотрения. Эффективная защита прав клиентов. Звоните +7 (495)-248-37-37",
    isDarkMenu: true,
  },
  ["ParallelImport"]: {
    title: "Параллельный импорт высокотехнологичного  оборудования | КИ",
    description: "Услуги по параллельному импорту высокотехнологичного  оборудования. Решаем все вопросы по закупке, " +
        "ввозу, оплате и оформлению. Звоните +7 (495)-248-37-37",
    isDarkMenu: true,
  },
  ["ComprehensiveProtection"]: {
    title: "Защита прав и интересов должников от кредиторов | КИ",
    description: "Защитим права должника от требований кредиторов. Звоните +7 (495)-248-37-37",
    isDarkMenu: true,
  },
  ["ProtectionFromSubsidiaryResponsibility"]: {
    title: "Защита от субсидиарной ответственности. Защитим ваши активы при угрозе субсидиарки | КИ",
    description: "Защита от субсидиарной ответственности владельцев,  участников бизнеса и прочих юридических лиц. " +
        "Добьемся списания задолженностей законно. Звоните +7 (495) -248-37-37",
    isDarkMenu: true,
  }
}

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

export const getRouteMetaInfo = (name: string) => {
  // @ts-ignore
  return meta[name] ?? {};
};