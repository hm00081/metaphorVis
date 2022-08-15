// Libraries
import { useMeasure } from 'react-use';

// Custom Components
import { Sankey } from './components/Sankey';
// Global Styles
import './styles.scss';
import Button from '@mui/material/Button';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';
// Data & Hooks
import { useState, useEffect, useRef } from 'react';
import {
  basicData,
  targetaa,
  targetab,
  targetba,
  targetbb,
  targetca,
  targetcb,
  repa,
  repb,
  repc,
  repd,
  repea,
  repeb,
  repf,
  repg,
  reph,
  fullData,
} from './Data';
import {
  SankeyData,
  SankeyLink,
  SankeyLinkExtended,
  SankeyNodeExtended,
} from './types';
import { ButtonGroup } from '@mui/material';
import style from './button.module.scss';

interface Props {
  setClickedNodeLinks: React.Dispatch<
    React.SetStateAction<SankeyLinkExtended[] | undefined>
  >;
  setClickedLink: React.Dispatch<
    React.SetStateAction<SankeyLinkExtended | undefined>
  >;
  setClickedButton: React.Dispatch<
    React.SetStateAction<SankeyLink[] | undefined>
  >;
  clickedCluster: SankeyData | undefined;
  originData: SankeyData;
  setOriginData: React.Dispatch<React.SetStateAction<SankeyData>>;
}

// Component
export default function FinalSankey({
  originData,
  setOriginData,
  setClickedNodeLinks: setClickedNodeLinks,
  setClickedLink,
  setClickedButton,
  clickedCluster,
}: Props) {
  const [ref, { width, height }] = useMeasure<HTMLDivElement>();
  const [btn, setBtn] = useState(15);
  const [selected, setSelcted] = useState<'click' | 'unclick'>('unclick');
  const isMounted = useRef(true);
  // console.log(fullData.links);
  useEffect(() => {
    setTimeout(() => {
      setOriginData(fullData);
      setBtn(15);
    }, 1000);
    isMounted.current = false;
  }, []);

  return (
    <>
      <div className={style.sankey}>
        <div className={style.topWrapper}>
          <div className={style.mainTitle}>Sankey Diagram View</div>
          <div className={style.themeBtn}>
            <ButtonGroup
              size="medium"
              aria-label="outlined primary button group"
              color="secondary"
              variant="outlined"
              className={style.themebtnGroup}
              style={{ maxHeight: '25px', maxWidth: '450px' }}
            >
              <Button
                onClick={() => {
                  setOriginData(basicData);
                  setSelcted('click');
                  setBtn(0);
                }}
                variant={btn === 0 ? 'contained' : 'outlined'}
                style={{
                  fontSize: '6px',
                  textTransform: 'none',
                  fontWeight: '600',
                  width: 'auto',
                  padding: '3px',
                }}
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
                style={{
                  fontSize: '6px',
                  textTransform: 'none',
                  fontWeight: '600',
                  width: 'auto',
                  padding: '3px',
                }}
              >
                Show Full
              </Button>
            </ButtonGroup>
          </div>
        </div>
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
              style={{ maxWidth: '450px' }}
              // orientation={matches ? 'horizontal' : 'vertical'}
            >
              <Button
                onClick={() => {
                  setOriginData(targetaa);
                  setSelcted('click');
                  setBtn(9);
                }}
                variant={btn === 9 ? 'contained' : 'outlined'}
                style={{
                  fontSize: '7.5px',
                  textTransform: 'none',
                  fontWeight: '600',
                  width: 'auto',
                  padding: '7.1px',
                }}
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
                style={{
                  fontSize: '7.5px',
                  textTransform: 'none',
                  fontWeight: '600',
                  width: 'auto',
                  padding: '7.1px',
                }}
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
                style={{
                  fontSize: '7.5px',
                  textTransform: 'none',
                  fontWeight: '600',
                  width: 'auto',
                  padding: '7.1px',
                }}
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
                style={{
                  fontSize: '7.5px',
                  textTransform: 'none',
                  fontWeight: '600',
                  width: 'auto',
                  padding: '7.1px',
                }}
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
                style={{
                  fontSize: '7.5px',
                  textTransform: 'none',
                  fontWeight: '600',
                  width: 'auto',
                  padding: '7.1px',
                }}
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
                style={{
                  fontSize: '7.5px',
                  textTransform: 'none',
                  fontWeight: '600',
                  width: 'auto',
                  padding: '7.1px',
                }}
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
              style={{ maxWidth: '450px' }}
            >
              {/* <ThemeProvider theme={theme}></ThemeProvider> */}
              <Button
                onClick={() => {
                  setOriginData(repa);
                  setSelcted('click');
                  setBtn(1);
                }}
                variant={btn === 1 ? 'contained' : 'outlined'}
                style={{
                  fontSize: '7.5px',
                  textTransform: 'none',
                  fontWeight: '600',
                  width: 'auto',
                  padding: '7.1px',
                }}
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
                style={{
                  fontSize: '7.5px',
                  textTransform: 'none',
                  fontWeight: '600',
                  width: 'auto',
                  padding: '7.1px',
                }}
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
                style={{
                  fontSize: '7.5px',
                  textTransform: 'none',
                  fontWeight: '600',
                  width: 'auto',
                  padding: '7.1px',
                }}
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
                style={{
                  fontSize: '7.5px',
                  textTransform: 'none',
                  fontWeight: '600',
                  width: 'auto',
                  padding: '7.1px',
                }}
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
                style={{
                  fontSize: '7.5px',
                  textTransform: 'none',
                  fontWeight: '600',
                  width: 'auto',
                  padding: '7.1px',
                }}
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
                style={{
                  fontSize: '7.5px',
                  textTransform: 'none',
                  fontWeight: '600',
                  width: 'auto',
                  padding: '7.1px',
                }}
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
                style={{
                  fontSize: '7.5px',
                  textTransform: 'none',
                  fontWeight: '600',
                  width: 'auto',
                  padding: '13px',
                }}
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
                style={{
                  fontSize: '7.5px',
                  textTransform: 'none',
                  fontWeight: '600',
                  width: 'auto',
                  padding: '13px',
                }}
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
                style={{
                  fontSize: '7.5px',
                  textTransform: 'none',
                  fontWeight: '600',
                  width: 'auto',
                  padding: '7.1px',
                }}
              >
                Decorative Pattern
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
            setClickedNodeLinks={setClickedNodeLinks}
            setClickedLink={setClickedLink}
            clickedCluster={clickedCluster}
          />
        </div>
      </div>
    </>
  );
}
