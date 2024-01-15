import type { FunctionComponent } from "react";
import React, {Fragment} from "react";
import { MetaInfo } from "../../components";
import { getRouteMetaInfo } from "../../config/routes.config";
import ArticleBanner from "./components/article-banner/ArticleBanner";
import ArticleContent from "./components/article-content/ArticleContent";
import ArticleSocialLinks from "./components/article-social-links/ArticleSocialLinks";

const About: FunctionComponent = () => (
    <Fragment>
        <MetaInfo {...getRouteMetaInfo("Article")} />
        <div>
            <ArticleBanner />
            <div className="xl:hidden">
                <ArticleContent />
            </div>
            <div className="article__content flex px-[320px] py-20 gap-[190px] relative max-xl:hidden">
                <ArticleContent />
                <ArticleSocialLinks />
            </div>
        </div>
    </Fragment>

);

export default About;
