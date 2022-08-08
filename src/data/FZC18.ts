import { SankeyData } from '../types/sankey';

const FZC18: SankeyData = {
    nodes: [],

    links: [
        {
            source: 153,
            target: 11,
            value: 1,
            valueid: 'repg',
            process: 'FZC18_2',
        },
        {
            source: 153,
            target: 11,
            value: 1,
            valueid: 'repg',
            process: 'FZC18_3',
        },
        {
            source: 153,
            target: 11,
            value: 1,
            valueid: 'repf',
            process: 'FZC18_1',
        },
        {
            source: 153,
            target: 13,
            value: 1,
            valueid: 'repg',
            process: 'FZC18_2',
        },
        {
            source: 153,
            target: 13,
            value: 1,
            valueid: 'repg',
            process: 'FZC18_3',
        },
        {
            source: 153,
            target: 13,
            value: 1,
            valueid: 'repf',
            process: 'FZC18_1',
        },
        {
            source: 153,
            target: 20,
            value: 1,
            process: 'FZC18_5',
        },
        {
            source: 153,
            target: 20,
            value: 1,
            valueid: 'repf',
            process: 'FZC18_4',
        },
        {
            source: 153,
            target: 23,
            value: 1,
            valueid: 'repf',
            process: 'FZC18_7',
        },
        {
            source: 153,
            target: 23,
            value: 1,
            process: 'FZC18_6',
        },
        {
            source: 153,
            target: 23,
            value: 1,
            process: 'FZC18_8',
        },
        {
            source: 153,
            target: 24,
            value: 1,
            process: 'FZC18_6',
        },
        {
            source: 11,
            target: 40,
            value: 1,
            valueid: 'repg',
            process: 'FZC18_3',
        },
        {
            source: 13,
            target: 40,
            value: 1,
            valueid: 'repg',
            process: 'FZC18_3',
        },
        {
            source: 40,
            target: 68,
            value: 1,
            valueid: 'repg',
            process: 'FZC18_3',
        },
        {
            source: 68,
            target: 92,
            value: 1,
            valueid: 'repg',
            process: 'FZC18_3',
        },
        {
            source: 11,
            target: 45,
            value: 1,
            valueid: 'repf',
            process: 'FZC18_1',
        },
        {
            source: 11,
            target: 45,
            value: 1,
            valueid: 'repg',
            process: 'FZC18_2',
        },
        {
            source: 13,
            target: 45,
            value: 1,
            valueid: 'repf',
            process: 'FZC18_1',
        },
        {
            source: 13,
            target: 45,
            value: 1,
            valueid: 'repg',
            process: 'FZC18_2',
        },
        {
            source: 60,
            target: 92,
            value: 1,
            valueid: 'repf',
            process: 'FZC18_1',
        },
        {
            source: 45,
            target: 68,
            value: 1,
            valueid: 'repg',
            process: 'FZC18_2',
        },
        {
            source: 68,
            target: 81,
            value: 1,
            valueid: 'repg',
            process: 'FZC18_2',
        },
        {
            source: 20,
            target: 45,
            value: 1,
            valueid: 'repf',
            process: 'FZC18_4',
        },
        {
            source: 45,
            target: 60,
            value: 1,
            valueid: 'repf',
            process: 'FZC18_1',
        },
        {
            source: 45,
            target: 60,
            value: 1,
            valueid: 'repf',
            process: 'FZC18_4',
        },
        {
            source: 20,
            target: 49,
            value: 1,
            process: 'FZC18_5',
        },
        {
            source: 49,
            target: 73,
            value: 1,
            process: 'FZC18_5',
        },
        {
            source: 49,
            target: 73,
            value: 1,
            process: 'FZC18_8',
        },
        {
            source: 73,
            target: 93,
            value: 1,
            process: 'FZC18_5',
        },
        {
            source: 46,
            target: 73,
            value: 1,
            process: 'FZC18_6',
        },
        {
            source: 73,
            target: 98,
            value: 1,
            process: 'FZC18_6',
        },
        {
            source: 73,
            target: 98,
            value: 1,
            process: 'FZC18_8',
        },
        {
            source: 23,
            target: 49,
            value: 1,
            valueid: 'repf',
            process: 'FZC18_7',
        },
        {
            source: 49,
            target: 60,
            value: 1,
            valueid: 'repf',
            process: 'FZC18_7',
        },
        {
            source: 60,
            target: 98,
            value: 1,
            valueid: 'repf',
            process: 'FZC18_7',
        },
        {
            source: 23,
            target: 49,
            value: 1,
            process: 'FZC18_8',
        },
    ],

    status: [
        {
            paperName: 'FZC18',
            imgUrl: 'zz8t6eU.jpg',
        },
    ],
};

FZC18.links.forEach((link, index) => {
    link.paperName = 'FZC18';
    link.imgUrl = 'zz8t6eU.jpg';
    link.id = `FZC18-${index}`;
});

export { FZC18 };
