import { SankeyData } from '../types/sankey';

const ZLW13: SankeyData = {
    nodes: [],

    links: [
        {
            source: 137,
            target: 7,
            value: 1,
            valueid: 'targetca',
            process: 'ZLW13_1',
        },
        {
            source: 137,
            target: 11,
            value: 1,
            valueid: 'targetca',
            process: 'ZLW13_1',
        },
        {
            source: 137,
            target: 23,
            value: 1,
            process: 'ZLW13_2',
        },
        {
            source: 7,
            target: 42,
            value: 1,
            valueid: 'targetca',
            process: 'ZLW13_1',
        },
        {
            source: 11,
            target: 42,
            value: 1,
            valueid: 'targetca',
            process: 'ZLW13_1',
        },
        {
            source: 42,
            target: 55,
            value: 1,
            valueid: 'targetca',
            process: 'ZLW13_1',
        },
        {
            source: 46,
            target: 71,
            value: 1,
            process: 'ZLW13_2',
        },
        {
            source: 55,
            target: 77,
            value: 1,
            valueid: 'targetca',
            process: 'ZLW13_1',
        },
        {
            source: 55,
            target: 80,
            value: 1,
            valueid: 'targetca',
            process: 'ZLW13_1',
        },
        {
            source: 71,
            target: 98,
            value: 1,
            process: 'ZLW13_2',
        },
    ],
    status: [
        {
            imgUrl: '',
        },
    ],
};

ZLW13.links.forEach((link, index) => {
    link.paperName = 'ZLW13';
    link.imgUrl = 'KvCmzam.png';
    link.id = `ZLW13-${index}`;
});

export { ZLW13 };
