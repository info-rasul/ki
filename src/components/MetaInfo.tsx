import { Helmet } from "react-helmet-async";
import type { FunctionComponent } from "react";
import { getRouteMetaInfo, type MetaInfoProps } from "../config/meta.config";
import {
  APP_NAME,
  BASE_URL,
  AUTHOR_NAME,
  DEFAULT_LANG,
  DEFAULT_LOCALE,
} from "../config/env.config";
import React from "react";

const { title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION } =
  getRouteMetaInfo("Home");

const MetaInfo: FunctionComponent<MetaInfoProps> = ({
  meta = [],
  defer = false,
  lang = DEFAULT_LANG,
  title = DEFAULT_TITLE,
  locale = DEFAULT_LOCALE,
  description = DEFAULT_DESCRIPTION,
}) => {
  const url = "https://ki112.ru/";

  return (
    <Helmet
      defer={defer}
      title={title}
      htmlAttributes={{ lang }}
      titleTemplate={`%s`}
      link={[
        {
          rel: "canonical",
          href: url,
        },
      ]}
      meta={[
        {
          name: "description",
          content: description,
        },
        {
          property: "og:description",
          content: description,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:site_name",
          content: APP_NAME,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: url,
        },
        {
          property: "og:locale",
          content: locale,
        },
        {
          property: "og:image",
          content: `${BASE_URL}/favicon/android-chrome-192x192.png`,
        },
        {
          name: "author",
          content: AUTHOR_NAME,
        },
      ].concat(meta)}
    />
  );
};

export default MetaInfo;
