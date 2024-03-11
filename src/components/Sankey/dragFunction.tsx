import * as d3 from 'd3';
import { SankeyNodeExtended, SankeyLinkExtended } from '../../types/sankey';

export class SvgGSelectionsMaker {
    private svgSelection: null | d3.Selection<SVGSVGElement, any, HTMLElement, any> = null;
    private svgGSelection: null | d3.Selection<SVGGElement, DragEvent, HTMLElement, any> = null;

    public constructor(private readonly multiLinkSelection: d3.Selection<d3.BaseType, unknown, HTMLElement, any>, private readonly svgWidth: number, private readonly svgHeight: number) {}

    public appendSvgSelection() {
        this.svgSelection = this.multiLinkSelection
            .append('svg')
            .attr('width', this.svgWidth)
            .attr('height', this.svgHeight)
            .attr('viewBox', `${-this.svgWidth / 2}, ${-this.svgHeight / 2}, ${this.svgWidth}, ${this.svgHeight}`)
            .call(
                d3.zoom<SVGSVGElement, any>().on('zoom', (event) => {
                    this.svgGSelection!.attr('transform', () => event.transform);
                })
            );

        return this.svgSelection;
    }
    public appendSvgGSelection() {
        this.svgGSelection = this.svgSelection!.append('g');

        return this.svgSelection;
    }
    public appendLinksGSelection() {
        if (this.svgGSelection !== null) {
            return this.svgGSelection.append('g').attr('stroke', '#999').attr('stroke-opacity', 0.6).selectAll<SVGLineElement, SankeyLinkExtended>('line');
        } else {
            throw new Error('svgSelection is not appended yet');
        }
    }

    public appendNodePiesGSelection() {
        if (this.svgGSelection !== null) {
            return this.svgGSelection.append('g').selectAll<SVGGElement, SankeyNodeExtended>('g');
        } else {
            throw new Error('svgSelection is not appended yet');
        }
    }

    public appendCirclesOfNodePiesGSelection() {
        if (this.svgGSelection !== null) {
            return this.svgGSelection.append('g').selectAll<SVGGElement, SankeyNodeExtended>('g');
        } else {
            throw new Error('svgSelection is not appended yet');
        }
    }

    public appendNodesGSelection() {
        if (this.svgGSelection !== null) {
            return this.svgGSelection.append('g').attr('stroke', '#fff').attr('stroke-width', 1).selectAll<SVGRectElement, SankeyNodeExtended>('rect');
        } else {
            throw new Error('svgSelection is not appended yet');
        }
    }

    public appendTextsGSelection() {
        if (this.svgGSelection !== null) {
            return (
                this.svgGSelection
                    .append('g')
                    .attr('text-anchor', 'middle')
                    // .style("user-select", "none")
                    .style('pointer-events', 'none')
                    .selectAll<SVGTextElement, SankeyNodeExtended>('text')
            );
        } else {
            throw new Error('svgSelection is not appended yet');
        }
    }
}

export function makeSimulation(nodes: SankeyNodeExtended[], links: SankeyLinkExtended[]) {
    return d3
        .forceSimulation<SankeyNodeExtended>(nodes)
        .force(
            'link',
            //@ts-ignore
            d3.forceLink<SankeyNodeExtended, SankeyLinkExtended>(links).id((d) => d.name)
        )
        .force('charge', d3.forceManyBody())
        .force('x', d3.forceX())
        .force('y', d3.forceY());
}

export function makeDrag() {
    return (simulation: d3.Simulation<SankeyNodeExtended, undefined>) => {
        function dragstarted(event: any) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            event.subject.fx = event.subject.x;
            event.subject.fy = event.subject.y;
        }

        function dragged(event: any) {
            event.subject.fx = event.x;
            event.subject.fy = event.y;
        }

        function dragended(event: any) {
            if (!event.active) simulation.alphaTarget(0);
            event.subject.fx = null;
            event.subject.fy = null;
        }

        return d3.drag<SVGRectElement, SankeyNodeExtended>().on('start', dragstarted).on('drag', dragged).on('end', dragended);
    };
}
