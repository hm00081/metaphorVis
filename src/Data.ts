import './styles.scss';

import { LinkColor, SankeyData } from './types/sankey';
import { SankeyLink, SankeyLinkExtended } from '../src/types';

// Data
import { PaperNode } from './data/PaperNode';
import {
    statusImgSet,
    AllPaperDatas,
    TargetAAs,
    TargetABs,
    TargetBAs,
    TargetBBs,
    TargetCAs,
    TargetCBs,
    RepAs,
    RepBs,
    RepCs,
    RepDs,
    RepEAs,
    RepEBs,
    RepFs,
    RepGs,
    RepHs,
    Emptys,
    ClusterOnes,
    ClusterTwos,
    ClusterThrees,
    ClusterFours,
    TIC3Cluster,
    TIC4Cluster,
    TIC5Cluster,
    TIC6Cluster,
    RVC1Cluster,
    RVC2Cluster,
    RVC3Cluster,
    RTC1Cluster,
    RTC2Cluster,
    RTC3Cluster,
    RTC4Cluster,
    Int1s,
    Int2s,
    Int3s,
    Int4s,
    Int5s,
    Int6s,
    Int7s,
    Int8s,
    Int9s,
    Int10s,
    Int11s,
    Int12s,
    Int13s,
    Int14s,
    Int15s,
    Int16s,
    Rep1s,
    Rep2s,
    Rep3s,
    Rep4s,
    Rep5s,
    Rep6s,
    Rep7s,
    Rep8s,
    Rep9s,
    Rep10s,
    Rep11s,
    Rep12s,
    Rep13s,
    Rep14s,
    Rep15s,
    Rep16s,
    Rep17s,
    Rep18s,
    Rep19s,
    Rep20s,
    Rep21s,
    Rep22s,
    Rep23s,
    Rep24s,
    Var1s,
    Var2s,
    Var3s,
    Var4s,
    Var5s,
    Var6s,
    Var7s,
    Tec1s,
    Tec2s,
    Tec3s,
    Tec4s,
    Tec5s,
    Tec6s,
    Tec7s,
    Tec8s,
    Tec9s,
    Tec10s,
    Tec11s,
    Tec12s,
    Tec13s,
    Tec14s,
    Tec15s,
    Tar1s,
    Tar2s,
    Tar3s,
    Tar4s,
    Tar5s,
    Tar6s,
    Tar7s,
    Tar8s,
    Tar9s,
    Tar10s,
    Tar11s,
    Tar12s,
    Tar13s,
    Tar14s,
    Tar15s,
    Tar16s,
    Tar17s,
    Tar18s,
    Tar19s,
    Tar20s,
    Tar21s,
    Tar22s,
    Tar23s,
    Tar24s,
    Tar25s,
    Tar26s,
    Tar27s,
} from './data/AllPaperData';

//@ts-ignore

//TODO 모든 색이 색칠
const fullData: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: AllPaperDatas.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        //@ts-ignore
        if (hasLinkInGroup(link, AllPaperDatas)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
            // if (link.source < 50) {
            //     color = 'blueLinkColor';
            // } else if (link.target >= 76 && link.target < 83) {
            //     color = 'orangeLinkColor';
            // } else if (link.target > 82 && link.target < 100) {
            //     color = 'rubyLinkColor';
            // } else {
            //     color = 'greenLinkColor';
            // }
        } else {
            if (link.category === 'TargetAAs') {
                // category는 현재 아무런 기능이 필요하지 않아보임.
                if (link.source < 50) {
                    color = 'blueLightLinkColor';
                } else {
                    color = 'greenLightLinkColor';
                }
            } else color = 'grayLinkColor';
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLink, linkGroup: SankeyLink[]) {
            let hasLink: boolean = false;

            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.paperName && wantedLink.valueid === linkGroup[i].valueid) {
                        hasLink = true;
                    } else if (wantedLink.paperName === linkGroup[i].paperName) {
                        hasLink = true;
                    }
                } else hasLink = false;
            }
            return hasLink;
        }
    }), // 나중에 수정

    //@ts-ignore
    status: statusImgSet,

    positionStatus: 'init',
};
// console.log(fullData);

const basicData: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: AllPaperDatas.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        // let status: string = '';
        //@ts-ignore
        if (hasLinkInGroup(link, AllPaperDatas)) {
            color = 'grayLinkColor';
            // console.log('blue');
        } else {
            color = 'grayLinkColor';
            // console.log('gray');
        }
        return { ...link, color };
        function hasLinkInGroup(wantedLink: SankeyLink, linkGroup: SankeyLink[]) {
            let hasLink: boolean = false;

            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.valueid === wantedLink.valueid) {
                    hasLink = true;
                } else hasLink = false;
            }
            return hasLink;
        }
    }), // 나중에 수정

    //@ts-ignore
    status: statusImgSet,

    positionStatus: 'init',
};

const targetaa: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: TargetAAs.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        //@ts-ignore
        if (hasLinkInGroup(link, TargetAAs)) {
            // if (link.source < 50) {
            //     color = 'blueLinkColor';
            // } else if (link.target >= 76 && link.target < 83) {
            //     color = 'orangeLinkColor';
            // } else if (link.target > 82 && link.target < 100) {
            //     color = 'rubyLinkColor';
            // } else {
            //     color = 'greenLinkColor';
            // }
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
            if (link.category === 'TargetAAs') {
                // category는 현재 아무런 기능이 필요하지 않아보임.
                if (link.source < 50) {
                    color = 'blueLightLinkColor';
                } else {
                    color = 'greenLightLinkColor';
                }
            } else color = 'grayLinkColor';
        }
        return {
            ...link,
            color,
        };

        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            let color: string = '';
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    //TODO valueid의 타입, 개수 고려하여 분간하기. => data process 추가?
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.valueid === 'targetaa') {
                            hasLink = true;
                        } else if (wantedLink.valueid && wantedLink.valueid.indexOf('targetaa') !== -1) {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,

    positionStatus: 'init',
};

const targetab: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: TargetABs.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        //@ts-ignore
        if (hasLinkInGroup(link, TargetABs)) {
            // if (link.source < 50) {
            //     color = 'blueLinkColor';
            // } else if (link.target >= 76 && link.target < 83) {
            //     color = 'orangeLinkColor';
            // } else if (link.target > 82 && link.target < 100) {
            //     color = 'rubyLinkColor';
            // } else {
            //     color = 'greenLinkColor';
            // }
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
            if (link.category === 'TargetABs') {
                // category는 현재 아무런 기능이 필요하지 않아보임.
                if (link.source < 50) {
                    color = 'blueLightLinkColor';
                } else {
                    color = 'greenLightLinkColor';
                }
            } else color = 'grayLinkColor';
        }
        return {
            ...link,
            color,
        };

        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            let color: string = '';
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.valueid === 'targetab') {
                            hasLink = true;
                        } else if (wantedLink.valueid && wantedLink.valueid.indexOf('targetab') !== -1) {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const targetba: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: TargetBAs.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        //@ts-ignore
        if (hasLinkInGroup(link, TargetBAs)) {
            // if (link.source < 50) {
            //     color = 'blueLinkColor';
            // } else if (link.target >= 76 && link.target < 83) {
            //     color = 'orangeLinkColor';
            // } else if (link.target > 82 && link.target < 100) {
            //     color = 'rubyLinkColor';
            // } else {
            //     color = 'greenLinkColor';
            // }
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
            if (link.category === 'TargetBA') {
                // category는 현재 아무런 기능이 필요하지 않아보임.
                if (link.source < 50) {
                    color = 'blueLightLinkColor';
                } else {
                    color = 'greenLightLinkColor';
                }
            } else color = 'grayLinkColor';
        }
        return {
            ...link,
            color,
        };

        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            let color: string = '';
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.valueid === 'targetba') {
                            hasLink = true;
                        } else if (wantedLink.valueid && wantedLink.valueid.indexOf('targetba') !== -1) {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const targetbb: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: TargetBBs.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        //@ts-ignore
        if (hasLinkInGroup(link, TargetBBs)) {
            // if (link.source < 50) {
            //     color = 'blueLinkColor';
            // } else if (link.target >= 76 && link.target < 83) {
            //     color = 'orangeLinkColor';
            // } else if (link.target > 82 && link.target < 100) {
            //     color = 'rubyLinkColor';
            // } else {
            //     color = 'greenLinkColor';
            // }
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
            if (link.category === 'TargetBB') {
                // category는 현재 아무런 기능이 필요하지 않아보임.
                if (link.source < 50) {
                    color = 'blueLightLinkColor';
                } else {
                    color = 'greenLightLinkColor';
                }
            } else color = 'grayLinkColor';
        }
        return {
            ...link,
            color,
        };

        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            let color: string = '';
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.valueid === 'targetbb') {
                            hasLink = true;
                        } else if (wantedLink.valueid && wantedLink.valueid.indexOf('targetbb') !== -1) {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const targetca: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: TargetCAs.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        //@ts-ignore
        if (hasLinkInGroup(link, TargetCAs)) {
            // if (link.source < 50) {
            //     color = 'blueLinkColor';
            // } else if (link.target >= 76 && link.target < 83) {
            //     color = 'orangeLinkColor';
            // } else if (link.target > 82 && link.target < 100) {
            //     color = 'rubyLinkColor';
            // } else {
            //     color = 'greenLinkColor';
            // }
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
            if (link.category === 'TargetCAs') {
                // category는 현재 아무런 기능이 필요하지 않아보임.
                if (link.source < 50) {
                    color = 'blueLightLinkColor';
                } else {
                    color = 'greenLightLinkColor';
                }
            } else color = 'grayLinkColor';
        }
        return {
            ...link,
            color,
        };

        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            let color: string = '';
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.valueid === 'targetca') {
                            hasLink = true;
                        } else if (wantedLink.valueid && wantedLink.valueid.indexOf('targetca') !== -1) {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const targetcb: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: TargetCBs.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        //@ts-ignore
        if (hasLinkInGroup(link, TargetCBs)) {
            // if (link.source < 50) {
            //     color = 'blueLinkColor';
            // } else if (link.target >= 76 && link.target < 83) {
            //     color = 'orangeLinkColor';
            // } else if (link.target > 82 && link.target < 100) {
            //     color = 'rubyLinkColor';
            // } else {
            //     color = 'greenLinkColor';
            // }
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
            if (link.category === 'TargetCB') {
                // category는 현재 아무런 기능이 필요하지 않아보임.
                if (link.source < 50) {
                    color = 'blueLightLinkColor';
                } else {
                    color = 'greenLightLinkColor';
                }
            } else color = 'grayLinkColor';
        }
        return {
            ...link,
            color,
        };

        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            let color: string = '';
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.valueid === 'targetcb') {
                            hasLink = true;
                        } else if (wantedLink.valueid && wantedLink.valueid.indexOf('targetcb') !== -1) {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const repa: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: RepAs.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        // let status: string = '';
        //@ts-ignore
        if (hasLinkInGroup(link, RepAs)) {
            // if (link.source < 50) {
            //     color = 'blueLinkColor';
            // } else if (link.target >= 76 && link.target < 83) {
            //     color = 'orangeLinkColor';
            // } else if (link.target > 82 && link.target < 100) {
            //     color = 'rubyLinkColor';
            // } else {
            //     color = 'greenLinkColor';
            // }
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
            if (link.category === 'RepA') {
                // category는 현재 아무런 기능이 필요하지 않아보임.
                if (link.source < 50) {
                    color = 'blueLightLinkColor';
                } else {
                    color = 'greenLightLinkColor';
                }
            } else color = 'grayLinkColor';
        }
        return {
            ...link,
            color,
            //, paperIndex:
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            // const [state, setState] = useState();
            let hasLink: boolean = false;
            let color: string = '';
            for (let i = 0; i < linkGroup.length; i++) {
                // if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === 'repb') {
                // 현재 전체 페이퍼에서 작동하는 중.
                // if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === 'repb') {
                //     hasLink = true;
                // } else if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === ['targetca', 'repb']) {
                //     hasLink = true;
                // }
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.valueid === 'repa') {
                            hasLink = true;
                        } else if (wantedLink.valueid && wantedLink.valueid.indexOf('repa') !== -1) {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,

    positionStatus: 'init',
};

const repb: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),

    links: RepBs.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        // let status: string = '';
        //@ts-ignore
        if (hasLinkInGroup(link, RepBs)) {
            // if (link.source < 50) {
            //     color = 'blueLinkColor';
            // } else if (link.target >= 76 && link.target < 83) {
            //     color = 'orangeLinkColor';
            // } else if (link.target > 82 && link.target < 100) {
            //     color = 'rubyLinkColor';
            // } else {
            //     color = 'greenLinkColor';
            // }
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
            if (link.category === 'RepB') {
                // category는 현재 아무런 기능이 필요하지 않아보임.
                if (link.source < 50) {
                    color = 'blueLightLinkColor';
                } else {
                    color = 'greenLightLinkColor';
                }
            } else color = 'grayLinkColor';
        }
        return {
            ...link,
            color,
            //, paperIndex:
        };
        // 뭔가 각 link마다 식별할 수 있는 id 같은게 있으면 될것 같소 ㅋㅋ (현재 모든 value에 의해 색상이 칠해지고 있음..)
        // 각 link마다 id가 있지만 현재 모든 동일 value를 합치며 link가 그려지는 중이여서
        //그 link내에서 해당 id를 가지는 link만을 구현을 하지 못하는 것 같음.
        // 줌링크 영상 한번 다시 보기.
        // 내일은 꼭 일찍 일어나서 일찍와야지 그냥.
        // dict로 다양한 활용방법 생각해보기.
        // AllPaperData와 CalcSankey는 문제없어 보임. 뭐가 문젤까.....
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            // const [state, setState] = useState();
            let hasLink: boolean = false;
            let color: string = '';
            for (let i = 0; i < linkGroup.length; i++) {
                // if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === 'repb') {
                // 현재 전체 페이퍼에서 작동하는 중.
                // if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === 'repb') {
                //     hasLink = true;
                // } else if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === ['targetca', 'repb']) {
                //     hasLink = true;
                // }
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.valueid === 'repb') {
                            hasLink = true;
                        } else if (wantedLink.valueid && wantedLink.valueid.indexOf('repb') !== -1) {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),

    //@ts-ignore
    status: statusImgSet,

    positionStatus: 'init',
};

const repc: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: RepCs.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        // let status: string = '';
        //@ts-ignore
        if (hasLinkInGroup(link, RepCs)) {
            // if (link.source < 50) {
            //     color = 'blueLinkColor';
            // } else if (link.target >= 76 && link.target < 83) {
            //     color = 'orangeLinkColor';
            // } else if (link.target > 82 && link.target < 100) {
            //     color = 'rubyLinkColor';
            // } else {
            //     color = 'greenLinkColor';
            // }
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
            if (link.category === 'RepC') {
                // category는 현재 아무런 기능이 필요하지 않아보임.
                if (link.source < 50) {
                    color = 'blueLightLinkColor';
                } else {
                    color = 'greenLightLinkColor';
                }
            } else color = 'grayLinkColor';
        }
        return {
            ...link,
            color,
            //, paperIndex:
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            // const [state, setState] = useState();
            let hasLink: boolean = false;
            let color: string = '';
            for (let i = 0; i < linkGroup.length; i++) {
                // if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === 'repb') {
                // 현재 전체 페이퍼에서 작동하는 중.
                // if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === 'repb') {
                //     hasLink = true;
                // } else if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === ['targetca', 'repb']) {
                //     hasLink = true;
                // }
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.valueid === 'repc') {
                            hasLink = true;
                        } else if (wantedLink.valueid && wantedLink.valueid.indexOf('repc') !== -1) {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,

    positionStatus: 'init',
};

const repd: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: RepDs.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        // let status: string = '';
        //@ts-ignore
        if (hasLinkInGroup(link, RepDs)) {
            // if (link.source < 50) {
            //     color = 'blueLinkColor';
            // } else if (link.target >= 76 && link.target < 83) {
            //     color = 'orangeLinkColor';
            // } else if (link.target > 82 && link.target < 100) {
            //     color = 'rubyLinkColor';
            // } else {
            //     color = 'greenLinkColor';
            // }
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
            if (link.category === 'RepD') {
                // category는 현재 아무런 기능이 필요하지 않아보임.
                if (link.source < 50) {
                    color = 'blueLightLinkColor';
                } else {
                    color = 'greenLightLinkColor';
                }
            } else color = 'grayLinkColor';
        }
        return {
            ...link,
            color,
            //, paperIndex:
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            // const [state, setState] = useState();
            let hasLink: boolean = false;
            let color: string = '';
            for (let i = 0; i < linkGroup.length; i++) {
                // if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === 'repb') {
                // 현재 전체 페이퍼에서 작동하는 중.
                // if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === 'repb') {
                //     hasLink = true;
                // } else if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === ['targetca', 'repb']) {
                //     hasLink = true;
                // }
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.valueid === 'repd') {
                            hasLink = true;
                        } else if (wantedLink.valueid && wantedLink.valueid.indexOf('repd') !== -1) {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,

    positionStatus: 'init',
};

const repea: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: RepEAs.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        // let status: string = '';
        //@ts-ignore
        if (hasLinkInGroup(link, RepEAs)) {
            // if (link.source < 50) {
            //     color = 'blueLinkColor';
            // } else if (link.target >= 76 && link.target < 83) {
            //     color = 'orangeLinkColor';
            // } else if (link.target > 82 && link.target < 100) {
            //     color = 'rubyLinkColor';
            // } else {
            //     color = 'greenLinkColor';
            // }
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
            if (link.category === 'RepEA') {
                // category는 현재 아무런 기능이 필요하지 않아보임.
                if (link.source < 50) {
                    color = 'blueLightLinkColor';
                } else {
                    color = 'greenLightLinkColor';
                }
            } else color = 'grayLinkColor';
        }
        return {
            ...link,
            color,
            //, paperIndex:
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            // const [state, setState] = useState();
            let hasLink: boolean = false;
            let color: string = '';
            for (let i = 0; i < linkGroup.length; i++) {
                // if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === 'repb') {
                // 현재 전체 페이퍼에서 작동하는 중.
                // if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === 'repb') {
                //     hasLink = true;
                // } else if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === ['targetca', 'repb']) {
                //     hasLink = true;
                // }
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.valueid === 'repea') {
                            hasLink = true;
                        } else if (wantedLink.valueid && wantedLink.valueid.indexOf('repea') !== -1) {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,

    positionStatus: 'init',
};

const repeb: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: RepEBs.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        // let status: string = '';
        //@ts-ignore
        if (hasLinkInGroup(link, RepEBs)) {
            // if (link.source < 50) {
            //     color = 'blueLinkColor';
            // } else if (link.target >= 76 && link.target < 83) {
            //     color = 'orangeLinkColor';
            // } else if (link.target > 82 && link.target < 100) {
            //     color = 'rubyLinkColor';
            // } else {
            //     color = 'greenLinkColor';
            // }
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
            if (link.category === 'RepEB') {
                // category는 현재 아무런 기능이 필요하지 않아보임.
                if (link.source < 50) {
                    color = 'blueLightLinkColor';
                } else {
                    color = 'greenLightLinkColor';
                }
            } else color = 'grayLinkColor';
        }
        return {
            ...link,
            color,
            //, paperIndex:
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            // const [state, setState] = useState();
            let hasLink: boolean = false;
            let color: string = '';
            for (let i = 0; i < linkGroup.length; i++) {
                // if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === 'repb') {
                // 현재 전체 페이퍼에서 작동하는 중.
                // if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === 'repb') {
                //     hasLink = true;
                // } else if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === ['targetca', 'repb']) {
                //     hasLink = true;
                // }
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.valueid === 'repeb') {
                            hasLink = true;
                        } else if (wantedLink.valueid && wantedLink.valueid.indexOf('repeb') !== -1) {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,

    positionStatus: 'init',
};

const repf: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: RepFs.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        // let status: string = '';
        //@ts-ignore
        if (hasLinkInGroup(link, RepFs)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
            if (link.category === 'RepF') {
                // category는 현재 아무런 기능이 필요하지 않아보임.
                if (link.source < 50) {
                    color = 'blueLightLinkColor';
                } else {
                    color = 'greenLightLinkColor';
                }
            } else color = 'grayLinkColor';
        }
        return {
            ...link,
            color,
            //, paperIndex:
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.valueid === 'repf') {
                            hasLink = true;
                        } else if (wantedLink.valueid && wantedLink.valueid.indexOf('repf') !== -1) {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,

    positionStatus: 'init',
};

const repg: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: RepGs.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        // let status: string = '';
        //@ts-ignore
        if (hasLinkInGroup(link, RepGs)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
            if (link.category === 'RepG') {
                // category는 현재 아무런 기능이 필요하지 않아보임.
                if (link.source < 50) {
                    color = 'blueLightLinkColor';
                } else {
                    color = 'greenLightLinkColor';
                }
            } else color = 'grayLinkColor';
        }
        return {
            ...link,
            color,
            //, paperIndex:
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            // const [state, setState] = useState();
            let hasLink: boolean = false;
            let color: string = '';
            for (let i = 0; i < linkGroup.length; i++) {
                // if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === 'repb') {
                // 현재 전체 페이퍼에서 작동하는 중.
                // if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === 'repb') {
                //     hasLink = true;
                // } else if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition && wantedLink.valueid === ['targetca', 'repb']) {
                //     hasLink = true;
                // }
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.valueid === 'repg') {
                            hasLink = true;
                        } else if (wantedLink.valueid && wantedLink.valueid.indexOf('repg') !== -1) {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,

    positionStatus: 'init',
};

const reph: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: RepHs.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, RepHs)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
            if (link.category === 'RepH') {
                // category는 현재 아무런 기능이 필요하지 않아보임.
                if (link.source < 50) {
                    color = 'blueLightLinkColor';
                } else {
                    color = 'greenLightLinkColor';
                }
            } else color = 'grayLinkColor';
        }
        return {
            ...link,
            color,
            //, paperIndex:
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;

            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.valueid === 'reph') {
                            hasLink = true;
                        } else if (wantedLink.valueid && wantedLink.valueid.indexOf('reph') !== -1) {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const clusterone: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: ClusterOnes.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, ClusterOnes)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.cluster === 'cluster1') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const clustertwo: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: ClusterTwos.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, ClusterTwos)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.cluster === 'cluster2') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const clusterthree: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: ClusterThrees.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, ClusterThrees)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.cluster === 'cluster3') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const clusterfour: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: ClusterFours.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, ClusterFours)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.cluster === 'cluster4') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tic3: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: TIC3Cluster.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, TIC3Cluster)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.cluster === 'tic3') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tic4: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: TIC4Cluster.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, TIC4Cluster)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.cluster === 'tic4') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tic5: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: TIC5Cluster.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, TIC5Cluster)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.cluster === 'tic5') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tic6: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: TIC6Cluster.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, TIC6Cluster)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.cluster === 'tic6') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const rvc1: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: RVC1Cluster.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, RVC1Cluster)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.cluster === 'rvc1') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const rvc2: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: RVC2Cluster.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, RVC2Cluster)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.cluster === 'rvc2') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const rvc3: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: RVC3Cluster.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, RVC3Cluster)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.cluster === 'rvc3') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const rtc1: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: RTC1Cluster.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, RTC1Cluster)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.cluster === 'rtc1') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const rtc2: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: RTC2Cluster.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, RTC2Cluster)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.cluster === 'rtc2') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const rtc3: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: RTC3Cluster.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, RTC3Cluster)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.cluster === 'rtc3') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const rtc4: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: RTC4Cluster.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, RTC4Cluster)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.cluster === 'rtc4') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const int1: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Int1s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Int1s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'int') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const int2: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Int2s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Int2s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'int') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const int3: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Int3s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Int3s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'int') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const int4: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Int4s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Int4s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'int') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const int5: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Int5s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Int5s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'int') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const int6: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Int6s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Int6s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'int') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const int7: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Int7s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Int7s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'int') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const int8: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Int8s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Int8s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'int') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const int9: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Int9s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Int9s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'int') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const int10: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Int10s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Int10s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'int') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const int11: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Int11s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Int11s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'int') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const int12: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Int12s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Int12s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'int') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const int13: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Int13s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Int13s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'int') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const int14: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Int14s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Int14s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'int') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const int15: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Int15s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Int15s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'int') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const int16: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Int16s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Int16s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'int') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const rep1: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Rep1s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Rep1s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'rep') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const rep2: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Rep2s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Rep2s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'rep') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const rep3: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Rep3s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Rep3s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'rep') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const rep4: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Rep4s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Rep4s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'rep') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const rep5: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Rep5s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Rep5s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'rep') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const rep6: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Rep6s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Rep6s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'rep') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const rep7: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Rep7s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Rep7s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'rep') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const rep8: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Rep8s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Rep8s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'rep') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const rep9: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Rep9s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Rep9s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'rep') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const rep10: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Rep10s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Rep10s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'rep') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const rep11: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Rep11s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Rep11s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'rep') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const rep12: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Rep12s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Rep12s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'rep') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const rep13: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Rep13s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Rep13s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'rep') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const rep14: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Rep14s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Rep14s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'rep') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const rep15: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Rep15s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Rep15s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'rep') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const rep16: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Rep16s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Rep16s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'rep') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const rep17: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Rep17s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Rep17s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'rep') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const rep18: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Rep18s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Rep18s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'rep') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const rep19: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Rep19s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Rep19s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'rep') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const rep20: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Rep20s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Rep20s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'rep') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const rep21: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Rep21s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Rep21s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'rep') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const rep22: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Rep22s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Rep22s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'rep') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const rep23: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Rep23s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Rep23s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'rep') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const rep24: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Rep24s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Rep24s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'rep') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const var1: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Var1s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Var1s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'var') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const var2: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Var2s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Var2s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'var') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const var3: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Var3s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Var3s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'var') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const var4: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Var4s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Var4s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'var') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const var5: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Var5s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Var5s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'var') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const var6: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Var6s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Var6s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'var') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const var7: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Var7s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Var7s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'var') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tec1: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Tec1s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Tec1s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'tec') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tec2: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Tec2s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Tec2s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'tec') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tec3: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Tec3s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Tec3s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'tec') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tec4: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Tec4s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Tec4s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'tec') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tec5: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Tec5s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Tec5s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'tec') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tec6: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Tec6s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Tec6s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'tec') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tec7: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Tec7s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Tec7s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'tec') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tec8: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Tec8s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Tec8s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'tec') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tec9: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Tec9s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Tec9s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'tec') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tec10: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Tec10s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Tec10s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'tec') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tec11: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Tec11s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Tec11s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'tec') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tec12: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Tec12s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Tec12s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'tec') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tec13: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Tec13s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Tec13s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'tec') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tec14: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Tec14s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Tec14s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'tec') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tec15: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Tec15s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Tec15s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'tec') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tar11: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Tar11s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Tar11s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'tar') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tar12: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Tar12s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Tar12s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'tar') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tar13: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Tar13s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Tar13s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'tar') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tar14: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Tar14s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Tar14s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'tar') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tar15: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Tar15s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Tar15s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'tar') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tar16: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Tar16s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Tar16s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'tar') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tar17: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Tar17s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Tar17s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'tar') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tar18: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Tar18s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Tar18s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'tar') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tar19: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Tar19s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Tar19s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'tar') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tar20: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Tar20s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Tar20s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'tar') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tar1: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Tar1s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Tar1s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'tar') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tar2: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Tar2s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Tar2s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'tar') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tar3: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Tar3s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Tar3s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'tar') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tar4: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Tar4s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Tar4s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'tar') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tar5: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Tar5s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Tar5s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'tar') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tar6: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Tar6s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Tar6s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'tar') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tar7: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Tar7s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Tar7s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'tar') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tar8: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Tar8s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Tar8s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'tar') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tar9: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Tar9s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Tar9s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'tar') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tar10: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Tar10s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Tar10s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'tar') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tar21: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Tar21s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Tar21s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'tar') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tar22: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Tar22s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Tar22s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'tar') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tar23: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Tar23s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Tar23s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'tar') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tar24: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Tar24s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Tar24s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'tar') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tar25: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Tar25s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Tar25s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'tar') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tar26: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Tar26s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Tar26s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'tar') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

const tar27: SankeyData = {
    nodes: PaperNode.nodes.map((node) => {
        let color: string = '';
        color = `hsl(0, 0%, 30%)`;

        return { ...node, color };
    }),
    links: Tar27s.map((link) => {
        let color: LinkColor = 'grayLinkColor';
        if (hasLinkInGroup(link, Tar27s)) {
            if (link.target >= 0 && link.target <= 7) {
                color = 'targetLinkColor';
            } else if (link.target >= 8 && link.target <= 10) {
                color = 'targetLinkOneColor';
            } else if (link.target >= 11 && link.target <= 15) {
                color = 'targetLinkTwoColor';
            } else if (link.target >= 16 && link.target <= 20) {
                color = 'targetLinkThreeColor';
            } else if (link.target >= 21 && link.target <= 30) {
                color = 'targetLinkFourColor';
            } else if ((link.target >= 31 && link.target <= 33) || (link.source >= 31 && link.source <= 33)) {
                color = 'intOneLinkColor';
            } else if (link.target === 34 || link.source === 34) {
                color = 'intOneLightLinkColor';
            } else if (link.target === 35 || link.source === 35) {
                color = 'intOneLight2LinkColor';
            } else if ((link.target >= 36 && link.target <= 38) || (link.source >= 36 && link.source <= 38)) {
                color = 'intOneLight3LinkColor';
            } else if (link.target === 39 || link.source === 39) {
                color = 'intTwoLinkColor';
            } else if (link.target === 40 || link.source === 40) {
                color = 'intTwoLightLinkColor';
            } else if (link.target === 41 || link.source === 41) {
                color = 'intThreeLinkColor';
            } else if (link.target === 42 || link.source === 42) {
                color = 'intThreeLightLinkColor';
            } else if (link.target === 43 || link.source === 43) {
                color = 'intThreeLight1LinkColor';
            } else if (link.target === 44 || link.source === 44) {
                color = 'intThreeLight2LinkColor';
            } else if (link.target === 45 || link.source === 45) {
                color = 'intFourLinkColor';
            } else if (link.target === 46 || link.source === 46) {
                color = 'intFiveLinkColor';
            } else if ((link.target >= 47 && link.target <= 48) || (link.source >= 47 && link.source <= 48)) {
                color = 'intFiveLightLinkColor';
            } else if (link.target === 49 || link.source === 49) {
                color = 'intFiveLight2LinkColor';
            } else if (link.target >= 76 && link.target < 83) {
                color = 'repVisVarColor';
            } else if (link.target > 82 && link.target < 100) {
                color = 'repVisTechColor';
            }
        } else {
        }
        return {
            ...link,
            color,
        };
        function hasLinkInGroup(wantedLink: SankeyLinkExtended, linkGroup: SankeyLinkExtended[]) {
            let hasLink: boolean = false;
            for (let i = 0; i < linkGroup.length; i++) {
                if (wantedLink.sourceNodeYPosition === linkGroup[i].sourceNodeYPosition) {
                    if (wantedLink.process === linkGroup[i].process)
                        if (wantedLink.netnode === 'tar') {
                            hasLink = true;
                        } else hasLink = false;
                } else hasLink = false;
            }
            return hasLink;
        }
    }),
    //@ts-ignore
    status: statusImgSet,
    positionStatus: 'init',
};

export {
    basicData,
    targetaa,
    targetab,
    targetba,
    targetbb,
    targetca,
    targetcb,
    repa,
    repb,
    repc,
    repd,
    repea,
    repeb,
    repf,
    repg,
    reph,
    fullData,
    clusterone,
    clustertwo,
    clusterthree,
    clusterfour,
    tic3,
    tic4,
    tic5,
    tic6,
    rvc1,
    rvc2,
    rvc3,
    rtc1,
    rtc2,
    rtc3,
    rtc4,
    int1,
    int2,
    int3,
    int4,
    int5,
    int6,
    int7,
    int8,
    int9,
    int10,
    int11,
    int12,
    int13,
    int14,
    int15,
    int16,
    rep1,
    rep2,
    rep3,
    rep4,
    rep5,
    rep6,
    rep7,
    rep8,
    rep9,
    rep10,
    rep11,
    rep12,
    rep13,
    rep14,
    rep15,
    rep16,
    rep17,
    rep18,
    rep19,
    rep20,
    rep21,
    rep22,
    rep23,
    rep24,
    var1,
    var2,
    var3,
    var4,
    var5,
    var6,
    var7,
    tec1,
    tec2,
    tec3,
    tec4,
    tec5,
    tec6,
    tec7,
    tec8,
    tec9,
    tec10,
    tec11,
    tec12,
    tec13,
    tec14,
    tec15,
    tar1,
    tar2,
    tar3,
    tar4,
    tar5,
    tar6,
    tar7,
    tar8,
    tar9,
    tar10,
    tar11,
    tar12,
    tar13,
    tar14,
    tar15,
    tar16,
    tar17,
    tar18,
    tar19,
    tar20,
    tar21,
    tar22,
    tar23,
    tar24,
    tar25,
    tar26,
    tar27,
};
