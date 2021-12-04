/**
 * # This is Animal
 */
abstract class Animal {
  constructor(public name: string, protected age: number) {}

  /**
   * @returns how animal speak
   */
  public abstract speak(): string;
}

/**
 * ## This is Dog
 */
class Dog extends Animal {
  public speak() {
    return "Woof";
  }
}

/**
 * ## This is Cat
 */
class Cat extends Animal {
  public speak() {
    return "Meow";
  }
}

/**
 *
 * @param a first number
 * @param b second number
 * @returns sum of 2 numbers
 */
const add = (a: number, b: number) => a + b;
