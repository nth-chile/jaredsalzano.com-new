import { useState, useEffect } from 'react';

export default function useMediaQuery() {
    const [sm, setSm] = useState(false);
    const [md, setMd] = useState(false);
    const [lg, setLg] = useState(false);
    const [xl, setXl] = useState(false);
    const [xxl, setXxl] = useState(false);

    useEffect(() => {
        const mediaQuerySm = window.matchMedia('(min-width: 640px)');
        const mediaQueryMd = window.matchMedia('(min-width: 768px)');
        const mediaQueryLg = window.matchMedia('(min-width: 1024px)');
        const mediaQueryXl = window.matchMedia('(min-width: 1280px)');
        const mediaQueryXxl = window.matchMedia('(min-width: 1536px)');

        const handleMediaQueryChange = () => {
            setSm(mediaQuerySm.matches);
            setMd(mediaQueryMd.matches);
            setLg(mediaQueryLg.matches);
            setXl(mediaQueryXl.matches);
            setXxl(mediaQueryXxl.matches);
        };

        handleMediaQueryChange();

        mediaQuerySm.addEventListener('change', handleMediaQueryChange);
        mediaQueryMd.addEventListener('change', handleMediaQueryChange);
        mediaQueryLg.addEventListener('change', handleMediaQueryChange);
        mediaQueryXl.addEventListener('change', handleMediaQueryChange);
        mediaQueryXxl.addEventListener('change', handleMediaQueryChange);

        return () => {
            mediaQuerySm.removeEventListener('change', handleMediaQueryChange);
            mediaQueryMd.removeEventListener('change', handleMediaQueryChange);
            mediaQueryLg.removeEventListener('change', handleMediaQueryChange);
            mediaQueryXl.removeEventListener('change', handleMediaQueryChange);
            mediaQueryXxl.removeEventListener('change', handleMediaQueryChange);
        };
    }, []);

    return { sm, md, lg, xl, xxl };
};
