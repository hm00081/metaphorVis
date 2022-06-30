// Types
import { SankeyNodeExtended, SankeyLinkExtended, SankeyData, SankeyNode, SankeyLink } from '../../types/sankey';
import './Sankey.css';
import { SourceTargetIdLinksDict } from './Sankey';
import { useContext, useState, useEffect } from 'react';
// styled
import styled from 'styled-components';
import { render } from '@testing-library/react';

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
    node: SankeyNodeExtended;
    link: SankeyLinkExtended;
    data: SankeyData;
    nodes: SankeyNode;
    links: SankeyLink;
    depth: number;
    index: number;
    x0: number;
    x1: number;
    y0: number;
    y1: number;
    value: number;
    color: string;
    label: string;
    formattedValue: string;
    layer: number;
    x: number;
    y: number;
    width: number;
    height: number;
    originData: SankeyData;
    setOriginData: React.Dispatch<React.SetStateAction<SankeyData>>;
    sourceTargetIdLinksDict: SourceTargetIdLinksDict;
}

const Test = ({ node, link }: Props) => {
    const nodes = node.number;
    console.log(nodes);
    const links = link.source;
    console.log(links);
};

// Component
export const Node = ({ node, width, height, originData, sourceTargetIdLinksDict, setOriginData, link }: Props) => {
    const endNode = node.x + node.width > width - node.width;
    const size = width < height ? width : height;
    console.log(sourceTargetIdLinksDict);
    // Calculate Text Properties
    const textX = !endNode ? node.x + node.width : node.x;
    const textAnchor = !endNode ? 'start' : 'end';
    const textMargin = !endNode ? 4 : -4;
    const textTitleSize = Math.log(10) * 4;
    const textValueSize = (size / 100) * 1;
    const [clickdedLink, setClickedLink] = useState<SankeyLinkExtended>(link);
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

    return (
        //노드에 link와 같이 클릭시 노드에 있는 링크들만 보여주도록 표현.
        <NodePos>
            <rect x={node.x} y={node.y} width={node.width} height={node.value} fill={node.color} onClick={() => {}}>
                <title>{`${node.name}: ${node.value}`}</title>
            </rect>
            <g transform={`translate(${textXPosition} ${textYPosition})`}>
                <NodeName style={{ fontSize: node.value > 8 ? textTitleSize : textTitleSize, fontWeight: 550 }} textAnchor={textAnchor}>
                    {node.name}
                </NodeName>
            </g>
        </NodePos>
    );
};
