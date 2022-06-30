import { NumberLike } from '@visx/scale';

export type SankeyNodeMinimal = Record<string, unknown>;
export type SankeyLinkMinimal = {
    source?: number;
    target?: number;
    value: number;
    valueid?: string | null | Array<string>;
    process?: string | number | undefined;
    overlapid?: string | null;
};
export type SankeyStatusMinimal = {
    status: string | number | number[];
};

export type SankeyNode = SankeyNodeMinimal & {
    name?: string;
    type?: string | number;
    origin?: string;
    subtype?: string | number;
    description?: string;
    color?: string;
    subcolor?: string;
    pattern?: string;
    link?: SankeyLink[];
    number?: number;
};

export type SankeyLink = SankeyLinkMinimal & {
    source: number;
    target: number;
    value: number;
    type?: string;
    subtype?: string;
    status?: string | null;
    valueid?: string | null | Array<string>;
    process?: string | number | undefined;
    overlapid?: string | null;
    color?: LinkColor;
    subcolor?: LinkColor;
    path?: string;
    sourceNodeYPosition?: number;
    paperName?: string;
    category?: string;
    id?: string;
};

export type LinkColor =
    | 'grayLinkColor'
    | 'grayDarkLinkColor'
    | 'blueLinkColor'
    | 'blueLightLinkColor'
    | 'greenLinkColor'
    | 'greenLightLinkColor'
    | 'redLinkColor'
    | 'orangeLinkColor'
    | 'rubyLinkColor'
    | 'blackLinkColor'
    | 'targetLinkColor'
    | 'targetLinkOneColor'
    | 'targetLinkTwoColor'
    | 'targetLinkThreeColor'
    | 'targetLinkFourColor'
    | 'intOneLinkColor'
    | 'intOneLightLinkColor'
    | 'intOneLight2LinkColor'
    | 'intTwoLinkColor'
    | 'intTwoLightLinkColor'
    | 'intThreeLinkColor'
    | 'intThreeLightLinkColor'
    | 'intFourLinkColor'
    | 'intFiveLinkColor'
    | 'intFiveLightLinkColor'
    | 'intFiveLight2LinkColor'
    | 'repVisVarColor'
    | 'repVisTechColor';

export type SankeyNodeExtended = SankeyNode & {
    index: number;
    input: number;
    output: number;
    value: number;
    x: number;
    y: number;
    width: number;
    height: number;
    link: SankeyLinkExtended;
    hover?: undefined;
    sourceLink: SankeyLinkExtended;
    targetLink: SankeyLinkExtended;
    hassourceLink: number;
    hastargetLink: number;
};

export type SankeyLinkExtended = SankeyLink & {
    sourceNode: SankeyNodeExtended;
    targetNode: SankeyNodeExtended;
    overlapid?: string | null;
    breadth: number;
    status?: string | null;
    path: string;
    sourceNodeYPosition: number;
    targetNodeYPosition: number;
    color?: string;
    subcolor?: string;
};

export type SankeyStatus = {
    status: string | number | boolean;
    // status: string | number | number[];
};

export type WordType = {
    type: string;
};

export type Word = {
    word: string;
};

export type WordText = {
    word: string;
};

export interface WordCloudData {
    words: WordText[] | string;
    types: WordType[];
}

export interface SankeyData {
    nodes: SankeyNode[];
    links: SankeyLink[];
    status: SankeyStatus[];
    positionStatus?: 'init' | 'clicked';
    // word: SankeyWord[] | null;
}
