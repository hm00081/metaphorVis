import style from './index.module.scss';
import { SankeyData } from '../../../../../types';
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
} from '../../../../../Data';

interface Props {
    originData: SankeyData;
    setOriginData: React.Dispatch<React.SetStateAction<SankeyData>>;
    setClickedCluster: React.Dispatch<React.SetStateAction<SankeyData | undefined>>;
}

export const RepTechNetworks = ({ originData, setOriginData, setClickedCluster }: Props) => {
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
                    Representation
                </div>

                <svg width="25" height="25" style={{ marginLeft: '10px' }}>
                    <rect width="13" height="13" style={{ fill: '#0280ff', paddingRight: '20px' }}></rect>
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
                        <line className={style.st0} x1="484.7" y1="471.7" x2="541.2" y2="798.3" />
                        <line className={style.st1} x1="1129.2" y1="800.5" x2="541.2" y2="798.3" />
                        <line className={style.st2} x1="534.4" y1="37.6" x2="609.4" y2="157.8" />
                        <line className={style.st0} x1="609.4" y1="157.8" x2="1026.3" y2="243.3" />
                        <line className={style.st3} x1="906.8" y1="383.2" x2="920.6" y2="478.8" />
                        <line className={style.st4} x1="1047.9" y1="416" x2="920.6" y2="478.8" />
                        <line className={style.st5} x1="1057" y1="559.8" x2="920.6" y2="478.8" />
                        <line className={style.st5} x1="960.4" y1="612" x2="920.6" y2="478.8" />
                        <line className={style.st6} x1="1129.2" y1="800.5" x2="920.6" y2="478.8" />
                        <line className={style.st2} x1="646.6" y1="521.6" x2="920.6" y2="481.1" />
                        <line className={style.st7} x1="906.8" y1="383.2" x2="762.5" y2="441" />
                        <line className={style.st0} x1="810.1" y1="338" x2="920.6" y2="478.8" />
                        <line className={style.st8} x1="881.9" y1="693.2" x2="960.4" y2="612" />
                        <line className={style.st5} x1="1047.9" y1="416" x2="881.9" y2="693.2" />
                        <line className={style.st9} x1="653" y1="408.4" x2="646.6" y2="521.6" />
                        <line className={style.st3} x1="609.4" y1="625.6" x2="646.6" y2="521.6" />
                        <line className={style.st6} x1="1129.2" y1="800.5" x2="695.7" y2="985.7" />
                        <line className={style.st1} x1="754.9" y1="892" x2="1129.2" y2="800.5" />
                        <line className={style.st6} x1="646.6" y1="521.6" x2="754.9" y2="892" />
                        <line className={style.st6} x1="979" y1="949.2" x2="646.6" y2="521.6" />
                        <line className={style.st5} x1="1129.2" y1="800.5" x2="979" y2="949.2" />
                        <line className={style.st10} x1="1147" y1="980" x2="1129.2" y2="800.5" />
                        <line className={style.st9} x1="1247.7" y1="930.8" x2="1129.2" y2="800.5" />
                        <line className={style.st11} x1="1310.6" y1="850.6" x2="1129.2" y2="800.5" />
                        <line className={style.st4} x1="1196.9" y1="706.8" x2="1129.2" y2="800.5" />
                        <line className={style.st4} x1="1080.1" y1="649.3" x2="1196.9" y2="706.8" />
                        <line className={style.st2} x1="1261.5" y1="330.3" x2="1381.1" y2="448.6" />
                        <line className={style.st5} x1="1026.3" y1="243.3" x2="1261.5" y2="330.3" />
                        <line className={style.st10} x1="1385.3" y1="641.6" x2="1381.1" y2="448.6" />
                        <line className={style.st6} x1="1026.3" y1="243.3" x2="1196.9" y2="706.8" />
                        <line className={style.st0} x1="1047.9" y1="416" x2="1196.9" y2="706.8" />
                        <line className={style.st2} x1="1057" y1="559.8" x2="1196.9" y2="706.8" />
                        <line className={style.st5} x1="646.6" y1="521.6" x2="1196.9" y2="706.8" />
                        <line className={style.st1} x1="1026.3" y1="243.3" x2="881.9" y2="693.2" />
                        <line className={style.st6} x1="653" y1="408.4" x2="1026.3" y2="243.3" />
                        <line className={style.st8} x1="484.7" y1="471.7" x2="653" y2="408.4" />
                        <line className={style.st12} x1="698.8" y1="257.2" x2="810.1" y2="338" />
                        <line className={style.st9} x1="1047.9" y1="416" x2="698.8" y2="257.2" />
                        <line className={style.st13} x1="1026.3" y1="243.3" x2="698.8" y2="257.2" />
                        <line className={style.st6} x1="484.7" y1="471.7" x2="698.8" y2="257.2" />
                        <line className={style.st5} x1="609.4" y1="157.8" x2="484.7" y2="471.7" />
                        <line className={style.st10} x1="421.3" y1="938.5" x2="695.7" y2="985.7" />
                        <line className={style.st14} x1="541.2" y1="798.3" x2="421.3" y2="938.5" />
                        <line className={style.st5} x1="881.9" y1="693.2" x2="421.3" y2="938.5" />
                        <line className={style.st6} x1="609.4" y1="732.3" x2="1138.1" y2="800.5" />
                        <line className={style.st13} x1="484.7" y1="471.7" x2="609.4" y2="732.3" />
                        <line className={style.st0} x1="241.4" y1="783" x2="421.3" y2="938.5" />
                        <line className={style.st13} x1="321.6" y1="613.8" x2="421.3" y2="938.5" />
                        <line className={style.st2} x1="124" y1="613.8" x2="321.6" y2="613.8" />
                        <line className={style.st5} x1="137.6" y1="486.5" x2="321.6" y2="613.8" />
                        <line className={style.st5} x1="646.6" y1="521.6" x2="241.4" y2="783" />
                        <line className={style.st5} x1="484.7" y1="471.7" x2="321.6" y2="613.8" />
                        <line className={style.st1} x1="646.6" y1="522.7" x2="321.6" y2="615" />
                        <line className={style.st5} x1="484.7" y1="471.7" x2="762.5" y2="441" />
                        <line className={style.st13} x1="698.8" y1="257.2" x2="651.6" y2="513" />
                        <line className={style.st5} x1="810.1" y1="338" x2="783.6" y2="567.2" />
                        <line className={style.st5} x1="646.6" y1="522.7" x2="1026.3" y2="243.3" />
                        <line className={style.st9} x1="920.6" y1="478.8" x2="1026.3" y2="243.3" />
                        <line className={style.st13} x1="653" y1="408.4" x2="906.8" y2="383.2" />
                        <line className={style.st0} x1="762.5" y1="441" x2="1129.2" y2="800.5" />
                        <line className={style.st0} x1="653" y1="408.4" x2="1129.2" y2="800.5" />
                        <line className={style.st1} x1="783.6" y1="567.2" x2="1129.2" y2="800.5" />
                        <line className={style.st1} x1="1129.2" y1="800.5" x2="881.9" y2="693.2" />
                        <line className={style.st10} x1="646.6" y1="521.6" x2="881.9" y2="693.2" />
                        <line className={style.st13} x1="1129.2" y1="800.5" x2="1385.3" y2="641.6" />
                        <line className={style.st9} x1="881.9" y1="693.2" x2="1080.1" y2="649.3" />
                        //TODO text 정리
                        {/* Clockwise */}
                        //TODO {/* 사용할 ellipse  */}
                        <ellipse className={style.area1} cx="593.5" cy="507.5" rx="189" ry="103.9" />
                        <ellipse className={style.area2} cx="1021.9" cy="313" rx="259.8" ry="149.2" />
                        <ellipse className={style.area3} cx="175" cy="546.2" rx="147.8" ry="128.5" />
                        <ellipse className={style.area4} cx="1088.5" cy="598.5" rx="215.6" ry="101.1" />
                        <ellipse className={style.area5} cx="1132.5" cy="801.4" rx="164.9" ry="59.4" />
                        //TODO rect 변형하기
                        <g>
                            <text transform="matrix(1 0 0 1 715.7818 993.4391)" className={style.nodeText}>
                                metal
                            </text>
                        </g>
                        <rect x="681.8" y="971.9" className={style.representationNode} width="27.8" height="27.8" />
                        <g>
                            <text transform="matrix(1 0 0 1 775.0245 899.7008)" className={style.nodeText}>
                                food
                            </text>
                        </g>
                        <rect x="741" y="878.1" className={style.representationNode} width="27.8" height="27.8" />
                        <g>
                            <text transform="matrix(1 0 0 1 999.2466 955.152)" className={style.nodeText}>
                                behavior
                            </text>
                        </g>
                        <rect x="965.2" y="933.6" className={style.representationNode} width="27.8" height="27.8" />
                        <g>
                            <text transform="matrix(1 0 0 1 1166.4762 988.402)" className={style.nodeText}>
                                machine software work
                            </text>
                        </g>
                        <rect x="1132.5" y="966.8" className={style.representationNode} width="27.8" height="27.8" />
                        <g>
                            <text transform="matrix(1 0 0 1 1267.7135 938.5406)" className={style.nodeText}>
                                machine
                            </text>
                        </g>
                        <rect x="1233.7" y="917" className={style.representationNode} width="27.8" height="27.8" />
                        <g>
                            <text transform="matrix(1 0 0 1 1330.7057 858.3004)" className={style.nodeText}>
                                nonmetal
                            </text>
                        </g>
                        <rect x="1296.7" y="836.7" className={style.representationNode} width="27.8" height="27.8" />
                        <g>
                            <text transform="matrix(1 0 0 1 1216.7203 714.8199)" className={style.nodeText}>
                                picture
                            </text>
                        </g>
                        <rect x="1182.7" y="693.2" className={style.representationNode} width="27.8" height="27.8" />
                        <g>
                            <text transform="matrix(1 0 0 1 1405.3893 649.3151)" className={style.nodeText}>
                                space time movement
                            </text>
                        </g>
                        <rect x="1371.4" y="627.7" className={style.representationNode} width="27.8" height="27.8" />
                        <g>
                            <text transform="matrix(1 0 0 1 629.5425 739.9928)" className={style.nodeText}>
                                creation and destruction
                            </text>
                        </g>
                        <rect x="595.5" y="718.4" className={style.representationNode} width="27.8" height="27.8" />
                        <g>
                            <text transform="matrix(1 0 0 1 561.3008 808.234)" className={style.nodeText}>
                                natural phenomena
                            </text>
                        </g>
                        <rect x="527.3" y="786.7" className={style.representationNode} width="27.8" height="27.8" />
                        <g>
                            <text transform="matrix(1 0 0 1 261.5172 790.6588)" className={style.nodeText}>
                                software
                            </text>
                        </g>
                        <rect x="227.5" y="769.1" className={style.representationNode} width="27.8" height="27.8" />
                        <g>
                            <text transform="matrix(1 0 0 1 341.7569 621.5475)" className={style.nodeText}>
                                building&amp;structure
                            </text>
                        </g>
                        <rect x="307.7" y="600" className={style.representationNode} width="27.8" height="27.8" />
                        <g>
                            <text transform="matrix(1 0 0 1 629.5425 631.1276)" className={style.nodeText}>
                                letter
                            </text>
                        </g>
                        <rect x="595.5" y="609.5" className={style.representationNode} width="27.8" height="27.8" />
                        <g>
                            <text transform="matrix(1 0 0 1 902.0362 700.9362)" className={style.nodeText}>
                                landscape
                            </text>
                        </g>
                        <rect x="868" y="679.4" className={style.representationNode} width="27.8" height="27.8" />
                        <g>
                            <text transform="matrix(1 0 0 1 802.7911 574.9479)" className={style.nodeText}>
                                toys&amp;instrument
                            </text>
                        </g>
                        <rect x="768.8" y="553.4" className={style.representationNode} width="27.8" height="27.8" />
                        <g>
                            <text transform="matrix(1 0 0 1 940.774 486.4586)" className={style.nodeText}>
                                geometry
                            </text>
                        </g>
                        <rect x="906.8" y="464.9" className={style.representationNode} width="27.8" height="27.8" />
                        <g>
                            <text transform="matrix(1 0 0 1 782.6612 444.8981)" className={style.nodeText}>
                                pattern
                            </text>
                        </g>
                        <rect x="748.6" y="423.3" className={style.representationNode} width="27.8" height="27.8" />
                        <g>
                            <text transform="matrix(1 0 0 1 673.1749 417.131)" className={style.nodeText}>
                                map
                            </text>
                        </g>
                        <rect x="639.2" y="395.5" className={style.representationNode} width="27.8" height="27.8" />
                        <g>
                            <text transform="matrix(1 0 0 1 718.919 264.9001)" className={style.nodeText}>
                                compound
                            </text>
                        </g>
                        <rect x="684.9" y="243.3" className={style.representationNode} width="27.8" height="27.8" />
                        <g>
                            <text transform="matrix(1 0 0 1 1281.6764 337.9855)" className={style.nodeText}>
                                cell
                            </text>
                        </g>
                        <rect x="1247.7" y="316.4" className={style.representationNode} width="27.8" height="27.8" />
                        <g>
                            <text transform="matrix(1 0 0 1 629.5421 165.526)" className={style.nodeText}>
                                plant
                            </text>
                        </g>
                        <rect x="595.5" y="143.9" className={style.representationNode} width="27.8" height="27.8" />
                        <g>
                            <text transform="matrix(1 0 0 1 1066.4967 422.2355)" className={style.nodeText}>
                                area chart
                            </text>
                        </g>
                        <rect x="1034.4" y="402.4" className={style.visualtechniquesNode} width="27.2" height="27.2" />
                        <g>
                            <text transform="matrix(1 0 0 1 1075.5289 566.0475)" className={style.nodeText}>
                                scatter plot
                            </text>
                        </g>
                        <rect x="1043.4" y="546.2" className={style.visualtechniquesNode} width="27.2" height="27.2" />
                        <g>
                            <text transform="matrix(1 0 0 1 978.9498 618.2584)" className={style.nodeText}>
                                pie chart
                            </text>
                        </g>
                        <rect x="946.8" y="598.5" className={style.visualtechniquesNode} width="27.2" height="27.2" />
                        <g>
                            <text transform="matrix(1 0 0 1 1098.6383 657.024)" className={style.nodeText}>
                                line plot
                            </text>
                        </g>
                        <rect x="1066.5" y="637.2" className={style.visualtechniquesNode} width="27.2" height="27.2" />
                        <g>
                            <text transform="matrix(1 0 0 1 1147.0416 805.9987)" className={style.nodeText}>
                                time oriented visualization
                            </text>
                        </g>
                        <rect x="1114.9" y="786.2" className={style.visualtechniquesNode} width="27.2" height="27.2" />
                        <g>
                            <text transform="matrix(1 0 0 1 439.8839 941.8561)" className={style.nodeText}>
                                3d visualization
                            </text>
                        </g>
                        <rect x="407.7" y="922.1" className={style.visualtechniquesNode} width="27.2" height="27.2" />
                        <g>
                            <text transform="matrix(1 0 0 1 157.6959 492.6784)" className={style.nodeText}>
                                radar chart
                            </text>
                        </g>
                        <rect x="125.6" y="472.9" className={style.visualtechniquesNode} width="27.2" height="27.2" />
                        <g>
                            <text transform="matrix(1 0 0 1 503.2979 477.9508)" className={style.nodeText}>
                                box plot
                            </text>
                        </g>
                        <rect x="471.2" y="458.2" className={style.visualtechniquesNode} width="27.2" height="27.2" />
                        <g>
                            <text transform="matrix(1 0 0 1 553.0005 43.7975)" className={style.nodeText}>
                                treemap
                            </text>
                        </g>
                        <rect x="520.9" y="24" className={style.visualtechniquesNode} width="27.2" height="27.2" />
                        <g>
                            <text transform="matrix(1 0 0 1 666.9288 527.2623)" className={style.nodeText}>
                                tag cloud
                            </text>
                        </g>
                        <rect x="634.8" y="507.5" className={style.visualtechniquesNode} width="27.2" height="27.2" />
                        <g>
                            <text transform="matrix(1 0 0 1 142.5738 620.067)" className={style.nodeText}>
                                mds map
                            </text>
                        </g>
                        <rect x="110.4" y="600.3" className={style.visualtechniquesNode} width="27.2" height="27.2" />
                        <g>
                            <text transform="matrix(1 0 0 1 924.0894 390.1325)" className={style.nodeText}>
                                spatial based visualization
                            </text>
                        </g>
                        <rect x="891.9" y="370.3" className={style.visualtechniquesNode} width="27.2" height="27.2" />
                        <g>
                            <text transform="matrix(1 0 0 1 828.6588 344.2052)" className={style.nodeText}>
                                bubble chart
                            </text>
                        </g>
                        <rect x="796.5" y="324.4" className={style.visualtechniquesNode} width="27.2" height="27.2" />
                        <g>
                            <text transform="matrix(1 0 0 1 1044.8737 246.3336)" className={style.nodeText}>
                                node link diagram
                            </text>
                        </g>
                        <rect x="1012.7" y="226.5" className={style.visualtechniquesNode} width="27.2" height="27.2" />
                        <g>
                            <text transform="matrix(1 0 0 1 1399.6764 454.8385)" className={style.nodeText}>
                                heatmap
                            </text>
                        </g>
                        <rect x="1367.5" y="435" className={style.visualtechniquesNode} width="27.2" height="27.2" />
                    </g>
                </switch>
            </svg>
        </div>
    );
};
