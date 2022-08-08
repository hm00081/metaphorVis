import styled from 'styled-components';
import { SankeyData } from '../../types/sankey';
import { SourceTargetIdLinksDict } from '../Sankey/Sankey';
import { useState, useEffect } from 'react';
import Network from './Network/Network.jsx';
import { PaperView } from './Paperview/PaperView';
// import { ReactComponent as MyNetwork } from './MyNetwork.svg';

const BigNav = styled.div`
    display: flex;
    position: absolute;
    background-color: white;
    width: 750px;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
`;

interface PaperProps {
    originData: SankeyData;
    setOriginData: React.Dispatch<React.SetStateAction<SankeyData>>;
}

function Navigator() {
    return (
        <>
            <BigNav>
                <Network />
                {/* <PaperView /> */}
            </BigNav>
        </>
    );
}
export default Navigator;
