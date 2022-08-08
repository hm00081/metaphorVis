import { SankeyData } from '../types/sankey';

const SFJ16: SankeyData = {
    nodes: [],

    links: [
        {
            source: 157,
            target: 5,
            value: 1,
            valueid: ['targetaa', 'repb'],
            process: 'SFJ16_1',
        },
        {
            source: 157,
            target: 11,
            value: 1,
            valueid: ['targetaa', 'repb'],
            process: 'SFJ16_1',
        },
        {
            source: 157,
            target: 12,
            value: 1,
            valueid: ['targetaa', 'repb'],
            process: 'SFJ16_1',
        },
        {
            source: 157,
            target: 22,
            value: 1,
            valueid: ['targetaa', 'repb'],
            process: 'SFJ16_1',
        },
        {
            source: 157,
            target: 5,
            value: 1,
            valueid: ['targetaa', 'repb'],
            process: 'SFJ16_2',
        },
        {
            source: 157,
            target: 22,
            value: 1,
            valueid: ['targetaa', 'repb'],
            process: 'SFJ16_2',
        },
        {
            source: 157,
            target: 11,
            value: 1,
            valueid: ['targetaa', 'repd'],
            process: 'SFJ16_3',
        },
        {
            source: 157,
            target: 12,
            value: 1,
            valueid: ['targetaa', 'repd'],
            process: 'SFJ16_3',
        },
        {
            source: 157,
            target: 16,
            value: 1,
            valueid: ['targetaa', 'repd'],
            process: 'SFJ16_3',
        },
        {
            source: 5,
            target: 40,
            value: 1,
            valueid: ['targetaa', 'repb'],
            process: 'SFJ16_1',
        },
        {
            source: 11,
            target: 40,
            value: 1,
            valueid: ['targetaa', 'repb'],
            process: 'SFJ16_1',
        },
        {
            source: 12,
            target: 40,
            value: 1,
            valueid: ['targetaa', 'repb'],
            process: 'SFJ16_1',
        },
        {
            source: 22,
            target: 40,
            value: 1,
            valueid: ['targetaa', 'repb'],
            process: 'SFJ16_1',
        },
        {
            source: 40,
            target: 54,
            value: 1,
            valueid: ['targetaa', 'repb'],
            process: 'SFJ16_1',
        },
        {
            source: 54,
            target: 89,
            value: 1,
            valueid: ['targetaa', 'repb'],
            process: 'SFJ16_1',
        },
        {
            source: 54,
            target: 98,
            value: 1,
            valueid: ['targetaa', 'repb'],
            process: 'SFJ16_1',
        },
        {
            source: 5,
            target: 46,
            value: 1,
            valueid: ['targetaa', 'repb'],
            process: 'SFJ16_2',
        },
        {
            source: 22,
            target: 46,
            value: 1,
            valueid: ['targetaa', 'repb'],
            process: 'SFJ16_2',
        },
        {
            source: 46,
            target: 54,
            value: 1,
            valueid: ['targetaa', 'repb'],
            process: 'SFJ16_2',
        },
        {
            source: 54,
            target: 76,
            value: 1,
            valueid: ['targetaa', 'repb'],
            process: 'SFJ16_2',
        },
        {
            source: 54,
            target: 77,
            value: 1,
            valueid: ['targetaa', 'repb'],
            process: 'SFJ16_2',
        },
        {
            source: 54,
            target: 79,
            value: 1,
            valueid: ['targetaa', 'repb'],
            process: 'SFJ16_2',
        },
        {
            source: 54,
            target: 98,
            value: 1,
            valueid: ['targetaa', 'repb'],
            process: 'SFJ16_2',
        },
        {
            source: 11,
            target: 49,
            value: 1,
            valueid: ['targetaa', 'repd'],
            process: 'SFJ16_3',
        },
        {
            source: 12,
            target: 49,
            value: 1,
            valueid: ['targetaa', 'repd'],
            process: 'SFJ16_3',
        },
        {
            source: 16,
            target: 49,
            value: 1,
            valueid: ['targetaa', 'repd'],
            process: 'SFJ16_3',
        },
        {
            source: 49,
            target: 55,
            value: 1,
            valueid: ['targetaa', 'repd'],
            process: 'SFJ16_3',
        },
        {
            source: 55,
            target: 84,
            value: 1,
            valueid: ['targetaa', 'repd'],
            process: 'SFJ16_3',
        },
        {
            source: 55,
            target: 92,
            value: 1,
            valueid: ['targetaa', 'repd'],
            process: 'SFJ16_3',
        },
    ],
    status: [
        {
            imgUrl: '',
        },
    ],
};

SFJ16.links.forEach((link, index) => {
    link.paperName = 'SFJ16';
    link.imgUrl = 'e3PRKTM.jpg';
    link.id = `SFJ16-${index}`;
});

export { SFJ16 };
