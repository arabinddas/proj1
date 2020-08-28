import {TestInterface1} from './test.interface1';

export class TestClass1 implements TestInterface1 {
  getRandomVal() {
    return Math.random() * 1000;
  }
}
