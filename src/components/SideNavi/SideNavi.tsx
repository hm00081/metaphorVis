import { Networks } from './components/Networks/Networks';
import { PaperView } from './components/PaperView/PaperView';
import style from './index.module.scss';
import { SankeyData, SankeyLink, SankeyLinkExtended, SankeyNodeExtended } from '../../types/sankey';
import { basicData, targetaa, targetab, targetba, targetbb, targetca, targetcb, repa, repb, repc, repd, repea, repeb, repf, repg, reph, fullData } from '../../Data';
import { useState } from 'react';

interface Props {
    clickedNode: SankeyLinkExtended[] | undefined;
    clickedLink: SankeyLinkExtended | undefined;
    clickedButton: SankeyLink[] | undefined;
    clickedCluster: SankeyData | undefined;
    setClickedCluster: React.Dispatch<React.SetStateAction<SankeyData | undefined>>;
    originData: SankeyData;
    setOriginData: React.Dispatch<React.SetStateAction<SankeyData>>;
}

export function SideNavi({ clickedNode, clickedLink, clickedButton, clickedCluster, setClickedCluster, originData, setOriginData }: Props) {
    return (
        <div className={style.sideNavi}>
            <Networks originData={originData} setOriginData={setOriginData} setClickedCluster={setClickedCluster} />
            <PaperView originData={originData} setOriginData={setOriginData} clickedNode={clickedNode} clickedLink={clickedLink} clickedButton={clickedButton} clickedCluster={clickedCluster} />
        </div>
    );
}

// 링크 클릭시 네트워크, 페이퍼 같이 연동되게
