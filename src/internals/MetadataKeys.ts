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

/**
 * Internal keys for reflection metadata on decorators.
 */
export const enum MetadataKeys {
  /**
   * Event emittions keys for `Reflect.getMetadata('$wumpcord::emittions', <target>)`
   *
   * Expected value:
   * ```js
   * [
   *   {
   *     "event": "<event name>",
   *     "type": "on/once",
   *     "handler": Function
   *   }
   * ]
   * ```
   */
  EventEmittion = '$wumpcord::emittions',

  /**
   * Subcommand key for `Reflect.getMetadata('$wumpcord::subcommand', <target>)`
   *
   * Expected value: `SubcommandInfo[]`
   */
  Subcommand    = '$wumpcord::subcommand',

  /**
   * Restriction key for `Reflect.getMetadata('$wumpcord::restriction', <target>)`
   *
   * Expected value: `RestrictionInfo[]`
   */
  Restriction   = '$wumpcord::restriction',

  /**
   * Command key for `Reflect.getMetadata('$wumpcord::command', <target>)`
   *
   * Expected value: `CommandInfo[]`
   */
  Command       = '$wumpcord::command',

  /**
   * Job key for `Reflect.getMetadata('$wumpcord::job', <target>)`
   *
   * Expected value: `JobInfo[]`
   */
  Job           = '$wumpcord::job'
}
