import { SankeyData } from '../types/sankey';

const NYT19: SankeyData = {
    nodes: [],

    links: [
        {
            source: 162,
            target: 0,
            value: 1,
            valueid: 'repea',
            process: 'NYT19_1',
        },
        {
            source: 0,
            target: 47,
            value: 1,
            valueid: 'repea',
            process: 'NYT19_1',
        },
        {
            source: 47,
            target: 55,
            value: 1,
            valueid: ['targetbb', 'repea'],
            process: 'NYT19_1',
        },
        {
            source: 55,
            target: 77,
            value: 1,
            valueid: ['targetbb', 'repea'],
            process: 'NYT19_1',
        },
        {
            source: 162,
            target: 0,
            value: 1,
            valueid: 'repea',
            process: 'NYT19_2',
        },
        {
            source: 0,
            target: 47,
            value: 1,
            valueid: 'repea',
            process: 'NYT19_2',
        },
        {
            source: 47,
            target: 55,
            value: 1,
            valueid: ['targetbb', 'repea'],
            process: 'NYT19_2',
        },
        {
            source: 55,
            target: 78,
            value: 1,
            valueid: ['targetbb', 'repea'],
            process: 'NYT19_2',
        },
        {
            source: 162,
            target: 0,
            value: 1,
            valueid: 'repea',
            process: 'NYT19_3',
        },
        {
            source: 0,
            target: 47,
            value: 1,
            valueid: 'repea',
            process: 'NYT19_3',
        },
        {
            source: 47,
            target: 55,
            value: 1,
            valueid: ['targetbb', 'repea'],
            process: 'NYT19_3',
        },
        {
            source: 55,
            target: 84,
            value: 1,
            valueid: ['targetbb', 'repea'],
            process: 'NYT19_3',
        },
        {
            source: 162,
            target: 13,
            value: 1,
            valueid: 'repea',
            process: 'NYT19_4',
        },
        {
            source: 13,
            target: 47,
            value: 1,
            valueid: 'repea',
            process: 'NYT19_4',
        },
        {
            source: 47,
            target: 55,
            value: 1,
            valueid: ['targetbb', 'repea'],
            process: 'NYT19_4',
        },
        {
            source: 55,
            target: 77,
            value: 1,
            valueid: ['targetbb', 'repea'],
            process: 'NYT19_4',
        },
        {
            source: 162,
            target: 13,
            value: 1,
            valueid: 'repea',
            process: 'NYT19_5',
        },
        {
            source: 13,
            target: 47,
            value: 1,
            valueid: 'repea',
            process: 'NYT19_5',
        },
        {
            source: 47,
            target: 55,
            value: 1,
            valueid: ['targetbb', 'repea'],
            process: 'NYT19_5',
        },
        {
            source: 55,
            target: 78,
            value: 1,
            valueid: ['targetbb', 'repea'],
            process: 'NYT19_5',
        },
        {
            source: 162,
            target: 13,
            value: 1,
            valueid: 'repea',
            process: 'NYT19_6',
        },
        {
            source: 13,
            target: 47,
            value: 1,
            valueid: 'repea',
            process: 'NYT19_6',
        },
        {
            source: 47,
            target: 55,
            value: 1,
            valueid: ['targetbb', 'repea'],
            process: 'NYT19_6',
        },
        {
            source: 55,
            target: 84,
            value: 1,
            valueid: ['targetbb', 'repea'],
            process: 'NYT19_6',
        },
    ],

    status: [
        {
            paperName: 'NYT19',
            imgUrl: 'sqJ60Xs.png',
        },
    ],
};

NYT19.links.forEach((link, index) => {
    link.paperName = 'NYT19';
    link.imgUrl = 'sqJ60Xs.png';
    link.id = `NYT19-${index}`;
    link.cluster = 'debatelist';
});

export { NYT19 };
