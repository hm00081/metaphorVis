import { SankeyData } from '../types/sankey';

const GGS12TPS: SankeyData = {
    nodes: [],

    links: [
        {
            source: 109,
            target: 12,
            value: 1,
            valueid: 'targetbb',
            process: 'GGS12TPS_1',
        },
        {
            source: 109,
            target: 16,
            value: 1,
            valueid: 'targetbb',
            process: 'GGS12TPS_2',
        },
        {
            source: 109,
            target: 24,
            value: 1,
            process: 'GGS12TPS_3',
        },
        {
            source: 12,
            target: 42,
            value: 1,
            valueid: 'targetbb',
            process: 'GGS12TPS_1',
        },
        {
            source: 16,
            target: 43,
            value: 1,
            valueid: 'targetbb',
            process: 'GGS12TPS_2',
        },
        {
            source: 24,
            target: 46,
            value: 1,
            process: 'GGS12TPS_3',
        },
        {
            source: 42,
            target: 64,
            value: 1,
            valueid: 'targetbb',
            process: 'GGS12TPS_1',
        },
        {
            source: 43,
            target: 64,
            value: 1,
            valueid: 'targetbb',
            process: 'GGS12TPS_2',
        },
        {
            source: 46,
            target: 75,
            value: 1,
            process: 'GGS12TPS_3',
        },
        {
            source: 64,
            target: 77,
            value: 1,
            valueid: 'targetbb',
            process: 'GGS12TPS_1',
        },
        {
            source: 64,
            target: 79,
            value: 1,
            valueid: 'targetbb',
            process: 'GGS12TPS_1',
        },
        {
            source: 64,
            target: 79,
            value: 1,
            valueid: 'targetbb',
            process: 'GGS12TPS_2',
        },
        {
            source: 75,
            target: 98,
            value: 1,
            process: 'GGS12TPS_3',
        },
    ],
    status: [
        {
            imgUrl: 'au5KByH.png',
        },
    ],
};

GGS12TPS.links.forEach((link, index) => {
    link.paperName = 'GGS12TPS';
    link.imgUrl = 'au5KByH.png';
    link.id = `GGS12TPS-${index}`;
});

export { GGS12TPS };
