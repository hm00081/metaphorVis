import { SankeyData } from '../types/sankey';

const MA16: SankeyData = {
    nodes: [],

    links: [
        {
            source: 119,
            target: 11,
            value: 1,
            valueid: 'targetca',
            process: 'MA16_1',
        },
        {
            source: 119,
            target: 11,
            value: 1,
            valueid: ['targetca', 'repg'],
            process: 'MA16_2',
        },
        {
            source: 119,
            target: 16,
            value: 1,
            valueid: 'targetca',
            process: 'MA16_3',
        },
        {
            source: 119,
            target: 21,
            value: 1,
            valueid: 'repg',
            process: 'MA16_4',
        },
        {
            source: 119,
            target: 27,
            value: 1,
            valueid: 'repg',
            process: 'MA16_4',
        },
        {
            source: 119,
            target: 30,
            value: 1,
            process: 'MA16_5',
        },
        {
            source: 11,
            target: 39,
            value: 1,
            valueid: 'targetca',
            process: 'MA16_1',
        },
        {
            source: 11,
            target: 39,
            value: 1,
            valueid: ['targetca', 'repg'],
            process: 'MA16_2',
        },
        {
            source: 16,
            target: 48,
            value: 1,
            valueid: 'targetca',
            process: 'MA16_3',
        },
        {
            source: 21,
            target: 46,
            value: 1,
            valueid: 'repg',
            process: 'MA16_4',
        },
        {
            source: 27,
            target: 46,
            value: 1,
            valueid: 'repg',
            process: 'MA16_4',
        },
        {
            source: 30,
            target: 46,
            value: 1,
            process: 'MA16_5',
        },
        {
            source: 39,
            target: 67,
            value: 1,
            valueid: 'targetca',
            process: 'MA16_1',
        },
        {
            source: 39,
            target: 68,
            value: 1,
            valueid: ['targetca', 'repg'],
            process: 'MA16_2',
        },
        {
            source: 48,
            target: 67,
            value: 1,
            valueid: 'targetca',
            process: 'MA16_3',
        },
        {
            source: 46,
            target: 66,
            value: 1,
            process: 'MA16_5',
        },
        {
            source: 46,
            target: 68,
            value: 1,
            valueid: 'repg',
            process: 'MA16_4',
        },
        {
            source: 46,
            target: 74,
            value: 1,
            process: 'MA16_5',
        },
        {
            source: 68,
            target: 77,
            value: 1,
            valueid: ['targetca', 'repg'],
            process: 'MA16_2',
        },
        {
            source: 68,
            target: 82,
            value: 1,
            valueid: 'repg',
            process: 'MA16_4',
        },
        {
            source: 67,
            target: 83,
            value: 1,
            valueid: 'targetca',
            process: 'MA16_1',
        },
        {
            source: 67,
            target: 92,
            value: 1,
            valueid: 'targetca',
            process: 'MA16_1',
        },
        {
            source: 67,
            target: 92,
            value: 1,
            valueid: 'targetca',
            process: 'MA16_3',
        },
        {
            source: 74,
            target: 98,
            value: 1,
            process: 'MA16_5',
        },
        {
            source: 66,
            target: 98,
            value: 1,
            process: 'MA16_5',
        },
    ],
    status: [
        {
            imgUrl: '69BWuDV.png',
        },
    ],
};

MA16.links.forEach((link, index) => {
    link.paperName = 'MA16';
    link.imgUrl = '69BWuDV.png';
    link.id = `MA16-${index}`;
});

export { MA16 };
