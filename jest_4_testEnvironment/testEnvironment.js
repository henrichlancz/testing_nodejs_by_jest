const NodeEnvironment = require('jest-environment-node');

class TestEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
  }

  async setup() {
    console.log('TESTENVIRONMENT setup')
    await super.setup();
    this.global.hlMySecondVar = 'ball';
  }

  async teardown() {
    console.log('TESTENVIRONMENT teardown')
    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = TestEnvironment;