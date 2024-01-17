import type { ComponentType } from "react";
import {Home, About, Services, AboutUs, Blog, Contacts, Article, Escort} from "../containers";

const DESC_SUFFIX = "description - length <= 160 chars.";

export type MetaInfoProps = Partial<
  Readonly<{
    meta: any[];
    lang: string;
    title: string;
    defer: boolean;
    locale: string;
    description: string;
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
    },
  },
  {
    path: "/about",
    name: "About",
    Component: About,
    metaInfo: {
      title: "About",
      description: `About ${DESC_SUFFIX}`,
    },
  },
  {
    path: "/blog",
    name: "Blog",
    Component: Blog,
    metaInfo: {
      title: "Blog",
      description: `Blog ${DESC_SUFFIX}`,
    },
  },
  {
    path: "/about-us",
    name: "AboutUs",
    Component: AboutUs,
    metaInfo: {
      title: "AboutUs",
      description: `AboutUs ${DESC_SUFFIX}`,
    },
  },
  {
    path: "/services",
    name: "Services",
    Component: Services,
    metaInfo: {
      title: "Services",
      description: `Services ${DESC_SUFFIX}`,
    },
  },
  {
    path: "/contacts",
    name: "Contacts",
    Component: Contacts,
    metaInfo: {
      title: "Contacts",
      description: `Contacts ${DESC_SUFFIX}`,
    },
  },
  {
    path: "/article",
    name: "Article",
    Component: Article,
    metaInfo: {
      title: "Article",
      description: `Article ${DESC_SUFFIX}`,
    },
  },
  {
    path: "/escort",
    name: "Escort",
    Component: Escort,
    metaInfo: {
      title: "Escort",
      description: `Escort ${DESC_SUFFIX}`,
    },
  },
];

export const getRouteMetaInfo = (name: string): MetaInfoProps => {
  const route = routes.find((r) => r.name === name);
  return route?.metaInfo ?? {};
};

export const isLocationValidRoute = (pathname: string): boolean => {
  return routes.some((r) => r.path === pathname);
};
