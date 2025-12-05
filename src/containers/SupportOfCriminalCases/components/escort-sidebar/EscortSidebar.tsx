import React, {useEffect, useState} from 'react';
import QRCodeServices from "../../../../components/qr-code/Services";

const EscortSidebar: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className="escort__sidebar flex flex-col gap-[120px] pt-20 right-20 max-[1080px]:hidden">
            <QRCodeServices />
        </div>
    );
};

export default EscortSidebar;