import { IJob, Job, Task } from "../src";

class NumberJob implements IJob<number, number> {
  constructor() {}

  jobName: string = "NumberJob";
  dispatch(input: number): Promise<number> {
    return new Promise((res, rej) => {
      res(7);
    });
  }
}

class StringJob implements IJob<string, string> {
  constructor() {}

  jobName: string = "StringJob";
  dispatch(input: string): Promise<string> {
    return new Promise((res, rej) => {
      res(input);
    });
  }
}

class StringToNumberJob implements IJob<string, number> {
  constructor() {}

  jobName: string = "StringToNumberJob";
  dispatch(input: string): Promise<number> {
    return new Promise((res, rej) => {
      res(parseInt(input, 10));
    });
  }
}

describe("TASK", () => {
  test("EtlTask (1)", async () => {
    const EtlTask = new Task({ name: "" });
    const result = await EtlTask.runJobs(
      new StringJob(),
      new StringJob(),
      new StringToNumberJob(),
      new NumberJob()
    );
    expect(result).toBe(7);
  });

  test("EtlTask (2)", async () => {
    const EtlTask = new Task({ name: "" });
    const result = await EtlTask.runJobs(
      new Job({ dispatch: (d: string) => "s", jobName: "SS" }),
      new Job({ dispatch: (d: string) => 7, jobName: "SN" })
    );
    expect(result).toBe(7);
  });

  test("MyFirstTask", async () => {
    // Simple job to change string to number
    class StringToNumberJob implements IJob<string, number> {
      constructor() {}

      jobName: string = "StringToNumberJob";
      dispatch(input: string): Promise<number> {
        return new Promise((res, rej) => {
          res(parseInt(input, 10));
        });
      }
    }

    // Simple job get string to return same string
    class StringJob implements IJob<string, string> {
      constructor(private initialValue: string) {}

      jobName: string = "StringJob";
      dispatch(input: string): Promise<string> {
        return new Promise((res, rej) => {
          res(input || this.initialValue);
        });
      }
    }

    const MyFirstTask = new Task({ name: "" });
    const result = await MyFirstTask.runJobs(
      new StringJob("77"),
      new StringToNumberJob()
    );
    expect(result).toBe(77);
  });
});
