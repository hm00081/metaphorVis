// Libraries
import { useMeasure } from 'react-use';

// Custom Components
import { Sankey } from './components/Sankey';

// Global Styles
import './styles.scss';
import styled from 'styled-components';
import Button from '@mui/material/Button';
// Data & Hooks
import { useState, useEffect, useRef } from 'react';
import { basicData, targetaa, targetab, targetba, targetbb, targetca, targetcb, repa, repb, repc, repd, repea, repeb, repf, repg, reph, empty, fullData } from './Data';
import { SankeyData, SankeyLink } from './types';
import { WordData } from './components/WordCloud/react-cloud/types/index';
import { ButtonGroup } from '@mui/material';
import style from './button.module.scss';

// Component
export default function FinalSankey() {
    const [ref, { width, height }] = useMeasure<HTMLDivElement>();
    const [btn, setBtn] = useState(15);
    const [selected, setSelcted] = useState<'click' | 'unclick'>('unclick');
    const [originData, setOriginData] = useState<SankeyData>(fullData);
    const [filteredList, setFilteredList] = useState<SankeyLink[]>([]);
    // cloud data state
    const [originCloudData, setOriginCloudData] = useState<WordData>();
    const isMounted = useRef(true);
    // console.log(originData);
    const title = ['Paper', 'Target', 'Intermediation', 'Representation', 'Vis var&tech'];

    useEffect(() => {
        setTimeout(() => {
            setOriginData(fullData);
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
                                }}
                                variant={btn === 9 ? 'contained' : 'outlined'}
                                style={{ fontSize: '12px', textTransform: 'none', fontWeight: '630' }}
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
                                style={{ fontSize: '12px', textTransform: 'none', fontWeight: '630' }}
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
                                style={{ fontSize: '12px', textTransform: 'none', fontWeight: '630' }}
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
                                style={{ fontSize: '12px', textTransform: 'none', fontWeight: '630' }}
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
                                style={{ fontSize: '12px', textTransform: 'none', fontWeight: '630' }}
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
                                style={{ fontSize: '12px', textTransform: 'none', fontWeight: '630' }}
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
                                }}
                                variant={btn === 1 ? 'contained' : 'outlined'}
                                style={{ fontSize: '12px', textTransform: 'none', fontWeight: '630' }}
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
                                style={{ fontSize: '12px', textTransform: 'none', fontWeight: '630' }}
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
                                style={{ fontSize: '12px', textTransform: 'none', fontWeight: '630' }}
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
                                style={{ fontSize: '12px', textTransform: 'none', fontWeight: '630' }}
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
                                style={{ fontSize: '12px', textTransform: 'none', fontWeight: '630' }}
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
                                style={{ fontSize: '12px', textTransform: 'none', fontWeight: '630' }}
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
                                style={{ fontSize: '12px', textTransform: 'none', fontWeight: '630' }}
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
                                style={{ fontSize: '12px', textTransform: 'none', fontWeight: '630' }}
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
                                style={{ fontSize: '12px', textTransform: 'none', fontWeight: '630' }}
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
                                }}
                                variant={btn === 0 ? 'contained' : 'outlined'}
                                style={{ fontSize: '12px', textTransform: 'none', fontWeight: '630' }}
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
                                style={{ fontSize: '12px', textTransform: 'none', fontWeight: '630' }}
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
                    />
                </div>
            </div>
        </>
    );
}
