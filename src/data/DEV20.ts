import { SankeyData } from '../types/sankey';
//DEv 데이터 수정
const DEV20: SankeyData = {
    nodes: [],

    links: [
        {
            source: 161,
            target: 0,
            value: 1,
            valueid: 'repea',
            process: 'DEV20_1',
        },
        {
            source: 0,
            target: 47,
            value: 1,
            valueid: ['targetbb', 'repea'],
            process: 'DEV20_1',
        },
        {
            source: 47,
            target: 55,
            value: 1,
            valueid: ['targetbb', 'repea'],
            process: 'DEV20_1',
        },
        {
            source: 55,
            target: 77,
            value: 1,
            valueid: 'repea',
            process: 'DEV20_1',
        },
        {
            source: 55,
            target: 80,
            value: 1,
            valueid: 'repea',
            process: 'DEV20_1',
        },
        {
            source: 55,
            target: 84,
            value: 1,
            valueid: 'repea',
            process: 'DEV20_1',
        },

        {
            source: 161,
            target: 11,
            value: 1,
            valueid: 'repea',
            process: 'DEV20_4',
        },
        {
            source: 11,
            target: 34,
            value: 1,
            valueid: ['targetbb', 'repea'],
            process: 'DEV20_4',
        },
        {
            source: 34,
            target: 61,
            value: 1,
            valueid: ['targetbb', 'repea'],
            process: 'DEV20_4',
        },
        {
            source: 61,
            target: 79,
            value: 1,
            valueid: 'repea',
            process: 'DEV20_4',
        },
        {
            source: 161,
            target: 11,
            value: 1,
            valueid: 'repea',
            process: 'DEV20_5',
        },
        {
            source: 11,
            target: 47,
            value: 1,
            valueid: ['targetbb', 'repea'],
            process: 'DEV20_5',
        },
        {
            source: 47,
            target: 61,
            value: 1,
            valueid: ['targetbb', 'repea'],
            process: 'DEV20_5',
        },
        {
            source: 61,
            target: 79,
            value: 1,
            valueid: 'repea',
            process: 'DEV20_5',
        },
        {
            source: 161,
            target: 11,
            value: 1,
            valueid: 'repea',
            process: 'DEV20_6',
        },
        {
            source: 11,
            target: 48,
            value: 1,
            valueid: ['targetbb', 'repea'],
            process: 'DEV20_6',
        },
        {
            source: 48,
            target: 61,
            value: 1,
            valueid: ['targetbb', 'repea'],
            process: 'DEV20_6',
        },
        {
            source: 61,
            target: 98,
            value: 1,
            valueid: 'repea',
            process: 'DEV20_6',
        },
        {
            source: 161,
            target: 0,
            value: 1,
            valueid: 'repea',
            process: 'DEV20_7',
        },
        {
            source: 0,
            target: 47,
            value: 1,
            valueid: ['targetbb', 'repea'],
            process: 'DEV20_7',
        },
        {
            source: 47,
            target: 55,
            value: 1,
            valueid: ['targetbb', 'repea'],
            process: 'DEV20_7',
        },
        {
            source: 55,
            target: 77,
            value: 1,
            valueid: 'repea',
            process: 'DEV20_7',
        },
        {
            source: 55,
            target: 79,
            value: 1,
            valueid: 'repea',
            process: 'DEV20_7',
        },
        {
            source: 55,
            target: 80,
            value: 1,
            valueid: 'repea',
            process: 'DEV20_7',
        },
        {
            source: 55,
            target: 98,
            value: 1,
            valueid: 'repea',
            process: 'DEV20_7',
        },

        {
            source: 161,
            target: 0,
            value: 1,
            valueid: 'repea',
            process: 'DEV20_11',
        },
        {
            source: 0,
            target: 49,
            value: 1,
            valueid: ['targetbb', 'repea'],
            process: 'DEV20_11',
        },
        {
            source: 49,
            target: 55,
            value: 1,
            valueid: ['targetbb', 'repea'],
            process: 'DEV20_11',
        },
        {
            source: 55,
            target: 77,
            value: 1,
            valueid: 'repea',
            process: 'DEV20_11',
        },
        {
            source: 161,
            target: 13,
            value: 1,
            valueid: 'repea',
            process: 'DEV20_12',
        },
        {
            source: 13,
            target: 49,
            value: 1,
            valueid: ['targetbb', 'repea'],
            process: 'DEV20_12',
        },
        {
            source: 49,
            target: 61,
            value: 1,
            valueid: ['targetbb', 'repea'],
            process: 'DEV20_12',
        },
        {
            source: 61,
            target: 79,
            value: 1,
            valueid: 'repea',
            process: 'DEV20_12',
        },
        {
            source: 161,
            target: 13,
            value: 1,
            valueid: 'repea',
            process: 'DEV20_13',
        },
        {
            source: 13,
            target: 49,
            value: 1,
            valueid: ['targetbb', 'repea'],
            process: 'DEV20_13',
        },
        {
            source: 49,
            target: 61,
            value: 1,
            valueid: ['targetbb', 'repea'],
            process: 'DEV20_13',
        },
        {
            source: 61,
            target: 80,
            value: 1,
            valueid: 'repea',
            process: 'DEV20_13',
        },
    ],

    status: [
        {
            paperName: 'DEV20',
            imgUrl: 'kAGhoDB.png',
        },
    ],
};

DEV20.links.forEach((link, index) => {
    link.paperName = 'DEV20';
    link.imgUrl = 'kAGhoDB.png';
    link.id = `DEV20-${index}`;
    link.cluster = 'debatelist';
});

export { DEV20 };
