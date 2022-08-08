import { SankeyData } from '../types/sankey';

const LLN14: SankeyData = {
    nodes: [],

    links: [
        {
            source: 117,
            target: 7,
            value: 1,
            valueid: ['targetca', 'targetab'],
            process: 'LLN14_1',
        },
        {
            source: 117,
            target: 11,
            value: 1,
            valueid: 'targetab',
            process: 'LLN14_2',
        },
        {
            source: 117,
            target: 15,
            value: 1,
            valueid: 'targetab',
            process: 'LLN14_2',
        },
        {
            source: 117,
            target: 18,
            value: 1,
            valueid: ['targetab', 'repd'],
            process: 'LLN14_3',
        },
        {
            source: 117,
            target: 24,
            value: 1,
            valueid: 'targetab',
            process: 'LLN14_4',
        },
        {
            source: 117,
            target: 24,
            value: 1,
            valueid: 'targetab',
            process: 'LLN14_5',
        },
        {
            source: 7,
            target: 34,
            value: 1,
            valueid: ['targetca', 'targetab'],
            process: 'LLN14_1',
        },
        {
            source: 34,
            target: 55,
            value: 1,
            valueid: ['targetca', 'targetab'],
            process: 'LLN14_1',
        },
        {
            source: 55,
            target: 77,
            value: 1,
            valueid: ['targetca', 'targetab'],
            process: 'LLN14_1',
        },
        {
            source: 55,
            target: 78,
            value: 1,
            valueid: ['targetca', 'targetab'],
            process: 'LLN14_1',
        },
        {
            source: 55,
            target: 88,
            value: 1,
            valueid: ['targetca', 'targetab'],
            process: 'LLN14_1',
        },
        {
            source: 11,
            target: 34,
            value: 1,
            valueid: 'targetab',
            process: 'LLN14_2',
        },
        {
            source: 15,
            target: 34,
            value: 1,
            valueid: 'targetab',
            process: 'LLN14_2',
        },
        {
            source: 34,
            target: 55,
            value: 1,
            valueid: 'targetab',
            process: 'LLN14_2',
        },
        {
            source: 55,
            target: 77,
            value: 1,
            valueid: 'targetab',
            process: 'LLN14_2',
        },
        {
            source: 55,
            target: 78,
            value: 1,
            valueid: 'targetab',
            process: 'LLN14_2',
        },
        {
            source: 55,
            target: 92,
            value: 1,
            valueid: 'targetab',
            process: 'LLN14_2',
        },
        {
            source: 18,
            target: 48,
            value: 1,
            valueid: ['targetab', 'repd'],
            process: 'LLN14_3',
        },
        {
            source: 48,
            target: 55,
            value: 1,
            valueid: ['targetab', 'repd'],
            process: 'LLN14_3',
        },
        {
            source: 55,
            target: 78,
            value: 1,
            valueid: ['targetab', 'repd'],
            process: 'LLN14_3',
        },
        {
            source: 55,
            target: 85,
            value: 1,
            valueid: ['targetab', 'repd'],
            process: 'LLN14_3',
        },
        {
            source: 24,
            target: 46,
            value: 1,
            valueid: 'targetab',
            process: 'LLN14_4',
        },
        {
            source: 46,
            target: 55,
            value: 1,
            valueid: 'targetab',
            process: 'LLN14_4',
        },
        {
            source: 55,
            target: 79,
            value: 1,
            valueid: 'targetab',
            process: 'LLN14_4',
        },
        {
            source: 55,
            target: 82,
            value: 1,
            valueid: 'targetab',
            process: 'LLN14_4',
        },
        {
            source: 24,
            target: 46,
            value: 1,
            valueid: 'targetab',
            process: 'LLN14_5',
        },
        {
            source: 46,
            target: 70,
            value: 1,
            valueid: 'targetab',
            process: 'LLN14_5',
        },
        {
            source: 70,
            target: 98,
            value: 1,
            valueid: 'targetab',
            process: 'LLN14_5',
        },
    ],

    status: [
        {
            imgUrl: 'xWQU5gc.jpg',
        },
    ],
};

LLN14.links.forEach((link, index) => {
    link.paperName = 'LLN14';
    link.imgUrl = 'xWQU5gc.jpg';
    link.id = `LLN14-${index}`;
});

export { LLN14 };
