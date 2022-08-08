import { SankeyData } from '../types/sankey';

const FA20: SankeyData = {
    nodes: [],

    links: [
        {
            source: 151,
            target: 11,
            value: 1,
            valueid: ['repea', 'targetba', 'targetbb'],
            process: 'FA20_1',
        },
        {
            source: 151,
            target: 12,
            value: 1,
            valueid: ['repea', 'targetba', 'targetbb'],
            process: 'FA20_1',
        },
        {
            source: 151,
            target: 13,
            value: 1,
            valueid: ['repea', 'targetba', 'targetbb'],
            process: 'FA20_1',
        },
        {
            source: 151,
            target: 14,
            value: 1,
            valueid: ['repea', 'targetba', 'targetbb'],
            process: 'FA20_1',
        },
        {
            source: 151,
            target: 15,
            value: 1,
            valueid: ['repea', 'targetba', 'targetbb'],
            process: 'FA20_1',
        },
        {
            source: 151,
            target: 16,
            value: 1,
            valueid: ['repea', 'targetba', 'targetbb'],
            process: 'FA20_2',
        },
        {
            source: 11,
            target: 49,
            value: 1,
            valueid: ['repea', 'targetba', 'targetbb'],
            process: 'FA20_1',
        },
        {
            source: 12,
            target: 49,
            value: 1,
            valueid: ['repea', 'targetba', 'targetbb'],
            process: 'FA20_1',
        },
        {
            source: 13,
            target: 49,
            value: 1,
            valueid: ['repea', 'targetba', 'targetbb'],
            process: 'FA20_1',
        },
        {
            source: 14,
            target: 49,
            value: 1,
            valueid: ['repea', 'targetba', 'targetbb'],
            process: 'FA20_1',
        },
        {
            source: 15,
            target: 49,
            value: 1,
            valueid: ['repea', 'targetba', 'targetbb'],
            process: 'FA20_1',
        },
        {
            source: 11,
            target: 41,
            value: 1,
            valueid: ['repea', 'targetba', 'targetbb'],
            process: 'FA20_1',
        },
        {
            source: 12,
            target: 41,
            value: 1,
            valueid: ['repea', 'targetba', 'targetbb'],
            process: 'FA20_1',
        },
        {
            source: 13,
            target: 41,
            value: 1,
            valueid: ['repea', 'targetba', 'targetbb'],
            process: 'FA20_1',
        },
        {
            source: 14,
            target: 41,
            value: 1,
            valueid: ['repea', 'targetba', 'targetbb'],
            process: 'FA20_1',
        },
        {
            source: 15,
            target: 41,
            value: 1,
            valueid: ['repea', 'targetba', 'targetbb'],
            process: 'FA20_1',
        },
        {
            source: 16,
            target: 41,
            value: 1,
            valueid: ['repea', 'targetba', 'targetbb'],
            process: 'FA20_2',
        },
        {
            source: 41,
            target: 59,
            value: 1,
            valueid: ['repea', 'targetba', 'targetbb'],
            process: 'FA20_1',
        },
        {
            source: 41,
            target: 59,
            value: 1,
            valueid: ['repea', 'targetba', 'targetbb'],
            process: 'FA20_2',
        },
        {
            source: 49,
            target: 59,
            value: 1,
            valueid: ['repea', 'targetba', 'targetbb'],
            process: 'FA20_1',
        },
        {
            source: 59,
            target: 77,
            value: 1,
            valueid: ['repea', 'targetba', 'targetbb'],
            process: 'FA20_1',
        },
        {
            source: 59,
            target: 77,
            value: 1,
            valueid: ['repea', 'targetba', 'targetbb'],
            process: 'FA20_2',
        },
    ],

    status: [
        {
            paperName: 'FA20',
            imgUrl: '2VPQbry.jpg',
        },
    ],
};

FA20.links.forEach((link, index) => {
    link.paperName = 'FA20';
    link.imgUrl = '2VPQbry.jpg';
    link.id = `FA20-${index}`;
});

export { FA20 };
