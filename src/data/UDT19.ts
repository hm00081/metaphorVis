import { SankeyData } from '../types/sankey';

const UDT19: SankeyData = {
    nodes: [],

    links: [
        {
            source: 164,
            target: 11,
            value: 1,
            valueid: 'repea',
            process: 'UDT19_1',
        },
        {
            source: 11,
            target: 42,
            value: 1,
            valueid: ['targetbb', 'repea'],
            process: 'UDT19_1',
        },
        {
            source: 42,
            target: 55,
            value: 1,
            valueid: ['targetbb', 'repea'],
            process: 'UDT19_1',
        },
        {
            source: 55,
            target: 77,
            value: 1,
            valueid: ['targetaa', 'repea'],
            process: 'UDT19_1',
        },
        {
            source: 55,
            target: 78,
            value: 1,
            valueid: ['targetaa', 'repea'],
            process: 'UDT19_1',
        },
        {
            source: 55,
            target: 85,
            value: 1,
            valueid: 'repea',
            process: 'UDT19_1',
        },
        {
            source: 164,
            target: 11,
            value: 1,
            valueid: 'repea',
            process: 'UDT19_2',
        },
        {
            source: 11,
            target: 45,
            value: 1,
            valueid: ['targetbb', 'repea'],
            process: 'UDT19_2',
        },
        {
            source: 45,
            target: 55,
            value: 1,
            valueid: ['targetbb', 'repea'],
            process: 'UDT19_2',
        },
        {
            source: 55,
            target: 77,
            value: 1,
            valueid: ['targetaa', 'repea'],
            process: 'UDT19_2',
        },
        {
            source: 55,
            target: 78,
            value: 1,
            valueid: ['targetaa', 'repea'],
            process: 'UDT19_2',
        },
        {
            source: 55,
            target: 85,
            value: 1,
            valueid: 'repea',
            process: 'UDT19_2',
        },
        {
            source: 164,
            target: 11,
            value: 1,
            valueid: 'repea',
            process: 'UDT19_3',
        },
        {
            source: 11,
            target: 35,
            value: 1,
            valueid: ['targetbb', 'repea'],
            process: 'UDT19_3',
        },
        {
            source: 35,
            target: 55,
            value: 1,
            valueid: ['targetbb', 'repea'],
            process: 'UDT19_3',
        },
        {
            source: 55,
            target: 77,
            value: 1,
            valueid: ['targetaa', 'repea'],
            process: 'UDT19_3',
        },
        {
            source: 55,
            target: 78,
            value: 1,
            valueid: ['targetaa', 'repea'],
            process: 'UDT19_3',
        },
        {
            source: 55,
            target: 85,
            value: 1,
            valueid: 'repea',
            process: 'UDT19_3',
        },
    ],

    status: [
        {
            paperName: 'UDT19',
            imgUrl: 'JY2gfvN.jpg',
        },
    ],
};

UDT19.links.forEach((link, index) => {
    link.paperName = 'UDT19';
    link.imgUrl = 'JY2gfvN.jpg';
    link.id = `UDT19-${index}`;
    link.cluster = 'debatelist';
});

export { UDT19 };
