module.exports = {
    root: true,
    env: {browser: true, es2020: true},
    extends: [
        "next/core-web-vitals",
        "plugin:@typescript-eslint/recommended",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs", "src/definitions/**/*"],
    parser: "@typescript-eslint/parser",
    plugins: [
        "prettier",
        "unused-imports",
        "import"
    ],
    rules: {
        "prettier/prettier": "error",
        "@typescript-eslint/prefer-ts-expect-error": "off",
        "@typescript-eslint/explicit-function-return-type": "warn",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/no-array-constructor": "off",
        "@typescript-eslint/no-explicit-any": "warn",
        "no-unused-vars": "off",
        "unused-imports/no-unused-imports": "error",
    },
};
