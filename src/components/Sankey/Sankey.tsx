// Types
import { SankeyData, SankeyNode, SankeyLink, SankeyNodeExtended, SankeyLinkExtended } from '../../types/sankey';
import { useState, useEffect, useRef } from 'react';
// Components
// Libraries
import { useMeasure } from 'react-use';
import { D3Drawer } from './D3Drawer';
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
import { makeDrag, makeSimulation, SvgGSelectionsMaker } from './dragFunction';
import { Link } from './Link';
// import { Node } from './Link';
import { PaperView } from '../Navigator/Paperview/PaperView';
import { Node } from './Node';
import './Sankey.scss';
// Utils
import { calcSankeyNodes, calcSankeyLinks } from '../../utils/';

// Styles
// styled
import styled from 'styled-components';

// Cloud
import { Papers } from '../../data/AllPaperData';
import { couldStartTrivia } from 'typescript';
import TargetCloudResults from '../WordCloud/react-cloud/TargetCloudResults';
import InterCloudResults from '../WordCloud/react-cloud/InterCloudResults';
import RepCloudResults from '../WordCloud/react-cloud/RepCloudResults';
import VarCloudResults from '../WordCloud/react-cloud/VarCloudResults';
import TechCloudResults from '../WordCloud/react-cloud/TechCloudResults';
import { GridColumns } from '@visx/grid';

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
}

export interface SourceTargetIdLinksDict {
    [sourceTargetId: string]: SankeyLinkExtended[];
}

export type SourceTargetIdNodesDict = SourceTargetIdLinksDict & {
    [numberId: string]: SankeyNode[];
};

// Component
export const Sankey = ({ width, height, originData, paddingTop = 0, paddingLeft = 0, nodeWidth = 20, nodeHeight = 20, nodeMargin = 5, minLinkBreadth, maxLinkBreadth, setOriginData }: Props) => {
    // const [ref, { width, height }] = useMeasure<HTMLDivElement>();
    const [nodes, setNodes] = useState<SankeyNodeExtended[]>([]);
    const [links, setLinks] = useState<SankeyLinkExtended[]>([]);

    const [sourceTargetIdLinksDict, setSourceTargetIdLinksDict] = useState<SourceTargetIdLinksDict>({});
    const [transform, setTransform] = useState<d3.ZoomTransform | null>(null);

    useEffect(() => {
        const sourceTargetIdLinksDict: SourceTargetIdLinksDict = {};
        // const SourceTargetIdNodesDict: SourceTargetIdNodesDict = {};

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

        // useEffect(() => {
        //     //@ts-ignore
        //     const d3Drawer = new D3Drawer();
        // });

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

        // renderingData.links = mergedLinks;

        // console.log('mergedLinks');
        // console.log(mergedLinks);
        // console.log('rl');
        // console.log(renderingData.links);

        // console.log(renderingData.nodes);
        // console.log(mergedLinks);
        setSourceTargetIdLinksDict(sourceTargetIdLinksDict);
        // console.log(sourceTargetIdLinksDict);

        const nodes = calcSankeyNodes(renderingData, width, height, paddingTop, paddingLeft, nodeWidth, nodeHeight, nodeMargin, maxLinkBreadth);
        // console.log('nodes', nodes);
        setNodes(nodes);
        // const links = calcSankeyLinks(renderingData, height, nodes, nodeWidth, minLinkBreadth, maxLinkBreadth, renderingData.positionStatus === 'init'); // 이거로 하면 모든 링크 위치 분리되어 나타냄
        const links = calcSankeyLinks(renderingData, height, nodes, nodeWidth, minLinkBreadth, maxLinkBreadth);
        // console.log(links);
        setLinks(links);
    }, [originData]);
    const columns = nodes.map((node) => node.type).filter((type, pos, arr) => arr.indexOf(type) === pos);
    const columnss = ['Paper', 'Paper', 'Target', 'Intermediation', 'Representation', 'Vis Var&Tech'];
    // const columns = title.map((title) => title).filter((title, pos, arr) => arr.indexOf(title) === pos);

    return (
        // <svg className="size" width="100%" height="100%">
        <svg className="size" width={width} height={height}>
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
                    <text style={style} className="coltext" x={500 * i - 480} y={height * 0.02} textAnchor="middle">
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
                <Link key={`link-${i}`} nodes={nodes} link={link} links={links} originData={originData} sourceTargetIdLinksDict={sourceTargetIdLinksDict} setOriginData={setOriginData} />
            ))}
        </svg>
    );
};
