# eslint-config-sonar

eslint configuration to ensure [SonarJS rules](https://www.sonarsource.com/products/codeanalyzers/sonarjs/rules.html) are met, following the ['Sonar way' preset](https://sonarcloud.io/organizations/opensource/quality_profiles/show?language=js&name=Sonar+way
).

## Usage

`npm install eslint-config-sonar --save-dev`

Then add the following to your .eslintrc:

```
{
  "extends": [
    "sonar",
  ]
}
```

## In Development

This package is in development. The intention is for it to eventually include:

- Documentation of all SonarJS rules and their equivalent in eslint.
- Ports of any rules not covered by existing eslint rules.
- eslint configs for [Sonar way](https://sonarcloud.io/organizations/opensource/quality_profiles/show?language=js&name=Sonar+way) (eslint-config-sonar) and [Sonar way Recommended](https://sonarcloud.io/organizations/opensource/quality_profiles/show?language=js&name=Sonar+way+Recommended) (eslint-config-sonar:recommended) [profiles](https://docs.sonarqube.org/display/PLUG/SonarJS).

PRs are welcomed and I'd also encourage @SonarSource to take over ownership of this.

## Supported rules

Initially I am only aiming to include those listed in the Sonar way preset, rather than every rule supported by SonarJS, purely because this is the preset I'm currently using.

Where I have found an equivalent in eslint, it has been listed here and included in the config.

Where no equivalent is listed, it is listed in the next section and has not yet been implemented in the eslint config.

### [Bugs](https://www.sonarsource.com/products/codeanalyzers/sonarjs/rules.html#Bug_Detection)

#### "delete" should be used only with object properties
`no-delete-var`

eslint throws a parsing error in strict mode.

#### "NaN" should not be used in comparisons
`use-isnan`

#### "super()" should be invoked appropriately
`constructor-super`
`no-this-before-super`

#### "Symbol" should not be used as a constructor
`no-new-symbol`

#### "with" statements should not be used
`no-with`

eslint throws a parsing error in strict mode.

#### "yield" expressions should not be used outside generators

eslint throws a parsing error:

> Parsing error: yield is a reserved word (Fatal)

#### A "for" loop update clause should move the counter in the right direction
`for-direction`

#### All branches in a conditional structure should not have exactly the same implementation
`sonarjs/no-all-duplicated-branches`

#### Attempts should not be made to update "const" variables
`no-const-assign`

#### Bitwise operators should not be used in boolean contexts
`no-bitwise`

#### Callbacks of array methods should have return statements
`array-callback-return`

#### Collection elements should not be replaced unconditionally
`sonarjs/no-element-overwrite`

#### Comma and logical OR operators should not be used in switch cases
Partially covered by `no-sequences`.

#### Destructuring patterns should not be empty
`no-empty-pattern`

#### Function argument names should be unique
`no-dupe-args`

eslint throws a parsing error in strict mode.

> Parsing error: Argument name clash in strict mode (Fatal)

#### Function calls should not pass extra arguments
`sonarjs/no-extra-arguments`

#### Generators should "yield" something
`require-yield`

#### Identical expressions should not be used on both sides of a binary operator
Partially covered by `no-self-compare`.
`sonarjs/no-identical-expressions`

#### Jump statements should not be followed by dead code
`no-unreachable`

#### Jump statements should not occur in "finally" blocks
`no-unsafe-finally`

#### Loops should not be infinite
Partially covered by `no-unreachable`.

#### Non-empty statements should change control flow or have at least one side-effect
`no-unused-expressions`

#### Non-existent operators '=+', '=-' and '=!' should not be used
`space-unary-ops`
`space-infix-ops`

#### Property names should not be duplicated within a class or object literal
`no-dupe-keys`

#### Related "if/else if" statements and "cases" in a "switch" should not have the same condition

`sonarjs/no-identical-conditions`

#### Results of "in" and "instanceof" should be negated rather than operands
`no-unsafe-negation`

#### Special identifiers should not be bound or assigned

eslint throws a parsing error in strict mode:
> Parsing error: eval is a reserved word in strict mode (Fatal)

#### The output of functions that don't return anything should not be used
`sonarjs/no-use-of-empty-return-value`

#### Variables should not be self-assigned
`no-self-assign`

### [Code smells](https://www.sonarsource.com/products/codeanalyzers/sonarjs/rules.html#Code_Smell_Detection)

#### "catch" clauses should do more than rethrow
`sonarjs/no-useless-catch`

#### "future reserved words" should not be used as identifiers
All of these are picked up as parsing errors when in strict mode.

#### "switch" statements should have at least 3 "case" clauses

`sonarjs/no-small-switch`

#### "switch" statements should not contain non-case labels
`no-restricted-syntax`
`no-labels`

#### "switch" statements should not have too many "case" clauses
`sonarjs/max-switch-cases`

#### A "while" loop should be used instead of a "for" loop

`sonarjs/prefer-while`

#### Boolean checks should not be inverted
`sonarjs/no-inverted-boolean-check`

#### Boolean expressions should not be gratuitous
Partial coverage from `no-constant-condition`

#### Comma operator should not be used
`no-sequences`

#### Dead stores should be removed
`no-unused-vars`

#### Default export names and file names should match
`filenames/match-exported`

#### Extra semicolons should be removed
`no-extra-semi`

#### Function call arguments should not start on new lines
`no-unexpected-multiline`

#### Functions should not be called both with and without "new"
Partial coverage with `new-cap`.

#### Functions should not be defined inside loops
`no-loop-func`

#### Jump statements should not be used unconditionally
Partial coverage with `no-continue`.

#### Labels should not be used
`no-restricted-syntax`
`no-labels`

#### Multiline string literals should not be used
`no-multi-str`

#### Nested blocks of code should not be left empty
`no-empty`

#### Octal values should not be used
eslint will throw a parsing error (Invalid number)

#### Return of boolean expressions should not be wrapped into an "if-then-else" statement

`sonarjs/prefer-single-boolean-return`

#### Switch cases should end with an unconditional "break" statement

`no-fallthrough`

#### Two branches in a conditional structure should not have exactly the same implementation

`sonarjs/no-duplicated-branches`

#### Unused local variables and functions should be removed
`no-unused-vars`

#### Variables and functions should not be redeclared
`no-redeclare`

#### Variables should be declared explicitly
`no-undef`

#### Wrapper objects should not be used for primitive types
`no-new-wrappers`

### [Vulnerabilities](https://www.sonarsource.com/products/codeanalyzers/sonarjs/rules.html#Vulnerability_Detection)

#### "alert(...)" should not be used
`no-alert`

#### Cross-document messaging domains should be carefully restricted
`no-wildcard-postmessage` from `eslint-plugin-no-wildcard-postmessage`

#### Debugger statements should not be used
`no-debugger`

## Not yet supported

Please open an issue if you know of an equivalent eslint rule.

### Bugs
#### "in" should not be used with primitive types
#### "new" operators should be used with functions
#### Calls should not be made to non-callable values
#### Collection sizes and array length comparisons should make sense
#### Conditionally executed blocks should be reachable
#### Errors should not be created without being thrown
#### Properties of variables with "null" or "undefined" values should not be accessed
#### Return values from functions without side effects should not be ignored
#### Setters should not return values
#### Strict equality operators should not be used with dissimilar types
#### Values should not be uselessly incremented

### Code smells

#### "delete" should not be used on arrays
#### "indexOf" checks should not be for positive numbers
#### A conditionally executed single line should be denoted by indentation
#### Arguments to built-in functions should match documented types
#### Array indexes should be numeric
#### Assignments should not be redundant
#### Collection and array contents should be used
#### Conditionals should start on new lines
#### Equality operators should not be used in "for" loop termination conditions
#### Function parameters with default values should be last
#### Function returns should not be invariant
#### Multiline blocks should be enclosed in curly braces
#### Redundant pairs of parentheses should be removed
#### The global "this" object should not be used
#### Unary operators "+" and "-" should not be used with objects
#### Unnecessary imports should be removed
