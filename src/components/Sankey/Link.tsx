// Types
import { SankeyLinkExtended, SankeyNodeExtended, SankeyData, SankeyLink } from '../../types/sankey';
import './Sankey.css';
import { FC, useState, useEffect, useCallback } from 'react';
import { Utility } from '../../utils/sankey/basics';
import { SourceTargetIdLinksDict } from './Sankey';
import { useRef, Component } from 'react';
import * as d3 from 'd3';
import { brush, brushY } from 'd3-brush';
import Brushes from './Brushes';
// import Brush from './Brush';
import styled from 'styled-components';
import { numberTypeAnnotation } from '@babel/types';
// import { Types } from './AreaChartHelper';
import useWindowDimensions from './WindowDimensions';
import ChartHelper from './AreaChartHelper';
import { link, linkSync } from 'fs';
import { calcSankeyNodes, calcSankeyLinks } from '../../utils/';
import { BrushBehavior } from 'd3-brush';
import { render } from '@testing-library/react';
import * as _ from 'lodash';

const NodePos = styled.g`
    margin-top: 102px;
`;

const NodeName = styled.text`
    margin-top: 12px;
`;

// Props
interface LinkProps {
    node: SankeyNodeExtended;
    nodes: SankeyNodeExtended[];
    link: SankeyLinkExtended;
    originData: SankeyData;
    setOriginData: React.Dispatch<React.SetStateAction<SankeyData>>;
    sourceTargetIdLinksDict: SourceTargetIdLinksDict;
}

export namespace Types {
    export type Data = {
        date?: string;
        value?: number;
    };
    export type Dimensions = {
        width: number;
        height: number;
        margin: {
            left: number;
            right: number;
            top: number;
            bottom: number;
        };
        boundedWidth?: number;
        boundedHeight?: number;
    };
}

interface IBrushProps {
    dimensions: Types.Dimensions;
    data: Types.Data[];
    node?: SankeyNodeExtended;
    link?: SankeyLinkExtended;
    propertiesNames: string[];
    onBrushUpdateData: (value: Date[]) => void;
    stroke: string;
    x: number;
    y: number;
}

// Component
export const Link = ({ nodes, node, link, originData, sourceTargetIdLinksDict, setOriginData }: LinkProps) => {
    const colorLink = [];
    const nonColorLink = [];
    // highlight = hover
    //linksDict의 색상을 나눠야하는 상황
    //arrLink = 색상을 가지고 있는 링크들의 집합.

    //앞에서 구한 같은 process의 link도 가져와여함
    //target의 target 기준 link
    // 고려사항 1) same color 2) same process
    // 앞 뒤 비교를 위한 link의 정보가 있어야함.

    // console.log(originData);
    const renderingData: SankeyData = { ...originData }; // 확인 (데이터 내용)
    // do {
    // } while ()
    // 76 ~ 99를  target으로 가지면 더 이상 x
    // 100 ~ 155롤 source로 가지면 더 이상 x

    // lodash _.filter(collection: 요소 반복, predicate: 술어에 대해 모든 요소가 참을 반환하는 새로운 배열)
    // 술어는 값, 인덱스|key, collection 3가지 인수 호출
    // const heads = _.filter(renderingData.links, (d) => d.paperName === link.paperName && link.source === d.target && d.color !== 'grayLinkColor');
    // const tails = _.filter(renderingData.links, (d) => d.paperName === link.paperName && link.target === d.source && d.color !== 'grayLinkColor');
    const a = [];
    // console.log(sourceTargetIdLinksDict);
    // const findFirstColoredLink = renderingData.links.filter((colored) => {
    //     if (colored.color !== 'grayLinkColor') {
    //         if (colored.target <= 30) {
    //             return true;
    //         } else return false;
    //     }
    // }); // for Target
    // const findSecondColoredLink = renderingData.links.filter((colored) => {
    //     if (colored.color !== 'grayLinkColor') {
    //         if (colored.target <= 49) {
    //             return true;
    //         } else return false;
    //     }
    // }); // for Intermediation
    // const findThirdColoredLink = renderingData.links.filter((colored) => {
    //     if (colored.color !== 'grayLinkColor') {
    //         if (colored.target <= 75) {
    //             return true;
    //         } else return false;
    //     }
    // }); // for Representation
    // const findFourthColoredLink = renderingData.links.filter((colored) => {
    //     if (colored.color !== 'grayLinkColor') {
    //         if (colored.target <= 82) {
    //             return true;
    //         } else return false;
    //     }
    // }); // for Vis_var
    const findFifthColoredLink = renderingData.links.filter((colored) => {
        if (colored.color !== 'grayLinkColor') {
            if (colored.target <= 99) {
                return true;
            } else return false;
        }
    }); // for Vis_tech
    // console.log(findFifthColoredLink);
    // hover, click 기준 노드의 위치에 의해 title을 설정.

    const onClickFunction = () => {
        const renderingData: SankeyData = { ...originData };
        renderingData.positionStatus = 'clicked';
        renderingData.links = renderingData.links.map((link) => {
            return { ...link };
        });

        const selectedLinkPart = sourceTargetIdLinksDict[`${link.source}-${link.target}-${link.valueid}-${link.paperName}`];

        let results = [];

        renderingData.links.forEach((renderingLink) => {
            renderingLink.color = 'grayLinkColor';
            // renderingLink.valueid = undefined; // 초기 상태
            renderingLink.status = undefined;
            // console.log(renderingData.links.length);
            selectedLinkPart.forEach((linkPart) => {
                // if (link.color === 'grayLinkColor') {
                //     return false;
                // }
                if (renderingLink.id && renderingLink.id === linkPart.id) {
                    //TODO inter, rep에 속하는지 판단만 하면 되는 상황
                    if (renderingLink.target >= 0 && renderingLink.target <= 7) {
                        renderingLink.color = 'targetLinkColor';
                        // renderingLink.valueid = 'selected';
                        //renderingLink.status = 'selected';
                    }
                    if (renderingLink.target >= 8 && renderingLink.target <= 10) {
                        renderingLink.color = 'targetLinkOneColor';
                        // renderingLink.valueid = 'selected';
                        //renderingLink.status = 'selected';
                    }
                    if (renderingLink.target >= 11 && renderingLink.target <= 15) {
                        renderingLink.color = 'targetLinkTwoColor';
                        // renderingLink.valueid = 'selected';
                        //renderingLink.status = 'selected';
                    }
                    if (renderingLink.target >= 16 && renderingLink.target <= 20) {
                        renderingLink.color = 'targetLinkThreeColor';
                        // renderingLink.valueid = 'selected';
                        //renderingLink.status = 'selected';
                    }
                    if (renderingLink.target >= 21 && renderingLink.target <= 30) {
                        renderingLink.color = 'targetLinkFourColor';
                        // renderingLink.valueid = 'selected';
                        //renderingLink.status = 'selected';
                    }
                    if ((renderingLink.target >= 31 && renderingLink.target <= 33) || (renderingLink.source >= 31 && renderingLink.source <= 33)) {
                        renderingLink.color = 'intOneLinkColor';
                        // renderingLink.valueid = 'selected';
                        //renderingLink.status = 'selected';
                    }
                    if (renderingLink.target === 34 || renderingLink.source === 34) {
                        renderingLink.color = 'intOneLightLinkColor';
                        // renderingLink.valueid = 'selected';
                        //renderingLink.status = 'selected';
                    }
                    if (renderingLink.target === 35 || renderingLink.source === 35) {
                        renderingLink.color = 'intOneLight2LinkColor';
                        // renderingLink.valueid = 'selected';
                        //renderingLink.status = 'selected';
                    }
                    if ((renderingLink.target >= 36 && renderingLink.target <= 38) || (renderingLink.source >= 36 && renderingLink.source <= 38)) {
                        renderingLink.color = 'intOneLight3LinkColor';
                        // renderingLink.valueid = 'selected';
                        //renderingLink.status = 'selected';
                    }
                    if (renderingLink.target === 39 || renderingLink.source === 39) {
                        renderingLink.color = 'intTwoLinkColor';
                        // renderingLink.valueid = 'selected';
                        //renderingLink.status = 'selected';
                    }
                    if (renderingLink.target === 40 || renderingLink.source === 40) {
                        renderingLink.color = 'intTwoLightLinkColor';
                        // renderingLink.valueid = 'selected';
                        //renderingLink.status = 'selected';
                    }
                    if (renderingLink.target === 41 || renderingLink.source === 41) {
                        renderingLink.color = 'intThreeLinkColor';
                        // renderingLink.valueid = 'selected';
                        //renderingLink.status = 'selected';
                    }
                    if (renderingLink.target === 42 || renderingLink.source === 42) {
                        renderingLink.color = 'intThreeLightLinkColor';
                        // renderingLink.valueid = 'selected';
                        //renderingLink.status = 'selected';
                    }
                    if (renderingLink.target === 43 || renderingLink.source === 43) {
                        renderingLink.color = 'intThreeLight1LinkColor';
                        // renderingLink.valueid = 'selected';
                        //renderingLink.status = 'selected';
                    }
                    if (renderingLink.target === 44 || renderingLink.source === 44) {
                        renderingLink.color = 'intThreeLight2LinkColor';
                        // renderingLink.valueid = 'selected';
                        //renderingLink.status = 'selected';
                    }
                    if (renderingLink.target === 45 || renderingLink.source === 45) {
                        renderingLink.color = 'intFourLinkColor';
                        // renderingLink.valueid = 'selected';
                        //renderingLink.status = 'selected';
                    }
                    if (renderingLink.target === 46 || renderingLink.source === 46) {
                        renderingLink.color = 'intFiveLinkColor';
                        // renderingLink.valueid = 'selected';
                        //renderingLink.status = 'selected';
                    }
                    if ((renderingLink.target >= 47 && renderingLink.target <= 48) || (renderingLink.source >= 47 && renderingLink.source <= 48)) {
                        renderingLink.color = 'intFiveLightLinkColor';
                        // renderingLink.valueid = 'selected';
                        //renderingLink.status = 'selected';
                    }
                    if (renderingLink.target === 49 || renderingLink.source === 49) {
                        renderingLink.color = 'intFiveLight2LinkColor';
                        // renderingLink.valueid = 'selected';
                        //renderingLink.status = 'selected';
                    }
                    if (renderingLink.target >= 76 && renderingLink.target < 83) {
                        renderingLink.color = 'repVisVarColor';
                        // renderingLink.valueid = 'selected';
                        //renderingLink.status = 'selected';
                    }
                    if (renderingLink.target > 82 && renderingLink.target < 100) {
                        renderingLink.color = 'repVisTechColor';
                        // renderingLink.valueid = 'selected';
                        //renderingLink.status = 'selected';
                    }
                }
            });
        });
        selectedLinkPart.forEach((selectedLinkPart) => {
            findFrontLinks({
                // 앞 link 탐색
                linkPart: selectedLinkPart,
                renderingData,
            });
            findBackLinks({
                // 뒷 link 탐색
                linkPart: selectedLinkPart,
                renderingData,
            });
        });
        if (link.color === 'grayLinkColor') {
            setOriginData(originData);
        } else setOriginData(renderingData);
    };

    return (
        <>
            <path
                className="link"
                d={link.path}
                stroke={`url(#${link.color})`}
                strokeWidth={link.value}
                fill="none"
                //TODO link mouseenter, mouseout
                // onMouseEnter={() => {
                //     const renderingData: SankeyData = { ...originData };
                //     renderingData.positionStatus = 'clicked';
                //     renderingData.links = renderingData.links.map((link) => {
                //         return { ...link };
                //     });

                //     const selectedLinkPart = sourceTargetIdLinksDict[`${link.source}-${link.target}-${link.valueid}-${link.paperName}`];
                //     selectedLinkPart.forEach((selectedLinkPart) => {
                //         findFrontLinks({
                //             // 앞 link 탐색
                //             linkPart: selectedLinkPart,
                //             renderingData,
                //             interactionType: 'hover',
                //         });
                //         console.log('asdads');
                //         findBackLinks({
                //             // 뒷 link 탐색
                //             linkPart: selectedLinkPart,
                //             renderingData,
                //         });
                //         if (link.color === 'grayLinkColor') {
                //             setOriginData(originData);
                //         } else setOriginData(renderingData);
                //     });
                // }}
                // onMouseLeave={() => {
                //     const renderingData: SankeyData = { ...originData };
                //     renderingData.positionStatus = 'clicked';
                //     renderingData.links = renderingData.links.map((link) => {
                //         return { ...link };
                //     });

                //     const selectedLinkPart = sourceTargetIdLinksDict[`${link.source}-${link.target}-${link.valueid}-${link.paperName}`];
                //     selectedLinkPart.forEach((selectedLinkPart) => {
                //         findFrontLinks({
                //             // 앞 link 탐색
                //             linkPart: selectedLinkPart,
                //             renderingData,
                //             interactionType: 'click',
                //         });
                //         console.log('asdads');
                //         findBackLinks({
                //             // 뒷 link 탐색
                //             linkPart: selectedLinkPart,
                //             renderingData,
                //         });
                //         if (link.color === 'grayLinkColor') {
                //             setOriginData(originData);
                //         } else setOriginData(renderingData);
                //     });
                // }}
                onClick={onClickFunction}
            >
                {/*
                링크 process보여주기 위해 사용될 변수: link.source | link.target
                같이 이어주는걸 보여주기위해 사용될 변수: process
                 */}

                {link.color !== 'grayLinkColor' && link.process ? (
                    <title className="info">{`${link.process}, ${link.paperName}: ${link.sourceNode.name} → ${link.targetNode.name}: ${link.value}`}</title>
                ) : (
                    //TODO 팝업메세지 나열
                    // <title>
                    //     {/* {(() => {
                    //         const 원하는대답 = findFrontLinks;

                    //         let returns = () => {
                    //             if()
                    //         };

                    //         return `왼쪽 LINK 가 같은 process애들을 여기 함수에서 찾도록 한다.`;
                    //     })()} */}
                    // </title>
                    // <>
                    //     <title className="info">{`${link.process}, ${link.paperName}: ${link.sourceNode.name} → ${link.targetNode.name}: ${link.value}`}</title>
                    //     <title>
                    //         {(() => {
                    //             return '왼쪽 LINK 가 같은 process애들을 여기 함수에서 찾도록 한다.';
                    //         })()}
                    //     </title>
                    // </>
                    <h1>{`${link.sourceNode.name} to ${link.targetNode.name}: ${link.value}`}</h1>
                )}
            </path>
            {/* <Brushes /> */}
            {/* <Brush dimensions={dimensions.current} data={data} onBrushUpdateData={onBrushUpdateData} propertiesNames={propertiesNames} stroke="rgb(47, 74, 89)" /> */}
        </>
    );
};

function findFrontLinks(arg: { linkPart: SankeyLink; renderingData: SankeyData; interactionType?: 'hover' | 'click' }) {
    const { linkPart, renderingData, interactionType = 'click' } = arg;
    console.log('asdf');
    // console.log(arg);
    // console.log(linkPart.valueid);
    const frontLinks = renderingData.links.filter((renderingLink) => {
        // if (renderingLink.target === linkPart.source && renderingLink.id === linkPart.id) {
        if (renderingLink.target === linkPart.source && renderingLink.paperName === linkPart.paperName) {
            // 하이라이팅 해야할 놈...

            if (interactionType === 'hover') {
                renderingLink.color = 'targetHighlightLinkColor';
                console.log('hello');
            } else if (interactionType === 'click') {
                renderingLink.color = 'targetLinkColor';
                console.log('nohello');
            }

            // if (renderingLink.target >= 0 && renderingLink.target <= 8) {
            //     renderingLink.color = 'targetLinkColor';
            //     //  renderingLink.valueid = 'selected';
            //     // renderingLink.paperName = linkPart.paperName;
            //     // renderingLink.process = linkPart.process;
            //     renderingLink.status = 'selected';
            // } else if (renderingLink.target >= 8 && renderingLink.target <= 10) {
            //     renderingLink.color = 'targetLinkOneColor';
            //     //  renderingLink.valueid = 'selected';
            //     // renderingLink.paperName = linkPart.paperName;
            //     // renderingLink.process = linkPart.process;
            //     renderingLink.status = 'selected';
            // } else if (renderingLink.target >= 11 && renderingLink.target <= 15) {
            //     renderingLink.color = 'targetLinkTwoColor';
            //     //  renderingLink.valueid = 'selected';
            //     // renderingLink.paperName = linkPart.paperName;
            //     // renderingLink.process = linkPart.process;
            //     renderingLink.status = 'selected';
            // } else if (renderingLink.target >= 16 && renderingLink.target <= 20) {
            //     renderingLink.color = 'targetLinkThreeColor';
            //     //  renderingLink.valueid = 'selected';
            //     // renderingLink.paperName = linkPart.paperName;
            //     // renderingLink.process = linkPart.process;
            //     renderingLink.status = 'selected';
            // } else if (renderingLink.target >= 21 && renderingLink.target <= 30) {
            //     renderingLink.color = 'targetLinkFourColor';
            //     //  renderingLink.valueid = 'selected';
            //     // renderingLink.paperName = linkPart.paperName;
            //     // renderingLink.process = linkPart.process;
            //     renderingLink.status = 'selected';
            // }
            // if (renderingLink.target >= 31 && renderingLink.target <= 33) {
            //     renderingLink.color = 'intOneLinkColor';
            //     renderingLink.valueid = linkPart.valueid;
            //     //renderingLink.status = 'selected';
            //     renderingLink.paperName = linkPart.paperName;
            //     // renderingLink.process = linkPart.process;
            // } else if (renderingLink.target === 34) {
            //     renderingLink.color = 'intOneLightLinkColor';
            //     renderingLink.valueid = linkPart.valueid;
            //     //renderingLink.status = 'selected';
            //     renderingLink.paperName = linkPart.paperName;
            //     // renderingLink.process = linkPart.process;
            // } else if (renderingLink.source === 34) {
            //     renderingLink.color = 'intOneLightLinkColor';
            //     renderingLink.valueid = linkPart.valueid;
            //     //renderingLink.status = 'selected';
            //     renderingLink.paperName = linkPart.paperName;
            //     // renderingLink.process = linkPart.process;
            // } else if (renderingLink.target === 35) {
            //     renderingLink.color = 'intOneLight2LinkColor';
            //     renderingLink.valueid = linkPart.valueid;
            //     //renderingLink.status = 'selected';
            //     renderingLink.paperName = linkPart.paperName;
            //     // renderingLink.process = linkPart.process;
            // } else if (renderingLink.source === 35) {
            //     renderingLink.color = 'intOneLight2LinkColor';
            //     renderingLink.valueid = linkPart.valueid;
            //     //renderingLink.status = 'selected';
            //     renderingLink.paperName = linkPart.paperName;
            //     // renderingLink.process = linkPart.process;
            // } else if (renderingLink.target >= 36 && renderingLink.target <= 38) {
            //     renderingLink.color = 'intOneLight3LinkColor';
            //     renderingLink.valueid = linkPart.valueid;
            //     //renderingLink.status = 'selected';
            //     renderingLink.paperName = linkPart.paperName;
            //     // renderingLink.process = linkPart.process;
            // } else if (renderingLink.source >= 36 && renderingLink.source <= 38) {
            //     renderingLink.color = 'intOneLight3LinkColor';
            //     renderingLink.valueid = linkPart.valueid;
            //     //renderingLink.status = 'selected';
            //     renderingLink.paperName = linkPart.paperName;
            //     // renderingLink.process = linkPart.process;
            // } else if (renderingLink.target === 39) {
            //     renderingLink.color = 'intTwoLinkColor';
            //     renderingLink.valueid = linkPart.valueid;
            //     //renderingLink.status = 'selected';
            //     renderingLink.paperName = linkPart.paperName;
            //     // renderingLink.process = linkPart.process;
            // } else if (renderingLink.source === 39) {
            //     renderingLink.color = 'intTwoLinkColor';
            //     renderingLink.valueid = linkPart.valueid;
            //     //renderingLink.status = 'selected';
            //     renderingLink.paperName = linkPart.paperName;
            //     // renderingLink.process = linkPart.process;
            // } else if (renderingLink.target === 40) {
            //     renderingLink.color = 'intTwoLightLinkColor';
            //     renderingLink.valueid = linkPart.valueid;
            //     //renderingLink.status = 'selected';
            //     renderingLink.paperName = linkPart.paperName;
            //     // renderingLink.process = linkPart.process;
            // } else if (renderingLink.source === 40) {
            //     renderingLink.color = 'intTwoLightLinkColor';
            //     renderingLink.valueid = linkPart.valueid;
            //     //renderingLink.status = 'selected';
            //     renderingLink.paperName = linkPart.paperName;
            //     // renderingLink.process = linkPart.process;
            // } else if (renderingLink.target === 41) {
            //     renderingLink.color = 'intThreeLinkColor';
            //     renderingLink.valueid = linkPart.valueid;
            //     //renderingLink.status = 'selected';
            //     renderingLink.paperName = linkPart.paperName;
            //     // renderingLink.process = linkPart.process;
            // } else if (renderingLink.source === 41) {
            //     renderingLink.color = 'intThreeLinkColor';
            //     renderingLink.valueid = linkPart.valueid;
            //     //renderingLink.status = 'selected';
            //     renderingLink.paperName = linkPart.paperName;
            //     // renderingLink.process = linkPart.process;
            // } else if (renderingLink.target === 42) {
            //     renderingLink.color = 'intThreeLightLinkColor';
            //     renderingLink.valueid = linkPart.valueid;
            //     //renderingLink.status = 'selected';
            //     renderingLink.paperName = linkPart.paperName;
            //     // renderingLink.process = linkPart.process;
            // } else if (renderingLink.source === 42) {
            //     renderingLink.color = 'intThreeLightLinkColor';
            //     renderingLink.valueid = linkPart.valueid;
            //     //renderingLink.status = 'selected';
            //     renderingLink.paperName = linkPart.paperName;
            //     // renderingLink.process = linkPart.process;
            // } else if (renderingLink.target === 43) {
            //     renderingLink.color = 'intThreeLight1LinkColor';
            //     renderingLink.valueid = linkPart.valueid;
            //     //renderingLink.status = 'selected';
            //     renderingLink.paperName = linkPart.paperName;
            //     // renderingLink.process = linkPart.process;
            // } else if (renderingLink.source === 43) {
            //     renderingLink.color = 'intThreeLight1LinkColor';
            //     renderingLink.valueid = linkPart.valueid;
            //     //renderingLink.status = 'selected';
            //     renderingLink.paperName = linkPart.paperName;
            //     // renderingLink.process = linkPart.process;
            // } else if (renderingLink.target === 44) {
            //     renderingLink.color = 'intThreeLight2LinkColor';
            //     renderingLink.valueid = linkPart.valueid;
            //     //renderingLink.status = 'selected';
            //     renderingLink.paperName = linkPart.paperName;
            //     // renderingLink.process = linkPart.process;
            // } else if (renderingLink.source === 44) {
            //     renderingLink.color = 'intThreeLight2LinkColor';
            //     renderingLink.valueid = linkPart.valueid;
            //     //renderingLink.status = 'selected';
            //     renderingLink.paperName = linkPart.paperName;
            //     // renderingLink.process = linkPart.process;
            // } else if (renderingLink.target === 45) {
            //     renderingLink.color = 'intFourLinkColor';
            //     renderingLink.valueid = linkPart.valueid;
            //     //renderingLink.status = 'selected';
            //     renderingLink.paperName = linkPart.paperName;
            //     // renderingLink.process = linkPart.process;
            // } else if (renderingLink.source === 45) {
            //     renderingLink.color = 'intFourLinkColor';
            //     renderingLink.valueid = linkPart.valueid;
            //     //renderingLink.status = 'selected';
            //     renderingLink.paperName = linkPart.paperName;
            //     // renderingLink.process = linkPart.process;
            // } else if (renderingLink.target === 46) {
            //     renderingLink.color = 'intFiveLinkColor';
            //     renderingLink.valueid = linkPart.valueid;
            //     //renderingLink.status = 'selected';
            //     renderingLink.paperName = linkPart.paperName;
            //     // renderingLink.process = linkPart.process;
            // } else if (renderingLink.source === 46) {
            //     renderingLink.color = 'intFiveLinkColor';
            //     renderingLink.valueid = linkPart.valueid;
            //     //renderingLink.status = 'selected';
            //     renderingLink.paperName = linkPart.paperName;
            //     // renderingLink.process = linkPart.process;
            // } else if (renderingLink.target >= 47 && renderingLink.target <= 48) {
            //     renderingLink.color = 'intFiveLightLinkColor';
            //     renderingLink.valueid = linkPart.valueid;
            //     //renderingLink.status = 'selected';
            //     renderingLink.paperName = linkPart.paperName;
            //     // renderingLink.process = linkPart.process;
            // } else if (renderingLink.source >= 47 && renderingLink.source <= 48) {
            //     renderingLink.color = 'intFiveLightLinkColor';
            //     renderingLink.valueid = linkPart.valueid;
            //     //renderingLink.status = 'selected';
            //     renderingLink.paperName = linkPart.paperName;
            //     // renderingLink.process = linkPart.process;
            // } else if (renderingLink.target === 49) {
            //     renderingLink.color = 'intFiveLight2LinkColor';
            //     renderingLink.valueid = linkPart.valueid;
            //     //renderingLink.status = 'selected';
            //     renderingLink.paperName = linkPart.paperName;
            //     // renderingLink.process = linkPart.process;
            // } else if (renderingLink.source === 49) {
            //     renderingLink.color = 'intFiveLight2LinkColor';
            //     renderingLink.valueid = linkPart.valueid;
            //     //renderingLink.status = 'selected';
            //     renderingLink.paperName = linkPart.paperName;
            //     // renderingLink.process = linkPart.process;
            // } else if (renderingLink.source >= 50 && renderingLink.source <= 75) {
            //     renderingLink.color = linkPart.color;
            // } else if (renderingLink.target >= 50 && renderingLink.target <= 75) {
            //     renderingLink.color = linkPart.color;
            // }
            return true;
        } else {
            return false;
        }
    });

    console.log(frontLinks);

    frontLinks.forEach((linkPart) => {
        findFrontLinks({
            linkPart,
            renderingData,
        }); //recursive forward calculate function
    });

    // result.push (itself, othhers)

    // result.,foreahc
}

function findBackLinks(arg: { linkPart: SankeyLink; renderingData: SankeyData }) {
    const { linkPart, renderingData } = arg;
    const backLinks = renderingData.links.filter((renderingLink) => {
        // if (renderingLink.source === linkPart.target && renderingLink.id === linkPart.id) {
        // if (renderingLink.source === linkPart.target && renderingLink.paperName === linkPart.paperName) {
        //     if (renderingLink.source >= 50 && renderingLink.source <= 75) {
        //         renderingLink.color = linkPart.color;
        //     }
        //     if (renderingLink.target >= 50 && renderingLink.target <= 75) {
        //         renderingLink.color = linkPart.color;
        //     }
        //     if (renderingLink.target >= 76 && renderingLink.target < 83) {
        //         renderingLink.color = 'repVisVarColor';
        //         renderingLink.valueid = linkPart.valueid;
        //         //renderingLink.status = 'selected';
        //         renderingLink.paperName = linkPart.paperName;
        //         // renderingLink.process = linkPart.process;
        //     }
        //     if (renderingLink.target > 82 && renderingLink.target < 100) {
        //         renderingLink.color = 'repVisTechColor';
        //         renderingLink.valueid = linkPart.valueid;
        //         //renderingLink.status = 'selected';
        //         renderingLink.paperName = linkPart.paperName;
        //         // renderingLink.process = linkPart.process;
        //     }
        //     return true;
        // }
        if (renderingLink.source === linkPart.target && renderingLink.paperName === linkPart.paperName) {
            if (renderingLink.target >= 31 && renderingLink.target <= 33) {
                renderingLink.color = 'intOneLinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            }
            if (renderingLink.target === 34) {
                renderingLink.color = 'intOneLightLinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            }
            if (renderingLink.source === 34) {
                renderingLink.color = 'intOneLightLinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            }
            if (renderingLink.target === 35) {
                renderingLink.color = 'intOneLight2LinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            }
            if (renderingLink.source === 35) {
                renderingLink.color = 'intOneLight2LinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            }
            if (renderingLink.target >= 36 && renderingLink.target <= 38) {
                renderingLink.color = 'intOneLight3LinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            }
            if (renderingLink.source >= 36 && renderingLink.source <= 38) {
                renderingLink.color = 'intOneLight3LinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            }
            if (renderingLink.target === 39) {
                renderingLink.color = 'intTwoLinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            }
            if (renderingLink.source === 39) {
                renderingLink.color = 'intTwoLinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            }
            if (renderingLink.target === 40) {
                renderingLink.color = 'intTwoLightLinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            }
            if (renderingLink.source === 40) {
                renderingLink.color = 'intTwoLightLinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            }
            if (renderingLink.target === 41) {
                renderingLink.color = 'intThreeLinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            }
            if (renderingLink.source === 41) {
                renderingLink.color = 'intThreeLinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            }
            if (renderingLink.target === 42) {
                renderingLink.color = 'intThreeLightLinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            }
            if (renderingLink.source === 42) {
                renderingLink.color = 'intThreeLightLinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            }
            if (renderingLink.target === 43) {
                renderingLink.color = 'intThreeLight1LinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            }
            if (renderingLink.source === 43) {
                renderingLink.color = 'intThreeLight1LinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            }
            if (renderingLink.target === 44) {
                renderingLink.color = 'intThreeLight2LinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            }
            if (renderingLink.source === 44) {
                renderingLink.color = 'intThreeLight2LinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            }
            if (renderingLink.target === 45) {
                renderingLink.color = 'intFourLinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            }
            if (renderingLink.source === 45) {
                renderingLink.color = 'intFourLinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            }
            if (renderingLink.target === 46) {
                renderingLink.color = 'intFiveLinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            }
            if (renderingLink.source === 46) {
                renderingLink.color = 'intFiveLinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            }
            if (renderingLink.target >= 47 && renderingLink.target <= 48) {
                renderingLink.color = 'intFiveLightLinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            }
            if (renderingLink.source >= 47 && renderingLink.source <= 48) {
                renderingLink.color = 'intFiveLightLinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            }
            if (renderingLink.target === 49) {
                renderingLink.color = 'intFiveLight2LinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            }
            if (renderingLink.source === 49) {
                renderingLink.color = 'intFiveLight2LinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            }
            if (renderingLink.source >= 50 && renderingLink.source <= 75) {
                renderingLink.color = linkPart.color;
            }
            if (renderingLink.target >= 50 && renderingLink.target <= 75) {
                renderingLink.color = linkPart.color;
            }
            if (renderingLink.target >= 76 && renderingLink.target < 83) {
                renderingLink.color = 'repVisVarColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            }
            if (renderingLink.target > 82 && renderingLink.target < 100) {
                renderingLink.color = 'repVisTechColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            }
            return true;
        } else {
            return false;
        }
    });
    console.log(backLinks);

    backLinks.forEach((linkPart) => {
        findBackLinks({
            linkPart,
            renderingData,
        }); //recursive backward calculate  function
    });
}
