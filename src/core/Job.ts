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

/** Definition interface to define a [Job]. */
interface JobMeta {
  /**
   * Time frame to execute the job in. If the frame is a cron-job expression
   * it'll be validated and will error out if not correct. If the time-frame is
   * a humanized string (`1hr`), it'll parse the value as a number, else it'll
   * be parsed in milliseconds.
   */
  frame: string | number;

  /**
   * The name of the job
   */
  name: string;
}

/**
 * Represents a [Job], a class to execute code in a specific time-frame.
 *
 * @abstract
 * @example
 * ```js
 * export default class SomeJob extends Job {
 *    constructor() {
 *       super({ frame: 60000, name: 'some-job' });
 *    }
 *
 *    async run() {
 *       // this.bot => Bot instance
 *    }
 * }
 * ```
 */
export default class Job {

}
