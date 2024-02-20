import * as animation1 from '../assets/animations/ki_l1_v01.json'
import * as animation3 from '../assets/animations/ki_l3_v01.json'
import * as animation4 from '../assets/animations/ki_l4_v01.json'
import * as animation7 from "../assets/animations/ki_l5_v01.json";

// @ts-ignore
const ProtectionFromSubsidiaryResponsibilityData = [
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
        desc: "Сопровождение <br class='lene-break'/> уголовных дел",
        animation: animation4,
        path: '/services/support-of-criminal-cases'
    },
    {
        desc: "Параллельный <br class='br'/> импорт",
        animation: animation7,
        path: '/services/parallel-import'
    },
]

export default ProtectionFromSubsidiaryResponsibilityData;