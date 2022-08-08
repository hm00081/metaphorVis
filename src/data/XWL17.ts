import { SankeyData } from '../types/sankey';

const XWL17: SankeyData = {
    nodes: [],

    links: [
        {
            source: 133,
            target: 6,
            value: 1,
            valueid: 'targetba',
            process: 'XWL17_1',
        },
        {
            source: 133,
            target: 6,
            value: 1,
            valueid: 'targetba',
            process: 'XWL17_4',
        },
        {
            source: 133,
            target: 15,
            value: 1,
            valueid: 'targetba',
            process: 'XWL17_2',
        },
        {
            source: 133,
            target: 15,
            value: 1,
            valueid: 'targetba',
            process: 'XWL17_3',
        },
        {
            source: 133,
            target: 16,
            value: 1,
            valueid: 'targetba',
            process: 'XWL17_4',
        },
        {
            source: 6,
            target: 45,
            value: 1,
            valueid: 'targetba',
            process: 'XWL17_1',
        },
        {
            source: 6,
            target: 49,
            value: 1,
            valueid: 'targetba',
            process: 'XWL17_4',
        },
        {
            source: 15,
            target: 41,
            value: 1,
            valueid: 'targetba',
            process: 'XWL17_3',
        },
        {
            source: 16,
            target: 49,
            value: 1,
            valueid: 'targetba',
            process: 'XWL17_4',
        },
        {
            source: 15,
            target: 45,
            value: 1,
            valueid: 'targetba',
            process: 'XWL17_2',
        },
        {
            source: 41,
            target: 61,
            value: 1,
            valueid: 'targetba',
            process: 'XWL17_3',
        },
        {
            source: 45,
            target: 61,
            value: 1,
            valueid: 'targetba',
            process: 'XWL17_1',
        },
        {
            source: 45,
            target: 61,
            value: 1,
            valueid: 'targetba',
            process: 'XWL17_2',
        },
        {
            source: 61,
            target: 77,
            value: 1,
            valueid: 'targetba',
            process: 'XWL17_1',
        },
        {
            source: 61,
            target: 77,
            value: 1,
            valueid: 'targetba',
            process: 'XWL17_2',
        },
        {
            source: 61,
            target: 84,
            value: 1,
            valueid: 'targetba',
            process: 'XWL17_2',
        },
        {
            source: 61,
            target: 77,
            value: 1,
            valueid: 'targetba',
            process: 'XWL17_3',
        },
        {
            source: 49,
            target: 61,
            value: 1,
            valueid: 'targetba',
            process: 'XWL17_4',
        },
        {
            source: 61,
            target: 84,
            value: 1,
            valueid: 'targetba',
            process: 'XWL17_4',
        },
    ],
    status: [
        {
            imgUrl: 'VqSzaXU.jpg',
        },
    ],
};

XWL17.links.forEach((link, index) => {
    link.paperName = 'XWL17';
    link.imgUrl = 'VqSzaXU.jpg';
    link.id = `XWL17-${index}`;
});

export { XWL17 };
