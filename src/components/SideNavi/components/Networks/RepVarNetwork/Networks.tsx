import style from './index.module.scss';
import { SankeyData } from '../../../../../types';
import {
    rvc1,
    rvc2,
    rvc3,
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
} from '../../../../../Data';

interface Props {
    originData: SankeyData;
    setOriginData: React.Dispatch<React.SetStateAction<SankeyData>>;
    setClickedCluster: React.Dispatch<React.SetStateAction<SankeyData | undefined>>;
}

export const RepVarNetworks = ({ originData, setOriginData, setClickedCluster }: Props) => {
    return (
        <div className={style.networksContainer}>
            <div className={style.categoryWrapper}>
                <svg width="25" height="25" style={{ marginLeft: '3px' }}>
                    <rect width="13" height="13" style={{ fill: '#0280ff', paddingRight: '2px' }}></rect>
                </svg>
                <div
                    style={{
                        fontSize: '11px',
                        fontWeight: '630',
                        marginRight: '20px',
                        marginBottom: '5px',
                        marginTop: '-5px',
                    }}>
                    Representation
                </div>

                <svg width="25" height="25" style={{ marginLeft: '10px' }}>
                    <rect width="13" height="13" style={{ fill: '#e5df00', paddingRight: '20px' }}></rect>
                </svg>
                <div style={{ fontSize: '11px', fontWeight: '630', marginTop: '-5px' }}>Visual Variables</div>
            </div>
            <svg
                className={style.networkArea}
                version="1.1"
                id="layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="100%"
                viewBox="0 0 1525 1150"
                xmlSpace="preserve">
                <switch>
                    <foreignObject requiredExtensions="&ns_ai;" x={0} y={0} width={1} height={1}>
                        {/* <iPgfref xlinkHref="#adobe_illustrator_pgf"></iPgfref> */}
                    </foreignObject>
                    <g>
                        <line className={style.st0} x1="68.5" y1="337.7" x2="409.6" y2="343.2" />
                        <line className={style.st1} x1="184.3" y1="133.3" x2="373.2" y2="499.2" />
                        <line className={style.st2} x1="409.6" y1="343.2" x2="184.3" y2="133.3" />
                        <line className={style.st2} x1="268.1" y1="69.1" x2="409.6" y2="343.2" />
                        <line className={style.st2} x1="429.5" y1="58.3" x2="409.6" y2="343.2" />
                        <line className={style.st3} x1="68.2" y1="457.4" x2="409.6" y2="343.2" />
                        <line className={style.st4} x1="139.1" y1="561.6" x2="373.2" y2="499.2" />
                        <line className={style.st0} x1="68.2" y1="457.4" x2="373.2" y2="499.2" />
                        <line className={style.st5} x1="409.6" y1="343.2" x2="210.7" y2="683.7" />
                        <line className={style.st0} x1="373.2" y1="499.2" x2="210.7" y2="683.7" />
                        <line className={style.st0} x1="508.4" y1="711.2" x2="373.2" y2="499.2" />
                        <line className={style.st6} x1="409.6" y1="343.2" x2="508.4" y2="711.2" />
                        <line className={style.st1} x1="373.2" y1="499.2" x2="1265.9" y2="361.3" />
                        <line className={style.st7} x1="409.6" y1="343.2" x2="752.6" y2="591.6" />
                        <line className={style.st5} x1="770.8" y1="694.3" x2="409.6" y2="343.2" />
                        <line className={style.st5} x1="1000.8" y1="110.5" x2="409.6" y2="343.2" />
                        <line className={style.st3} x1="651.9" y1="209.5" x2="409.6" y2="343.2" />
                        <line className={style.st5} x1="630.2" y1="104.4" x2="409.6" y2="343.2" />
                        <line className={style.st1} x1="429.5" y1="58.3" x2="909.3" y2="255" />
                        <line className={style.st5} x1="630.2" y1="104.4" x2="1043.6" y2="209.5" />
                        <line className={style.st5} x1="373.2" y1="499.2" x2="630.2" y2="104.4" />
                        <line className={style.st2} x1="139.1" y1="561.6" x2="409.6" y2="343.2" />
                        <line className={style.st8} x1="710.3" y1="313.6" x2="409.6" y2="343.2" />
                        <line className={style.st3} x1="744.2" y1="457.4" x2="409.6" y2="343.2" />
                        <line className={style.st1} x1="1126.3" y1="516" x2="409.6" y2="343.2" />
                        <line className={style.st0} x1="1055.2" y1="602.4" x2="409.6" y2="343.2" />
                        <line className={style.st5} x1="1232.4" y1="692.5" x2="752.6" y2="591.6" />
                        <line className={style.st9} x1="1055.2" y1="602.4" x2="373.2" y2="499.2" />
                        <line className={style.st1} x1="752.6" y1="591.6" x2="373.2" y2="499.2" />
                        <line className={style.st9} x1="744.2" y1="457.4" x2="373.2" y2="499.2" />
                        <line className={style.st9} x1="710.3" y1="313.6" x2="373.2" y2="499.2" />
                        <line className={style.st9} x1="68.5" y1="337.7" x2="373.2" y2="499.2" />
                        <line className={style.st1} x1="770.8" y1="694.3" x2="373.2" y2="499.2" />
                        <line className={style.st9} x1="508.4" y1="707" x2="1009.3" y2="333.9" />
                        <line className={style.st1} x1="1081.8" y1="779.5" x2="508.4" y2="707" />
                        <line className={style.st1} x1="752.6" y1="591.6" x2="1081.8" y2="779.5" />
                        <line className={style.st0} x1="770.8" y1="694.3" x2="1081.8" y2="779.5" />
                        <line className={style.st10} x1="1055.2" y1="602.4" x2="1081.8" y2="779.5" />
                        <line className={style.st10} x1="1126.3" y1="516" x2="1081.8" y2="779.5" />
                        <line className={style.st7} x1="1265.9" y1="361.3" x2="1081.8" y2="779.5" />
                        <line className={style.st6} x1="710.3" y1="313.6" x2="1232.4" y2="692.5" />
                        <line className={style.st6} x1="744.2" y1="457.4" x2="1232.4" y2="692.5" />
                        <line className={style.st5} x1="1081.8" y1="779.5" x2="744.2" y2="457.4" />
                        <line className={style.st5} x1="1009.3" y1="333.9" x2="781.6" y2="681.7" />
                        <line className={style.st1} x1="1043.6" y1="209.5" x2="770.8" y2="694.3" />
                        <line className={style.st1} x1="909" y1="249.9" x2="772.3" y2="692" />
                        <line className={style.st6} x1="1009.3" y1="333.9" x2="1126.3" y2="516" />
                        <line className={style.st5} x1="1043.6" y1="209.5" x2="1126.3" y2="516" />
                        <line className={style.st5} x1="1009.8" y1="330.1" x2="1265.9" y2="361.3" />
                        <line className={style.st5} x1="909" y1="249.9" x2="1265.9" y2="361.3" />
                        <line className={style.st5} x1="710.3" y1="313.6" x2="1009.8" y2="330.1" />
                        <line className={style.st5} x1="909" y1="249.9" x2="1126.3" y2="516" />
                        <line className={style.st5} x1="1009.8" y1="330.1" x2="1224.1" y2="118.8" />
                        <line className={style.st2} x1="1043.6" y1="209.5" x2="1224.1" y2="118.8" />
                        <line className={style.st7} x1="909" y1="249.9" x2="1224.1" y2="115.5" />
                        <line className={style.st6} x1="1043.6" y1="209.5" x2="1239.8" y2="232.5" />
                        <line className={style.st10} x1="1000.8" y1="110.5" x2="1043.6" y2="209.5" />
                        <line className={style.st0} x1="1009.8" y1="330.1" x2="1000.8" y2="110.5" />
                        <line className={style.st7} x1="909" y1="249.9" x2="1055.2" y2="602.4" />
                        <line className={style.st7} x1="1009.8" y1="330.1" x2="1055.2" y2="602.4" />
                        <line className={style.st5} x1="1043.6" y1="209.5" x2="1055.2" y2="602.4" />
                        <line className={style.st6} x1="1000.8" y1="110.5" x2="909" y2="249.9" />
                        <line className={style.st5} x1="651.9" y1="209.5" x2="909" y2="249.9" />
                        <line className={style.st5} x1="630.2" y1="104.4" x2="1009.3" y2="333.9" />
                        <line className={style.st5} x1="651.9" y1="209.5" x2="1009.8" y2="330.1" />
                        <line className={style.st6} x1="710.3" y1="313.6" x2="909" y2="249.9" />
                        <line className={style.st6} x1="1043.6" y1="209.5" x2="1265.9" y2="361.3" />
                        <line className={style.st11} x1="409.6" y1="343.2" x2="1265.9" y2="361.3" />
                        <line className={style.st6} x1="744.2" y1="457.4" x2="909" y2="249.9" />
                        <line className={style.st7} x1="1043.6" y1="209.5" x2="744.2" y2="457.4" />
                        <line className={style.st7} x1="752.6" y1="591.6" x2="909" y2="249.9" />
                        <line className={style.st5} x1="1043.6" y1="209.5" x2="752.6" y2="591.6" />
                        <line className={style.st9} x1="1009.3" y1="333.9" x2="744.2" y2="457.4" />
                        <line className={style.st1} x1="1043.6" y1="209.5" x2="710.3" y2="313.6" />
                        <line className={style.st1} x1="373.2" y1="499.2" x2="1126.3" y2="516" />
                        <line className={style.st0} x1="90.2" y1="240.9" x2="409.6" y2="343.2" />
                        //TODO text 정리
                        {/* Clockwise */}
                        //TODO {/* 사용할 ellipse  */}
                        <ellipse
                            className={style.area1}
                            onClick={() => {
                                setOriginData(rvc1);
                            }}
                            cx="1007.2"
                            cy="274.3"
                            rx="238.3"
                            ry="131"
                        />
                        <ellipse
                            className={style.area2}
                            onClick={() => {
                                setOriginData(rvc2);
                            }}
                            cx="1173.2"
                            cy="730.6"
                            rx="158.5"
                            ry="101.1"
                        />
                        <ellipse
                            className={style.area3}
                            onClick={() => {
                                setOriginData(rvc3);
                            }}
                            cx="440.8"
                            cy="422.4"
                            rx="199.5"
                            ry="173.4"
                        />
                        //TODO rect 변형하기
                        <g>
                            <text transform="matrix(1 0 0 1 226.4432 689.75)" className={style.nodeText}>
                                letter
                            </text>
                        </g>
                        <rect
                            x="199.9"
                            y="672.9"
                            onClick={() => {
                                setOriginData(rep19);
                            }}
                            className={style.representationNode}
                            width="21.7"
                            height="21.7">
                            <title>letter</title>
                        </rect>
                        <g>
                            <text transform="matrix(1 0 0 1 154.8779 567.5875)" className={style.nodeText}>
                                picture
                            </text>
                        </g>
                        <rect
                            x="128.3"
                            y="550.7"
                            onClick={() => {
                                setOriginData(rep11);
                            }}
                            className={style.representationNode}
                            width="21.7"
                            height="21.7">
                            <title>picture</title>
                        </rect>
                        <g>
                            <text transform="matrix(1 0 0 1 84.2523 463.7169)" className={style.nodeText}>
                                toys &amp; instrument
                            </text>
                        </g>
                        <rect
                            x="57.7"
                            y="446.8"
                            onClick={() => {
                                setOriginData(rep16);
                            }}
                            className={style.representationNode}
                            width="21.7"
                            height="21.7">
                            <title>toys &amp; instrument</title>
                        </rect>
                        <g>
                            <text transform="matrix(1 0 0 1 84.2523 343.7518)" className={style.nodeText}>
                                behavior
                            </text>
                        </g>
                        <rect
                            x="57.7"
                            y="326.9"
                            onClick={() => {
                                setOriginData(rep21);
                            }}
                            className={style.representationNode}
                            width="21.7"
                            height="21.7">
                            <title>behavior</title>
                        </rect>
                        <g>
                            <text transform="matrix(1 0 0 1 105.9523 246.9459)" className={style.nodeText}>
                                creation and destruction
                            </text>
                        </g>
                        <rect x="79.4" y="230.1" className={style.representationNode} width="21.7" height="21.7">
                            <title>creation and destruction</title>
                        </rect>
                        <g>
                            <text transform="matrix(1 0 0 1 199.9848 139.351)" className={style.nodeText}>
                                food
                            </text>
                        </g>
                        <rect
                            x="173.4"
                            y="122.5"
                            onClick={() => {
                                setOriginData(rep15);
                            }}
                            className={style.representationNode}
                            width="21.7"
                            height="21.7">
                            <title>food</title>
                        </rect>
                        <g>
                            <text transform="matrix(1 0 0 1 283.8579 75.1191)" className={style.nodeText}>
                                metal
                            </text>
                        </g>
                        <rect
                            x="257.3"
                            y="58.3"
                            onClick={() => {
                                setOriginData(rep6);
                            }}
                            className={style.representationNode}
                            width="21.7"
                            height="21.7">
                            <title>metal</title>
                        </rect>
                        <g>
                            <text transform="matrix(1 0 0 1 445.2338 64.2691)" className={style.nodeText}>
                                cell
                            </text>
                        </g>
                        <rect
                            x="418.7"
                            y="47.4"
                            onClick={() => {
                                setOriginData(rep8);
                            }}
                            className={style.representationNode}
                            width="21.7"
                            height="21.7">
                            <title>cell</title>
                        </rect>
                        <g>
                            <text transform="matrix(1 0 0 1 667.5921 215.559)" className={style.nodeText}>
                                fiber
                            </text>
                        </g>
                        <rect
                            x="641"
                            y="198.7"
                            onClick={() => {
                                setOriginData(rep14);
                            }}
                            className={style.representationNode}
                            width="21.7"
                            height="21.7">
                            <title>fiber</title>
                        </rect>
                        <g>
                            <text transform="matrix(1 0 0 1 725.9847 319.572)" className={style.nodeText}>
                                map
                            </text>
                        </g>
                        <rect
                            x="699.4"
                            y="302.7"
                            onClick={() => {
                                setOriginData(rep13);
                            }}
                            className={style.representationNode}
                            width="21.7"
                            height="21.7">
                            <title>map</title>
                        </rect>
                        <g>
                            <text transform="matrix(1 0 0 1 759.9444 463.4301)" className={style.nodeText}>
                                compound
                            </text>
                        </g>
                        <rect
                            x="733.4"
                            y="446.6"
                            onClick={() => {
                                setOriginData(rep5);
                            }}
                            className={style.representationNode}
                            width="21.7"
                            height="21.7">
                            <title>compound</title>
                        </rect>
                        <g>
                            <text transform="matrix(1 0 0 1 768.3535 597.5822)" className={style.nodeText}>
                                machine
                            </text>
                        </g>
                        <rect
                            x="741.8"
                            y="580.7"
                            onClick={() => {
                                setOriginData(rep18);
                            }}
                            className={style.representationNode}
                            width="21.7"
                            height="21.7">
                            <title>machine</title>
                        </rect>
                        <g>
                            <text transform="matrix(1 0 0 1 786.5269 698.5259)" className={style.nodeText}>
                                plant
                            </text>
                        </g>
                        <rect
                            x="759.9"
                            y="681.7"
                            onClick={() => {
                                setOriginData(rep3);
                            }}
                            className={style.representationNode}
                            width="21.7"
                            height="21.7">
                            <title>plant</title>
                        </rect>
                        <g>
                            <text transform="matrix(1 0 0 1 1070.9742 607.4321)" className={style.nodeText}>
                                geometry
                            </text>
                        </g>
                        <rect
                            x="1044.4"
                            y="591.6"
                            onClick={() => {
                                setOriginData(rep10);
                            }}
                            className={style.representationNode}
                            width="21.7"
                            height="21.7">
                            <title>geometry</title>
                        </rect>
                        <g>
                            <text transform="matrix(1 0 0 1 1141.5021 520.4621)" className={style.nodeText}>
                                landscape
                            </text>
                        </g>
                        <rect
                            x="1114.9"
                            y="504.6"
                            onClick={() => {
                                setOriginData(rep4);
                            }}
                            className={style.representationNode}
                            width="21.7"
                            height="21.7">
                            <title>landscape</title>
                        </rect>
                        <g>
                            <text transform="matrix(1 0 0 1 1281.6235 366.3285)" className={style.nodeText}>
                                building&amp;structure
                            </text>
                        </g>
                        <rect
                            x="1255"
                            y="350.5"
                            onClick={() => {
                                setOriginData(rep9);
                            }}
                            className={style.representationNode}
                            width="21.7"
                            height="21.7">
                            <title>building&amp;structure</title>
                        </rect>
                        <g>
                            <text transform="matrix(1 0 0 1 1253.1322 235.1064)" className={style.nodeText}>
                                nonmetal
                            </text>
                        </g>
                        <rect
                            x="1226.5"
                            y="219.2"
                            onClick={() => {
                                setOriginData(rep7);
                            }}
                            className={style.representationNode}
                            width="21.7"
                            height="21.7">
                            <title>nonmetal</title>
                        </rect>
                        <g>
                            <text transform="matrix(1 0 0 1 1239.8409 118.8056)" className={style.nodeText}>
                                celestial
                            </text>
                        </g>
                        <rect
                            x="1213.3"
                            y="102.9"
                            onClick={() => {
                                setOriginData(rep1);
                            }}
                            className={style.representationNode}
                            width="21.7"
                            height="21.7">
                            <title>celestial</title>
                        </rect>
                        <g>
                            <text transform="matrix(1 0 0 1 1016.5808 115.4709)" className={style.nodeText}>
                                pattern
                            </text>
                        </g>
                        <rect
                            x="990"
                            y="99.6"
                            onClick={() => {
                                setOriginData(rep12);
                            }}
                            className={style.representationNode}
                            width="21.7"
                            height="21.7">
                            <title>pattern</title>
                        </rect>
                        <g>
                            <text transform="matrix(1 0 0 1 524.1662 711.1823)" className={style.nodeText}>
                                animal
                            </text>
                        </g>
                        <rect
                            x="497.6"
                            y="694.3"
                            onClick={() => {
                                setOriginData(rep2);
                            }}
                            className={style.representationNode}
                            width="21.7"
                            height="21.7">
                            <title>animal</title>
                        </rect>
                        <g>
                            <text transform="matrix(1 0 0 1 645.892 110.4523)" className={style.nodeText}>
                                natural phenomena
                            </text>
                        </g>
                        <rect
                            x="619.3"
                            y="93.6"
                            onClick={() => {
                                setOriginData(rep20);
                            }}
                            className={style.representationNode}
                            width="21.7"
                            height="21.7">
                            <title>natural phenomena</title>
                        </rect>
                        <g>
                            <text transform="matrix(1 0 0 1 390.2047 504.5934)" className={style.nodeText}>
                                size
                            </text>
                        </g>
                        <rect
                            x="362.4"
                            y="488.3"
                            onClick={() => {
                                setOriginData(var3);
                            }}
                            className={style.intermediationNode}
                            width="21.7"
                            height="21.7">
                            <title>size</title>
                        </rect>
                        <g>
                            <text transform="matrix(1 0 0 1 426.5779 348.5831)" className={style.nodeText}>
                                color
                            </text>
                        </g>
                        <rect
                            x="398.7"
                            y="332.3"
                            onClick={() => {
                                setOriginData(var2);
                            }}
                            className={style.intermediationNode}
                            width="21.7"
                            height="21.7">
                            <title>color</title>
                        </rect>
                        <g>
                            <text transform="matrix(1 0 0 1 1026.3423 335.7331)" className={style.nodeText}>
                                shape
                            </text>
                        </g>
                        <rect
                            x="998.5"
                            y="319.5"
                            onClick={() => {
                                setOriginData(var4);
                            }}
                            className={style.intermediationNode}
                            width="21.7"
                            height="21.7">
                            <title>shape</title>
                        </rect>
                        <g>
                            <text transform="matrix(1 0 0 1 926.3252 254.9648)" className={style.nodeText}>
                                value
                            </text>
                        </g>
                        <rect
                            x="898.5"
                            y="238.7"
                            onClick={() => {
                                setOriginData(var1);
                            }}
                            className={style.intermediationNode}
                            width="21.7"
                            height="21.7">
                            <title>value</title>
                        </rect>
                        <g>
                            <text transform="matrix(1 0 0 1 1060.6339 213.8149)" className={style.nodeText}>
                                position
                            </text>
                        </g>
                        <rect
                            x="1032.8"
                            y="197.5"
                            onClick={() => {
                                setOriginData(var5);
                            }}
                            className={style.intermediationNode}
                            width="21.7"
                            height="21.7">
                            <title>position</title>
                        </rect>
                        <g>
                            <text transform="matrix(1 0 0 1 1249.3834 697.9344)" className={style.nodeText}>
                                distance
                            </text>
                        </g>
                        <rect
                            x="1221.5"
                            y="681.7"
                            onClick={() => {
                                setOriginData(var7);
                            }}
                            className={style.intermediationNode}
                            width="21.7"
                            height="21.7">
                            <title>distance</title>
                        </rect>
                        <g>
                            <text transform="matrix(1 0 0 1 1098.8234 784.9363)" className={style.nodeText}>
                                orientation
                            </text>
                        </g>
                        <rect
                            x="1071"
                            y="768.7"
                            onClick={() => {
                                setOriginData(var6);
                            }}
                            className={style.intermediationNode}
                            width="21.7"
                            height="21.7">
                            <title>orientation</title>
                        </rect>
                    </g>
                </switch>
            </svg>
        </div>
    );
};
