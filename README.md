# @ts-all/eslint-config
> [eslint-config](https://eslint.org) for [TypeScript](https://typescriptlang.org) projects

## Usage

* get the package from npm
```shell
$ npm install @ts-all/eslint-config -D
```

* just extends it in your eslint config file eg. `.eslintrc.json`
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

## Dependencies

* [eslint](https://www.npmjs.com/package/eslint)
* [@typescript-eslint/parser](https://www.npmjs.com/@typescript-eslint/parser)
* [@typescript-eslint/eslint-plugin](https://www.npmjs.com/@typescript-eslint/eslint-plugin)
* [eslint-plugin-import](https://www.npmjs.com/eslint-plugin-import)
* [eslint-plugin-jsdoc](https://www.npmjs.com/eslint-plugin-jsdoc)
* [eslint-plugin-sonarjs](https://www.npmjs.com/eslint-plugin-sonarjs)
* [eslint-plugin-unicorn](https://www.npmjs.com/eslint-plugin-unicorn)
