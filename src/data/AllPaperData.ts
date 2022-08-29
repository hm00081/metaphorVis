import { CAA20 } from './CAA20';
import { CGK21 } from './CGK21';
import { CSL12 } from './CSL12';
import { DMC09 } from './DMC09';
import { EAIA17 } from './EAIA17';
import { EYG15 } from './EYG15';
import { FCF09 } from './FCF09';
import { GGS12MT } from './GGS12MT';
import { GGS12ST } from './GGS12ST';
import { GGS12TPS } from './GGS12TPS';
import { HYZ13 } from './HYZ13';
import { JTM11 } from './JTM11';
import { JSM16 } from './JSM16';
import { JX17 } from './JX17';
import { KSBK15 } from './KSBK15';
import { LGX16 } from './LGX16';
import { LJC18 } from './LJC18';
import { LLN14 } from './LLN14';
import { LWW13 } from './LWW13';
import { MA16 } from './MA16';
import { MDD10 } from './MDD10';
import { MEV16 } from './MEV16';
import { MHK16 } from './MHK16';
import { MVM17 } from './MVM17';
import { MWSO08 } from './MWSO08';
import { PC15PV } from './PC15PV';
import { REP15 } from './REP15';
import { SCS16 } from './SCS16';
import { SCS17 } from './SCS17';
import { SCS19 } from './SCS19';
import { SSK12 } from './SSK12';
import { VWH13 } from './VWH13';
import { XD99 } from './XD99';
import { XWL17 } from './XWL17';
import { XWS16 } from './XWS16';
import { YFS10 } from './YFS10';
import { ZGWZ14 } from './ZGWZ14';
import { ZLW13 } from './ZLW13';
import { SRJ13 } from './SRJ13';
import { RSRY12 } from './RSRY12';
import { FAKM15 } from './FAKM15';
import { YSK14 } from './YSK14';
import { CSL16 } from './CSL16';
import { RRR19 } from './RRR19';
import { YCC20 } from './YCC20';
import { MDDD16 } from './MDDD16';
import { GYS14 } from './GYS14';
import { MDJW07 } from './MDJW07';
import { KWL09 } from './KWL09';
import { BN11B } from './BN11B';
import { MLG06 } from './MLG06';
import { FA20 } from './FA20';
import { WHWS12 } from './WHWS12';
import { FZC18 } from './FZC18';
import { ATSC06 } from './ATSC06';
import { DJM12 } from './DJM12';
import { MEA17 } from './MEA17';
import { SFJ16 } from './SFJ16';
import { XJX21 } from './XJX21';
import { ASG21 } from './ASG21';
import { SankeyLink, SankeyLinkExtended } from '../types';
import { ClusterOne } from './ClusterOne';
import { ClusterTwo } from './ClusterTwo';
import { ClusterThree } from './ClusterThree';
import { ClusterFour } from './ClusterFour';
import { ClusterFourr } from './ClusterFours';

const ClusteroneLinkData = [ClusterOne];
const ClustertwoLinkData = [ClusterTwo];
const ClusterthreeLinkData = [ClusterThree];
const ClusterfourLinkData = [ClusterFour, ClusterFourr];

//@ts-ignore
const a = [];
ClusterTwo.filter((want) => {
    if (want.target) {
        a.push(want.id);
    }
});
//@ts-ignore
// console.log(a);

//@ts-ignore
const Empty = [];
//@ts-ignore
const PaperString = [
    CAA20.links,
    CGK21.links,
    CSL12.links,
    DMC09.links,
    EAIA17.links,
    EYG15.links,
    FCF09.links,
    GGS12MT.links,
    GGS12ST.links,
    GGS12TPS.links,
    HYZ13.links,
    JTM11.links,
    JSM16.links,
    JX17.links,
    KSBK15.links,
    LGX16.links,
    LJC18.links,
    LLN14.links,
    LWW13.links,
    MA16.links,
    MDD10.links,
    MEV16.links,
    MHK16.links,
    MVM17.links,
    MWSO08.links,
    PC15PV.links,
    REP15.links,
    SCS16.links,
    SCS17.links,
    SCS19.links,
    SSK12.links,
    VWH13.links,
    XD99.links,
    XWL17.links,
    XWS16.links,
    YFS10.links,
    ZGWZ14.links,
    ZLW13.links,
    SRJ13.links,
    RSRY12.links,
    FAKM15.links,
    YSK14.links,
    CSL16.links,
    RRR19.links,
    YCC20.links,
    MDDD16.links,
    GYS14.links,
    MDJW07.links,
    KWL09.links,
    BN11B.links,
    MLG06.links,
    FA20.links,
    WHWS12.links,
    FZC18.links,
    ATSC06.links,
    DJM12.links,
    MEA17.links,
    SFJ16.links,
    XJX21.links,
    ASG21.links,
];

// console.log(PaperString.length);

const Papers = [
    BN11B,
    CAA20,
    CGK21,
    CSL12,
    CSL16,
    DMC09,
    EAIA17,
    EYG15,
    FA20,
    FAKM15,
    FCF09,
    GGS12MT,
    GGS12ST,
    GGS12TPS,
    GYS14,
    HYZ13,
    JTM11,
    JSM16,
    JX17,
    KSBK15,
    KWL09,
    LGX16,
    LJC18,
    LLN14,
    LWW13,
    MA16,
    MDD10,
    MDDD16,
    MDJW07,
    MEV16,
    MHK16,
    MLG06,
    MVM17,
    MWSO08,
    PC15PV,
    REP15,
    RRR19,
    RSRY12,
    SCS16,
    SCS17,
    SCS19,
    SRJ13,
    SSK12,
    VWH13,
    XD99,
    XWL17,
    XWS16,
    YCC20,
    YFS10,
    YSK14,
    ZGWZ14,
    ZLW13,
    WHWS12,
    FZC18,
    ATSC06,
    DJM12,
    MEA17,
    SFJ16,
    XJX21,
    ASG21,
];

//@ts-ignore
const PaperStatus = [
    CAA20.status,
    CGK21.status,
    CSL12.status,
    DMC09.status,
    EAIA17.status,
    EYG15.status,
    FCF09.status,
    GGS12MT.status,
    GGS12ST.status,
    GGS12TPS.status,
    HYZ13.status,
    JTM11.status,
    JSM16.status,
    JX17.status,
    KSBK15.status,
    LGX16.status,
    LJC18.status,
    LLN14.status,
    LWW13.status,
    MA16.status,
    MDD10.status,
    MEV16.status,
    MHK16.status,
    MVM17.status,
    MWSO08.status,
    PC15PV.status,
    REP15.status,
    SCS16.status,
    SCS17.status,
    SCS19.status,
    SSK12.status,
    VWH13.status,
    XD99.status,
    XWL17.status,
    XWS16.status,
    YFS10.status,
    ZGWZ14.status,
    ZLW13.status,
    SRJ13.status,
    RSRY12.status,
    FAKM15.status,
    YSK14.status,
    CSL16.status,
    RRR19.status,
    YCC20.status,
    MDDD16.status,
    GYS14.status,
    MDJW07.status,
    KWL09.status,
    BN11B.status,
    MLG06.status,
    FA20.status,
    WHWS12.status,
    FZC18.status,
    ATSC06.status,
    DJM12.status,
    MEA17.status,
    SFJ16.status,
    XJX21.status,
    ASG21.status,
];

//TODO 유형 추가시 계속 변수 생성하기.
// console.log(PaperString);
//@ts-ignore
const test = () => {
    //@ts-ignore
    const paper = PaperStatus.map((data) => data);
    return paper;
};
const Status = test();

const check = () => {
    const a = PaperString;
    // console.log(a.reduce((acc, curr) => (acc += curr.length), 0));
    return a;
};

check();

//@ts-ignore
const Emptys = [].concat.apply([], Empty).reduce((result, value) => {
    //@ts-ignore
    const target = result.find((r) => r.source === value.source && r.target === value.target);
    //@ts-ignore
    if (!target) result.push({ source: value.source, target: value.target, value: value.value });
    //@ts-ignore
    else target.value += 1;
    return result;
}, []);

//@ts-ignore
const AllPaperDatas = ([].concat.apply([], PaperString) as SankeyLink[]).reduce<SankeyLinkExtended[]>((AllPaperDatas, onePaper) => {
    //@ts-ignore
    const allOnePaper = AllPaperDatas.find(
        (r) =>
            r.source === onePaper.source &&
            r.target === onePaper.target &&
            r.value === onePaper.value &&
            r.valueid === onePaper.valueid &&
            r.process === onePaper.process &&
            r.paperName === onePaper.paperName
    );
    if (!allOnePaper)
        //@ts-ignore
        AllPaperDatas.push({
            source: onePaper.source,
            target: onePaper.target,
            value: onePaper.value,
            valueid: onePaper.valueid,
            paperName: onePaper.paperName,
            process: onePaper.process,
            id: onePaper.id,
            imgUrl: onePaper.imgUrl,
        });
    //@ts-ignore
    else allOnePaper.value += 1;
    return AllPaperDatas;
}, []);

// console.log(AllPaperDatas);
//@ts-ignore
const wantLink = [];
const trashLink = [];
AllPaperDatas.filter((want) => {
    if (want.source >= 50 && want.source <= 75 && want.target >= 83) {
        wantLink.push(want);
    } else trashLink.push(want);
});
//@ts-ignore
console.log(wantLink);

//@ts-ignore
const TargetAAs = ([].concat.apply([], PaperString) as SankeyLink[]).reduce<SankeyLinkExtended[]>((TargetAAs, onePaper) => {
    //@ts-ignore
    const targetaaOnePaper = TargetAAs.find(
        (r) => r.source === onePaper.source && r.target === onePaper.target && r.value === onePaper.value && r.valueid === onePaper.valueid && r.process === onePaper.process
    );

    if (!targetaaOnePaper) {
        //@ts-ignore
        TargetAAs.push({
            source: onePaper.source,
            target: onePaper.target,
            value: onePaper.value,
            valueid: onePaper.valueid,
            paperName: onePaper.paperName,
            process: onePaper.process,
            imgUrl: onePaper.imgUrl,

            id: onePaper.id, //TODO 추출시 필요한 변수만 넣기
        });
    } else {
        targetaaOnePaper.value += 1;
    }
    return TargetAAs;
}, []);

// console.log(TargetAAs);

//@ts-ignore
const TargetABs = ([].concat.apply([], PaperString) as SankeyLink[]).reduce<SankeyLinkExtended[]>((TargetABs, onePaper) => {
    //@ts-ignore
    const targetabOnePaper = TargetABs.find(
        (r) => r.source === onePaper.source && r.target === onePaper.target && r.value === onePaper.value && r.valueid === onePaper.valueid && r.process === onePaper.process
    );

    if (!targetabOnePaper) {
        //@ts-ignore
        TargetABs.push({
            source: onePaper.source,
            target: onePaper.target,
            value: onePaper.value,
            valueid: onePaper.valueid,
            paperName: onePaper.paperName,
            process: onePaper.process,
            imgUrl: onePaper.imgUrl,
            id: onePaper.id,
        });
    } else {
        targetabOnePaper.value += 1;
    }
    return TargetABs;
}, []);

//@ts-ignore
const TargetBAs = ([].concat.apply([], PaperString) as SankeyLink[]).reduce<SankeyLinkExtended[]>((TargetBAs, onePaper) => {
    //@ts-ignore
    const targetbaOnePaper = TargetBAs.find(
        (r) => r.source === onePaper.source && r.target === onePaper.target && r.value === onePaper.value && r.valueid === onePaper.valueid && r.process === onePaper.process
    );

    if (!targetbaOnePaper) {
        //@ts-ignore
        TargetBAs.push({
            source: onePaper.source,
            target: onePaper.target,
            value: onePaper.value,
            valueid: onePaper.valueid,
            paperName: onePaper.paperName,
            process: onePaper.process,
            imgUrl: onePaper.imgUrl,
            id: onePaper.id,
        });
    } else {
        targetbaOnePaper.value += 1;
    }
    return TargetBAs;
}, []);

//@ts-ignore
const TargetBBs = ([].concat.apply([], PaperString) as SankeyLink[]).reduce<SankeyLinkExtended[]>((TargetBBs, onePaper) => {
    //@ts-ignore
    const targetbbOnePaper = TargetBBs.find(
        (r) => r.source === onePaper.source && r.target === onePaper.target && r.value === onePaper.value && r.valueid === onePaper.valueid && r.process === onePaper.process
    );

    if (!targetbbOnePaper) {
        //@ts-ignore
        TargetBBs.push({
            source: onePaper.source,
            target: onePaper.target,
            value: onePaper.value,
            valueid: onePaper.valueid,
            paperName: onePaper.paperName,
            process: onePaper.process,
            imgUrl: onePaper.imgUrl,
            id: onePaper.id,
        });
    } else {
        targetbbOnePaper.value += 1;
    }
    return TargetBBs;
}, []);

//@ts-ignore
const TargetCAs = ([].concat.apply([], PaperString) as SankeyLink[]).reduce<SankeyLinkExtended[]>((TargetCAs, onePaper) => {
    //@ts-ignore
    const targetcaOnePaper = TargetCAs.find(
        (r) => r.source === onePaper.source && r.target === onePaper.target && r.value === onePaper.value && r.valueid === onePaper.valueid && r.process === onePaper.process
    );

    if (!targetcaOnePaper) {
        //@ts-ignore
        TargetCAs.push({
            source: onePaper.source,
            target: onePaper.target,
            value: onePaper.value,
            valueid: onePaper.valueid,
            paperName: onePaper.paperName,
            process: onePaper.process,
            imgUrl: onePaper.imgUrl,
            id: onePaper.id,
        });
    } else {
        targetcaOnePaper.value += 1;
    }
    return TargetCAs;
}, []);

//@ts-ignore
const TargetCBs = ([].concat.apply([], PaperString) as SankeyLink[]).reduce<SankeyLinkExtended[]>((TargetCBs, onePaper) => {
    //@ts-ignore
    const targetcbOnePaper = TargetCBs.find(
        (r) => r.source === onePaper.source && r.target === onePaper.target && r.value === onePaper.value && r.valueid === onePaper.valueid && r.process === onePaper.process
    );

    if (!targetcbOnePaper) {
        //@ts-ignore
        TargetCBs.push({
            source: onePaper.source,
            target: onePaper.target,
            value: onePaper.value,
            valueid: onePaper.valueid,
            paperName: onePaper.paperName,
            process: onePaper.process,
            imgUrl: onePaper.imgUrl,
            id: onePaper.id,
        });
    } else {
        targetcbOnePaper.value += 1;
    }
    return TargetCBs;
}, []);

//@ts-ignore
const RepAs = ([].concat.apply([], PaperString) as SankeyLink[]).reduce<SankeyLinkExtended[]>((RepAs, onePaper) => {
    //@ts-ignore
    const repaOnePaper = RepAs.find(
        (r) => r.source === onePaper.source && r.target === onePaper.target && r.value === onePaper.value && r.valueid === onePaper.valueid && r.process === onePaper.process
    );

    if (!repaOnePaper) {
        //@ts-ignore
        RepAs.push({
            source: onePaper.source,
            target: onePaper.target,
            value: onePaper.value,
            valueid: onePaper.valueid,
            paperName: onePaper.paperName,
            process: onePaper.process,
            imgUrl: onePaper.imgUrl,
            id: onePaper.id,
        });
    } else {
        repaOnePaper.value += 1;
    }
    return RepAs;
}, []);

//@ts-ignore
const RepBs = ([].concat.apply([], PaperString) as SankeyLink[]).reduce<SankeyLinkExtended[]>((RepBs, onePaper) => {
    // @ts-ignore
    const repbOnePaper = RepBs.find(
        (r) => r.source === onePaper.source && r.target === onePaper.target && r.value === onePaper.value && r.valueid === onePaper.valueid && r.process === onePaper.process
    );
    // const repbOnePaper = RepBs.find((r) => r.source === onePaper.source && r.target === onePaper.target && r.value === onePaper.value && (r.valueid === onePaper.valueid) === 'repb');
    // const repb = result.find((r) => r.source === value.source && r.target === value.target && r.valueid === 'repb'); //흐름 보이는데 이건 절대아님.
    //@ts-ignore
    // if (repb) result.push({ source: value.source, target: value.target, value: value.value, valueid: value.valueid });

    if (!repbOnePaper) {
        // console.log('onePaper.paperName', onePaper.paperName);
        //@ts-ignore
        RepBs.push({
            source: onePaper.source,
            target: onePaper.target,
            value: onePaper.value,
            valueid: onePaper.valueid,
            paperName: onePaper.paperName,
            process: onePaper.process,
            imgUrl: onePaper.imgUrl,
            id: onePaper.id,
        });
    } else {
        repbOnePaper.value += 1;
    }
    return RepBs;
}, []);
// console.log('RepBs', RepBs); // 이거 지금 100~149 노드에서 나오는 모든 링크 차례대로 정리되고 있는 상태이다.

//@ts-ignore
const RepCs = ([].concat.apply([], PaperString) as SankeyLink[]).reduce<SankeyLinkExtended[]>((RepCs, onePaper) => {
    //@ts-ignore
    const repcOnePaper = RepCs.find(
        (r) => r.source === onePaper.source && r.target === onePaper.target && r.value === onePaper.value && r.valueid === onePaper.valueid && r.process === onePaper.process
    );

    if (!repcOnePaper) {
        //@ts-ignore
        RepCs.push({
            source: onePaper.source,
            target: onePaper.target,
            value: onePaper.value,
            valueid: onePaper.valueid,
            paperName: onePaper.paperName,
            process: onePaper.process,
            imgUrl: onePaper.imgUrl,
            id: onePaper.id,
        });
    } else {
        repcOnePaper.value += 1;
    }
    return RepCs;
}, []);

//@ts-ignore
const RepDs = ([].concat.apply([], PaperString) as SankeyLink[]).reduce<SankeyLinkExtended[]>((RepDs, onePaper) => {
    //@ts-ignore
    const repdOnePaper = RepDs.find(
        (r) => r.source === onePaper.source && r.target === onePaper.target && r.value === onePaper.value && r.valueid === onePaper.valueid && r.process === onePaper.process
    );

    if (!repdOnePaper) {
        //@ts-ignore
        RepDs.push({
            source: onePaper.source,
            target: onePaper.target,
            value: onePaper.value,
            valueid: onePaper.valueid,
            paperName: onePaper.paperName,
            process: onePaper.process,
            imgUrl: onePaper.imgUrl,
            id: onePaper.id,
        });
    } else {
        repdOnePaper.value += 1;
    }
    return RepDs;
}, []);

//@ts-ignore
const RepEAs = ([].concat.apply([], PaperString) as SankeyLink[]).reduce<SankeyLinkExtended[]>((RepEAs, onePaper) => {
    //@ts-ignore
    const repeaOnePaper = RepEAs.find(
        (r) => r.source === onePaper.source && r.target === onePaper.target && r.value === onePaper.value && r.valueid === onePaper.valueid && r.process === onePaper.process
    );

    if (!repeaOnePaper) {
        //@ts-ignore
        RepEAs.push({
            source: onePaper.source,
            target: onePaper.target,
            value: onePaper.value,
            valueid: onePaper.valueid,
            paperName: onePaper.paperName,
            process: onePaper.process,
            imgUrl: onePaper.imgUrl,
            id: onePaper.id,
        });
    } else {
        repeaOnePaper.value += 1;
    }
    return RepEAs;
}, []);

//@ts-ignore
const RepEBs = ([].concat.apply([], PaperString) as SankeyLink[]).reduce<SankeyLinkExtended[]>((RepEBs, onePaper) => {
    //@ts-ignore
    const repebOnePaper = RepEBs.find(
        (r) => r.source === onePaper.source && r.target === onePaper.target && r.value === onePaper.value && r.valueid === onePaper.valueid && r.process === onePaper.process
    );

    if (!repebOnePaper) {
        //@ts-ignore
        RepEBs.push({
            source: onePaper.source,
            target: onePaper.target,
            value: onePaper.value,
            valueid: onePaper.valueid,
            paperName: onePaper.paperName,
            process: onePaper.process,
            imgUrl: onePaper.imgUrl,
            id: onePaper.id,
        });
    } else {
        repebOnePaper.value += 1;
    }
    return RepEBs;
}, []);

//@ts-ignore
const RepFs = ([].concat.apply([], PaperString) as SankeyLink[]).reduce<SankeyLinkExtended[]>((RepFs, onePaper) => {
    //@ts-ignore
    const repfOnePaper = RepFs.find(
        (r) => r.source === onePaper.source && r.target === onePaper.target && r.value === onePaper.value && r.valueid === onePaper.valueid && r.process === onePaper.process
    );

    if (!repfOnePaper) {
        //@ts-ignore
        RepFs.push({
            source: onePaper.source,
            target: onePaper.target,
            value: onePaper.value,
            valueid: onePaper.valueid,
            paperName: onePaper.paperName,
            process: onePaper.process,
            imgUrl: onePaper.imgUrl,
            id: onePaper.id,
        });
    } else {
        repfOnePaper.value += 1;
    }
    return RepFs;
}, []);

//@ts-ignore
const RepGs = ([].concat.apply([], PaperString) as SankeyLink[]).reduce<SankeyLinkExtended[]>((RepGs, onePaper) => {
    //@ts-ignore
    const repgOnePaper = RepGs.find(
        (r) => r.source === onePaper.source && r.target === onePaper.target && r.value === onePaper.value && r.valueid === onePaper.valueid && r.process === onePaper.process
    );

    if (!repgOnePaper) {
        //@ts-ignore
        RepGs.push({
            source: onePaper.source,
            target: onePaper.target,
            value: onePaper.value,
            valueid: onePaper.valueid,
            paperName: onePaper.paperName,
            process: onePaper.process,
            imgUrl: onePaper.imgUrl,
            id: onePaper.id,
        });
    } else {
        repgOnePaper.value += 1;
    }
    return RepGs;
}, []);

//@ts-ignore
const RepHs = ([].concat.apply([], PaperString) as SankeyLink[]).reduce<SankeyLinkExtended[]>((RepHs, onePaper) => {
    //@ts-ignore
    const rephOnePaper = RepHs.find(
        (r) => r.source === onePaper.source && r.target === onePaper.target && r.value === onePaper.value && r.valueid === onePaper.valueid && r.process === onePaper.process
    );

    if (!rephOnePaper) {
        //@ts-ignore
        RepHs.push({
            source: onePaper.source,
            target: onePaper.target,
            value: onePaper.value,
            valueid: onePaper.valueid,
            paperName: onePaper.paperName,
            process: onePaper.process,
            imgUrl: onePaper.imgUrl,
            id: onePaper.id,
        });
    } else {
        rephOnePaper.value += 1;
    }
    return RepHs;
}, []);

//@ts-ignore
const ClusterOnes = ([].concat.apply([], ClusteroneLinkData) as SankeyLink[]).reduce<SankeyLinkExtended[]>((ClusterOnes, onePaper) => {
    //@ts-ignore
    const clusterOnePaper = ClusterOnes.find(
        (r) => r.source === onePaper.source && r.target === onePaper.target && r.value === onePaper.value && r.valueid === onePaper.valueid && r.process === onePaper.process
    );

    if (!clusterOnePaper) {
        //@ts-ignore
        ClusterOnes.push({
            source: onePaper.source,
            target: onePaper.target,
            value: onePaper.value,
            valueid: onePaper.valueid,
            paperName: onePaper.paperName,
            process: onePaper.process,
            imgUrl: onePaper.imgUrl,
            id: onePaper.id,
            cluster: onePaper.cluster,
        });
    } else {
        clusterOnePaper.value += 1;
    }
    return ClusterOnes;
}, []);

//@ts-ignore
const ClusterTwos = ([].concat.apply([], ClustertwoLinkData) as SankeyLink[]).reduce<SankeyLinkExtended[]>((ClusterTwos, onePaper) => {
    //@ts-ignore
    const clustertwoPaper = ClusterTwos.find(
        (r) => r.source === onePaper.source && r.target === onePaper.target && r.value === onePaper.value && r.valueid === onePaper.valueid && r.process === onePaper.process
    );

    if (!clustertwoPaper) {
        //@ts-ignore
        ClusterTwos.push({
            source: onePaper.source,
            target: onePaper.target,
            value: onePaper.value,
            valueid: onePaper.valueid,
            paperName: onePaper.paperName,
            process: onePaper.process,
            imgUrl: onePaper.imgUrl,
            id: onePaper.id,
            cluster: onePaper.cluster,
        });
    } else {
        clustertwoPaper.value += 1;
    }
    return ClusterTwos;
}, []);

//@ts-ignore
const ClusterThrees = ([].concat.apply([], ClusterthreeLinkData) as SankeyLink[]).reduce<SankeyLinkExtended[]>((ClusterThrees, onePaper) => {
    //@ts-ignore
    const clusterThreePaper = ClusterThrees.find(
        (r) => r.source === onePaper.source && r.target === onePaper.target && r.value === onePaper.value && r.valueid === onePaper.valueid && r.process === onePaper.process
    );

    if (!clusterThreePaper) {
        //@ts-ignore
        ClusterThrees.push({
            source: onePaper.source,
            target: onePaper.target,
            value: onePaper.value,
            valueid: onePaper.valueid,
            paperName: onePaper.paperName,
            process: onePaper.process,
            imgUrl: onePaper.imgUrl,
            id: onePaper.id,
            cluster: onePaper.cluster,
        });
    } else {
        clusterThreePaper.value += 1;
    }
    return ClusterThrees;
}, []);

//@ts-ignore
const ClusterFours = ([].concat.apply([], ClusterfourLinkData) as SankeyLink[]).reduce<SankeyLinkExtended[]>((ClusterFours, onePaper) => {
    //@ts-ignore
    const clusterFourPaper = ClusterFours.find(
        (r) => r.source === onePaper.source && r.target === onePaper.target && r.value === onePaper.value && r.valueid === onePaper.valueid && r.process === onePaper.process
    );

    if (!clusterFourPaper) {
        //@ts-ignore
        ClusterFours.push({
            source: onePaper.source,
            target: onePaper.target,
            value: onePaper.value,
            valueid: onePaper.valueid,
            paperName: onePaper.paperName,
            process: onePaper.process,
            imgUrl: onePaper.imgUrl,
            id: onePaper.id,
            cluster: onePaper.cluster,
        });
    } else {
        clusterFourPaper.value += 1;
    }
    return ClusterFours;
}, []);

// console.log(ClusterFours);

const statusImgSet = PaperStatus.reduce(function (acc, cur) {
    return acc.concat(cur);
});

//@ts-ignore
const Node = CAA20.nodes;

export {
    Status,
    Node,
    Papers,
    PaperStatus,
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
};
