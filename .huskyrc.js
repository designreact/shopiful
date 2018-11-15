module.exports = {
  hooks: {
    'pre-commit': 'yarn lint && yarn flow',
    'pre-push': 'yarn test',
  }
}
