import { ILogger } from "../custom-models";
import { Job } from "../job";

export class Task {
  private logger: ILogger = console;
  private started: number = Date.now();
  private initialValue;
  constructor(config: { logger?: ILogger; name: string; initialValue?: any }) {
    config.logger && (this.logger = config.logger);
    this.initialValue = config.initialValue;
  }
  async runJobs<T1, T2>(j1: Job<T1, T2>): Promise<T2>;
  async runJobs<T1, T2, T3>(j1: Job<T1, T2>, j2: Job<T2, T3>): Promise<T3>;
  async runJobs<T1, T2, T3, T4>(
    j1: Job<T1, T2>,
    j2: Job<T2, T3>,
    j3: Job<T3, T4>
  ): Promise<T4>;
  async runJobs<T1, T2, T3, T4, T5>(
    j1: Job<T1, T2>,
    j2: Job<T2, T3>,
    j3: Job<T3, T4>,
    j4: Job<T4, T5>
  ): Promise<T5>;
  async runJobs<T1, T2, T3, T4, T5, T6>(
    j1: Job<T1, T2>,
    j2: Job<T2, T3>,
    j3: Job<T3, T4>,
    j4: Job<T4, T5>,
    j5: Job<T5, T6>
  ): Promise<T6>;
  async runJobs<T1, T2, T3, T4, T5, T6, T7>(
    j1: Job<T1, T2>,
    j2: Job<T2, T3>,
    j3: Job<T3, T4>,
    j4: Job<T4, T5>,
    j5: Job<T5, T6>,
    j6: Job<T6, T7>
  ): Promise<T7>;
  async runJobs<T1, T2, T3, T4, T5, T6, T7, T8>(
    j1: Job<T1, T2>,
    j2: Job<T2, T3>,
    j3: Job<T3, T4>,
    j4: Job<T4, T5>,
    j5: Job<T5, T6>,
    j6: Job<T6, T7>,
    j7: Job<T7, T8>
  ): Promise<T8>;
  async runJobs<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
    j1: Job<T1, T2>,
    j2: Job<T2, T3>,
    j3: Job<T3, T4>,
    j4: Job<T4, T5>,
    j5: Job<T5, T6>,
    j6: Job<T6, T7>,
    j7: Job<T7, T8>,
    j8: Job<T8, T9>
  ): Promise<T9>;
  async runJobs<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
    j1: Job<T1, T2>,
    j2: Job<T2, T3>,
    j3: Job<T3, T4>,
    j4: Job<T4, T5>,
    j5: Job<T5, T6>,
    j6: Job<T6, T7>,
    j7: Job<T7, T8>,
    j8: Job<T8, T9>,
    j9: Job<T9, T10>
  ): Promise<T10>;
  async runJobs<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(
    j1: Job<T1, T2>,
    j2: Job<T2, T3>,
    j3: Job<T3, T4>,
    j4: Job<T4, T5>,
    j5: Job<T5, T6>,
    j6: Job<T6, T7>,
    j7: Job<T7, T8>,
    j8: Job<T8, T9>,
    j9: Job<T9, T10>,
    j10: Job<T10, T11>
  ): Promise<T11>;
  async runJobs(...jobs: Array<Job<unknown, unknown>>) {
    this.started = Date.now();
    this.logger.log(`Starting Task: [ current jobs: ${jobs.length} ]`);
    const taskResult = await jobs.reduce(async (promiseAcc, job) => {
      const acc = await promiseAcc;
      this.logger.log(`Running job: ${job.jobName}`);
      const jobStarted = Date.now();
      let jobResult;
      try {
        jobResult = await job.dispatch(acc);
      } catch (error) {
        if (job.Error) {
          return job.Error();
        }
        throw new Error(`Error from job ${job.jobName}}: ${error}`);
      }
      this.logger.log(
        `Finished job: ${job.jobName} in ${Date.now() - jobStarted}ms`
      );
      return jobResult;
    }, this.initialValue);
    this.logger.log(
      `Finished Task: [ total jobs: ${jobs.length} ] [ total time: ${
        Date.now() - this.started
      }ms ]\n`
    );
    return taskResult;
  }
}
