import React, {Fragment} from 'react';
import {Header, MetaInfo, Navigation} from "../../components";
import {getRouteMetaInfo} from "../../config/meta.config";

const PrivacyPolicy = () => {
    const { isDarkMenu } = getRouteMetaInfo("PrivacyPolicy");
    const darkMenu = !!isDarkMenu;

    return (
        <Fragment>
            <Header isDarMenu={darkMenu} />
            <div className="container">
                <MetaInfo {...getRouteMetaInfo("PrivacyPolicy")} />
                <div className="overflow-x-hidden mb-20 max-[1100px]:px-4 max-[850px]:px-4 max-[1070px]:mt-20">
                    <div className="mt-[40px]">
                        <p className="text-[20px]">
                            Политика конфиденциальности
                        </p>
                        <p className="mt-[10px]">
                            Настоящая Политика конфиденциальности описывает способы сбора, использования,
                            хранения и раскрытия информации, получаемой от пользователей нашего веб-сайта.
                        </p>
                    </div>
                    <div className="mt-[40px]">
                        <p className="text-[20px]">
                            Сбор и использование информации
                        </p>
                        <p className="mt-[10px]">
                            Мы можем собирать личную информацию от пользователей в различных формах, включая,
                            но не ограничиваясь, при посещении нашего сайта, регистрации на сайте,
                            заполнении формы и в связи с другими деятельностями, услугами,
                            функциями или ресурсами, предоставляемыми нашим сайтом.
                        </p>
                    </div>
                    <div className="mt-[40px]">
                        <p className="text-[20px]">
                            Защита вашей информации
                        </p>
                        <p className="mt-[10px]">
                            Мы предпримем все необходимые меры безопасности для защиты вашей личной информации от
                            несанкционированного доступа, изменения, раскрытия или уничтожения.
                        </p>
                    </div>
                    <div className="mt-[40px]">
                        <p className="text-[20px]">
                            Раскрытие информации третьим лицам
                        </p>
                        <p className="mt-[10px]">
                            Мы не продаем, не обмениваем и не сдаем в аренду личную информацию
                            пользователей третьим лицам.
                        </p>
                    </div>
                    <div className="mt-[40px]">
                        <p className="text-[20px]">
                            Изменения в политике конфиденциальности
                        </p>
                        <p className="mt-[10px]">
                            Мы оставляем за собой право обновлять нашу политику конфиденциальности в любое время.
                            Рекомендуем периодически проверять эту страницу на изменения.
                        </p>
                    </div>
                    <div className="mt-[40px]">
                        <p className="text-[20px]">
                            Принятие этих условий
                        </p>
                        <p className="mt-[10px]">
                            Используя наш сайт, вы подтверждаете свое согласие с этой политикой.
                            Если вы не согласны с этой политикой, пожалуйста, не используйте наш сайт.
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default PrivacyPolicy;