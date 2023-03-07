export class Person{
      constructor (nama){
            this.nama = nama;
      }

      sayHello(name){
            console.info(`Hello${name}, my name is ${this.nama}`);
      }
}