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
    // padding-left: 50px;
    max-height: 150px;
    // grid-template-columns: repeat(16, 1fr);
    // position: absolute;
    width: 100%;
`;

const PaperBox = styled(motion.div)<{ bgPhoto: string }>`
    background-color: white;
    background-size: cover;
    background-position: center center;
    height: 111px;
    min-width: 111px;
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

const offset = 60;

export const PaperView = () => {
    const [originData, setOriginData] = useState<SankeyData>(fullData);
    const [index, setIndex] = useState(0);
    const renderingData: SankeyData = { ...originData };

    useEffect(() => {
        console.log(renderingData);
    }, [setOriginData]);

    renderingData.links = renderingData.links.map((links) => {
        return { ...links };
    });
    return (
        <>
            <Row variants={rowVariants} initial="initial" animate="visible" exit="exit" transition={{ type: 'tween', duration: 1 }} key={index}>
                {renderingData.status
                    .slice(0)
                    .slice(offset * index, offset * index + offset)
                    .map((paper) => (
                        <PaperBox layoutId={paper.imgUrl + 'layout'} key={paper.imgUrl} initial="normal" transition={{ type: 'tween' }} bgPhoto={'w60'}>
                            {paper.imgUrl ? <img width="111" height="111" src={`https://i.imgur.com/${paper.imgUrl}`}></img> : null}
                        </PaperBox>
                    ))}
                {/* {statusImgSet
                    .slice(0)
                    .slice(offset * index, offset * index + offset)
                    .map((paper) => (
                        <PaperBox layoutId={paper.imgUrl + 'layout'} key={paper.imgUrl} initial="normal" transition={{ type: 'tween' }} bgPhoto={'w60'}>
                            {paper.imgUrl ? <img width="111" height="111" src={`https://i.imgur.com/${paper.imgUrl}`}></img> : null}
                        </PaperBox>
                    ))} */}
            </Row>

            <div>hi</div>
        </>
    );
};
