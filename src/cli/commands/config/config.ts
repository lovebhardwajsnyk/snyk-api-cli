import { clearToken, saveTokenToConfig } from '../../../lib/auth/auth';
import { printGreen, printRed } from '../../../lib/utils/printToConsole';
import { appDebugLog, appErrorLog } from '../../../lib/utils/debugLogger';
import { COMMAND_ARGS } from '../../../enums/enums';
import JSONify from '../../../lib/utils/JSONify';
import yargs from 'yargs';
import { InvalidArgumentErr } from '../../../errors/errors';
import chalk from 'chalk';

const command = 'config [options]';
const describe = 'CLI configurations';
const builder: yargs.CommandBuilder = {
  'clear-token': {
    describe: 'Clear the saved API token',
    boolean: true,
  },
  'auth-token': {
    describe: 'Save the Snyk API token',
    string: true,
  },
};

const handler = (argv: any) => {
  appDebugLog(`Config command called with argv: ${JSONify(argv)}`);

  try {
    if (argv[COMMAND_ARGS.CLEAR_TOKEN]) {
      clearToken();
      return printRed('API token cleared!');
    } else if (argv[COMMAND_ARGS.AUTH_TOKEN]) {
      const token = argv[COMMAND_ARGS.AUTH_TOKEN];
      saveTokenToConfig(token);
      return printGreen('API token set!');
    } else {
      throw new InvalidArgumentErr(
        `
        No args or flags provided or value missing, either use ${chalk.green('--clear-token')} or ${chalk.green(
          '--auth-token=****',
        )}
        Usage: ${chalk.yellow('snyk-api config --clear-token')} or ${chalk.yellow('snyk-api config --auth-token=****')}
        `,
      );
    }
  } catch (error) {
    appErrorLog(error);
    const errorMessage: string = error.message || 'Something went wrong';
    printRed(errorMessage);
  }
};

export default { command, describe, builder, handler };
