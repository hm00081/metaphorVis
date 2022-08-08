import { SankeyData } from '../types/sankey';

const REP15: SankeyData = {
    nodes: [],

    links: [
        {
            source: 126,
            target: 0,
            value: 1,
            valueid: 'targetab',
            process: 'REP15_1',
        },
        {
            source: 126,
            target: 9,
            value: 1,
            valueid: 'targetab',
            process: 'REP15_2',
        },
        {
            source: 126,
            target: 11,
            value: 1,
            valueid: 'targetab',
            process: 'REP15_3',
        },
        {
            source: 0,
            target: 40,
            value: 1,
            valueid: 'targetab',
            process: 'REP15_1',
        },
        {
            source: 9,
            target: 36,
            value: 1,
            valueid: 'targetab',
            process: 'REP15_2',
        },
        {
            source: 11,
            target: 45,
            value: 1,
            valueid: 'targetab',
            process: 'REP15_3',
        },
        {
            source: 36,
            target: 50,
            value: 1,
            valueid: 'targetab',
            process: 'REP15_2',
        },
        {
            source: 40,
            target: 50,
            value: 1,
            valueid: 'targetab',
            process: 'REP15_1',
        },
        {
            source: 45,
            target: 50,
            value: 1,
            valueid: 'targetab',
            process: 'REP15_3',
        },
        {
            source: 50,
            target: 76,
            value: 1,
            valueid: 'targetab',
            process: 'REP15_3',
        },
        {
            source: 50,
            target: 79,
            value: 1,
            valueid: 'targetab',
            process: 'REP15_1',
        },
        {
            source: 50,
            target: 79,
            value: 1,
            valueid: 'targetab',
            process: 'REP15_2',
        },
        {
            source: 50,
            target: 79,
            value: 1,
            valueid: 'targetab',
            process: 'REP15_3',
        },
        {
            source: 50,
            target: 80,
            value: 1,
            valueid: 'targetab',
            process: 'REP15_1',
        },
        {
            source: 50,
            target: 80,
            value: 1,
            valueid: 'targetab',
            process: 'REP15_2',
        },
        {
            source: 50,
            target: 80,
            value: 1,
            valueid: 'targetab',
            process: 'REP15_3',
        },
    ],
    status: [
        {
            imgUrl: 'y8mGv81.jpg',
        },
    ],
};

REP15.links.forEach((link, index) => {
    link.paperName = 'REP15';
    link.imgUrl = 'y8mGv81.jpg';
    link.id = `REP15-${index}`;
});

export { REP15 };
