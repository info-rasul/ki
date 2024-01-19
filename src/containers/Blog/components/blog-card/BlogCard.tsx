import React, {Fragment} from 'react';
import BlogCardIcon from '../../../../assets/img/blog-card-icon.svg'
import blogCardImg from '../../../../assets/img/blog-card-img.jpg'

const BlogCard = () => {
    return (
        <Fragment>
            <a href="/article" className="max-[1439px]:hidden flex flex-col items-start w-[400px]">
                <img src={blogCardImg} alt="blog-card-img"/>
                <h3 className="text-xl leading-[145%] mt-5 tracking-[.2px]">В июне на ПМЭФ пройдет бизнес-диалог  { " \"Россия-Индия\"" }</h3>
                <p className="text-[15px] leading-[170%] mt-[12px]	line-clamp-3 tracking-[.15px]">
                    Индийские компании проявляют все больший интерес к Петербургскому международному экономическому
                    форуму,
                    как к главной площадке для развития бизнеса с Россией, 5 июня, в стартовый день форума,
                    будет проведен второй по счету бизнес-диалог Россия-Индия,
                    заявил РИА Новости заместитель директора Фонда Росконгресс, директор ПМЭФ Алексей Вальков.
                </p>
                <div className="flex gap-5 mt-[15px]">
                    <p className="text-[13px] leading-[170%] text-[#999]">22.11.2023</p>
                    <div className="flex gap-[5px]">
                        <img src={BlogCardIcon} alt="blog-card-icon"/>
                        <p className="text-[13px] leading-[170%] text-[#999]">5 минут</p>
                    </div>
                </div>
            </a>
            <a href="/article" className="min-[1439px]:hidden min-[1439px]:hidden flex gap-[15px]">
                <img className="max-[900px]:h-[175px] max-sm:h-[100px] max-[540px]:h-[65px] max-[540px]:w-[65px]"
                     src={blogCardImg} alt="blog-card-img"/>
                    <div
                        className="blog__card_desc flex flex-col justify-between max-[900px]:justify-start max-sm:border-b-[1px] border-[#B3B3B3] pb-5">
                        <h3 className="text-xl leading-[140%] max-[910px]:line-clamp-2 max-[900px]:text-[15px]">В июне на ПМЭФ
                            пройдет бизнес-диалог { " \"Россия-Индия\"" }</h3>
                        <p className="text-[15px] leading-[153%] mt-[10px] max-md:text-[13px] max-[910px]:line-clamp-4 max-sm:line-clamp-2 max-sm:mt-[5px]">
                            Индийские компании проявляют все больший интерес к Петербургскому международному экономическому
                            форуму,
                            как к главной площадке для развития бизнеса с Россией, 5 июня, в стартовый день форума,
                            будет проведен второй по счету бизнес-диалог { " \"Россия-Индия\"" },
                            заявил РИА Новости заместитель директора Фонда Росконгресс, директор ПМЭФ Алексей Вальков.
                        </p>
                        <div className="flex gap-5 mt-[9px] ">
                            <p className="text-[13px] leading-[170%] text-[#999]">22.11.2023</p>
                            <div className="flex gap-[5px]">
                                <img src={BlogCardIcon} alt="blog-card-icon"/>
                                    <p className="text-[13px] leading-[170%] text-[#999]">5 минут</p>
                            </div>
                        </div>
                    </div>
            </a>
        </Fragment>

    );
};

export default BlogCard;