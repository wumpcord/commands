/**
 * Copyright (c) 2021 August, Lio
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/** Interface for defining a Argument. */
export interface ArgumentMeta {
  /**
   * The default value for the argument if the user didn't specify a value
   */
  default?: any;

  /**
   * Array of types to only use for this argument.
   */
  oneOf?: any[];

  /**
   * If the argument should provide more than 1 value or not
   *
   * @note This is only used in the last argument and will error out
   */
  rest?: boolean;

  /**
   * Maximum amount to resolve the argument successfully
   *
   * @note `min` is used in string, integer, and float resolvers and will error
   * if not in the `type`. For strings, it'll check the length of the argument; for
   * integers and floats, it'll check if the provided argument is greater than the one
   * provided here
   */
  max?: number;

  /**
   * Minimum amount to resolve the argument successfully
   *
   * @note `min` is used in string, integer, and float resolvers and will error
   * if not in the `type`. For strings, it'll check the length of the argument; for
   * integers and floats, it'll check if the provided argument is less than the one
   * provided here
   */
  min?: number;

  /**
   * The argument resolver to use. To use multiple, use the `|` syntax.
   *
   * @example
   * ```js
   * // Unions
   * type: 'string | int' // => string & int values are accepted
   *
   * // Non-unions
   * type: 'string' // => string is only accepted
   * ```
   */
  type: string;

  /** The name of the argument */
  name: string;
}

export default class Argument {}
