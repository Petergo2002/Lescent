import tseslint from "typescript-eslint";

export default tseslint.config(
    ...tseslint.configs.recommended,
    {
        rules: {
            "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
            "@typescript-eslint/no-explicit-any": "warn",
        },
    },
    {
        ignores: [
            ".next/**",
            "node_modules/**",
            "*.config.js",
            "*.config.ts",
            "*.config.mjs",
        ],
    }
);
