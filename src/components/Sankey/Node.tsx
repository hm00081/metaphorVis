// Types
import { SankeyNodeExtended, SankeyLinkExtended, SankeyData, SankeyNode, SankeyLink } from '../../types/sankey';
import './Sankey.css';
import { SourceTargetIdLinksDict } from './Sankey';
import { Ref, useContext, useState, useEffect } from 'react';
// styled
import styled from 'styled-components';
import { render } from '@testing-library/react';
import { calcSankeyNodes, calcSankeyLinks } from '../../utils/';
//@ts-ignore
// const Rect = styled.rect`
//     &: hover {
//         opacity: 1;
//     }
// `;
const NodeName = styled.text`
    margin-top: 12px;
`;

const NodePos = styled.g`
    margin-top: 102px;
`;

// Props
interface Props {
    links: SankeyLinkExtended[];
    link: SankeyLinkExtended;
    node: SankeyNodeExtended;
    data: SankeyData;
    width: number;
    height: number;
    originData: SankeyData;
    setOriginData: React.Dispatch<React.SetStateAction<SankeyData>>;
    sourceTargetIdLinksDict: SourceTargetIdLinksDict;
    paddingTop: number;
    paddingLeft: number;
    nodeWidth: number;
    nodeHeight: number;
    nodeMargin: number;
    minLinkBreadth: number;
    maxLinkBreadth: number;
}

// Component
export const Node = ({ node, width, height, originData, sourceTargetIdLinksDict, setOriginData, links, link }: Props) => {
    // useEffect(() => {
    //     console.log(links[0]);
    // });
    // console.log(links.length);
    //TODO id=100인 Node를 클릭했을 때,
    //TODO 1. Links 중에서 source-node, 혹은 target-node가 100인 Link 데이터를 모두 따로 보관한다.
    //TODO 2. 각 링크별로 findFrontLink(), findBackLink()와 많이 유사한 로직을 호출하여 링크를 색칠한다.
    //TODO findFrontLink(source-node) 호출해야하고, findBackLinks(target-node) 호출해야한다
    // console.log(sourceTargetIdLinksDict);
    const endNode = node.x + node.width > width - node.width;
    const size = width < height ? width : height;
    // console.log(sourceTargetIdLinksDict);
    // Calculate Text Properties
    const textX = !endNode ? node.x + node.width : node.x;
    const textAnchor = !endNode ? 'start' : 'end';
    const textMargin = !endNode ? 4 : -4;
    const textTitleSize = Math.log(10) * 4;
    const textValueSize = (size / 100) * 1;
    const color = node.color;
    // const [links, setLinks] = useState<SankeyLinkExtended[]>([]);
    // const [clickdedLink, setClickedLink] = useState<SankeyLinkExtended>(link);
    // useEffect(()=> {
    //     const linkOption = link

    //     if(linkOption != 'undefined' && linkOption != null)
    // }
    let textXPosition = textX + textMargin + node.width * 0.3;
    let textYPosition = node.y + node.value / 2 + textMargin * 1;
    if (node.type === 'Vis_var&tech') {
        textXPosition = textX + textMargin;
    }
    if (node.value == 0) {
        node.value = 2;
    }
    // console.log(sourceTargetIdLinksDict);
    return (
        //노드에 link와 같이 클릭시 노드에 있는 링크들만 보여주도록 표현.
        <NodePos>
            <rect
                className="node"
                x={node.x}
                y={node.y}
                width={node.width}
                height={node.value}
                fill={node.color}
                onClick={() => {
                    // console.log('clicked link', links);
                    const renderingData: SankeyData = { ...originData };
                    renderingData.positionStatus = 'clicked';
                    renderingData.links = renderingData.links.map((link) => {
                        return { ...link };
                    });
                    // console.log(renderingData.nodes);
                    // console.log(renderingData.links);
                    // for (let i = 0; i < links.length; i++) {
                    //     //   if ( links[i].)
                    // }
                    // console.log(node.number);
                    //@ts-ignore

                    const nodePush = [];

                    const trashNodePush = [];
                    // console.log(links.length);
                    for (let i = 0; i < links.length; i++) {
                        if (node.number === links[i].source || node.number === links[i].target) {
                            if (links[i].color !== 'grayLinkColor') {
                                const selectedNodeParts = sourceTargetIdLinksDict[`${links[i].source}-${links[i].target}-${links[i].valueid}-${links[i].paperName}`];
                                console.log(selectedNodeParts);
                                nodePush.push(selectedNodeParts);
                            }
                        } else trashNodePush.push();
                    }

                    const convertNode = nodePush.reduce(function (acc, cur) {
                        return acc.concat(cur);
                    });
                    // console.log(nodePush);
                    console.log(convertNode);

                    renderingData.links.forEach((renderingLink) => {
                        renderingLink.color = 'grayLinkColor';
                        // renderingLink.valueid = undefined; // 초기 상태
                        renderingLink.status = undefined;
                        //@ts-ignore
                        convertNode.forEach((linkPart) => {
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
                                if ((renderingLink.target >= 31 && renderingLink.target <= 34) || (renderingLink.source >= 31 && renderingLink.source <= 34)) {
                                    renderingLink.color = 'intOneLinkColor';
                                }
                                if (renderingLink.target === 35 || renderingLink.source === 35) {
                                    renderingLink.color = 'intOneLightLinkColor';
                                }
                                if ((renderingLink.target >= 36 && renderingLink.target <= 38) || (renderingLink.source >= 36 && renderingLink.source <= 38)) {
                                    renderingLink.color = 'intOneLight2LinkColor';
                                }
                                if (renderingLink.target === 39 || renderingLink.source === 39) {
                                    renderingLink.color = 'intTwoLinkColor';
                                }
                                if (renderingLink.target === 40 || renderingLink.source === 40) {
                                    renderingLink.color = 'intTwoLightLinkColor';
                                }
                                if ((renderingLink.target >= 41 && renderingLink.target <= 42) || (renderingLink.source >= 41 && renderingLink.source <= 42)) {
                                    renderingLink.color = 'intThreeLinkColor';
                                }
                                if ((renderingLink.target >= 43 && renderingLink.target <= 44) || (renderingLink.source >= 43 && renderingLink.source <= 44)) {
                                    renderingLink.color = 'intThreeLightLinkColor';
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

                    convertNode.forEach((selectedLinkPart) => {
                        findFrontLinks({
                            linkPart: selectedLinkPart,
                            renderingData,
                        });
                        findBackLinks({
                            linkPart: selectedLinkPart,
                            renderingData,
                        });
                    });
                    // console.log('selectedLinkParts', nodePush);
                    setOriginData(renderingData);
                }}
            >
                <title>{`${node.name}: ${node.value}, node number: ${node.number}`}</title>
            </rect>
            <g transform={`translate(${textXPosition} ${textYPosition})`}>
                <NodeName style={{ fontSize: node.value > 8 ? textTitleSize : textTitleSize, fontWeight: 550 }} textAnchor={textAnchor}>
                    {node.name}
                </NodeName>
            </g>
        </NodePos>
    );
};

function findFrontLinks(arg: { linkPart: SankeyLink; renderingData: SankeyData }) {
    const { linkPart, renderingData } = arg;
    // console.log(renderingData.links);
    const frontLinks = renderingData.links.filter((renderingLink) => {
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
