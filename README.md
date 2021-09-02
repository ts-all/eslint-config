# @ts-all/eslint-config
> [eslint-config](https://eslint.org) for [TypeScript](https://typescriptlang.org) projects

## Usage
* get the package from npm
```shell
$ npm install @ts-all/eslint-config -D
```

* extends it in your eslint config file eg. `.eslintrc.json`
```json
{
    // ...
    "extends": [
        // ...
        "@ts-all"
        // ...
    ]
    // ...
}
```

* linting
```shell
$ npx eslint ./ --ext .ts --ext .js
```
