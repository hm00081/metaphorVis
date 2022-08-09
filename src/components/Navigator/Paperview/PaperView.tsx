import styled from 'styled-components';
import { motion, AnimatePresence, useViewportScroll } from 'framer-motion';
import { useState } from 'react';
import { SankeyData } from '../../../types/sankey';
import { makeImagePath } from './api';
import { useEffect } from 'react';
import { statusImgSet } from '../../../data/AllPaperData';
import { fullData } from '../../../Data';

const Slider = styled.div`
    position: relative;
    top: 0px;
`;

const Row = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    gap: 1px;
    margin: 5px 1px 1px 5px;
    padding-left: 30px;
    max-height: 150px;
    // grid-template-columns: repeat(16, 1fr);
    // position: absolute;
    width: 100%;
`;

const PaperBox = styled(motion.div)<{ bgPhoto: string }>`
    background-color: white;
    background-size: cover;
    background-position: center center;
    height: 77px;
    min-width: 77px;
    font-size: 66px;
    margin: 10px;
    cursor: pointer;
    // &:first-child {
    //     transform-origin: center left;
    // }
    // &:last-child {
    //     transform-origin: center right;
    // }
    // position: relative;
`;

interface PaperProps {
    originData: SankeyData;
    setOriginData: React.Dispatch<React.SetStateAction<SankeyData>>;
}

const rowVariants = {
    hidden: {
        x: window.outerWidth + 5,
    },
    visible: {
        x: 0,
    },
    exit: {
        x: -(window.outerWidth + 5),
    },
};

function filterImg(originData: SankeyData) {
    const filteredImg = originData.links.find((paper, i) => {
        if (paper.color !== 'grayLinkColor' && originData.status[i].paperName === paper.paperName) {
            console.log(1);
            return true;
        } else {
            console.log(0);
            return false;
        }
    });
    let findImgPaperName: string = filteredImg ? filteredImg.paperName! : '';

    return findImgPaperName;
}

export const PaperView = ({ originData, setOriginData }: PaperProps) => {
    const [index, setIndex] = useState(0);
    const renderingData: SankeyData = { ...originData };
    const offset = 60;
    useEffect(() => {
        // console.log(renderingData);
    }, [setOriginData]);

    const linkStatus = renderingData.links.filter((links) => {
        if (links.source >= 100) {
            return { ...links };
        } else return null;
    });
    console.log(linkStatus);

    return (
        <>
            <div style={{ marginLeft: '10px', marginTop: '10px', fontSize: '20px', fontWeight: '650', marginBottom: '20px' }}>PaperView</div>
            <Row variants={rowVariants} initial="initial" animate="visible" exit="exit" transition={{ type: 'tween', duration: 1 }} key={index}>
                {renderingData.status
                    .slice(0)
                    .slice(offset * index, offset * index + offset)
                    .map((paper) => (
                        <PaperBox layoutId={paper.imgUrl + 'layout'} key={paper.imgUrl} initial="normal" transition={{ type: 'tween' }} bgPhoto={'w60'}>
                            {paper.imgUrl ? <img width="77" height="77" src={`https://i.imgur.com/${paper.imgUrl}`}></img> : null}
                            {paper.imgUrl ? <div style={{ fontSize: '12px', fontWeight: 'bold', textAlign: 'center' }}>{paper.paperName}</div> : null}
                        </PaperBox>
                    ))}
            </Row>
        </>
    );
};
