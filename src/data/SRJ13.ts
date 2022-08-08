import { SankeyData } from '../types/sankey';

const SRJ13: SankeyData = {
    nodes: [],

    links: [
        {
            source: 138,
            target: 11,
            value: 1,
            valueid: ['repd ', 'targetca'],
            process: 'SRJ13_1',
        },
        {
            source: 138,
            target: 11,
            value: 1,
            valueid: ['repd ', 'targetca'],
            process: 'SRJ13_2',
        },
        {
            source: 138,
            target: 16,
            value: 1,
            valueid: ['repd ', 'targetca'],
            process: 'SRJ13_2',
        },
        {
            source: 138,
            target: 24,
            value: 1,
            process: 'SRJ13_3',
        },
        {
            source: 11,
            target: 39,
            value: 1,
            valueid: ['repd ', 'targetca'],
            process: 'SRJ13_1',
        },
        {
            source: 11,
            target: 49,
            value: 1,
            valueid: ['repd ', 'targetca'],
            process: 'SRJ13_2',
        },
        {
            source: 16,
            target: 49,
            value: 1,
            valueid: ['repd ', 'targetca'],
            process: 'SRJ13_2',
        },
        {
            source: 24,
            target: 49,
            value: 1,
            process: 'SRJ13_3',
        },
        {
            source: 39,
            target: 55,
            value: 1,
            valueid: ['repd ', 'targetca'],
            process: 'SRJ13_1',
        },
        {
            source: 49,
            target: 55,
            value: 1,
            valueid: ['repd ', 'targetca'],
            process: 'SRJ13_2',
        },
        {
            source: 49,
            target: 70,
            value: 1,
            process: 'SRJ13_3',
        },
        {
            source: 55,
            target: 79,
            value: 1,
            valueid: ['repd ', 'targetca'],
            process: 'SRJ13_1',
        },
        {
            source: 55,
            target: 79,
            value: 1,
            valueid: ['repd ', 'targetca'],
            process: 'SRJ13_2',
        },
        {
            source: 70,
            target: 88,
            value: 1,
            process: 'SRJ13_3',
        },
    ],

    status: [
        {
            paperName: 'SRJ13',
            imgUrl: 'kgWl7nV.png',
        },
    ],
};

SRJ13.links.forEach((link, index) => {
    link.paperName = 'SRJ13';
    link.imgUrl = 'kgWl7nV.png';
    link.id = `SRJ13-${index}`;
});

export { SRJ13 };
