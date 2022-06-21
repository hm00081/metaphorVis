import { select } from 'd3-selection';
import { transition } from 'd3-transition';
import React, { useState, useEffect } from 'react';
import ReactWordcloud, { Word, MinMaxPair } from 'react-wordcloud';
import styled from 'styled-components';

const Clouds = styled.div`
    margin-top: -550px;
    margin-left: -500px;
    float: left;
    align-items: center;
    text-align: center;
    justify-content: center;
`;

interface Props {
    data: Array<Word>;
    fontSize?: MinMaxPair;
    maxWords?: number;
}

// play with the settings here!
const lazyLoading = true;
const animationDuration = 0;
const deterministic = true; //affects word color and placement
// responsive must be false for local fonrsize and maxWords
// to take effect
// responsive font size and max word settings can be found in
// TopicModellingResults.tsx -> getConfigs
const responsive = true;
const fontsize: MinMaxPair = [18, 20];
let maxWords = 40;

const angles: MinMaxPair = [0, 0];
const size: MinMaxPair = [330, 190];
const options = {
    deterministic: deterministic,
    enableOptimizations: true,
    transitionDuration: animationDuration,
    rotations: 1,
    rotationAngles: angles,
    fontSizes: fontsize,
};

let observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
};

function getCallback(callback: string) {
    return function (word: Word, event: MouseEvent | undefined) {
        if (event !== undefined) {
            const isActive = callback !== 'onWordMouseOut';
            const element = event.target as HTMLElement;
            const text = select(element);
            text.on('click', () => {
                if (isActive) {
                    window.open(`https://duckduckgo.com/?q=${word.text}`, '_blank');
                }
            })
                .transition()
                .attr('background', 'black')
                .attr('font-size', isActive ? '300%' : '100%')
                .attr('text-decoration', isActive ? 'underline' : 'none');
        }
    };
}

const callbacks = {
    getWordTooltip: (word: Word) => `The word "${word.text}" appears ${word.value} times.`,
    getWordColor: (word: Word) => (word.value > 50 ? 'blue' : 'red'), // 여기서 color 수정
    onWordClick: getCallback('onWordClick'),
    onWordMouseOut: getCallback('onWordMouseOut'),
    onWordMouseOver: getCallback('onWordMouseOver'),
};

// this memoization helps prevent animations of all word clouds during dragging
// but does not prevent rerendering of all word clouds in the newly dropped list
const WordCloudVar = React.memo(function WordCloud(props: Props) {
    const [show, setShow] = useState(false);
    const defaultSize = 300;
    const defaultGap = 15;
    if (responsive && props.fontSize !== undefined) options.fontSizes = props.fontSize;
    if (responsive && props.maxWords !== undefined) maxWords = props.maxWords;

    let ref1 = React.createRef<HTMLDivElement>();
    let callback: IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) setShow(true);
        });
    };
    let observer = new IntersectionObserver(callback, observerOptions);

    useEffect(() => {
        if (ref1.current !== null) observer.observe(ref1.current);
    }, [observer, ref1]);

    return (
        <div>
            <div
                className="rounded-lg m-2 shadow-lg flex flex-col justify-around items-center
        w-wordcloudContainer h-wordcloudContainer"
                ref={ref1}
            >
                <Clouds>
                    <div className="bg-gray-100 h-wordcloud w-wordcloud">
                        {!lazyLoading || show ? (
                            <ReactWordcloud maxWords={maxWords} minSize={size} size={size} callbacks={callbacks} words={props.data} options={options} />
                        ) : (
                            <div className="bg-gray-100 h-wordcloud w-wordcloud">Loading...</div>
                        )}
                    </div>
                </Clouds>
            </div>
        </div>
    );
});

export default WordCloudVar;
