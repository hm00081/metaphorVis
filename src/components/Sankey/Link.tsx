// Types
import { SankeyLinkExtended, SankeyNodeExtended, SankeyData, SankeyLink } from '../../types/sankey';
import './sandbox-styles.css';
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
    const linkst = {
        linkStatus: false,
    };
    const [clicked, setClicked] = useState(linkst.linkStatus);
    const likeLink = (status: string) => {
        console.log(status);
    };
    const linkClick = (click: boolean) => {
        setClicked(click);
        let status = click ? 'CLICK' : 'UNCLICK';
    };

    return (
        <>
            <path
                className="link"
                d={link.path}
                stroke={`url(#${link.color})`}
                strokeWidth={link.value}
                fill="none"
                // onMouseEnter={() => {
                //     const renderingData: SankeyData = { ...originData };
                //     renderingData.positionStatus = 'clicked';
                //     renderingData.links = renderingData.links.map((link) => {
                //         return { ...link };
                //     });
                //     const selectedLinkParts = sourceTargetIdLinksDict[`${link.source}-${link.target}-${link.valueid}`];
                //     renderingData.links.forEach((renderingLink) => {
                //         renderingLink.color = 'grayLinkColor';
                //         // renderingLink.valueid = undefined; // 초기 상태
                //         renderingLink.status = undefined;
                //         selectedLinkParts.forEach((linkPart) => {
                //             if (renderingLink.id && renderingLink.id === linkPart.id) {
                //                 //TODO inter, rep에 속하는지 판단만 하면 되는 상황
                //                 if (renderingLink.target >= 0 && renderingLink.target <= 7) {
                //                     renderingLink.color = 'targetLinkColor';
                //                 }
                //                 if (renderingLink.target >= 8 && renderingLink.target <= 10) {
                //                     renderingLink.color = 'targetLinkOneColor';
                //                 }
                //                 if (renderingLink.target >= 11 && renderingLink.target <= 15) {
                //                     renderingLink.color = 'targetLinkTwoColor';
                //                 }
                //                 if (renderingLink.target >= 16 && renderingLink.target <= 20) {
                //                     renderingLink.color = 'targetLinkThreeColor';
                //                 }
                //                 if (renderingLink.target >= 21 && renderingLink.target <= 30) {
                //                     renderingLink.color = 'targetLinkFourColor';
                //                 }
                //                 if ((renderingLink.target >= 31 && renderingLink.target <= 34) || (renderingLink.source >= 31 && renderingLink.source <= 34)) {
                //                     renderingLink.color = 'intOneLinkColor';
                //                 }
                //                 if (renderingLink.target === 35 || renderingLink.source === 35) {
                //                     renderingLink.color = 'intOneLightLinkColor';
                //                 }
                //                 if ((renderingLink.target >= 36 && renderingLink.target <= 38) || (renderingLink.source >= 36 && renderingLink.source <= 38)) {
                //                     renderingLink.color = 'intOneLight2LinkColor';
                //                 }
                //                 if (renderingLink.target === 39 || renderingLink.source === 39) {
                //                     renderingLink.color = 'intTwoLinkColor';
                //                 }
                //                 if (renderingLink.target === 40 || renderingLink.source === 40) {
                //                     renderingLink.color = 'intTwoLightLinkColor';
                //                 }
                //                 if ((renderingLink.target >= 41 && renderingLink.target <= 42) || (renderingLink.source >= 41 && renderingLink.source <= 42)) {
                //                     renderingLink.color = 'intThreeLinkColor';
                //                 }
                //                 if ((renderingLink.target >= 43 && renderingLink.target <= 44) || (renderingLink.source >= 43 && renderingLink.source <= 44)) {
                //                     renderingLink.color = 'intThreeLightLinkColor';
                //                 }
                //                 if (renderingLink.target === 45 || renderingLink.source === 45) {
                //                     renderingLink.color = 'intFourLinkColor';
                //                 }
                //                 if (renderingLink.target === 46 || renderingLink.source === 46) {
                //                     renderingLink.color = 'intFiveLinkColor';
                //                 }
                //                 if ((renderingLink.target >= 47 && renderingLink.target <= 48) || (renderingLink.source >= 47 && renderingLink.source <= 48)) {
                //                     renderingLink.color = 'intFiveLightLinkColor';
                //                 }
                //                 if (renderingLink.target === 49 || renderingLink.source === 49) {
                //                     renderingLink.color = 'intFiveLight2LinkColor';
                //                 }
                //                 if (renderingLink.target >= 76 && renderingLink.target < 83) {
                //                     renderingLink.color = 'repVisVarColor';
                //                 }
                //                 if (renderingLink.target > 82 && renderingLink.target < 100) {
                //                     renderingLink.color = 'repVisTechColor';
                //                 }
                //             }
                //         });
                //     });
                //     selectedLinkParts.forEach((selectedLinkPart) => {
                //         findFrontLinks({
                //             linkPart: selectedLinkPart,
                //             renderingData,
                //         });
                //         findBackLinks({
                //             linkPart: selectedLinkPart,
                //             renderingData,
                //         });
                //     });

                //     setOriginData(renderingData);
                // }}
                // onMouseLeave={() => {
                //     const renderingData: SankeyData = { ...originData };
                //     renderingData.positionStatus = 'clicked';
                //     renderingData.links = renderingData.links.map((link) => {
                //         return { ...link };
                //     });
                //     const selectedLinkParts = sourceTargetIdLinksDict[`${link.source}-${link.target}-${link.valueid}`];
                //     renderingData.links.forEach((renderingLink) => {
                //         renderingLink.color = 'grayLinkColor';
                //         // renderingLink.valueid = undefined; // 초기 상태
                //         renderingLink.status = undefined;

                //         selectedLinkParts.forEach((linkPart) => {
                //             if (renderingLink.id && renderingLink.id === linkPart.id) {
                //                 //TODO inter, rep에 속하는지 판단만 하면 되는 상황
                //                 if (renderingLink.target >= 0 && renderingLink.target <= 7) {
                //                     renderingLink.color = 'targetLinkColor';
                //                 }
                //                 if (renderingLink.target >= 8 && renderingLink.target <= 10) {
                //                     renderingLink.color = 'targetLinkOneColor';
                //                 }
                //                 if (renderingLink.target >= 11 && renderingLink.target <= 15) {
                //                     renderingLink.color = 'targetLinkTwoColor';
                //                 }
                //                 if (renderingLink.target >= 16 && renderingLink.target <= 20) {
                //                     renderingLink.color = 'targetLinkThreeColor';
                //                 }
                //                 if (renderingLink.target >= 21 && renderingLink.target <= 30) {
                //                     renderingLink.color = 'targetLinkFourColor';
                //                 }
                //                 if ((renderingLink.target >= 31 && renderingLink.target <= 34) || (renderingLink.source >= 31 && renderingLink.source <= 34)) {
                //                     renderingLink.color = 'intOneLinkColor';
                //                 }
                //                 if (renderingLink.target === 35 || renderingLink.source === 35) {
                //                     renderingLink.color = 'intOneLightLinkColor';
                //                 }
                //                 if ((renderingLink.target >= 36 && renderingLink.target <= 38) || (renderingLink.source >= 36 && renderingLink.source <= 38)) {
                //                     renderingLink.color = 'intOneLight2LinkColor';
                //                 }
                //                 if (renderingLink.target === 39 || renderingLink.source === 39) {
                //                     renderingLink.color = 'intTwoLinkColor';
                //                 }
                //                 if (renderingLink.target === 40 || renderingLink.source === 40) {
                //                     renderingLink.color = 'intTwoLightLinkColor';
                //                 }
                //                 if ((renderingLink.target >= 41 && renderingLink.target <= 42) || (renderingLink.source >= 41 && renderingLink.source <= 42)) {
                //                     renderingLink.color = 'intThreeLinkColor';
                //                 }
                //                 if ((renderingLink.target >= 43 && renderingLink.target <= 44) || (renderingLink.source >= 43 && renderingLink.source <= 44)) {
                //                     renderingLink.color = 'intThreeLightLinkColor';
                //                 }
                //                 if (renderingLink.target === 45 || renderingLink.source === 45) {
                //                     renderingLink.color = 'intFourLinkColor';
                //                 }
                //                 if (renderingLink.target === 46 || renderingLink.source === 46) {
                //                     renderingLink.color = 'intFiveLinkColor';
                //                 }
                //                 if ((renderingLink.target >= 47 && renderingLink.target <= 48) || (renderingLink.source >= 47 && renderingLink.source <= 48)) {
                //                     renderingLink.color = 'intFiveLightLinkColor';
                //                 }
                //                 if (renderingLink.target === 49 || renderingLink.source === 49) {
                //                     renderingLink.color = 'intFiveLight2LinkColor';
                //                 }
                //                 if (renderingLink.target >= 76 && renderingLink.target < 83) {
                //                     renderingLink.color = 'repVisVarColor';
                //                 }
                //                 if (renderingLink.target > 82 && renderingLink.target < 100) {
                //                     renderingLink.color = 'repVisTechColor';
                //                 }
                //             }
                //         });
                //     });
                //     selectedLinkParts.forEach((selectedLinkPart) => {
                //         findFrontLinks({
                //             linkPart: selectedLinkPart,
                //             renderingData,
                //         });
                //         findBackLinks({
                //             linkPart: selectedLinkPart,
                //             renderingData,
                //         });
                //     });

                //     setOriginData(renderingData);
                // }}
                onClick={() => {
                    console.log('clicked link', link);
                    const renderingData: SankeyData = { ...originData };
                    renderingData.positionStatus = 'clicked';
                    renderingData.links = renderingData.links.map((link) => {
                        return { ...link };
                    });
                    const selectedLinkParts = sourceTargetIdLinksDict[`${link.source}-${link.target}-${link.valueid}`];

                    renderingData.links.forEach((renderingLink) => {
                        renderingLink.color = 'grayLinkColor';
                        // renderingLink.valueid = undefined; // 초기 상태
                        renderingLink.status = undefined;

                        selectedLinkParts.forEach((linkPart) => {
                            if (renderingLink.id && renderingLink.id === linkPart.id) {
                                //TODO inter, rep에 속하는지 판단만 하면 되는 상황
                                if (renderingLink.target >= 0 && renderingLink.target <= 7) {
                                    renderingLink.color = 'targetLinkColor';
                                }
                                if (renderingLink.target >= 8 && renderingLink.target <= 10) {
                                    renderingLink.color = 'targetLinkOneColor';
                                }
                                if (renderingLink.target >= 11 && renderingLink.target <= 15) {
                                    renderingLink.color = 'targetLinkTwoColor';
                                }
                                if (renderingLink.target >= 16 && renderingLink.target <= 20) {
                                    renderingLink.color = 'targetLinkThreeColor';
                                }
                                if (renderingLink.target >= 21 && renderingLink.target <= 30) {
                                    renderingLink.color = 'targetLinkFourColor';
                                }
                                if ((renderingLink.target >= 31 && renderingLink.target <= 33) || (renderingLink.source >= 31 && renderingLink.source <= 33)) {
                                    renderingLink.color = 'intOneLinkColor';
                                }
                                if (renderingLink.target === 34 || renderingLink.source === 34) {
                                    renderingLink.color = 'intOneLightLinkColor';
                                }
                                if (renderingLink.target === 35 || renderingLink.source === 35) {
                                    renderingLink.color = 'intOneLight2LinkColor';
                                }
                                if ((renderingLink.target >= 36 && renderingLink.target <= 38) || (renderingLink.source >= 36 && renderingLink.source <= 38)) {
                                    renderingLink.color = 'intOneLight3LinkColor';
                                }
                                if (renderingLink.target === 39 || renderingLink.source === 39) {
                                    renderingLink.color = 'intTwoLinkColor';
                                }
                                if (renderingLink.target === 40 || renderingLink.source === 40) {
                                    renderingLink.color = 'intTwoLightLinkColor';
                                }
                                if (renderingLink.target === 41 || renderingLink.source === 41) {
                                    renderingLink.color = 'intThreeLinkColor';
                                }
                                if (renderingLink.target === 42 || renderingLink.source === 42) {
                                    renderingLink.color = 'intThreeLightLinkColor';
                                }
                                if (renderingLink.target === 43 || renderingLink.source === 43) {
                                    renderingLink.color = 'intThreeLight1LinkColor';
                                }
                                if (renderingLink.target === 44 || renderingLink.source === 44) {
                                    renderingLink.color = 'intThreeLight2LinkColor';
                                }
                                if (renderingLink.target === 45 || renderingLink.source === 45) {
                                    renderingLink.color = 'intFourLinkColor';
                                }
                                if (renderingLink.target === 46 || renderingLink.source === 46) {
                                    renderingLink.color = 'intFiveLinkColor';
                                }
                                if ((renderingLink.target >= 47 && renderingLink.target <= 48) || (renderingLink.source >= 47 && renderingLink.source <= 48)) {
                                    renderingLink.color = 'intFiveLightLinkColor';
                                }
                                if (renderingLink.target === 49 || renderingLink.source === 49) {
                                    renderingLink.color = 'intFiveLight2LinkColor';
                                }
                                if (renderingLink.target >= 76 && renderingLink.target < 83) {
                                    renderingLink.color = 'repVisVarColor';
                                }
                                if (renderingLink.target > 82 && renderingLink.target < 100) {
                                    renderingLink.color = 'repVisTechColor';
                                }
                            }
                        });
                    });

                    selectedLinkParts.forEach((selectedLinkPart) => {
                        findFrontLinks({
                            linkPart: selectedLinkPart,
                            renderingData,
                        });
                        findBackLinks({
                            linkPart: selectedLinkPart,
                            renderingData,
                        });
                    });

                    setOriginData(renderingData);
                }}
            >
                {link.color !== 'grayLinkColor' && link.process ? (
                    <title className="info">{`${link.sourceNode.name} to ${link.targetNode.name}: ${link.value}`}</title>
                ) : (
                    <h1>{`${link.sourceNode.name} to ${link.targetNode.name}: ${link.value}`}</h1>
                )}
            </path>
            {/* <Brushes /> */}
            {/* <Brush dimensions={dimensions.current} data={data} onBrushUpdateData={onBrushUpdateData} propertiesNames={propertiesNames} stroke="rgb(47, 74, 89)" /> */}
        </>
    );
};

function findFrontLinks(arg: { linkPart: SankeyLink; renderingData: SankeyData }) {
    const { linkPart, renderingData } = arg;
    // console.log(arg);
    // console.log(linkPart.valueid);
    const frontLinks = renderingData.links.filter((renderingLink) => {
        // if (renderingLink.target === linkPart.source && renderingLink.id === linkPart.id) {
        if (renderingLink.target === linkPart.source && renderingLink.paperName === linkPart.paperName) {
            if (renderingLink.target >= 31 && renderingLink.target <= 33) {
                renderingLink.color = 'intOneLinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.target === 34) {
                renderingLink.color = 'intOneLightLinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.source === 34) {
                renderingLink.color = 'intOneLightLinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.target === 35) {
                renderingLink.color = 'intOneLight2LinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.source === 35) {
                renderingLink.color = 'intOneLight2LinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.target >= 36 && renderingLink.target <= 38) {
                renderingLink.color = 'intOneLight3LinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.source >= 36 && renderingLink.source <= 38) {
                renderingLink.color = 'intOneLight3LinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.target === 39) {
                renderingLink.color = 'intTwoLinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.source === 39) {
                renderingLink.color = 'intTwoLinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.target === 40) {
                renderingLink.color = 'intTwoLightLinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.source === 40) {
                renderingLink.color = 'intTwoLightLinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.target === 41) {
                renderingLink.color = 'intThreeLinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.source === 41) {
                renderingLink.color = 'intThreeLinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.target === 42) {
                renderingLink.color = 'intThreeLightLinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.source === 42) {
                renderingLink.color = 'intThreeLightLinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.target === 43) {
                renderingLink.color = 'intThreeLight1LinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.source === 43) {
                renderingLink.color = 'intThreeLight1LinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.target === 44) {
                renderingLink.color = 'intThreeLight2LinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.source === 44) {
                renderingLink.color = 'intThreeLight2LinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.target === 45) {
                renderingLink.color = 'intFourLinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.source === 45) {
                renderingLink.color = 'intFourLinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.target === 46) {
                renderingLink.color = 'intFiveLinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.source === 46) {
                renderingLink.color = 'intFiveLinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.target >= 47 && renderingLink.target <= 48) {
                renderingLink.color = 'intFiveLightLinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.source >= 47 && renderingLink.source <= 48) {
                renderingLink.color = 'intFiveLightLinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.target === 49) {
                renderingLink.color = 'intFiveLight2LinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.source === 49) {
                renderingLink.color = 'intFiveLight2LinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.target >= 0 && renderingLink.target <= 8) {
                renderingLink.color = 'targetLinkColor';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
                renderingLink.status = 'selected';
            } else if (renderingLink.target >= 8 && renderingLink.target <= 10) {
                renderingLink.color = 'targetLinkOneColor';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
                renderingLink.status = 'selected';
            } else if (renderingLink.target >= 11 && renderingLink.target <= 15) {
                renderingLink.color = 'targetLinkTwoColor';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
                renderingLink.status = 'selected';
            } else if (renderingLink.target >= 16 && renderingLink.target <= 20) {
                renderingLink.color = 'targetLinkThreeColor';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
                renderingLink.status = 'selected';
            } else if (renderingLink.target >= 21 && renderingLink.target <= 30) {
                renderingLink.color = 'targetLinkFourColor';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
                renderingLink.status = 'selected';
            } else renderingLink.color = 'blueLinkColor';
            // renderingLink.valueid = 'selected';
            renderingLink.valueid = linkPart.valueid;
            renderingLink.status = 'selected';
            renderingLink.paperName = linkPart.paperName;
            // renderingLink.process = linkPart.process;

            return true;
        } else {
            return false;
        }
    });

    frontLinks.forEach((linkPart) => {
        findFrontLinks({
            linkPart,
            renderingData,
        }); //recursive forward calculate function
    });
}

function findBackLinks(arg: { linkPart: SankeyLink; renderingData: SankeyData }) {
    const { linkPart, renderingData } = arg;
    const backLinks = renderingData.links.filter((renderingLink) => {
        // if (renderingLink.source === linkPart.target && renderingLink.id === linkPart.id) {
        if (renderingLink.source === linkPart.target && renderingLink.paperName === linkPart.paperName) {
            if (renderingLink.target >= 76 && renderingLink.target < 83) {
                renderingLink.color = 'repVisVarColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.target > 82 && renderingLink.target < 100) {
                renderingLink.color = 'repVisTechColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.target >= 0 && renderingLink.target <= 8) {
                renderingLink.color = 'targetLinkColor';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
                renderingLink.status = 'selected';
            } else if (renderingLink.target >= 8 && renderingLink.target <= 10) {
                renderingLink.color = 'targetLinkOneColor';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
                renderingLink.status = 'selected';
            } else if (renderingLink.target >= 11 && renderingLink.target <= 15) {
                renderingLink.color = 'targetLinkTwoColor';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
                renderingLink.status = 'selected';
            } else if (renderingLink.target >= 16 && renderingLink.target <= 20) {
                renderingLink.color = 'targetLinkThreeColor';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
                renderingLink.status = 'selected';
            } else if (renderingLink.target >= 21 && renderingLink.target <= 30) {
                renderingLink.color = 'targetLinkFourColor';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
                renderingLink.status = 'selected';
            } else if (renderingLink.target >= 31 && renderingLink.target <= 33) {
                renderingLink.color = 'intOneLinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.target === 34) {
                renderingLink.color = 'intOneLightLinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.source === 34) {
                renderingLink.color = 'intOneLightLinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.target === 35) {
                renderingLink.color = 'intOneLight2LinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.source === 35) {
                renderingLink.color = 'intOneLight2LinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.target >= 36 && renderingLink.target <= 38) {
                renderingLink.color = 'intOneLight3LinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.source >= 36 && renderingLink.source <= 38) {
                renderingLink.color = 'intOneLight3LinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.target === 39) {
                renderingLink.color = 'intTwoLinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.source === 39) {
                renderingLink.color = 'intTwoLinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.target === 40) {
                renderingLink.color = 'intTwoLightLinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.source === 40) {
                renderingLink.color = 'intTwoLightLinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.target === 41) {
                renderingLink.color = 'intThreeLinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.source === 41) {
                renderingLink.color = 'intThreeLinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.target === 42) {
                renderingLink.color = 'intThreeLightLinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.source === 42) {
                renderingLink.color = 'intThreeLightLinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.target === 43) {
                renderingLink.color = 'intThreeLight1LinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.source === 43) {
                renderingLink.color = 'intThreeLight1LinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.target === 44) {
                renderingLink.color = 'intThreeLight2LinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.source === 44) {
                renderingLink.color = 'intThreeLight2LinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.target === 45) {
                renderingLink.color = 'intFourLinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.source === 45) {
                renderingLink.color = 'intFourLinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.target === 46) {
                renderingLink.color = 'intFiveLinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.source === 46) {
                renderingLink.color = 'intFiveLinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.target >= 47 && renderingLink.target <= 48) {
                renderingLink.color = 'intFiveLightLinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.source >= 47 && renderingLink.source <= 48) {
                renderingLink.color = 'intFiveLightLinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.target === 49) {
                renderingLink.color = 'intFiveLight2LinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.source === 49) {
                renderingLink.color = 'intFiveLight2LinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else renderingLink.color = 'blueLinkColor';
            // renderingLink.valueid = 'selected';
            renderingLink.valueid = linkPart.valueid;
            renderingLink.status = 'selected';
            renderingLink.paperName = linkPart.paperName;
            // renderingLink.process = linkPart.process;
            return true;
        } else {
            return false;
        }
    });

    backLinks.forEach((linkPart) => {
        findBackLinks({
            linkPart,
            renderingData,
        }); //recursive backward calculate  function
    });
}
