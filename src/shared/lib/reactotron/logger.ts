import Reactotron from '../../../reactotron';

// See error levels: https://github.com/infinitered/reactotron/blob/master/src/Commands/LogCommand.js#L40
interface ILogger {
  debug: (message: string) => void;
  error: (message: string) => void;
  log: (message: string) => void;
  warn: (message: string) => void;
}

class Logger implements ILogger {
  constructor(private readonly prefix?: string) {}

  debug(message: string) {
    // TODO allow important option
    if (__DEV__) Reactotron.debug!(this.buildMessage(message));
  }

  error(message: string) {
    // TODO allow stack
    if (__DEV__) Reactotron.error!(this.buildMessage(message), null);
  }

  log(message: string) {
    if (__DEV__)
      Reactotron.send('log', { message: this.buildMessage(message) });
  }

  warn(message: string) {
    if (__DEV__) Reactotron.warn!(this.buildMessage(message));
  }

  private buildMessage(message: string) {
    if (this.prefix) return `[${this.prefix}] ${message}`;
    return message;
  }
}

export function getLogger(name?: string): ILogger {
  return new Logger(name);
}
