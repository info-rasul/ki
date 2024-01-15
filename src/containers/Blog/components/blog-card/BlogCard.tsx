import React from 'react';
import BlogCardIcon from '../../../../assets/img/blog-card-icon.svg'
import blogCardImg from '../../../../assets/img/blog-card-img.jpg'

const BlogCard = () => {
    return (
        <a href="/article" className="flex flex-col items-start w-[400px]">
            <img src={blogCardImg} alt="blog-card-img"/>
            <h3 className="text-xl leading-[145%] mt-5">В июне на ПМЭФ пройдет бизнес-диалог Россия-Индия</h3>
            <p className="text-[15px] leading-[170%] mt-2.5	line-clamp-3">
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
    );
};

export default BlogCard;