import { SankeyData } from '../types/sankey';

export const PaperNode: SankeyData = {
    nodes: [
        { name: 'person', type: 'Target', subtype: '0', number: 0 },
        { name: 'behavior', type: 'Target', subtype: '0', number: 1 },
        { name: 'psychology', type: 'Target', subtype: '0', number: 2 },
        { name: 'place', type: 'Target', subtype: '0', number: 3 },
        { name: 'thought', type: 'Target', subtype: '0', number: 4 },
        { name: 'service', type: 'Target', subtype: '0', number: 5 },
        { name: 'product', type: 'Target', subtype: '0', number: 6 },
        { name: 'event', type: 'Target', subtype: '0', number: 7 },
        { name: 'simple', type: 'Target', subtype: '1', number: 8 },
        { name: 'composite', type: 'Target', subtype: '1', number: 9 },
        { name: 'derived', type: 'Target', subtype: '1', number: 10 },
        { name: 'opinion', type: 'Target', subtype: '2', number: 11 },
        { name: 'appraisal', type: 'Target', subtype: '2', number: 12 },
        { name: 'stance', type: 'Target', subtype: '2', number: 13 },
        { name: 'attitude', type: 'Target', subtype: '2', number: 14 },
        { name: 'emotion', type: 'Target', subtype: '2', number: 15 },
        { name: 'writer', type: 'Target', subtype: '3', number: 16 },
        { name: 'organization', type: 'Target', subtype: '3', number: 17 },
        { name: 'key player', type: 'Target', subtype: '3', number: 18 },
        { name: 'public', type: 'Target', subtype: '3', number: 19 },
        { name: 'community', type: 'Target', subtype: '3', number: 20 },
        { name: 'birth death', type: 'Target', subtype: '4', number: 21 },
        { name: 'growth contraction', type: 'Target', subtype: '4', number: 22 },
        { name: 'continuity', type: 'Target', subtype: '4', number: 23 },
        { name: 'accumulation', type: 'Target', subtype: '4', number: 24 },
        { name: 'fusion discrete', type: 'Target', subtype: '4', number: 25 },
        { name: 'stable', type: 'Target', subtype: '4', number: 26 },
        { name: 'repeat', type: 'Target', subtype: '4', number: 27 },
        { name: 'peak valley', type: 'Target', subtype: '4', number: 28 },
        { name: 'implication', type: 'Target', subtype: '4', number: 29 },
        { name: 'acceleration', type: 'Target', subtype: '4', number: 30 },
        { name: 'subjectivity detection', type: 'Intermediation', subtype: '0', number: 31 },
        { name: 'emotion cause detection', type: 'Intermediation', subtype: '0', number: 32 },
        { name: 'identifying the intent of sentiment information', type: 'Intermediation', subtype: '0', number: 33 },
        { name: 'detection of evidence event that causes sentiment patterns', type: 'Intermediation', subtype: '0', number: 34 },
        { name: 'argument expression detection', type: 'Intermediation', subtype: '0', number: 35 },
        { name: 'aspect based sentiment analysis', type: 'Intermediation', subtype: '0', number: 36 },
        { name: 'detection of fake or deceptive sentiment information', type: 'Intermediation', subtype: '0', number: 37 },
        { name: 'hate speech', type: 'Intermediation', subtype: '0', number: 38 },
        { name: 'opinion summarization', type: 'Intermediation', subtype: '1', number: 39 },
        { name: 'sentiment information description a multi aspect', type: 'Intermediation', subtype: '1', number: 40 },
        { name: 'emotion detection and classification', type: 'Intermediation', subtype: '2', number: 41 },
        { name: 'polarity classification', type: 'Intermediation', subtype: '2', number: 42 },
        { name: 'personalized sentiment analysis', type: 'Intermediation', subtype: '2', number: 43 },
        { name: 'multilingual and cross lingual sentiment analysis', type: 'Intermediation', subtype: '2', number: 44 },
        { name: 'comparison of different sentiments', type: 'Intermediation', subtype: '3', number: 45 },
        { name: 'timeline analysis', type: 'Intermediation', subtype: '4', number: 46 },
        { name: 'analysis of debates comments and argumentation', type: 'Intermediation', subtype: '4', number: 47 },
        { name: 'finding significant', type: 'Intermediation', subtype: '4', number: 48 },
        { name: 'easy exploration of sentiment information', type: 'Intermediation', subtype: '4', number: 49 },
        { name: 'celestial', type: 'Representation', subtype: '0', number: 50 },
        { name: 'human', type: 'Representation', subtype: '0', number: 51 },
        { name: 'animal', type: 'Representation', subtyㅌpe: '0', number: 52 },
        { name: 'plant', type: 'Representation', subtype: '0', number: 53 },
        { name: 'landscape', type: 'Representation', subtype: '0', number: 54 },
        { name: 'compound', type: 'Representation', subtype: '0', number: 55 },
        { name: 'metal', type: 'Representation', subtype: '0', number: 56 },
        { name: 'nonmetal', type: 'Representation', subtype: '0', number: 57 },
        { name: 'cell', type: 'Representation', subtype: '0', number: 58 },
        { name: 'building&structure', type: 'Representation', subtype: '1', number: 59 },
        { name: 'geometry', type: 'Representation', subtype: '1', number: 60 },
        { name: 'picture', type: 'Representation', subtype: '1', number: 61 },
        { name: 'pattern', type: 'Representation', subtype: '1', number: 62 },
        { name: 'map', type: 'Representation', subtype: '1', number: 63 },
        { name: 'fiber', type: 'Representation', subtype: '1', number: 64 },
        { name: 'food', type: 'Representation', subtype: '1', number: 65 },
        { name: 'toys instrument', type: 'Representation', subtype: '1', number: 66 },
        { name: 'software', type: 'Representation', subtype: '1', number: 67 },
        { name: 'machine', type: 'Representation', subtype: '1', number: 68 },
        { name: 'letter', type: 'Representation', subtype: '1', number: 69 },
        { name: 'natural phenomena', type: 'Representation', subtype: '2', number: 70 },
        { name: 'behavior', type: 'Representation', subtype: '2', number: 71 },
        { name: 'disaster', type: 'Representation', subtype: '2', number: 72 },
        { name: 'space time movement', type: 'Representation', subtype: '2', number: 73 },
        { name: 'machine software work', type: 'Representation', subtype: '3', number: 74 },
        { name: 'creation and destruction', type: 'Representation', subtype: '3', number: 75 },
        { name: 'value', type: 'Vis var&tech', subtype: '0', number: 76 },
        { name: 'color', type: 'Vis var&tech', subtype: '0', number: 77 },
        { name: 'size', type: 'Vis var&tech', subtype: '0', number: 78 },
        { name: 'shape', type: 'Vis var&tech', subtype: '0', number: 79 },
        { name: 'position', type: 'Vis var&tech', subtype: '0', number: 80 },
        { name: 'orientation', type: 'Vis var&tech', subtype: '0', number: 81 },
        { name: 'distance', type: 'Vis var&tech', subtype: '0', number: 82 },
        { name: '3d visualization', type: 'Vis var&tech', subtype: '1', number: 83 },
        { name: 'node link diagram', type: 'Vis var&tech', subtype: '1', number: 84 },
        { name: 'bubble chart', type: 'Vis var&tech', subtype: '1', number: 85 },
        { name: 'area chart', type: 'Vis var&tech', subtype: '1', number: 86 },
        { name: 'line plot', type: 'Vis var&tech', subtype: '1', number: 87 },
        { name: 'box plot', type: 'Vis var&tech', subtype: '1', number: 88 },
        { name: 'pie chart', type: 'Vis var&tech', subtype: '1', number: 89 },
        { name: 'radar chart', type: 'Vis var&tech', subtype: '1', number: 90 },
        { name: 'tree map', type: 'Vis var&tech', subtype: '1', number: 91 },
        { name: 'tag cloud', type: 'Vis var&tech', subtype: '1', number: 92 },
        { name: 'heatmap', type: 'Vis var&tech', subtype: '1', number: 93 },
        { name: 'scatter plot', type: 'Vis var&tech', subtype: '1', number: 94 },
        { name: 'mds map', type: 'Vis var&tech', subtype: '1', number: 95 },
        { name: 'parallel coordinate', type: 'Vis var&tech', subtype: '1', number: 96 },
        { name: 'pixel based plot', type: 'Vis var&tech', subtype: '1', number: 97 },
        { name: 'time oriented visualization', type: 'Vis var&tech', subtype: '1', number: 98 },
        { name: 'spatial based visualization', type: 'Vis var&tech', subtype: '1', number: 99 },
        { name: 'CAA20', type: 'Paper', number: 100 },
        { name: 'CGK21', type: 'Paper', number: 101 },
        { name: 'CSL12', type: 'Paper', number: 102 },
        { name: 'DMC09', type: 'Paper', number: 103 },
        { name: 'EAIA17', type: 'Paper', number: 104 },
        { name: 'EYG15', type: 'Paper', number: 105 },
        { name: 'FCF09', type: 'Paper', number: 106 },
        { name: 'GGS12MT', type: 'Paper', number: 107 },
        { name: 'GGS12ST', type: 'Paper', number: 108 },
        { name: 'GGS12TPS', type: 'Paper', number: 109 },
        { name: 'HYZ13', type: 'Paper', number: 110 },
        { name: 'JTM11', type: 'Paper', number: 111 },
        { name: 'JSM16', type: 'Paper', number: 112 },
        { name: 'JX17', type: 'Paper', number: 113 },
        { name: 'KSBK15', type: 'Paper', number: 114 },
        { name: 'LGX16', type: 'Paper', number: 115 },
        { name: 'LJC18', type: 'Paper', number: 116 },
        { name: 'LLN14', type: 'Paper', number: 117 },
        { name: 'LWW13', type: 'Paper', number: 118 },
        { name: 'MA16', type: 'Paper', number: 119 },
        { name: 'MDD10', type: 'Paper', number: 120 },
        { name: 'MEV16', type: 'Paper', number: 121 },
        { name: 'MHK16', type: 'Paper', number: 122 },
        { name: 'MVM17', type: 'Paper', number: 123 },
        { name: 'MWSO08', type: 'Paper', number: 124 },
        { name: 'PC15PV', type: 'Paper', number: 125 },
        { name: 'REP15', type: 'Paper', number: 126 },
        { name: 'SCS16', type: 'Paper', number: 127 },
        { name: 'SCS17', type: 'Paper', number: 128 },
        { name: 'SCS19', type: 'Paper', number: 129 },
        { name: 'SSK12', type: 'Paper', number: 130 },
        { name: 'VWH13', type: 'Paper', number: 131 },
        { name: 'XD99', type: 'Paper', number: 132 },
        { name: 'XWL17', type: 'Paper', number: 133 },
        { name: 'XWS16', type: 'Paper', number: 134 },
        { name: 'YFS10', type: 'Paper', number: 135 },
        { name: 'ZGWZ14', type: 'Paper', number: 136 },
        { name: 'ZLW13', type: 'Paper', number: 137 },
        { name: 'SRJ13', type: 'Paper', number: 138 },
        { name: 'RSRY12', type: 'Paper', number: 139 },
        { name: 'FAKM15', type: 'Paper', number: 140 },
        { name: 'YSK14', type: 'Paper', number: 141 },
        { name: 'CSL16', type: 'Paper', number: 142 },
        { name: 'RRR19', type: 'Paper', number: 143 },
        { name: 'YCC20', type: 'Paper', number: 144 },
        { name: 'MDDD16', type: 'Paper', number: 145 },
        { name: 'GYS14', type: 'Paper', number: 146 },
        { name: 'MDJW07', type: 'Paper', number: 147 },
        { name: 'KWL09', type: 'Paper', number: 148 },
        { name: 'BN11B', type: 'Paper', number: 149 },
        { name: 'MLG06', type: 'Paper', number: 150 },
        { name: 'FA20', type: 'Paper', number: 151 },
        { name: 'WHWS12', type: 'Paper', number: 152 },
        { name: 'FZC18', type: 'Paper', number: 153 },
        { name: 'ASTC06', type: 'Paper', number: 154 },
        { name: 'DJM12', type: 'Paper', number: 155 },
        { name: 'MEA17', type: 'Paper', number: 156 },
        { name: 'SFJ16', type: 'Paper', number: 157 },
        { name: 'XJX21', type: 'Paper', number: 158 },
        { name: 'ASG21', type: 'Paper', number: 159 },
        //{ name: 'VIR21', type: 'Paper', number: 160 },
        //{ name: 'DEV20', type: 'Paper', number: 161 },
        //{ name: 'NYT19', type: 'Paper', number: 162 },
        //{ name: 'LEP15', type: 'Paper', number: 163 },
        //{ name: 'UDT19', type: 'Paper', number: 164 },
        //{ name: 'BCE12', type: 'Paper', number: 165 },
    ],
    links: [],
    status: [],
};
