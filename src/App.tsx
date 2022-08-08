import FinalSankey from './FinalSankey';
import ParentSize from '@visx/responsive/lib/components/ParentSizeModern';
import Word from './components/WordCloud/Word';
import withStyles from './FinalCirclePack';
import StackedBarChart from './components/BarChart/BarChart';
import Header from './components/Header/Header';
import Navigator from './components/Navigator/Navigator';
import styled from 'styled-components';
import ThemeProvider from 'styled-components';
import './styles.scss';
// import { useQuery} from 'react-query';
import { SankeyData } from './types';
import { PaperView } from '../src/components/Navigator/Paperview/PaperView';

// //@ts-ignore
// const draw = <withStyles />;
// //@ts-ignore
// const barChart = <StackedBarChart />;

// const BigBox = styled.g`
//     background-color: 'blue';
// `;

// const Clouds = styled.div`
//     margin-left: 400px;
//     margin-top: -150px;
// `;

interface PaperProps {
    originData: SankeyData;
    setOriginData: React.Dispatch<React.SetStateAction<SankeyData>>;
}

// viewProt 수정 필요
function App() {
    return (
        <div className="App">
            <Header />
            <Navigator />;
            <FinalSankey />
        </div>
    );
}

export default App;
