import { SankeyData, SankeyLinkExtended, SankeyNodeExtended, SankeyLink } from '../../types';
import { SourceTargetIdLinksDict } from './Sankey';

interface Props {
    links: SankeyLinkExtended[];
    node: SankeyNodeExtended;
    originData: SankeyData;
    setOriginData: React.Dispatch<React.SetStateAction<SankeyData>>;
    sourceTargetIdLinksDict: SourceTargetIdLinksDict;
}

export function onClick({ originData, setOriginData, links, node, sourceTargetIdLinksDict }: Props) {
    // console.log('clicked link', links);
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
                return nodePush.push(selectedNodePart);
            }
        } else return trashNodePush.push();
    });

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
    // console.log('selectedLinkParts', nodePush);
    for (let i = 0; i < links.length; i++) {
        if (links[i].color === 'grayLinkColor') {
            setOriginData(originData);
        } else setOriginData(renderingData);
    }
}

function findFrontLinks(arg: { linkPart: SankeyLink; renderingData: SankeyData }) {
    const { linkPart, renderingData } = arg;

    // console.log(arg);
    // console.log(linkPart.valueid);
    const frontLinks = renderingData.links.filter((renderingLink) => {
        // if (renderingLink.target === linkPart.source && renderingLink.id === linkPart.id) {
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

function findBackLinks(arg: { linkPart: SankeyLink; renderingData: SankeyData }) {
    const { linkPart, renderingData } = arg;
    const backLinks = renderingData.links.filter((renderingLink) => {
        // if (renderingLink.source === linkPart.target && renderingLink.id === linkPart.id) {
        // if (renderingLink.source === linkPart.target && renderingLink.process === linkPart.process ) {
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
        if (renderingLink.source === linkPart.target && renderingLink.process === linkPart.process) {
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