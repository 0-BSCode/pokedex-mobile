module.exports = {
    root: true,
    extends: ["plugin:react-hooks/recommended", "universe", "prettier"],
    plugins: ["unused-imports"],
    rules: {
        // Ensures props and state inside functions are always up-to-date
        "react-hooks/exhaustive-deps": "warn",
        "no-unused-vars": "off", // or "@typescript-eslint/no-unused-vars": "off",
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": [
            "warn",
            {
                "vars": "all",
                "varsIgnorePattern": "^_",
                "args": "after-used",
                "argsIgnorePattern": "^_",
            },
        ],
    }
};
