import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextVitals,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),

  {
    rules: {
      // 🔧 Code Quality & Best Practices
      "no-console": "warn", // Warns about console.log in production
      "no-unused-vars": "warn", // Catches unused variables
      "prefer-const": "warn", // Suggests using const when possible

      // ⚛️ React Specific (enhances Next.js rules)
      "react/self-closing-comp": "warn", // <div /> instead of <div></div>

      // 📁 Import/Export Organization
      "import/order": [
        "warn",
        {
          groups: [
            "builtin", // Node.js built-ins
            "external", // npm packages
            "internal", // Your own code
            "parent", // Parent imports
            "sibling", // Sibling imports
            "index", // Index imports
          ],
          "newlines-between": "always", // Blank lines between groups
        },
      ],
    },
  },
  
]);

export default eslintConfig;
