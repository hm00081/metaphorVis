import style from './index.module.scss';
import { SankeyData } from '../../../../types';
import {
    clusterone,
    clustertwo,
    clusterthree,
    clusterfour,
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
} from '../../../../Data';
//TODO 1. 노드데이터 불러오기, Network Prop에 link useState 사용해서 정보 타고타고 넘어가서 넣기.

interface Props {
    originData: SankeyData;
    setOriginData: React.Dispatch<React.SetStateAction<SankeyData>>;
    setClickedCluster: React.Dispatch<React.SetStateAction<SankeyData | undefined>>;
}

export const Networks = ({ originData, setOriginData, setClickedCluster }: Props) => {
    return (
        <div className={style.networksContainer}>
            <div className={style.title}>Network View</div>
            <div className={style.categoryWrapper}>
                <svg width="25" height="25" style={{ marginLeft: '3px' }}>
                    <rect width="13" height="13" style={{ fill: '#ff00ff', paddingRight: '2px' }}></rect>
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
                    Intermediation
                </div>

                <svg width="25" height="25" style={{ marginLeft: '10px' }}>
                    <rect width="13" height="13" style={{ fill: '#0280ff', paddingRight: '20px' }}></rect>
                </svg>
                <div style={{ fontSize: '11px', fontWeight: '630', marginTop: '-5px' }}>Representation</div>
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
                        <line className={style.st0} x1="613.2" y1="545.6" x2="494.7" y2="698.8" />
                        <line className={style.st0} x1="335" y1="466.7" x2="494.7" y2="704.4" />
                        <line className={style.st0} x1="423.3" y1="904.6" x2="495.7" y2="701.6" />
                        <line className={style.st1} x1="342" y1="464.1" x2="361.7" y2="562.3" />
                        <line className={style.st2} x1="236" y1="411.5" x2="363.5" y2="562.4" />
                        <line className={style.st3} x1="548.4" y1="213.2" x2="361.7" y2="563.4" />
                        <line className={style.st1} x1="211.8" y1="573.8" x2="425.8" y2="628.4" />
                        <line className={style.st4} x1="156.7" y1="545.1" x2="426.2" y2="627.9" />
                        <line className={style.st5} x1="234.7" y1="412.5" x2="215.2" y2="577.2" />
                        <line className={style.st6} x1="156.7" y1="547" x2="338.6" y2="466.2" />
                        <line className={style.st6} x1="211.8" y1="577.2" x2="338.5" y2="467.1" />
                        <line className={style.st7} x1="549.9" y1="210.6" x2="214.6" y2="575.4" />
                        <line className={style.st7} x1="144.7" y1="333.6" x2="234" y2="410.3" />
                        <line className={style.st6} x1="121.9" y1="480.2" x2="235.6" y2="412" />
                        <line className={style.st5} x1="371.3" y1="687.3" x2="337.5" y2="466.9" />
                        <line className={style.st8} x1="234" y1="409.6" x2="371.3" y2="688.1" />
                        <line className={style.st8} x1="722" y1="697.5" x2="428" y2="628.8" />
                        <line className={style.st9} x1="337.9" y1="465.4" x2="724.3" y2="700.5" />
                        <line className={style.st9} x1="212.8" y1="573.7" x2="606.7" y2="547.1" />
                        <line className={style.st10} x1="212.8" y1="574.7" x2="425.3" y2="908.8" />
                        <line className={style.st11} x1="159.1" y1="546.6" x2="428.3" y2="910.8" />
                        <line className={style.st8} x1="362.1" y1="1009.8" x2="157.1" y2="545.1" />
                        <line className={style.st8} x1="211.9" y1="573.4" x2="362.7" y2="1012.8" />
                        <line className={style.st8} x1="368.8" y1="687.6" x2="189.2" y2="777.4" />
                        <line className={style.st1} x1="427.4" y1="628.1" x2="580.6" y2="733.7" />
                        <line className={style.st10} x1="337.1" y1="465.3" x2="585.2" y2="735.5" />
                        <line className={style.st10} x1="697.9" y1="327.3" x2="158.2" y2="546.7" />
                        <line className={style.st4} x1="427.3" y1="628.2" x2="458.5" y2="395.4" />
                        <line className={style.st4} x1="424.7" y1="905.9" x2="490.3" y2="519.8" />
                        <line className={style.st4} x1="457.1" y1="397.7" x2="424" y2="907.4" />
                        <line className={style.st4} x1="362.7" y1="564.6" x2="364.4" y2="1014.5" />
                        <line className={style.st4} x1="584.1" y1="732.5" x2="425" y2="908.9" />
                        <line className={style.st4} x1="721.7" y1="701.3" x2="418" y2="914.1" />
                        <line className={style.st11} x1="1056.5" y1="395.1" x2="722.5" y2="702.2" />
                        <line className={style.st11} x1="769.8" y1="742.6" x2="721.4" y2="698.6" />
                        <line className={style.st12} x1="630.1" y1="120.2" x2="724.5" y2="702.4" />
                        <line className={style.st12} x1="1058.7" y1="397" x2="367.8" y2="563.2" />
                        <line className={style.st0} x1="791.6" y1="75.7" x2="699.7" y2="330" />
                        <line className={style.st0} x1="630.1" y1="122.9" x2="793.7" y2="77" />
                        <line className={style.st0} x1="660.7" y1="25.4" x2="699.1" y2="327.3" />
                        <line className={style.st0} x1="492.6" y1="53.1" x2="627.2" y2="121.5" />
                        <line className={style.st0} x1="550.7" y1="210" x2="495.2" y2="54.4" />
                        <line className={style.st0} x1="632.4" y1="125" x2="660.3" y2="26.7" />
                        <line className={style.st0} x1="427.6" y1="628.8" x2="659.3" y2="27.6" />
                        <line className={style.st0} x1="234.6" y1="411.8" x2="657.5" y2="30.4" />
                        <line className={style.st0} x1="492.6" y1="54.4" x2="431.2" y2="635.1" />
                        <line className={style.st0} x1="317.8" y1="231.7" x2="237.3" y2="413.3" />
                        <line className={style.st0} x1="196.4" y1="278.3" x2="236.7" y2="412" />
                        <line className={style.st0} x1="145.8" y1="334.1" x2="338.3" y2="465.6" />
                        <line className={style.st0} x1="77.1" y1="382.1" x2="334" y2="466.5" />
                        <line className={style.st0} x1="56.8" y1="440.9" x2="232.3" y2="414.1" />
                        <line className={style.st11} x1="337" y1="465.6" x2="54.2" y2="442.2" />
                        <line className={style.st11} x1="158.4" y1="546.5" x2="236.7" y2="413.3" />
                        <line className={style.st11} x1="458.5" y1="397.7" x2="238" y2="412.8" />
                        <line className={style.st0} x1="121.2" y1="477.8" x2="692.7" y2="787.3" />
                        <line className={style.st0} x1="210.2" y1="575" x2="695.2" y2="786.5" />
                        <line className={style.st0} x1="582.4" y1="732.2" x2="689.8" y2="785.7" />
                        <line className={style.st0} x1="769.5" y1="742.4" x2="582.1" y2="735.2" />
                        <line className={style.st0} x1="358.5" y1="560.9" x2="770.8" y2="744.4" />
                        <line className={style.st9} x1="360.4" y1="1012.7" x2="584.7" y2="735.8" />
                        <line className={style.st9} x1="490" y1="514.9" x2="361.8" y2="1012" />
                        <line className={style.st9} x1="610.3" y1="545.6" x2="583.3" y2="736.5" />
                        <line className={style.st0} x1="467.6" y1="1065.2" x2="362.6" y2="1012.5" />
                        <line className={style.st0} x1="175.9" y1="908.7" x2="363.9" y2="1012.9" />
                        <line className={style.st0} x1="423.4" y1="907.4" x2="469.3" y2="1070.3" />
                        <line className={style.st0} x1="369" y1="686.1" x2="365.5" y2="1015" />
                        <line className={style.st0} x1="457.4" y1="394.8" x2="362.6" y2="1014.9" />
                        <line className={style.st0} x1="364.3" y1="560.8" x2="423.1" y2="906" />
                        <line className={style.st0} x1="368.8" y1="686.1" x2="423" y2="906" />
                        <line className={style.st0} x1="610.8" y1="545.6" x2="370.5" y2="687.8" />
                        <line className={style.st0} x1="723.3" y1="699.6" x2="366.3" y2="1010.1" />
                        <line className={style.st0} x1="973.6" y1="349.1" x2="363.4" y2="1013.3" />
                        <line className={style.st0} x1="120.4" y1="477.9" x2="552" y2="211.6" />
                        <line className={style.st0} x1="361.6" y1="352.5" x2="236.2" y2="413.7" />
                        <line className={style.st0} x1="156.6" y1="548.7" x2="630.1" y2="125.3" />
                        <line className={style.st0} x1="19.4" y1="629.9" x2="158.8" y2="547.3" />
                        <line className={style.st0} x1="175.9" y1="909.1" x2="193.5" y2="778.2" />
                        <line className={style.st0} x1="156.4" y1="544.9" x2="191.5" y2="774.3" />
                        <line className={style.st0} x1="216.9" y1="577.1" x2="194.5" y2="771.4" />
                        <line className={style.st0} x1="363.3" y1="564.4" x2="191.5" y2="775.3" />
                        <line className={style.st0} x1="232.5" y1="411.1" x2="1058.5" y2="302.8" />
                        <line className={style.st0} x1="697.2" y1="328.2" x2="1154.1" y2="287.2" />
                        <line className={style.st0} x1="458.1" y1="398.5" x2="699.2" y2="328.2" />
                        <line className={style.st0} x1="232.5" y1="411.1" x2="492.2" y2="517.6" />
                        <line className={style.st0} x1="725.6" y1="698.2" x2="237.4" y2="414.1" />
                        <line className={style.st0} x1="609.4" y1="545.9" x2="487.3" y2="517.6" />
                        <line className={style.st0} x1="630.9" y1="121.2" x2="490.3" y2="521.5" />
                        <line className={style.st0} x1="546.3" y1="211.1" x2="1157.5" y2="288.1" />
                        <line className={style.st0} x1="1054.2" y1="298" x2="1057.8" y2="392.6" />
                        <line className={style.st0} x1="1158.2" y1="287.7" x2="1127.7" y2="343.3" />
                        <line className={style.st0} x1="1052" y1="297.6" x2="1128.2" y2="346" />
                        <line className={style.st0} x1="155.5" y1="547.9" x2="1125.9" y2="348.3" />
                        <line className={style.st0} x1="456.8" y1="396.3" x2="1061.4" y2="397.2" />
                        <line className={style.st0} x1="972.3" y1="350.3" x2="1057.4" y2="397.2" />
                        <line className={style.st0} x1="1051.6" y1="297.5" x2="430.4" y2="630.1" />
                        <line className={style.st0} x1="457.8" y1="397.2" x2="1133.8" y2="346.4" />
                        <line className={style.st0} x1="698.4" y1="326.8" x2="974.3" y2="351.3" />
                        <line className={style.st0} x1="609.4" y1="545" x2="1161.1" y2="287.7" />
                        <line className={style.st0} x1="546.8" y1="209.4" x2="723.9" y2="697.6" />
                        <line className={style.st0} x1="696.5" y1="325.8" x2="723.9" y2="701.5" />
                        <line className={style.st0} x1="548.7" y1="208.4" x2="583" y2="734.8" />
                        <line className={style.st0} x1="631.9" y1="120.4" x2="583" y2="729.9" />
                        <line className={style.st0} x1="698.4" y1="326.8" x2="581" y2="736.7" />
                        <line className={style.st0} x1="666.7" y1="582.5" x2="722.4" y2="696" />
                        <line className={style.st0} x1="608.9" y1="546.9" x2="720.9" y2="695.4" />
                        <line className={style.st0} x1="1057.1" y1="394.6" x2="581.7" y2="733.1" />
                        <line className={style.st0} x1="1127.6" y1="345" x2="725.6" y2="705.3" />
                        <line className={style.st0} x1="579.7" y1="735.1" x2="1126.6" y2="350" />
                        <line className={style.st0} x1="361.5" y1="563.6" x2="701.2" y2="326.8" />
                        <line className={style.st0} x1="488.4" y1="517.2" x2="703.5" y2="325.6" />
                        <line className={style.st0} x1="336.2" y1="467.2" x2="363.9" y2="357.9" />
                        <line className={style.st0} x1="1053.7" y1="298.2" x2="334.8" y2="469.5" />
                        <line className={style.st0} x1="972.3" y1="351.5" x2="337.6" y2="467.6" />
                        <line className={style.st0} x1="1128.6" y1="344" x2="458.4" y2="394.6" />
                        <line className={style.st0} x1="632.1" y1="121.7" x2="360.6" y2="572.5" />
                        <line className={style.st0} x1="335.6" y1="466.8" x2="457.8" y2="398.2" />
                        <line className={style.st9} x1="550" y1="211.7" x2="489.9" y2="518.9" />
                        <line className={style.st13} x1="631.1" y1="124" x2="217.3" y2="574.5" />
                        <line className={style.st13} x1="457.7" y1="397.1" x2="551.8" y2="211.2" />
                        <line className={style.st13} x1="975.4" y1="352.1" x2="238.9" y2="410.9" />
                        <line className={style.st13} x1="1159.7" y1="284.5" x2="335.4" y2="471.5" />
                        <line className={style.st13} x1="1127.2" y1="344.2" x2="489.9" y2="518" />
                        <line className={style.st13} x1="360.9" y1="562.8" x2="1128.1" y2="346.9" />
                        <line className={style.st13} x1="121.3" y1="478.5" x2="608.4" y2="547" />
                        <line className={style.st13} x1="975.4" y1="351.3" x2="429.4" y2="629.5" />
                        <line className={style.st13} x1="489.3" y1="515.1" x2="427.6" y2="631.4" />
                        <line className={style.st12} x1="363.8" y1="561.5" x2="425.8" y2="625.1" />
                        <line className={style.st0} x1="234.3" y1="408.7" x2="584.3" y2="734.9" />
                        <line className={style.st0} x1="211.5" y1="575.7" x2="1065.4" y2="395.2" />
                        <line className={style.st0} x1="335.9" y1="464.9" x2="492.4" y2="517.9" />
                        <g>
                            <text transform="matrix(1 0 0 1 707.6112 789.4521)" className={style.nodeText}>
                                analysis of debates comments and argumentation
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 447.1541 633.9375)" className={style.nodeText}>
                                comparison of different sentiments
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 629.2255 551.7305)" className={style.nodeText}>
                                detection of evidence event that causes sentiment patterns
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 1144.7137 348.7222)" className={style.nodeText}>
                                personalized sentiment analysis
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 1076.5907 401.4106)" className={style.nodeText}>
                                emotion detection and classification
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 684.5321 589.4287)" className={style.nodeText}>
                                identifying the intent of sentiment information
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 790.2157 746.9717)" className={style.nodeText}>
                                argument expression detection
                            </text>
                        </g>
                        <text transform="matrix(1 0 0 1 440.0565 912.0576)" className={style.nodeText}>
                            opinion summarization
                        </text>
                        <text transform="matrix(1 0 0 1 36.4681 632.7715)" className={style.nodeText}>
                            emotion cause detection
                        </text>
                        <text transform="matrix(1 0 0 1 250.9061 416.7632)" className={style.nodeText}>
                            timeline analysis
                        </text>
                        <text transform="matrix(1 0 0 1 716.12 331.1958)" className={style.nodeText}>
                            polarity classfication
                        </text>
                        <text transform="matrix(1 0 0 1 380.4676 1016.584)" className={style.nodeText}>
                            finding significant person/opinion/fact/stance/attitude{' '}
                        </text>
                        <g>
                            <text transform="matrix(1 0 0 1 484.4012 1072.2305)" className={style.nodeText}>
                                software
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 196.1244 917.04)" className={style.nodeText}>
                                toy&instrument
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 385.3133 691.4326)" className={style.nodeText}>
                                map
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 505.9696 521.853)" className={style.nodeText}>
                                pattern
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 381.742 567.4912)" className={style.nodeText}>
                                geometry
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 173.6322 550.709)" className={style.nodeText}>
                                plant
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 228.6341 578.6826)" className={style.nodeText}>
                                landscape
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 94.5946 382.6704)" className={style.nodeText}>
                                nonmetal
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 71.9984 443.2769)" className={style.nodeText}>
                                space time movement
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 135.6288 483.0864)" className={style.nodeText}>
                                natural phenomena
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 162.1659 335.1362)" className={style.nodeText}>
                                creation and destruction
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 476.036 402.6733)" className={style.nodeText}>
                                machine
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 807.0028 81.353)" className={style.nodeText}>
                                cell
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 676.4071 29.9067)" className={style.nodeText}>
                                food
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 511.953 55.8491)" className={style.nodeText}>
                                celestial
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 1173.3231 291.8794)" className={style.nodeText}>
                                fiber
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 1070.8094 301.3345)" className={style.nodeText}>
                                picture
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 992.3055 353.936)" className={style.nodeText}>
                                animal
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 377.4452 357.3325)" className={style.nodeText}>
                                metal
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 334.5907 235.2935)" className={style.nodeText}>
                                behavior
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 214.8138 283.6343)" className={style.nodeText}>
                                machine&software work
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 599.1473 737.9033)" className={style.nodeText}>
                                compound
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 739.538 699.3584)" className={style.nodeText}>
                                building&structure
                            </text>
                        </g>
                        <text transform="matrix(1 0 0 1 208.3363 777.6445)" className={style.nodeText}>
                            multilingual / crosslingual sentiment analysis
                        </text>
                        <text transform="matrix(1 0 0 1 354.9989 471.7856)" className={style.nodeText}>
                            easy exploration of sentiment information
                        </text>
                        <text transform="matrix(1 0 0 1 567.4032 215.4429)" className={style.nodeText}>
                            sentiment information description a multi-aspect
                        </text>
                        <text transform="matrix(1 0 0 1 649.5868 128.4897)" className={style.nodeText}>
                            aspect based sentiment analysis
                        </text>
                        <text transform="matrix(1 0 0 1 507.4823 706.4688)" className={style.nodeText}>
                            letter
                        </text>
                        {/* Clockwise */}
                        <ellipse
                            onClick={() => {
                                // 군집에 속한 노드들의 link 데이터 집어넣기
                                setOriginData(clusterone);
                                // setClickedCluster(targetaa);
                            }}
                            className={style.area17}
                            cx="656.1"
                            cy="130.6"
                            rx="238.3"
                            ry="131"
                        >
                            <title>Cluster 2</title>
                        </ellipse>
                        <ellipse
                            onClick={() => {
                                // 군집에 속한 노드들의 link 데이터 집어넣기
                                setOriginData(clustertwo);
                                // setClickedCluster(targetab);
                            }}
                            className={style.area18}
                            cx="1093.3"
                            cy="332.7"
                            rx="158.5"
                            ry="101.1"
                        >
                            <title>Cluster 3</title>
                        </ellipse>
                        <ellipse
                            onClick={() => {
                                // 군집에 속한 노드들의 link 데이터 집어넣기
                                setOriginData(clusterthree);
                                // setClickedCluster(targetba);
                            }}
                            className={style.area19}
                            cx="909.1"
                            cy="745.1"
                            rx="378.2"
                            ry="101.1"
                        >
                            <title>Cluster 4</title>
                        </ellipse>
                        <ellipse
                            onClick={() => {
                                // 군집에 속한 노드들의 link 데이터 집어넣기
                                setOriginData(clusterfour);
                                // setClickedCluster(targetbb);
                            }}
                            className={style.area20}
                            cx="310.2"
                            cy="452.9"
                            rx="300.4"
                            ry="261.2"
                        >
                            <title>Cluster 1</title>
                        </ellipse>

                        <rect
                            onClick={() => {
                                setOriginData(rep2);
                            }}
                            x="963.2"
                            y="339.4"
                            className={style.repreentationNode}
                            width="21.7"
                            height="21.7"
                        >
                            <title>animal</title>
                        </rect>
                        <rect
                            onClick={() => {
                                setOriginData(rep11);
                            }}
                            x="1042.7"
                            y="288.3"
                            className={style.repreentationNode}
                            width="21.7"
                            height="21.7"
                        >
                            <title>picture</title>
                        </rect>
                        <rect
                            onClick={() => {
                                setOriginData(rep14);
                            }}
                            x="1146.3"
                            y="274.6"
                            className={style.repreentationNode}
                            width="21.7"
                            height="21.7"
                        >
                            <title>fiber</title>
                        </rect>
                        <rect
                            onClick={() => {
                                setOriginData(rep8);
                            }}
                            x="780.1"
                            y="65.7"
                            className={style.repreentationNode}
                            width="21.7"
                            height="21.7"
                        >
                            <title>cell</title>
                        </rect>
                        <rect
                            onClick={() => {
                                setOriginData(rep15);
                            }}
                            x="648.7"
                            y="14.6"
                            className={style.repreentationNode}
                            width="21.7"
                            height="21.7"
                        >
                            <title>food</title>
                        </rect>
                        <rect
                            onClick={() => {
                                setOriginData(rep1);
                            }}
                            x="483.6"
                            y="43.4"
                            className={style.repreentationNode}
                            width="21.7"
                            height="21.7"
                        >
                            <title>celestial</title>
                        </rect>
                        <rect
                            onClick={() => {
                                setOriginData(rep21);
                            }}
                            x="307.8"
                            y="220.8"
                            className={style.repreentationNode}
                            width="21.7"
                            height="21.7"
                        >
                            <title>behavior</title>
                        </rect>
                        <rect
                            onClick={() => {
                                setOriginData(rep23);
                            }}
                            x="185.9"
                            y="267"
                            className={style.repreentationNode}
                            width="21.7"
                            height="21.7"
                        >
                            <title>machine&software work</title>
                        </rect>
                        <rect
                            onClick={() => {
                                setOriginData(rep24);
                            }}
                            x="136.5"
                            y="322.7"
                            className={style.repreentationNode}
                            width="21.7"
                            height="21.7"
                        >
                            <title>creation and destruction</title>
                        </rect>
                        <rect
                            onClick={() => {
                                setOriginData(rep7);
                            }}
                            x="67.3"
                            y="371.3"
                            className={style.repreentationNode}
                            width="21.7"
                            height="21.7"
                        >
                            <title>nonmetal</title>
                        </rect>
                        <rect
                            onClick={() => {
                                setOriginData(rep22);
                            }}
                            x="44.9"
                            y="429.7"
                            className={style.repreentationNode}
                            width="21.7"
                            height="21.7"
                        >
                            <title>space time movement</title>
                        </rect>
                        <rect
                            onClick={() => {
                                setOriginData(rep20);
                            }}
                            x="112.5"
                            y="468.4"
                            className={style.repreentationNode}
                            width="21.7"
                            height="21.7"
                        >
                            <title>natural phenomena</title>
                        </rect>
                        <rect
                            onClick={() => {
                                setOriginData(rep3);
                            }}
                            x="146.7"
                            y="535.1"
                            className={style.repreentationNode}
                            width="21.7"
                            height="21.7"
                        >
                            <title>plant</title>
                        </rect>
                        <rect
                            onClick={() => {
                                setOriginData(rep4);
                            }}
                            x="202.1"
                            y="563.5"
                            className={style.repreentationNode}
                            width="21.7"
                            height="21.7"
                        >
                            <title>landscape</title>
                        </rect>
                        <rect
                            onClick={() => {
                                setOriginData(rep10);
                            }}
                            x="351.7"
                            y="551.5"
                            className={style.repreentationNode}
                            width="21.7"
                            height="21.7"
                        >
                            <title>geometry</title>
                        </rect>
                        <rect
                            onClick={() => {
                                setOriginData(rep13);
                            }}
                            x="358.7"
                            y="676"
                            className={style.repreentationNode}
                            width="21.7"
                            height="21.7"
                        >
                            <title>map</title>
                        </rect>
                        <rect
                            onClick={() => {
                                setOriginData(rep19);
                            }}
                            x="480.9"
                            y="689.6"
                            className={style.repreentationNode}
                            width="21.7"
                            height="21.7"
                        >
                            <title>letter</title>
                        </rect>
                        <rect
                            onClick={() => {
                                setOriginData(rep16);
                            }}
                            x="166.3"
                            y="898.7"
                            className={style.repreentationNode}
                            width="21.7"
                            height="21.7"
                        >
                            <title>toy&instrument</title>
                        </rect>
                        <rect
                            onClick={() => {
                                setOriginData(rep17);
                            }}
                            x="456.7"
                            y="1054.8"
                            className={style.repreentationNode}
                            width="21.7"
                            height="21.7"
                        >
                            <title>software</title>
                        </rect>
                        <rect
                            onClick={() => {
                                setOriginData(int15);
                            }}
                            x="351.3"
                            y="1000.6"
                            className={style.intermediationNode}
                            width="21.7"
                            height="21.7"
                        >
                            <title>finding significant person/opinions/fact/stance/attitude</title>
                        </rect>
                        <rect
                            onClick={() => {
                                setOriginData(int6);
                            }}
                            x="412.6"
                            y="896.9"
                            className={style.intermediationNode}
                            width="21.7"
                            height="21.7"
                        >
                            <title>opinion summarization</title>
                        </rect>
                        <rect
                            onClick={() => {
                                setOriginData(int14);
                            }}
                            x="677.4"
                            y="774"
                            className={style.intermediationNode}
                            width="21.7"
                            height="21.7"
                        >
                            <title>analysis of debates comments and argumentation</title>
                        </rect>
                        <rect
                            onClick={() => {
                                setOriginData(int4);
                            }}
                            x="758.3"
                            y="731.6"
                            className={style.intermediationNode}
                            width="21.7"
                            height="21.7"
                        >
                            <title>argument expression detection</title>
                        </rect>
                        <rect
                            onClick={() => {
                                setOriginData(int2);
                            }}
                            x="656.2"
                            y="572.2"
                            className={style.intermediationNode}
                            width="21.7"
                            height="21.7"
                        >
                            <title>identifying the intent of sentiment information</title>
                        </rect>
                        <rect
                            onClick={() => {
                                setOriginData(int3);
                            }}
                            x="599.2"
                            y="534.7"
                            className={style.intermediationNode}
                            width="21.7"
                            height="21.7"
                        >
                            <title>detection of evidence event that causes sentiment patterns</title>
                        </rect>
                        <rect
                            onClick={() => {
                                setOriginData(int9);
                            }}
                            x="687.7"
                            y="316.8"
                            className={style.intermediationNode}
                            width="21.7"
                            height="21.7"
                        >
                            <title>polarity classification</title>
                        </rect>
                        <rect
                            onClick={() => {
                                setOriginData(int7);
                            }}
                            x="539.7"
                            y="199.5"
                            className={style.intermediationNode}
                            width="21.7"
                            height="21.7"
                        >
                            <title>sentiment information description a multi-aspect</title>
                        </rect>
                        <rect
                            onClick={() => {
                                setOriginData(int5);
                            }}
                            x="620.1"
                            y="112.2"
                            className={style.intermediationNode}
                            width="21.7"
                            height="21.7"
                        >
                            <title>aspect based sentiment analysis</title>
                        </rect>
                        <rect
                            onClick={() => {
                                setOriginData(int8);
                            }}
                            x="1046.9"
                            y="384.4"
                            className={style.intermediationNode}
                            width="21.7"
                            height="21.7"
                        >
                            <title>emotion detection and classification</title>
                        </rect>
                        <rect
                            onClick={() => {
                                setOriginData(int10);
                            }}
                            x="1116.2"
                            y="334.7"
                            className={style.intermediationNode}
                            width="21.7"
                            height="21.7"
                        >
                            <title>personalized sentiment analysis</title>
                        </rect>
                        <rect
                            onClick={() => {
                                setOriginData(int12);
                            }}
                            x="417.3"
                            y="617.5"
                            className={style.intermediationNode}
                            width="21.7"
                            height="21.7"
                        >
                            <title>comparison of different sentiments</title>
                        </rect>
                        <rect
                            onClick={() => {
                                setOriginData(int16);
                            }}
                            x="327.1"
                            y="455.1"
                            className={style.intermediationNode}
                            width="21.7"
                            height="21.7"
                        >
                            <title>easy exploration of sentiment information</title>
                        </rect>
                        <rect
                            onClick={() => {
                                setOriginData(int13);
                            }}
                            x="224.9"
                            y="401"
                            className={style.intermediationNode}
                            width="21.7"
                            height="21.7"
                        >
                            <title>timeline analysis</title>
                        </rect>
                        <rect
                            onClick={() => {
                                setOriginData(int11);
                            }}
                            x="179.8"
                            y="764.5"
                            className={style.intermediationNode}
                            width="21.7"
                            height="21.7"
                        >
                            <title>multilingual/crosslingual sentiment analysis</title>
                        </rect>
                        <rect
                            onClick={() => {
                                setOriginData(int1);
                            }}
                            x="8.4"
                            y="617.3"
                            className={style.intermediationNode}
                            width="21.7"
                            height="21.7"
                        >
                            <title>emotion cause detection</title>
                        </rect>
                        <rect
                            onClick={() => {
                                setOriginData(rep5);
                            }}
                            x="572.4"
                            y="722.8"
                            className={style.repreentationNode}
                            width="21.7"
                            height="21.7"
                        >
                            <title>compound</title>
                        </rect>
                        <rect
                            onClick={() => {
                                setOriginData(rep9);
                            }}
                            x="712.1"
                            y="688.1"
                            className={style.repreentationNode}
                            width="21.7"
                            height="21.7"
                        >
                            <title>building&structure</title>
                        </rect>
                        <rect
                            onClick={() => {
                                setOriginData(rep12);
                            }}
                            x="479"
                            y="506.2"
                            className={style.repreentationNode}
                            width="21.7"
                            height="21.7"
                        >
                            <title>pattern</title>
                        </rect>
                        <rect
                            onClick={() => {
                                setOriginData(rep18);
                            }}
                            x="447.7"
                            y="385.9"
                            className={style.repreentationNode}
                            width="21.7"
                            height="21.7"
                        >
                            <title>machine</title>
                        </rect>
                        <rect
                            onClick={() => {
                                setOriginData(rep6);
                            }}
                            x="351"
                            y="340.9"
                            className={style.repreentationNode}
                            width="21.7"
                            height="21.7"
                        >
                            <title>metal</title>
                        </rect>
                    </g>
                </switch>
            </svg>
        </div>
    );
};
