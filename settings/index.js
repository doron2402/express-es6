class Settings {

  constructor (args) {
    if (args.NODE_ENV) {
      this.setEnvironment(args.NODE_ENV);
    } else {
      this.setEnvironment();
    }
  }

  setEnvironment (env) {
    switch (env) {
      case 'dev':
        this.env = 'dev';
        break;
      case 'stage':
        this.env = 'stage';
        break;
      case 'prod':
        this.env = 'prod';
        break;
      default:
        this.env = 'dev';
        break;
    }
    return;
  }

  getEnvironment () {
    return this.env;
  }
}

module.exports = Settings;