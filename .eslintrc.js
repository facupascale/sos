module.exports = {
  root: true,
  extends: ["universe/native"],
  rules: {
    semi: ["error", "never"],
    "prettier/prettier": ["error", { bracketSameLine: false }],
    "@typescript-eslint/no-explicit-any": "error",
    "import/no-default-export": "error",
    "import/no-unresolved": "off",
    "react-hooks/exhaustive-deps": "warn",
  },
};
