// import React, { Component } from 'react';
import { select } from 'd3-selection';
import { scaleLinear } from 'd3-scale';
import { brushX } from 'd3-brush';
import { axisBottom } from 'd3-axis';
import { SankeyLinkExtended, SankeyNodeExtended, SankeyData, SankeyLink } from '../../types/sankey';
import React, { useEffect, useCallback, useState, useRef } from 'react';

import * as d3 from 'd3';
import { BrushBehavior } from 'd3-brush';
// import { Types } from '../../widgets/ChartWidget/types'
import AreaChartHelper from './AreaChartHelper';

export namespace Types {
    export type Data = {
        date?: string;
        value?: number;
    };
    export type Dimensions = {
        width: number;
        height: number;
        margin: {
            left: number;
            right: number;
            top: number;
            bottom: number;
        };
        boundedWidth: number;
        boundedHeight: number;
    };
}

interface IBrushProps {
    dimensions: Types.Dimensions;
    data: Types.Data[];
    node?: SankeyNodeExtended;
    link?: SankeyLinkExtended;
    propertiesNames: string[];
    onBrushUpdateData: (value: Date[]) => void;
    stroke: string;
    x: number;
    y: number;
}

const Brush = (props: IBrushProps) => {
    const [loaded, setLoaded] = useState(false);
    const [prevHeight, setPrevHeight] = useState(props.dimensions.height);
    const [prevWidth, setPrevWidth] = useState(props.dimensions.width);

    const brush = useRef() as { current: BrushBehavior<unknown> };

    const memoizedDrawCallback = useCallback(() => {
        brush.current = d3
            .brushY()
            .extent([
                [0, 0.5],
                [props.dimensions.width - props.dimensions.margin.right - props.dimensions.margin.left, props.dimensions.height],
            ])
            .on('brush', brushed)
            .on('end', brushEnded);
        // .on('brush', brushHandler)
        // .on('brush', brushed)
        // .on('end', brushEnded);

        const defaultSelection = [0, 10];

        const gBrush = d3
            .select('#group-brush')
            // @ts-ignore
            .call(brush.current)
            // @ts-ignore
            .call(brush.current.move, defaultSelection);

        //Vue Function
        //@ts-ignore
        function brushHandler(vals) {
            // console.log(vals);

            // eslint-disable-next-line no-unused-vars
            const { selection, type, sourceEvent, brush } = vals;
            // console.log(sourceEvent, type)

            const userInvoked = sourceEvent != null;

            // If user is actively brushing
            //@ts-ignore
            this.brushing = type !== 'end' && userInvoked;

            // If user selects nothing
            if (selection == null) {
                //@ts-ignore
                this.$emit('input', null);
                return;
            }

            switch (type) {
                case 'brush':
                    //@ts-ignore
                    if (this.brushing) {
                        // @ts-ignore
                        this.$emit(
                            'input',
                            //@ts-ignore
                            selection.map((v) => this.scale.invert(v)).reverse()
                        );
                    } else {
                        // console.log("redraw");
                        // this.selection = d3.select(this.$el).call(this.aBrush)
                        // move brush to match inital value
                        // this.aBrush.move(
                        //   this.selection,
                        //   this.value ? this.value.map(v => v) : null
                        // )
                    }
                    break;
                default:
                    console.log('nothin');
                    break;
            }
        }

        // brush handlers => .on brushed, brushEnd
        function brushed(event: { selection: number[] }) {
            if (event.selection) {
                // const value = [scales.xScale.invert(event.selection[0]), scales.xScale.invert(event.selection[1])];
                // props.onBrushUpdateData(value);
            }
        }
        function brushEnded(event: { selection: [] }) {
            // precious version d3.event.selection
            if (!event.selection) {
                // @ts-ignore
                gBrush.call(brush.current.move, defaultSelection).append('title').text('hello');
                return;
            }
        }

        // Peripherals

        // eslint-disable-next-line max-len
        const xAxis = (
            g: { attr: (arg0: string, arg1: string) => { (): never; new (): never; call: { (arg0: d3.Axis<d3.AxisDomain>): never; new (): never } } },
            y: d3.AxisScale<d3.AxisDomain>,
            yAxisHeight: number
        ) =>
            g.attr('transform', `translate(0,${yAxisHeight})`).call(
                d3
                    .axisBottom(y)
                    .ticks(props.dimensions.width / 80)
                    .tickSizeOuter(0)
            );

        d3.select('#x-axis-brush')
            // @ts-ignore
            .call(xAxis, scales.xScale, 50);
    }, [props]);

    return (
        <svg>
            <g>
                <g ref="brush" />
            </g>
        </svg>
    );
};

export default Brush;
