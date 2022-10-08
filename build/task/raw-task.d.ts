import { Job } from "../job";
export declare abstract class RawTask {
    abstract runJobs<T1, T2>(j1: Job<T1, T2>): Promise<T2>;
    abstract runJobs<T1, T2, T3>(j1: Job<T1, T2>, j2: Job<T2, T3>): Promise<T3>;
    abstract runJobs<T1, T2, T3, T4>(j1: Job<T1, T2>, j2: Job<T2, T3>, j3: Job<T3, T4>): Promise<T4>;
    abstract runJobs<T1, T2, T3, T4, T5>(j1: Job<T1, T2>, j2: Job<T2, T3>, j3: Job<T3, T4>, j4: Job<T4, T5>): Promise<T5>;
    abstract runJobs<T1, T2, T3, T4, T5, T6>(j1: Job<T1, T2>, j2: Job<T2, T3>, j3: Job<T3, T4>, j4: Job<T4, T5>, j5: Job<T5, T6>): Promise<T6>;
    abstract runJobs<T1, T2, T3, T4, T5, T6, T7>(j1: Job<T1, T2>, j2: Job<T2, T3>, j3: Job<T3, T4>, j4: Job<T4, T5>, j5: Job<T5, T6>, j6: Job<T6, T7>): Promise<T7>;
    abstract runJobs<T1, T2, T3, T4, T5, T6, T7, T8>(j1: Job<T1, T2>, j2: Job<T2, T3>, j3: Job<T3, T4>, j4: Job<T4, T5>, j5: Job<T5, T6>, j6: Job<T6, T7>, j7: Job<T7, T8>): Promise<T8>;
    abstract runJobs<T1, T2, T3, T4, T5, T6, T7, T8, T9>(j1: Job<T1, T2>, j2: Job<T2, T3>, j3: Job<T3, T4>, j4: Job<T4, T5>, j5: Job<T5, T6>, j6: Job<T6, T7>, j7: Job<T7, T8>, j8: Job<T8, T9>): Promise<T9>;
    abstract runJobs<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(j1: Job<T1, T2>, j2: Job<T2, T3>, j3: Job<T3, T4>, j4: Job<T4, T5>, j5: Job<T5, T6>, j6: Job<T6, T7>, j7: Job<T7, T8>, j8: Job<T8, T9>, j9: Job<T9, T10>): Promise<T10>;
    abstract runJobs<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(j1: Job<T1, T2>, j2: Job<T2, T3>, j3: Job<T3, T4>, j4: Job<T4, T5>, j5: Job<T5, T6>, j6: Job<T6, T7>, j7: Job<T7, T8>, j8: Job<T8, T9>, j9: Job<T9, T10>, j10: Job<T10, T11>): Promise<T11>;
}
