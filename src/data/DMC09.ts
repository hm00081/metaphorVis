import { SankeyData } from '../types/sankey';

const DMC09: SankeyData = {
    nodes: [],

    links: [
        {
            source: 103,
            target: 9,
            value: 1,
            valueid: 'targetba',
            process: 'DMC09_1',
        },
        {
            source: 103,
            target: 11,
            value: 1,
            valueid: 'targetba',
            process: 'DMC09_2',
        },
        {
            source: 9,
            target: 36,
            value: 1,
            valueid: 'targetba',
            process: 'DMC09_1',
        },
        {
            source: 11,
            target: 42,
            value: 1,
            valueid: 'targetba',
            process: 'DMC09_2',
        },
        {
            source: 36,
            target: 58,
            value: 1,
            valueid: 'targetba',
            process: 'DMC09_1',
        },
        {
            source: 42,
            target: 58,
            value: 1,
            valueid: 'targetba',
            process: 'DMC09_2',
        },
        {
            source: 58,
            target: 76,
            value: 1,
            valueid: 'targetba',
            process: 'DMC09_1',
        },
        {
            source: 58,
            target: 76,
            value: 1,
            valueid: 'targetba',
            process: 'DMC09_2',
        },
        {
            source: 58,
            target: 77,
            value: 1,
            valueid: 'targetba',
            process: 'DMC09_1',
        },
        {
            source: 58,
            target: 77,
            value: 1,
            valueid: 'targetba',
            process: 'DMC09_2',
        },
        {
            source: 58,
            target: 84,
            value: 1,
            valueid: 'targetba',
            process: 'DMC09_1',
        },
        {
            source: 58,
            target: 93,
            value: 1,
            valueid: 'targetba',
            process: 'DMC09_1',
        },
    ],
    status: [
        {
            imgUrl: 'KTkfwLw.png',
        },
    ],
};

DMC09.links.forEach((link, index) => {
    link.paperName = 'DMC09';
    link.imgUrl = 'KTkfwLw.png';
    link.id = `DMC09-${index}`;
});

export { DMC09 };
