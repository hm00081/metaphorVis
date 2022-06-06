import { SankeyData } from '../types/sankey';

const FAKM15: SankeyData = {
    nodes: [],

    links: [
        {
            source: 140,
            target: 15,
            value: 1,
            valueid: ['repf', ' targetca'],
        }, // a[0]
        {
            source: 15,
            target: 42,
            value: 1,
            valueid: ['repf', ' targetca'],
        }, // a[0]
        {
            source: 15,
            target: 45,
            value: 1,
            valueid: ['repf', ' targetca'],
        }, // a[0]
        {
            source: 42,
            target: 60,
            value: 1,
            valueid: ['repf', ' targetca'],
        },
        {
            source: 45,
            target: 60,
            value: 1,
            valueid: ['repf', ' targetca'],
        },
        {
            source: 60,
            target: 76,
            value: 1,
            valueid: ['repf', ' targetca'],
        },
        {
            source: 60,
            target: 77,
            value: 1,
            valueid: ['repf', ' targetca'],
        },
        {
            source: 140,
            target: 15,
            value: 1,
            valueid: ['repea', ' targetca'],
        }, // a[0]
        {
            source: 15,
            target: 49,
            value: 1,
            valueid: ['repea', ' targetca'],
        },
        {
            source: 49,
            target: 59,
            value: 1,
            valueid: ['repea', ' targetca'],
        },
        {
            source: 59,
            target: 78,
            value: 1,
            valueid: ['repea', ' targetca'],
        },
        {
            source: 59,
            target: 80,
            value: 1,
            valueid: ['repea', ' targetca'],
        },
        {
            source: 59,
            target: 88,
            value: 1,
            valueid: ['repea', ' targetca'],
        },
        {
            source: 140,
            target: 24,
            value: 1,
            valueid: 'targetca',
        },
        {
            source: 24,
            target: 46,
            value: 1,
            valueid: 'targetca',
        },
        {
            source: 24,
            target: 49,
            value: 1,
            valueid: 'targetca',
        },
        {
            source: 46,
            target: 75,
            value: 1,
            valueid: 'targetca',
        },
        {
            source: 49,
            target: 75,
            value: 1,
            valueid: 'targetca',
        },
        {
            source: 75,
            target: 88,
            value: 1,
            valueid: 'targetca',
        },
        {
            source: 75,
            target: 98,
            value: 1,
            valueid: 'targetca',
        },
    ],
    status: [
        {
            status: 'TargetCA',
        },
        {
            status: 'RepF',
        },
    ],
};

FAKM15.links.forEach((link, index) => {
    link.paperName = 'FAKM15';
    link.id = `FAKM15-${index}`;
});

export { FAKM15 };
