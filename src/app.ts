class User {
  readonly name: string = '';
  age: number = 0;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  isAdult(): boolean {
    return this.age >= 18;
  }

  // setName(name: string) {
  //   this.name = name;
  // }
}

const olivia = new User('Olivia', 23);
console.log(olivia.name);
console.log(olivia.age);
console.log(olivia.isAdult());

