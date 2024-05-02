module.exports = {
    root: true,
    extends: ["plugin:react-hooks/recommended", "universe", "prettier"],
    rules: {
        // Ensures props and state inside functions are always up-to-date
        "react-hooks/exhaustive-deps": "warn"
    }
};
