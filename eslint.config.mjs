import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      
      // Disable error for using 'any' type
      "@typescript-eslint/no-explicit-any": "off",
      // Disable error for unused variables
      "@typescript-eslint/no-unused-vars": "off",
      // Also disable the JavaScript version of the unused vars rule
      "no-unused-vars": "off",
      // Disable error for using 'var' instead of 'let' or 'const'
      "no-var": "off",
      // Disable the React Hooks exhaustive deps rule
      "react-hooks/exhaustive-deps": "off",
      // Disable prefer-const rule
      "prefer-const": "off",
      // Disable unsafe function type rule
      "@typescript-eslint/no-unsafe-function-type": "off",
      // Disable display-name rule
      "react/display-name": "off",
      // Disable ban-ts-comment rule
      "@typescript-eslint/ban-ts-comment": "off",
      // Desactivar regla de no usar <img>
      "@next/next/no-img-element": "off",
    // Desactivar regla de interfaces vacías
    "@typescript-eslint/no-empty-object-type": "off",
    // Desactivar regla de exportaciones anónimas
    "import/no-anonymous-default-export": "off",
    },
    
  },
  
];

export default eslintConfig;