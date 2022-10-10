import { IJob } from ".";

export class Job<I, O> implements IJob<I, O> {
  dispatch: (input: I) => Promise<O> | O;
  jobName: string;
  Error?: () => Error;
  constructor({ dispatch, jobName, Error }: IJob<I, O>) {
    this.dispatch = dispatch;
    this.jobName = jobName;
    Error ?? (this.Error = Error);
  }
}
