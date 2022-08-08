import { SankeyData } from '../types/sankey';

const GGS12ST: SankeyData = {
    nodes: [],

    links: [
        {
            source: 108,
            target: 3,
            value: 1,
            valueid: ['repea', 'targetbb'],
            process: 'GGS12ST_1',
        },
        {
            source: 108,
            target: 12,
            value: 1,
            valueid: ['repeb', 'targetbb'],
            process: 'GGS12ST_2',
        },
        {
            source: 108,
            target: 23,
            value: 1,
            process: 'GGS12ST_3',
        },
        {
            source: 3,
            target: 45,
            value: 1,
            valueid: ['repea', 'targetbb'],
            process: 'GGS12ST_1',
        },
        {
            source: 12,
            target: 42,
            value: 1,
            valueid: ['repeb', 'targetbb'],
            process: 'GGS12ST_2',
        },
        {
            source: 12,
            target: 45,
            value: 1,
            valueid: ['repeb', 'targetbb'],
            process: 'GGS12ST_2',
        },
        {
            source: 12,
            target: 48,
            value: 1,
            valueid: ['repeb', 'targetbb'],
            process: 'GGS12ST_2',
        },
        {
            source: 23,
            target: 46,
            value: 1,
            process: 'GGS12ST_3',
        },
        {
            source: 42,
            target: 59,
            value: 1,
            valueid: ['repeb', 'targetbb'],
            process: 'GGS12ST_2',
        },
        {
            source: 45,
            target: 59,
            value: 1,
            valueid: ['repea', 'targetbb'],
            process: 'GGS12ST_1',
        },
        {
            source: 45,
            target: 59,
            value: 1,
            valueid: ['repeb', 'targetbb'],
            process: 'GGS12ST_2',
        },
        {
            source: 48,
            target: 59,
            value: 1,
            valueid: ['repeb', 'targetbb'],
            process: 'GGS12ST_2',
        },
        {
            source: 59,
            target: 77,
            value: 1,
            valueid: ['repea', 'targetbb'],
            process: 'GGS12ST_1',
        },
        {
            source: 59,
            target: 77,
            value: 1,
            valueid: ['repeb', 'targetbb'],
            process: 'GGS12ST_2',
        },
        {
            source: 75,
            target: 77,
            value: 1,
            process: 'GGS12ST_3',
        },
    ],
    status: [
        {
            imgUrl: '',
        },
    ],
};

GGS12ST.links.forEach((link, index) => {
    link.paperName = 'GGS12ST';
    link.imgUrl = 'HV2lNkC.png';
    link.id = `GGS12ST-${index}`;
});

export { GGS12ST };
