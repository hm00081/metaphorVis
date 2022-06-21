import React from 'react';
import { useMediaQuery } from 'react-responsive';

//@ts-ignore
export const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({
        query: '(max-width:768px)',
    });
    return <>{isMobile && children}</>;
};
//@ts-ignore
export const Pc = ({ children }) => {
    const isPc = useMediaQuery({
        query: '(min-width:769px)',
    });
    return <>{isPc && children}</>;
};
