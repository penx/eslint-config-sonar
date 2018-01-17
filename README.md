# eslint-config-sonar

eslint configuration to ensure [SonarJS rules](https://www.sonarsource.com/products/codeanalyzers/sonarjs/rules.html) are met


## Included rules



## Rules that need inclusion (TODO:)

### [Bugs](https://www.sonarsource.com/products/codeanalyzers/sonarjs/rules.html#Bug_Detection)

#### "yield" expressions should not be used outside generators
#### Callbacks of array methods should have return statements
#### Loops should not be infinite
#### "Symbol" should not be used as a constructor
#### "in" should not be used with primitive types
#### "super()" should be invoked appropriately
#### Function calls should not pass extra arguments
#### Results of "in" and "instanceof" should be negated rather than operands
#### "NaN" should not be used in comparisons
#### "new" operators should be used with functions
#### A "for" loop update clause should move the counter in the right direction
#### All branches in a conditional structure should not have exactly the same implementation
#### Attempts should not be made to update "const" variables
#### Bitwise operators should not be used in boolean contexts
#### Calls should not be made to non-callable values
#### Comma and logical OR operators should not be used in switch cases
#### Conditionally executed blocks should be reachable
#### Destructuring patterns should not be empty
#### Function argument names should be unique
#### Generators should "yield" something
#### Identical expressions should not be used on both sides of a binary operator
#### Jump statements should not be followed by other statements
#### Jump statements should not occur in "finally" blocks
#### Non-empty statements should change control flow or have at least one side-effect
#### Non-existent operators '=+', '=-' and '=!' should not be used
#### Parameters should be passed in the correct order
#### Properties of variables with "null" or "undefined" values should not be accessed
#### Property names should not be duplicated within a class or object literal
#### Related "if/else if" statements and "cases" in a "switch" should not have the same condition
#### Return values from functions without side effects should not be ignored
#### Setters should not return values
#### Special identifiers should not be bound or assigned
#### Strict equality operators should not be used with dissimilar types
#### The output of functions that don't return anything should not be used
#### Values should not be uselessly incremented
#### Variables should not be self-assigned
#### "delete" should be used only with object properties
#### "with" statements should not be used
#### Non-existent variables should not be referenced
#### The "changed" property should not be manipulated directly
#### "defaults" should be a function when objects or arrays are used
#### "for...in" loops should filter properties before acting on them
#### Built-in objects should not be overridden
#### Non-existent properties should not be read
#### Objects should not be created to be dropped immediately without being used
#### Results of operations on strings should not be ignored
#### Selection results should be tested with "length"
#### Short-circuit logic should be used to prevent null pointer dereferences in conditionals
#### Template literal placeholder syntax should not be used in regular strings
#### Useless "if(true) {...}" and "if(false){...}" blocks should be removed
#### Function declarations should not be made within blocks
#### Function parameters, caught exceptions and foreach variables should not be reassigned
#### Named function expressions should not be used
#### The base should be provided to "parseInt"
#### The names of model properties should not contain spaces
#### Trailing commas should not be used
Though this seems to conflict with "Trailing commas should be used" in Code smells.

### [Code smells](https://www.sonarsource.com/products/codeanalyzers/sonarjs/rules.html#Code_Smell_Detection)

#### "switch" statements should not contain non-case labels
#### Function returns should not be invariant
#### Octal values should not be used
#### Switch cases should end with an unconditional "break" statement
#### Variables should be declared explicitly
#### "for" loop increment clauses should modify the loops' counters
#### Cognitive Complexity of functions should not be too high
#### Loop counters should not be assigned to from within the loop body
#### Source files should not have any duplicated blocks
#### "delete" should not be used on arrays
#### "indexOf" checks should not be for positive numbers
#### Arguments to built-in functions should match documented types
#### Array indexes should be numeric
#### Assignments should not be made from within sub-expressions
#### Boolean expressions should not be gratuitous
#### Comma operator should not be used
#### Dead stores should be removed
#### Function parameters with default values should be last
#### Functions should not be called both with and without "new"
#### Functions should not be defined inside loops
#### Functions should not have too many parameters
#### Jump statements should not be used unconditionally
#### Labels should not be used
#### Multiline blocks should be enclosed in curly braces
#### Nested blocks of code should not be left empty
#### Only "while", "do" and "for" statements should be labelled
#### Redundant pairs of parentheses should be removed
#### Sections of code should not be "commented out"
#### Ternary operators should not be nested
#### Track uses of "FIXME" tags
#### Two branches in a conditional structure should not have exactly the same implementation
#### Variables and functions should not be redeclared
#### "switch" statements should have at least 3 "case" clauses
#### A "while" loop should be used instead of a "for" loop
#### Default export names and file names should match
#### Extra semicolons should be removed
#### Function call arguments should not start on new lines
#### Local Variables should not be declared and then immediately returned or thrown
#### Multiline string literals should not be used
#### Return of boolean expressions should not be wrapped into an "if-then-else" statement
#### Unused local variables and functions should be removed
#### Wrapper objects should not be used for primitive types
#### Track uses of "TODO" tags
#### "future reserved words" should not be used as identifiers
#### Default parameters should not cause side effects
#### Failed unit tests should be fixed
#### Local variables should not shadow "undefined"
#### Track lack of copyright and license headers
#### Variables should be declared before they are used
#### "if ... else if" constructs should end with "else" clauses
#### "strict" mode should be used with caution
#### "switch" statements should end with "default" clauses
#### "void" should not be used
#### Branches should have sufficient coverage by unit tests
#### Class methods should be used instead of "prototype" assignments
#### Control flow statements "if", "for", "while", "switch" and "try" should not be nested too deeply
#### Control structures should use curly braces
#### Equality operators should not be used in "for" loop termination conditions
#### Expressions should not be too complex
#### Functions should not be empty
#### Functions should not be too complex
#### Internet Explorer's conditional comments should not be used
#### Lines should have sufficient coverage by unit tests
#### Unchanged variables should be marked "const"
#### Variables should be declared with "let" or "const"
#### Variables should not be shadowed
#### Wildcard imports should not be used
#### "===" and "!==" should be used instead of "==" and "!="
#### "[type=...]" should be used to select elements by type
#### "arguments" should not be accessed directly
#### "arguments.caller" and "arguments.callee" should not be used
#### "find" should be used to select the children of an element known by id
#### Arithmetic operations should not result in "NaN"
#### Arithmetic operators should only have numbers as operands
#### Avoid doing assignments in the condition part of if/while/for statements
#### Collapsible "if" statements should be merged
#### Comparison operators should not be used with strings
#### Deprecated jQuery methods should not be used
#### Element type selectors should not be used with class selectors
#### Files should not have too many lines of code
#### Functions should always return the same type
#### Functions should not have too many lines of code
#### Functions should use "return" consistently
#### Increment (++) and decrement (--) operators should not be used in a method call or mixed with other operators in an expression
#### JavaScript parser failure
#### Lines should not be too long
#### Property getters and setters should come in pairs
#### Selections should be stored
#### Statements should be on separate lines
#### The ternary operator should not be used
#### Universal selectors should not be used
#### Unused function parameters should be removed
#### Values not convertible to numbers should not be used in numeric comparisons
#### Variables and functions should not be declared in the global scope
#### Variables should be defined in the blocks where they are used
#### "continue" should not be used
#### "import" should be used to include external code
#### "undefined" should not be assigned
#### An open curly brace should be located at the end of a line
#### Array constructors should not be used
#### Boolean literals should not be redundant
#### Braces and parentheses should be used consistently with arrow functions
#### Comments should not be located at the end of lines of code
#### Destructuring syntax should be used for assignments
#### Files should contain an empty newline at the end
#### Function and method names should comply with a naming convention
#### HTML-style comments should not be used
#### JQuery cache variables should comply with a convention name
#### Lines should not end with trailing whitespaces
#### Loops should not contain more than a single "break" or "continue" statement
#### Object literal shorthand syntax should be used
#### Shorthand object properties should be grouped at the beginning or end of an object declaration
#### Single quotes should be used for string literals
#### Skipped unit tests should be either removed or fixed
#### Statements should end with semicolons
#### Strings and non-strings should not be added
#### Tabulation characters should not be used
#### Template strings should be used instead of concatenation
#### The global "this" object should not be used
#### Track instances of below-threshold comment line density
#### Trailing commas should be used
Though this seems to conflict with "Trailing commas should not be used" in Bugs.

#### Unary operators "+" and "-" should not be used with objects

### [Vulnerabilities](https://www.sonarsource.com/products/codeanalyzers/sonarjs/rules.html#Vulnerability_Detection)

#### Code should not be dynamically injected and executed
#### Cross-document messaging domains should be carefully restricted
#### Function constructors should not be used
#### "alert(...)" should not be used
#### Debugger statements should not be used
#### Web SQL databases should not be used
#### Local storage should not be used
#### Untrusted content should not be included
#### Console logging should not be used
