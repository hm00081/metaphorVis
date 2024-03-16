// Types
import { SankeyNodeExtended, SankeyLinkExtended, SankeyData, SankeyLink } from '../../types/sankey';
import './Sankey.scss';
import { SourceTargetIdLinksDict } from './Sankey';
import styled from 'styled-components';

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
    setClickedNodeLinks: React.Dispatch<React.SetStateAction<SankeyLinkExtended[] | undefined>>;
    setClickedLink: React.Dispatch<React.SetStateAction<SankeyLinkExtended | undefined>>;
}

// Component
export const Node = ({ node, width, height, originData, sourceTargetIdLinksDict, setOriginData, links, link, setClickedNodeLinks, setClickedLink }: Props) => {
    const textX = node.x + node.width;
    const textAnchor = 'start';
    const textMargin = 4;
    let textXPosition = textX + textMargin + node.width * 0.3;
    let textYPosition = node.y + node.value / 2 + textMargin * 1;
    if (node.type === 'Vis_var&tech') {
        textXPosition = textX + textMargin;
    }
    if (node.value === 0) {
        node.value = 2;
    }
    const countNonGrayLinks = (nodeNumber: number) => {
        const connectedToSource = links.filter((link) => link.source === nodeNumber && link.color !== 'grayLinkColor').length;
        const connectedToTarget = links.filter((link) => link.target === nodeNumber && link.color !== 'grayLinkColor').length;
        return connectedToSource + connectedToTarget;
    };
    //@ts-ignore
    const nonGrayLinksCountForThisNode = countNonGrayLinks(node.number);
    const getNodeTextInfo = (nodeNumber: number) => {
        const connectedAsSource = links.filter((link) => link.source === nodeNumber && link.color !== 'grayLinkColor').length;
        const connectedAsTarget = links.filter((link) => link.target === nodeNumber && link.color !== 'grayLinkColor').length;

        if (connectedAsSource + connectedAsTarget === 0) return ''; // 해당 노드에 연결된 링크가 없을 경우

        return `Source Link: ${connectedAsSource}, Target Link: ${connectedAsTarget}`;
    };

    const onClickFunction = (links: SankeyLinkExtended[]) => {
        const renderingData: SankeyData = { ...originData };
        renderingData.positionStatus = 'clicked';
        renderingData.links = renderingData.links.map((link) => {
            return { ...link };
        });
        //@ts-ignore
        const nodePush = [];
        const trashNodePush = [];
        let arrLink = links.filter((recursiveLink, i) => {
            if ((node.number === recursiveLink.source || node.number === recursiveLink.target) && recursiveLink.valueid) {
                if (links[i].color !== 'grayLinkColor') {
                    const selectedNodePart = sourceTargetIdLinksDict[`${links[i].source}-${links[i].target}-${links[i].valueid}-${links[i].paperName}`];
                    // console.log(selectedNodeParts);
                    return nodePush.push(selectedNodePart);
                }
            } else return trashNodePush.push();
        });

        setClickedLink(undefined);
        setClickedNodeLinks(arrLink);
        renderingData.links.forEach((renderingLink) => {
            renderingLink.color = 'grayLinkColor';
            // renderingLink.valueid = undefined; // 초기 상태
            renderingLink.status = undefined;
            //@ts-ignore
            arrLink.forEach((linkPart) => {
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

        arrLink.forEach((selectedLinkPart) => {
            findFrontLinks({
                linkPart: selectedLinkPart,
                renderingData,
            });
            findBackLinks({
                linkPart: selectedLinkPart,
                renderingData,
            });
        });
        for (let i = 0; i < links.length; i++) {
            if (links[i].color === 'grayLinkColor') {
                setOriginData(originData);
            } else setOriginData(renderingData);
        }
        // console.log('selectedLinkParts', originData);
        //console.log(renderingData.links);
    };
    return (
        <NodePos>
            <rect
                className="node"
                x={node.x}
                y={node.y}
                width={node.width}
                height={node.value}
                fill={node.color}
                onClick={(event) => {
                    console.log('node clicked');
                    onClickFunction(links);
                    event.stopPropagation();
                }}
            >
                {/* @ts-ignore */}
                <title>{`${node.name}, nodeValue: ${node.value}, ${getNodeTextInfo(node.number)}`}</title>
            </rect>
            <g transform={`translate(${textXPosition} ${textYPosition})`}>
                <NodeName style={{ fontWeight: 550 }} textAnchor={textAnchor}>
                    {node.name}
                </NodeName>
            </g>
        </NodePos>
    );
};

function findFrontLinks(arg: { linkPart: SankeyLink; renderingData: SankeyData }) {
    const { linkPart, renderingData } = arg;

    const frontLinks = renderingData.links.filter((renderingLink) => {
        if (renderingLink.target === linkPart.source && renderingLink.process === linkPart.process) {
            if (renderingLink.target >= 0 && renderingLink.target <= 8) {
                renderingLink.color = 'targetLinkColor';

                renderingLink.status = 'selected';
            } else if (renderingLink.target >= 8 && renderingLink.target <= 10) {
                renderingLink.color = 'targetLinkOneColor';

                renderingLink.status = 'selected';
            } else if (renderingLink.target >= 11 && renderingLink.target <= 15) {
                renderingLink.color = 'targetLinkTwoColor';

                renderingLink.status = 'selected';
            } else if (renderingLink.target >= 16 && renderingLink.target <= 20) {
                renderingLink.color = 'targetLinkThreeColor';

                renderingLink.status = 'selected';
            } else if (renderingLink.target >= 21 && renderingLink.target <= 30) {
                renderingLink.color = 'targetLinkFourColor';

                renderingLink.status = 'selected';
            }
            if (renderingLink.target >= 31 && renderingLink.target <= 33) {
                renderingLink.color = 'intOneLinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            } else if (renderingLink.target === 34) {
                renderingLink.color = 'intOneLightLinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            } else if (renderingLink.source === 34) {
                renderingLink.color = 'intOneLightLinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            } else if (renderingLink.target === 35) {
                renderingLink.color = 'intOneLight2LinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            } else if (renderingLink.source === 35) {
                renderingLink.color = 'intOneLight2LinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            } else if (renderingLink.target >= 36 && renderingLink.target <= 38) {
                renderingLink.color = 'intOneLight3LinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            } else if (renderingLink.source >= 36 && renderingLink.source <= 38) {
                renderingLink.color = 'intOneLight3LinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            } else if (renderingLink.target === 39) {
                renderingLink.color = 'intTwoLinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            } else if (renderingLink.source === 39) {
                renderingLink.color = 'intTwoLinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            } else if (renderingLink.target === 40) {
                renderingLink.color = 'intTwoLightLinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            } else if (renderingLink.source === 40) {
                renderingLink.color = 'intTwoLightLinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            } else if (renderingLink.target === 41) {
                renderingLink.color = 'intThreeLinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            } else if (renderingLink.source === 41) {
                renderingLink.color = 'intThreeLinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            } else if (renderingLink.target === 42) {
                renderingLink.color = 'intThreeLightLinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            } else if (renderingLink.source === 42) {
                renderingLink.color = 'intThreeLightLinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            } else if (renderingLink.target === 43) {
                renderingLink.color = 'intThreeLight1LinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            } else if (renderingLink.source === 43) {
                renderingLink.color = 'intThreeLight1LinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            } else if (renderingLink.target === 44) {
                renderingLink.color = 'intThreeLight2LinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            } else if (renderingLink.source === 44) {
                renderingLink.color = 'intThreeLight2LinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            } else if (renderingLink.target === 45) {
                renderingLink.color = 'intFourLinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            } else if (renderingLink.source === 45) {
                renderingLink.color = 'intFourLinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            } else if (renderingLink.target === 46) {
                renderingLink.color = 'intFiveLinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            } else if (renderingLink.source === 46) {
                renderingLink.color = 'intFiveLinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            } else if (renderingLink.target >= 47 && renderingLink.target <= 48) {
                renderingLink.color = 'intFiveLightLinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            } else if (renderingLink.source >= 47 && renderingLink.source <= 48) {
                renderingLink.color = 'intFiveLightLinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            } else if (renderingLink.target === 49) {
                renderingLink.color = 'intFiveLight2LinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            } else if (renderingLink.source === 49) {
                renderingLink.color = 'intFiveLight2LinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

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

function findBackLinks(arg: { linkPart: SankeyLink; renderingData: SankeyData }) {
    const { linkPart, renderingData } = arg;
    const backLinks = renderingData.links.filter((renderingLink) => {
        if (renderingLink.source === linkPart.target && renderingLink.process === linkPart.process) {
            if (renderingLink.target >= 31 && renderingLink.target <= 33) {
                renderingLink.color = 'intOneLinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            }
            if (renderingLink.target === 34) {
                renderingLink.color = 'intOneLightLinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            }
            if (renderingLink.source === 34) {
                renderingLink.color = 'intOneLightLinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            }
            if (renderingLink.target === 35) {
                renderingLink.color = 'intOneLight2LinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            }
            if (renderingLink.source === 35) {
                renderingLink.color = 'intOneLight2LinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            }
            if (renderingLink.target >= 36 && renderingLink.target <= 38) {
                renderingLink.color = 'intOneLight3LinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            }
            if (renderingLink.source >= 36 && renderingLink.source <= 38) {
                renderingLink.color = 'intOneLight3LinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            }
            if (renderingLink.target === 39) {
                renderingLink.color = 'intTwoLinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            }
            if (renderingLink.source === 39) {
                renderingLink.color = 'intTwoLinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            }
            if (renderingLink.target === 40) {
                renderingLink.color = 'intTwoLightLinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            }
            if (renderingLink.source === 40) {
                renderingLink.color = 'intTwoLightLinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            }
            if (renderingLink.target === 41) {
                renderingLink.color = 'intThreeLinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            }
            if (renderingLink.source === 41) {
                renderingLink.color = 'intThreeLinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            }
            if (renderingLink.target === 42) {
                renderingLink.color = 'intThreeLightLinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            }
            if (renderingLink.source === 42) {
                renderingLink.color = 'intThreeLightLinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            }
            if (renderingLink.target === 43) {
                renderingLink.color = 'intThreeLight1LinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            }
            if (renderingLink.source === 43) {
                renderingLink.color = 'intThreeLight1LinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            }
            if (renderingLink.target === 44) {
                renderingLink.color = 'intThreeLight2LinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            }
            if (renderingLink.source === 44) {
                renderingLink.color = 'intThreeLight2LinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            }
            if (renderingLink.target === 45) {
                renderingLink.color = 'intFourLinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            }
            if (renderingLink.source === 45) {
                renderingLink.color = 'intFourLinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            }
            if (renderingLink.target === 46) {
                renderingLink.color = 'intFiveLinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            }
            if (renderingLink.source === 46) {
                renderingLink.color = 'intFiveLinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            }
            if (renderingLink.target >= 47 && renderingLink.target <= 48) {
                renderingLink.color = 'intFiveLightLinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            }
            if (renderingLink.source >= 47 && renderingLink.source <= 48) {
                renderingLink.color = 'intFiveLightLinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            }
            if (renderingLink.target === 49) {
                renderingLink.color = 'intFiveLight2LinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

            }
            if (renderingLink.source === 49) {
                renderingLink.color = 'intFiveLight2LinkColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

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

                renderingLink.paperName = linkPart.paperName;

            }
            if (renderingLink.target > 82 && renderingLink.target < 100) {
                renderingLink.color = 'repVisTechColor';
                renderingLink.valueid = linkPart.valueid;

                renderingLink.paperName = linkPart.paperName;

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
