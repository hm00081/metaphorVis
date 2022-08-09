import styled from 'styled-components';
import { SankeyData } from '../../types/sankey';
import { SourceTargetIdLinksDict } from '../Sankey/Sankey';
import { useState, useEffect } from 'react';
import { Network } from './Network/Network';
import { PaperView } from './Paperview/PaperView';
import { fullData } from '../../Data';
// import { ReactComponent as MyNetwork } from './MyNetwork.svg';

const BigNav = styled.div`
    display: inline-block;
    position: absolute;
    background-color: white;
    width: 750px;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
`;

function Navigator() {
    const [originData, setOriginData] = useState<SankeyData>(fullData);
    return (
        <>
            <BigNav>
                <Network />
                <PaperView originData={originData} setOriginData={setOriginData} />
            </BigNav>
        </>
    );
}
export default Navigator;
