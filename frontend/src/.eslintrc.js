module.exports = {
    extends: [
      'react-app',
      'react-app/jest',
    ],
    rules: {
      'react/react-in-jsx-scope': 'off', // Disable this rule if you are using React 17+
    },
  };
  