import { SankeyData } from '../types/sankey';

const YCC20: SankeyData = {
    nodes: [],

    links: [
        {
            source: 144,
            target: 7,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'YCC20_1',
        },
        {
            source: 144,
            target: 7,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'YCC20_2',
        },
        {
            source: 144,
            target: 11,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'YCC20_1',
        },
        {
            source: 144,
            target: 11,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'YCC20_4',
        },
        {
            source: 144,
            target: 9,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'YCC20_3',
        },
        {
            source: 7,
            target: 34,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'YCC20_1',
        },
        {
            source: 7,
            target: 48,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'YCC20_2',
        },
        {
            source: 7,
            target: 49,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'YCC20_2',
        },
        {
            source: 9,
            target: 36,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'YCC20_3',
        },
        {
            source: 11,
            target: 32,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'YCC20_4',
        },
        {
            source: 11,
            target: 34,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'YCC20_1',
        },
        {
            source: 11,
            target: 42,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'YCC20_4',
        },
        {
            source: 11,
            target: 45,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'YCC20_4',
        },
        {
            source: 11,
            target: 49,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'YCC20_4',
        },
        {
            source: 34,
            target: 70,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'YCC20_1',
        },
        {
            source: 48,
            target: 53,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'YCC20_2',
        },
        {
            source: 49,
            target: 53,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'YCC20_2',
        },
        {
            source: 49,
            target: 53,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'YCC20_4',
        },
        {
            source: 36,
            target: 53,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'YCC20_3',
        },
        {
            source: 32,
            target: 53,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'YCC20_4',
        },
        {
            source: 42,
            target: 53,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'YCC20_4',
        },
        {
            source: 45,
            target: 53,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'YCC20_4',
        },
        {
            source: 49,
            target: 53,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'YCC20_4',
        },
        {
            source: 53,
            target: 77,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'YCC20_4',
        },
        {
            source: 53,
            target: 78,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'YCC20_4',
        },
        {
            source: 53,
            target: 76,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'YCC20_4',
        },
        {
            source: 53,
            target: 81,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'YCC20_1',
        },
        {
            source: 53,
            target: 84,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'YCC20_2',
        },
        {
            source: 53,
            target: 84,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'YCC20_4',
        },
        {
            source: 70,
            target: 81,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'YCC20_1',
        },
    ],
    status: [
        {
            imgUrl: 'RYq4EGR.jpg',
        },
    ],
};

YCC20.links.forEach((link, index) => {
    link.paperName = 'YCC20';
    link.imgUrl = 'RYq4EGR.jpg';
    link.id = `YCC20-${index}`;
});

export { YCC20 };
