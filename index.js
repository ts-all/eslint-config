module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "modules": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "import",
        "jsdoc",
        "unicorn",
        "sonarjs"
    ],
    "rules": {
        // ESLint / Possible Errors
        "for-direction": "error",
        "getter-return": [
            "error",
            {
                "allowImplicit": false
            }
        ],
        "no-async-promise-executor": "error",
        "no-await-in-loop": "off",
        "no-compare-neg-zero": "error",
        "no-cond-assign": [
            "error",
            "always"
        ],
        "no-console": [
            "error",
            {
                "allow": [
                    "info",
                    "warn",
                    "error"
                ]
            }
        ],
        "no-constant-condition": [
            "error",
            {
                "checkLoops": false
            }
        ],
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-dupe-args": "error",
        "no-dupe-else-if": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-empty": [
            "error",
            {
                "allowEmptyCatch": true
            }
        ],
        "no-empty-character-class": "error",
        "no-ex-assign": "error",
        "no-extra-boolean-cast": [
            "error",
            {
                "enforceForLogicalOperands": true
            }
        ],
        "no-extra-parens": [
            "error",
            "functions"
        ],
        "no-extra-semi": "error",
        "no-func-assign": "error",
        "no-import-assign": "error",
        "no-inner-declarations": [
            "error",
            "both"
        ],
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": "error",
        "no-loss-of-precision": "error",
        "no-misleading-character-class": "error",
        "no-obj-calls": "error",
        "no-promise-executor-return": "error",
        "no-prototype-builtins": "error",
        "no-regex-spaces": "error",
        "no-setter-return": "error",
        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error",
        "no-unexpected-multiline": "error",
        "no-unreachable": "error",
        "no-unreachable-loop": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": [
            "error",
            {
                "enforceForOrderingRelations": true
            }
        ],
        "no-unsafe-optional-chaining": "error",
        "no-useless-backreference": "error",
        "require-atomic-updates": "error",
        "use-isnan": [
            "error",
            {
                "enforceForSwitchCase": true,
                "enforceForIndexOf": false
            }
        ],
        "valid-typeof": [
            "error",
            {
                "requireStringLiterals": true
            }
        ],
        // ESLint / Best Practices
        "accessor-pairs": [
            "error",
            {
                "getWithoutSet": false,
                "setWithoutGet": false,
                "enforceForClassMembers": false
            }
        ],
        "array-callback-return": [
            "error",
            {
                "allowImplicit": false,
                "checkForEach": true
            }
        ],
        "block-scoped-var": "error",
        "class-methods-use-this": "off",
        "complexity": [
            "error",
            {
                "max": 36
            }
        ],
        "consistent-return": [
            "error",
            {
                "treatUndefinedAsUnspecified": false
            }
        ],
        "curly": [
            "error",
            "all"
        ],
        "default-case": [
            "error",
            {
                "commentPattern": ""
            }
        ],
        "default-case-last": "error",
        "default-param-last": "error",
        "dot-location": [
            "error",
            "property"
        ],
        "dot-notation": "off",
        "eqeqeq": "off",
        "grouped-accessor-pairs": [
            "error",
            "getBeforeSet"
        ],
        "guard-for-in": "error",
        "max-classes-per-file": "off",
        "no-alert": "error",
        "no-caller": "error",
        "no-case-declarations": "error",
        "no-constructor-return": "error",
        "no-div-regex": "error",
        "no-else-return": [
            "error",
            {
                "allowElseIf": false
            }
        ],
        "no-empty-function": [
            "error",
            {
                "allow": [
                    "constructors",
                    "arrowFunctions"
                ]
            }
        ],
        "no-empty-pattern": "error",
        "no-eq-null": "off",
        "no-eval": [
            "error",
            {
                "allowIndirect": false
            }
        ],
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-label": "error",
        "no-fallthrough": "error",
        "no-floating-decimal": "error",
        "no-global-assign": "error",
        "no-implicit-coercion": "error",
        "no-implicit-globals": "off",
        "no-implied-eval": "error",
        "no-invalid-this": [
            "error",
            {
                "capIsConstructor": false
            }
        ],
        "no-iterator": "error",
        "no-labels": [
            "error",
            {
                "allowLoop": false,
                "allowSwitch": false
            }
        ],
        "no-lone-blocks": "error",
        "no-loop-func": "error",
        "no-magic-numbers": "off",
        "no-multi-spaces": "error",
        "no-multi-str": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-nonoctal-decimal-escape": "error",
        "no-octal": "error",
        "no-octal-escape": "error",
        "no-param-reassign": [
            "error",
            {
                "props": false
            }
        ],
        "no-proto": "error",
        "no-redeclare": [
            "error",
            {
                "builtinGlobals": true
            }
        ],
        "no-restricted-properties": "error",
        "no-return-assign": [
            "error",
            "always"
        ],
        "no-return-await": "error",
        "no-script-url": "error",
        "no-self-assign": [
            "error",
            {
                "props": true
            }
        ],
        "no-self-compare": "error",
        "no-sequences": [
            "error",
            {
                "allowInParentheses": false
            }
        ],
        "no-throw-literal": "error",
        "no-unmodified-loop-condition": "error",
        "no-unused-expressions": "error",
        "no-unused-labels": "error",
        "no-useless-call": "error",
        "no-useless-catch": "error",
        "no-useless-concat": "error",
        "no-useless-escape": "error",
        "no-useless-return": "error",
        "no-void": [
            "off",
            {
                "allowAsStatement": true
            }
        ],
        "no-warning-comments": "off",
        "no-with": "error",
        "prefer-named-capture-group": "error",
        "prefer-promise-reject-errors": [
            "error",
            {
                "allowEmptyReject": true
            }
        ],
        "prefer-regex-literals": [
            "error",
            {
                "disallowRedundantWrapping": true
            }
        ],
        "radix": "error",
        "require-await": "error",
        "require-unicode-regexp": "error",
        "vars-on-top": "error",
        "wrap-iife": [
            "error",
            "any"
        ],
        "yoda": [
            "error",
            "never"
        ],
        // ESLint / Strict Mode
        "strict": [
            "error",
            "never"
        ],
        // ESLint / Variables
        "init-declarations": "off",
        "no-delete-var": "error",
        "no-label-var": "error",
        "no-restricted-globals": [
            "error",
            "event",
            "fdescribe"
        ],
        "no-shadow": "error",
        "no-shadow-restricted-names": "error",
        "no-undef": "off",
        "no-undef-init": "error",
        "no-undefined": "off",
        "no-unused-vars": [
            "error",
            {
                "args": "after-used",
                "ignoreRestSiblings": true
            }
        ],
        "no-use-before-define": [
            "error",
            {
                "functions": true,
                "classes": true,
                "variables": true
            }
        ],
        // ESLint / Stylistic Issues
        "array-bracket-newline": "off",
        "array-bracket-spacing": [
            "error",
            "never"
        ],
        "array-element-newline": "off",
        "block-spacing": [
            "error",
            "always"
        ],
        "brace-style": [
            "error",
            "1tbs",
            {
                "allowSingleLine": true
            }
        ],
        "camelcase": "error",
        "capitalized-comments": "off",
        "comma-dangle": [
            "error",
            "always-multiline"
        ],
        "comma-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "comma-style": [
            "error",
            "last"
        ],
        "computed-property-spacing": [
            "error",
            "never"
        ],
        "consistent-this": [
            "error",
            "that"
        ],
        "eol-last": [
            "error",
            "always"
        ],
        "func-call-spacing": [
            "error",
            "never"
        ],
        "func-name-matching": [
            "error",
            "always",
            {
                "considerPropertyDescriptor": true
            }
        ],
        "func-names": [
            "error",
            "as-needed"
        ],
        "func-style": [
            "error",
            "declaration",
            {
                "allowArrowFunctions": true
            }
        ],
        "function-call-argument-newline": "off",
        "function-paren-newline": [
            "error",
            "consistent"
        ],
        "id-denylist": "off",
        "id-length": [
            "error",
            {
                "min": 2,
                "properties": "never",
                "exceptions": [
                    "i",
                    "j",
                    "x",
                    "y",
                    "_"
                ]
            }
        ],
        "id-match": "off",
        "implicit-arrow-linebreak": [
            "error",
            "beside"
        ],
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1,
                "VariableDeclarator": 1,
                "outerIIFEBody": 0,
                "MemberExpression": 1,
                "FunctionDeclaration": {
                    "body": 1,
                    "parameters": 1
                },
                "FunctionExpression": {
                    "body": 1,
                    "parameters": 1
                },
                "CallExpression": {
                    "arguments": 1
                },
                "ArrayExpression": 1,
                "ObjectExpression": 1,
                "ImportDeclaration": 1,
                "flatTernaryExpressions": true,
                "offsetTernaryExpressions": true,
                "ignoreComments": false
            }
        ],
        "jsx-quotes": "off",
        "key-spacing": [
            "error",
            {
                "beforeColon": false,
                "afterColon": true,
                "mode": "strict"
            }
        ],
        "keyword-spacing": [
            "error",
            {
                "before": true,
                "after": true
            }
        ],
        "line-comment-position": [
            "error",
            {
                "position": "above"
            }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "lines-around-comment": [
            "error",
            {
                "afterBlockComment": false,
                "beforeBlockComment": true,
                "beforeLineComment": true,
                "afterLineComment": false,
                "allowBlockStart": true,
                "allowBlockEnd": true,
                "allowObjectStart": true,
                "allowObjectEnd": true,
                "allowArrayStart": true,
                "allowArrayEnd": true,
                "allowClassStart": true,
                "allowClassEnd": true
            }
        ],
        "lines-between-class-members": [
            "error",
            "always"
        ],
        "max-depth": [
            "error",
            9
        ],
        "max-len": "off",
        "max-lines": "off",
        "max-lines-per-function": "off",
        "max-nested-callbacks": [
            "error",
            5
        ],
        "max-params": "off",
        "max-statements": "off",
        "max-statements-per-line": [
            "error",
            {
                "max": 3
            }
        ],
        "multiline-comment-style": [
            "error",
            "starred-block"
        ],
        "multiline-ternary": [
            "error",
            "always-multiline"
        ],
        "new-cap": [
            "error",
            {
                "capIsNew": false
            }
        ],
        "new-parens": [
            "error",
            "always"
        ],
        "newline-per-chained-call": "off",
        "no-array-constructor": "error",
        "no-bitwise": "error",
        "no-continue": "off",
        "no-inline-comments": "error",
        "no-lonely-if": "error",
        "no-mixed-operators": "error",
        "no-mixed-spaces-and-tabs": "error",
        "no-multi-assign": "error",
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 1,
                "maxEOF": 0,
                "maxBOF": 0
            }
        ],
        "no-negated-condition": "error",
        "no-nested-ternary": "off",
        "no-new-object": "error",
        "no-plusplus": "off",
        "no-restricted-syntax": "off",
        "no-tabs": "error",
        "no-ternary": "off",
        "no-trailing-spaces": [
            "error",
            {
                "skipBlankLines": false,
                "ignoreComments": false
            }
        ],
        "no-underscore-dangle": [
            "error",
            {
                "allow": [
                    "_time"
                ],
                "allowAfterThis": false,
                "allowAfterSuper": false,
                "allowAfterThisConstructor": false,
                "enforceInMethodNames": false,
                "allowFunctionParams": false
            }
        ],
        "no-unneeded-ternary": [
            "error",
            {
                "defaultAssignment": false
            }
        ],
        "no-whitespace-before-property": "error",
        "nonblock-statement-body-position": "off",
        "object-curly-newline": [
            "error",
            {
                "consistent": true
            }
        ],
        "object-curly-spacing": [
            "error",
            "always",
            {
                "arraysInObjects": true,
                "objectsInObjects": true
            }
        ],
        "object-property-newline": "off",
        "one-var": [
            "error",
            "never"
        ],
        "one-var-declaration-per-line": [
            "error",
            "initializations"
        ],
        "operator-assignment": [
            "error",
            "always"
        ],
        "operator-linebreak": [
            "error",
            "before"
        ],
        "padded-blocks": [
            "error",
            {
                "blocks": "never",
                "classes": "always",
                "switches": "never"
            },
            {
                "allowSingleLineBlocks": true
            }
        ],
        "padding-line-between-statements": "off",
        "prefer-exponentiation-operator": "error",
        "prefer-object-spread": "error",
        "quote-props": [
            "error",
            "consistent-as-needed",
            {
                "keywords": true
            }
        ],
        "quotes": [
            "error",
            "single",
            {
                "avoidEscape": true,
                "allowTemplateLiterals": true
            }
        ],
        "semi": [
            "error",
            "always",
            {
                "omitLastInOneLineBlock": false
            }
        ],
        "semi-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "semi-style": [
            "error",
            "last"
        ],
        "sort-keys": "off",
        "sort-vars": "off",
        "space-before-blocks": [
            "error",
            "always"
        ],
        "space-before-function-paren": [
            "error",
            {
                "anonymous": "ignore",
                "named": "never",
                "asyncArrow": "always"
            }
        ],
        "space-in-parens": [
            "error",
            "never"
        ],
        "space-infix-ops": [
            "error",
            {
                "int32Hint": false
            }
        ],
        "space-unary-ops": [
            "error",
            {
                "words": true,
                "nonwords": false
            }
        ],
        "spaced-comment": [
            "error",
            "always",
            {
                "block": {
                    "balanced": true
                }
            }
        ],
        "switch-colon-spacing": [
            "error",
            {
                "after": true,
                "before": false
            }
        ],
        "template-tag-spacing": [
            "error",
            "never"
        ],
        "unicode-bom": [
            "error",
            "never"
        ],
        "wrap-regex": "off",
        // ESLint / ECMAScript 6
        "arrow-body-style": [
            "error",
            "as-needed"
        ],
        "arrow-parens": [
            "error",
            "as-needed",
            {
                "requireForBlockBody": false
            }
        ],
        "arrow-spacing": [
            "error",
            {
                "before": true,
                "after": true
            }
        ],
        "constructor-super": "error",
        "generator-star-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "no-class-assign": "error",
        "no-confusing-arrow": [
            "error",
            {
                "allowParens": true
            }
        ],
        "no-const-assign": "error",
        "no-dupe-class-members": "error",
        "no-duplicate-imports": [
            "error",
            {
                "includeExports": true
            }
        ],
        "no-new-symbol": "error",
        "no-restricted-exports": [
            "error",
            {
                "restrictedNamedExports": [
                    "default"
                ]
            }
        ],
        "no-restricted-imports": "off",
        "no-this-before-super": "error",
        "no-useless-computed-key": [
            "error",
            {
                "enforceForClassMembers": true
            }
        ],
        "no-useless-constructor": "error",
        "no-useless-rename": "error",
        "no-var": "error",
        "object-shorthand": "error",
        "prefer-arrow-callback": "error",
        "prefer-const": "error",
        "prefer-destructuring": [
            "error",
            {
                "array": false,
                "object": true
            },
            {
                "enforceForRenamedProperties": false
            }
        ],
        "prefer-numeric-literals": "error",
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "require-yield": "error",
        "rest-spread-spacing": [
            "error",
            "never"
        ],
        "sort-imports": "off",
        "symbol-description": "error",
        "template-curly-spacing": [
            "error",
            "never"
        ],
        "yield-star-spacing": [
            "error",
            "after"
        ],
        // eslint-plugin-import
        "import/default": "error",
        "import/dynamic-import-chunkname": "off",
        "import/export": "error",
        "import/exports-last": "error",
        "import/extensions": "off",
        "import/first": "error",
        "import/group-exports": "off",
        "import/max-dependencies": "off",
        "import/named": "off",
        "import/namespace": [
            "error",
            {
                "allowComputed": true
            }
        ],
        "import/newline-after-import": [
            "error",
            {
                "count": 1
            }
        ],
        "import/no-absolute-path": [
            "error",
            {
                "esmodule": true,
                "commonjs": true
            }
        ],
        "import/no-amd": "error",
        "import/no-anonymous-default-export": [
            "error",
            {
                "allowArray": false,
                "allowArrowFunction": false,
                "allowAnonymousClass": false,
                "allowAnonymousFunction": false,
                "allowCallExpression": true,
                "allowLiteral": false,
                "allowObject": false
            }
        ],
        "import/no-commonjs": "error",
        "import/no-cycle": "error",
        "import/no-default-export": "error",
        "import/no-deprecated": "error",
        "import/no-duplicates": [
            "error",
            { "prefer-inline": true }
        ],
        "import/no-dynamic-require": "error",
        "import/no-extraneous-dependencies": "off",
        "import/no-import-module-exports": "error",
        "import/no-internal-modules": "off",
        "import/no-mutable-exports": "error",
        "import/no-named-as-default-member": "error",
        "import/no-named-as-default": "error",
        "import/no-named-default": "error",
        "import/no-named-export": "off",
        "import/no-namespace": "off",
        "import/no-nodejs-modules": "off",
        "import/no-relative-packages": "off",
        "import/no-relative-parent-imports": "off",
        "import/no-restricted-paths": "off",
        "import/no-self-import": "error",
        "import/no-unassigned-import": "off",
        "import/no-unresolved": "off",
        "import/no-unused-modules": "error",
        "import/no-useless-path-segments": "error",
        "import/no-webpack-loader-syntax": "error",
        "import/order": [
            "off",
            {
                "alphabetize": {
                    "order": "asc",
                    "caseInsensitive": true
                }
            }
        ],
        "import/prefer-default-export": "off",
        "import/unambiguous": "off",
        // eslint-plugin-jsdoc
        "jsdoc/check-access": "error",
        "jsdoc/check-alignment": "error",
        "jsdoc/check-indentation": "error",
        "jsdoc/check-line-alignment": "error",
        "jsdoc/check-param-names": "error",
        "jsdoc/check-property-names": "error",
        "jsdoc/check-syntax": "error",
        "jsdoc/check-tag-names": "error",
        "jsdoc/check-types": "error",
        "jsdoc/check-values": "error",
        "jsdoc/empty-tags": "error",
        "jsdoc/implements-on-classes": "error",
        "jsdoc/match-description": "off",
        "jsdoc/multiline-blocks": "error",
        "jsdoc/newline-after-description": "off",
        "jsdoc/no-bad-blocks": "error",
        "jsdoc/no-defaults": "error",
        "jsdoc/no-missing-syntax": "off",
        "jsdoc/no-multi-asterisks": "error",
        "jsdoc/no-restricted-syntax": "off",
        "jsdoc/no-types": "error",
        "jsdoc/no-undefined-types": "error",
        "jsdoc/require-asterisk-prefix": "error",
        "jsdoc/require-description": "error",
        "jsdoc/require-description-complete-sentence": "off",
        "jsdoc/require-example": "off",
        "jsdoc/require-file-overview": "off",
        "jsdoc/require-hyphen-before-param-description": "error",
        "jsdoc/require-jsdoc": "off",
        "jsdoc/require-param": "off",
        "jsdoc/require-param-description": "error",
        "jsdoc/require-param-name": "error",
        "jsdoc/require-param-type": "error",
        "jsdoc/require-property": "error",
        "jsdoc/require-property-description": "error",
        "jsdoc/require-property-name": "error",
        "jsdoc/require-property-type": "error",
        "jsdoc/require-returns": "off",
        "jsdoc/require-returns-check": "error",
        "jsdoc/require-returns-description": "error",
        "jsdoc/require-returns-type": "error",
        "jsdoc/require-throws": "error",
        "jsdoc/require-yields": "error",
        "jsdoc/require-yields-check": "error",
        "jsdoc/tag-lines": "error",
        "jsdoc/valid-types": "error",
        // eslint-plugin-unicorn
        "unicorn/better-regex": "error",
        "unicorn/catch-error-name": "off",
        "unicorn/consistent-destructuring": "error",
        "unicorn/consistent-function-scoping": "error",
        "unicorn/custom-error-definition": "off",
        "unicorn/empty-brace-spaces": "off",
        "unicorn/error-message": "error",
        "unicorn/escape-case": "error",
        "unicorn/expiring-todo-comments": "error",
        "unicorn/explicit-length-check": "off",
        "unicorn/filename-case": "error",
        "unicorn/import-index": "off",
        "unicorn/import-style": "error",
        "unicorn/new-for-builtins": "error",
        "unicorn/no-abusive-eslint-disable": "error",
        "unicorn/no-array-callback-reference": "off",
        "unicorn/no-array-for-each": "off",
        "unicorn/no-array-method-this-argument": "error",
        "unicorn/no-array-push-push": "off",
        "unicorn/no-array-reduce": "error",
        "unicorn/no-console-spaces": "error",
        "unicorn/no-document-cookie": "error",
        "unicorn/no-for-loop": "error",
        "unicorn/no-hex-escape": "error",
        "unicorn/no-instanceof-array": "error",
        "unicorn/no-keyword-prefix": "off",
        "unicorn/no-lonely-if": "error",
        "unicorn/no-nested-ternary": "off",
        "unicorn/no-new-array": "error",
        "unicorn/no-new-buffer": "error",
        "unicorn/no-null": "off",
        "unicorn/no-object-as-default-parameter": "error",
        "unicorn/no-process-exit": "off",
        "unicorn/no-static-only-class": "error",
        "unicorn/no-this-assignment": "error",
        "unicorn/no-unreadable-array-destructuring": "error",
        "unicorn/no-unsafe-regex": "off",
        "unicorn/no-unused-properties": "off",
        "unicorn/no-useless-length-check": "error",
        "unicorn/no-useless-spread": "error",
        "unicorn/no-useless-undefined": "off",
        "unicorn/no-zero-fractions": "error",
        "unicorn/number-literal-case": "error",
        "unicorn/numeric-separators-style": [
            "error",
            {
                "onlyIfContainsSeparator": true
            }
        ],
        "unicorn/prefer-add-event-listener": "off",
        "unicorn/prefer-array-find": "error",
        "unicorn/prefer-array-flat": "error",
        "unicorn/prefer-array-flat-map": "error",
        "unicorn/prefer-array-index-of": "error",
        "unicorn/prefer-array-some": "error",
        "unicorn/prefer-at": "off",
        "unicorn/prefer-date-now": "error",
        "unicorn/prefer-default-parameters": "error",
        "unicorn/prefer-dom-node-append": "error",
        "unicorn/prefer-dom-node-dataset": "error",
        "unicorn/prefer-dom-node-remove": "error",
        "unicorn/prefer-dom-node-text-content": "error",
        "unicorn/prefer-includes": "error",
        "unicorn/prefer-keyboard-event-key": "error",
        "unicorn/prefer-math-trunc": "error",
        "unicorn/prefer-modern-dom-apis": "error",
        "unicorn/prefer-module": "error",
        "unicorn/prefer-negative-index": "error",
        "unicorn/prefer-node-protocol": "error",
        "unicorn/prefer-number-properties": "error",
        "unicorn/prefer-object-from-entries": "error",
        "unicorn/prefer-object-has-own": "off",
        "unicorn/prefer-optional-catch-binding": "error",
        "unicorn/prefer-prototype-methods": "error",
        "unicorn/prefer-query-selector": "error",
        "unicorn/prefer-reflect-apply": "error",
        "unicorn/prefer-regexp-test": "error",
        "unicorn/prefer-set-has": "error",
        "unicorn/prefer-spread": "error",
        "unicorn/prefer-string-replace-all": "off",
        "unicorn/prefer-string-slice": "off",
        "unicorn/prefer-string-starts-ends-with": "error",
        "unicorn/prefer-string-trim-start-end": "error",
        "unicorn/prefer-switch": "error",
        "unicorn/prefer-ternary": [
            "error",
            "only-single-line"
        ],
        "unicorn/prefer-top-level-await": "off",
        "unicorn/prefer-type-error": "error",
        "unicorn/prevent-abbreviations": "off",
        "unicorn/require-array-join-separator": "error",
        "unicorn/require-number-to-fixed-digits-argument": "error",
        "unicorn/require-post-message-target-origin": "error",
        "unicorn/string-content": "off",
        "unicorn/throw-new-error": "error",
        // eslint-plugin-sonarjs Bug Detection
        "sonarjs/no-all-duplicated-branches": "error",
        "sonarjs/no-element-overwrite": "error",
        "sonarjs/no-empty-collection": "error",
        "sonarjs/no-extra-arguments": "error",
        "sonarjs/no-identical-conditions": "error",
        "sonarjs/no-identical-expressions": "error",
        "sonarjs/no-ignored-return": "error",
        "sonarjs/no-one-iteration-loop": "error",
        "sonarjs/no-use-of-empty-return-value": "error",
        "sonarjs/non-existent-operator": "error",
        // eslint-plugin-sonarjs Code Smell Detection
        "sonarjs/cognitive-complexity": [
            "error",
            36
        ],
        "sonarjs/elseif-without-else": "off",
        "sonarjs/max-switch-cases": "error",
        "sonarjs/no-collapsible-if": "error",
        "sonarjs/no-collection-size-mischeck": "error",
        "sonarjs/no-duplicate-string": "error",
        "sonarjs/no-duplicated-branches": "error",
        "sonarjs/no-gratuitous-expressions": "error",
        "sonarjs/no-identical-functions": "error",
        "sonarjs/no-inverted-boolean-check": "error",
        "sonarjs/no-nested-switch": "error",
        "sonarjs/no-nested-template-literals": "off",
        "sonarjs/no-redundant-boolean": "error",
        "sonarjs/no-redundant-jump": "error",
        "sonarjs/no-same-line-conditional": "error",
        "sonarjs/no-small-switch": "error",
        "sonarjs/no-unused-collection": "error",
        "sonarjs/no-useless-catch": "error",
        "sonarjs/prefer-immediate-return": "error",
        "sonarjs/prefer-object-literal": "error",
        "sonarjs/prefer-single-boolean-return": "error",
        "sonarjs/prefer-while": "error"
    },
    "overrides": [
        {
            "files": [
                "*.ts"
            ],
            "parser": "@typescript-eslint/parser",
            "parserOptions": {
                "createDefaultProgram": true,
                "ecmaFeatures": {
                    "modules": true
                },
                "ecmaVersion": "latest",
                "sourceType": "module",
                "project": [
                    "./tsconfig.json"
                ]
            },
            "plugins": [
                "@typescript-eslint"
            ],
            "rules": {
                // @typescript-eslint/eslint-plugin
                "@typescript-eslint/adjacent-overload-signatures": "error",
                "@typescript-eslint/array-type": [
                    "error",
                    {
                        "default": "generic"
                    }
                ],
                "@typescript-eslint/await-thenable": "error",
                "@typescript-eslint/ban-ts-comment": "error",
                "@typescript-eslint/ban-tslint-comment": "error",
                "@typescript-eslint/ban-types": "error",
                "@typescript-eslint/brace-style": [
                    "error",
                    "1tbs",
                    {
                        "allowSingleLine": true
                    }
                ],
                "@typescript-eslint/class-literal-property-style": [
                    "error",
                    "fields"
                ],
                "@typescript-eslint/comma-dangle": [
                    "error",
                    "always-multiline"
                ],
                "@typescript-eslint/comma-spacing": [
                    "error",
                    {
                        "before": false,
                        "after": true
                    }
                ],
                "@typescript-eslint/consistent-indexed-object-style": [
                    "error",
                    "record"
                ],
                "@typescript-eslint/consistent-type-assertions": [
                    "error",
                    {
                        "assertionStyle": "as",
                        "objectLiteralTypeAssertions": "allow"
                    }
                ],
                "@typescript-eslint/consistent-type-definitions": [
                    "error",
                    "interface"
                ],
                "@typescript-eslint/consistent-type-imports": [
                    "error",
                    {
                        "prefer": "no-type-imports",
                        "disallowTypeAnnotations": true
                    }
                ],
                "@typescript-eslint/default-param-last": "error",
                "@typescript-eslint/dot-notation": "off",
                "@typescript-eslint/explicit-function-return-type": [
                    "error",
                    {
                        "allowExpressions": true,
                        "allowTypedFunctionExpressions": true,
                        "allowHigherOrderFunctions": true,
                        "allowDirectConstAssertionInArrowFunctions": true,
                        "allowConciseArrowFunctionExpressionsStartingWithVoid": false
                    }
                ],
                "@typescript-eslint/explicit-member-accessibility": [
                    "error",
                    {
                        "accessibility": "explicit",
                        "overrides": {
                            "accessors": "explicit",
                            "constructors": "explicit",
                            "methods": "explicit",
                            "properties": "explicit",
                            "parameterProperties": "explicit"
                        }
                    }
                ],
                "@typescript-eslint/explicit-module-boundary-types": "off",
                "@typescript-eslint/func-call-spacing": [
                    "error",
                    "never"
                ],
                "@typescript-eslint/indent": [
                    "error",
                    4,
                    {
                        "SwitchCase": 1,
                        "VariableDeclarator": 1,
                        "outerIIFEBody": 0,
                        "MemberExpression": 1,
                        "FunctionDeclaration": {
                            "body": 1,
                            "parameters": 1
                        },
                        "FunctionExpression": {
                            "body": 1,
                            "parameters": 1
                        },
                        "CallExpression": {
                            "arguments": 1
                        },
                        "ArrayExpression": 1,
                        "ObjectExpression": 1,
                        "ImportDeclaration": 1,
                        "flatTernaryExpressions": true,
                        "offsetTernaryExpressions": true,
                        "ignoreComments": false
                    }
                ],
                "@typescript-eslint/init-declarations": "off",
                "@typescript-eslint/keyword-spacing": [
                    "error",
                    {
                        "before": true,
                        "after": true
                    }
                ],
                "@typescript-eslint/lines-between-class-members": [
                    "error",
                    "always"
                ],
                "@typescript-eslint/member-delimiter-style": "error",
                "@typescript-eslint/member-ordering": [
                    "error"
                ],
                "@typescript-eslint/method-signature-style": "off",
                "@typescript-eslint/naming-convention": [
                    "error",
                    {
                        "selector": "default",
                        "format": [
                            "strictCamelCase"
                        ],
                        "leadingUnderscore": "forbid",
                        "trailingUnderscore": "forbid"
                    },
                    {
                        "selector": "variableLike",
                        "format": [
                            "strictCamelCase",
                            "UPPER_CASE"
                        ],
                        "leadingUnderscore": "allow",
                        "trailingUnderscore": "forbid"
                    },
                    {
                        "selector": "memberLike",
                        "format": [
                            "strictCamelCase"
                        ],
                        "leadingUnderscore": "allow",
                        "trailingUnderscore": "forbid"
                    },
                    {
                        "selector": "typeLike",
                        "format": [
                            "StrictPascalCase"
                        ],
                        "leadingUnderscore": "forbid",
                        "trailingUnderscore": "forbid"
                    },
                    {
                        "selector": "method",
                        "format": [
                            "strictCamelCase"
                        ],
                        "leadingUnderscore": "forbid",
                        "trailingUnderscore": "forbid"
                    },
                    {
                        "selector": "enumMember",
                        "format": [
                            "strictCamelCase",
                            "StrictPascalCase",
                            "UPPER_CASE"
                        ],
                        "leadingUnderscore": "forbid",
                        "trailingUnderscore": "forbid"
                    },
                    {
                        "selector": [
                            "classProperty",
                            "objectLiteralProperty",
                            "typeProperty",
                            "classMethod",
                            "objectLiteralMethod",
                            "typeMethod",
                            "accessor",
                            "enumMember"
                        ],
                        "format": null,
                        "modifiers": ["requiresQuotes"]
                    }
                ],
                // in favor of @typescript-eslint/no-array-constructor
                "no-array-constructor": "off",
                "@typescript-eslint/no-array-constructor": "error",
                "@typescript-eslint/no-base-to-string": "error",
                "@typescript-eslint/no-confusing-non-null-assertion": "error",
                "@typescript-eslint/no-confusing-void-expression": [
                    "error",
                    {
                        "ignoreArrowShorthand": true
                    }
                ],
                "@typescript-eslint/no-dupe-class-members": "error",
                "@typescript-eslint/no-dynamic-delete": "error",
                "@typescript-eslint/no-empty-function": [
                    "error",
                    {
                        "allow": [
                            "constructors",
                            "arrowFunctions",
                            "private-constructors",
                            "protected-constructors",
                            "decoratedFunctions"
                        ]
                    }
                ],
                "@typescript-eslint/no-empty-interface": [
                    "error",
                    {
                        "allowSingleExtends": false
                    }
                ],
                "@typescript-eslint/no-explicit-any": [
                    "error",
                    {
                        "ignoreRestArgs": false
                    }
                ],
                "@typescript-eslint/no-extra-non-null-assertion": "error",
                "@typescript-eslint/no-extra-parens": [
                    "error",
                    "functions"
                ],
                "@typescript-eslint/no-extra-semi": "error",
                "@typescript-eslint/no-extraneous-class": [
                    "error",
                    {
                        "allowConstructorOnly": false,
                        "allowEmpty": false,
                        "allowStaticOnly": true,
                        "allowWithDecorator": true
                    }
                ],
                "@typescript-eslint/no-floating-promises": [
                    "error",
                    {
                        "ignoreVoid": false,
                        "ignoreIIFE": false
                    }
                ],
                "@typescript-eslint/no-for-in-array": "error",
                "@typescript-eslint/no-implied-eval": "error",
                "@typescript-eslint/no-inferrable-types": "off",
                // in favor of @typescript-eslint/no-invalid-this
                "no-invalid-this": "off",
                "@typescript-eslint/no-invalid-this": [
                    "error",
                    {
                        "capIsConstructor": false
                    }
                ],
                "@typescript-eslint/no-invalid-void-type": "error",
                "@typescript-eslint/no-loop-func": "error",
                "@typescript-eslint/no-loss-of-precision": "error",
                "@typescript-eslint/no-magic-numbers": "off",
                "@typescript-eslint/no-misused-new": "error",
                "@typescript-eslint/no-misused-promises": [
                    "error",
                    {
                        "checksVoidReturn": false,
                        "checksConditionals": true
                    }
                ],
                "@typescript-eslint/no-namespace": [
                    "error",
                    {
                        "allowDeclarations": false,
                        "allowDefinitionFiles": true
                    }
                ],
                "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
                "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
                "@typescript-eslint/no-non-null-assertion": "error",
                "@typescript-eslint/parameter-properties": [
                    "error",
                    {
                        "allow": [
                            "private readonly",
                            "protected readonly",
                            "public readonly"
                        ]
                    }
                ],
                // in favor of @typescript-eslint/no-redeclare
                "no-redeclare": "off",
                "@typescript-eslint/no-redeclare": [
                    "error",
                    {
                        "builtinGlobals": true,
                        "ignoreDeclarationMerge": true
                    }
                ],
                "@typescript-eslint/no-require-imports": "error",
                "@typescript-eslint/no-restricted-imports": "off",
                // in favor of @typescript-eslint/no-shadow
                "no-shadow": "off",
                "@typescript-eslint/no-shadow": "error",
                "@typescript-eslint/no-this-alias": [
                    "error",
                    {
                        "allowDestructuring": false,
                        "allowedNames": []
                    }
                ],
                "@typescript-eslint/no-throw-literal": "error",
                "@typescript-eslint/no-type-alias": [
                    "error",
                    {
                        "allowAliases": "always",
                        "allowCallbacks": "never",
                        "allowConditionalTypes": "never",
                        "allowConstructors": "never",
                        "allowGenerics": "always",
                        "allowLiterals": "always",
                        "allowMappedTypes": "always",
                        "allowTupleTypes": "always"
                    }
                ],
                "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
                "@typescript-eslint/no-unnecessary-condition": "off",
                "@typescript-eslint/no-unnecessary-qualifier": "error",
                "@typescript-eslint/no-unnecessary-type-arguments": "error",
                "@typescript-eslint/no-unnecessary-type-assertion": "error",
                "@typescript-eslint/no-unnecessary-type-constraint": "error",
                "@typescript-eslint/no-unsafe-argument": "error",
                "@typescript-eslint/no-unsafe-assignment": "error",
                "@typescript-eslint/no-unsafe-call": "error",
                "@typescript-eslint/no-unsafe-member-access": "error",
                "@typescript-eslint/no-unsafe-return": "error",
                "@typescript-eslint/no-unused-expressions": "error",
                // in favor of @typescript-eslint/no-unused-vars
                "no-unused-vars": "off",
                "@typescript-eslint/no-unused-vars": [
                    "error",
                    {
                        "args": "after-used",
                        "ignoreRestSiblings": true
                    }
                ],
                // in favor of @typescript-eslint/no-use-before-define
                "no-use-before-define": "off",
                "@typescript-eslint/no-use-before-define": [
                    "error",
                    {
                        "functions": true,
                        "classes": true,
                        "variables": true,
                        "enums": true,
                        "typedefs": true,
                        "ignoreTypeReferences": true
                    }
                ],
                // in favor of @typescript-eslint/no-useless-constructor
                "no-useless-constructor": "off",
                "@typescript-eslint/no-useless-constructor": "error",
                "@typescript-eslint/no-var-requires": "error",
                "@typescript-eslint/non-nullable-type-assertion-style": "error",
                "@typescript-eslint/object-curly-spacing": [
                    "error",
                    "always",
                    {
                        "arraysInObjects": true,
                        "objectsInObjects": true
                    }
                ],
                "@typescript-eslint/prefer-as-const": "error",
                "@typescript-eslint/prefer-enum-initializers": "error",
                "@typescript-eslint/prefer-for-of": "error",
                "@typescript-eslint/prefer-function-type": "error",
                "@typescript-eslint/prefer-includes": "error",
                "@typescript-eslint/prefer-literal-enum-member": "error",
                "@typescript-eslint/prefer-namespace-keyword": "error",
                "@typescript-eslint/prefer-nullish-coalescing": "off",
                "@typescript-eslint/prefer-optional-chain": "error",
                "@typescript-eslint/prefer-readonly-parameter-types": [
                    "off",
                    {
                        "checkParameterProperties": false
                    }
                ],
                "@typescript-eslint/prefer-readonly": "error",
                "@typescript-eslint/prefer-reduce-type-parameter": "error",
                "@typescript-eslint/prefer-regexp-exec": "error",
                "@typescript-eslint/prefer-return-this-type": "error",
                "@typescript-eslint/prefer-string-starts-ends-with": "error",
                "@typescript-eslint/prefer-ts-expect-error": "error",
                "@typescript-eslint/promise-function-async": "error",
                "@typescript-eslint/quotes": [
                    "error",
                    "single",
                    {
                        "avoidEscape": true,
                        "allowTemplateLiterals": true
                    }
                ],
                "@typescript-eslint/require-array-sort-compare": "error",
                // in favor of @typescript-eslint/require-await
                "require-await": "off",
                "@typescript-eslint/require-await": "error",
                "@typescript-eslint/restrict-plus-operands": [
                    "error",
                    {
                        "skipCompoundAssignments": false
                    }
                ],
                "@typescript-eslint/restrict-template-expressions": [
                    "error",
                    {
                        "allowNumber": true,
                        "allowBoolean": false,
                        "allowAny": false,
                        "allowNullish": true
                    }
                ],
                "@typescript-eslint/return-await": "error",
                "@typescript-eslint/semi": [
                    "error",
                    "always",
                    {
                        "omitLastInOneLineBlock": false
                    }
                ],
                "@typescript-eslint/sort-type-union-intersection-members": "off",
                "@typescript-eslint/space-before-function-paren": [
                    "error",
                    {
                        "anonymous": "ignore",
                        "named": "never",
                        "asyncArrow": "always"
                    }
                ],
                "@typescript-eslint/space-infix-ops": [
                    "error",
                    {
                        "int32Hint": false
                    }
                ],
                "@typescript-eslint/strict-boolean-expressions": [
                    "error",
                    {
                        "allowString": true,
                        "allowNumber": true,
                        "allowNullableObject": true,
                        "allowNullableBoolean": false,
                        "allowNullableString": true,
                        "allowNullableNumber": true,
                        "allowAny": true,
                        "allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing": true
                    }
                ],
                "@typescript-eslint/switch-exhaustiveness-check": "error",
                "@typescript-eslint/triple-slash-reference": [
                    "error",
                    {
                        "path": "never",
                        "types": "never",
                        "lib": "never"
                    }
                ],
                "@typescript-eslint/type-annotation-spacing": [
                    "error",
                    {
                        "before": false,
                        "after": true,
                        "overrides": {
                            "arrow": {
                                "before": true,
                                "after": true
                            }
                        }
                    }
                ],
                "@typescript-eslint/typedef": [
                    "error",
                    {
                        "arrayDestructuring": false,
                        "arrowParameter": false,
                        "memberVariableDeclaration": true,
                        "objectDestructuring": false,
                        "parameter": true,
                        "propertyDeclaration": true,
                        "variableDeclaration": true,
                        "variableDeclarationIgnoreFunction": true
                    }
                ],
                "@typescript-eslint/unbound-method": [
                    "error",
                    {
                        "ignoreStatic": true
                    }
                ],
                "@typescript-eslint/unified-signatures": "error"
            }
        }
    ]
};
