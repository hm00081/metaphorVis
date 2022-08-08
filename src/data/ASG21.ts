import { SankeyData } from '../types/sankey';

const ASG21: SankeyData = {
    nodes: [],

    links: [
        {
            source: 159,
            target: 15,
            value: 1,
            valueid: 'repea',
            process: 'ASG21_1',
        },
        {
            source: 159,
            target: 5,
            value: 1,
            valueid: ['targetbb', 'repea'],
            process: 'ASG21_2',
        },
        {
            source: 159,
            target: 15,
            value: 1,
            valueid: ['targetbb', 'repea'],
            process: 'ASG21_2',
        },
        {
            source: 159,
            target: 13,
            value: 1,
            valueid: ['targetaa', 'repea'],
            process: 'ASG21_3',
        },
        {
            source: 159,
            target: 18,
            value: 1,
            valueid: ['targetaa', 'repea'],
            process: 'ASG21_3',
        },
        {
            source: 15,
            target: 41,
            value: 1,
            valueid: 'repea',
            process: 'ASG21_1',
        },
        {
            source: 41,
            target: 59,
            value: 1,
            valueid: 'repea',
            process: 'ASG21_1',
        },
        {
            source: 59,
            target: 77,
            value: 1,
            valueid: 'repea',
            process: 'ASG21_1',
        },
        {
            source: 59,
            target: 78,
            value: 1,
            valueid: 'repea',
            process: 'ASG21_1',
        },
        {
            source: 5,
            target: 45,
            value: 1,
            valueid: ['targetbb', 'repea'],
            process: 'ASG21_2',
        },
        {
            source: 15,
            target: 45,
            value: 1,
            valueid: ['targetbb', 'repea'],
            process: 'ASG21_2',
        },
        {
            source: 45,
            target: 59,
            value: 1,
            valueid: ['targetbb', 'repea'],
            process: 'ASG21_2',
        },
        {
            source: 59,
            target: 77,
            value: 1,
            valueid: ['targetbb', 'repea'],
            process: 'ASG21_2',
        },
        {
            source: 59,
            target: 78,
            value: 1,
            valueid: ['targetbb', 'repea'],
            process: 'ASG21_2',
        },
        {
            source: 13,
            target: 45,
            value: 1,
            valueid: ['targetaa', 'repea'],
            process: 'ASG21_3',
        },
        {
            source: 18,
            target: 45,
            value: 1,
            valueid: ['targetaa', 'repea'],
            process: 'ASG21_3',
        },
        {
            source: 13,
            target: 47,
            value: 1,
            valueid: ['targetaa', 'repea'],
            process: 'ASG21_3',
        },
        {
            source: 18,
            target: 47,
            value: 1,
            valueid: ['targetaa', 'repea'],
            process: 'ASG21_3',
        },
        {
            source: 45,
            target: 59,
            value: 1,
            valueid: ['targetaa', 'repea'],
            process: 'ASG21_3',
        },
        {
            source: 47,
            target: 59,
            value: 1,
            valueid: ['targetaa', 'repea'],
            process: 'ASG21_3',
        },
        {
            source: 59,
            target: 77,
            value: 1,
            valueid: ['targetaa', 'repea'],
            process: 'ASG21_3',
        },
        {
            source: 59,
            target: 78,
            value: 1,
            valueid: ['targetaa', 'repea'],
            process: 'ASG21_3',
        },
        {
            source: 59,
            target: 90,
            value: 1,
            valueid: ['targetaa', 'repea'],
            process: 'ASG21_3',
        },
    ],

    status: [
        {
            imgUrl: 'JY2gfvN.jpg',
        },
    ],
};

ASG21.links.forEach((link, index) => {
    link.paperName = 'ASG21';
    link.imgUrl = 'JY2gfvN.jpg';
    link.id = `ASG21-${index}`;
});

export { ASG21 };
