import { SankeyData } from '../types/sankey';

const JSM16: SankeyData = {
    nodes: [],

    links: [
        {
            source: 112,
            target: 0,
            value: 1,
            valueid: ['targetbb', 'repc'],
            process: 'JSM16_1',
        },
        {
            source: 112,
            target: 5,
            value: 1,
            valueid: ['targetbb', 'repc'],
            process: 'JSM16_1',
        },
        {
            source: 112,
            target: 11,
            value: 1,
            valueid: ['targetbb', 'repc'],
            process: 'JSM16_2',
        },
        {
            source: 112,
            target: 12,
            value: 1,
            valueid: ['targetbb', 'repc'],
            process: 'JSM16_2',
        },
        {
            source: 112,
            target: 22,
            value: 1,
            valueid: 'repc',
            process: 'JSM16_3',
        },
        {
            source: 112,
            target: 23,
            value: 1,
            process: 'JSM16_4',
        },
        {
            source: 112,
            target: 24,
            value: 1,
            process: 'JSM16_4',
        },
        {
            source: 0,
            target: 48,
            value: 1,
            valueid: ['targetbb', 'repc'],
            process: 'JSM16_1',
        },
        {
            source: 5,
            target: 48,
            value: 1,
            valueid: ['targetbb', 'repc'],
            process: 'JSM16_2',
        },
        {
            source: 11,
            target: 39,
            value: 1,
            valueid: ['targetbb', 'repc'],
            process: 'JSM16_2',
        },
        {
            source: 11,
            target: 42,
            value: 1,
            valueid: ['targetbb', 'repc'],
            process: 'JSM16_2',
        },
        {
            source: 11,
            target: 44,
            value: 1,
            valueid: ['targetbb', 'repc'],
            process: 'JSM16_2',
        },
        {
            source: 11,
            target: 49,
            value: 1,
            valueid: ['targetbb', 'repc'],
            process: 'JSM16_2',
        },
        {
            source: 12,
            target: 39,
            value: 1,
            valueid: ['targetbb', 'repc'],
            process: 'JSM16_2',
        },
        {
            source: 12,
            target: 42,
            value: 1,
            valueid: ['targetbb', 'repc'],
            process: 'JSM16_2',
        },
        {
            source: 12,
            target: 44,
            value: 1,
            valueid: ['targetbb', 'repc'],
            process: 'JSM16_2',
        },
        {
            source: 12,
            target: 49,
            value: 1,
            valueid: ['targetbb', 'repc'],
            process: 'JSM16_2',
        },
        {
            source: 22,
            target: 46,
            value: 1,
            valueid: 'repc',
            process: 'JSM16_3',
        },
        {
            source: 24,
            target: 46,
            value: 1,
            process: 'JSM16_4',
        },
        {
            source: 39,
            target: 53,
            value: 1,
            valueid: ['targetbb', 'repc'],
            process: 'JSM16_2',
        },
        {
            source: 42,
            target: 53,
            value: 1,
            valueid: ['targetbb', 'repc'],
            process: 'JSM16_2',
        },
        {
            source: 44,
            target: 53,
            value: 1,
            valueid: ['targetbb', 'repc'],
            process: 'JSM16_2',
        },
        {
            source: 46,
            target: 57,
            value: 1,
            process: 'JSM16_4',
        },
        {
            source: 48,
            target: 53,
            value: 1,
            valueid: ['targetbb', 'repc'],
            process: 'JSM16_1',
        },
        {
            source: 49,
            target: 53,
            value: 1,
            valueid: ['targetbb', 'repc'],
            process: 'JSM16_2',
        },
        {
            source: 53,
            target: 77,
            value: 1,
            valueid: ['targetbb', 'repc'],
            process: 'JSM16_2',
        },
        {
            source: 53,
            target: 78,
            value: 1,
            valueid: ['targetbb', 'repc'],
            process: 'JSM16_1',
        },
        {
            source: 53,
            target: 78,
            value: 1,
            valueid: ['targetbb', 'repc'],
            process: 'JSM16_2',
        },
        {
            source: 53,
            target: 80,
            value: 1,
            valueid: ['targetbb', 'repc'],
            process: 'JSM16_1',
        },
        {
            source: 53,
            target: 80,
            value: 1,
            valueid: ['targetbb', 'repc'],
            process: 'JSM16_2',
        },
        {
            source: 57,
            target: 80,
            value: 1,
            process: 'JSM16_4',
        },
        {
            source: 57,
            target: 98,
            value: 1,
            process: 'JSM16_4',
        },
    ],
    status: [
        {
            status: 'TargetBB',
        },
        {
            status: 'RepC',
        },
    ],
};

JSM16.links.forEach((link, index) => {
    link.paperName = 'JSM16';
    link.id = `JSM16-${index}`;
});

export { JSM16 };
