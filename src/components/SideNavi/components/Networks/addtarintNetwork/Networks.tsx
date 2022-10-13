import style from './index.module.scss';
import { SankeyData } from '../../../../../types';
import { tic3, tic4, tic5, tic6, clusterfour, int13 } from '../../../../../Data';

interface Props {
    originData: SankeyData;
    setOriginData: React.Dispatch<React.SetStateAction<SankeyData>>;
    setClickedCluster: React.Dispatch<React.SetStateAction<SankeyData | undefined>>;
}

export const TarIntNetworks = ({ originData, setOriginData, setClickedCluster }: Props) => {
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
                    Target
                </div>

                <svg width="25" height="25" style={{ marginLeft: '10px' }}>
                    <rect width="13" height="13" style={{ fill: '#0280ff', paddingRight: '20px' }}></rect>
                </svg>
                <div style={{ fontSize: '11px', fontWeight: '630', marginTop: '-5px' }}>Intermediation</div>
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
                        <line className={style.st1} x1="1181.3" y1="398.1" x2="1291.6" y2="345.7" />
                        <line className={style.st7} x1="404.7" y1="545.5" x2="500.9" y2="418.6" />
                        <line className={style.st1} x1="500.9" y1="418.6" x2="539.1" y2="678.6" />
                        <line className={style.st8} x1="294.3" y1="285.9" x2="404.7" y2="545.5" />
                        <path className={style.st7} d="M514.5,183.7" />
                        <line className={style.st9} x1="514.5" y1="183.7" x2="391.5" y2="159.2" />
                        <line className={style.st10} x1="663.5" y1="245.1" x2="831.4" y2="250" />
                        <line className={style.st11} x1="1181.3" y1="398.1" x2="1077.3" y2="285.4" />
                        <line className={style.st12} x1="675.4" y1="592.8" x2="933.2" y2="602.4" />
                        <line className={style.st7} x1="933.2" y1="602.4" x2="940.6" y2="182.2" />
                        <line className={style.st8} x1="997.6" y1="536.3" x2="940.6" y2="182.2" />
                        <line className={style.st8} x1="997.6" y1="536.3" x2="1077.3" y2="285.4" />
                        <line className={style.st7} x1="933.2" y1="602.4" x2="1077.3" y2="285.4" />
                        <line className={style.st7} x1="833" y1="727.2" x2="997.6" y2="536.3" />
                        <line className={style.st8} x1="833" y1="727.2" x2="1181.3" y2="398.1" />
                        <line className={style.st8} x1="997.6" y1="536.3" x2="1095.9" y2="359.7" />
                        <line className={style.st7} x1="997.6" y1="536.3" x2="1183.2" y2="308.8" />
                        <line className={style.st7} x1="928" y1="376.4" x2="831.4" y2="250" />
                        <line className={style.st11} x1="940.6" y1="182.2" x2="831.4" y2="250" />
                        <line className={style.st12} x1="1077.3" y1="285.4" x2="831.4" y2="250" />
                        <line className={style.st13} x1="1264.3" y1="457" x2="1181.3" y2="398.1" />
                        <line className={style.st12} x1="1294.5" y1="424.1" x2="1181.3" y2="398.1" />
                        <line className={style.st12} x1="1183.2" y1="308.8" x2="1181.3" y2="398.1" />
                        <line className={style.st12} x1="1167.1" y1="489.3" x2="1181.3" y2="398.1" />
                        <line className={style.st8} x1="172.8" y1="443.4" x2="197.8" y2="242" />
                        <line className={style.st7} x1="453.6" y1="93.7" x2="197.8" y2="242" />
                        <line className={style.st14} x1="391.5" y1="159.2" x2="197.8" y2="242" />
                        <line className={style.st8} x1="252.8" y1="474.5" x2="197.8" y2="242" />
                        <line className={style.st7} x1="334" y1="436.8" x2="197.8" y2="242" />
                        <line className={style.st13} x1="185.2" y1="625.6" x2="26.1" y2="627.7" />
                        <line className={style.st8} x1="172.8" y1="443.4" x2="185.2" y2="625.6" />
                        <line className={style.st12} x1="232.6" y1="675.6" x2="26.1" y2="627.7" />
                        <line className={style.st11} x1="232.6" y1="675.6" x2="174.8" y2="788" />
                        <line className={style.st7} x1="833" y1="727.2" x2="956.2" y2="482.6" />
                        <line className={style.st7} x1="172.8" y1="443.4" x2="291.5" y2="364.6" />
                        <line className={style.st7} x1="252.8" y1="474.5" x2="291.5" y2="364.6" />
                        <line className={style.st10} x1="343.5" y1="508" x2="334" y2="436.8" />
                        <line className={style.st7} x1="379.4" y1="582" x2="294.3" y2="285.9" />
                        <line className={style.st7} x1="232.6" y1="675.6" x2="252.8" y2="474.5" />
                        <line className={style.st8} x1="232.6" y1="675.6" x2="172.8" y2="443.4" />
                        <line className={style.st7} x1="232.6" y1="675.6" x2="334" y2="436.8" />
                        <line className={style.st7} x1="185.2" y1="625.6" x2="252.8" y2="474.5" />
                        <line className={style.st9} x1="453.6" y1="93.7" x2="544.6" y2="131.5" />
                        <line className={style.st14} x1="576.3" y1="326.3" x2="453.6" y2="93.7" />
                        <line className={style.st7} x1="391.5" y1="296.8" x2="544.6" y2="31" />
                        <line className={style.st7} x1="404.7" y1="545.5" x2="391.5" y2="159.2" />
                        <line className={style.st7} x1="391.5" y1="296.8" x2="391.5" y2="159.2" />
                        <line className={style.st14} x1="514.5" y1="183.7" x2="500.9" y2="418.6" />
                        <line className={style.st14} x1="544.6" y1="131.5" x2="500.9" y2="418.6" />
                        <line className={style.st7} x1="956.2" y1="482.6" x2="544.6" y2="31" />
                        <line className={style.st7} x1="544.6" y1="31" x2="997.6" y2="536.3" />
                        <line className={style.st15} x1="539.1" y1="678.6" x2="627" y2="719.5" />
                        <line className={style.st11} x1="544.6" y1="131.5" x2="391.5" y2="159.2" />
                        <line className={style.st7} x1="956.2" y1="482.6" x2="1077.3" y2="285.4" />
                        <line className={style.st7} x1="833" y1="727.2" x2="539.1" y2="678.6" />
                        <line className={style.st7} x1="627" y1="719.5" x2="232.6" y2="675.6" />
                        <line className={style.st16} x1="379.4" y1="582" x2="252.8" y2="474.5" />
                        <polyline className={style.st7} points="940.6,182.2 956.2,482.6 1291.6,345.7 1181.3,398.1 		" />
                        <line className={style.st7} x1="404.7" y1="545.5" x2="1183.2" y2="308.8" />
                        <line className={style.st8} x1="185.2" y1="625.6" x2="675.4" y2="592.8" />
                        <line className={style.st7} x1="232.6" y1="675.6" x2="833" y2="727.2" />
                        <line className={style.st7} x1="334" y1="436.8" x2="576.3" y2="326.3" />
                        <line className={style.st7} x1="197.8" y1="242" x2="663.5" y2="245.1" />
                        <line className={style.st8} x1="672.6" y1="398.2" x2="232.6" y2="675.6" />
                        <line className={style.st7} x1="291.5" y1="364.6" x2="533.8" y2="362.9" />
                        <line className={style.st7} x1="291.5" y1="364.6" x2="663.5" y2="245.1" />
                        <line className={style.st7} x1="391.5" y1="296.8" x2="1077.3" y2="285.4" />
                        <line className={style.st7} x1="831.4" y1="250" x2="294.3" y2="285.9" />
                        <line className={style.st7} x1="197.8" y1="242" x2="500.9" y2="418.6" />
                        <line className={style.st7} x1="197.8" y1="242" x2="928" y2="376.4" />
                        <line className={style.st7} x1="672.6" y1="398.2" x2="1181.3" y2="398.1" />
                        <line className={style.st7} x1="956.2" y1="482.6" x2="627" y2="719.5" />
                        <line className={style.st7} x1="291.5" y1="364.6" x2="544.6" y2="31" />
                        <line className={style.st7} x1="294.3" y1="285.9" x2="185.2" y2="625.6" />
                        <line className={style.st7} x1="391.5" y1="296.8" x2="252.8" y2="474.5" />
                        <line className={style.st7} x1="997.6" y1="536.3" x2="1104.2" y2="448.1" />
                        <line className={style.st7} x1="627" y1="719.5" x2="1181.3" y2="398.1" />
                        <line className={style.st7} x1="627" y1="719.5" x2="997.6" y2="536.3" />
                        <line className={style.st7} x1="675.4" y1="592.8" x2="997.6" y2="536.3" />
                        <line className={style.st7} x1="933.2" y1="602.4" x2="252.8" y2="474.5" />
                        <line className={style.st7} x1="933.2" y1="602.4" x2="172.8" y2="443.4" />
                        <line className={style.st15} x1="391.5" y1="296.8" x2="533.8" y2="362.9" />
                        <line className={style.st7} x1="663.5" y1="245.1" x2="544.6" y2="131.5" />
                        <line className={style.st8} x1="544.6" y1="31" x2="933.2" y2="602.4" />
                        <line className={style.st7} x1="956.2" y1="482.6" x2="663.5" y2="245.1" />
                        <line className={style.st7} x1="453.6" y1="93.7" x2="956.2" y2="482.6" />
                        <line className={style.st7} x1="933.2" y1="602.4" x2="391.5" y2="159.2" />
                        <line className={style.st7} x1="500.9" y1="418.6" x2="232.6" y2="675.6" />
                        <line className={style.st7} x1="232.6" y1="675.6" x2="533.8" y2="362.9" />
                        <line className={style.st7} x1="185.2" y1="625.6" x2="833" y2="727.2" />
                        <line className={style.st7} x1="627" y1="719.5" x2="185.2" y2="625.6" />
                        <line className={style.st7} x1="500.9" y1="418.6" x2="291.5" y2="364.6" />
                        <line className={style.st7} x1="831.4" y1="250" x2="334" y2="436.8" />
                        <line className={style.st9} x1="1095.9" y1="359.7" x2="1181.3" y2="398.1" />
                        <line className={style.st7} x1="997.6" y1="536.3" x2="1291.6" y2="345.7" />
                        <line className={style.st17} x1="294.3" y1="285.9" x2="291.5" y2="364.6" />
                        <line className={style.st8} x1="539.1" y1="678.6" x2="928" y2="376.4" />
                        <polyline className={style.st7} points="627,719.5 391.5,296.8 334,436.8 		" />
                        <line className={style.st7} x1="185.2" y1="625.6" x2="533.8" y2="362.9" />
                        <line className={style.st7} x1="185.2" y1="625.6" x2="334" y2="436.8" />
                        <line className={style.st7} x1="627" y1="719.5" x2="404.7" y2="545.5" />
                        <polyline className={style.st7} points="539.1,678.6 294.3,285.9 1181.3,398.1 		" />
                        <line className={style.st7} x1="172.8" y1="443.4" x2="391.5" y2="296.8" />
                        <line className={style.st7} x1="185.2" y1="625.6" x2="391.5" y2="159.2" />
                        <line className={style.st1} x1="379.4" y1="582" x2="500.9" y2="418.6" />
                        <line className={style.st7} x1="997.6" y1="536.3" x2="928" y2="376.4" />
                        <line className={style.st7} x1="956.2" y1="482.6" x2="1183.2" y2="308.8" />
                        <line className={style.st8} x1="197.8" y1="242" x2="1077.3" y2="285.4" />
                        <line className={style.st7} x1="1181.3" y1="398.1" x2="663.5" y2="245.1" />
                        <line className={style.st7} x1="544.6" y1="31" x2="185.2" y2="625.6" />
                        <line className={style.st7} x1="294.3" y1="285.9" x2="544.6" y2="131.5" />
                        <line className={style.st7} x1="539.1" y1="678.6" x2="334" y2="436.8" />
                        <line className={style.st7} x1="997.6" y1="536.3" x2="453.6" y2="93.7" />
                        <line className={style.st7} x1="1291.6" y1="345.7" x2="404.7" y2="545.5" />
                        <line className={style.st7} x1="1095.9" y1="359.7" x2="185.2" y2="625.6" />
                        <line className={style.st14} x1="928" y1="376.4" x2="514.5" y2="183.7" />
                        <line className={style.st7} x1="627" y1="719.5" x2="291.5" y2="364.6" />
                        <line className={style.st7} x1="391.5" y1="159.2" x2="956.2" y2="482.6" />
                        <line className={style.st7} x1="623.5" y1="458.4" x2="391.5" y2="296.8" />
                        <line className={style.st1} x1="956.2" y1="482.6" x2="928" y2="376.4" />
                        <polyline className={style.st7} points="185.2,625.6 663.5,245.1 933.2,602.4" />
                        <line className={style.st18} x1="294.3" y1="285.9" x2="197.8" y2="242" />
                        <line className={style.st7} x1="672.6" y1="398.2" x2="391.5" y2="296.8" />
                        <line className={style.st7} x1="334" y1="436.8" x2="956.2" y2="482.6" />
                        <line className={style.st7} x1="539.1" y1="678.6" x2="1077.3" y2="285.4" />
                        <line className={style.st8} x1="933.2" y1="602.4" x2="533.8" y2="362.9" />
                        <line className={style.st7} x1="391.5" y1="159.2" x2="997.6" y2="536.3" />
                        <line className={style.st7} x1="185.2" y1="625.6" x2="500.9" y2="418.6" />
                        <line className={style.st7} x1="500.9" y1="418.6" x2="391.5" y2="296.8" />
                        <line className={style.st7} x1="185.2" y1="625.6" x2="672.6" y2="398.2" />
                        <line className={style.st7} x1="334" y1="436.8" x2="404.7" y2="545.5" />
                        <line className={style.st7} x1="933.2" y1="602.4" x2="334" y2="436.8" />
                        <line className={style.st7} x1="933.2" y1="602.4" x2="500.9" y2="418.6" />
                        <line className={style.st7} x1="933.2" y1="602.4" x2="294.3" y2="285.9" />
                        <line className={style.st7} x1="252.8" y1="474.5" x2="1181.3" y2="398.1" />
                        <line className={style.st7} x1="672.6" y1="398.2" x2="291.5" y2="364.6" />
                        <line className={style.st7} x1="197.8" y1="242" x2="533.8" y2="362.9" />
                        <line className={style.st7} x1="252.8" y1="474.5" x2="997.6" y2="536.3" />
                        <line className={style.st7} x1="928" y1="376.4" x2="291.5" y2="364.6" />
                        <line className={style.st7} x1="956.2" y1="482.6" x2="672.6" y2="398.2" />
                        <line className={style.st7} x1="500.9" y1="418.6" x2="1181.3" y2="398.1" />
                        <line className={style.st1} x1="997.6" y1="536.3" x2="672.6" y2="398.2" />
                        <line className={style.st8} x1="997.6" y1="536.3" x2="500.9" y2="418.6" />
                        <line className={style.st7} x1="404.7" y1="545.5" x2="672.6" y2="398.2" />
                        <line className={style.st7} x1="1181.3" y1="398.1" x2="172.8" y2="443.4" />
                        <line className={style.st7} x1="997.6" y1="536.3" x2="172.8" y2="443.4" />
                        <line className={style.st7} x1="956.2" y1="482.6" x2="500.9" y2="418.6" />
                        <line className={style.st7} x1="404.7" y1="545.5" x2="1095.9" y2="359.7" />
                        <line className={style.st11} x1="1181.3" y1="398.1" x2="928" y2="376.4" />
                        <line className={style.st7} x1="997.6" y1="536.3" x2="533.8" y2="362.9" />
                        <line className={style.st7} x1="956.2" y1="482.6" x2="294.3" y2="285.9" />
                        <line className={style.st7} x1="1181.3" y1="398.1" x2="533.8" y2="362.9" />
                        <line className={style.st7} x1="997.6" y1="536.3" x2="623.5" y2="458.4" />
                        <line className={style.st7} x1="343.5" y1="508" x2="500.9" y2="418.6" />
                        <line className={style.st7} x1="334" y1="436.8" x2="997.6" y2="536.3" />
                        <path className={style.st7} d="M933.2,602.4c5.7,1.9-260.6-204.2-260.6-204.2" />
                        <line className={style.st7} x1="404.7" y1="545.5" x2="928" y2="376.4" />
                        <line className={style.st7} x1="294.3" y1="285.9" x2="997.6" y2="536.3" />
                        <line className={style.st7} x1="956.2" y1="482.6" x2="533.8" y2="362.9" />
                        <line className={style.st7} x1="997.6" y1="536.3" x2="663.5" y2="245.1" />
                        <line className={style.st18} x1="1104.2" y1="448.1" x2="1181.3" y2="398.1" />
                        <path className={style.st7} d="M291.5,364.6" />
                        //TODO text 정리
                        <g>
                            <text transform="matrix(1 0 0 1 560.2801 135.9107)" className={style.nodeText}>
                                analysis of debates comments and argumentation
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 565.4998 35.7762)" className={style.nodeText}>
                                organization
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 472.9664 99.2718)" className={style.nodeText}>
                                psychology
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 409.5363 170.0855)" className={style.nodeText}>
                                stance
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 191.9 447.4856)" className={style.nodeText}>
                                place
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 272.1501 478.4856)" className={style.nodeText}>
                                produce
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 353.0002 440.9856)" className={style.nodeText}>
                                appraisal
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 520.0002 427.5357)" className={style.nodeText}>
                                opinion
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 551.1065 365.4849)" className={style.nodeText}>
                                person
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 687.6111 249.9849)" className={style.nodeText}>
                                key player
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 694.5498 404.6118)" className={style.nodeText}>
                                service
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 962.8 188.2848)" className={style.nodeText}>
                                public
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 950.0105 387.235)" className={style.nodeText}>
                                attitude
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 1095.8998 291.7813)" className={style.nodeText}>
                                writer
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 1202.0299 317.3854)" className={style.nodeText}>
                                continuity
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 1315.8262 350.5198)" className={style.nodeText}>
                                birth death
                            </text>
                            <g>
                                <text transform="matrix(1 0 0 1 1114.9998 370.0851)" className={style.nodeText}>
                                    growth constraction
                                </text>
                                <g>
                                    <text transform="matrix(1 0 0 1 1124.5671 456.3352)" className={style.nodeText}>
                                        accumulation
                                    </text>
                                    <g>
                                        <text transform="matrix(1 0 0 1 1317.2715 431.3499)" className={style.nodeText}>
                                            acceleration
                                        </text>
                                    </g>
                                    <g>
                                        <text transform="matrix(1 0 0 1 1283.7 460.9356)" className={style.nodeText}>
                                            repeat
                                        </text>
                                    </g>
                                    <g>
                                        <text transform="matrix(1 0 0 1 1187.0625 498.4126)" className={style.nodeText}>
                                            peak valley
                                        </text>
                                    </g>
                                    <g>
                                        <text transform="matrix(1 0 0 1 853.2778 733.9248)" className={style.nodeText}>
                                            thought
                                        </text>
                                    </g>
                                    <g>
                                        <text transform="matrix(1 0 0 1 645.9496 727.1853)" className={style.nodeText}>
                                            event
                                        </text>
                                    </g>
                                    <g>
                                        <text transform="matrix(1 0 0 1 695.0526 601.0351)" className={style.nodeText}>
                                            community
                                        </text>
                                    </g>
                                    <g>
                                        <text transform="matrix(1 0 0 1 193.3457 794.8659)" className={style.nodeText}>
                                            derived
                                        </text>
                                    </g>
                                    <g>
                                        <text transform="matrix(1 0 0 1 45.6154 635.2851)" className={style.nodeText}>
                                            composite
                                        </text>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 643.7858 467.2349)" className={style.nodeText}>
                                behavior
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 592.7403 331.8484)" className={style.nodeText}>
                                detection of fake or deceptive sentiment information
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 531.7415 189.1413)" className={style.nodeText}>
                                argument expression detection
                            </text>
                        </g>
                        <text transform="matrix(1 0 0 1 408.7398 302.325)" className={style.nodeText}>
                            opinion summarization
                        </text>
                        <text transform="matrix(1 0 0 1 306.1524 370.1388)" className={style.nodeText}>
                            polarity classification
                        </text>
                        <text transform="matrix(1 0 0 1 974.3054 488.9842)" className={style.nodeText}>
                            finding significant
                        </text>
                        <text transform="matrix(1 0 0 1 560.2803 684.2304)" className={style.nodeText}>
                            multilingual / crosslingual sentiment analysis
                        </text>
                        <g>
                            <text transform="matrix(1 0 0 1 949.2139 607.9887)" className={style.nodeText}>
                                comparison of different sentiments
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 853.2778 255.5467)" className={style.nodeText}>
                                personalized sentiment analysis
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 213.7942 249.299)" className={style.nodeText}>
                                emotion detection and classification
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 363.5235 513.3774)" className={style.nodeText}>
                                identifying the intent of sentiment information
                            </text>
                        </g>
                        <text transform="matrix(1 0 0 1 397.3566 589.2763)" className={style.nodeText}>
                            emotion cause detection
                        </text>
                        <text transform="matrix(1 0 0 1 1200.1008 404.6126)" className={style.nodeText}>
                            timeline analysis
                        </text>
                        <text transform="matrix(1 0 0 1 1010.895 541.3952)" className={style.nodeText}>
                            easy exploration of sentiment information
                        </text>
                        <text transform="matrix(1 0 0 1 205.6339 631.1855)" className={style.nodeText}>
                            sentiment information description a multi-aspect
                        </text>
                        <g>
                            <text transform="matrix(1 0 0 1 252.8342 679.7132)" className={style.nodeText}>
                                aspect based sentiment
                            </text>
                            <text transform="matrix(1 0 0 1 252.8342 704.9131)" className={style.nodeText}>
                                analysis
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 309.4194 291.7815)" className={style.nodeText}>
                                emotion
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(1 0 0 1 422.2001 556.2238)" className={style.nodeText}>
                                detection of evidence event that causes sentiment patterns
                            </text>
                        </g>
                        {/* Clockwise */}
                        //TODO {/* 사용할 ellipse  */}
                        <ellipse
                            className={style.area1}
                            onClick={() => {
                                setOriginData(int13);
                            }}
                            cx="1191.4"
                            cy="375.5"
                            rx="152.5"
                            ry="94.9"
                        />
                        <ellipse
                            className={style.area2}
                            onClick={() => {
                                setOriginData(clusterfour);
                            }}
                            cx="548.5"
                            cy="137.1"
                            rx="122.8"
                            ry="74.5"
                        />
                        <ellipse
                            className={style.area3}
                            onClick={() => {
                                setOriginData(tic3);
                            }}
                            cx="305.7"
                            cy="274.1"
                            rx="129.6"
                            ry="106.7"
                        />
                        <ellipse
                            className={style.area4}
                            onClick={() => {
                                setOriginData(tic4);
                            }}
                            cx="955.8"
                            cy="541.4"
                            rx="140.6"
                            ry="108.4"
                        />
                        <ellipse
                            className={style.area5}
                            onClick={() => {
                                setOriginData(tic5);
                            }}
                            cx="407.1"
                            cy="532.9"
                            rx="122"
                            ry="74.7"
                        />
                        <ellipse
                            className={style.area6}
                            onClick={() => {
                                setOriginData(tic6);
                            }}
                            cx="210.5"
                            cy="635.3"
                            rx="120.3"
                            ry="72.8"
                        />
                        //TODO rect 변형하기
                        <rect x="533.7" y="20.1" className={style.targetNode} width="21.7" height="21.7" />
                        <rect x="442.7" y="82.8" className={style.targetNode} width="21.7" height="21.7" />
                        <rect x="533.7" y="120.7" className={style.intermediationNode} width="21.7" height="21.7" />
                        <rect x="503.6" y="172.9" className={style.intermediationNode} width="21.7" height="21.7" />
                        <rect x="652.7" y="234.3" className={style.targetNode} width="21.7" height="21.7" />
                        <rect x="820.6" y="239.1" className={style.intermediationNode} width="21.7" height="21.7" />
                        <rect x="929.7" y="171.4" className={style.targetNode} width="21.7" height="21.7" />
                        <rect x="917.2" y="365.5" className={style.targetNode} width="21.7" height="21.7" />
                        <rect x="565.5" y="315.4" className={style.intermediationNode} width="21.7" height="21.7" />
                        <rect x="661.8" y="387.4" className={style.targetNode} width="21.7" height="21.7" />
                        <rect x="612.6" y="447.5" className={style.targetNode} width="21.7" height="21.7" />
                        <rect x="523" y="352" className={style.targetNode} width="21.7" height="21.7" />
                        <rect x="945.4" y="471.7" className={style.intermediationNode} width="21.7" height="21.7" />
                        <rect x="1093.3" y="437.3" className={style.targetNode} width="21.7" height="21.7" />
                        <rect x="1170.5" y="387.2" className={style.intermediationNode} width="21.7" height="21.7" />
                        <rect x="1172.4" y="298" className={style.targetNode} width="21.7" height="21.7" />
                        <rect x="1280.8" y="334.9" className={style.targetNode} width="21.7" height="21.7" />
                        <rect x="1283.7" y="413.3" className={style.targetNode} width="21.7" height="21.7" />
                        <rect x="1253.5" y="446.1" className={style.targetNode} width="21.7" height="21.7" />
                        <rect x="1085" y="348.8" className={style.targetNode} width="21.7" height="21.7" />
                        <rect x="1066.4" y="274.5" className={style.targetNode} width="21.7" height="21.7" />
                        <rect x="1156.3" y="478.5" className={style.targetNode} width="21.7" height="21.7" />
                        <rect x="986.7" y="525.5" className={style.intermediationNode} width="21.7" height="21.7" />
                        <rect x="922.4" y="591.6" className={style.intermediationNode} width="21.7" height="21.7" />
                        <rect x="822.1" y="716.4" className={style.targetNode} width="21.7" height="21.7" />
                        <rect x="490.1" y="407.8" className={style.targetNode} width="21.7" height="21.7" />
                        <rect x="380.7" y="148.4" className={style.targetNode} width="21.7" height="21.7" />
                        <rect x="187" y="231.1" className={style.intermediationNode} width="21.7" height="21.7" />
                        <rect x="283.5" y="275.1" className={style.targetNode} width="21.7" height="21.7" />
                        <rect x="280.7" y="353.7" className={style.intermediationNode} width="21.7" height="21.7" />
                        <rect x="380.7" y="285.9" className={style.intermediationNode} width="21.7" height="21.7" />
                        <rect x="323.2" y="426" className={style.targetNode} width="21.7" height="21.7" />
                        <rect x="242" y="463.7" className={style.targetNode} width="21.7" height="21.7" />
                        <rect x="161.9" y="432.6" className={style.targetNode} width="21.7" height="21.7" />
                        <rect x="332.6" y="497.1" className={style.intermediationNode} width="21.7" height="21.7" />
                        <rect x="393.9" y="534.7" className={style.intermediationNode} width="21.7" height="21.7" />
                        <rect x="664.5" y="582" className={style.targetNode} width="21.7" height="21.7" />
                        <rect x="616.2" y="708.7" className={style.targetNode} width="21.7" height="21.7" />
                        <rect x="528.2" y="667.8" className={style.intermediationNode} width="21.7" height="21.7" />
                        <rect x="368.5" y="571.1" className={style.intermediationNode} width="21.7" height="21.7" />
                        <rect x="221.8" y="664.8" className={style.intermediationNode} width="21.7" height="21.7" />
                        <rect x="164" y="777.1" className={style.targetNode} width="21.7" height="21.7" />
                        <rect x="174.4" y="614.8" className={style.intermediationNode} width="21.7" height="21.7" />
                        <rect x="15.2" y="616.8" className={style.targetNode} width="21.7" height="21.7" />
                    </g>
                </switch>
            </svg>
        </div>
    );
};
