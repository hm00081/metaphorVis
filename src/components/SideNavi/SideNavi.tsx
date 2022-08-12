import { Networks } from './components/Networks/Networks';
import { PaperView } from './components/PaperView/PaperView';
import style from './index.module.scss';
import { SankeyData, SankeyLink } from '../../types/sankey';
import { basicData, targetaa, targetab, targetba, targetbb, targetca, targetcb, repa, repb, repc, repd, repea, repeb, repf, repg, reph, empty, fullData } from '../../Data';
import { useState } from 'react';

interface Props {
    originData: SankeyData;
    setOriginData: React.Dispatch<React.SetStateAction<SankeyData>>;
    filteredList: SankeyLink[];
    setFilteredList: React.Dispatch<React.SetStateAction<SankeyLink[]>>;
}

export function SideNavi() {
    const [originData, setOriginData] = useState(fullData);
    const [filteredList, setFilteredList] = useState(originData.links);
    const renderingData: SankeyData = { ...originData };
    // console.log(originData.links); // 잘 호출 됨
    console.log(filteredList); // 필터된 앞부분만 나오긴 함
    return (
        <div className={style.sideNavi}>
            <Networks originData={originData} setOriginData={setOriginData} />
            <PaperView originData={originData} setOriginData={setOriginData} filteredList={originData.links} setFilteredList={setFilteredList} />
        </div>
    );
}

// 링크 클릭시 네트워크, 페이퍼 같이 연동되게
