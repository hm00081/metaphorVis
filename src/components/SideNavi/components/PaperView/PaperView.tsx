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
    gap: 9px;
    margin: 5px 1px 1px 5px;
    // padding-top: 50px;
    padding-left: 14px;
    max-height: 150px;
    width: 100%;
`;

const PaperBox = styled(motion.div)`
    background-color: #f7f7f7;
    background-size: cover;
    background-position: center center;
    font-size: 65px;
    padding-bottom: 3px;
    cursor: pointer;
`;

interface Props {
    originData: SankeyData;
    clickedNodeLinks: SankeyLinkExtended[] | undefined;
    clickedLink: SankeyLinkExtended | undefined;
    clickedButton: SankeyLink[] | undefined;
    clickedCluster: SankeyData | undefined;
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

const paperVariants = {
    normal: {
        scale: 1,
    },
    hover: {
        scale: 1.3,
        y: -80,
        transition: {
            delay: 0.5,
            duaration: 0.1,
            type: 'tween',
        },
    },
};

export const PaperView = ({ originData, setOriginData, clickedLink, clickedNodeLinks, clickedButton, clickedCluster }: Props) => {
    const [index, setIndex] = useState(0);
    // const [links, setLInks] = useState<SankeyLinkExtended>();
    const renderingData: SankeyData = { ...originData }; // 정적인 데이터같아보임
    const [hide, setHide] = useState<'want' | 'hide'>('want');
    const [paperimg, setPaperImg] = useState<SankeyLink>();
    const [leaving, setLeaving] = useState(false);
    const offset = 60;
    // const linkStatus = renderingData.links.filter((data, i) => {
    //     if (data.source >= 100 && data.color !== 'grayDarkLinkColor') {
    //         return { ...links };
    //     } else return null;
    // });
    const toggleLeaving = () => setLeaving((prev) => !prev);
    return (
        <>
            <div className={style.paperView}>
                {/* <div className={style.paperTitle}> */}
                <div className={style.title}>Paper View</div>
                <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
                    {/*페이퍼뷰에서 이미지들 필터링하여 불러주는 곳*/}
                    <Row variants={rowVariants} initial="initial" animate="visible" exit="exit" transition={{ type: 'tween', duration: 1 }} key={index}>
                        {renderingData.status
                            .slice(0)
                            .slice(offset * index, offset * index + offset)
                            .filter((paper) => {
                                //case1: node
                                console.log('clickedNodeLinks', clickedNodeLinks);
                                if (clickedNodeLinks) {
                                    // console.log('clickedNode zone');
                                    // 노드 클릭시에만 반응하는 데이터
                                    const sameLink = clickedNodeLinks.find((link) => {
                                        // 색상되는 링크들의 배열을 나타내는 함수.
                                        if (link.color !== 'grayLinkColor' && paper.paperName === link.paperName) {
                                            // console.log(link.paperName); // 논문들 잘 찾아냈음
                                            return true;
                                        } else {
                                            return false;
                                        }
                                    });

                                    return sameLink ? true : false;
                                }

                                console.log('clickedLink', clickedLink);
                                //case2: link
                                if (clickedLink) {
                                    // console.log('clickedLink zone');
                                    // 링크 클릭시에만 반응하는 데이터
                                    if (paper.paperName === clickedLink.paperName) {
                                        // console.log(clickedLink.paperName);
                                        return true;
                                    } else {
                                        return false;
                                    }
                                }
                                console.log('end');
                                //case3: button
                                //데이터로 수정 필요.
                                if (clickedButton) {
                                    // console.log('clickedButton zone');
                                    // 버튼 클릭시에만 반응하는 데이터
                                    const buttonSameLink = clickedButton.find((link) => {
                                        if (link.color !== 'grayLinkColor' && paper.paperName === link.paperName) {
                                            console.log(link.paperName);
                                            return true;
                                        } else {
                                            return false;
                                        }
                                    });
                                }
                                //네트워크 클러스터
                                if (originData) {
                                    // console.log('network cluster zone');
                                    originData.links.find((link) => {});
                                }
                                // console.log('last!!!');
                                return true;
                            })
                            .map((paper, i) => (
                                <PaperBox layoutId={paper.paperName + 'ID'} key={paper.imgUrl} initial="normal" variants={paperVariants} transition={{ type: 'tween' }}>
                                    {paper.imgUrl ? <img style={{ marginBottom: '5px' }} width="60" height="60" src={`https://i.imgur.com/${paper.imgUrl}`}></img> : null}
                                    {paper.imgUrl ? <div style={{ fontSize: '12px', fontWeight: 'bold', textAlign: 'center' }}>{paper.paperName}</div> : null}
                                </PaperBox>
                            ))}
                    </Row>
                </AnimatePresence>
            </div>
        </>
    );
};
// 부모 컴포넌트에서 동일한 데이터를 쏴줘야 할 것 같아보임.
