import { SankeyData } from '../types/sankey';

const YSK14: SankeyData = {
    nodes: [],

    links: [
        {
            source: 141,
            target: 11,
            value: 1,
            valueid: ['targetba', 'targetbb', 'reph'],
            process: 'YSK14_2',
        },
        {
            source: 141,
            target: 11,
            value: 1,
            valueid: ['targetba', 'targetbb', 'repb'],
            process: 'YSK14_1',
        },
        {
            source: 141,
            target: 16,
            value: 1,
            valueid: 'repb',
            process: 'YSK14_3',
        },
        {
            source: 141,
            target: 16,
            value: 1,
            valueid: 'reph',
            process: 'YSK14_4',
        },
        {
            source: 141,
            target: 22,
            value: 1,
            valueid: ['targetcb', 'reph'],
            process: 'YSK14_6',
        },
        {
            source: 141,
            target: 22,
            value: 1,
            valueid: ['targetcb', 'repb'],
            process: 'YSK14_5',
        },
        {
            source: 141,
            target: 22,
            value: 1,
            valueid: ['targetcb', 'repb'],
            process: 'YSK14_7',
        },
        {
            source: 11,
            target: 39,
            value: 1,
            valueid: ['targetba', 'targetbb', 'reph'],
            process: 'YSK14_2',
        },
        {
            source: 11,
            target: 39,
            value: 1,
            valueid: ['targetba', 'targetbb', 'repb'],
            process: 'YSK14_1',
        },
        {
            source: 16,
            target: 48,
            value: 1,
            valueid: 'repb',
            process: 'YSK14_3',
        },
        {
            source: 16,
            target: 48,
            value: 1,
            valueid: 'reph',
            process: 'YSK14_4',
        },
        {
            source: 24,
            target: 46,
            value: 1,
            valueid: ['targetcb', 'repb'],
            process: 'YSK14_5',
        },
        {
            source: 24,
            target: 46,
            value: 1,
            valueid: ['targetcb', 'repb'],
            process: 'YSK14_7',
        },
        {
            source: 22,
            target: 46,
            value: 1,
            valueid: ['targetcb', 'reph'],
            process: 'YSK14_6',
        },
        {
            source: 39,
            target: 54,
            value: 1,
            valueid: ['targetba', 'targetbb', 'repb'],
            process: 'YSK14_1',
        },
        {
            source: 39,
            target: 62,
            value: 1,
            valueid: ['targetba', 'targetbb', 'reph'],
            process: 'YSK14_2',
        },
        {
            source: 46,
            target: 54,
            value: 1,
            valueid: ['targetcb', 'repb'],
            process: 'YSK14_5',
        },
        {
            source: 46,
            target: 62,
            value: 1,
            valueid: ['targetcb', 'reph'],
            process: 'YSK14_6',
        },
        {
            source: 46,
            target: 70,
            value: 1,
            valueid: ['targetcb', 'repb'],
            process: 'YSK14_7',
        },
        {
            source: 48,
            target: 54,
            value: 1,
            valueid: 'repb',
            process: 'YSK14_3',
        },
        {
            source: 48,
            target: 62,
            value: 1,
            valueid: 'reph',
            process: 'YSK14_4',
        },
        {
            source: 54,
            target: 78,
            value: 1,
            valueid: ['targetba', 'targetbb', 'repb'],
            process: 'YSK14_1',
        },
        {
            source: 54,
            target: 78,
            value: 1,
            valueid: ['targetcb', 'repb'],
            process: 'YSK14_5',
        },
        {
            source: 62,
            target: 76,
            value: 1,
            valueid: 'reph',
            process: 'YSK14_4',
        },
        {
            source: 62,
            target: 76,
            value: 1,
            valueid: ['targetcb', 'reph'],
            process: 'YSK14_6',
        },
        {
            source: 62,
            target: 77,
            value: 1,
            valueid: 'reph',
            process: 'YSK14_4',
        },
        {
            source: 62,
            target: 77,
            value: 1,
            valueid: ['targetba', 'targetbb', 'reph'],
            process: 'YSK14_2',
        },
        {
            source: 54,
            target: 84,
            value: 1,
            valueid: ['targetba', 'targetbb', 'repb'],
            process: 'YSK14_1',
        },
        {
            source: 54,
            target: 86,
            value: 1,
            valueid: 'repb',
            process: 'YSK14_3',
        },
        {
            source: 54,
            target: 98,
            value: 1,
            valueid: ['targetcb', 'repb'],
            process: 'YSK14_5',
        },
        {
            source: 62,
            target: 98,
            value: 1,
            valueid: ['targetcb', 'reph'],
            process: 'YSK14_6',
        },
        {
            source: 70,
            target: 98,
            value: 1,
            valueid: ['targetcb', 'repb'],
            process: 'YSK14_7',
        },
    ],
    status: [
        {
            imgUrl: '',
        },
    ],
};

YSK14.links.map((link, index) => {
    link.paperName = 'YSK14';
    link.category = 'RepB';
    link.imgUrl = 'sBwMjs9.png';
    link.id = `YSK14-${index}`;
});

export { YSK14 };
