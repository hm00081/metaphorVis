import { SankeyData } from '../types/sankey';

const DJM12: SankeyData = {
    nodes: [],

    links: [
        {
            source: 155,
            target: 7,
            value: 1,
            valueid: ['targetca', 'reph'],
        },
        {
            source: 155,
            target: 7,
            value: 1,
            valueid: ['targetca', 'repb'],
        },
        {
            source: 155,
            target: 9,
            value: 1,
            valueid: ['targetca', 'repb'],
        },
        {
            source: 155,
            target: 9,
            value: 1,
            valueid: ['targetca', 'repd'],
        },
        {
            source: 155,
            target: 9,
            value: 1,
            valueid: ['targetca', 'reph'],
        },
        {
            source: 155,
            target: 13,
            value: 1,
            valueid: ['targetca', 'reph'],
        },
        {
            source: 155,
            target: 13,
            value: 1,
            valueid: ['targetca', 'repd'],
        },
        {
            source: 155,
            target: 22,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 155,
            target: 23,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 7,
            target: 34,
            value: 1,
            valueid: ['targetca', 'reph'],
        },
        {
            source: 7,
            target: 48,
            value: 1,
            valueid: ['targetca', 'repb'],
        },
        {
            source: 9,
            target: 36,
            value: 1,
            valueid: ['targetca', 'repb'],
        },
        {
            source: 9,
            target: 36,
            value: 1,
            valueid: ['targetca', 'repd'],
        },
        {
            source: 9,
            target: 36,
            value: 1,
            valueid: ['targetca', 'reph'],
        },
        {
            source: 13,
            target: 34,
            value: 1,
            valueid: ['targetca', 'reph'],
        },
        {
            source: 13,
            target: 39,
            value: 1,
            valueid: ['targetca', 'repd'],
        },
        {
            source: 22,
            target: 34,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 23,
            target: 46,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 34,
            target: 62,
            value: 2,
            valueid: ['targetca', 'reph'],
        },
        {
            source: 48,
            target: 54,
            value: 1,
            valueid: ['targetca', 'repb'],
        },
        {
            source: 36,
            target: 54,
            value: 1,
            valueid: ['targetca', 'repb'],
        },
        {
            source: 36,
            target: 55,
            value: 1,
            valueid: ['targetca', 'repd'],
        },
        {
            source: 36,
            target: 62,
            value: 1,
            valueid: ['targetca', 'reph'],
        },
        {
            source: 39,
            target: 62,
            value: 1,
            valueid: ['targetca', 'reph'],
        },
        {
            source: 39,
            target: 55,
            value: 1,
            valueid: ['targetca', 'repd'],
        },
        {
            source: 34,
            target: 54,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 46,
            target: 70,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 62,
            target: 92,
            value: 3,
            valueid: ['targetca', 'reph'],
        },
        {
            source: 54,
            target: 78,
            value: 2,
            valueid: ['targetca', 'repb'],
        },
        {
            source: 54,
            target: 78,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 54,
            target: 77,
            value: 1,
            valueid: ['targetca', 'repb'],
        },
        {
            source: 54,
            target: 77,
            value: 1,
            valueid: 'repb',
        },
        {
            source: 55,
            target: 80,
            value: 1,
            valueid: ['targetca', 'repd'],
        },
        {
            source: 55,
            target: 77,
            value: 1,
            valueid: ['targetca', 'repd'],
        },
        {
            source: 55,
            target: 78,
            value: 1,
            valueid: ['targetca', 'repd'],
        },
        {
            source: 70,
            target: 98,
            value: 1,
            valueid: 'repb',
        },
    ],

    status: [],
};

DJM12.links.forEach((link, index) => {
    link.paperName = 'DJM12';
    link.id = `DJM12-${index}`;
});

export { DJM12 };
