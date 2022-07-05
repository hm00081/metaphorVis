import React, { Component } from 'react';
import * as d3 from 'd3';

const margin = { top: 20, right: 5, bottom: 20, left: 35 };

class Brushes extends Component {
    componentDidMount() {
        this.brush = d3
            .brushX()
            .extent([
                [margin.left, margin.top],
                [width - margin.right, height - margin.bottom],
            ])
            .on('end', this.brushEnd);
        d3.select(this.refs.brush).call(this.brush);
    }

    // componentDidUpdate() {
    //     this.xAxis.scale(this.state.xScale);
    //     d3.select(this.refs.xAxis).call(this.xAxis);
    //     this.yAxis.scale(this.state.yScale);
    //     d3.select(this.refs.yAxis).call(this.yAxis);
    // }

    brushEnd = () => {
        if (!d3.event.selection) {
            this.props.updateRange([]);
            return;
        }
        const [x1, x2] = d3.event.selection;
        const range = [this.state.xScale.invert(x1), this.state.xScale.invert(x2)];

        this.props.updateRange(range);
    };

    render() {
        return (
            <svg>
                {this.state.bars.map((d, i) => (
                    <rect key={i} x={d.x} y={d.y} width="3" height={d.height} fill={d.fill} />
                ))}

                {/* <g
            ref="xAxis"
            transform={`translate(0, ${height - margin.bottom})`}
          /> */}
                {/* <g ref="yAxis" transform={`translate(${margin.left}, 0)`} /> */}
                <g ref="brush" />
            </svg>
        );
    }
}

export default Brushes;
