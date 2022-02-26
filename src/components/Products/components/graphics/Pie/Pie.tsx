import ReactApexChart from 'react-apexcharts';

import { Props } from '../types';

export function PieGraphic({ type = 'pie', ...restProps }: Props) {
  return <ReactApexChart {...restProps} type={type} />;
}
