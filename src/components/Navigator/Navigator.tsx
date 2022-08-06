import styled from 'styled-components';

// import { getAPIs, IGetPapersResult, Info } from '../api';
import { useState, useEffect } from 'react';
import Network from './Network/Network.jsx';
// import { ReactComponent as MyNetwork } from './Network/MyNetwork.svg';

const BigNav = styled.div`
    display: flex;
    position: absolute;
    background-color: white;
    width: 750px;
    height: 1200px;
    overflow-x: hidden;
    overflow-y: auto;
`;

function Navigator() {
    return (
        <>
            <BigNav>
                <Network />
            </BigNav>
        </>
    );
}
export default Navigator;
