module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:lit/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "lit/no-template-bind": "error",
        "lit/no-template-arrow": "error"
    }
}
