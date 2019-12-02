# Gocomo Eslint and Prettier Setup

Common Gocomo eslint settings.
Inspired by [eslint-config-wesbos](https://github.com/wesbos/eslint-config-wesbos)

## What it does

- Lints JavaScript based on the latest standards incl. Sonar-Rules
- Fixes issues and formatting errors with Prettier
- You can see all the [rules here](https://github.com/gocomo/eslint-config-gocomo/blob/master/.eslintrc.js).

## Installing

1. If you don't already have a `package.json` file, create one with `npm init`.

2. Then we need to install everything needed by the config:

```
npx install-peerdeps --dev @gocomo/eslint-config-gocomo
```

3. You can see in your package.json there are now a big list of devDependencies.

4. Create a `.eslintrc` file in the root of your project's directory (it should live where package.json does). Your `.eslintrc` file should look like this:

```json
{
  "extends": ["gocomo"]
}
```

## With VS Code

Once you have done the above install, you probably want your editor to lint and fix for you. Here are the instructions for VS Code:

1. Install the [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
1. Install the [Prettier package](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
1. Now we need to setup some VS Code settings via `Code/File` → `Preferences` → `Settings`. It's easier to enter these settings while editing the `settings.json` file, so click the `{}` icon in the top right corner:

```js
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "eslint.validate": [ "javascript", "javascriptreact", "typescript" ]
```
