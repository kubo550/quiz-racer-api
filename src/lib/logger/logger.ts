class Logger {
  log(message: string, ...optionalParams: unknown[]) {
    //   green
    console.log(
      '\x1b[32m%s\x1b[0m',
      `[Logger] - [${new Date().toISOString()}] [INFO]: ${message}`,
      optionalParams || '',
    );
  }

  warn(message: string, ...optionalParams: unknown[]) {
    console.warn(
      '\x1b[33m%s\x1b[0m',
      `[Logger] - [${new Date().toISOString()}] [WARN]: ${message}`,
      optionalParams || '',
    );
  }

  error(message: string, ...optionalParams: unknown[]) {
    console.error(
      '\x1b[31m%s\x1b[0m',
      `[Logger] - [${new Date().toISOString()}] [ERROR]: ${message}`,
      optionalParams || '',
    );
  }

  debug?(message: string, ...optionalParams: unknown[]) {
    console.debug(
      '\x1b[34m%s\x1b[0m',
      `[Logger] - [${new Date().toISOString()}] [DEBUG]: ${message}`,
      optionalParams || '',
    );
  }

  verbose?(message: string, ...optionalParams: unknown[]) {
    console.debug(
      '\x1b[34m%s\x1b[0m',
      `[Logger] - [${new Date().toISOString()}] [VERBOSE]: ${message}`,
      optionalParams || '',
    );
  }
}

export const logger = new Logger();
