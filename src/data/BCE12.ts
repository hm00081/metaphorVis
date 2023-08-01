import { SankeyData } from '../types/sankey';

const BCE12: SankeyData = {
    nodes: [],

    links: [
        {
            source: 165,
            target: 11,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'BCE12_1',
        },
        {
            source: 11,
            target: 35,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'BCE12_1',
        },
        {
            source: 35,
            target: 55,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'BCE12_1',
        },
        {
            source: 55,
            target: 77,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'BCE12_1',
        },
        {
            source: 55,
            target: 78,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'BCE12_1',
        },
        {
            source: 55,
            target: 80,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'BCE12_1',
        },
        {
            source: 55,
            target: 85,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'BCE12_1',
        },
        {
            source: 165,
            target: 11,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'BCE12_2',
        },
        {
            source: 11,
            target: 45,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'BCE12_2',
        },
        {
            source: 45,
            target: 55,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'BCE12_2',
        },
        {
            source: 55,
            target: 77,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'BCE12_2',
        },
        {
            source: 55,
            target: 78,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'BCE12_2',
        },
        {
            source: 55,
            target: 80,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'BCE12_2',
        },
        {
            source: 55,
            target: 85,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'BCE12_2',
        },
        {
            source: 165,
            target: 12,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'BCE12_3',
        },
        {
            source: 12,
            target: 35,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'BCE12_3',
        },
        {
            source: 35,
            target: 55,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'BCE12_3',
        },
        {
            source: 55,
            target: 77,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'BCE12_3',
        },
        {
            source: 55,
            target: 78,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'BCE12_3',
        },
        {
            source: 55,
            target: 80,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'BCE12_3',
        },
        {
            source: 55,
            target: 85,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'BCE12_3',
        },
        {
            source: 165,
            target: 12,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'BCE12_4',
        },
        {
            source: 12,
            target: 35,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'BCE12_4',
        },
        {
            source: 35,
            target: 55,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'BCE12_4',
        },
        {
            source: 55,
            target: 77,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'BCE12_4',
        },
        {
            source: 55,
            target: 78,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'BCE12_4',
        },
        {
            source: 55,
            target: 80,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'BCE12_4',
        },
        {
            source: 55,
            target: 85,
            value: 1,
            valueid: ['targetca', 'repc'],
            process: 'BCE12_4',
        },
    ],
    status: [
        {
            paperName: 'BCE12',
            imgUrl: 'Ak8KSur.jpg',
        },
    ],
};

BCE12.links.forEach((link, index) => {
    link.paperName = 'BCE12';
    link.imgUrl = 'Ak8KSur.jpg';
    link.id = `BCE12-${index}`;
    link.cluster = 'debatelist';
});

export { BCE12 };
