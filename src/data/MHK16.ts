import { SankeyData } from '../types/sankey';

const MHK16: SankeyData = {
    nodes: [],

    links: [
        {
            source: 122,
            target: 11,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'MHK16_1',
        },
        {
            source: 122,
            target: 12,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'MHK16_1',
        },
        {
            source: 11,
            target: 39,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'MHK16_1',
        },
        {
            source: 12,
            target: 39,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'MHK16_1',
        },
        {
            source: 11,
            target: 45,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'MHK16_1',
        },
        {
            source: 12,
            target: 45,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'MHK16_1',
        },
        {
            source: 11,
            target: 49,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'MHK16_1',
        },
        {
            source: 12,
            target: 49,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'MHK16_1',
        },
        {
            source: 39,
            target: 53,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'MHK16_1',
        },
        {
            source: 45,
            target: 53,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'MHK16_1',
        },
        {
            source: 49,
            target: 53,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'MHK16_1',
        },
        {
            source: 53,
            target: 76,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'MHK16_1',
        },
        {
            source: 53,
            target: 77,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'MHK16_1',
        },
        {
            source: 53,
            target: 78,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'MHK16_1',
        },
        {
            source: 53,
            target: 80,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'MHK16_1',
        },
        {
            source: 53,
            target: 84,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'MHK16_1',
        },
    ],
    status: [
        {
            imgUrl: 'Ak8KSur.jpg',
        },
    ],
};

MHK16.links.forEach((link, index) => {
    link.paperName = 'MHK16';
    link.imgUrl = 'Ak8KSur.jpg';
    link.id = `MHK16-${index}`;
});

export { MHK16 };
