module.exports = {
  root: true,
  parserOptions: {
      "ecmaVersion": 7,
      "sourceType": "module"
  },
  extends: [
      "standard",
      "eslint-config-alloy/typescript"
  ],
  parser: "typescript-eslint-parser",
  env: {
      node: true
  },
  plugins: [
      "node",
      "typescript"
  ],
  rules: {
      // "node/exports-style": ["error", "module.exports"],
      "semi": ["error", "never"],
      "indent": ["error", 2, {
          "VariableDeclarator": 2,
          "SwitchCase": 1
      }],
      "space-before-function-paren": ["error", "always"],
      "no-confusing-arrow": ["off", {"allowParens": true}],
      "complexity": ["error", { "max": 40 }],
      "handle-callback-err": ["off"],
      "eol-last": ["error"]
  }
};
