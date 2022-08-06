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
    links: SankeyLinkExtended[];
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
export const Link = ({ nodes, node, link, links, originData, sourceTargetIdLinksDict, setOriginData }: LinkProps) => {
    const [titleLabel, setTitleLabel] = useState<string>('default link label');

    // click & hover시 label을 나타냄
    const onClickFunction = () => {
        const renderingData: SankeyData = { ...originData };
        renderingData.positionStatus = 'clicked';
        renderingData.links = renderingData.links.map((link) => {
            return { ...link };
        });

        const selectedLinkPart = sourceTargetIdLinksDict[`${link.source}-${link.target}-${link.valueid}-${link.paperName}`];

        // sourceTargetIdLinksDict[`${link.source}-${link.target}-${link.valueid}-${link.process}`];

        // link 클릭시 해당 링크 색상 부여함.
        renderingData.links.forEach((renderingLink) => {
            renderingLink.color = 'grayLinkColor';
            renderingLink.status = undefined;
            selectedLinkPart.forEach((linkPart) => {
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

        // link 클릭시 앞/뒤 링크들 찾아서 색상 부여함.
        selectedLinkPart.forEach((selectedLinkPart) => {
            findFrontLinks({
                linkPart: selectedLinkPart,
                renderingData,
            });
            findBackLinks({
                linkPart: selectedLinkPart,
                renderingData,
            });

            if (link.process === selectedLinkPart.process) {
                console.log('같은 경우 있음? ', link.process);
            }
        });

        // link 클릭시 해당 링크 라벨 부여함.
        // let tempTitleLabel = makeTitleLabel({ currentLink: link });
        // const titleLabelLeftPart = findFrontSameProcessLink({
        //     link,
        //     links,
        // });
        // tempTitleLabel = `${titleLabelLeftPart}->${tempTitleLabel}`;
        // setTitleLabel(tempTitleLabel);
        // findLinkTitle({
        //     link,
        //     links,
        //     setTitleLabel,
        // });

        if (link.color === 'grayLinkColor') {
            setOriginData(originData);
        } else {
            setOriginData(renderingData);
        }
    };

    const onMouseEnterFunction = () => {
        // link 클릭시 해당 링크 라벨 부여함.
        // let tempTitleLabel = makeTitleLabel({ currentLink: link });
        // const titleLabelLeftPart = findFrontSameProcessLink({
        //     link,
        //     links,
        // });
        // tempTitleLabel = `${titleLabelLeftPart}->${tempTitleLabel}`;

        // console.log('링크 호버함', titleLabelLeftPart);
        // setTitleLabel(tempTitleLabel);

        findLinkTitle({
            link,
            links,
            setTitleLabel,
        });
    };

    return (
        <>
            <path className="link" d={link.path} stroke={`url(#${link.color})`} strokeWidth={link.value} fill="none" onClick={onClickFunction} onMouseEnter={onMouseEnterFunction}>
                {link.color !== 'grayLinkColor' && link.process ? (
                    //TODO 팝업메세지 나열
                    <title>
                        {(() => {
                            //TODO 1번째 구간 링크 정보를 담는 데이터
                            //TODO 각각의 정보들을 갖고 있는 배열에 대해서 같은 조건일 때 이어줘야하는 함수를 새로 또 만들어야 할 것 같아보인다.

                            //TODO 1번째 단위 기능 : <title/>에 문자열을 넣는 단위 기능 (e.g. 함수..) -> 완료
                            //TODO 2번째 단위 기능 : 링크 정보들을 찾는 단위 기능 (e.g. 함수..) -> 완료
                            //TODO 3번째 단위 기능 : 찾은 링크 정보들을 담는 데이터 구조 (e.g. 배열 등..)
                            //TODO 4번째 단위 기능 : 찾은 링크 정보들을 담은 데이터를 "1번째 단위 기능"에 전달하기 (e.g. 함수 등..
                            return titleLabel;
                        })()}
                    </title>
                ) : (
                    <title className="info"></title>
                )}
            </path>
        </>
    );
};

function findFrontLinks(arg: { linkPart: SankeyLink; renderingData: SankeyData; interactionType?: 'hover' | 'click' }) {
    const { linkPart, renderingData, interactionType = 'click' } = arg;
    const frontLinks = renderingData.links.filter((renderingLink) => {
        if (renderingLink.target === linkPart.source && renderingLink.paperName === linkPart.paperName) {
            // 길다란 if else문은 색칠하는 기능임.
            if (renderingLink.target >= 0 && renderingLink.target <= 8) {
                renderingLink.color = 'targetLinkColor';
                //  renderingLink.valueid = 'selected';
                // renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
                renderingLink.status = 'selected';
            } else if (renderingLink.target >= 8 && renderingLink.target <= 10) {
                renderingLink.color = 'targetLinkOneColor';
                //  renderingLink.valueid = 'selected';
                // renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
                renderingLink.status = 'selected';
            } else if (renderingLink.target >= 11 && renderingLink.target <= 15) {
                renderingLink.color = 'targetLinkTwoColor';
                //  renderingLink.valueid = 'selected';
                // renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
                renderingLink.status = 'selected';
            } else if (renderingLink.target >= 16 && renderingLink.target <= 20) {
                renderingLink.color = 'targetLinkThreeColor';
                //  renderingLink.valueid = 'selected';
                // renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
                renderingLink.status = 'selected';
            } else if (renderingLink.target >= 21 && renderingLink.target <= 30) {
                renderingLink.color = 'targetLinkFourColor';
                //  renderingLink.valueid = 'selected';
                // renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
                renderingLink.status = 'selected';
            }
            if (renderingLink.target >= 31 && renderingLink.target <= 33) {
                renderingLink.color = 'intOneLinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.target === 34) {
                renderingLink.color = 'intOneLightLinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.source === 34) {
                renderingLink.color = 'intOneLightLinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.target === 35) {
                renderingLink.color = 'intOneLight2LinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.source === 35) {
                renderingLink.color = 'intOneLight2LinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.target >= 36 && renderingLink.target <= 38) {
                renderingLink.color = 'intOneLight3LinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.source >= 36 && renderingLink.source <= 38) {
                renderingLink.color = 'intOneLight3LinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.target === 39) {
                renderingLink.color = 'intTwoLinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.source === 39) {
                renderingLink.color = 'intTwoLinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.target === 40) {
                renderingLink.color = 'intTwoLightLinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.source === 40) {
                renderingLink.color = 'intTwoLightLinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.target === 41) {
                renderingLink.color = 'intThreeLinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.source === 41) {
                renderingLink.color = 'intThreeLinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.target === 42) {
                renderingLink.color = 'intThreeLightLinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.source === 42) {
                renderingLink.color = 'intThreeLightLinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.target === 43) {
                renderingLink.color = 'intThreeLight1LinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.source === 43) {
                renderingLink.color = 'intThreeLight1LinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.target === 44) {
                renderingLink.color = 'intThreeLight2LinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.source === 44) {
                renderingLink.color = 'intThreeLight2LinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.target === 45) {
                renderingLink.color = 'intFourLinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.source === 45) {
                renderingLink.color = 'intFourLinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.target === 46) {
                renderingLink.color = 'intFiveLinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.source === 46) {
                renderingLink.color = 'intFiveLinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.target >= 47 && renderingLink.target <= 48) {
                renderingLink.color = 'intFiveLightLinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.source >= 47 && renderingLink.source <= 48) {
                renderingLink.color = 'intFiveLightLinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.target === 49) {
                renderingLink.color = 'intFiveLight2LinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.source === 49) {
                renderingLink.color = 'intFiveLight2LinkColor';
                renderingLink.valueid = linkPart.valueid;
                //renderingLink.status = 'selected';
                renderingLink.paperName = linkPart.paperName;
                // renderingLink.process = linkPart.process;
            } else if (renderingLink.source >= 50 && renderingLink.source <= 75) {
                renderingLink.color = linkPart.color;
            } else if (renderingLink.target >= 50 && renderingLink.target <= 75) {
                renderingLink.color = linkPart.color;
            }
            return true;
        } else {
            return false;
        }
    });

    // console.log(frontLinks);

    frontLinks.forEach((linkPart) => {
        findFrontLinks({
            linkPart,
            renderingData,
        }); //recursive forward calculate function
    });

    // result.push (itself, othhers)

    // result.,foreahc
}

function findFrontSameProcessLink(arg: { link: SankeyLinkExtended; links: SankeyLinkExtended[] }): string {
    const { link: currentLink, links } = arg;

    // process가 같은 앞 링크를 찾는다.\
    // TODO findBack 함수일때는 filter() 함수 써야할 수 있음.
    const frontLink = links.find((candidateLink) => {
        if (candidateLink.target === currentLink.source && candidateLink.process === currentLink.process) {
            return true;
        } else {
            return false;
        }
    });
    let leftTitleLabel: string = frontLink ? frontLink.sourceNode.name! : '';

    if (frontLink) {
        const lefterTitleLabel = findFrontSameProcessLink({
            link: frontLink,
            links,
        });

        leftTitleLabel = `${lefterTitleLabel}>${leftTitleLabel}`;
    }

    // titleLabel의 일부분
    return leftTitleLabel;
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
    // console.log(backLinks);

    backLinks.forEach((linkPart) => {
        findBackLinks({
            linkPart,
            renderingData,
        }); //recursive backward calculate  function
    });
}

function findLinkTitle(arg: { link: SankeyLinkExtended; links: SankeyLinkExtended[]; setTitleLabel: React.Dispatch<React.SetStateAction<string>> }) {
    const { link, links, setTitleLabel } = arg;

    let tempTitleLabel = makeTitleLabel({ currentLink: link });
    const titleLabelLeftPart = findFrontSameProcessLink({
        link,
        links,
    });
    tempTitleLabel = `${titleLabelLeftPart}>${tempTitleLabel}`;
    setTitleLabel(tempTitleLabel);
}

function makeTitleLabel(args: { currentLink: SankeyLinkExtended; leftLinkLabel?: string; rightLinkLabel?: string }): string {
    const { currentLink, leftLinkLabel, rightLinkLabel } = args;
    const currentTitleLabel = `${currentLink.sourceNode.name}>${currentLink.targetNode.name}`;
    let titleLabel: string = currentTitleLabel;

    if (leftLinkLabel) {
        titleLabel = `${leftLinkLabel}>${titleLabel}`;
    }
    if (rightLinkLabel) {
        titleLabel = `${titleLabel}>${rightLinkLabel}`;
    }

    return titleLabel;
}
