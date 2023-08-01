import { SankeyData } from '../types/sankey';

const LWW13: SankeyData = {
    nodes: [],

    links: [
        {
            source: 118,
            target: 9,
            value: 1,
            valueid: ['targetca', 'repeb'],
            process: 'LWW13_1',
        },
        {
            source: 118,
            target: 11,
            value: 1,
            valueid: ['targetab', 'repeb'],
            process: 'LWW13_2',
        },
        {
            source: 118,
            target: 11,
            value: 1,
            valueid: ['targetab', 'repeb'],
            process: 'LWW13_3',
        },
        {
            source: 118,
            target: 13,
            value: 1,
            valueid: ['targetab', 'repeb'],
            process: 'LWW13_2',
        },
        {
            source: 118,
            target: 16,
            value: 1,
            valueid: ['targetab', 'repeb'],
            process: 'LWW13_4',
        },
        {
            source: 118,
            target: 17,
            value: 1,
            valueid: ['targetab', 'repeb'],
            process: 'LWW13_4',
        },
        {
            source: 118,
            target: 18,
            value: 1,
            valueid: ['targetab', 'repeb'],
            process: 'LWW13_4',
        },
        {
            source: 118,
            target: 22,
            value: 1,
            valueid: 'repeb',
            process: 'LWW13_5',
        },
        {
            source: 9,
            target: 36,
            value: 1,
            valueid: ['targetca', 'repeb'],
            process: 'LWW13_1',
        },
        {
            source: 9,
            target: 40,
            value: 1,
            valueid: ['targetca', 'repeb'],
            process: 'LWW13_1',
        },
        {
            source: 40,
            target: 59,
            value: 1,
            valueid: ['targetca', 'repeb'],
            process: 'LWW13_1',
        },
        {
            source: 11,
            target: 35,
            value: 1,
            valueid: ['targetab', 'repeb'],
            process: 'LWW13_2',
        },
        {
            source: 13,
            target: 35,
            value: 1,
            valueid: ['targetab', 'repeb'],
            process: 'LWW13_2',
        },
        {
            source: 11,
            target: 49,
            value: 1,
            valueid: ['targetab', 'repeb'],
            process: 'LWW13_3',
        },
        {
            source: 16,
            target: 49,
            value: 1,
            valueid: ['targetab', 'repeb'],
            process: 'LWW13_4',
        },
        {
            source: 17,
            target: 49,
            value: 1,
            valueid: ['targetab', 'repeb'],
            process: 'LWW13_4',
        },
        {
            source: 18,
            target: 49,
            value: 1,
            valueid: ['targetab', 'repeb'],
            process: 'LWW13_4',
        },
        {
            source: 35,
            target: 59,
            value: 1,
            valueid: ['targetab', 'repeb'],
            process: 'LWW13_2',
        },
        {
            source: 36,
            target: 59,
            value: 1,
            valueid: ['targetca', 'repeb'],
            process: 'LWW13_1',
        },
        {
            source: 49,
            target: 59,
            value: 1,
            valueid: ['targetab', 'repeb'],
            process: 'LWW13_3',
        },
        {
            source: 49,
            target: 59,
            value: 1,
            valueid: ['targetab', 'repeb'],
            process: 'LWW13_4',
        },
        {
            source: 46,
            target: 75,
            value: 1,
            valueid: 'repeb',
            process: 'LWW13_5',
        },
        {
            source: 59,
            target: 77,
            value: 1,
            valueid: ['targetab', 'repeb'],
            process: 'LWW13_2',
        },
        {
            source: 59,
            target: 77,
            value: 1,
            valueid: ['targetab', 'repeb'],
            process: 'LWW13_4',
        },
        {
            source: 59,
            target: 78,
            value: 1,
            valueid: ['targetab', 'repeb'],
            process: 'LWW13_3',
        },
        {
            source: 59,
            target: 79,
            value: 1,
            valueid: ['targetca', 'repeb'],
            process: 'LWW13_1',
        },
        {
            source: 59,
            target: 79,
            value: 1,
            valueid: ['targetab', 'repeb'],
            process: 'LWW13_2',
        },
        {
            source: 59,
            target: 79,
            value: 1,
            valueid: ['targetab', 'repeb'],
            process: 'LWW13_3',
        },
        {
            source: 59,
            target: 80,
            value: 1,
            valueid: ['targetca', 'repeb'],
            process: 'LWW13_1',
        },
        {
            source: 59,
            target: 80,
            value: 1,
            valueid: ['targetab', 'repeb'],
            process: 'LWW13_3',
        },
        {
            source: 75,
            target: 98,
            value: 1,
            valueid: 'repeb',
            process: 'LWW13_5',
        },
    ],

    status: [
        {
            paperName: 'LWW13',
            imgUrl: 'iaVFFGl.jpg',
        },
    ],
};

LWW13.links.forEach((link, index) => {
    link.paperName = 'LWW13';
    link.imgUrl = 'iaVFFGl.jpg';
    link.id = `LWW13-${index}`;
    link.cluster = 'debatelist';
});

export { LWW13 };
