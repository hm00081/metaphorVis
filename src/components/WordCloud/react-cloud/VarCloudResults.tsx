import React, { useState, useEffect, Profiler } from 'react';
import WordCloudVar from './WordCloudVar';
import { MinMaxPair } from 'react-wordcloud';
import { WordCloudData } from './WordCloudData';
import { RiverWord } from './data/River';
import styled from 'styled-components';

interface wordCloudConfigInterface {
    fontSize: MinMaxPair;
    maxWords: number;
}

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
}

// tweak responsive max words and font sizes here!
function getConfigs(windowWidth: number): wordCloudConfigInterface {
    if (windowWidth < 640) {
        return { maxWords: 20, fontSize: [10, 12] };
    } else if (640 <= windowWidth && windowWidth < 768) {
        return { maxWords: 25, fontSize: [12, 14] };
    } else if (768 <= windowWidth && windowWidth < 1024) {
        return { maxWords: 30, fontSize: [14, 16] };
    } else if (1024 <= windowWidth && windowWidth < 1280) {
        return { maxWords: 35, fontSize: [16, 18] };
    } else {
        return { maxWords: 40, fontSize: [18, 20] };
    }
}

function clockPerformance(
    //@ts-ignore
    profilerId,
    //@ts-ignore
    mode,
    //@ts-ignore
    actualTime,
    //@ts-ignore
    baseTime,
    //@ts-ignore
    startTime,
    //@ts-ignore
    commitTime
) {
    // console.log({
    //     profilerId,
    //     mode,
    //     actualTime,
    //     baseTime,
    //     startTime,
    //     commitTime,
    // });
}

function VarCloudResults() {
    const [{ filter, isExpanded, wordCloudConfig }, setState] = useState<{
        filter: string;
        isExpanded: boolean;
        wordCloudConfig: wordCloudConfigInterface;
    }>({
        filter: '',
        isExpanded: false,
        wordCloudConfig: { maxWords: 40, fontSize: [18, 20] },
    });

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            const { width, height } = getWindowDimensions();
            const config = getConfigs(width);
            setWindowDimensions({ width, height });
            setState((prevState) => {
                if (prevState.wordCloudConfig.maxWords !== config.maxWords) {
                    return {
                        ...prevState,
                        wordCloudConfig: config,
                    };
                } else {
                    return { ...prevState };
                }
            });
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function editFilter(value: string) {
        setState((prevState) => {
            return {
                ...prevState,
                filter: value,
            };
        });
    }

    function varClouds() {
        let varClouds = [];
        for (let i = 0; i < 1; i++) {
            varClouds.push(<WordCloudVar data={RiverWord.VAR} {...wordCloudConfig} />);
        }
        return varClouds;
    }

    return (
        <Profiler id="Navigation" onRender={clockPerformance}>
            <div className="flex w-screen h-screen">
                <div className="w-10/12 text-sm h-screen">
                    <div className="flex justify-between p-5 shadow-lg bg-gray-200 h-1/10"></div>
                    <div className="flex flex-row flex-grow h-9/10">
                        {/* <div className={`overflow-auto ${isExpanded ? 'w-full' : 'w-7/12'}`}> */}
                        <div className="">{varClouds()}</div>
                        {/* <div>{interClouds()}</div>
                        <div>{repClouds()}</div>
                        <div>{varClouds()}</div>
                        <div>{techClouds()}</div> */}
                        {/* </div> */}
                        {!isExpanded && <div className="w-5/12"></div>}
                    </div>
                </div>
            </div>
        </Profiler>
    );
}

export default VarCloudResults;
