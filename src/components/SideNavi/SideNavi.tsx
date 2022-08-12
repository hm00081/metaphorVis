import { Networks } from './components/Networks/Networks';
import { PaperView } from './components/PaperView/PaperView';
import style from './index.module.scss';
import { SankeyData, SankeyLink, SankeyLinkExtended, SankeyNodeExtended } from '../../types/sankey';
import { basicData, targetaa, targetab, targetba, targetbb, targetca, targetcb, repa, repb, repc, repd, repea, repeb, repf, repg, reph, empty, fullData } from '../../Data';
import { useState } from 'react';

interface Props {
    clickedNode: SankeyLinkExtended[] | undefined;
    clickedLink: SankeyLinkExtended | undefined;
    clickedButton: SankeyLink[] | undefined;
}

export function SideNavi({ clickedNode, clickedLink, clickedButton }: Props) {
    const [originData, setOriginData] = useState(fullData);
    const renderingData: SankeyData = { ...originData };
    return (
        <div className={style.sideNavi}>
            <Networks originData={originData} setOriginData={setOriginData} />
            <PaperView originData={originData} setOriginData={setOriginData} clickedNode={clickedNode} clickedLink={clickedLink} clickedButton={clickedButton} />
        </div>
    );
}

// 링크 클릭시 네트워크, 페이퍼 같이 연동되게
