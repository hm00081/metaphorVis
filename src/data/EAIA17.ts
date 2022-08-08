import { SankeyData } from '../types/sankey';

const EAIA17: SankeyData = {
    nodes: [],

    links: [
        {
            source: 104,
            target: 15,
            value: 1,
            valueid: ['targetcb', 'targetaa'],
            process: 'EAIA17_1',
        },
        {
            source: 104,
            target: 15,
            value: 1,
            valueid: ['targetcb', 'targetaa'],
            process: 'EAIA17_2',
        },
        {
            source: 104,
            target: 18,
            value: 1,
            valueid: ['targetcb', 'targetaa'],
            process: 'EAIA17_3',
        },
        {
            source: 104,
            target: 21,
            value: 1,
            valueid: 'targetcb',
            process: 'EAIA17_4',
        },
        {
            source: 15,
            target: 41,
            value: 1,
            valueid: ['targetcb', 'targetaa'],
            process: 'EAIA17_1',
        },
        {
            source: 15,
            target: 42,
            value: 1,
            valueid: ['targetcb', 'targetaa'],
            process: 'EAIA17_1',
        },
        {
            source: 15,
            target: 43,
            value: 1,
            valueid: ['targetcb', 'targetaa'],
            process: 'EAIA17_1',
        },
        {
            source: 15,
            target: 48,
            value: 1,
            valueid: ['targetcb', 'targetaa'],
            process: 'EAIA17_2',
        },
        {
            source: 18,
            target: 41,
            value: 1,
            valueid: ['targetcb', 'targetaa'],
            process: 'EAIA17_3',
        },
        {
            source: 18,
            target: 42,
            value: 1,
            valueid: ['targetcb', 'targetaa'],
            process: 'EAIA17_3',
        },
        {
            source: 18,
            target: 43,
            value: 1,
            valueid: ['targetcb', 'targetaa'],
            process: 'EAIA17_3',
        },
        {
            source: 21,
            target: 46,
            value: 1,
            valueid: 'targetcb',
            process: 'EAIA17_4',
        },
        {
            source: 41,
            target: 52,
            value: 1,
            valueid: ['targetcb', 'targetaa'],
            process: 'EAIA17_1',
        },
        {
            source: 41,
            target: 52,
            value: 1,
            valueid: ['targetcb', 'targetaa'],
            process: 'EAIA17_3',
        },
        {
            source: 42,
            target: 52,
            value: 1,
            valueid: ['targetcb', 'targetaa'],
            process: 'EAIA17_1',
        },
        {
            source: 42,
            target: 52,
            value: 1,
            valueid: ['targetcb', 'targetaa'],
            process: 'EAIA17_3',
        },
        {
            source: 43,
            target: 52,
            value: 1,
            valueid: ['targetcb', 'targetaa'],
            process: 'EAIA17_1',
        },
        {
            source: 43,
            target: 52,
            value: 1,
            valueid: ['targetcb', 'targetaa'],
            process: 'EAIA17_3',
        },
        {
            source: 48,
            target: 52,
            value: 1,
            valueid: ['targetcb', 'targetaa'],
            process: 'EAIA17_2',
        },
        {
            source: 46,
            target: 52,
            value: 1,
            valueid: 'targetcb',
            process: 'EAIA17_4',
        },
        {
            source: 52,
            target: 77,
            value: 1,
            valueid: ['targetcb', 'targetaa'],
            process: 'EAIA17_1',
        },
        {
            source: 52,
            target: 78,
            value: 1,
            valueid: ['targetcb', 'targetaa'],
            process: 'EAIA17_2',
        },
        {
            source: 52,
            target: 79,
            value: 1,
            valueid: ['targetcb', 'targetaa'],
            process: 'EAIA17_1',
        },
        {
            source: 52,
            target: 79,
            value: 1,
            valueid: ['targetcb', 'targetaa'],
            process: 'EAIA17_3',
        },
        {
            source: 52,
            target: 81,
            value: 1,
            valueid: ['targetcb', 'targetaa'],
            process: 'EAIA17_1',
        },
        {
            source: 52,
            target: 81,
            value: 1,
            valueid: 'targetcb',
            process: 'EAIA17_4',
        },
    ],
    status: [
        {
            imgUrl: '',
        },
    ],
};

EAIA17.links.forEach((link, index) => {
    link.paperName = 'EAIA17';
    link.imgUrl = 'TFuj7MS.jpg';
    link.id = `EAIA17-${index}`;
});

export { EAIA17 };
