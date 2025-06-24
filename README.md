# Storybook for Compies React Component Library

This project provides the Storybook setup for the **Compies React Component Library**, enabling you to develop, test, and showcase your components in isolation.

## Features

- **Interactive Component Development**: Build and test React components in isolation with live reloading.
- **Customizable Configuration**: Extend and modify the Storybook setup to suit your project's needs.
- **ESLint Integration**: Includes a base ESLint configuration with options for stricter type-aware linting.

## Getting Started

1. Clone the repository and install dependencies:
  ```bash
  git clone <repository-url>
  cd <project-directory>
  npm install
  ```

2. Start the Storybook server:
  ```bash
  npm run storybook
  ```

3. Open your browser and navigate to `http://localhost:6006` to view the Compies components.

## Expanding the ESLint Configuration

For production-grade applications, consider enhancing the ESLint configuration with type-aware rules:

- Update the `parserOptions` property in your ESLint configuration:

  ```js
  export default tseslint.config({
   languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
   },
  })
  ```

- Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`.
- Optionally include `...tseslint.configs.stylisticTypeChecked` for stylistic rules.
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the configuration:

  ```js
  // eslint.config.js
  import react from 'eslint-plugin-react'

  export default tseslint.config({
   // Set the React version
   settings: { react: { version: '18.3' } },
   plugins: {
    // Add the React plugin
    react,
   },
   rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
   },
  })
  ```

## Resources

- [Storybook Documentation](https://storybook.js.org/docs/react/get-started/introduction)
- [ESLint Documentation](https://eslint.org/docs/latest/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

