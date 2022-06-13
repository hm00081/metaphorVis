import { SankeyData } from '../types/sankey';

const RSRY12: SankeyData = {
    nodes: [],

    links: [
        {
            source: 139,
            target: 11,
            value: 1,
            valueid: ['repd ', 'targetbb'],
            process: 'RSRY12_1',
        },
        {
            source: 139,
            target: 11,
            value: 1,
            valueid: 'targetbb',
            process: 'RSRY12_2',
        },
        {
            source: 139,
            target: 16,
            value: 1,
            valueid: 'repd',
            process: 'RSRY12_3',
        },
        {
            source: 139,
            target: 24,
            value: 1,
            valueid: 'targetbb',
            process: 'RSRY12_2',
        },
        {
            source: 11,
            target: 45,
            value: 1,
            valueid: ['repd ', 'targetbb'],
            process: 'RSRY12_1',
        },
        {
            source: 11,
            target: 46,
            value: 1,
            valueid: 'targetbb',
            process: 'RSRY12_2',
        },
        {
            source: 16,
            target: 45,
            value: 1,
            valueid: 'repd',
            process: 'RSRY12_3',
        },
        {
            source: 24,
            target: 46,
            value: 1,
            valueid: 'targetbb',
            process: 'RSRY12_3',
        },
        {
            source: 45,
            target: 55,
            value: 1,
            valueid: ['repd ', 'targetbb'],
            process: 'RSRY12_1',
        },
        {
            source: 45,
            target: 55,
            value: 1,
            valueid: 'repd ',
            process: 'RSRY12_3',
        },
        {
            source: 46,
            target: 70,
            value: 1,
            valueid: 'targetbb',
            process: 'RSRY12_2',
        },
        {
            source: 55,
            target: 77,
            value: 1,
            valueid: ['repd ', 'targetbb'],
            process: 'RSRY12_1',
        },
        {
            source: 55,
            target: 78,
            value: 1,
            valueid: ['repd ', 'targetbb'],
            process: 'RSRY12_1',
        },
        {
            source: 55,
            target: 78,
            value: 1,
            valueid: 'repd ',
            process: 'RSRY12_3',
        },
        {
            source: 55,
            target: 85,
            value: 1,
            valueid: 'repd ',
            process: 'RSRY12_3',
        },
        {
            source: 55,
            target: 86,
            value: 1,
            valueid: ['repd ', 'targetbb'],
            process: 'RSRY12_1',
        },
        {
            source: 70,
            target: 88,
            value: 1,
            valueid: 'targetbb',
            process: 'RSRY12_2',
        },
    ],

    status: [
        {
            status: 'TargetAB',
        },
        {
            status: 'TargetBB',
        },
        {
            status: 'RepD',
        },
    ],
};

RSRY12.links.forEach((link, index) => {
    link.paperName = 'RSRY12';
    link.id = `RSRY12-${index}`;
});

export { RSRY12 };
