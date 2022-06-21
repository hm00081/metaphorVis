import FinalSankey from './FinalSankey';
import ParentSize from '@visx/responsive/lib/components/ParentSizeModern';
import Word from './components/WordCloud/Word';

import './sandbox-styles.css';
import withStyles from './FinalCirclePack';
import StackedBarChart from './components/BarChart/BarChart';
import Header from './components/Header/Header';
import styled from 'styled-components';

//@ts-ignore
const draw = <withStyles />;
//@ts-ignore
const barChart = <StackedBarChart />;

const Clouds = styled.div`
    margin-left: 400px;
    margin-top: -150px;
`;

function App() {
    return (
        <>
            <Header />
            <FinalSankey />
            {/* <Clouds>
                <CloudResults />
            </Clouds> */}
            {/* <Cloud /> */}
            {/* <ParentSize>{({ width, height }) => <StackedBarChart width={width} height={height} />}</ParentSize> */}
            {/* {draw} */}
            {/* <ParentSize>{({ width, height }) => <Word width={width} height={height} />}</ParentSize> */}
        </>
    );
}

export default App;
