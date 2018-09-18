/*
destructuring assignment (비구조화 할당)
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
*/

var candyMachine = {
  status: {
    name: 'node',
    count: 5,
  },
  getCandy: function() {
    this.status.count--;
    return this.status.count;
  }
};
var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;

// 아래와 같이 변경 가능

const candyMachine = {
  status: {
    name: 'node',
    count: 5,
  },
  getCandy() {
    this.status.count--;
    return this.status.count;
  }
};
const { getCandy, status: { count } } = candyMachine;
