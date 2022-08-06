import styled from 'styled-components';

// import { getAPIs, IGetPapersResult, Info } from '../api';
import { useState, useEffect } from 'react';

const BigNav = styled.div`
    display: flex;
    position: absolute;
    background-color: white;
    width: 450px;
    height: 1000px;
    margin-left: 20px;
    margin-top: 20px;
`;

function Navigator() {
    return (
        <>
            <BigNav />
        </>
    );
}
export default Navigator;
