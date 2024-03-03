import type { FunctionComponent } from "react";
import React, {Fragment} from "react";
import { MetaInfo } from "../../components";
import { getRouteMetaInfo } from "../../config/meta.config";
import ArticleBanner from "./components/article-banner/ArticleBanner";
import ArticleContent from "./components/article-content/ArticleContent";
import ArticleSocialLinks from "./components/article-social-links/ArticleSocialLinks";

const Article: FunctionComponent = () => (
    <Fragment>
        <MetaInfo {...getRouteMetaInfo("Article")} />
        <ArticleBanner />
        <div className="container">
            <div className="">
                <div className="xl:hidden">
                    <ArticleContent />
                </div>
                <div className="article__content flex px-[240px] py-20 gap-[190px] relative max-xl:hidden">
                    <ArticleContent />
                    <ArticleSocialLinks />
                </div>
            </div>
        </div>
    </Fragment>

);

export default Article;
