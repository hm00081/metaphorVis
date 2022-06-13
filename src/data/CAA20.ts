import { SankeyData } from '../types/sankey';

const CAA20: SankeyData = {
    nodes: [],

    links: [
        {
            source: 100,
            target: 9,
            value: 1,
            valueid: ['repeb', 'targetaa'],
            process: 'CAA20_1',
        },
        {
            source: 100,
            target: 11,
            value: 1,
            valueid: ['repeb', 'targetaa'],
            process: 'CAA20_2',
        },
        {
            source: 100,
            target: 11,
            value: 1,
            valueid: ['repeb', 'targetaa'],
            process: 'CAA20_3',
        },
        {
            source: 100,
            target: 11,
            value: 1,
            valueid: ['repb', 'targetaa'],
            process: 'CAA20_4',
        },
        {
            source: 100,
            target: 12,
            value: 1,
            valueid: ['repb', 'targetaa'],
            process: 'CAA20_5',
        },
        {
            source: 100,
            target: 24,
            value: 1,
            valueid: 'repeb',
            process: 'CAA20_6',
        },
        {
            source: 100,
            target: 24,
            value: 1,
            valueid: 'repb',
            process: 'CAA20_7',
        },

        {
            source: 9,
            target: 36,
            value: 1,
            valueid: ['repeb', 'targetaa'],
            process: 'CAA20_1',
        },
        {
            source: 11,
            target: 35,
            value: 1,
            valueid: ['repeb', 'targetaa'],
            process: 'CAA20_2',
        },
        {
            source: 11,
            target: 39,
            value: 1,
            valueid: ['repeb', 'targetaa'],
            process: 'CAA20_3',
        },
        {
            source: 11,
            target: 45,
            value: 1,
            valueid: ['repb', 'targetaa'],
            process: 'CAA20_4',
        },
        {
            source: 12,
            target: 45,
            value: 1,
            valueid: ['repb', 'targetaa'],
            process: 'CAA20_5',
        },
        {
            source: 24,
            target: 46,
            value: 1,
            valueid: 'repb',
            process: 'CAA20_6',
        },
        {
            source: 24,
            target: 46,
            value: 1,
            valueid: 'repeb',
            process: 'CAA20_7',
        },
        {
            source: 35,
            target: 59,
            value: 1,
            valueid: ['repeb', 'targetaa'],
            process: 'CAA20_2',
        },
        {
            source: 36,
            target: 59,
            value: 1,
            valueid: ['repeb', 'targetaa'],
            process: 'CAA20_1',
        },
        {
            source: 39,
            target: 59,
            value: 1,
            valueid: ['repeb', 'targetaa'],
            process: 'CAA20_3',
        },
        {
            source: 45,
            target: 54,
            value: 1,
            valueid: ['repb', 'targetaa'],
            process: 'CAA20_4',
        },
        {
            source: 45,
            target: 54,
            value: 1,
            valueid: ['repb', 'targetaa'],
            process: 'CAA20_5',
        },
        {
            source: 46,
            target: 70,
            value: 1,
            valueid: 'repb',
            process: 'CAA20_6',
        },
        {
            source: 46,
            target: 75,
            value: 1,
            valueid: 'repeb',
            process: 'CAA20_7',
        },
        {
            source: 59,
            target: 77,
            value: 1,
            valueid: ['repeb', 'targetaa'],
            process: 'CAA20_2',
        },
        {
            source: 59,
            target: 77,
            value: 1,
            valueid: ['repeb', 'targetaa'],
            process: 'CAA20_3',
        },
        {
            source: 59,
            target: 78,
            value: 1,
            valueid: ['repeb', 'targetaa'],
            process: 'CAA20_3',
        },
        {
            source: 54,
            target: 77,
            value: 1,
            valueid: ['repb', 'targetaa'],
            process: 'CAA20_4',
        },
        {
            source: 54,
            target: 78,
            value: 1,
            valueid: ['repb', 'targetaa'],
            process: 'CAA20_4',
        },
        {
            source: 54,
            target: 92,
            value: 1,
            valueid: ['repb', 'targetaa'],
            process: 'CAA20_4',
        },
        {
            source: 54,
            target: 92,
            value: 1,
            valueid: ['repb', 'targetaa'],
            process: 'CAA20_5',
        },
        {
            source: 59,
            target: 80,
            value: 1,
            valueid: ['repeb', 'targetaa'],
            process: 'CAA20_1',
        },
        {
            source: 59,
            target: 92,
            value: 1,
            valueid: ['repeb', 'targetaa'],
            process: 'CAA20_3',
        },
        {
            source: 70,
            target: 98,
            value: 1,
            valueid: 'repb',
            process: 'CAA20_6',
        },
        {
            source: 75,
            target: 98,
            value: 1,
            valueid: 'repeb',
            process: 'CAA20_7',
        },
    ],

    status: [
        {
            status: 'TargetAA',
        },
        {
            status: 'RepB',
        },
        {
            status: 'RepEB',
        },
    ],
};

CAA20.links.forEach((link, index) => {
    link.paperName = 'CAA20';
    link.category = 'RepB';
    link.id = `CAA20-${index}`;
});

export { CAA20 };
