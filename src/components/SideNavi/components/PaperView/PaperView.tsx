import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { SankeyData, SankeyLink, SankeyLinkExtended } from '../../../../types';
import style from './index.module.scss';

const Row = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`;

const PaperBox = styled(motion.div)`
    background-color: #f7f7f7;
    display: flex;
    flex-direction: column;
    align-items: center;
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
            delay: 0.4,
            duaration: 0.1,
            type: 'tween',
        },
    },
};

export const PaperView = ({ originData, setOriginData, clickedLink, clickedNodeLinks, clickedButton, clickedCluster }: Props) => {
    const [index, setIndex] = useState(0);
    const renderingData: SankeyData = { ...originData }; // 정적인 데이터같아보임
    const [leaving, setLeaving] = useState(false);
    const offset = 60;
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
                               
                                if (clickedNodeLinks) {
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
                                // console.log('clickedLink', clickedLink);
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

                                    // return sameLink ? true : false;
                                }
                                //Button, Network Cluster
                                if (originData) {
                                    // console.log('network cluster zone');
                                    const buttonSameLink = originData.links.find((link) => {
                                        if (link.color !== 'grayLinkColor' && paper.paperName === link.paperName) {
                                            // console.log(link.paperName); // 논문들 잘 찾아냈음
                                            return true;
                                        } else {
                                            return false;
                                        }
                                    });
                                    return buttonSameLink ? true : false;
                                }
                                return true;
                            })
                            .map((paper, i) => (
                                <PaperBox layoutId={paper.paperName + 'ID'} key={paper.imgUrl} initial="normal" variants={paperVariants} transition={{ type: 'tween' }}>
                                    {paper.imgUrl ? <img style={{ marginBottom: '5px' }} width="45" height="45" src={`https://i.imgur.com/${paper.imgUrl}`} alt={paper.paperName}></img> : null}
                                    {paper.imgUrl ? (
                                        <div
                                            style={{
                                                fontSize: '10px',
                                                fontWeight: '700',
                                                textAlign: 'center',
                                            }}
                                        >
                                            {paper.paperName}
                                        </div>
                                    ) : null}
                                </PaperBox>
                            ))}
                    </Row>
                </AnimatePresence>
            </div>
        </>
    );
};
