import * as animation1 from '../assets/animations/ki_l1_v01.json'
import * as animation2 from '../assets/animations/ki_l2_v01.json'
import * as animation3 from '../assets/animations/ki_l3_v01.json'
import * as animation7 from "../assets/animations/ki_l5_v01.json";

// @ts-ignore
const SupportOfCriminalCasesData = [
    {
        desc: "Параллельный <br class='br'/> импорт",
        animation: animation7,
        path: '/services/parallel-import'
    },
    {
        desc: "Комплексная защита <br/> должников от кредиторов",
        animation: animation1,
        path: '/services/comprehensive-protection'
    },
    {
        desc: "Сопровождение на всех <br/> стадиях банкротства в <br/> интересах должника",
        animation: animation3,
        path: '/services/escort'
    },
    {
        desc: "Защита от субсидиарной <br/> ответственности",
        animation: animation2,
        path: '/services/protection-from-subsidiary-responsibility'
    },
]

export default SupportOfCriminalCasesData;