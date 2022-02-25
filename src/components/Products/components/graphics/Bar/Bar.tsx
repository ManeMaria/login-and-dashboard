import ReactApexChart from 'react-apexcharts';

import { Props } from '../types';

export default function BarGraphic({ type = 'bar', ...restProps }: Props) {
  return <ReactApexChart {...restProps} type={type} />;
}
