import { SankeyData } from '../types/sankey';

const MLG06: SankeyData = {
    nodes: [],

    links: [
        {
            source: 150,
            target: 6,
            value: 1,
            valueid: ['targetba', 'repc'],
            process: 'MLG06_1',
        },
        {
            source: 150,
            target: 12,
            value: 1,
            valueid: ['targetba', 'repc'],
            process: 'MLG06_2',
        },
        {
            source: 6,
            target: 39,
            value: 1,
            valueid: ['targetba', 'repc'],
            process: 'MLG06_1',
        },
        {
            source: 12,
            target: 39,
            value: 1,
            valueid: ['targetba', 'repc'],
            process: 'MLG06_2',
        },
        {
            source: 12,
            target: 42,
            value: 1,
            valueid: ['targetba', 'repc'],
            process: 'MLG06_2',
        },
        {
            source: 12,
            target: 49,
            value: 1,
            valueid: ['targetba', 'repc'],
            process: 'MLG06_2',
        },
        {
            source: 39,
            target: 53,
            value: 1,
            valueid: ['targetba', 'repc'],
            process: 'MLG06_1',
        },
        {
            source: 39,
            target: 53,
            value: 1,
            valueid: ['targetba', 'repc'],
            process: 'MLG06_2',
        },
        {
            source: 42,
            target: 53,
            value: 1,
            valueid: ['targetba', 'repc'],
            process: 'MLG06_1',
        },
        {
            source: 49,
            target: 53,
            value: 1,
            valueid: ['targetba', 'repc'],
            process: 'MLG06_2',
        },
        {
            source: 53,
            target: 76,
            value: 1,
            valueid: ['targetba', 'repc'],
            process: 'MLG06_1',
        },
        {
            source: 53,
            target: 76,
            value: 1,
            valueid: ['targetba', 'repc'],
            process: 'MLG06_2',
        },
        {
            source: 53,
            target: 77,
            value: 1,
            valueid: ['targetba', 'repc'],
            process: 'MLG06_1',
        },
        {
            source: 53,
            target: 77,
            value: 1,
            valueid: ['targetba', 'repc'],
            process: 'MLG06_2',
        },
        {
            source: 53,
            target: 78,
            value: 1,
            valueid: ['targetba', 'repc'],
            process: 'MLG06_1',
        },
        {
            source: 53,
            target: 78,
            value: 1,
            valueid: ['targetba', 'repc'],
            process: 'MLG06_2',
        },
        {
            source: 53,
            target: 82,
            value: 1,
            valueid: ['targetba', 'repc'],
            process: 'MLG06_1',
        },
        {
            source: 53,
            target: 82,
            value: 1,
            valueid: ['targetba', 'repc'],
            process: 'MLG06_2',
        },
        {
            source: 53,
            target: 88,
            value: 1,
            valueid: ['targetba', 'repc'],
            process: 'MLG06_1',
        },
    ],
    status: [
        {
            imgUrl: '',
        },
    ],
};

MLG06.links.forEach((link, index) => {
    link.paperName = 'MLG06';
    link.imgUrl = 'qXOBST8.jpg';
    link.id = `MLG06-${index}`;
});

export { MLG06 };
