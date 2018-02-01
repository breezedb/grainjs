"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns f such that f() calls func(...boundArgs), i.e. optimizes `() => func(...boundArgs)`.
 * It is faster on node6 by 57-92%.
 */
function bindB(func, b) {
    switch (b.length) {
        case 0: return () => func();
        case 1: return () => func(b[0]);
        case 2: return () => func(b[0], b[1]);
        case 3: return () => func(b[0], b[1], b[2]);
        case 4: return () => func(b[0], b[1], b[2], b[3]);
        case 5: return () => func(b[0], b[1], b[2], b[3], b[4]);
        case 6: return () => func(b[0], b[1], b[2], b[3], b[4], b[5]);
        case 7: return () => func(b[0], b[1], b[2], b[3], b[4], b[5], b[6]);
        case 8: return () => func(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7]);
        default: return () => func.apply(undefined, b);
    }
}
exports.bindB = bindB;
/**
 * Returns f such that f(unboundArg) calls func(unboundArg, ...boundArgs).
 * I.e. optimizes `(arg) => func(arg, ...boundArgs)`.
 * It is faster on node6 by 0-92%.
 */
function bindUB(func, b) {
    switch (b.length) {
        case 0: return (arg) => func(arg);
        case 1: return (arg) => func(arg, b[0]);
        case 2: return (arg) => func(arg, b[0], b[1]);
        case 3: return (arg) => func(arg, b[0], b[1], b[2]);
        case 4: return (arg) => func(arg, b[0], b[1], b[2], b[3]);
        case 5: return (arg) => func(arg, b[0], b[1], b[2], b[3], b[4]);
        case 6: return (arg) => func(arg, b[0], b[1], b[2], b[3], b[4], b[5]);
        case 7: return (arg) => func(arg, b[0], b[1], b[2], b[3], b[4], b[5], b[6]);
        case 8: return (arg) => func(arg, b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7]);
        default: return (arg) => func(arg, ...b);
    }
}
exports.bindUB = bindUB;
/**
 * Returns f such that f(unboundArg) calls func(...boundArgs, unboundArg).
 * I.e. optimizes `(arg) => func(...boundArgs, arg)`.
 * It is faster on node6 by 0-92%.
 */
function bindBU(func, b) {
    switch (b.length) {
        case 0: return (arg) => func(arg);
        case 1: return (arg) => func(b[0], arg);
        case 2: return (arg) => func(b[0], b[1], arg);
        case 3: return (arg) => func(b[0], b[1], b[2], arg);
        case 4: return (arg) => func(b[0], b[1], b[2], b[3], arg);
        case 5: return (arg) => func(b[0], b[1], b[2], b[3], b[4], arg);
        case 6: return (arg) => func(b[0], b[1], b[2], b[3], b[4], b[5], arg);
        case 7: return (arg) => func(b[0], b[1], b[2], b[3], b[4], b[5], b[6], arg);
        case 8: return (arg) => func(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7], arg);
        default: return (arg) => func(...b, arg);
    }
}
exports.bindBU = bindBU;
