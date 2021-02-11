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

import { Client as WebSocketClient } from 'wumpcord';
import type { ClientOptions } from 'wumpcord/build/types';
import type { Message, User } from 'wumpcord'; // eslint-disable-line no-duplicate-imports
import { Collection } from '@augu/collections';

interface CommandClientOptions extends ClientOptions {
  /** If the bot should react to unknown commands */
  unknownCommandResponse?: boolean;

  /** Function or a message to say that a command has errored */
  onCommandError?: string | ((this: CommandClient, command: any, error: Error) => string);

  /** Function or a message on when the bot has been mentioned without any command parameters */
  onSelfMention?: string | ((this: CommandClient) => string);

  /** Absolute path to a directory of schedulers to add */
  schedulersDir?: string;

  /** If the bot should react to message edits that *might* contain command metadata */
  reactiveEdit?: boolean;

  /** If arguments should be interactive instead of letting the user eat the output, it'll prompt with a message and will eat the user's input when they send a message */
  interactive?: boolean;

  /** Absoulte path to a directory of commands to add */
  commandsDir: string;

  /** Absolute path to a directory of command checks to add */
  checksDir?: string;

  /** Absolute path to a directory of events to add */
  eventsDir: string;

  /** A list of prefixes, a predicate function, or a string of one prefix to react to. Use `%mention%` to react on mentions with command parameters. */
  prefixes: string | string[] | ((this: CommandClient, message: Message) => string);

  /** List or a ID of the bot's owners */
  owners: string | string[];

  /** The invite to the support server, this can be left blank. */
  invite?: string;
}

// todo: @core - Find a way to add custom events in the [WebSocketClient] instance
// instead of adding it in the `options` object

/** @inheritdoc [module:wumpcord/Client] */
export default class CommandClient extends WebSocketClient {
  public schedulers: SchedulerHandler | null;
  public resolvers: Collection<string, ArgumentResolver>;
  public options!: CommandClientOptions;
  public handler: CommandHandler;
  public checks: Collection<string, Check>;
  public events: EventHandler;

  /**
   * @inheritdoc [module:wumpcord/Client#constructor; include_params=false]
   * @param options Any additional options to use
   */
  constructor(options: CommandClientOptions) {
    super(options);

    this.schedulers = options.schedulersDir ? new SchedulerHandler(this, options.schedulersDir) : null;
    this.resolvers = new Collection();
    this.handler = new CommandHandler(this);
    this.checks = new Collection();
    this.events = new EventHandler(this);
  }

  get owners() {
    if (Array.isArray(this.options.owners))
      return this.options.owners;

    return [this.options.owners];
  }

  async start() {
    // todo
  }

  disconnect(reconnect: boolean = false) {
    // todo

    return super.disconnect(reconnect);
  }

  isOwner(userID: string | User) {
    // todo
    return true;
  }
}
