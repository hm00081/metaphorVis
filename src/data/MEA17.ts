import { SankeyData } from '../types/sankey';

const MEA17: SankeyData = {
    nodes: [],

    links: [
        {
            source: 156,
            target: 11,
            value: 1,
            valueid: ['targetaa'],
            process: 'MEA17_1',
        },
        {
            source: 156,
            target: 11,
            value: 1,
            valueid: ['targetaa'],
            process: 'MEA17_2',
        },
        {
            source: 156,
            target: 13,
            value: 1,
            valueid: ['targetaa'],
            process: 'MEA17_2',
        },
        {
            source: 156,
            target: 14,
            value: 1,
            valueid: ['targetaa'],
            process: 'MEA17_2',
        },
        {
            source: 156,
            target: 22,
            value: 1,
            process: 'MEA17_3',
        },
        {
            source: 156,
            target: 11,
            value: 1,
            valueid: ['targetaa'],
            process: 'MEA17_4',
        },
        {
            source: 156,
            target: 15,
            value: 1,
            valueid: ['targetaa'],
            process: 'MEA17_4',
        },
        {
            source: 156,
            target: 18,
            value: 1,
            valueid: ['targetaa'],
            process: 'MEA17_4',
        },
        {
            source: 156,
            target: 11,
            value: 1,
            valueid: ['targetaa'],
            process: 'MEA17_5',
        },
        {
            source: 156,
            target: 15,
            value: 1,
            valueid: ['targetaa'],
            process: 'MEA17_5',
        },
        {
            source: 156,
            target: 18,
            value: 1,
            valueid: ['targetaa'],
            process: 'MEA17_5',
        },
        {
            source: 11,
            target: 34,
            value: 1,
            valueid: ['targetaa'],
            process: 'MEA17_1',
        },
        {
            source: 34,
            target: 61,
            value: 1,
            valueid: ['targetaa'],
            process: 'MEA17_1',
        },
        {
            source: 61,
            target: 84,
            value: 1,
            valueid: ['targetaa'],
            process: 'MEA17_1',
        },
        {
            source: 11,
            target: 35,
            value: 1,
            valueid: ['targetaa'],
            process: 'MEA17_2',
        },
        {
            source: 13,
            target: 35,
            value: 1,
            valueid: ['targetaa'],
            process: 'MEA17_2',
        },
        {
            source: 14,
            target: 35,
            value: 1,
            valueid: ['targetaa'],
            process: 'MEA17_2',
        },
        {
            source: 35,
            target: 61,
            value: 1,
            valueid: ['targetaa'],
            process: 'MEA17_2',
        },
        {
            source: 61,
            target: 77,
            value: 1,
            valueid: ['targetaa'],
            process: 'MEA17_2',
        },
        {
            source: 61,
            target: 84,
            value: 1,
            valueid: ['targetaa'],
            process: 'MEA17_2',
        },
        {
            source: 22,
            target: 46,
            value: 1,
            process: 'MEA17_3',
        },
        {
            source: 46,
            target: 61,
            value: 1,
            process: 'MEA17_3',
        },
        {
            source: 61,
            target: 84,
            value: 1,
            process: 'MEA17_3',
        },
        {
            source: 61,
            target: 98,
            value: 1,
            process: 'MEA17_3',
        },
        {
            source: 11,
            target: 47,
            value: 1,
            valueid: ['targetaa'],
            process: 'MEA17_4',
        },
        {
            source: 15,
            target: 47,
            value: 1,
            valueid: ['targetaa'],
            process: 'MEA17_4',
        },
        {
            source: 18,
            target: 47,
            value: 1,
            valueid: ['targetaa'],
            process: 'MEA17_4',
        },
        {
            source: 47,
            target: 61,
            value: 1,
            valueid: ['targetaa'],
            process: 'MEA17_4',
        },
        {
            source: 61,
            target: 77,
            value: 1,
            valueid: ['targetaa'],
            process: 'MEA17_4',
        },
        {
            source: 61,
            target: 84,
            value: 1,
            valueid: ['targetaa'],
            process: 'MEA17_4',
        },
        {
            source: 11,
            target: 48,
            value: 1,
            valueid: ['targetaa'],
            process: 'MEA17_5',
        },
        {
            source: 15,
            target: 48,
            value: 1,
            valueid: ['targetaa'],
            process: 'MEA17_5',
        },
        {
            source: 18,
            target: 48,
            value: 1,
            valueid: ['targetaa'],
            process: 'MEA17_5',
        },
        {
            source: 48,
            target: 61,
            value: 1,
            valueid: ['targetaa'],
            process: 'MEA17_5',
        },
        {
            source: 61,
            target: 77,
            value: 1,
            valueid: ['targetaa'],
            process: 'MEA17_5',
        },
        {
            source: 61,
            target: 78,
            value: 1,
            valueid: ['targetaa'],
            process: 'MEA17_5',
        },
        {
            source: 61,
            target: 84,
            value: 1,
            valueid: ['targetaa'],
            process: 'MEA17_5',
        },
    ],
    status: [
        {
            paperName: 'MEA17',
            imgUrl: 'ce97Hw7.jpg',
        },
    ],
};

MEA17.links.map((link, index) => {
    link.paperName = 'MEA17';
    link.category = 'RepB';
    link.imgUrl = 'ce97Hw7.jpg';
    link.id = `MEA17-${index}`;
    link.cluster = 'debatelist';
});

export { MEA17 };
