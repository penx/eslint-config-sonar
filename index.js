module.exports = {
  rules: {
    // Bugs https://sonarcloud.io/organizations/opensource/rules#qprofile=AV7g2D3v6oOvObTbiZD9|activation=true|types=BUG
    'no-delete-var': 1,
    'use-isnan': 2,
    'constructor-super': 2,
    'no-this-before-super': 2,
    'no-new-symbol': 2,
    'no-with': 1,
    'for-direction': 2,
    'no-const-assign': 2,
    'no-bitwise': 2,
    'array-callback-return': 2,
    'no-sequences': 2,
    'no-empty-pattern': 2,
    'no-dupe-args': 2,
    'require-yield': 2,
    'no-self-compare': 2,
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'no-unreachable': 2,
    'no-unused-expressions': 2,
    'space-unary-ops': 2,
    'space-infix-ops': 2,
    'no-dupe-keys': 2,
    'no-unsafe-negation': 2,
    'no-self-assign': 2,
    // Vulnerabilities: https://sonarcloud.io/organizations/opensource/rules#qprofile=AV7g2D3v6oOvObTbiZD9|activation=true|types=VULNERABILITY
    'no-alert': 1,
    'no-eval': 2,
    'no-debugger': 1,
    'no-new-func': 2,
    'no-wildcard-postmessage/no-wildcard-postmessage': 2
  },
  plugins: ['no-wildcard-postmessage']
};
