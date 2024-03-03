import * as animation1 from '../assets/animations/ki_l1_v01.json'
import * as animation2 from '../assets/animations/ki_l2_v01.json'
import * as animation3 from '../assets/animations/ki_l3_v01.json'
import * as animation4 from '../assets/animations/ki_l4_v01.json'

// @ts-ignore
const ParallelImportData = [
    {
        desc: "Сопровождение <br class='lene-break'/> уголовных дел",
        animation: animation4,
        path: '/soprovozhdenie-ugolovnyh-del'
    },
    {
        desc: "Комплексная защита <br/> должников от кредиторов",
        animation: animation1,
        path: '/zashchita-dolzhnikov-ot-kreditorov'
    },
    {
        desc: "Сопровождение на всех <br/> стадиях банкротства в <br/> интересах должника",
        animation: animation3,
        path: '/yuridicheskoe-soprovozhdenie-bankrotstva'
    },
    {
        desc: "Защита от субсидиарной <br/> ответственности",
        animation: animation2,
        path: '/zashchita-ot-subsidiarnoy-otvetstvennosti'
    },
]

export default ParallelImportData;