import styled from 'styled-components';
import { motion, AnimatePresence, useViewportScroll } from 'framer-motion';
import { useState } from 'react';
import { SankeyData, SankeyNode, SankeyLink, SankeyNodeExtended, SankeyLinkExtended } from '../../../../types';
import { useEffect } from 'react';
import { calcSankeyNodes, calcSankeyLinks } from '../../../../utils';
import style from './index.module.scss';
import { link } from 'fs';

const Row = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin: 5px 1px 1px 5px;
    padding-left: 14px;
    max-height: 150px;
    width: 100%;
`;

interface Props {
    width?: number;
    height?: number;
    paddingTop?: number;
    paddingLeft?: number;
    originData: SankeyData;
    nodeWidth?: number;
    nodeHeight?: number;
    nodeMargin?: number;
    minLinkBreadth?: number;
    maxLinkBreadth?: number;
    setOriginData: React.Dispatch<React.SetStateAction<SankeyData>>;
    filteredList: SankeyLink[];
    setFilteredList: React.Dispatch<React.SetStateAction<SankeyLink[]>>;
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

export const PaperView = ({ originData, setOriginData, filteredList, setFilteredList }: Props) => {
    const [index, setIndex] = useState(0);
    const [links, setLInks] = useState<SankeyLinkExtended>();
    const renderingData: SankeyData = { ...originData };
    const [hide, setHide] = useState<'want' | 'hide'>('want');
    const [paperimg, setPaperImg] = useState<SankeyLink>();
    const offset = 60;
    const linkStatus = renderingData.links.filter((data, i) => {
        if (data.source >= 100 && data.color !== 'grayDarkLinkColor') {
            return { ...links };
        } else return null;
    });
    // console.log(linkStatus);

    useEffect(() => {
        const filteredList = linkStatus.filter((paper) => {
            let imgFlag: boolean = false;
            let colorFlag: boolean = false;
            // console.log(paper);
            if (paper.paperName && paper.source >= 100) {
                for (const [key, property] of Object.entries(paper)) {
                    if (key === 'color') {
                        if (property !== 'grayLinkColor') {
                            colorFlag = true;
                        } else colorFlag = false;
                    } else colorFlag = false;
                }
            } else return false;

            return colorFlag;
        });
        // console.log(filteredList);
        setFilteredList(filteredList);
    }, [filteredList]);

    return (
        <>
            <div className={style.paperView}>
                <div className={style.title}>Paper View</div>
                <Row variants={rowVariants} initial="initial" animate="visible" exit="exit" transition={{ type: 'tween', duration: 1 }} key={index}>
                    {renderingData.status
                        .slice(0)
                        .slice(offset * index, offset * index + offset)
                        .map((paper, i) => (
                            <div className={style.display}>
                                {paper.imgUrl ? <img style={{ marginBottom: '5px' }} width="65" height="65" src={`https://i.imgur.com/${paper.imgUrl}`}></img> : null}
                                {paper.imgUrl ? <div style={{ fontSize: '12px', fontWeight: 'bold', textAlign: 'center' }}>{paper.paperName}</div> : null}
                            </div>
                        ))}
                </Row>
            </div>
        </>
    );
};
// 부모 컴포넌트에서 동일한 데이터를 쏴줘야 할 것 같아보임.

function findSameImg(arg: { link: SankeyLink; data: SankeyData; setPaperImg: React.Dispatch<React.SetStateAction<SankeyLink>> }) {
    const { link: currentlink, data, setPaperImg } = arg;
    const findImg = data.links.find((candidateImg) => {
        if (candidateImg.color !== 'grayLinkColor') {
            if (candidateImg.paperName === currentlink.paperName) {
                return true;
            } else {
                return false;
            }
        } else return false;
    });
    //@ts-ignore
    setPaperImg(findImg);
}
