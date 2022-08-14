import { SankeyData } from '../types/sankey';

const MDDD16: SankeyData = {
    nodes: [],

    links: [
        {
            source: 145,
            target: 5,
            value: 1,
            valueid: ['targetbb', 'repb'],
            process: 'MDDD16_1',
        },
        {
            source: 145,
            target: 5,
            value: 1,
            valueid: ['targetbb', 'repb'],
            process: 'MDDD16_2',
        },

        {
            source: 145,
            target: 12,
            value: 1,
            valueid: ['targetbb', 'repb'],
            process: 'MDDD16_1',
        },
        {
            source: 145,
            target: 12,
            value: 1,
            valueid: ['targetbb', 'repb'],
            process: 'MDDD16_2',
        },
        {
            source: 145,
            target: 12,
            value: 1,
            valueid: ['targetbb', 'repb'],
            process: 'MDDD16_3',
        },
        {
            source: 145,
            target: 12,
            value: 1,
            valueid: ['targetbb', 'repb'],
            process: 'MDDD16_4',
        },
        {
            source: 145,
            target: 23,
            value: 1,
            valueid: 'repb',
            process: 'MDDD16_5',
        },
        {
            source: 5,
            target: 45,
            value: 1,
            valueid: ['targetbb', 'repb'],
            process: 'MDDD16_1',
        },
        {
            source: 5,
            target: 45,
            value: 1,
            valueid: ['targetbb', 'repb'],
            process: 'MDDD16_2',
        },
        {
            source: 12,
            target: 37,
            value: 1,
            valueid: ['targetbb', 'repb'],
            process: 'MDDD16_3',
        },
        {
            source: 12,
            target: 37,
            value: 1,
            valueid: ['targetbb', 'repb'],
            process: 'MDDD16_4',
        },
        {
            source: 12,
            target: 45,
            value: 1,
            valueid: ['targetbb', 'repb'],
            process: 'MDDD16_1',
        },
        {
            source: 12,
            target: 45,
            value: 1,
            valueid: ['targetbb', 'repb'],
            process: 'MDDD16_2',
        },
        {
            source: 23,
            target: 46,
            value: 1,
            valueid: 'repb',
            process: 'MDDD16_5',
        },
        {
            source: 37,
            target: 54,
            value: 1,
            valueid: ['targetbb', 'repb'],
            process: 'MDDD16_3',
        },
        {
            source: 37,
            target: 70,
            value: 1,
            valueid: ['targetbb', 'repb'],
            process: 'MDDD16_4',
        },
        {
            source: 45,
            target: 54,
            value: 1,
            valueid: ['targetbb', 'repb'],
            process: 'MDDD16_1',
        },
        {
            source: 45,
            target: 70,
            value: 1,
            valueid: ['targetbb', 'repb'],
            process: 'MDDD16_2',
        },
        {
            source: 54,
            target: 77,
            value: 1,
            valueid: ['targetbb', 'repb'],
            process: 'MDDD16_1',
        },
        {
            source: 54,
            target: 77,
            value: 1,
            valueid: ['targetbb', 'repb'],
            process: 'MDDD16_3',
        },
        {
            source: 54,
            target: 78,
            value: 1,
            valueid: ['targetbb', 'repb'],
            process: 'MDDD16_1',
        },
        {
            source: 54,
            target: 92,
            value: 1,
            valueid: ['targetbb', 'repb'],
            process: 'MDDD16_3',
        },
        {
            source: 70,
            target: 98,
            value: 1,
            valueid: ['targetbb', 'repb'],
            process: 'MDDD16_2',
        },
        {
            source: 70,
            target: 98,
            value: 1,
            valueid: ['targetbb', 'repb'],
            process: 'MDDD16_4',
        },
        {
            source: 70,
            target: 98,
            value: 1,
            valueid: ['targetbb', 'repb'],
            process: 'MDDD16_5',
        },
    ],
    status: [
        {
            paperName: 'MDDD16',
            imgUrl: '4teJby0.jpg',
        },
    ],
};

MDDD16.links.map((link, index) => {
    link.paperName = 'MDDD16';
    link.category = 'RepB';
    link.imgUrl = '4teJby0.jpg';
    link.id = `MDDD16-${index}`;
});

export { MDDD16 };
