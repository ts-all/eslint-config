import type { Linter } from 'eslint';

const namingConventionEntry: Linter.RuleEntry = [
    'error',
    {
        selector: 'default',
        format: [
            'strictCamelCase',
        ],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
    },
    {
        selector: 'variableLike',
        format: [
            'strictCamelCase',
            'UPPER_CASE',
        ],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'forbid',
    },
    {
        selector: 'memberLike',
        format: [
            'strictCamelCase',
        ],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'forbid',
    },
    {
        selector: 'typeLike',
        format: [
            'StrictPascalCase',
        ],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
    },
    {
        selector: 'method',
        format: [
            'strictCamelCase',
        ],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
    },
    {
        selector: 'enumMember',
        format: [
            'strictCamelCase',
            'StrictPascalCase',
            'UPPER_CASE',
        ],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
    },
    {
        selector: [
            'classProperty',
            'objectLiteralProperty',
            'typeProperty',
            'classMethod',
            'objectLiteralMethod',
            'typeMethod',
            'accessor',
            'enumMember',
        ],
        format: null,
        modifiers: [
            'requiresQuotes',
        ],
    },
];

/** https://typescript-eslint.io/rules */
export const tseslintRules: Linter.RulesRecord = Object.freeze<Linter.RulesRecord>({
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': ['error', { 'default': 'generic' }],
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/ban-tslint-comment': 'error',
    '@typescript-eslint/class-literal-property-style': ['error', 'fields'],
    '@typescript-eslint/class-methods-use-this': 'off',
    '@typescript-eslint/consistent-generic-constructors': 'error',
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
    '@typescript-eslint/consistent-return': ['error', { treatUndefinedAsUnspecified: false }],
    '@typescript-eslint/consistent-type-assertions': ['error', { arrayLiteralTypeAssertions: 'allow', assertionStyle: 'as', objectLiteralTypeAssertions: 'allow' }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': ['error', { disallowTypeAnnotations: true, fixStyle: 'inline-type-imports', prefer: 'type-imports' }],
    '@typescript-eslint/default-param-last': 'error',
    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true, allowTypedFunctionExpressions: true, allowHigherOrderFunctions: true, allowDirectConstAssertionInArrowFunctions: true, allowConciseArrowFunctionExpressionsStartingWithVoid: false }],
    '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'explicit', overrides: { accessors: 'explicit', constructors: 'explicit', methods: 'explicit', properties: 'explicit', parameterProperties: 'explicit' } }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/init-declarations': 'off',
    '@typescript-eslint/max-params': ['error', { max: 9 }],
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/method-signature-style': 'off',
    '@typescript-eslint/naming-convention': namingConventionEntry,
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-array-delete': 'error',
    '@typescript-eslint/no-base-to-string': 'error',
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-confusing-void-expression': ['error', { ignoreArrowShorthand: true, ignoreVoidOperator: false, ignoreVoidReturningFunctions: false }],
    '@typescript-eslint/no-deprecated': 'error',
    '@typescript-eslint/no-dupe-class-members': 'error',
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    '@typescript-eslint/no-duplicate-type-constituents': 'error',
    '@typescript-eslint/no-dynamic-delete': 'error',
    '@typescript-eslint/no-empty-function': ['error', { allow: ['constructors', 'arrowFunctions', 'private-constructors', 'protected-constructors', 'decoratedFunctions'] }],
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-empty-object-type': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-extraneous-class': ['error', { allowConstructorOnly: false, allowEmpty: false, allowStaticOnly: true, allowWithDecorator: true }],
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-import-type-side-effects': 'error',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-invalid-this': 'error',
    '@typescript-eslint/no-invalid-void-type': 'error',
    '@typescript-eslint/no-loop-func': 'error',
    '@typescript-eslint/no-loss-of-precision': 'error',
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/no-meaningless-void-operator': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-misused-promises': ['error', { checksConditionals: true, checksSpreads: true, checksVoidReturn: false }],
    '@typescript-eslint/no-misused-spread': 'off',
    '@typescript-eslint/no-mixed-enums': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/no-redundant-type-constituents': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-restricted-imports': 'off',
    '@typescript-eslint/no-restricted-types': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-this-alias': ['error', { allowDestructuring: false, allowedNames: [] }],
    '@typescript-eslint/no-type-alias': 'off',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unnecessary-condition': ['error', { allowConstantLoopConditions: 'only-allowed-literals', checkTypePredicates: false }],
    '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'error',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unnecessary-template-expression': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',
    '@typescript-eslint/no-unnecessary-type-parameters': 'off',
    '@typescript-eslint/no-unsafe-argument': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'error',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-declaration-merging': 'error',
    '@typescript-eslint/no-unsafe-enum-comparison': 'off',
    '@typescript-eslint/no-unsafe-function-type': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/no-unsafe-return': 'error',
    '@typescript-eslint/no-unsafe-type-assertion': 'off',
    '@typescript-eslint/no-unsafe-unary-minus': 'error',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { args: 'after-used', ignoreRestSiblings: true }],
    '@typescript-eslint/no-use-before-define': ['error', { functions: true, classes: true, variables: true, enums: true, typedefs: true, ignoreTypeReferences: true }],
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-useless-empty-export': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/no-wrapper-object-types': 'error',
    '@typescript-eslint/non-nullable-type-assertion-style': 'error',
    '@typescript-eslint/only-throw-error': 'error',
    '@typescript-eslint/parameter-properties': ['error', { allow: ['private readonly', 'protected readonly', 'public readonly'] }],
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/prefer-destructuring': ['error', { array: false, object: true }, { enforceForRenamedProperties: false }],
    '@typescript-eslint/prefer-enum-initializers': 'error',
    '@typescript-eslint/prefer-find': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/prefer-regexp-exec': 'error',
    '@typescript-eslint/prefer-return-this-type': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/related-getter-setter-pairs': 'error',
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/restrict-template-expressions': ['error', { allowAny: false, allowBoolean: false, allowNullish: true, allowNumber: true }],
    '@typescript-eslint/return-await': 'error',
    '@typescript-eslint/sort-type-constituents': 'off',
    '@typescript-eslint/strict-boolean-expressions': ['off', { allowAny: true, allowNullableBoolean: true, allowNullableEnum: true, allowNullableNumber: true, allowNullableObject: true, allowNullableString: true, allowNumber: true, allowString: true }],
    '@typescript-eslint/switch-exhaustiveness-check': ['error', { allowDefaultCaseForExhaustiveSwitch: true, considerDefaultExhaustiveForUnions: true }],
    '@typescript-eslint/triple-slash-reference': ['error', { lib: 'never', path: 'never', types: 'never' }],
    '@typescript-eslint/typedef': ['error', { arrayDestructuring: false, arrowParameter: false, memberVariableDeclaration: true, objectDestructuring: false, parameter: true, propertyDeclaration: true, variableDeclaration: true, variableDeclarationIgnoreFunction: true }],
    '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
    '@typescript-eslint/unified-signatures': 'error',
    '@typescript-eslint/use-unknown-in-catch-callback-variable': 'off',
} satisfies Linter.RulesRecord);
