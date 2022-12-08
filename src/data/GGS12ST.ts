import { SankeyData } from '../types/sankey';

const GGS12ST: SankeyData = {
    nodes: [],

    links: [
        {
            source: 107,
            target: 3,
            value: 1,
            valueid: ['targetbb', 'repc'],
            process: 'GGS12ST_1',
        },
        {
            source: 107,
            target: 12,
            value: 1,
            valueid: ['targetbb', 'repc'],
            process: 'GGS12ST_1',
        },
        {
            source: 107,
            target: 12,
            value: 1,
            valueid: ['targetbb', 'repc'],
            process: 'GGS12ST_2',
        },
        {
            source: 107,
            target: 16,
            value: 1,
            valueid: ['targetbb', 'repc'],
            process: 'GGS12ST_3',
        },
        {
            source: 107,
            target: 24,
            value: 1,
            valueid: 'repc',
            process: 'GGS12ST_4',
        },
        {
            source: 107,
            target: 28,
            value: 1,
            valueid: 'repc',
            process: 'GGS12ST_4',
        },
        {
            source: 3,
            target: 45,
            value: 1,
            valueid: ['targetbb', 'repc'],
            process: 'GGS12ST_1',
        },
        {
            source: 12,
            target: 42,
            value: 1,
            valueid: ['targetbb', 'repc'],
            process: 'GGS12ST_2',
        },
        {
            source: 12,
            target: 45,
            value: 1,
            valueid: ['targetbb', 'repc'],
            process: 'GGS12ST_1',
        },
        {
            source: 16,
            target: 43,
            value: 1,
            valueid: ['targetbb', 'repc'],
            process: 'GGS12ST_3',
        },
        {
            source: 24,
            target: 46,
            value: 1,
            valueid: 'repc',
            process: 'GGS12ST_4',
        },
        {
            source: 28,
            target: 46,
            value: 1,
            valueid: 'repc',
            process: 'GGS12ST_4',
        },
        {
            source: 42,
            target: 53,
            value: 1,
            valueid: ['targetbb', 'repc'],
            process: 'GGS12ST_2',
        },
        {
            source: 43,
            target: 53,
            value: 1,
            valueid: ['targetbb', 'repc'],
            process: 'GGS12ST_3',
        },
        {
            source: 45,
            target: 53,
            value: 1,
            valueid: ['targetbb', 'repc'],
            process: 'GGS12ST_1',
        },
        {
            source: 46,
            target: 70,
            value: 1,
            valueid: 'repc',
            process: 'GGS12ST_4',
        },
        {
            source: 53,
            target: 77,
            value: 1,
            valueid: ['targetbb', 'repc'],
            process: 'GGS12ST_1',
        },
        {
            source: 53,
            target: 77,
            value: 1,
            valueid: ['targetbb', 'repc'],
            process: 'GGS12ST_2',
        },
        {
            source: 53,
            target: 77,
            value: 1,
            valueid: ['targetbb', 'repc'],
            process: 'GGS12ST_3',
        },
        {
            source: 70,
            target: 98,
            value: 1,
            valueid: 'repc',
            process: 'GGS12ST_4',
        },
    ],
    status: [
        {
            paperName: 'GGS12ST',
            imgUrl: 'wVHfoIB.png',
        },
    ],
};

GGS12ST.links.forEach((link, index) => {
    link.paperName = 'GGS12ST';
    link.imgUrl = 'wVHfoIB.png';
    link.id = `GGS12ST-${index}`;
});

export { GGS12ST };
