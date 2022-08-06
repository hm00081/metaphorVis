// Libraries
import { useMeasure } from 'react-use';

// Custom Components
import { Sankey } from './components/Sankey';

// Global Styles
import './styles.scss';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Data & Hooks
import { useState, useEffect, useRef, useReducer } from 'react';
import { basicData, targetaa, targetab, targetba, targetbb, targetca, targetcb, repa, repb, repc, repd, repea, repeb, repf, repg, reph, empty, fullData } from './Data';
import { SankeyData, SankeyLinkExtended, SankeyNodeExtended, SankeyLink } from './types';
import { WordData } from './components/WordCloud/react-cloud/types/index';
import { ButtonGroup } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { D3ZoomEvent } from 'd3';

const FinalSankeys = styled.div`
    margin-top: 50px;
    margin-bottom: auto;
    // margin-left: 120px;
    // background-color: #eae2d4;
`;

const Menu = styled.div`
    min-width: 100px;
    position: relative;
    display: block;
    font-size: 2em;
    padding-bottom: 10px;
    margin-top: 10px;
    font-weight: bold;
    color: black;
    justify-content: space-between;
`;

const SecButtonPos = styled.div`
    // display: inline-block;
    // margin-left: 1.5em;
    // margin-top: -55px;
`;

// Component
export default function FinalSankey() {
    const [ref, { width, height }] = useMeasure<HTMLDivElement>();
    const [btn, setBtn] = useState(15);
    const [selected, setSelcted] = useState<'click' | 'unclick'>('unclick');
    const [originData, setOriginData] = useState<SankeyData>(fullData);
    // cloud data state
    const [originCloudData, setOriginCloudData] = useState<WordData>();
    const isMounted = useRef(true);
    // console.log(originData);
    const title = ['Paper', 'Target', 'Intermediation', 'Representation', 'Vis var&tech'];
    const columns = title.map((title) => title).filter((title, pos, arr) => arr.indexOf(title) === pos);

    // var svg = d3
    // .select('mainSankey')
    // .append('div')
    // .attr('width', 1000)
    // .attr('height', 1000)
    // .call(s
    //     //@ts-ignore
    //     d3.zoom().on('zoom', (event) => {
    //         svg.attr('transform', () => event.transform);
    //     })
    // )
    // .append('g')
    // .attr('transform', ''); //zoomevent

    useEffect(() => {
        setTimeout(() => {
            setOriginData(fullData);
        }, 1000);
        isMounted.current = false;
    }, []);

    return (
        <>
            <div className="mainSankey">
                <div className="container" ref={ref}>
                    <div className="double-menu-grid">
                        <Menu>Target Theme</Menu>
                        <ButtonGroup
                            // orientation={`${matches ? 'horizontal' : 'verticcal'}`}
                            size="large"
                            aria-label="outlined primary button group"
                            color="secondary"
                            variant="outlined"
                            style={{ marginTop: '10px', marginBottom: '20px', minWidth: '600px', maxHeight: '60px' }}
                            // orientation={matches ? 'horizontal' : 'vertical'}
                        >
                            <Button
                                onClick={() => {
                                    setOriginData(targetaa);
                                    setSelcted('click');
                                    setBtn(9);
                                }}
                                variant={btn === 9 ? 'contained' : 'outlined'}
                                style={{ textTransform: 'none' }}
                            >
                                Politician's Speech
                            </Button>
                            <Button
                                onClick={() => {
                                    setOriginData(targetab);
                                    setSelcted('click');
                                    setBtn(10);
                                }}
                                variant={btn === 10 ? 'contained' : 'outlined'}
                                style={{ textTransform: 'none' }}
                            >
                                Opinion to Politicians
                            </Button>
                            <Button
                                onClick={() => {
                                    setOriginData(targetba);
                                    setSelcted('click');
                                    setBtn(11);
                                }}
                                variant={btn === 11 ? 'contained' : 'outlined'}
                                style={{ textTransform: 'none' }}
                            >
                                Product Appraisal
                            </Button>
                            <Button
                                onClick={() => {
                                    setOriginData(targetbb);
                                    setSelcted('click');
                                    setBtn(12);
                                }}
                                variant={btn === 12 ? 'contained' : 'outlined'}
                                style={{ textTransform: 'none' }}
                            >
                                Service Appraisal
                            </Button>
                            <Button
                                onClick={() => {
                                    setOriginData(targetca);
                                    setSelcted('click');
                                    setBtn(13);
                                }}
                                variant={btn === 13 ? 'contained' : 'outlined'}
                                style={{ textTransform: 'none' }}
                            >
                                Opinion on a Specific Event
                            </Button>
                            <Button
                                onClick={() => {
                                    setOriginData(targetcb);
                                    setSelcted('click');
                                    setBtn(16);
                                }}
                                variant={btn === 16 ? 'contained' : 'outlined'}
                                style={{ textTransform: 'none' }}
                            >
                                Diffusion of Sentiment
                            </Button>
                        </ButtonGroup>

                        <SecButtonPos>
                            <Menu>Representation Theme</Menu>
                            <ButtonGroup
                                size="large"
                                aria-label="outlined primary button group"
                                color="secondary"
                                variant="outlined"
                                style={{ marginTop: '10px', minWidth: '600px', maxHeight: '60px' }}
                            >
                                {/* <ThemeProvider theme={theme}></ThemeProvider> */}
                                <Button
                                    onClick={() => {
                                        setOriginData(repa);
                                        setSelcted('click');
                                        setBtn(1);
                                    }}
                                    variant={btn === 1 ? 'contained' : 'outlined'}
                                    style={{ textTransform: 'none' }}
                                >
                                    Map
                                </Button>
                                <Button
                                    onClick={() => {
                                        setOriginData(repb);
                                        setSelcted('click');
                                        setBtn(2);
                                    }}
                                    variant={btn === 2 ? 'contained' : 'outlined'}
                                    style={{ textTransform: 'none' }}
                                >
                                    River
                                </Button>
                                <Button
                                    onClick={() => {
                                        setOriginData(repc);
                                        setSelcted('click');
                                        setBtn(3);
                                    }}
                                    variant={btn === 3 ? 'contained' : 'outlined'}
                                    style={{ textTransform: 'none' }}
                                >
                                    Plant
                                </Button>
                                <Button
                                    onClick={() => {
                                        setOriginData(repd);
                                        setSelcted('click');
                                        setBtn(4);
                                    }}
                                    variant={btn === 4 ? 'contained' : 'outlined'}
                                    style={{ textTransform: 'none' }}
                                >
                                    Bubble
                                </Button>
                                <Button
                                    onClick={() => {
                                        setOriginData(repea);
                                        setSelcted('click');
                                        setBtn(5);
                                    }}
                                    variant={btn === 5 ? 'contained' : 'outlined'}
                                    style={{ textTransform: 'none' }}
                                >
                                    Wheel
                                </Button>
                                <Button
                                    onClick={() => {
                                        setOriginData(repeb);
                                        setSelcted('click');
                                        setBtn(6);
                                    }}
                                    variant={btn === 6 ? 'contained' : 'outlined'}
                                    style={{ textTransform: 'none' }}
                                >
                                    Building & Structure
                                </Button>
                                <Button
                                    onClick={() => {
                                        setOriginData(repf);
                                        setSelcted('click');
                                        setBtn(7);
                                    }}
                                    variant={btn === 7 ? 'contained' : 'outlined'}
                                    style={{ textTransform: 'none' }}
                                >
                                    Geometry
                                </Button>
                                <Button
                                    onClick={() => {
                                        setOriginData(repg);
                                        setSelcted('click');
                                        setBtn(8);
                                    }}
                                    variant={btn === 8 ? 'contained' : 'outlined'}
                                    style={{ textTransform: 'none' }}
                                >
                                    Machine
                                </Button>
                                <Button
                                    onClick={() => {
                                        setOriginData(reph);
                                        setSelcted('click');
                                        setBtn(14);
                                    }}
                                    variant={btn === 14 ? 'contained' : 'outlined'}
                                    style={{ textTransform: 'none' }}
                                >
                                    Decorative Pattern
                                </Button>

                                <Button
                                    onClick={() => {
                                        setOriginData(basicData);
                                        setSelcted('click');
                                        setBtn(0);
                                    }}
                                    variant={btn === 0 ? 'contained' : 'outlined'}
                                    style={{ textTransform: 'none' }}
                                >
                                    Show Empty
                                </Button>
                                <Button
                                    onClick={() => {
                                        setOriginData(fullData);
                                        setSelcted('click');
                                        setBtn(15);
                                    }}
                                    variant={btn === 15 ? 'contained' : 'outlined'}
                                    style={{ textTransform: 'none' }}
                                >
                                    Show Full
                                </Button>
                            </ButtonGroup>
                        </SecButtonPos>
                    </div>
                    <FinalSankeys>
                        <div className="sankey">
                            <Sankey
                                width={width}
                                height={height}
                                originData={originData}
                                paddingTop={4}
                                nodeWidth={2}
                                nodeHeight={1.5}
                                nodeMargin={0.8}
                                minLinkBreadth={0.1}
                                maxLinkBreadth={2}
                                setOriginData={setOriginData}
                            />
                        </div>
                    </FinalSankeys>
                </div>
            </div>
        </>
    );
}
