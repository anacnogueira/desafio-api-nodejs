import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      enabled: true,
      reporter: ["text", "text-summary", "html"],
      all: true,
      include: ["src/**/*.ts"],
      exclude: ["**/*.test.ts", "src/tests/**"],
    },
  },
});
