import { ApexOptions } from 'apexcharts';

export interface IApexOptions extends ApexOptions {
  endingShape?: string;
}
export interface Props {
  type?:
    | 'line'
    | 'area'
    | 'bar'
    | 'histogram'
    | 'pie'
    | 'donut'
    | 'radialBar'
    | 'scatter'
    | 'bubble'
    | 'heatmap'
    | 'treemap'
    | 'boxPlot'
    | 'candlestick'
    | 'radar'
    | 'polarArea'
    | 'rangeBar';
  series?: Array<any>;
  width?: string | number;
  height?: string | number;
  options?: IApexOptions;
  [key: string]: any;
}
