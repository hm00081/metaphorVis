import { SankeyData } from '../types/sankey';

const ASTC06: SankeyData = {
    nodes: [],

    links: [
        {
            source: 154,
            target: 14,
            value: 1,
            valueid: 'repf',
        },
        {
            source: 154,
            target: 14,
            value: 2,
            valueid: 'repeb',
        },
        {
            source: 154,
            target: 15,
            value: 1,
            valueid: 'repf',
        },
        {
            source: 154,
            target: 15,
            value: 2,
            valueid: 'repeb',
        },
        {
            source: 154,
            target: 16,
            value: 1,
            valueid: 'repf',
        },
        {
            source: 154,
            target: 24,
            value: 1,
            valueid: 'repeb',
        },
        {
            source: 14,
            target: 43,
            value: 1,
            valueid: 'repeb',
        },
        {
            source: 14,
            target: 43,
            value: 1,
            valueid: 'repf',
        },
        {
            source: 15,
            target: 43,
            value: 1,
            valueid: 'repeb',
        },
        {
            source: 15,
            target: 43,
            value: 1,
            valueid: 'repf',
        },
        {
            source: 14,
            target: 49,
            value: 1,
            valueid: 'repeb',
        },
        {
            source: 15,
            target: 49,
            value: 1,
            valueid: 'repeb',
        },
        {
            source: 16,
            target: 43,
            value: 1,
            valueid: 'repf',
        },
        {
            source: 24,
            target: 46,
            value: 1,
            valueid: 'repeb',
        },
        {
            source: 43,
            target: 59,
            value: 1,
            valueid: 'repeb',
        },
        {
            source: 43,
            target: 60,
            value: 2,
            valueid: 'repf',
        },
        {
            source: 49,
            target: 56,
            value: 1,
            valueid: 'repeb',
        },
        {
            source: 49,
            target: 70,
            value: 1,
            valueid: 'repeb',
        },
        {
            source: 46,
            target: 56,
            value: 1,
            valueid: 'repeb',
        },
        {
            source: 46,
            target: 70,
            value: 1,
            valueid: 'repeb',
        },
        {
            source: 59,
            target: 77,
            value: 1,
            valueid: 'repeb',
        },
        {
            source: 59,
            target: 83,
            value: 1,
            valueid: 'repeb',
        },
        {
            source: 60,
            target: 76,
            value: 2,
            valueid: 'repf',
        },
        {
            source: 60,
            target: 77,
            value: 2,
            valueid: 'repf',
        },
        {
            source: 56,
            target: 77,
            value: 2,
            valueid: 'repeb',
        },
        {
            source: 56,
            target: 83,
            value: 2,
            valueid: 'repeb',
        },
        {
            source: 56,
            target: 98,
            value: 2,
            valueid: 'repeb',
        },
        {
            source: 70,
            target: 77,
            value: 2,
            valueid: 'repeb',
        },
        {
            source: 70,
            target: 83,
            value: 2,
            valueid: 'repeb',
        },
        {
            source: 70,
            target: 98,
            value: 2,
            valueid: 'repeb',
        },
    ],

    status: [],
};

ASTC06.links.forEach((link, index) => {
    link.paperName = 'ASTC06';
    link.id = `ASTC06-${index}`;
});

export { ASTC06 };
