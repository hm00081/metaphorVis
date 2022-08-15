// Types
import { SankeyData, SankeyNode, SankeyLink, SankeyNodeExtended, SankeyLinkExtended } from '../../types/sankey';
import { useState, useEffect } from 'react';
// Components
// Libraries
import {
    LinkGrayColor,
    LinkBlueColor,
    LinkDeepBlueColor,
    LinkGreenColor,
    LinkLightGreenColor,
    LinkOrangeColor,
    LinkRubyColor,
    LinkRedColor,
    LinkTargetColor,
    LinkHighlightTargetColor,
    LinkTargetOneColor,
    LinkTargetTwoColor,
    LinkTargetThreeColor,
    LinkTargetFourColor,
    LinkIntOneColor,
    LinkIntLightOneColor,
    LinkIntLight2OneColor,
    LinkIntLight3OneColor,
    LinkIntTwoColor,
    LinkIntLightTwoColor,
    LinkIntThreeColor,
    LinkIntLightThreeColor,
    LinkIntLight1ThreeColor,
    LinkIntLight2ThreeColor,
    LinkIntFourColor,
    LinkIntFiveColor,
    LinkIntLightFiveColor,
    LinkIntLight2FiveColor,
    LinkRepVisVarColor,
    LinkRepVisTechColor,
} from './SankeyColor';
import { Link } from './Link';
// import { Node } from './Link';
import { Node } from './Node';
import './Sankey.scss';
// Utils
import { calcSankeyNodes, calcSankeyLinks } from '../../utils/';

// styled
import styled from 'styled-components';

const TargetClouds = styled.div`
    margin-left: 300px;
    margin-top: -50px;
`;

const BigBox = styled.g``;

let style = {
    fontSize: '15px',
    fontWeight: 'bold',
};

// Props
interface Props {
    width: number;
    height: number;
    paddingTop?: number;
    paddingLeft?: number;
    originData: SankeyData;
    nodeWidth?: number;
    nodeHeight?: number;
    nodeMargin?: number;
    minLinkBreadth?: number;
    maxLinkBreadth?: number;
    setOriginData: React.Dispatch<React.SetStateAction<SankeyData>>;
    setClickedNodeLinks: React.Dispatch<React.SetStateAction<SankeyLinkExtended[] | undefined>>;
    setClickedLink: React.Dispatch<React.SetStateAction<SankeyLinkExtended | undefined>>;
    clickedCluster: SankeyData | undefined;
}

export interface SourceTargetIdLinksDict {
    [sourceTargetId: string]: SankeyLinkExtended[];
}

export type SourceTargetIdNodesDict = SourceTargetIdLinksDict & {
    [numberId: string]: SankeyNode[];
};

// Component
export const Sankey = ({
    width,
    height,
    originData,
    paddingTop = 0,
    paddingLeft = 0,
    nodeWidth = 20,
    nodeHeight = 20,
    nodeMargin = 5,
    minLinkBreadth,
    maxLinkBreadth,
    setOriginData,
    setClickedNodeLinks: setClickedNodeLinks,
    setClickedLink,
    clickedCluster,
}: Props) => {
    const [nodes, setNodes] = useState<SankeyNodeExtended[]>([]);
    const [links, setLinks] = useState<SankeyLinkExtended[]>([]);
    const [sourceTargetIdLinksDict, setSourceTargetIdLinksDict] = useState<SourceTargetIdLinksDict>({});
    const [transform, setTransform] = useState<d3.ZoomTransform | null>(null);
    // console.log(clickedCluster); //  정보는 잘 들어왔다.
    useEffect(() => {
        const sourceTargetIdLinksDict: SourceTargetIdLinksDict = {};

        originData.links.forEach((link1) => {
            originData.links.forEach((link2) => {
                if (link1.source === link2.source && link1.target === link2.target && link1.valueid === link2.valueid && link1.paperName === link2.paperName) {
                    const sourceTargetId = `${link2.source}-${link2.target}-${link2.valueid}-${link2.paperName}`;

                    if (sourceTargetId in sourceTargetIdLinksDict) {
                        const alreadySameLink = sourceTargetIdLinksDict[sourceTargetId].find((alreadyLink) => alreadyLink === link2);
                        if (!alreadySameLink) {
                            //@ts-ignore
                            sourceTargetIdLinksDict[sourceTargetId].push(link2);
                        }
                    } else {
                        //@ts-ignore
                        sourceTargetIdLinksDict[sourceTargetId] = [link2];
                    }
                }
            });
        });

        //TODO mergedLinks는 폐기해도 될듯.
        const mergedLinks = [] as SankeyLink[];
        for (const [sourceTargetId, sameSourceTargetLinks] of Object.entries(sourceTargetIdLinksDict)) {
            const mergedLink = sameSourceTargetLinks.reduce<SankeyLink>(
                (mergedLink, partLink) => {
                    mergedLink.value += partLink.value;
                    // mergedLink.valueid = partLink.valueid;
                    return mergedLink;
                },
                { ...sameSourceTargetLinks[0], value: 0 }
            );
            mergedLinks.push(mergedLink);
        }

        originData.nodes.forEach((node) => {});

        const renderingData: SankeyData = { ...originData }; // 확인

        setSourceTargetIdLinksDict(sourceTargetIdLinksDict);

        const nodes = calcSankeyNodes(renderingData, width, height, paddingTop, paddingLeft, nodeWidth, nodeHeight, nodeMargin, maxLinkBreadth);

        setNodes(nodes);

        const links = calcSankeyLinks(renderingData, height, nodes, nodeWidth, minLinkBreadth, maxLinkBreadth);

        setLinks(links);
    }, [originData]);
    const columnss = ['', 'Paper', 'Target', 'Intermediation', 'Representation', 'Vis Var&Tech'];

    return (
        <svg
            onClick={(event) => {
                setClickedLink(undefined);
                setClickedNodeLinks(undefined);
            }}
            className="size"
            viewBox="0 0 1880 2050"
        >
            <LinkGrayColor />
            <LinkBlueColor />
            <LinkDeepBlueColor />
            <LinkGreenColor />
            <LinkLightGreenColor />
            <LinkOrangeColor />
            <LinkRubyColor />
            <LinkRedColor />
            <LinkTargetColor />
            <LinkHighlightTargetColor />
            <LinkTargetOneColor />
            <LinkTargetTwoColor />
            <LinkTargetThreeColor />
            <LinkTargetFourColor />
            <LinkIntOneColor />
            <LinkIntLightOneColor />
            <LinkIntLight2OneColor />
            <LinkIntLight3OneColor />
            <LinkIntTwoColor />
            <LinkIntLightTwoColor />
            <LinkIntThreeColor />
            <LinkIntLightThreeColor />
            <LinkIntLight1ThreeColor />
            <LinkIntLight2ThreeColor />
            <LinkIntFourColor />
            <LinkIntFiveColor />
            <LinkIntLightFiveColor />
            <LinkIntLight2FiveColor />
            <LinkRepVisVarColor />
            <LinkRepVisTechColor />
            {columnss.map((column, i) => (
                // <Text>{column}</Text>

                <BigBox>
                    {/* <rect className="column" x={width / columns.length} y={0} width={width / columns.length} height={height} fill="#eee" /> */}
                    {/* <text x={(width / columns.length) * i + width / columns.length / 10} y={height * 0.02} textAnchor="middle"> */}
                    <text style={style} className="coltext" x={450 * i - 430} y={(height as number) * 0.02} textAnchor="middle">
                        {`${column}`}
                    </text>
                </BigBox>
            ))}
            {nodes.map((node, i) => (
                //@ts-ignore
                <Node
                    className="node"
                    key={`node-${i}`}
                    node={node}
                    links={links}
                    width={width}
                    height={height}
                    originData={originData}
                    sourceTargetIdLinksDict={sourceTargetIdLinksDict}
                    setOriginData={setOriginData}
                    setClickedNodeLinks={setClickedNodeLinks}
                    setClickedLink={setClickedLink}
                >
                    {/* {() => {
                            if ((i = 30)) {
                                return (
                                    <TargetClouds>
                                        <TargetCloudResults />
                                    </TargetClouds>
                                );
                            }
                        }} */}
                </Node>
            ))}

            {links.map((link, i) => (
                // @ts-ignore
                <Link
                    key={`link-${i}`}
                    nodes={nodes}
                    link={link}
                    links={links}
                    originData={originData}
                    sourceTargetIdLinksDict={sourceTargetIdLinksDict}
                    setOriginData={setOriginData}
                    setClickedLink={setClickedLink}
                    setClickedNodeLinks={setClickedNodeLinks}
                />
            ))}

            {() => {
                if (clickedCluster) {
                    // console.log(clickedCluster); // 각 군집에 해당하는 데이터들 잘 호출된다.
                    return true;
                }
            }}
        </svg>
    );
};
