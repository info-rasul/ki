import * as animation1 from '../assets/animations/ki_l1_v01.json'
import * as animation2 from '../assets/animations/ki_l2_v01.json'
import * as animation4 from '../assets/animations/ki_l4_v01.json'
import * as animation7 from "../assets/animations/ki_l5_v01.json";

// @ts-ignore
const EscortCardData = [
    {
        desc: "Сопровождение <br class='lene-break'/> уголовных дел",
        animation: animation4,
        path: '/soprovozhdenie-ugolovnyh-del'
    },
    {
        desc: "Параллельный <br class='br'/> импорт",
        animation: animation7,
        path: '/parallelnyy-import-oborudovaniya'
    },
    {
        desc: "Комплексная защита&nbsp;<br /> должников от кредиторов",
        animation: animation1,
        path: '/zashchita-dolzhnikov-ot-kreditorov'
    },
    {
        desc: "Защита от субсидиарной&nbsp;<br /> ответственности",
        animation: animation2,
        path: '/zashchita-ot-subsidiarnoy-otvetstvennosti'
    },
]

export default EscortCardData;