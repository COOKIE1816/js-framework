## Let's get started! 
### Adding framework to your website
To use framework on your website, you must add it. Do it by adding this to your html file:
```html
<script src="https://github.com/COOKIE1816/js-framework/blob/main/versions/v1.02/nfjkwJs_v-*version*.js"/>
```
But you must replace ```*version*``` by version of framework (etc. 1.02). So if you want to use 1.02. version add this to your html file:
```html
<script src="https://github.com/COOKIE1816/js-framework/blob/main/versions/v1.02/nfjkwJs_v-1.02.js"/>
```
1.02 versions is recommended to use. 
### Setting up the framework
You must add this at start of your script on index.js;

```js
nfjkwJs.setup();
nfjkwJs.config[0] = true;
nfjkwJs.startUp();
```
On other pages, use ```false``` instead of ```true``` on 2.line.
Run index.html. If everything works fine, you will see this:
<img src="https://github.com/COOKIE1816/js-framework/blob/main/framework-APIs/.media/image191.png">
## Dynamic variables
NFJKW.js has a "dynamic variables". They are the same as variables but you can use variable's string as an name easily without writing extra scripts to document. 
### How to declare a variable
Variables can be declared using ```nfjwJs.dynamicVariable.declare("x","y")```
X symbolize variable name. You can use variable content or enter a string. 
Y symbolize dynamic variable's string
```js
//Examples:
var x = "myVariable";
nfjwJs.dynamicVariable.declare(x,"This is my dynamic variable");

nfjkwJs.dynamicVariable.declare("myVariable02","This is my dynamic variable number two!"); //btw. did you join my server? 
```
If you enter a number to X, don't worry.. NFJKW.js will automatically convert number to string
#### Rules for declaring a dynamic variable
* Can not start by a number
* Can contain only alphanumeric characters (no special characters) and "_"
* Can not contain space bars

### How to get variable content
The fact, getting variable content can be useful is true. Do it by typing:
```js
nfjkwJs.dynamicVariable.getContext(X)
```
This will return dynamic variable content. X represents variable name here. 
So there is an example:
```js
alert(nfjkwJs.dynamicVariable.getContext("myVariable"));
```
## Dynamic functions
Same as Dynamic variables but declares JavaScript functions instead of variables. 
You can even run script directly without declaring it. Like JavaScript console. 
### Running scripts directly
You can run your script directly. Just use this:
```js
nfjkwJs.dynamicFunction.run("console.log(\"hello world\")");
```
### Loading scripts from URLs and running them directly
```yellow
ATTENTION: LOADING SCRIPTS OF SOME PEOPLE CAN BE ILLEGAL SO PLEASE READ LICENSES.
BROKING THEIR RIGHTS IS NOT MY FAULT!
```
Hope you understand attention. Now we're going to show you how to load function from URL addresses and running them directly. 
So this causes running directly scripts loaded from world wide web:
```js
nfjkwJs.dynamicFunction.runFromUrl(x);
```
So x represents script's URL address. So for example, if we want to run index.js on example.com, we use this:
```js
nfjkwJs.dynamicFunction.runFromUrl("https://example.com/imdex.js");
```
### Declaring a script
```js
nfjkwJs.dynamicFunction.create(x,y);
```
Here,	
x represents function name and y represents script
Example:
```js
nfjkwJs.dynamicFunction.create("myFunction","console.log(\"This is my new function\");");
```

### Running a declared script
```js
nfjkJs.dynamicFunction.execute("myFunction");
```
## Simulating logic gates
You can also simulate [logic gates](http://www.ee.surrey.ac.uk/Projects/CAL/digital-logic/gatesfunc/index.html).
Syntax:
```js
nfjkwJs.logic.simulateGates(gate,a,b)
```
Gate represents logic gate type
A represents pin "A" of logic gate
B represents pin "B" of logic gate
### How to use that
It returns false(0) or true(1)
Use false instead of 0
And true instead of 1
### which logic gates can be simulated
* AND
* OR
* NOT

## Setting framework to save logged events to a variable
You can set NFJKW.js to save events logged with ```nfjkwJs.logger.catchTo()``` method. Just use this:
```js
nfjkwJs.logger.catchTo(x);
```
This sets variable where logged events will be written. 
x represents variable name (in string)
```js
//here's an example
nfjkwJs.logger.catchTo("myVariable");
```
## Logging events
You can log events using this:
```js
nfjkwJs.logger.print(y,x);
```
x represents a string which will be outputed to set variable.
y represents status. E is for error and T is for normal text
You have an example here:

```js
nfjkwJs.logger.print("T","Hello world!");
```
This will also output x to console by defaults. 
To disable outputing x to console type this:
```js
var nfjkwJs.logger.consoleOutput = false;
```
Or you can enable it again using
```js
var nfjkwJs.logger.consoleOutput = true;
```
## Working with time
Using ```nfjkwJs.time```
### Getting current time
```js
nfjkwJs.time.getCurrent();
```
Output will be automatically saved to nfjkw variable. 
### Getting current time and saving it to variable
```js
nfjkwJs.time.getSaved(format);
```
format represents [time format](https://cookie1816.github.io/js-framework/help/timeFormats)
