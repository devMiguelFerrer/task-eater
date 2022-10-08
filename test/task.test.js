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
const src_1 = require("../src");
test("sumar 1 + 2 es igual a 3", () => {
    expect(1 + 2).toBe(3);
});
class NumberJob {
    constructor() { }
    dispatch(input) {
        return new Promise((res, rej) => {
            res(7);
        });
    }
}
class StringJob {
    constructor() { }
    dispatch(input) {
        console.log(input);
        return new Promise((res, rej) => {
            res("asd");
        });
    }
}
class StringNumberJob {
    constructor() { }
    dispatch(input) {
        return new Promise((res, rej) => {
            res(77);
        });
    }
}
describe("Number 1", () => {
    test("sumar 2 + 2 es igual a 4", () => {
        expect(2 + 2).toBe(4);
    });
    test("the data is peanut butter", () => __awaiter(void 0, void 0, void 0, function* () {
        const EtlTask = new src_1.Task({ name: "" });
        const result = yield EtlTask.runJobs(new StringJob(), new StringJob(), new StringNumberJob(), new NumberJob());
        expect(result).toBe(7);
    }));
});
