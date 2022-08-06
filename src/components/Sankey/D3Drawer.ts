import * as d3 from 'd3';
import _ from 'lodash';
import { D3ZoomEvent, zoomTransform } from 'd3';

export class D3Drawer {
    private readonly sankeyPlotDiv!: d3.Selection<HTMLDivElement, any, HTMLElement, any>;
    private readonly svgSelection!: d3.Selection<SVGSVGElement, MouseEvent, HTMLElement, any>;
    private readonly svgGSelection!: d3.Selection<SVGGElement, MouseEvent, HTMLElement, any>;
    private readonly svgWidth: number;
    private readonly svgHeight: number;

    private _zoomListener: ((transform: d3.ZoomTransform) => void) | null = null;

    public constructor(private readonly hello: SVGGElement) {
        // declare variables
        this.sankeyPlotDiv = d3.select('.sankey');
        this.svgWidth = this.sankeyPlotDiv.node()!.clientWidth;
        this.svgHeight = this.sankeyPlotDiv.node()!.clientHeight;
        this.svgSelection = this.sankeyPlotDiv
            .select<SVGSVGElement>('svg')
            .attr('width', this.svgWidth)
            .attr('height', this.svgHeight)
            .call(
                d3.zoom<SVGSVGElement, D3ZoomEvent<SVGSVGElement, any>>().on('zoom', (event) => {
                    //@ts-ignore
                    this.svgGSelection.attr('transform', () => event.transform);
                    if (this._zoomListener) {
                        this._zoomListener(event.transform);
                    }
                })
            );

        this.svgGSelection = this.svgSelection.select('.svgG');
    }
    public set zoomListener(zoomListener: (transform: d3.ZoomTransform) => void) {
        this._zoomListener = zoomListener;
    }
}
