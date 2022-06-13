// Types
import { SankeyLinkExtended, SankeyNodeExtended, SankeyData, SankeyLink } from '../../types/sankey';
import './sandbox-styles.css';
import { FC } from 'react';
import { Utility } from '../../utils/sankey/basics';
import { SourceTargetIdLinksDict } from './Sankey';
import { useState } from 'react';
import { link } from 'fs';
import { setOriginalNode } from 'typescript';
import {
    LinkGrayColor,
    LinkDarkGrayColor,
    LinkBlackColor,
    LinkBlueColor,
    LinkDeepBlueColor,
    LinkGreenColor,
    LinkLightGreenColor,
    LinkOrangeColor,
    LinkRubyColor,
    LinkRedColor,
    LinkTargetColor,
    LinkIntOneColor,
    LinkIntTwoColor,
    LinkIntThreeColor,
    LinkIntFourColor,
    LinkIntFiveColor,
    LinkRepVisVarColor,
    LinkRepVisTechColor,
} from './SankeyColor';

// Props
interface Props {
    link: SankeyLinkExtended;
    originData: SankeyData;
    setOriginData: React.Dispatch<React.SetStateAction<SankeyData>>;
    sourceTargetIdLinksDict: SourceTargetIdLinksDict;
}

// Component
export const Link = ({ link, originData, sourceTargetIdLinksDict, setOriginData }: Props) => {
    // const [isHovering, setIsHovering] = useState(0);
    // const [clickedColor, setClickedColor] = useState<SankeyData>(originData);
    return (
        <>
            <path
                className="link"
                d={link.path}
                stroke={`url(#${link.color})`}
                strokeWidth={link.value}
                fill="none"
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
                        renderingLink.valueid = undefined; // 초기 상태
                        renderingLink.status = undefined;

                        selectedLinkParts.forEach((linkPart) => {
                            if (renderingLink.id && renderingLink.id === linkPart.id) {
                                if ((renderingLink.color = 'blueLinkColor')) {
                                    renderingLink.color = 'blueLinkColor';
                                    renderingLink.valueid = 'selected';
                                    renderingLink.status = 'selected';
                                } else renderingLink.color = 'blueLightLinkColor';
                                // blueFlag = true;
                                // if ((renderingLink.color = 'redLinkColor')) renderingLink.color = 'redLinkColor';
                                // renderingLink.valueid = 'selected';
                                // redFlag = true;
                                // renderingLink.color = renderingLink.color = 'blueLinkColor' ? 'blueLinkColor' : 'redLinkColor';
                                if (renderingLink.target >= 76 && renderingLink.target < 83) renderingLink.color = 'orangeLinkColor';
                                renderingLink.status = 'selected';
                                renderingLink.status = 'selected';
                                if (renderingLink.target > 82 && renderingLink.target < 100) renderingLink.color = 'rubyLinkColor';
                                renderingLink.status = 'selected';
                                renderingLink.status = 'selected';
                                if (renderingLink.source >= 100) renderingLink.color = 'greenLinkColor'; //색상 변경 필요하면 변경.
                                renderingLink.valueid = 'selected';
                                renderingLink.status = 'selected';
                            }
                            // if ((30 < link.target && link.target < 39) || (30 < link.source && link.source < 39)) {
                            //     renderingLink.color = 'intOneLinkColor';
                            //     renderingLink.valueid = 'selected';
                            //     renderingLink.status = 'selected';
                            // } else if ((38 < link.target && link.target < 41) || (38 < link.source && link.source < 41)) {
                            //     renderingLink.color = 'intTwoLinkColor';
                            //     renderingLink.valueid = 'selected';
                            //     renderingLink.status = 'selected';
                            // } else if ((40 < link.target && link.target < 45) || (40 < link.source && link.source < 45)) {
                            //     renderingLink.color = 'intThreeLinkColor';
                            //     renderingLink.valueid = 'selected';
                            //     renderingLink.status = 'selected';
                            // } else if ((44 < link.target && link.target < 46) || (44 < link.source && link.source < 46)) {
                            //     renderingLink.color = 'intFourLinkColor';
                            //     renderingLink.valueid = 'selected';
                            //     renderingLink.status = 'selected';
                            // } else if ((45 < link.target && link.target < 50) || (45 < link.source && link.source < 50)) {
                            //     renderingLink.color = 'intFiveLinkColor';
                            //     renderingLink.valueid = 'selected';
                            //     renderingLink.status = 'selected';
                            // }
                            // if (renderingLink.target >= 76 && renderingLink.target < 83) renderingLink.color = 'repVisVarColor';
                            // renderingLink.valueid = 'selected';
                            // renderingLink.status = 'selected';
                            // if (renderingLink.target > 82 && renderingLink.target < 100) renderingLink.color = 'repVisTechColor';
                            // renderingLink.valueid = 'selected';
                            // renderingLink.status = 'selected';
                            // if (renderingLink.source >= 100) renderingLink.color = 'targetLinkColor'; //색상 변경 필요하면 변경.
                            // renderingLink.valueid = 'selected';
                            // renderingLink.status = 'selected';
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
                    console.log('selectedLinkParts', selectedLinkParts);
                    setOriginData(renderingData);
                }}
            >
                // 색상에만 타이틀 추가
                {link.color !== 'grayLinkColor' ? (
                    <title>{`${link.sourceNode.name} to ${link.targetNode.name}: ${link.value}`}</title>
                ) : (
                    <h1>{`${link.sourceNode.name} to ${link.targetNode.name}: ${link.value}`}</h1>
                )}
            </path>
        </>
    );
};

function findFrontLinks(arg: { linkPart: SankeyLink; renderingData: SankeyData }) {
    const { linkPart, renderingData } = arg;
    console.log(linkPart.valueid);
    const frontLinks = renderingData.links.filter((renderingLink) => {
        if (renderingLink.target === linkPart.source && renderingLink.paperName === linkPart.paperName && renderingLink.process === linkPart.process) {
            if ((renderingLink.color = 'blueLinkColor')) renderingLink.color = 'blueLinkColor';
            renderingLink.valueid = linkPart.valueid;
            renderingLink.process = linkPart.process;
            // renderingLink.valueid = 'selected';
            renderingLink.status = 'selected';
            // if ((renderingLink.status = undefined)) {
            //     renderingLink.color = 'blueLightLinkColor';
            // }
            // if ((renderingLink.valueid = undefined)) renderingLink.color = 'blueLightLinkColor';
            // if ((renderingLink.color = 'redLinkColor')) renderingLink.color = 'redLinkColor';
            // renderingLink.valueid = 'selected';
            if (renderingLink.source >= 50) {
                renderingLink.color = 'greenLinkColor';
                renderingLink.status = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.process = linkPart.process;
                // renderingLink.valueid = 'selected';
                // if ((renderingLink.status = undefined)) {
                //     renderingLink.color = 'greenLightLinkColor';
                // }
            } else return true;
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
        if (renderingLink.source === linkPart.target && renderingLink.paperName === linkPart.paperName && renderingLink.process === linkPart.process) {
            if (renderingLink.source < 50) renderingLink.color = 'blueLinkColor';
            // renderingLink.valueid = 'selected';
            renderingLink.valueid = linkPart.valueid;
            renderingLink.status = 'selected';
            renderingLink.process = linkPart.process;
            // if ((renderingLink.status = undefined)) {
            //     renderingLink.color = 'blueLightLinkColor';
            // }
            if (renderingLink.target >= 76 && renderingLink.target < 83) {
                renderingLink.color = 'orangeLinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.process = linkPart.process;
            } else if (renderingLink.target > 82 && renderingLink.target < 100) {
                renderingLink.color = 'rubyLinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.process = linkPart.process;
            } else if (renderingLink.source >= 100) {
                renderingLink.color = 'greenLinkColor';
                // renderingLink.valueid = 'selected';
                renderingLink.valueid = linkPart.valueid;
                renderingLink.status = 'selected';
                renderingLink.process = linkPart.process;
            } else renderingLink.color = 'blueLinkColor';
            // renderingLink.valueid = 'selected';
            renderingLink.valueid = linkPart.valueid;
            renderingLink.status = 'selected';
            renderingLink.process = linkPart.process;
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
