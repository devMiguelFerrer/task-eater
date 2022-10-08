"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    constructor(config) {
        this.logger = console;
        this.started = Date.now();
        config.logger && (this.logger = config.logger);
    }
    runJobs(...jobs) {
        return __awaiter(this, void 0, void 0, function* () {
            this.started = Date.now();
            this.logger.log(`Starting Task: [ current jobs: ${jobs.length} ]`);
            const taskResult = yield jobs.reduce((promiseAcc, job) => __awaiter(this, void 0, void 0, function* () {
                const acc = yield promiseAcc;
                this.logger.log(`Running job: ${job.constructor.name}`);
                const jobStarted = Date.now();
                const jobResult = yield job.dispatch(acc);
                this.logger.log(`Finished job: ${job.constructor.name} in ${Date.now() - jobStarted}ms`);
                return jobResult;
            }), "asd");
            this.logger.log(`Finished Task: [ total jobs: ${jobs.length} ] [ total time: ${Date.now() - this.started}ms ]\n`);
            return taskResult;
        });
    }
}
exports.Task = Task;
