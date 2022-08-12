import { Networks } from './components/Networks/Networks';
import { PaperView } from './components/PaperView/PaperView';
import style from './index.module.scss';
import { SankeyData, SankeyLink, SankeyLinkExtended } from '../../types/sankey';
import { basicData, targetaa, targetab, targetba, targetbb, targetca, targetcb, repa, repb, repc, repd, repea, repeb, repf, repg, reph, empty, fullData } from '../../Data';
import { useState } from 'react';

interface Props {
    clickedLink: SankeyLinkExtended | undefined;
}

export function SideNavi({ clickedLink }: Props) {
    const [originData, setOriginData] = useState(fullData);
    const renderingData: SankeyData = { ...originData };
    // const [links, setLinks] = useState<SankeyLinkExtended[]>([]);
    // console.log(links);
    // console.log(originData.links); // 잘 호출 됨
    // console.log(filteredList); // 필터된 앞부분만 나오긴 함
    return (
        <div className={style.sideNavi}>
            <Networks originData={originData} setOriginData={setOriginData} />
            <PaperView originData={originData} setOriginData={setOriginData} clickedLink={clickedLink} />
        </div>
    );
}

// 링크 클릭시 네트워크, 페이퍼 같이 연동되게
