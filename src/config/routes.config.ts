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
      title: "Home",
      description: `Home ${DESC_SUFFIX}`,
      isDarkMenu: false
    },
  },
  {
    path: "/about",
    name: "About",
    Component: About,
    metaInfo: {
      title: "About",
      description: `About ${DESC_SUFFIX}`,
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
      title: "AboutUs",
      description: `AboutUs ${DESC_SUFFIX}`,
      isDarkMenu: true,
    },
  },
  {
    path: "/services",
    name: "Services",
    Component: Services,
    metaInfo: {
      title: "Services",
      description: `Services ${DESC_SUFFIX}`,
      isDarkMenu: true,
    },
  },
  {
    path: "/contacts",
    name: "Contacts",
    Component: Contacts,
    metaInfo: {
      title: "Contacts",
      description: `Contacts ${DESC_SUFFIX}`,
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
      title: "QuestionsAndAnswers",
      description: `QuestionsAndAnswers ${DESC_SUFFIX}`,
      isDarkMenu: true,
    },
  },
  {
    path: "/services/escort",
    name: "Escort",
    Component: Escort,
    metaInfo: {
      title: "Escort",
      description: `Escort ${DESC_SUFFIX}`,
      isDarkMenu: false,
    },
  },
  {
    path: "/services/support-of-criminal-cases",
    name: "SupportOfCriminalCases",
    Component: SupportOfCriminalCases,
    metaInfo: {
      title: "SupportOfCriminalCases",
      description: `SupportOfCriminalCases ${DESC_SUFFIX}`,
      isDarkMenu: true,
    },
  },
  {
    path: "/services/parallel-import",
    name: "ParallelImport",
    Component: ParallelImport,
    metaInfo: {
      title: "ParallelImport",
      description: `ParallelImport ${DESC_SUFFIX}`,
      isDarkMenu: true,
    },
  },
  {
    path: "/services/comprehensive-protection",
    name: "ComprehensiveProtection",
    Component: ComprehensiveProtection,
    metaInfo: {
      title: "ComprehensiveProtection",
      description: `ComprehensiveProtection ${DESC_SUFFIX}`,
      isDarkMenu: true,
    },
  },
  {
    path: "/services/protection-from-subsidiary-responsibility",
    name: "ProtectionFromSubsidiaryResponsibility",
    Component: ProtectionFromSubsidiaryResponsibility,
    metaInfo: {
      title: "ProtectionFromSubsidiaryResponsibility",
      description: `ProtectionFromSubsidiaryResponsibility ${DESC_SUFFIX}`,
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
