export default class ActionUtils{
  constructor(prefix) {
    this.prefix = prefix
  }

  generateActionConstant(constant) {
    return this.prefix + './' + constant
  }
}
