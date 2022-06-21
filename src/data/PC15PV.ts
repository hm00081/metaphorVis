import { SankeyData } from '../types/sankey';

const PC15PV: SankeyData = {
    nodes: [],

    links: [
        {
            source: 125,
            target: 0,
            value: 1,
            valueid: 'targetab',
            process: 'PC15PV_1',
        },
        {
            source: 125,
            target: 3,
            value: 1,
            valueid: ['targetab', 'repd'],
            process: 'PC15PV_2',
        },
        {
            source: 125,
            target: 3,
            value: 1,
            valueid: ['targetab', 'repd'],
            process: 'PC15PV_3',
        },
        {
            source: 125,
            target: 12,
            value: 1,
            valueid: 'targetab',
            process: 'PC15PV_4',
        },
        {
            source: 125,
            target: 21,
            value: 1,
            process: 'PC15PV_5',
        },
        {
            source: 125,
            target: 24,
            value: 1,
            process: 'PC15PV_5',
        },
        {
            source: 0,
            target: 45,
            value: 1,
            valueid: 'targetab',
            process: 'PC15PV_1',
        },
        {
            source: 3,
            target: 45,
            value: 1,
            valueid: ['targetab', 'repd'],
            process: 'PC15PV_2',
        },
        {
            source: 3,
            target: 49,
            value: 1,
            valueid: ['targetab', 'repd'],
            process: 'PC15PV_2',
        },
        {
            source: 12,
            target: 49,
            value: 1,
            valueid: 'targetab',
            process: 'PC15PV_4',
        },
        {
            source: 21,
            target: 46,
            value: 1,
            process: 'PC15PV_5',
        },
        {
            source: 24,
            target: 46,
            value: 1,
            process: 'PC15PV_5',
        },
        {
            source: 45,
            target: 52,
            value: 1,
            valueid: 'targetab',
            process: 'PC15PV_1',
        },
        {
            source: 49,
            target: 52,
            value: 1,
            valueid: 'targetab',
            process: 'PC15PV_4',
        },
        {
            source: 45,
            target: 55,
            value: 1,
            valueid: ['targetab', 'repd'],
            process: 'PC15PV_2',
        },
        {
            source: 49,
            target: 55,
            value: 1,
            valueid: ['targetab', 'repd'],
            process: 'PC15PV_3',
        },
        {
            source: 46,
            target: 71,
            value: 1,
            process: 'PC15PV_5',
        },
        {
            source: 52,
            target: 77,
            value: 1,
            valueid: 'targetab',
            process: 'PC15PV_1',
        },
        {
            source: 52,
            target: 77,
            value: 1,
            valueid: 'targetab',
            process: 'PC15PV_4',
        },
        {
            source: 52,
            target: 79,
            value: 1,
            valueid: 'targetab',
            process: 'PC15PV_1',
        },
        {
            source: 52,
            target: 79,
            value: 1,
            valueid: 'targetab',
            process: 'PC15PV_4',
        },
        {
            source: 55,
            target: 78,
            value: 1,
            valueid: ['targetab', 'repd'],
            process: 'PC15PV_2',
        },
        {
            source: 55,
            target: 85,
            value: 1,
            valueid: ['targetab', 'repd'],
            process: 'PC15PV_3',
        },
        {
            source: 71,
            target: 98,
            value: 1,
            process: 'PC15PV_5',
        },
    ],
    status: [
        {
            status: 0,
        },
    ],
};

PC15PV.links.forEach((link, index) => {
    link.paperName = 'PC15PV';
    link.id = `PC15PV-${index}`;
});

export { PC15PV };
