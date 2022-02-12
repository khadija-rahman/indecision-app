### Indicision App


to start live server install yarn global live-server

to debug and run different files within the project run: 

 es5 jsx render of 
 `var template = <p>hello world </p>` 

es6 jsx render of var template = React.createElement(p, null, 'hello world') 
## set-up
yarn global add babel-cli@6.24.1
install preset react and env
yarn init 
yarn add babel-preset-react@6.24.1 babel-preset-e
nv@1.5.2

babel src/app.js --out-file=public/scripts/app.js
--presets=env,react --watch

## Reccomended VS code extension 
babel es6/es7
path intellisense

you can not render an object

### Conditional Rendering
react does render any element when value is undefined null or boolean 

in es6 arrow function they no longer bind their own this value instead they just use the 'this' value of the contect they were created in- so it uses its parents 'this' value

however you do not want to use it with methods 


when we use a regular function and we define it, the 'this' keyword is bound to that object and allows you to access it's value 


