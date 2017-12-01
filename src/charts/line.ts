/**
 * @file Line chart
 */
import BaseChart from './baseChart';
import { Args } from '../index.d';

class Line extends BaseChart {
  constructor(args: Args) {
    super(args);
    this.init();
  }
  init() {
    console.log('line');
  }
}

export default Line;
