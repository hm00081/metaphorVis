import { SankeyData } from '../types/sankey';

const LWW13: SankeyData = {
    nodes: [],

    links: [
        {
            source: 118,
            target: 9,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'LWW13_1',
        },
        {
            source: 118,
            target: 11,
            value: 1,
            valueid: ['targetab', 'repc'],
            process: 'LWW13_2',
        },
        {
            source: 118,
            target: 11,
            value: 1,
            valueid: ['targetab', 'repc'],
            process: 'LWW13_3',
        },
        {
            source: 118,
            target: 13,
            value: 1,
            valueid: ['targetab', 'repc'],
            process: 'LWW13_2',
        },
        {
            source: 118,
            target: 16,
            value: 1,
            valueid: ['targetab', 'repc'],
            process: 'LWW13_4',
        },
        {
            source: 118,
            target: 17,
            value: 1,
            valueid: ['targetab', 'repc'],
            process: 'LWW13_4',
        },
        {
            source: 118,
            target: 18,
            value: 1,
            valueid: ['targetab', 'repc'],
            process: 'LWW13_4',
        },
        {
            source: 118,
            target: 22,
            value: 1,
            valueid: 'repc',
            process: 'LWW13_5',
        },
        {
            source: 9,
            target: 36,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'LWW13_1',
        },
        {
            source: 9,
            target: 40,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'LWW13_1',
        },
        {
            source: 40,
            target: 53,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'LWW13_1',
        },
        {
            source: 11,
            target: 35,
            value: 1,
            valueid: ['targetab', 'repc'],
            process: 'LWW13_2',
        },
        {
            source: 13,
            target: 35,
            value: 1,
            valueid: ['targetab', 'repc'],
            process: 'LWW13_2',
        },
        {
            source: 11,
            target: 49,
            value: 1,
            valueid: ['targetab', 'repc'],
            process: 'LWW13_3',
        },
        {
            source: 16,
            target: 49,
            value: 1,
            valueid: ['targetab', 'repc'],
            process: 'LWW13_4',
        },
        {
            source: 17,
            target: 49,
            value: 1,
            valueid: ['targetab', 'repc'],
            process: 'LWW13_4',
        },
        {
            source: 18,
            target: 49,
            value: 1,
            valueid: ['targetab', 'repc'],
            process: 'LWW13_4',
        },
        {
            source: 35,
            target: 53,
            value: 1,
            valueid: ['targetab', 'repc'],
            process: 'LWW13_2',
        },
        {
            source: 36,
            target: 53,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'LWW13_1',
        },
        {
            source: 49,
            target: 53,
            value: 1,
            valueid: ['targetab', 'repc'],
            process: 'LWW13_3',
        },
        {
            source: 49,
            target: 53,
            value: 1,
            valueid: ['targetab', 'repc'],
            process: 'LWW13_4',
        },
        {
            source: 46,
            target: 70,
            value: 1,
            valueid: 'repc',
            process: 'LWW13_5',
        },
        {
            source: 53,
            target: 77,
            value: 1,
            valueid: ['targetab', 'repc'],
            process: 'LWW13_2',
        },
        {
            source: 53,
            target: 77,
            value: 1,
            valueid: ['targetab', 'repc'],
            process: 'LWW13_4',
        },
        {
            source: 53,
            target: 78,
            value: 1,
            valueid: ['targetab', 'repc'],
            process: 'LWW13_3',
        },
        {
            source: 53,
            target: 79,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'LWW13_1',
        },
        {
            source: 53,
            target: 79,
            value: 1,
            valueid: ['targetab', 'repc'],
            process: 'LWW13_2',
        },
        {
            source: 53,
            target: 79,
            value: 1,
            valueid: ['targetab', 'repc'],
            process: 'LWW13_3',
        },
        {
            source: 53,
            target: 80,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'LWW13_1',
        },
        {
            source: 53,
            target: 80,
            value: 1,
            valueid: ['targetab', 'repc'],
            process: 'LWW13_3',
        },
        {
            source: 70,
            target: 98,
            value: 1,
            valueid: 'repc',
            process: 'LWW13_5',
        },
    ],

    status: [
        {
            status: 'TargetAB',
        },
        {
            status: 'RepC',
        },
    ],
};

LWW13.links.forEach((link, index) => {
    link.paperName = 'LWW13';
    link.id = `LWW13-${index}`;
});

export { LWW13 };
