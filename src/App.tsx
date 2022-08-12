import FinalSankey from './FinalSankey';
import Header from './components/Header/Header';
import './styles.scss';
import style from './rootStyle.module.scss';
import { SideNavi } from './components/SideNavi/SideNavi';
// import { SankeyGraph } from './components/SankeyGraph';
import { fullData } from './Data';
import { useState, useEffect } from 'react';
import { SankeyData, SankeyLinkExtended } from './types';

interface Props {
    originData: SankeyData;
    setOriginData: React.Dispatch<React.SetStateAction<SankeyData>>;
}

// viewProt 수정 필요
export default function App() {
    const [originData, setOriginData] = useState(fullData);
    const [clickedLink, setClickedLink] = useState<SankeyLinkExtended>();
    //const [filteredData, setFilteredData] = useState<SankeyData>();

    // useEffect(() => {
    //     setOriginData(fullData);
    // }, [fullData]);

    return (
        <div className={style.root}>
            <Header />
            <div className={style.mainContainer}>
                <SideNavi clickedLink={clickedLink} />
                {/* <SankeyGraph /> */}
                <FinalSankey setClickedLink={setClickedLink} />
            </div>
        </div>
    );
}
