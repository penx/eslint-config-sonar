# eslint-config-sonar

eslint configuration to ensure [SonarJS rules](https://www.sonarsource.com/products/codeanalyzers/sonarjs/rules.html) are met, following the ['Sonar Way' preset](https://sonarcloud.io/organizations/opensource/quality_profiles/show?language=js&name=Sonar+way
).

## Included rules

## Rules that need inclusion (TODO:)

### [Bugs](https://www.sonarsource.com/products/codeanalyzers/sonarjs/rules.html#Bug_Detection)

#### "Array.reverse" should not be used misleadingly
#### "delete" should be used only with object properties
#### "in" should not be used with primitive types
#### "NaN" should not be used in comparisons
#### "new" operators should be used with functions
#### "super()" should be invoked appropriately
#### "Symbol" should not be used as a constructor
#### "with" statements should not be used
#### "yield" expressions should not be used outside generators
#### A "for" loop update clause should move the counter in the right direction
#### All branches in a conditional structure should not have exactly the same implementation
#### Attempts should not be made to update "const" variables
#### Bitwise operators should not be used in boolean contexts
#### Callbacks of array methods should have return statements
#### Calls should not be made to non-callable values
#### Comma and logical OR operators should not be used in switch cases
#### Conditionally executed blocks should be reachable
#### Destructuring patterns should not be empty
#### Errors should not be created without being thrown
#### Function argument names should be unique
#### Function calls should not pass extra arguments
#### Generators should "yield" something
#### Identical expressions should not be used on both sides of a binary operator
#### Jump statements should not be followed by other statements
#### Jump statements should not occur in "finally" blocks
#### Loops should not be infinite
#### Multiline blocks should be enclosed in curly braces
#### Non-empty statements should change control flow or have at least one side-effect
#### Non-existent operators '=+', '=-' and '=!' should not be used
#### Properties of variables with "null" or "undefined" values should not be accessed
#### Property names should not be duplicated within a class or object literal
#### Related "if/else if" statements and "cases" in a "switch" should not have the same condition
#### Results of "in" and "instanceof" should be negated rather than operands
#### Return values from functions without side effects should not be ignored
#### Setters should not return values
#### Special identifiers should not be bound or assigned
#### Strict equality operators should not be used with dissimilar types
#### The output of functions that don't return anything should not be used
#### Values should not be uselessly incremented
#### Variables should not be self-assigned

### [Code smells](https://www.sonarsource.com/products/codeanalyzers/sonarjs/rules.html#Code_Smell_Detection)

#### "delete" should not be used on arrays
#### "future reserved words" should not be used as identifiers
#### "indexOf" checks should not be for positive numbers
#### "switch" statements should have at least 3 "case" clauses
#### "switch" statements should not contain non-case labels
#### A "while" loop should be used instead of a "for" loop
#### Arguments to built-in functions should match documented types
#### Array indexes should be numeric
#### Assignments should not be redundant
#### Boolean expressions should not be gratuitous
#### Collection and array contents should be used
#### Comma operator should not be used
#### Conditionals should start on new lines
#### Dead stores should be removed
#### Default export names and file names should match
#### Equality operators should not be used in "for" loop termination conditions
#### Extra semicolons should be removed
#### Function call arguments should not start on new lines
#### Function parameters with default values should be last
#### Function returns should not be invariant
#### Functions should not be called both with and without "new"
#### Functions should not be defined inside loops
#### Jump statements should not be used unconditionally
#### Labels should not be used
#### Multiline string literals should not be used
#### Nested blocks of code should not be left empty
#### Octal values should not be used
#### Redundant pairs of parentheses should be removed
#### Return of boolean expressions should not be wrapped into an "if-then-else" statement
#### Switch cases should end with an unconditional "break" statement
#### The global "this" object should not be used
#### Two branches in a conditional structure should not have exactly the same implementation
#### Unary operators "+" and "-" should not be used with objects
#### Unused local variables and functions should be removed
#### Variables and functions should not be redeclared
#### Variables should be declared explicitly
#### Wrapper objects should not be used for primitive types

### [Vulnerabilities](https://www.sonarsource.com/products/codeanalyzers/sonarjs/rules.html#Vulnerability_Detection)

#### "alert(...)" should not be used
#### Code should not be dynamically injected and executed
#### Cross-document messaging domains should be carefully restricted
#### Debugger statements should not be used
#### Function constructors should not be used
