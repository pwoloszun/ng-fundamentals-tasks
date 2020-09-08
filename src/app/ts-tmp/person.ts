import { myUtilFn } from './my-utils';

function myPrivate() {
}

class Person {

  private name: string;
  // private age: number;

  constructor(name: string, private age: number) {
    this.name = name;
    // this.age = age;
  }

  getName() {
    myUtilFn();
    myPrivate();
    this.doSmth();
    return this.name;
  }

  doSmth() {
    // cstam
    this.age = 997;
  }
}
// inline named exports
export function ggg() {
  myPrivate();
}

// named exports
export {
  Person,
  // ggg,
}

export default Person; 