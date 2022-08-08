import { SankeyData } from '../types/sankey';

const LGX16: SankeyData = {
    nodes: [],

    links: [
        {
            source: 115,
            target: 4,
            value: 1,
            valueid: 'repf ',
            process: 'LGX16_2',
        },
        {
            source: 115,
            target: 4,
            value: 1,
            process: 'LGX16_1',
        },
        {
            source: 115,
            target: 5,
            value: 1,
            valueid: ['repd ', 'targetbb'],
            process: 'LGX16_3',
        },
        {
            source: 115,
            target: 11,
            value: 1,
            valueid: 'repea ',
            process: 'LGX16_4',
        },
        {
            source: 115,
            target: 12,
            value: 1,
            valueid: 'repea ',
            process: 'LGX16_4',
        },
        {
            source: 115,
            target: 17,
            value: 1,
            valueid: 'repg ',
            process: 'LGX16_5',
        },
        {
            source: 115,
            target: 19,
            value: 1,
            valueid: 'repg ',
            process: 'LGX16_5',
        },
        {
            source: 4,
            target: 40,
            value: 1,
            process: 'LGX16_1',
        },
        {
            source: 4,
            target: 40,
            value: 1,
            valueid: 'repf ',
            process: 'LGX16_2',
        },
        {
            source: 5,
            target: 40,
            value: 1,
            valueid: ['repd ', 'targetbb'],
            process: 'LGX16_3',
        },
        {
            source: 11,
            target: 33,
            value: 1,
            valueid: 'repea ',
            process: 'LGX16_4',
        },
        {
            source: 11,
            target: 45,
            value: 1,
            valueid: 'repea ',
            process: 'LGX16_4',
        },
        {
            source: 12,
            target: 33,
            value: 1,
            valueid: 'repea ',
            process: 'LGX16_4',
        },
        {
            source: 12,
            target: 45,
            value: 1,
            valueid: 'repea',
            process: 'LGX16_4',
        },
        {
            source: 17,
            target: 45,
            value: 1,
            valueid: 'repg',
            process: 'LGX16_5',
        },
        {
            source: 19,
            target: 45,
            value: 1,
            valueid: 'repg',
            process: 'LGX16_5',
        },
        {
            source: 40,
            target: 70,
            value: 1,
            process: 'LGX16_1',
        },
        {
            source: 40,
            target: 60,
            value: 1,
            valueid: 'repf ',
            process: 'LGX16_2',
        },
        {
            source: 40,
            target: 55,
            value: 1,
            valueid: ['repd ', 'targetbb'],
            process: 'LGX16_3',
        },
        {
            source: 33,
            target: 59,
            value: 1,
            valueid: 'repea ',
            process: 'LGX16_4',
        },
        {
            source: 45,
            target: 59,
            value: 1,
            valueid: 'repea ',
            process: 'LGX16_4',
        },
        {
            source: 45,
            target: 68,
            value: 1,
            valueid: 'repg ',
            process: 'LGX16_5',
        },
        {
            source: 70,
            target: 80,
            value: 1,
            process: 'LGX16_1',
        },
        {
            source: 60,
            target: 77,
            value: 1,
            valueid: 'repf ',
            process: 'LGX16_2',
        },
        {
            source: 60,
            target: 78,
            value: 1,
            valueid: 'repf ',
            process: 'LGX16_2',
        },
        {
            source: 55,
            target: 77,
            value: 1,
            valueid: ['repd ', 'targetbb'],
            process: 'LGX16_3',
        },
        {
            source: 55,
            target: 78,
            value: 1,
            valueid: ['repd ', 'targetbb'],
        },
        {
            source: 55,
            target: 85,
            value: 1,
            valueid: ['repd ', 'targetbb'],
            process: 'LGX16_3',
        },
        {
            source: 59,
            target: 76,
            value: 1,
            valueid: 'repea ',
            process: 'LGX16_4',
        },
        {
            source: 59,
            target: 77,
            value: 1,
            valueid: 'repea ',
            process: 'LGX16_4',
        },
        {
            source: 59,
            target: 80,
            value: 1,
            valueid: 'repea ',
            process: 'LGX16_4',
        },
        {
            source: 68,
            target: 80,
            value: 1,
            valueid: 'repg ',
            process: 'LGX16_5',
        },
    ],
    status: [
        {
            imgUrl: '',
        },
    ],
};

LGX16.links.forEach((link, index) => {
    link.paperName = 'LGX16';
    link.imgUrl = 'WcypLMa.png';
    link.id = `LGX16-${index}`;
});

export { LGX16 };
