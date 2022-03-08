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

## Dependencies and working versions

* [eslint](https://www.npmjs.com/package/eslint) @ `8.10.0`
* [@typescript-eslint/parser](https://www.npmjs.com/@typescript-eslint/parser) @ `5.14.0`
* [@typescript-eslint/eslint-plugin](https://www.npmjs.com/@typescript-eslint/eslint-plugin) @ `5.8.0`
* [eslint-plugin-import](https://www.npmjs.com/eslint-plugin-import) @ `2.25.4`
* [eslint-plugin-jsdoc](https://www.npmjs.com/eslint-plugin-jsdoc) @ `37.9.7`
* [eslint-plugin-sonarjs](https://www.npmjs.com/eslint-plugin-sonarjs) @ `0.12.0`
* [eslint-plugin-unicorn](https://www.npmjs.com/eslint-plugin-unicorn) @ `41.0.0`
