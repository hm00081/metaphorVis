import { SankeyData } from '../types/sankey';

const XD99: SankeyData = {
    nodes: [],

    links: [
        {
            source: 132,
            target: 11,
            value: 1,
            valueid: ['targetcb', 'repc'],
            process: ' XD99_1',
        },
        {
            source: 132,
            target: 16,
            value: 1,
            valueid: 'repc',
            process: ' XD99_2',
        },
        {
            source: 132,
            target: 16,
            value: 1,
            valueid: 'repc',
            process: ' XD99_3',
        },
        {
            source: 132,
            target: 22,
            value: 1,
            valueid: ['targetcb', 'repc'],
            process: ' XD99_4',
        },
        {
            source: 132,
            target: 22,
            value: 1,
            valueid: ['targetcb', 'repc'],
            process: ' XD99_5',
        },
        {
            source: 132,
            target: 23,
            value: 1,
            valueid: ['targetcb', 'repc'],
            process: ' XD99_6',
        },
        {
            source: 11,
            target: 45,
            value: 1,
            valueid: ['targetcb', 'repc'],
            process: ' XD99_1',
        },
        {
            source: 16,
            target: 43,
            value: 1,
            valueid: 'repc',
            process: ' XD99_2',
        },
        {
            source: 22,
            target: 46,
            value: 1,
            valueid: ['targetcb', 'repc'],
            process: ' XD99_4',
        },
        {
            source: 22,
            target: 46,
            value: 1,
            valueid: ['targetcb', 'repc'],
            process: ' XD99_5',
        },
        {
            source: 23,
            target: 46,
            value: 1,
            valueid: ['targetcb', 'repc'],
            process: ' XD99_6',
        },
        {
            source: 16,
            target: 48,
            value: 1,
            valueid: 'repc',
            process: ' XD99_3',
        },
        {
            source: 45,
            target: 53,
            value: 1,
            valueid: ['targetcb', 'repc'],
            process: ' XD99_1',
        },
        {
            source: 43,
            target: 53,
            value: 1,
            valueid: 'repc',
            process: ' XD99_2',
        },
        {
            source: 53,
            target: 77,
            value: 1,
            valueid: 'repc',
            process: ' XD99_2',
        },
        {
            source: 53,
            target: 76,
            value: 1,
            valueid: 'repc',
            process: ' XD99_2',
        },
        {
            source: 46,
            target: 53,
            value: 1,
            valueid: ['targetcb', 'repc'],
            process: ' XD99_5',
        },
        {
            source: 48,
            target: 53,
            value: 1,
            valueid: 'repc',
            process: ' XD99_3',
        },
        {
            source: 46,
            target: 70,
            value: 1,
            valueid: ['targetcb', 'repc'],
            process: ' XD99_4',
        },
        {
            source: 46,
            target: 70,
            value: 1,
            valueid: ['targetcb', 'repc'],
            process: ' XD99_6',
        },
        {
            source: 53,
            target: 77,
            value: 1,
            valueid: ['targetcb', 'repc'],
            process: ' XD99_1',
        },
        {
            source: 53,
            target: 78,
            value: 1,
            valueid: 'repc',
            process: ' XD99_3',
        },
        {
            source: 70,
            target: 78,
            value: 1,
            valueid: ['targetcb', 'repc'],
            process: ' XD99_4',
        },
        {
            source: 53,
            target: 79,
            value: 1,
            valueid: ['targetcb', 'repc'],
            process: ' XD99_5',
        },
        {
            source: 70,
            target: 98,
            value: 1,
            valueid: ['targetcb', 'repc'],
            process: ' XD99_6',
        },
    ],
    status: [
        {
            paperName: 'XD99',
            imgUrl: 'CaBMwKE.jpg',
        },
    ],
};

XD99.links.forEach((link, index) => {
    link.paperName = 'XD99';
    link.imgUrl = 'CaBMwKE.jpg';
    link.id = `XD99-${index}`;
});

export { XD99 };
