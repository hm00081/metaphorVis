import style from './index.module.scss';
import { SankeyData } from '../../../../../types';
import {
    tic3,
    tic4,
    tic5,
    tic6,
    clusterfour,
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
    int1,
    int2,
    int3,
    int4,
    int5,
    int5a,
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
} from '../../../../../Data';

interface Props {
    originData: SankeyData;
    setOriginData: React.Dispatch<React.SetStateAction<SankeyData>>;
    setClickedCluster: React.Dispatch<React.SetStateAction<SankeyData | undefined>>;
}

export const TarIntNetworks = ({ originData, setOriginData, setClickedCluster }: Props) => {
    return (
        <div className={style.networksContainer}>
            <div className={style.categoryWrapper}>
                <svg width="25" height="25" style={{ marginLeft: '3px' }}>
                    <rect width="13" height="13" style={{ fill: '#00d12c', paddingRight: '2px' }}></rect>
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

                <svg width="25" height="25" style={{ marginLeft: '15px' }}>
                    <rect width="13" height="13" style={{ fill: '#fb28fb', paddingRight: '20px' }}></rect>
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
                viewBox="0 0 1350 990"
                xmlSpace="preserve"
            >
                <switch>
                    <foreignObject requiredExtensions="&ns_ai;" x={0} y={0} width={1} height={1}></foreignObject>
                    <g>
                        <line className={style.st1} x1="1071.4" y1="474.7" x2="1181.7" y2="417.2" />
                        <g>
                            <line className={style.st7} x1="404.7" y1="642.8" x2="500.9" y2="503.7" />
                        </g>
                        <line className={style.st1} x1="500.9" y1="503.7" x2="539.1" y2="788.7" />
                        <line className={style.st8} x1="294.3" y1="358.2" x2="404.7" y2="642.8" />
                        <path className={style.st7} d="M514.5,246.2" />
                        <line className={style.st9} x1="514.5" y1="246.2" x2="391.5" y2="219.3" />
                        <line className={style.st10} x1="663.5" y1="313.5" x2="831.4" y2="318.8" />
                        <line className={style.st11} x1="1071.4" y1="474.7" x2="967.4" y2="351.1" />
                        <line className={style.st12} x1="675.4" y1="694.6" x2="880.1" y2="744.2" />
                        <line className={style.st7} x1="880.1" y1="744.2" x2="940.6" y2="244.5" />
                        <line className={style.st8} x1="944.5" y1="671.7" x2="940.6" y2="244.5" />
                        <line className={style.st8} x1="944.5" y1="671.7" x2="967.4" y2="351.1" />
                        <line className={style.st7} x1="880.1" y1="744.2" x2="967.4" y2="351.1" />
                        <line className={style.st7} x1="773.7" y1="882.6" x2="944.5" y2="671.7" />
                        <line className={style.st8} x1="773.7" y1="882.6" x2="1018.3" y2="513.7" />
                        <line className={style.st8} x1="944.5" y1="671.7" x2="986" y2="432.6" />
                        <line className={style.st7} x1="944.5" y1="671.7" x2="1073.3" y2="376.8" />
                        <line className={style.st7} x1="836.7" y1="457.4" x2="831.4" y2="318.8" />
                        <line className={style.st11} x1="940.6" y1="244.5" x2="831.4" y2="318.8" />
                        <line className={style.st12} x1="967.4" y1="351.1" x2="831.4" y2="318.8" />
                        <line className={style.st13} x1="1154.4" y1="539.2" x2="1071.4" y2="474.7" />
                        <line className={style.st12} x1="1184.6" y1="503.2" x2="1071.4" y2="474.7" />
                        <line className={style.st12} x1="1073.3" y1="376.8" x2="1071.4" y2="474.7" />
                        <line className={style.st12} x1="1057.2" y1="574.6" x2="1071.4" y2="474.7" />
                        <line className={style.st8} x1="172.8" y1="530.8" x2="197.8" y2="310.1" />
                        <line className={style.st7} x1="453.6" y1="147.5" x2="197.8" y2="310.1" />
                        <line className={style.st14} x1="391.5" y1="219.3" x2="197.8" y2="310.1" />
                        <line className={style.st8} x1="252.8" y1="564.9" x2="197.8" y2="310.1" />
                        <line className={style.st7} x1="334" y1="523.6" x2="197.8" y2="310.1" />
                        <line className={style.st13} x1="185.2" y1="730.6" x2="26.1" y2="732.9" />
                        <line className={style.st8} x1="172.8" y1="530.8" x2="185.2" y2="730.6" />
                        <line className={style.st12} x1="232.6" y1="785.4" x2="26.1" y2="732.9" />
                        <line className={style.st11} x1="232.6" y1="785.4" x2="174.8" y2="908.6" />
                        <line className={style.st7} x1="773.7" y1="882.6" x2="903.1" y2="612.9" />
                        <line className={style.st7} x1="172.8" y1="530.8" x2="291.5" y2="444.5" />
                        <line className={style.st7} x1="252.8" y1="564.9" x2="291.5" y2="444.5" />
                        <line className={style.st10} x1="343.5" y1="601.7" x2="334" y2="523.6" />
                        <line className={style.st7} x1="379.4" y1="682.8" x2="294.3" y2="358.2" />
                        <line className={style.st7} x1="232.6" y1="785.4" x2="252.8" y2="564.9" />
                        <line className={style.st8} x1="232.6" y1="785.4" x2="172.8" y2="530.8" />
                        <line className={style.st7} x1="232.6" y1="785.4" x2="334" y2="523.6" />
                        <line className={style.st7} x1="185.2" y1="730.6" x2="252.8" y2="564.9" />
                        <line className={style.st9} x1="453.6" y1="147.5" x2="544.6" y2="188.9" />
                        <line className={style.st14} x1="576.3" y1="402.5" x2="453.6" y2="147.5" />
                        <line className={style.st7} x1="391.5" y1="370.1" x2="544.6" y2="78.8" />
                        <line className={style.st7} x1="404.7" y1="642.8" x2="391.5" y2="219.3" />
                        <line className={style.st7} x1="391.5" y1="370.1" x2="391.5" y2="219.3" />
                        <line className={style.st14} x1="514.5" y1="246.2" x2="500.9" y2="503.7" />
                        <line className={style.st14} x1="544.6" y1="188.9" x2="500.9" y2="503.7" />
                        <line className={style.st7} x1="903.1" y1="612.9" x2="544.6" y2="78.8" />
                        <line className={style.st7} x1="544.6" y1="78.8" x2="944.5" y2="671.7" />
                        <line className={style.st15} x1="539.1" y1="788.7" x2="627" y2="833.5" />
                        <line className={style.st11} x1="544.6" y1="188.9" x2="391.5" y2="219.3" />
                        <line className={style.st7} x1="903.1" y1="612.9" x2="967.4" y2="351.1" />
                        <line className={style.st7} x1="773.7" y1="882.6" x2="539.1" y2="788.7" />
                        <line className={style.st7} x1="627" y1="833.5" x2="232.6" y2="785.4" />
                        <line className={style.st16} x1="379.4" y1="682.8" x2="252.8" y2="564.9" />
                        <polyline className={style.st7} points="940.6,244.5 903.1,612.9 1181.7,417.2 1071.4,474.7 		" />
                        <line className={style.st7} x1="404.7" y1="642.8" x2="1073.3" y2="376.8" />
                        <line className={style.st8} x1="185.2" y1="730.6" x2="675.4" y2="694.6" />
                        <line className={style.st7} x1="232.6" y1="785.4" x2="773.7" y2="882.6" />
                        <line className={style.st7} x1="334" y1="523.6" x2="576.3" y2="402.5" />
                        <line className={style.st7} x1="197.8" y1="310.1" x2="663.5" y2="313.5" />
                        <line className={style.st8} x1="672.6" y1="481.3" x2="232.6" y2="785.4" />
                        <line className={style.st7} x1="291.5" y1="444.5" x2="533.8" y2="442.6" />
                        <line className={style.st7} x1="291.5" y1="444.5" x2="663.5" y2="313.5" />
                        <line className={style.st7} x1="391.5" y1="370.1" x2="967.4" y2="351.1" />
                        <line className={style.st7} x1="831.4" y1="318.8" x2="294.3" y2="358.2" />
                        <line className={style.st7} x1="197.8" y1="310.1" x2="500.9" y2="503.7" />
                        <line className={style.st7} x1="197.8" y1="310.1" x2="836.7" y2="457.4" />
                        <line className={style.st7} x1="672.6" y1="481.3" x2="1071.4" y2="474.7" />
                        <line className={style.st7} x1="903.1" y1="612.9" x2="627" y2="833.5" />
                        <line className={style.st7} x1="291.5" y1="444.5" x2="544.6" y2="78.8" />
                        <line className={style.st7} x1="294.3" y1="358.2" x2="185.2" y2="730.6" />
                        <line className={style.st7} x1="391.5" y1="370.1" x2="252.8" y2="564.9" />
                        <line className={style.st7} x1="944.5" y1="671.7" x2="994.3" y2="529.5" />
                        <line className={style.st7} x1="627" y1="833.5" x2="1018.3" y2="513.7" />
                        <line className={style.st7} x1="627" y1="833.5" x2="944.5" y2="671.7" />
                        <line className={style.st7} x1="675.4" y1="694.6" x2="944.5" y2="671.7" />
                        <line className={style.st7} x1="880.1" y1="744.2" x2="252.8" y2="564.9" />
                        <line className={style.st7} x1="880.1" y1="744.2" x2="172.8" y2="530.8" />
                        <line className={style.st15} x1="391.5" y1="370.1" x2="533.8" y2="442.6" />
                        <line className={style.st7} x1="663.5" y1="313.5" x2="544.6" y2="188.9" />
                        <line className={style.st8} x1="544.6" y1="78.8" x2="880.1" y2="744.2" />
                        <line className={style.st7} x1="903.1" y1="612.9" x2="663.5" y2="313.5" />
                        <line className={style.st7} x1="453.6" y1="147.5" x2="903.1" y2="612.9" />
                        <line className={style.st7} x1="880.1" y1="744.2" x2="391.5" y2="219.3" />
                        <line className={style.st7} x1="500.9" y1="503.7" x2="232.6" y2="785.4" />
                        <line className={style.st7} x1="232.6" y1="785.4" x2="533.8" y2="442.6" />
                        <line className={style.st7} x1="185.2" y1="730.6" x2="773.7" y2="882.6" />
                        <line className={style.st7} x1="627" y1="833.5" x2="185.2" y2="730.6" />
                        <line className={style.st7} x1="500.9" y1="503.7" x2="291.5" y2="444.5" />
                        <line className={style.st7} x1="831.4" y1="318.8" x2="334" y2="523.6" />
                        <line className={style.st9} x1="986" y1="432.6" x2="1071.4" y2="474.7" />
                        <line className={style.st7} x1="944.5" y1="671.7" x2="1181.7" y2="417.2" />
                        <line className={style.st17} x1="294.3" y1="358.2" x2="291.5" y2="444.5" />
                        <line className={style.st8} x1="539.1" y1="788.7" x2="836.7" y2="457.4" />
                        <polyline className={style.st7} points="627,833.5 391.5,370.1 334,523.6 		" />
                        <line className={style.st7} x1="185.2" y1="730.6" x2="533.8" y2="442.6" />
                        <line className={style.st7} x1="185.2" y1="730.6" x2="334" y2="523.6" />
                        <line className={style.st7} x1="627" y1="833.5" x2="404.7" y2="642.8" />
                        <polyline className={style.st7} points="539.1,788.7 294.3,358.2 1071.4,474.7 		" />
                        <line className={style.st7} x1="172.8" y1="530.8" x2="391.5" y2="370.1" />
                        <line className={style.st7} x1="185.2" y1="730.6" x2="391.5" y2="219.3" />
                        <line className={style.st1} x1="379.4" y1="682.8" x2="500.9" y2="503.7" />
                        <line className={style.st7} x1="944.5" y1="671.7" x2="836.7" y2="457.4" />
                        <line className={style.st7} x1="903.1" y1="612.9" x2="1073.3" y2="376.8" />
                        <line className={style.st8} x1="197.8" y1="310.1" x2="967.4" y2="351.1" />
                        <line className={style.st7} x1="1071.4" y1="474.7" x2="663.5" y2="313.5" />
                        <line className={style.st7} x1="544.6" y1="78.8" x2="185.2" y2="730.6" />
                        <line className={style.st7} x1="294.3" y1="358.2" x2="544.6" y2="188.9" />
                        <line className={style.st7} x1="539.1" y1="788.7" x2="334" y2="523.6" />
                        <line className={style.st7} x1="944.5" y1="671.7" x2="453.6" y2="147.5" />
                        <line className={style.st7} x1="1181.7" y1="417.2" x2="404.7" y2="642.8" />
                        <line className={style.st7} x1="986" y1="432.6" x2="185.2" y2="730.6" />
                        <line className={style.st14} x1="836.7" y1="457.4" x2="514.5" y2="246.2" />
                        <line className={style.st7} x1="627" y1="833.5" x2="291.5" y2="444.5" />
                        <line className={style.st7} x1="391.5" y1="219.3" x2="903.1" y2="612.9" />
                        <line className={style.st7} x1="623.5" y1="547.3" x2="391.5" y2="370.1" />
                        <line className={style.st1} x1="903.1" y1="612.9" x2="836.7" y2="457.4" />
                        <polyline className={style.st7} points="185.2,730.6 663.5,313.5 880.1,744.2 		" />
                        <line className={style.st18} x1="294.3" y1="358.2" x2="197.8" y2="310.1" />
                        <line className={style.st7} x1="672.6" y1="481.3" x2="391.5" y2="370.1" />
                        <line className={style.st7} x1="334" y1="523.6" x2="903.1" y2="612.9" />
                        <line className={style.st7} x1="539.1" y1="788.7" x2="967.4" y2="351.1" />
                        <line className={style.st8} x1="880.1" y1="744.2" x2="533.8" y2="442.6" />
                        <line className={style.st7} x1="391.5" y1="219.3" x2="944.5" y2="671.7" />
                        <line className={style.st7} x1="185.2" y1="730.6" x2="500.9" y2="503.7" />
                        <line className={style.st7} x1="500.9" y1="503.7" x2="391.5" y2="370.1" />
                        <line className={style.st7} x1="185.2" y1="730.6" x2="672.6" y2="481.3" />
                        <line className={style.st7} x1="334" y1="523.6" x2="404.7" y2="642.8" />
                        <line className={style.st7} x1="880.1" y1="744.2" x2="280.9" y2="562.7" />
                        <line className={style.st7} x1="880.1" y1="744.2" x2="500.9" y2="503.7" />
                        <line className={style.st7} x1="880.1" y1="744.2" x2="294.3" y2="358.2" />
                        <line className={style.st7} x1="252.8" y1="564.9" x2="1071.4" y2="474.7" />
                        <line className={style.st7} x1="672.6" y1="481.3" x2="291.5" y2="444.5" />
                        <line className={style.st7} x1="197.8" y1="310.1" x2="533.8" y2="442.6" />
                        <line className={style.st7} x1="252.8" y1="564.9" x2="944.5" y2="671.7" />
                        <line className={style.st7} x1="836.7" y1="457.4" x2="291.5" y2="444.5" />
                        <line className={style.st7} x1="903.1" y1="612.9" x2="672.6" y2="481.3" />
                        <line className={style.st7} x1="500.9" y1="503.7" x2="1071.4" y2="474.7" />
                        <line className={style.st1} x1="944.5" y1="671.7" x2="672.6" y2="481.3" />
                        <line className={style.st8} x1="944.5" y1="671.7" x2="500.9" y2="503.7" />
                        <line className={style.st7} x1="404.7" y1="642.8" x2="672.6" y2="481.3" />
                        <line className={style.st7} x1="1071.4" y1="474.7" x2="172.8" y2="530.8" />
                        <line className={style.st7} x1="944.5" y1="671.7" x2="172.8" y2="530.8" />
                        <line className={style.st7} x1="903.1" y1="612.9" x2="500.9" y2="503.7" />
                        <line className={style.st7} x1="404.7" y1="642.8" x2="986" y2="432.6" />
                        <line className={style.st11} x1="1071.4" y1="474.7" x2="836.7" y2="457.4" />
                        <line className={style.st7} x1="944.5" y1="671.7" x2="533.8" y2="442.6" />
                        <line className={style.st7} x1="903.1" y1="612.9" x2="294.3" y2="358.2" />
                        <line className={style.st7} x1="1071.4" y1="474.7" x2="533.8" y2="442.6" />
                        <line className={style.st7} x1="944.5" y1="671.7" x2="623.5" y2="547.3" />
                        <line className={style.st7} x1="343.5" y1="601.7" x2="500.9" y2="503.7" />
                        <line className={style.st7} x1="334" y1="523.6" x2="944.5" y2="671.7" />
                        <path className={style.st7} d="M880.1,744.2c5.7,2.1-207.5-262.9-207.5-262.9" />
                        <line className={style.st7} x1="404.7" y1="642.8" x2="836.7" y2="457.4" />
                        <line className={style.st7} x1="294.3" y1="358.2" x2="944.5" y2="671.7" />
                        <line className={style.st7} x1="903.1" y1="612.9" x2="533.8" y2="442.6" />
                        <line className={style.st7} x1="944.5" y1="671.7" x2="663.5" y2="313.5" />
                        <line className={style.st18} x1="994.3" y1="529.5" x2="1071.4" y2="474.7" />
                        <path className={style.st7} d="M291.5,444.5" />
                        <g>
                            <text transform="matrix(0.9123 0 0 1 560.2803 193.7546)" className={style.nodeText}>
                                analysis of debates comments and argumentation
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(0.9123 0 0 1 565.5 83.9895)" className={style.nodeText}>
                                organization
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(0.9123 0 0 1 472.9663 153.591)" className={style.nodeText}>
                                psychology
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(0.9123 0 0 1 409.5361 231.2165)" className={style.nodeText}>
                                stance
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(0.9123 0 0 1 191.8999 535.298)" className={style.nodeText}>
                                place
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(0.9123 0 0 1 272.1499 569.2795)" className={style.nodeText}>
                                produce
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(0.9123 0 0 1 353 528.1721)" className={style.nodeText}>
                                appraisal
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(0.9123 0 0 1 520 513.4289)" className={style.nodeText}>
                                opinion
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(0.9123 0 0 1 551.1064 445.4094)" className={style.nodeText}>
                                person
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(0.9123 0 0 1 687.6113 318.8015)" className={style.nodeText}>
                                key player
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(0.9123 0 0 1 694.5498 488.3)" className={style.nodeText}>
                                service
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(0.9123 0 0 1 962.7998 251.1662)" className={style.nodeText}>
                                public
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(0.9123 0 0 1 858.7051 469.2404)" className={style.nodeText}>
                                attitude
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(0.9123 0 0 1 986.0205 358.0954)" className={style.nodeText}>
                                writer
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(0.9123 0 0 1 1092.1504 386.1613)" className={style.nodeText}>
                                continuity
                            </text>
                        </g>
                        <text transform="matrix(0.9123 0 0 1 1205.9463 422.4826)" className={style.nodeText}>
                            birth death
                        </text>
                        <text transform="matrix(0.9123 0 0 1 1005.1201 443.9299)" className={style.nodeText}>
                            growth constraction
                        </text>
                        <text transform="matrix(0.9123 0 0 1 1014.6875 538.4767)" className={style.nodeText}>
                            accumulation
                        </text>
                        <g>
                            <text transform="matrix(0.9123 0 0 1 1207.3916 511.0881)" className={style.nodeText}>
                                acceleration
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(0.9123 0 0 1 1173.8203 543.5187)" className={style.nodeText}>
                                repeat
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(0.9123 0 0 1 1077.1826 584.6008)" className={style.nodeText}>
                                peak valley
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(0.9123 0 0 1 793.9502 889.9045)" className={style.nodeText}>
                                thought
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(0.9123 0 0 1 645.9497 841.8986)" className={style.nodeText}>
                                event
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(0.9123 0 0 1 695.0527 703.6154)" className={style.nodeText}>
                                community
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(0.9123 0 0 1 193.3457 916.0891)" className={style.nodeText}>
                                derived
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(0.9123 0 0 1 45.6152 741.1594)" className={style.nodeText}>
                                composite{' '}
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(0.9123 0 0 1 643.7856 556.9465)" className={style.nodeText}>
                                behavior
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(0.9123 0 0 1 592.7402 408.5373)" className={style.nodeText}>
                                detection of fake or deceptive sentiment information
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(0.9123 0 0 1 531.7417 252.1052)" className={style.nodeText}>
                                argument expression detection
                            </text>
                        </g>
                        <text transform="matrix(0.9123 0 0 1 408.7397 376.175)" className={style.nodeText}>
                            opinion summarization
                        </text>
                        <text transform="matrix(0.9123 0 0 1 306.1523 450.511)" className={style.nodeText}>
                            polarity classification
                        </text>
                        <text transform="matrix(0.9123 0 0 1 921.2051 619.8361)" className={style.nodeText}>
                            finding significant{' '}
                        </text>
                        <text transform="matrix(0.9123 0 0 1 560.2803 794.8127)" className={style.nodeText}>
                            multilingual / crosslingual sentiment analysis
                        </text>
                        <g>
                            <text transform="matrix(0.9123 0 0 1 896.1143 750.2873)" className={style.nodeText}>
                                comparison of different sentiments
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(0.9123 0 0 1 853.2773 324.8972)" className={style.nodeText}>
                                personalized sentiment analysis
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(0.9123 0 0 1 213.7939 318.0495)" className={style.nodeText}>
                                emotion detection and classification
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(0.9123 0 0 1 363.5234 607.5266)" className={style.nodeText}>
                                identifying the intent of sentiment information
                            </text>
                        </g>
                        <text transform="matrix(0.9123 0 0 1 397.3564 690.7258)" className={style.nodeText}>
                            emotion cause detection
                        </text>
                        <text transform="matrix(0.9123 0 0 1 1090.2207 481.7785)" className={style.nodeText}>
                            timeline analysis
                        </text>
                        <text transform="matrix(0.9123 0 0 1 957.7949 677.2883)" className={style.nodeText}>
                            easy exploration of sentiment
                        </text>
                        <text transform="matrix(0.9123 0 0 1 957.7949 710)" className={style.nodeText}>
                            information
                        </text>
                        <text transform="matrix(0.9123 0 0 1 205.6338 736.6652)" className={style.nodeText}>
                            sentiment information description a multi-aspect
                        </text>
                        <g>
                            <text transform="matrix(0.9123 0 0 1 252.834 789.8605)" className={style.nodeText}>
                                aspect based sentiment
                            </text>
                            <text transform="matrix(0.9123 0 0 1 252.834 817.4855)" className={style.nodeText}>
                                analysis
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(0.9123 0 0 1 309.4194 364.6174)" className={style.nodeText}>
                                emotion
                            </text>
                        </g>
                        <g>
                            <text transform="matrix(0.9123 0 0 1 422.2002 654.4933)" className={style.nodeText}>
                                detection of evidence event that causes sentiment patterns
                            </text>
                        </g>

                        <ellipse
                            className={style.area1}
                            onClick={() => {
                                setOriginData(int13);
                            }}
                            cx="1112.9"
                            cy="478.3"
                            rx="171.4"
                            ry="122.6"
                        />
                        <ellipse
                            className={style.area2}
                            onClick={() => {
                                setOriginData(clusterfour);
                            }}
                            cx="548.5"
                            cy="195.1"
                            rx="122.8"
                            ry="81.7"
                        />
                        <ellipse
                            className={style.area3}
                            onClick={() => {
                                setOriginData(tic3);
                            }}
                            cx="305.7"
                            cy="345.3"
                            rx="129.6"
                            ry="117"
                        />
                        <ellipse
                            className={style.area4}
                            onClick={() => {
                                setOriginData(tic4);
                            }}
                            cx="902.7"
                            cy="677.3"
                            rx="140.6"
                            ry="118.8"
                        />
                        <ellipse
                            className={style.area5}
                            onClick={() => {
                                setOriginData(tic5);
                            }}
                            cx="407.1"
                            cy="629"
                            rx="122"
                            ry="81.9"
                        />
                        <ellipse
                            className={style.area6}
                            onClick={() => {
                                setOriginData(tic6);
                            }}
                            cx="210.5"
                            cy="741.2"
                            rx="120.3"
                            ry="79.8"
                        />

                        <rect
                            x="533.7"
                            y="66.8"
                            onClick={() => {
                                setOriginData(tar17);
                            }}
                            className={style.targetNode}
                            width="21.7"
                            height="21.7"
                        >
                            organization
                        </rect>
                        <rect
                            x="442.7"
                            y="135.6"
                            onClick={() => {
                                setOriginData(tar3);
                            }}
                            className={style.targetNode}
                            width="21.7"
                            height="21.7"
                        >
                            psychology
                        </rect>
                        <rect
                            x="533.7"
                            y="177.1"
                            onClick={() => {
                                setOriginData(int14);
                            }}
                            className={style.intermediationNode}
                            width="21.7"
                            height="21.7"
                        >
                            analysis of debates comments and argumentation
                        </rect>
                        <rect
                            x="503.6"
                            y="234.3"
                            onClick={() => {
                                setOriginData(int4);
                            }}
                            className={style.intermediationNode}
                            width="21.7"
                            height="21.7"
                        >
                            argument expression detection
                        </rect>
                        <rect
                            x="652.7"
                            y="301.6"
                            onClick={() => {
                                setOriginData(tar18);
                            }}
                            className={style.targetNode}
                            width="21.7"
                            height="21.7"
                        >
                            key player
                        </rect>
                        <rect
                            x="820.6"
                            y="306.9"
                            onClick={() => {
                                setOriginData(int10);
                            }}
                            className={style.intermediationNode}
                            width="21.7"
                            height="21.7"
                        >
                            personalized sentiment analysis
                        </rect>
                        <rect
                            x="929.7"
                            y="232.7"
                            onClick={() => {
                                setOriginData(tar19);
                            }}
                            className={style.targetNode}
                            width="21.7"
                            height="21.7"
                        >
                            public
                        </rect>
                        <rect
                            x="825.9"
                            y="445.4"
                            onClick={() => {
                                setOriginData(tar14);
                            }}
                            className={style.targetNode}
                            width="21.7"
                            height="21.7"
                        >
                            attitude
                        </rect>
                        <rect
                            x="565.5"
                            y="390.5"
                            onClick={() => {
                                setOriginData(int5a);
                            }}
                            className={style.intermediationNode}
                            width="21.7"
                            height="21.7"
                        >
                            8
                        </rect>
                        <rect
                            x="661.8"
                            y="469.5"
                            onClick={() => {
                                setOriginData(tar6);
                            }}
                            className={style.targetNode}
                            width="21.7"
                            height="21.7"
                        >
                            service
                        </rect>
                        <rect
                            x="612.6"
                            y="535.3"
                            onClick={() => {
                                setOriginData(tar2);
                            }}
                            className={style.targetNode}
                            width="21.7"
                            height="21.7"
                        >
                            behavior
                        </rect>
                        <rect
                            x="523"
                            y="430.7"
                            onClick={() => {
                                setOriginData(tar1);
                            }}
                            className={style.targetNode}
                            width="21.7"
                            height="21.7"
                        >
                            person
                        </rect>
                        <rect
                            x="892.3"
                            y="600.9"
                            onClick={() => {
                                setOriginData(int15);
                            }}
                            className={style.intermediationNode}
                            width="21.7"
                            height="21.7"
                        >
                            finding significant
                        </rect>
                        <rect
                            x="983.4"
                            y="517.6"
                            onClick={() => {
                                setOriginData(tar24);
                            }}
                            className={style.targetNode}
                            width="21.7"
                            height="21.7"
                        >
                            accumulation
                        </rect>
                        <rect
                            x="1060.6"
                            y="462.7"
                            onClick={() => {
                                setOriginData(int13);
                            }}
                            className={style.intermediationNode}
                            width="21.7"
                            height="21.7"
                        >
                            14
                        </rect>
                        <rect
                            x="1062.5"
                            y="364.9"
                            onClick={() => {
                                setOriginData(tar23);
                            }}
                            className={style.targetNode}
                            width="21.7"
                            height="21.7"
                        >
                            continuity
                        </rect>
                        <rect
                            x="1170.9"
                            y="405.4"
                            onClick={() => {
                                setOriginData(tar21);
                            }}
                            className={style.targetNode}
                            width="21.7"
                            height="21.7"
                        >
                            birth death
                        </rect>
                        <rect
                            x="1173.8"
                            y="491.3"
                            onClick={() => {
                                setOriginData(tar27);
                            }}
                            className={style.targetNode}
                            width="21.7"
                            height="21.7"
                        >
                            acceleration
                        </rect>
                        <rect
                            x="1143.6"
                            y="527.3"
                            onClick={() => {
                                setOriginData(tar25);
                            }}
                            className={style.targetNode}
                            width="21.7"
                            height="21.7"
                        >
                            repeat
                        </rect>
                        <rect
                            x="975.1"
                            y="420.6"
                            onClick={() => {
                                setOriginData(tar22);
                            }}
                            className={style.targetNode}
                            width="21.7"
                            height="21.7"
                        >
                            growth contraction
                        </rect>
                        <rect
                            x="956.5"
                            y="339.2"
                            onClick={() => {
                                setOriginData(tar16);
                            }}
                            className={style.targetNode}
                            width="21.7"
                            height="21.7"
                        >
                            writer
                        </rect>
                        <rect
                            x="1046.4"
                            y="562.8"
                            onClick={() => {
                                setOriginData(tar26);
                            }}
                            className={style.targetNode}
                            width="21.7"
                            height="21.7"
                        >
                            peak valley
                        </rect>
                        <rect
                            x="933.6"
                            y="659.9"
                            onClick={() => {
                                setOriginData(int16);
                            }}
                            className={style.intermediationNode}
                            width="21.7"
                            height="21.7"
                        >
                            easy exploration of sentiment information
                        </rect>
                        <rect
                            x="869.3"
                            y="732.3"
                            onClick={() => {
                                setOriginData(int12);
                            }}
                            className={style.intermediationNode}
                            width="21.7"
                            height="21.7"
                        >
                            comparison of different sentiments
                        </rect>
                        <rect
                            x="762.8"
                            y="870.7"
                            onClick={() => {
                                setOriginData(tar5);
                            }}
                            className={style.targetNode}
                            width="21.7"
                            height="21.7"
                        >
                            thought
                        </rect>
                        <rect
                            x="490.1"
                            y="491.8"
                            onClick={() => {
                                setOriginData(tar11);
                            }}
                            className={style.targetNode}
                            width="21.7"
                            height="21.7"
                        >
                            opinion
                        </rect>
                        <rect
                            x="380.7"
                            y="207.5"
                            onClick={() => {
                                setOriginData(tar13);
                            }}
                            className={style.targetNode}
                            width="21.7"
                            height="21.7"
                        >
                            stance
                        </rect>
                        <rect
                            x="187"
                            y="298.1"
                            onClick={() => {
                                setOriginData(int8);
                            }}
                            className={style.intermediationNode}
                            width="21.7"
                            height="21.7"
                        >
                            emotion detection and classification
                        </rect>
                        <rect
                            x="283.5"
                            y="346.4"
                            onClick={() => {
                                setOriginData(tar15);
                            }}
                            className={style.targetNode}
                            width="21.7"
                            height="21.7"
                        >
                            emotion
                        </rect>
                        <rect
                            x="280.7"
                            y="432.5"
                            onClick={() => {
                                setOriginData(int9);
                            }}
                            className={style.intermediationNode}
                            width="21.7"
                            height="21.7"
                        >
                            polarity classification
                        </rect>
                        <rect
                            x="380.7"
                            y="358.2"
                            onClick={() => {
                                setOriginData(int6);
                            }}
                            className={style.intermediationNode}
                            width="21.7"
                            height="21.7"
                        >
                            opinion summarization
                        </rect>
                        <rect
                            x="323.2"
                            y="511.8"
                            onClick={() => {
                                setOriginData(tar12);
                            }}
                            className={style.targetNode}
                            width="21.7"
                            height="21.7"
                        >
                            appraisal
                        </rect>
                        <rect
                            x="242"
                            y="553.1"
                            onClick={() => {
                                setOriginData(tar7);
                            }}
                            className={style.targetNode}
                            width="21.7"
                            height="21.7"
                        >
                            product
                        </rect>
                        <rect
                            x="161.9"
                            y="519"
                            onClick={() => {
                                setOriginData(tar4);
                            }}
                            className={style.targetNode}
                            width="21.7"
                            height="21.7"
                        >
                            place
                        </rect>
                        <rect
                            x="332.6"
                            y="589.7"
                            onClick={() => {
                                setOriginData(int2);
                            }}
                            className={style.intermediationNode}
                            width="21.7"
                            height="21.7"
                        >
                            identifying the intent of sentiment information
                        </rect>
                        <rect
                            x="393.9"
                            y="630.9"
                            onClick={() => {
                                setOriginData(int3);
                            }}
                            className={style.intermediationNode}
                            width="21.7"
                            height="21.7"
                        >
                            detection of evidence event that causes sentiment patterns
                        </rect>
                        <rect
                            x="664.5"
                            y="682.8"
                            onClick={() => {
                                setOriginData(tar20);
                            }}
                            className={style.targetNode}
                            width="21.7"
                            height="21.7"
                        >
                            community
                        </rect>
                        <rect
                            x="616.2"
                            y="821.7"
                            onClick={() => {
                                setOriginData(tar8);
                            }}
                            className={style.targetNode}
                            width="21.7"
                            height="21.7"
                        >
                            event
                        </rect>
                        <rect
                            x="528.2"
                            y="776.8"
                            onClick={() => {
                                setOriginData(int11);
                            }}
                            className={style.intermediationNode}
                            width="21.7"
                            height="21.7"
                        >
                            multilingual / crosslingual sentiment analysis
                        </rect>
                        <rect
                            x="368.5"
                            y="670.8"
                            onClick={() => {
                                setOriginData(int1);
                            }}
                            className={style.intermediationNode}
                            width="21.7"
                            height="21.7"
                        >
                            emotion cause detection
                        </rect>
                        <rect
                            x="221.8"
                            y="773.5"
                            onClick={() => {
                                setOriginData(int5);
                            }}
                            className={style.intermediationNode}
                            width="21.7"
                            height="21.7"
                        >
                            aspect based sentiment analysis
                        </rect>
                        <rect
                            x="164"
                            y="896.6"
                            onClick={() => {
                                setOriginData(tar10);
                            }}
                            className={style.targetNode}
                            width="21.7"
                            height="21.7"
                        >
                            derived
                        </rect>
                        <rect
                            x="174.4"
                            y="718.7"
                            onClick={() => {
                                setOriginData(int7);
                            }}
                            className={style.intermediationNode}
                            width="21.7"
                            height="21.7"
                        >
                            sentiment information description a multi aspect
                        </rect>
                        <rect
                            x="15.2"
                            y="720.9"
                            onClick={() => {
                                setOriginData(tar9);
                            }}
                            className={style.targetNode}
                            width="21.7"
                            height="21.7"
                        >
                            composite
                        </rect>
                    </g>
                </switch>
            </svg>
        </div>
    );
};
