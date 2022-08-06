// import styled from 'styled-components';
// import { motion, AnimatePresence, useViewportScroll } from 'framer-motion';
// import {useState} from 'react';

// const Slider = styled.div`
//     position: relative;
//     top: 0px;
// `;

// const Row = styled(motion.div)`
//     display: flex;
//     flex-wrap: wrap;
//     gap: 1px;
//     margin: 5px 1px 1px 5px;
//     // padding-left: 50px;
//     max-height: 150px;
//     // grid-template-columns: repeat(16, 1fr);
//     // position: absolute;
//     width: 100%;
// `;

// const PaperBox = styled(motion.div)<{ bgPhoto: string }>`
//     background-color: white;
//     background-size: cover;
//     background-position: center center;
//     height: 111px;
//     min-width: 111px;
//     font-size: 66px;
//     margin: 10px;
//     cursor: pointer;
//     &:first-child {
//         transform-origin: center left;
//     }
//     &:last-child {
//         transform-origin: center right;
//     }
//     // position: relative;
// `;

// const rowVariants = {
//     hidden: {
//         x: window.outerWidth + 5,
//     },
//     visible: {
//         x: 0,
//     },
//     exit: {
//         x: -(window.outerWidth + 5),
//     },
// };

// const paperVariants = {
//     normal: {
//         scale: 1,
//     },
//     hover: {
//         scale: 1.3,
//         y: -80,
//         transition: {
//             delay: 0.5,
//             duaration: 0.1,
//             type: 'tween',
//         },
//     },
// };

// const offset = 100;

export default function PaperView() {
    return <></>;
}
// export default function PaperView(
//     // props: {}
//     // 데이터 연동할 곳.
// ) {
//     const [index, setIndex] = useState(0);
//     // 기존 만든 sentiVis에서 불러오는 형식 가져오면 됨.
//     return <>
//     <Slider>

//                         <Row variants={rowVariants} initial="initial" animate="visible" exit="exit" transition={{ type: 'tween', duration: 1 }} key={index}>
//                             {filteredList
//                                 .slice(0)
//                                 .slice(offset * index, offset * index + offset)
//                                 .filter((paper) => genericSearch(paper, ['title', 'year', 'summary'], query, false))
//                                 .map((paper) => (
//                                     <PaperBox
//                                         // layoutId={paper.result_id + ''}
//                                         // key={paper.result_id}
//                                         // initial="normal"
//                                         // variants={paperVariants}
//                                         // onClick={() => onPaperClicked(paper.result_id)}
//                                         // transition={{ type: 'tween' }}
//                                         // bgPhoto={(makeImagePath(paper.backdrop_path), 'w60')}
//                                     >
//                                         {/* {paper.backdrop_path ? <img width="111" height="111" src={`https://i.imgur.com${paper.backdrop_path}`} /> : null} */}
//                                         {/*  이미지 경로 */}
//                                     </PaperBox>
//                                 ))}

//                             {/* <MainSankey /> */}

//                             {/* <SankeyMain></SankeyMain> */}
//                         </Row>
//                         {/* </AnimatePresence> */}
//                     </Slider>
//     </>;
// }
