import type { ComponentType } from "react";
import {
  Home,
  Services,
  AboutUs,
  Contacts,
  Escort,
  QuestionsAndAnswers,
  SupportOfCriminalCases,
  ParallelImport,
  ProtectionFromSubsidiaryResponsibility,
  ComprehensiveProtection,
} from "../containers";
import { meta } from "./meta.config";

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
    metaInfo: meta.home,
  },
  {
    path: "/about-us",
    name: "AboutUs",
    Component: AboutUs,
    metaInfo: meta["about-us"],
  },
  {
    path: "/services",
    name: "Services",
    Component: Services,
    metaInfo: meta.services,
  },
  {
    path: "/contacts",
    name: "Contacts",
    Component: Contacts,
    metaInfo: meta.contacts,
  },
  {
    path: "/questions-and-answers",
    name: "QuestionsAndAnswers",
    Component: QuestionsAndAnswers,
    metaInfo: meta["QuestionsAndAnswers"],
  },
  {
    path: "/services/escort",
    name: "Escort",
    Component: Escort,
    metaInfo: meta["Escort"],
  },
  {
    path: "/services/support-of-criminal-cases",
    name: "SupportOfCriminalCases",
    Component: SupportOfCriminalCases,
    metaInfo: meta["SupportOfCriminalCases"],
  },
  {
    path: "/services/parallel-import",
    name: "ParallelImport",
    Component: ParallelImport,
    metaInfo: meta["ParallelImport"],
  },
  {
    path: "/services/comprehensive-protection",
    name: "ComprehensiveProtection",
    Component: ComprehensiveProtection,
    metaInfo: meta["ComprehensiveProtection"],
  },
  {
    path: "/services/protection-from-subsidiary-responsibility",
    name: "ProtectionFromSubsidiaryResponsibility",
    Component: ProtectionFromSubsidiaryResponsibility,
    metaInfo: meta["ProtectionFromSubsidiaryResponsibility"],
  }
];

export const isLocationValidRoute = (pathname: string): boolean => {
  return routes.some((r) => r.path === pathname);
};
