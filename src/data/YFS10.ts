import { SankeyData } from '../types/sankey';

const YFS10: SankeyData = {
    nodes: [],

    links: [
        {
            source: 135,
            target: 11,
            value: 1,
            valueid: ['repea', 'targetbb'],
            process: 'YFS10_1',
        },
        {
            source: 11,
            target: 34,
            value: 1,
            valueid: ['repea', 'targetbb'],
            process: 'YFS10_1',
        },
        {
            source: 11,
            target: 45,
            value: 1,
            valueid: ['repea', 'targetbb'],
            process: 'YFS10_1',
        },
        {
            source: 34,
            target: 59,
            value: 1,
            valueid: ['repea', 'targetbb'],
            process: 'YFS10_1',
        },
        {
            source: 45,
            target: 59,
            value: 1,
            valueid: ['repea', 'targetbb'],
            process: 'YFS10_1',
        },
        {
            source: 59,
            target: 76,
            value: 1,
            valueid: ['repea', 'targetbb'],
            process: 'YFS10_1',
        },
        {
            source: 59,
            target: 78,
            value: 1,
            valueid: ['repea', 'targetbb'],
            process: 'YFS10_1',
        },
        {
            source: 59,
            target: 92,
            value: 1,
            valueid: ['repea', 'targetbb'],
            process: 'YFS10_1',
        },
        {
            source: 135,
            target: 12,
            value: 1,
            valueid: ['repea', 'targetbb'],
            process: 'YFS10_2',
        },
        {
            source: 12,
            target: 34,
            value: 1,
            valueid: ['repea', 'targetbb'],
            process: 'YFS10_2',
        },
        {
            source: 12,
            target: 45,
            value: 1,
            valueid: ['repea', 'targetbb'],
            process: 'YFS10_2',
        },
        {
            source: 34,
            target: 59,
            value: 1,
            valueid: ['repea', 'targetbb'],
            process: 'YFS10_2',
        },
        {
            source: 45,
            target: 59,
            value: 1,
            valueid: ['repea', 'targetbb'],
            process: 'YFS10_2',
        },
        {
            source: 59,
            target: 76,
            value: 1,
            valueid: ['repea', 'targetbb'],
            process: 'YFS10_2',
        },
        {
            source: 59,
            target: 78,
            value: 1,
            valueid: ['repea', 'targetbb'],
            process: 'YFS10_2',
        },
        {
            source: 59,
            target: 92,
            value: 1,
            valueid: ['repea', 'targetbb'],
            process: 'YFS10_2',
        },
        {
            source: 135,
            target: 16,
            value: 1,
            valueid: ['repf', 'targetbb'],
            process: 'YFS10_3',
        },
        {
            source: 16,
            target: 45,
            value: 1,
            valueid: ['repf', 'targetbb'],
            process: 'YFS10_3',
        },
        {
            source: 45,
            target: 60,
            value: 1,
            valueid: ['repf', 'targetbb'],
            process: 'YFS10_3',
        },
        {
            source: 60,
            target: 77,
            value: 1,
            valueid: ['repf', 'targetbb'],
            process: 'YFS10_3',
        },
        {
            source: 60,
            target: 86,
            value: 1,
            valueid: ['repf', 'targetbb'],
            process: 'YFS10_3',
        },
        {
            source: 60,
            target: 94,
            value: 1,
            valueid: ['repf', 'targetbb'],
            process: 'YFS10_3',
        },
        {
            source: 135,
            target: 16,
            value: 1,
            valueid: ['repea', 'targetbb'],
            process: 'YFS10_4',
        },
        {
            source: 16,
            target: 45,
            value: 1,
            valueid: ['repea', 'targetbb'],
            process: 'YFS10_4',
        },
        {
            source: 45,
            target: 59,
            value: 1,
            valueid: ['repea', 'targetbb'],
            process: 'YFS10_4',
        },
        {
            source: 59,
            target: 77,
            value: 1,
            valueid: ['repea', 'targetbb'],
            process: 'YFS10_4',
        },
        {
            source: 135,
            target: 24,
            value: 1,
            valueid: 'repf',
            process: 'YFS10_5',
        },
        {
            source: 24,
            target: 46,
            value: 1,
            valueid: 'repf',
            process: 'YFS10_5',
        },
        {
            source: 46,
            target: 60,
            value: 1,
            valueid: 'repf',
            process: 'YFS10_5',
        },
        {
            source: 60,
            target: 98,
            value: 1,
            valueid: 'repf',
            process: 'YFS10_5',
        },
    ],
    status: [
        {
            imgUrl: '',
        },
    ],
};

YFS10.links.forEach((link, index) => {
    link.paperName = 'YFS10';
    link.imgUrl = 'A14dGOk.png';
    link.id = `YFS10-${index}`;
});

export { YFS10 };
