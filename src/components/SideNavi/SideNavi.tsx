import { Networks } from './components/Networks/Networks';
import { PaperView } from './components/PaperView/PaperView';
import style from './index.module.scss';
import { SankeyData, SankeyLink, SankeyLinkExtended } from '../../types/sankey';

interface Props {
    clickedNodeLinks: SankeyLinkExtended[] | undefined;
    clickedLink: SankeyLinkExtended | undefined;
    clickedButton: SankeyLink[] | undefined;
    clickedCluster: SankeyData | undefined;
    setClickedCluster: React.Dispatch<React.SetStateAction<SankeyData | undefined>>;
    originData: SankeyData;
    setOriginData: React.Dispatch<React.SetStateAction<SankeyData>>;
}

export function SideNavi({ clickedNodeLinks, clickedLink, clickedButton, clickedCluster, setClickedCluster, originData, setOriginData }: Props) {
    return (
        <div className={style.sideNavi}>
            <Networks originData={originData} setOriginData={setOriginData} setClickedCluster={setClickedCluster} />
            <PaperView
                originData={originData}
                setOriginData={setOriginData}
                clickedNodeLinks={clickedNodeLinks}
                clickedLink={clickedLink}
                clickedButton={clickedButton}
                clickedCluster={clickedCluster}
            />
        </div>
    );
}

// 링크 클릭시 네트워크, 페이퍼 같이 연동되게
