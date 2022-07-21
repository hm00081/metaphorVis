import FinalSankey from './FinalSankey';
import ParentSize from '@visx/responsive/lib/components/ParentSizeModern';
import Word from './components/WordCloud/Word';
import withStyles from './FinalCirclePack';
import StackedBarChart from './components/BarChart/BarChart';
import Header from './components/Header/Header';
import styled from 'styled-components';

//@ts-ignore
const draw = <withStyles />;
//@ts-ignore
const barChart = <StackedBarChart />;

const BigBox = styled.g`
    background-color: 'blue';
`;

const Clouds = styled.div`
    margin-left: 400px;
    margin-top: -150px;
`;

function App() {
    return (
        <>
            <Header />
            <FinalSankey />
        </>
    );
}

export default App;
