import { SankeyData } from '../types/sankey';

const KWL09: SankeyData = {
    nodes: [],

    links: [
        {
            source: 148,
            target: 9,
            value: 1,
            valueid: 'repeb',
            process: 'KWL09_1',
        },
        {
            source: 148,
            target: 12,
            value: 1,
            valueid: 'repeb',
            process: 'KWL09_2',
        },
        {
            source: 9,
            target: 36,
            value: 1,
            valueid: 'repeb',
            process: 'KWL09_1',
        },
        {
            source: 36,
            target: 59,
            value: 1,
            valueid: 'repeb',
            process: 'KWL09_1',
        },
        {
            source: 59,
            target: 76,
            value: 1,
            valueid: 'repeb',
            process: 'KWL09_1',
        },
        {
            source: 59,
            target: 77,
            value: 1,
            valueid: 'repeb',
            process: 'KWL09_1',
        },
        {
            source: 59,
            target: 80,
            value: 1,
            valueid: 'repeb',
            process: 'KWL09_1',
        },
        {
            source: 59,
            target: 95,
            value: 1,
            valueid: 'repeb',
            process: 'KWL09_1',
        },
        {
            source: 12,
            target: 43,
            value: 1,
            valueid: 'repeb',
            process: 'KWL09_2',
        },
        {
            source: 43,
            target: 59,
            value: 1,
            valueid: 'repeb',
            process: 'KWL09_2',
        },
        {
            source: 59,
            target: 77,
            value: 1,
            valueid: 'repeb',
            process: 'KWL09_2',
        },
    ],
    status: [
        {
            imgUrl: 'ukgueox.jpg',
        },
    ],
};

KWL09.links.forEach((link, index) => {
    link.paperName = 'KWL09';
    link.imgUrl = 'ukgueox.jpg';
    link.id = `KWL09-${index}`;
});

export { KWL09 };
