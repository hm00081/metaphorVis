import { Networks } from './components/Networks/Networks';
import { PaperView } from './components/PaperView/PaperView';
import style from './index.module.scss';
import { SankeyData } from '../../types/sankey';
import { basicData, targetaa, targetab, targetba, targetbb, targetca, targetcb, repa, repb, repc, repd, repea, repeb, repf, repg, reph, empty, fullData } from '../../Data';
import { useState } from 'react';

interface Props {
    originData: SankeyData;
    setOriginData: React.Dispatch<React.SetStateAction<SankeyData>>;
}

export function SideNavi() {
    const [originData, setOriginData] = useState(fullData);
    const renderingData: SankeyData = { ...originData };
    console.log(originData); // 잘 호출 됨
    return (
        <div className={style.sideNavi}>
            <Networks originData={originData} setOriginData={setOriginData} />
            <PaperView originData={originData} setOriginData={setOriginData} />
        </div>
    );
}

// 링크 클릭시 네트워크, 페이퍼 같이 연동되게
