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
