export interface IJob<I, O> {
  dispatch(input: I): Promise<O> | O;
  jobName: string;
  Error?: () => Error;
}
