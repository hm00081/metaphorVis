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
    // padding-top: 50px;
    padding-left: 14px;
    max-height: 150px;
    width: 100%;
`;

interface Props {
    originData: SankeyData;
    clickedLink: SankeyLinkExtended | undefined;
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

export const PaperView = ({ originData, setOriginData, clickedLink }: Props) => {
    const [index, setIndex] = useState(0);
    console.log(originData);
    // const [links, setLInks] = useState<SankeyLinkExtended>();
    const renderingData: SankeyData = { ...originData }; // 정적인 데이터같아보임
    const [hide, setHide] = useState<'want' | 'hide'>('want');
    const [paperimg, setPaperImg] = useState<SankeyLink>();
    const offset = 60;
    // const linkStatus = renderingData.links.filter((data, i) => {
    //     if (data.source >= 100 && data.color !== 'grayDarkLinkColor') {
    //         return { ...links };
    //     } else return null;
    // });

    return (
        <>
            <div className={style.paperView}>
                {/* <div className={style.paperTitle}> */}
                <div className={style.title}>Paper View</div>
                {/* </div> */}
                <Row variants={rowVariants} initial="initial" animate="visible" exit="exit" transition={{ type: 'tween', duration: 1 }} key={index}>
                    {renderingData.status
                        .slice(0)
                        .slice(offset * index, offset * index + offset)
                        .filter((paper) => {
                            if (clickedLink) {
                                if (paper.paperName === clickedLink.paperName) {
                                    return true;
                                } else {
                                    return false;
                                }
                            }
                            return true;
                        })
                        .map((paper, i) => (
                            <div className={style.display}>
                                {paper.imgUrl ? (
                                    <img
                                        onClick={() => {
                                            console.log(paper);
                                        }}
                                        style={{ marginBottom: '5px' }}
                                        width="65"
                                        height="65"
                                        src={`https://i.imgur.com/${paper.imgUrl}`}
                                    ></img>
                                ) : null}
                                {paper.imgUrl ? <div style={{ fontSize: '12px', fontWeight: 'bold', textAlign: 'center' }}>{paper.paperName}</div> : null}
                            </div>
                        ))}
                </Row>
            </div>
        </>
    );
};
// 부모 컴포넌트에서 동일한 데이터를 쏴줘야 할 것 같아보임.

function findSameImg(arg: { link: SankeyLink; originData: SankeyData; setOriginData: React.Dispatch<React.SetStateAction<SankeyData>> }) {
    const { link: currentlink, originData, setOriginData } = arg;
    const renderingData: SankeyData = { ...originData };
    const findImg = originData.links.find((a) => {
        if (a.color !== 'grayLinkColor') {
            setOriginData(originData);
        } else {
            setOriginData(renderingData);
        }
    });
}
