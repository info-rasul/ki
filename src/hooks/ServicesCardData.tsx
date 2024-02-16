import ServicesAnimation5 from "../assets/img/services-animation5.svg"
import ServicesAnimation6 from "../assets/img/services-animation6.svg"
import * as animation1 from '../assets/animations/ki_l1_v01.json'
import * as animation2 from '../assets/animations/ki_l2_v01.json'
import * as animation3 from '../assets/animations/ki_l3_v01.json'
import * as animation4 from '../assets/animations/ki_l4_v01.json'
import * as animation5 from '../assets/animations/ki_l3-2_v01.json'
import * as animation7 from '../assets/animations/ki_l5_v01.json'

// @ts-ignore
const ServicesCardData = [
    {
        desc: "Комплексная защита <br/> должников от кредиторов",
        animation: animation1,
        path: '/escort'
    },
    {
        desc: "Защита от субсидиарной ответственности",
        animation: animation2,
        path: '/escort'
    },
    {
        desc: "Сопровождение на всех стадия банкротства в интересах должника",
        animation: animation3,
        path: '/escort'
    },
    {
        desc: "Сопровождение <br class='br'/> уголовных дел",
        animation: animation4,
        path: '/support-of-criminal-cases'
    },
    /*{
        desc: "Сопровождение <br class='br'/> уголовных дел",
        animation: animation5
    },
    {
        desc: "Сопровождение на всех стадия банкротства",
        animation: animation5
    },*/
    {
        desc: "Параллельный <br class='br'/> импорт",
        animation: animation7,
        path: '/parallel-import'
    },
]

export default ServicesCardData;