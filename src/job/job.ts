export abstract class Job<I, S> {
  abstract dispatch(input: I): Promise<S>;
}
