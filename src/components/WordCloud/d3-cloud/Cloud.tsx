import React, { useEffect, useRef } from 'react';
import WordCloud from 'react-d3-cloud';
import styled from 'styled-components';
import rawData from './data';
import './styles.css';

const data = rawData.reduce((acc, word) => {
    if (word in acc) {
        //@ts-ignore
        acc[word] += 1;
    } else {
        //@ts-ignore
        acc[word] = 1;
    }

    return acc;
}, {});

const finalData = Object.entries(data).map(([key, value]) => ({
    text: key,
    value,
}));

//@ts-ignore
const fontSizeMapper = (word) => Math.log2(word.value) * 5;

export default function Cloud() {
    const defaultSize = 300;
    const defaultGap = 15;
    const container = useRef(null);
    const [size, setSize] = React.useState({
        width: defaultSize,
        height: defaultSize,
    });

    useEffect(() => {
        //@ts-ignore
        const handleResize = (e) => {
            if (container.current) {
                const {
                    width = defaultSize,
                    //@ts-ignore
                } = container.current.getBoundingClientRect();
                const newSize = Math.floor((width - 2 * defaultGap) / 3);

                setSize({
                    width: newSize,
                    height: newSize,
                });
            }
        };
        //@ts-ignore
        handleResize();

        window.addEventListener('resize', handleResize, { passive: true });
        //@ts-ignore
        // () => window.removeEventListener('resize', handleResize, { passive: true });
    }, []);

    return (
        <div className="App">
            <h1>Tag Clouds</h1>
            <div
                ref={container}
                style={{
                    //@ts-ignore
                    alignΙtems: 'center',
                    display: 'grid',
                    gridGap: defaultGap,
                    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
                    justifyΙtems: 'center',
                    margin: '0 auto',
                    maxWidth: '960px',
                }}
            >
                {Array.from(Array(5), (item, i) => (
                    <div
                        style={{
                            boxShadow: '0 2px 5px rgba(0,0,0,.2)',
                            width: '100%',
                            height: '100%',
                            margin: '0 auto',
                        }}
                        key={i}
                    >
                        <WordCloud
                            //@ts-ignore
                            data={finalData}
                            fontSizeMapper={fontSizeMapper}
                            rotate={0}
                            width={size.width}
                            height={size.height}
                            onWordClick={(word) => console.log(word, i)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
