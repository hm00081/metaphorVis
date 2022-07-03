import React, { Component } from 'react';
import { select } from 'd3-selection';
import { scaleLinear } from 'd3-scale';
import { brushX } from 'd3-brush';
import { axisBottom } from 'd3-axis';

class Brush extends Component {
    //@ts-ignore
    constructor(props) {
        super(props);
        this.createBrush = this.createBrush.bind(this);
    }

    componentDidMount() {
        this.createBrush();
    }

    componentDidUpdate() {
        this.createBrush();
    }

    createBrush() {
        //@ts-ignore
        const node = this.node;
        const scale = scaleLinear()
            .domain([0, 30])
            //@ts-ignore
            .range([0, this.props.size[0]]);

        const dayBrush = brushX()
            //@ts-ignore
            .extent([[0, 0], this.props.size])
            .on('brush', brushed);
        //@ts-ignore
        const dayAxis = axisBottom()
            //@ts-ignore
            .scale(scale);

        select(node).selectAll('g.brushaxis').data([0]).enter().append('g').attr('class', 'brushaxis').attr('transform', 'translate(0,25)');

        select(node)
            .select('g.brushaxis')
            //@ts-ignore
            .call(dayAxis);

        select(node).selectAll('g.brush').data([0]).enter().append('g').attr('class', 'brush');

        select(node)
            .select('g.brush')
            //@ts-ignore
            .call(dayBrush);

        function brushed() {
            // console.log(event)
            // brushed code
        }
    }

    render() {
        //@ts-ignore
        return (
            <svg
                //@ts-ignore
                ref={(node) => (this.node = node)}
                //@ts-ignore
                width={this.props.size[0]}
                height={50}
            ></svg>
        );
    }
}

export default Brush;

console.log(typeof Brush);
