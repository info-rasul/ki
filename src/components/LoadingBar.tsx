import React, {useState, useEffect, useRef} from 'react';

const LoadingBar = () => {
    const [loading, setLoading] = useState(false);
    const myElementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = document.querySelector('.loading-bar') as HTMLElement;

        setLoading(true);
        element.style.display = 'block';

        setTimeout(() => {
            setLoading(false);
            element.style.display = 'none';
        }, 1000);
    }, []);

    return (
        <div
            className="loading-bar"
            ref={myElementRef}
            style={{
                height: '3px',
                backgroundColor: '#b8b8b8',
                position: 'absolute',
                zIndex: '99999',
                width: loading ? '100%' : '0%',
                transition: 'width 0.7s' }}>
        </div>
    );
};

export default LoadingBar;