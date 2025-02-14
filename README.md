# @ts-all/eslint-config
> [eslint-config](https://eslint.org) for [TypeScript](https://typescriptlang.org) projects

## Usage

* get the package from npm
```shell
$ npm install @ts-all/eslint-config -D
```

* just extends it in your eslint config file eg. `eslint.config.mjs`
```javascript
import { default as config } from '@ts-all/eslint-config';
export default config;
```

* linting
```shell
$ npx eslint
```
