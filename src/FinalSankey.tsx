// Libraries
import { useMeasure } from 'react-use';

// Custom Components
import { Sankey } from './components/Sankey';

// Global Styles
import './styles.scss';
import Button from '@mui/material/Button';
// Data & Hooks
import { useState, useEffect, useRef } from 'react';
import { basicData, targetaa, targetab, targetba, targetbb, targetca, targetcb, repa, repb, repc, repd, repea, repeb, repf, repg, reph, empty, fullData } from './Data';
import { SankeyData, SankeyLink, SankeyLinkExtended, SankeyNodeExtended } from './types';
import { WordData } from './components/WordCloud/react-cloud/types/index';
import { ButtonGroup } from '@mui/material';
import style from './button.module.scss';

interface Props {
    setClickedNode: React.Dispatch<React.SetStateAction<SankeyLinkExtended[] | undefined>>;
    setClickedLink: React.Dispatch<React.SetStateAction<SankeyLinkExtended | undefined>>;
    setClickedButton: React.Dispatch<React.SetStateAction<SankeyLink[] | undefined>>;
}

// Component
export default function FinalSankey({ setClickedNode, setClickedLink, setClickedButton }: Props) {
    const [ref, { width, height }] = useMeasure<HTMLDivElement>();
    const [btn, setBtn] = useState(15);
    const [selected, setSelcted] = useState<'click' | 'unclick'>('unclick');
    const [originData, setOriginData] = useState<SankeyData>(fullData);
    const [filteredList, setFilteredList] = useState<SankeyLink[]>([]);
    // cloud data state
    const [originCloudData, setOriginCloudData] = useState<WordData>();
    const isMounted = useRef(true);
    // console.log(fullData.links);
    useEffect(() => {
        setTimeout(() => {
            setOriginData(fullData);
            setBtn(15);
            setFilteredList(filteredList);
        }, 1000);
        isMounted.current = false;
    }, []);

    return (
        <>
            <div className={style.sankey}>
                <div className={style.mainTitle}>Sankey Diagram View</div>
                <div className={style.btnWrapper}>
                    <div className={style.btn}>
                        <div className={style.btnTitle}>Target Theme</div>
                        {/* 버튼높이 헤더부분에 맞추고, 버튼그룹 폭을 생키와 동일하게. */}
                        <ButtonGroup
                            // orientation={`${matches ? 'horizontal' : 'verticcal'}`}
                            size="large"
                            aria-label="outlined primary button group"
                            color="secondary"
                            variant="outlined"
                            className={style.btnGroup}
                            // style={{ marginTop: '10px', marginBottom: '20px', minWidth: '600px', maxHeight: '60px' }}
                            // orientation={matches ? 'horizontal' : 'vertical'}
                        >
                            <Button
                                onClick={() => {
                                    setOriginData(targetaa);
                                    setSelcted('click');
                                    setBtn(9);
                                    setClickedButton(targetaa.links);
                                }}
                                variant={btn === 9 ? 'contained' : 'outlined'}
                                style={{ fontSize: '12px', textTransform: 'none', fontWeight: '630', width: 'auto', padding: '8px' }}
                            >
                                Politician's Speech
                            </Button>
                            <Button
                                onClick={() => {
                                    setOriginData(targetab);
                                    setSelcted('click');
                                    setBtn(10);
                                    setClickedButton(targetab.links);
                                }}
                                variant={btn === 10 ? 'contained' : 'outlined'}
                                style={{ fontSize: '12px', textTransform: 'none', fontWeight: '630', width: 'auto', padding: '8px' }}
                            >
                                Opinion to Politicians
                            </Button>
                            <Button
                                onClick={() => {
                                    setOriginData(targetba);
                                    setSelcted('click');
                                    setBtn(11);
                                    setClickedButton(targetba.links);
                                }}
                                variant={btn === 11 ? 'contained' : 'outlined'}
                                style={{ fontSize: '12px', textTransform: 'none', fontWeight: '630', width: 'auto', padding: '8px' }}
                            >
                                Product Appraisal
                            </Button>
                            <Button
                                onClick={() => {
                                    setOriginData(targetbb);
                                    setSelcted('click');
                                    setBtn(12);
                                    setClickedButton(targetbb.links);
                                }}
                                variant={btn === 12 ? 'contained' : 'outlined'}
                                style={{ fontSize: '12px', textTransform: 'none', fontWeight: '630', width: 'auto', padding: '8px' }}
                            >
                                Service Appraisal
                            </Button>
                            <Button
                                onClick={() => {
                                    setOriginData(targetca);
                                    setSelcted('click');
                                    setBtn(13);
                                    setClickedButton(targetca.links);
                                }}
                                variant={btn === 13 ? 'contained' : 'outlined'}
                                style={{ fontSize: '12px', textTransform: 'none', fontWeight: '630', width: 'auto', padding: '8px' }}
                            >
                                Opinion on a Specific Event
                            </Button>
                            <Button
                                onClick={() => {
                                    setOriginData(targetcb);
                                    setSelcted('click');
                                    setBtn(16);
                                    setClickedButton(targetcb.links);
                                }}
                                variant={btn === 16 ? 'contained' : 'outlined'}
                                style={{ fontSize: '12px', textTransform: 'none', fontWeight: '630', width: 'auto', padding: '8px' }}
                            >
                                Diffusion of Sentiment
                            </Button>
                        </ButtonGroup>
                    </div>

                    <div className={style.btn}>
                        <div className={style.btnTitle}>Representation Theme</div>
                        <ButtonGroup
                            size="medium"
                            aria-label="outlined primary button group"
                            color="secondary"
                            variant="outlined"
                            className={style.btnGroup}
                            // style={{ marginTop: '10px', minWidth: '600px', maxHeight: '60px' }}
                        >
                            {/* <ThemeProvider theme={theme}></ThemeProvider> */}
                            <Button
                                onClick={() => {
                                    setOriginData(repa);
                                    setSelcted('click');
                                    setBtn(1);
                                    setClickedButton(repa.links);
                                }}
                                variant={btn === 1 ? 'contained' : 'outlined'}
                                style={{ fontSize: '12px', textTransform: 'none', fontWeight: '630', width: 'auto', padding: '8px' }}
                            >
                                Map
                            </Button>
                            <Button
                                onClick={() => {
                                    setOriginData(repb);
                                    setSelcted('click');
                                    setBtn(2);
                                    setClickedButton(repb.links);
                                }}
                                variant={btn === 2 ? 'contained' : 'outlined'}
                                style={{ fontSize: '12px', textTransform: 'none', fontWeight: '630', width: 'auto', padding: '8px' }}
                            >
                                River
                            </Button>
                            <Button
                                onClick={() => {
                                    setOriginData(repc);
                                    setSelcted('click');
                                    setBtn(3);
                                    setClickedButton(repc.links);
                                }}
                                variant={btn === 3 ? 'contained' : 'outlined'}
                                style={{ fontSize: '12px', textTransform: 'none', fontWeight: '630', width: 'auto', padding: '8px' }}
                            >
                                Plant
                            </Button>
                            <Button
                                onClick={() => {
                                    setOriginData(repd);
                                    setSelcted('click');
                                    setBtn(4);
                                    setClickedButton(repd.links);
                                }}
                                variant={btn === 4 ? 'contained' : 'outlined'}
                                style={{ fontSize: '12px', textTransform: 'none', fontWeight: '630', width: 'auto', padding: '8px' }}
                            >
                                Bubble
                            </Button>
                            <Button
                                onClick={() => {
                                    setOriginData(repea);
                                    setSelcted('click');
                                    setBtn(5);
                                    setClickedButton(repea.links);
                                }}
                                variant={btn === 5 ? 'contained' : 'outlined'}
                                style={{ fontSize: '12px', textTransform: 'none', fontWeight: '630', width: 'auto', padding: '8px' }}
                            >
                                Wheel
                            </Button>
                            <Button
                                onClick={() => {
                                    setOriginData(repeb);
                                    setSelcted('click');
                                    setBtn(6);
                                    setClickedButton(repeb.links);
                                }}
                                variant={btn === 6 ? 'contained' : 'outlined'}
                                style={{ fontSize: '12px', textTransform: 'none', fontWeight: '630', width: 'auto', padding: '8px' }}
                            >
                                Building & Structure
                            </Button>
                            <Button
                                onClick={() => {
                                    setOriginData(repf);
                                    setSelcted('click');
                                    setBtn(7);
                                    setClickedButton(repf.links);
                                }}
                                variant={btn === 7 ? 'contained' : 'outlined'}
                                style={{ fontSize: '12px', textTransform: 'none', fontWeight: '630', width: 'auto', padding: '8px' }}
                            >
                                Geometry
                            </Button>
                            <Button
                                onClick={() => {
                                    setOriginData(repg);
                                    setSelcted('click');
                                    setBtn(8);
                                    setClickedButton(repg.links);
                                }}
                                variant={btn === 8 ? 'contained' : 'outlined'}
                                style={{ fontSize: '12px', textTransform: 'none', fontWeight: '630', width: 'auto', padding: '8px' }}
                            >
                                Machine
                            </Button>
                            <Button
                                onClick={() => {
                                    setOriginData(reph);
                                    setSelcted('click');
                                    setBtn(14);
                                    setClickedButton(reph.links);
                                }}
                                variant={btn === 14 ? 'contained' : 'outlined'}
                                style={{ fontSize: '12px', textTransform: 'none', fontWeight: '630', width: 'auto', padding: '8px' }}
                            >
                                Decorative Pattern
                            </Button>
                        </ButtonGroup>
                    </div>
                    <div className={style.btn}>
                        <div className={style.btnTitle}>Theme Control</div>
                        <ButtonGroup
                            size="medium"
                            aria-label="outlined primary button group"
                            color="secondary"
                            variant="outlined"
                            className={style.btnGroup}
                            // style={{ marginTop: '10px', minWidth: '600px', maxHeight: '60px' }}
                        >
                            <Button
                                onClick={() => {
                                    setOriginData(basicData);
                                    setSelcted('click');
                                    setBtn(0);
                                    setClickedButton(basicData.links);
                                }}
                                variant={btn === 0 ? 'contained' : 'outlined'}
                                style={{ fontSize: '12px', textTransform: 'none', fontWeight: '630', width: 'auto', padding: '8px' }}
                            >
                                Show Empty
                            </Button>
                            <Button
                                onClick={() => {
                                    setOriginData(fullData);
                                    setSelcted('click');
                                    setBtn(15);
                                    setClickedButton(fullData.links);
                                }}
                                variant={btn === 15 ? 'contained' : 'outlined'}
                                style={{ fontSize: '12px', textTransform: 'none', fontWeight: '630', width: 'auto', padding: '8px' }}
                            >
                                Show Full
                            </Button>
                        </ButtonGroup>
                    </div>
                </div>
                <div ref={ref}>
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
                        setClickedNode={setClickedNode}
                        setClickedLink={setClickedLink}
                    />
                </div>
            </div>
        </>
    );
}
