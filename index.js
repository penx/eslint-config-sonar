module.exports = {
  rules: {
    // Vulnerabilities: https://sonarcloud.io/organizations/opensource/rules#qprofile=AV7g2D3v6oOvObTbiZD9|activation=true|types=VULNERABILITY
    'no-alert': 1,
    'no-eval': 2,
    'no-debugger': 1,
    'no-new-func': 2,
    'no-wildcard-postmessage/no-wildcard-postmessage': 2
  },
  plugins: ['no-wildcard-postmessage']
};
