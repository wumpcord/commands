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

import type { WebSocketClientEvents } from 'wumpcord/build/gateway/WebSocketClient';
import type { ClientOptions } from 'wumpcord/build/types';
import { Client, User } from 'wumpcord';

export interface CommandClientEvents extends WebSocketClientEvents {
  // Command events
  'command.registered'(): void;
  'command.executed'(): void;
  'command.reloaded'(): void;
  'command.unloaded'(): void;
  'command.error'(): void;

  // Listener events
  'listener.registered'(): void;
  'listener.error'(): void;

  // Job events
  'jobs.registered'(): void;
}

export interface CommandClientOptions extends ClientOptions {
  /**
   * If we should respond to unknown commands
   */
  unknownCommandResponses?: boolean;
  reactivePrompts?: boolean;
  reactiveEdit?: boolean;
  commandsDir?: string;
  eventsDir?: string;
  checksDir?: string;
  prefixes?: string | string[] | (() => string);
  jobsDir?: string;
  invite?: boolean;
  owners?: string | string[];
}

export default class CommandClient extends Client<CommandClientOptions, CommandClientEvents> {
  public owners: string[];

  constructor(options: CommandClientOptions) {
    super(options);

    this.owners = typeof options.owners === 'string'
      ? [options.owners]
      : Array.isArray(options.owners)
        ? options.owners
        : [];
  }

  private _debug(message: string) {
    super.debug('Commands', message);
  }

  async start() {
    this._debug('Launching bot...');

    return super.connect();
  }

  isOwner(user: string | User) {
    const ownerID = typeof user === 'string' ? user : user.id;
    return this.owners.includes(ownerID);
  }
}
