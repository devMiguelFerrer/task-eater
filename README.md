# Task Eater

## Description
Control task package with jobs

## Examples

```typescript
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

const MyFirstTask = new Task({ name: "MyFirstTask" });
const result = await MyFirstTask.runJobs(
    new StringJob("77"),
    new StringToNumberJob(),
);
// expected result 77
```