import { Job, Task } from "../src";

test("sumar 1 + 2 es igual a 3", () => {
  expect(1 + 2).toBe(3);
});

class NumberJob implements Job<number, number> {
  constructor() {}

  dispatch(input: number): Promise<number> {
    return new Promise((res, rej) => {
      res(7);
    });
  }
}

class StringJob implements Job<string, string> {
  constructor() {}

  dispatch(input: string): Promise<string> {
    console.log(input);
    return new Promise((res, rej) => {
      res("asd");
    });
  }
}

class StringNumberJob implements Job<string, number> {
  constructor() {}

  dispatch(input: string): Promise<number> {
    return new Promise((res, rej) => {
      res(77);
    });
  }
}

describe("Number 1", () => {
  test("sumar 2 + 2 es igual a 4", () => {
    expect(2 + 2).toBe(4);
  });

  test("the data is peanut butter", async () => {
    const EtlTask = new Task({ name: "" });
    const result = await EtlTask.runJobs(
      new StringJob(),
      new StringJob(),
      new StringNumberJob(),
      new NumberJob(),
    );
    expect(result).toBe(7);
  });
});
