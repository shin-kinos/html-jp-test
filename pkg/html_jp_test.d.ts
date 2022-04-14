/* tslint:disable */
/* eslint-disable */
/**
* @param {string} name
*/
export function show_alert(name: string): void;
/**
* @param {number} x
* @returns {number}
*/
export function input(x: number): number;
/**
* @param {number} x
* @returns {number}
*/
export function twice(x: number): number;
/**
* @param {number} x1
* @param {number} x2
* @returns {number}
*/
export function add(x1: number, x2: number): number;
/**
* @param {number} x1
* @param {number} x2
* @returns {number}
*/
export function mul(x1: number, x2: number): number;
/**
* @param {string} text
* @returns {string}
*/
export function readfile(text: string): string;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly show_alert: (a: number, b: number) => void;
  readonly input: (a: number) => number;
  readonly twice: (a: number) => number;
  readonly add: (a: number, b: number) => number;
  readonly mul: (a: number, b: number) => number;
  readonly readfile: (a: number, b: number, c: number) => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
