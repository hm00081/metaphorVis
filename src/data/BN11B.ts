import { SankeyData } from '../types/sankey';

const BN11B: SankeyData = {
    nodes: [],

    links: [
        {
            source: 149,
            target: 15,
            value: 1,
            valueid: 'repeb',
            process: 'BN11B_1',
        },
        {
            source: 149,
            target: 15,
            value: 1,
            valueid: 'repeb',
            process: 'BN11B_2',
        },
        {
            source: 149,
            target: 24,
            value: 1,
            valueid: 'repeb',
            process: 'BN11B_2',
        },
        {
            source: 149,
            target: 20,
            value: 1,
            valueid: 'repf',
            process: 'BN11B_3',
        },
        {
            source: 15,
            target: 40,
            value: 1,
            valueid: 'repeb',
            process: 'BN11B_1',
        },
        {
            source: 40,
            target: 59,
            value: 1,
            valueid: 'repeb',
            process: 'BN11B_1',
        },
        {
            source: 59,
            target: 81,
            value: 1,
            valueid: 'repeb',
            process: 'BN11B_1',
        },
        {
            source: 15,
            target: 49,
            value: 1,
            valueid: 'repeb',
            process: 'BN11B_2',
        },
        {
            source: 24,
            target: 49,
            value: 1,
            valueid: 'repeb',
            process: 'BN11B_2',
        },
        {
            source: 49,
            target: 75,
            value: 1,
            valueid: 'repeb',
            process: 'BN11B_2',
        },
        {
            source: 75,
            target: 98,
            value: 1,
            valueid: 'repeb',
            process: 'BN11B_2',
        },
        {
            source: 20,
            target: 40,
            value: 1,
            valueid: 'repf',
            process: 'BN11B_3',
        },
        {
            source: 20,
            target: 49,
            value: 1,
            valueid: 'repf',
            process: 'BN11B_3',
        },
        {
            source: 40,
            target: 60,
            value: 1,
            valueid: 'repf',
            process: 'BN11B_3',
        },
        {
            source: 49,
            target: 60,
            value: 1,
            valueid: 'repf',
            process: 'BN11B_3',
        },
        {
            source: 60,
            target: 77,
            value: 1,
            valueid: 'repf',
            process: 'BN11B_3',
        },
    ],

    status: [{ paperName: 'BN11B', imgUrl: 'PfZa19T.jpg' }],
};

BN11B.links.forEach((link, index) => {
    link.paperName = 'BN11B';
    link.id = `BN11B-${index}`;
    link.imgUrl = 'PfZa19T.jpg';
});

export { BN11B };
