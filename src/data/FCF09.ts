import { SankeyData } from '../types/sankey';

const FCF09: SankeyData = {
    nodes: [],

    links: [
        {
            source: 106,
            target: 5,
            value: 1,
            valueid: ['targetbb', 'reph'],
            process: 'FCF09_1',
        },
        {
            source: 106,
            target: 17,
            value: 1,
            valueid: ['targetbb', 'reph'],
            process: 'FCF09_1',
        },
        {
            source: 106,
            target: 18,
            value: 1,
            valueid: ['targetbb', 'reph'],
            process: 'FCF09_1',
        },
        {
            source: 106,
            target: 5,
            value: 1,
            valueid: ['targetbb', 'reph'],
            process: 'FCF09_2',
        },
        {
            source: 106,
            target: 17,
            value: 1,
            valueid: ['targetbb', 'reph'],
            process: 'FCF09_2',
        },
        {
            source: 106,
            target: 18,
            value: 1,
            valueid: ['targetbb', 'reph'],
            process: 'FCF09_2',
        },
        {
            source: 106,
            target: 5,
            value: 1,
            valueid: ['targetbb', 'reph'],
            process: 'FCF09_3',
        },
        {
            source: 106,
            target: 17,
            value: 1,
            valueid: ['targetbb', 'reph'],
            process: 'FCF09_3',
        },
        {
            source: 106,
            target: 18,
            value: 1,
            valueid: ['targetbb', 'reph'],
            process: 'FCF09_3',
        },
        {
            source: 106,
            target: 24,
            value: 1,
            process: 'FCF09_4',
        },
        {
            source: 5,
            target: 40,
            value: 1,
            valueid: ['targetbb', 'reph'],
            process: 'FCF09_1',
        },
        {
            source: 5,
            target: 42,
            value: 1,
            valueid: ['targetbb', 'reph'],
            process: 'FCF09_2',
        },
        {
            source: 5,
            target: 45,
            value: 1,
            valueid: ['targetbb', 'reph'],
            process: 'FCF09_3',
        },
        {
            source: 17,
            target: 40,
            value: 1,
            valueid: ['targetbb', 'reph'],
            process: 'FCF09_1',
        },
        {
            source: 17,
            target: 42,
            value: 1,
            valueid: ['targetbb', 'reph'],
            process: 'FCF09_2',
        },
        {
            source: 17,
            target: 45,
            value: 1,
            valueid: ['targetbb', 'reph'],
            process: 'FCF09_3',
        },
        {
            source: 18,
            target: 40,
            value: 1,
            valueid: ['targetbb', 'reph'],
            process: 'FCF09_1',
        },
        {
            source: 18,
            target: 42,
            value: 1,
            valueid: ['targetbb', 'reph'],
            process: 'FCF09_2',
        },
        {
            source: 18,
            target: 45,
            value: 1,
            valueid: ['targetbb', 'reph'],
            process: 'FCF09_3',
        },
        {
            source: 24,
            target: 46,
            value: 1,
            process: 'FCF09_4',
        },
        {
            source: 40,
            target: 62,
            value: 1,
            valueid: ['targetbb', 'reph'],
            process: 'FCF09_1',
        },
        {
            source: 42,
            target: 62,
            value: 1,
            valueid: ['targetbb', 'reph'],
            process: 'FCF09_2',
        },
        {
            source: 45,
            target: 62,
            value: 1,
            valueid: ['targetbb', 'reph'],
            process: 'FCF09_3',
        },
        {
            source: 46,
            target: 75,
            value: 1,
            process: 'FCF09_4',
        },
        {
            source: 62,
            target: 77,
            value: 1,
            valueid: ['targetbb', 'reph'],
            process: 'FCF09_1',
        },
        {
            source: 62,
            target: 77,
            value: 1,
            valueid: ['targetbb', 'reph'],
            process: 'FCF09_2',
        },
        {
            source: 62,
            target: 77,
            value: 1,
            valueid: ['targetbb', 'reph'],
            process: 'FCF09_3',
        },
        {
            source: 62,
            target: 79,
            value: 1,
            valueid: ['targetbb', 'reph'],
            process: 'FCF09_1',
        },
        {
            source: 62,
            target: 79,
            value: 1,
            valueid: ['targetbb', 'reph'],
            process: 'FCF09_3',
        },
        {
            source: 62,
            target: 80,
            value: 1,
            valueid: ['targetbb', 'reph'],
            process: 'FCF09_2',
        },
        {
            source: 62,
            target: 80,
            value: 1,
            valueid: ['targetbb', 'reph'],
            process: 'FCF09_3',
        },
        {
            source: 75,
            target: 98,
            value: 1,
            process: 'FCF09_4',
        },
    ],

    status: [
        {
            imgUrl: 'FfzA9S4.png',
        },
    ],
};

FCF09.links.forEach((link, index) => {
    link.paperName = 'FCF09';
    link.imgUrl = 'FfzA9S4.jpg';
    link.id = `FCF09-${index}`;
});

export { FCF09 };
