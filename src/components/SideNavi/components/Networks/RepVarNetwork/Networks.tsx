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
    rep18,
    rep19,
    rep20,
    rep21,
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
                    }}
                >
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
                xmlSpace="preserve"
            >
                <switch>
                    <foreignObject requiredExtensions="&ns_ai;" x={0} y={0} width={1} height={1}>
                        {/* <iPgfref xlinkHref="#adobe_illustrator_pgf"></iPgfref> */}
                    </foreignObject>
                    <g>
                        <line className={style.st0} x1="52.7" y1="448.6" x2="404.6" y2="454.6" />
                        <line className={style.st1} x1="172.1" y1="224.2" x2="367" y2="625.9" />
                        <line className={style.st2} x1="404.6" y1="454.6" x2="172.1" y2="224.2" />
                        <line className={style.st2} x1="258.6" y1="153.6" x2="404.6" y2="454.6" />
                        <line className={style.st2} x1="425.1" y1="141.7" x2="404.6" y2="454.6" />
                        <line className={style.st3} x1="52.4" y1="580" x2="404.6" y2="454.6" />
                        <line className={style.st4} x1="125.6" y1="694.4" x2="367" y2="625.9" />
                        <line className={style.st0} x1="52.4" y1="580" x2="367" y2="625.9" />
                        <line className={style.st5} x1="404.6" y1="454.6" x2="199.4" y2="828.6" />
                        <line className={style.st0} x1="367" y1="625.9" x2="199.4" y2="828.6" />
                        <line className={style.st0} x1="519" y1="959.5" x2="367" y2="625.9" />
                        <line className={style.st6} x1="404.6" y1="454.6" x2="519" y2="959.5" />
                        <line className={style.st1} x1="367" y1="625.9" x2="1248.3" y2="512.6" />
                        <line className={style.st7} x1="404.6" y1="454.6" x2="770.9" y2="828.1" />
                        <line className={style.st5} x1="789.7" y1="940.9" x2="404.6" y2="454.6" />
                        <line className={style.st5} x1="1028.2" y1="144.5" x2="404.6" y2="454.6" />
                        <line className={style.st3} x1="654.5" y1="307.9" x2="404.6" y2="454.6" />
                        <line className={style.st5} x1="632.1" y1="192.4" x2="404.6" y2="454.6" />
                        <line className={style.st1} x1="425.1" y1="141.7" x2="920.1" y2="357.7" />
                        <line className={style.st5} x1="632.1" y1="192.4" x2="1058.7" y2="307.9" />
                        <line className={style.st5} x1="367" y1="625.9" x2="632.1" y2="192.4" />
                        <line className={style.st2} x1="125.6" y1="694.4" x2="404.6" y2="454.6" />
                        <line className={style.st8} x1="714.7" y1="422.1" x2="404.6" y2="454.6" />
                        <line className={style.st3} x1="749.8" y1="580" x2="404.6" y2="454.6" />
                        <line className={style.st1} x1="1156.5" y1="745.2" x2="404.6" y2="454.6" />
                        <line className={style.st0} x1="1083.1" y1="840" x2="404.6" y2="454.6" />
                        <line className={style.st5} x1="1265.8" y1="939" x2="770.9" y2="828.1" />
                        <line className={style.st9} x1="1083.1" y1="840" x2="367" y2="625.9" />
                        <line className={style.st1} x1="770.9" y1="828.1" x2="367" y2="625.9" />
                        <line className={style.st9} x1="749.8" y1="580" x2="367" y2="625.9" />
                        <line className={style.st9} x1="714.7" y1="422.1" x2="367" y2="625.9" />
                        <line className={style.st9} x1="52.7" y1="448.6" x2="367" y2="625.9" />
                        <line className={style.st1} x1="789.7" y1="940.9" x2="367" y2="625.9" />
                        <line className={style.st9} x1="519" y1="954.9" x2="1023.3" y2="444.5" />
                        <line className={style.st1} x1="1110.5" y1="1034.5" x2="519" y2="954.9" />
                        <line className={style.st1} x1="770.9" y1="828.1" x2="1110.5" y2="1034.5" />
                        <line className={style.st0} x1="789.7" y1="940.9" x2="1110.5" y2="1034.5" />
                        <line className={style.st10} x1="1083.1" y1="840" x2="1110.5" y2="1034.5" />
                        <line className={style.st10} x1="1156.5" y1="745.2" x2="1110.5" y2="1034.5" />
                        <line className={style.st7} x1="1248.3" y1="512.6" x2="1110.5" y2="1034.5" />
                        <line className={style.st6} x1="714.7" y1="422.1" x2="1265.8" y2="939" />
                        <line className={style.st6} x1="749.8" y1="580" x2="1265.8" y2="939" />
                        <line className={style.st5} x1="1110.5" y1="1034.5" x2="749.8" y2="580" />
                        <line className={style.st5} x1="1023.3" y1="444.5" x2="800.8" y2="927.1" />
                        <line className={style.st1} x1="1058.7" y1="307.9" x2="789.7" y2="940.9" />
                        <line className={style.st1} x1="919.8" y1="352.1" x2="791.2" y2="938.4" />
                        <line className={style.st6} x1="1023.3" y1="444.5" x2="1156.5" y2="745.2" />
                        <line className={style.st5} x1="1058.7" y1="307.9" x2="1156.5" y2="745.2" />
                        <line className={style.st5} x1="1023.7" y1="440.2" x2="1248.3" y2="512.6" />
                        <line className={style.st5} x1="919.8" y1="352.1" x2="1248.3" y2="512.6" />
                        <line className={style.st5} x1="714.7" y1="422.1" x2="1023.7" y2="440.2" />
                        <line className={style.st5} x1="919.8" y1="352.1" x2="1156.5" y2="745.2" />
                        <line className={style.st5} x1="1023.7" y1="440.2" x2="1231.1" y2="158.2" />
                        <line className={style.st2} x1="1058.7" y1="307.9" x2="1231.1" y2="158.2" />
                        <line className={style.st7} x1="919.8" y1="352.1" x2="1231.1" y2="154.5" />
                        <line className={style.st6} x1="1058.7" y1="307.9" x2="1261.1" y2="333.1" />
                        <line className={style.st10} x1="1028.2" y1="144.5" x2="1058.7" y2="307.9" />
                        <line className={style.st0} x1="1023.7" y1="440.2" x2="1028.2" y2="144.5" />
                        <line className={style.st7} x1="919.8" y1="352.1" x2="1083.1" y2="840" />
                        <line className={style.st7} x1="1023.7" y1="440.2" x2="1083.1" y2="840" />
                        <line className={style.st5} x1="1058.7" y1="307.9" x2="1083.1" y2="840" />
                        <line className={style.st6} x1="1028.2" y1="144.5" x2="919.8" y2="352.1" />
                        <line className={style.st5} x1="654.5" y1="307.9" x2="919.8" y2="352.1" />
                        <line className={style.st5} x1="632.1" y1="192.4" x2="1023.3" y2="444.5" />
                        <line className={style.st5} x1="654.5" y1="307.9" x2="1023.7" y2="440.2" />
                        <line className={style.st6} x1="714.7" y1="422.1" x2="919.8" y2="352.1" />
                        <line className={style.st6} x1="1058.7" y1="307.9" x2="1248.3" y2="512.6" />
                        <line className={style.st11} x1="404.6" y1="454.6" x2="1248.3" y2="512.6" />
                        <line className={style.st6} x1="749.8" y1="580" x2="919.8" y2="352.1" />
                        <line className={style.st7} x1="1058.7" y1="307.9" x2="749.8" y2="580" />
                        <line className={style.st7} x1="770.9" y1="828.1" x2="919.8" y2="352.1" />
                        <line className={style.st5} x1="1058.7" y1="307.9" x2="770.9" y2="828.1" />
                        <line className={style.st9} x1="1023.3" y1="444.5" x2="749.8" y2="580" />
                        <line className={style.st1} x1="1058.7" y1="307.9" x2="714.7" y2="422.1" />
                        <line className={style.st1} x1="367" y1="625.9" x2="1156.5" y2="745.2" />
                        <line className={style.st0} x1="75.1" y1="342.3" x2="404.6" y2="454.6" />
                        <ellipse
                            className={style.area1}
                            onClick={() => {
                                setOriginData(rvc1);
                            }}
                            cx="1017"
                            cy="374"
                            rx="198.5"
                            ry="143.8"
                        />
                        <ellipse
                            className={style.area2}
                            onClick={() => {
                                setOriginData(rvc2);
                            }}
                            cx="1204.8"
                            cy="980.7"
                            rx="163.5"
                            ry="111"
                        />
                        <ellipse
                            className={style.area3}
                            onClick={() => {
                                setOriginData(rvc3);
                            }}
                            cx="436.8"
                            cy="541.6"
                            rx="205.8"
                            ry="190.4"
                        />

                        <g>
                            <text transform="matrix(0.9395 0 0 1 215.627 835.1713)" className={style.nodeText}>
                                letter
                            </text>
                        </g>
                        <rect
                            x="188.2"
                            y="816.6"
                            onClick={() => {
                                setOriginData(rep19);
                            }}
                            className={style.representationNode}
                        ></rect>
                        <g>
                            <text transform="matrix(0.9395 0 0 1 141.7979 701.0267)" className={style.nodeText}>
                                picture
                            </text>
                        </g>
                        <rect
                            x="114.4"
                            y="682.5"
                            onClick={() => {
                                setOriginData(rep11);
                            }}
                            className={style.representationNode}
                        ></rect>
                        <g>
                            <text transform="matrix(0.9395 0 0 1 68.9381 586.9677)" className={style.nodeText}>
                                toys &amp; instrument
                            </text>
                        </g>
                        <rect
                            x="41.5"
                            y="568.4"
                            onClick={() => {
                                setOriginData(rep16);
                            }}
                            className={style.representationNode}
                        ></rect>
                        <g>
                            <text transform="matrix(0.9395 0 0 1 68.9381 455.2352)" className={style.nodeText}>
                                behavior
                            </text>
                        </g>
                        <rect
                            x="41.5"
                            y="436.7"
                            onClick={() => {
                                setOriginData(rep21);
                            }}
                            className={style.representationNode}
                        ></rect>
                        <g>
                            <text transform="matrix(0.9395 0 0 1 91.3248 348.9344)" className={style.nodeText}>
                                creation and destruction
                            </text>
                        </g>
                        <rect x="63.9" y="330.4" className={style.representationNode}></rect>
                        <g>
                            <text transform="matrix(0.9395 0 0 1 188.3321 230.786)" className={style.nodeText}>
                                food
                            </text>
                        </g>
                        <rect
                            x="160.9"
                            y="212.3"
                            onClick={() => {
                                setOriginData(rep15);
                            }}
                            className={style.representationNode}
                        ></rect>
                        <g>
                            <text transform="matrix(0.9395 0 0 1 274.8585 160.2547)" className={style.nodeText}>
                                metal
                            </text>
                        </g>
                        <rect
                            x="247.4"
                            y="141.7"
                            onClick={() => {
                                setOriginData(rep6);
                            }}
                            className={style.representationNode}
                        ></rect>
                        <g>
                            <text transform="matrix(0.9395 0 0 1 441.3394 148.3402)" className={style.nodeText}>
                                cell
                            </text>
                        </g>
                        <rect
                            x="413.9"
                            y="129.8"
                            onClick={() => {
                                setOriginData(rep8);
                            }}
                            className={style.representationNode}
                        ></rect>
                        <g>
                            <text transform="matrix(0.9395 0 0 1 670.7321 314.4686)" className={style.nodeText}>
                                fiber
                            </text>
                        </g>
                        <rect
                            x="643.3"
                            y="295.9"
                            onClick={() => {
                                setOriginData(rep14);
                            }}
                            className={style.representationNode}
                        ></rect>
                        <g>
                            <text transform="matrix(0.9395 0 0 1 730.9718 428.6844)" className={style.nodeText}>
                                map
                            </text>
                        </g>
                        <rect
                            x="703.5"
                            y="410.2"
                            onClick={() => {
                                setOriginData(rep13);
                            }}
                            className={style.representationNode}
                        ></rect>
                        <g>
                            <text transform="matrix(0.9395 0 0 1 766.006 586.6522)" className={style.nodeText}>
                                compound
                            </text>
                        </g>
                        <rect
                            x="738.6"
                            y="568.1"
                            onClick={() => {
                                setOriginData(rep5);
                            }}
                            className={style.representationNode}
                        ></rect>
                        <g>
                            <text transform="matrix(0.9395 0 0 1 787.1359 834.7304)" className={style.nodeText}>
                                machine
                            </text>
                        </g>
                        <rect
                            x="759.7"
                            y="816.2"
                            onClick={() => {
                                setOriginData(rep18);
                            }}
                            className={style.representationNode}
                        ></rect>
                        <g>
                            <text transform="matrix(0.9395 0 0 1 805.8844 945.5751)" className={style.nodeText}>
                                plant
                            </text>
                        </g>
                        <rect
                            x="778.5"
                            y="927.1"
                            onClick={() => {
                                setOriginData(rep3);
                            }}
                            className={style.representationNode}
                        ></rect>
                        <g>
                            <text transform="matrix(0.9395 0 0 1 1099.3302 845.5468)" className={style.nodeText}>
                                geometry
                            </text>
                        </g>
                        <rect
                            x="1071.9"
                            y="828.1"
                            onClick={() => {
                                setOriginData(rep10);
                            }}
                            className={style.representationNode}
                        ></rect>
                        <g>
                            <text transform="matrix(0.9395 0 0 1 1172.089 750.0453)" className={style.nodeText}>
                                landscape
                            </text>
                        </g>
                        <rect
                            x="1144.7"
                            y="732.6"
                            onClick={() => {
                                setOriginData(rep4);
                            }}
                            className={style.representationNode}
                        ></rect>
                        <g>
                            <text transform="matrix(0.9395 0 0 1 1264.5638 518.1071)" className={style.nodeText}>
                                building&amp;structure
                            </text>
                        </g>
                        <rect
                            x="1237.1"
                            y="500.7"
                            onClick={() => {
                                setOriginData(rep9);
                            }}
                            className={style.representationNode}
                        ></rect>
                        <g>
                            <text transform="matrix(0.9395 0 0 1 1274.796 335.9344)" className={style.nodeText}>
                                nonmetal
                            </text>
                        </g>
                        <rect
                            x="1247.4"
                            y="318.5"
                            onClick={() => {
                                setOriginData(rep7);
                            }}
                            className={style.representationNode}
                        ></rect>
                        <g>
                            <text transform="matrix(0.9395 0 0 1 1247.3726 158.1973)" className={style.nodeText}>
                                celestial
                            </text>
                        </g>
                        <rect
                            x="1219.9"
                            y="140.8"
                            onClick={() => {
                                setOriginData(rep1);
                            }}
                            className={style.representationNode}
                        ></rect>
                        <g>
                            <text transform="matrix(0.9395 0 0 1 1044.4723 150.0535)" className={style.nodeText}>
                                pattern
                            </text>
                        </g>
                        <rect
                            x="1017"
                            y="132.6"
                            onClick={() => {
                                setOriginData(rep12);
                            }}
                            className={style.representationNode}
                        ></rect>
                        <g>
                            <text transform="matrix(0.9395 0 0 1 535.2238 959.4726)" className={style.nodeText}>
                                animal
                            </text>
                        </g>
                        <rect
                            x="507.8"
                            y="940.9"
                            onClick={() => {
                                setOriginData(rep2);
                            }}
                            className={style.representationNode}
                        ></rect>
                        <g>
                            <text transform="matrix(0.9395 0 0 1 648.3453 199.0536)" className={style.nodeText}>
                                natural phenomena
                            </text>
                        </g>
                        <rect
                            x="620.9"
                            y="180.5"
                            onClick={() => {
                                setOriginData(rep20);
                            }}
                            className={style.representationNode}
                        ></rect>
                        <g>
                            <text transform="matrix(0.9395 0 0 1 384.5694 631.8534)" className={style.nodeText}>
                                size
                            </text>
                        </g>
                        <rect
                            x="355.8"
                            y="614"
                            onClick={() => {
                                setOriginData(var3);
                            }}
                            className={style.intermediationNode}
                        ></rect>
                        <g>
                            <text transform="matrix(0.9395 0 0 1 422.0934 460.5409)" className={style.nodeText}>
                                color
                            </text>
                        </g>
                        <rect
                            x="393.4"
                            y="442.7"
                            onClick={() => {
                                setOriginData(var2);
                            }}
                            className={style.intermediationNode}
                        ></rect>
                        <g>
                            <text transform="matrix(0.9395 0 0 1 1040.8312 446.4315)" className={style.nodeText}>
                                shape
                            </text>
                        </g>
                        <rect
                            x="1012.1"
                            y="428.6"
                            onClick={() => {
                                setOriginData(var4);
                            }}
                            className={style.intermediationNode}
                        ></rect>
                        <g>
                            <text transform="matrix(0.9395 0 0 1 937.65 357.7401)" className={style.nodeText}>
                                value
                            </text>
                        </g>
                        <rect
                            x="908.9"
                            y="339.9"
                            onClick={() => {
                                setOriginData(var1);
                            }}
                            className={style.intermediationNode}
                        ></rect>
                        <g>
                            <text transform="matrix(0.9395 0 0 1 1076.2081 312.5546)" className={style.nodeText}>
                                position
                            </text>
                        </g>
                        <rect
                            x="1047.5"
                            y="294.7"
                            onClick={() => {
                                setOriginData(var5);
                            }}
                            className={style.intermediationNode}
                        ></rect>
                        <g>
                            <text transform="matrix(0.9395 0 0 1 1283.3839 944.9257)" className={style.nodeText}>
                                distance
                            </text>
                        </g>
                        <rect
                            x="1254.7"
                            y="927.1"
                            onClick={() => {
                                setOriginData(var7);
                            }}
                            className={style.intermediationNode}
                        ></rect>
                        <g>
                            <text transform="matrix(0.9395 0 0 1 1128.0607 1040.4608)" className={style.nodeText}>
                                orientation
                            </text>
                        </g>
                        <rect
                            x="1099.3"
                            y="1022.6"
                            onClick={() => {
                                setOriginData(var6);
                            }}
                            className={style.intermediationNode}
                        ></rect>
                    </g>
                </switch>
            </svg>
        </div>
    );
};
