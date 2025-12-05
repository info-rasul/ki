import type { ComponentType } from "react";
import {
  Home,
  Services,
  AboutUs,
  Contacts,
  Escort,
  QuestionsAndAnswers,
  SupportOfCriminalCases,
  Citizenship,
  ParallelImport,
  ProtectionFromSubsidiaryResponsibility,
  ComprehensiveProtection,
} from "../containers";
import { meta } from "./meta.config";
import PrivacyPolicy from "../containers/PrivacyPolicy/PrivacyPolicy";

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
    metaInfo: meta["Home"],
  },
  {
    path: "/o-nas",
    name: "AboutUs",
    Component: AboutUs,
    metaInfo: meta["AboutUs"],
  },
  {
    path: "/uslugi",
    name: "Services",
    Component: Services,
    metaInfo: meta["Services"],
  },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    Component: PrivacyPolicy,
    metaInfo: meta["PrivacyPolicy"],
  },
  {
    path: "/kontakty",
    name: "Contacts",
    Component: Contacts,
    metaInfo: meta["Contacts"],
  },
  {
    path: "/vopros-otvet",
    name: "QuestionsAndAnswers",
    Component: QuestionsAndAnswers,
    metaInfo: meta["QuestionsAndAnswers"],
  },
  {
    path: "/yuridicheskoe-soprovozhdenie-bankrotstva",
    name: "Escort",
    Component: Escort,
    metaInfo: meta["Escort"],
  },
  {
    path: "/soprovozhdenie-ugolovnyh-del",
    name: "SupportOfCriminalCases",
    Component: SupportOfCriminalCases,
    metaInfo: meta["SupportOfCriminalCases"],
  },
  {
    path: "/vtoroe-grazhdanstvo",
    name: "Citizenship",
    Component: Citizenship,
    metaInfo: meta["Citizenship"],
  },
  {
    path: "/parallelnyy-import-oborudovaniya",
    name: "ParallelImport",
    Component: ParallelImport,
    metaInfo: meta["ParallelImport"],
  },
  {
    path: "/zashchita-dolzhnikov-ot-kreditorov",
    name: "ComprehensiveProtection",
    Component: ComprehensiveProtection,
    metaInfo: meta["ComprehensiveProtection"],
  },
  {
    path: "/zashchita-ot-subsidiarnoy-otvetstvennosti",
    name: "ProtectionFromSubsidiaryResponsibility",
    Component: ProtectionFromSubsidiaryResponsibility,
    metaInfo: meta["ProtectionFromSubsidiaryResponsibility"],
  }
];

export const isLocationValidRoute = (pathname: string): boolean => {
  return routes.some((r) => r.path === pathname);
};
