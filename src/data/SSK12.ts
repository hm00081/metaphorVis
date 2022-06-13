import { SankeyData } from '../types/sankey';

const SSK12: SankeyData = {
    nodes: [],

    links: [
        {
            source: 130,
            target: 1,
            value: 1,
            valueid: 'repf',
            process: 'SSK12_1',
        },
        {
            source: 130,
            target: 3,
            value: 1,
            valueid: 'repf',
            process: 'SSK12_1',
        },
        {
            source: 130,
            target: 11,
            value: 1,
            valueid: 'repf',
            process: 'SSK12_1',
        },
        {
            source: 130,
            target: 13,
            value: 1,
            valueid: 'repf',
            process: 'SSK12_1',
        },
        {
            source: 130,
            target: 23,
            value: 1,
            valueid: 'repf',
            process: 'SSK12_2',
        },
        {
            source: 130,
            target: 24,
            value: 1,
            valueid: 'repg',
            process: 'SSK12_3',
        },
        {
            source: 1,
            target: 39,
            value: 1,
            valueid: 'repf',
            process: 'SSK12_1',
        },
        {
            source: 3,
            target: 39,
            value: 1,
            valueid: 'repf',
            process: 'SSK12_1',
        },
        {
            source: 11,
            target: 39,
            value: 1,
            valueid: 'repf',
            process: 'SSK12_1',
        },
        {
            source: 13,
            target: 39,
            value: 1,
            valueid: 'repf',
            process: 'SSK12_1',
        },
        {
            source: 23,
            target: 46,
            value: 1,
            valueid: 'repf',
            process: 'SSK12_2',
        },
        {
            source: 24,
            target: 46,
            value: 1,
            valueid: 'repg',
            process: 'SSK12_3',
        },
        {
            source: 39,
            target: 60,
            value: 1,
            valueid: 'repf',
            process: 'SSK12_1',
        },
        {
            source: 46,
            target: 68,
            value: 1,
            valueid: 'repg',
            process: 'SSK12_3',
        },
        {
            source: 46,
            target: 60,
            value: 1,
            valueid: 'repf',
            process: 'SSK12_2',
        },
        {
            source: 60,
            target: 77,
            value: 1,
            valueid: 'repf',
            process: 'SSK12_2',
        },
        {
            source: 60,
            target: 78,
            value: 1,
            valueid: 'repf',
            process: 'SSK12_1',
        },
        {
            source: 60,
            target: 80,
            value: 1,
            valueid: 'repf',
            process: 'SSK12_2',
        },
        {
            source: 60,
            target: 81,
            value: 2,
            valueid: 'repf',
            process: 'SSK12_2',
        },
        {
            source: 60,
            target: 85,
            value: 1,
            valueid: 'repf',
            process: 'SSK12_1',
        },
        {
            source: 68,
            target: 98,
            value: 1,
            valueid: 'repg',
            process: 'SSK12_3',
        },
    ],
    status: [
        {
            status: 'RepF',
        },
    ],
};

SSK12.links.forEach((link, index) => {
    link.paperName = 'SSK12';
    link.id = `SSK12-${index}`;
});

export { SSK12 };
