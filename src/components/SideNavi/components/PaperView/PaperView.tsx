import styled from 'styled-components';
import { motion, AnimatePresence, useViewportScroll } from 'framer-motion';
import { useState } from 'react';
import { SankeyData, SankeyNode, SankeyLink, SankeyNodeExtended, SankeyLinkExtended } from '../../../../types';
import { useEffect } from 'react';
import { calcSankeyNodes, calcSankeyLinks } from '../../../../utils';
import style from './index.module.scss';

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

export const PaperView = ({ originData, setOriginData }: Props) => {
    const [index, setIndex] = useState(0);
    const renderingData: SankeyData = { ...originData };
    const [nodes, setNodes] = useState<SankeyNodeExtended[]>([]);
    const [links, setLinks] = useState<SankeyLinkExtended[]>([]);
    const offset = 60;
    useEffect(() => {
        // const filteredList = renderingData.links.filter((data, i) => {
        //     let flag: boolean = false;
        //     if (data.paperName) {
        //         for (const [key, property] of Object.entries(data.paperName)) {
        //             if (renderingData.status[i].paperName === data.paperName) {
        //                 flag = true;
        //             } else {
        //                 flag = false;
        //             }
        //         }
        //     }
        // });
    }, [originData]);

    const linkStatus = renderingData.links.filter((links) => {
        if (links.source >= 100 && links.color !== 'grayDarkLinkColor') {
            return { ...links };
        } else return null;
    });
    console.log(linkStatus);

    return (
        <>
            <div className={style.paperView}>
                <div className={style.title}>PaperView</div>
                <Row variants={rowVariants} initial="initial" animate="visible" exit="exit" transition={{ type: 'tween', duration: 1 }} key={index}>
                    {renderingData.status
                        .slice(0)
                        .slice(offset * index, offset * index + offset)
                        .map((paper) => (
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
