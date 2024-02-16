import * as animation1 from '../assets/animations/ki_l1_v01.json'
import * as animation2 from '../assets/animations/ki_l2_v01.json'
import * as animation3 from '../assets/animations/ki_l3_v01.json'
import * as animation4 from '../assets/animations/ki_l4_v01.json'

// @ts-ignore
const EscortCardData = [
    {
        desc: "Комплексная защита <br/> должников от кредиторов",
        animation: animation1,
        path: '/escort'
    },
    {
        desc: "Защита от субсидиарной <br/> ответственности",
        animation: animation2,
        path: '/escort'
    },
    {
        desc: "Сопровождение на всех стадия <br/> банкротства в интересах должника",
        animation: animation3,
        path: '/escort'
    },
    {
        desc: "Сопровождение <br class='lene-break'/> уголовных дел",
        animation: animation4,
        path: '/escort'
    },
]

export default EscortCardData;