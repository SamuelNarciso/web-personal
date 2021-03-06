---
title: Aprende a depurar c贸digo JavaScript con Chrome DevTools
tags: [ herramientas, javascript, principiante]
date: 2022-01-04T18:09:14.101Z
path: blog/aprende-a-depurar-codigo-javascript-con-chrome-dev-tools
coverCard: ./coverCardaprende-a-depurar-codigo-javascript.png
coverPage: ./coverPageaprende-a-depurar-codigo-javascript.png
excerpt: La depuraci贸n de c贸digo es una de las partes fundamentales de programar, es por eso que veo necesario aprender a utilizar las herramientas de desarrollador o DevTools que nos proporciona Chrome, para agilizar esta tarea.

---
### Introducci贸n 馃
La depuraci贸n de c贸digo es una de las partes fundamentales de programar, cuando programo por largas horas dedico m谩s tiempo a corregir errores que escribiendo lineas de c贸digo, pero muchas veces la forma en la que ubico los errores es mediante `console.log()` , la cual es una herramienta 煤til, pero no siempre es la m谩s optima o precisa para la tarea de depuraci贸n o debugging.

Todos los exploradores actuales cuentan con una herramienta especializada en la funcion de depuracion y no muchos la usan, sin embargo en este post me propongo explicarte de forma sencilla, clara y mediante un ejemplo como es que la puedes utilizar y sacarle todo el jugo a tan poderosa herramienta.

*En este post estar茅 utilizando Chrome, sin embargo no dudo que el conocimiento se pueda aplicar a cualquier otro navegador.*



### Manos a la obra
Comencemos con un programa sencillo, pero si no quieres hacerlo puedes utilizar el [ejemplo de google](https://googlechrome.github.io/devtools-samples/debug-js/get-started).

```html
<!-- Index.html -->
<!DOCTYPE html>
<head> <title>suma</title> </head>
<body>
<h1>Depuracion de JavaScript</h1>
<label> Valor 1:
<input type="text" placeholder="123">
</label> <br />
<label> Valor 2:
<input type="text" placeholder="789">
</label> <br />
<button> Sumar valor 1 y valor 2 </button>
<p></p>
<script src="app.js"></script>
</body>
</html>

```

```js
// app.js
function onClick() {
  if (inputsAreEmpty()) {
    label.textContent = 'Error';
    return;  }
  updateLabel();
}
function inputsAreEmpty() {
  if (getNumber1()  '' || getNumber2()  '') {
    return true;
  } else { return false; }
}
function updateLabel() {
  var addend1 = getNumber1();
  var addend2 = getNumber2();
  var sum = addend1 + addend2;
  label.textContent = addend1 + ' + ' + addend2 + ' = ' + sum;
}
function getNumber1() {
  return inputs[0].value; }
function getNumber2() {
  return inputs[1].value; }
var inputs = document.querySelectorAll('input');
var label = document.querySelector('p');
var button = document.querySelector('button');
button.addEventListener('click', onClick);
```

![Figura 1. P谩gina de ejemplo.](figura1paginadeejemplo.png)



Coloca un par de n煤meros en cada campo, y presiona el bot贸n de sumar y observa lo que sucede.

![Figura 2. La suma de los valores deber铆a dar 3. ](figura2Lasumadelosvaloresdeber铆adar3.png)

Claramente tenemos un error 鈿? 
Este sencillo ejemplo nos ayudara.


#### Familiariz谩ndonos con el panel de herramientas de desarrollador

El panel de herramientas de desarrollador o tambi茅n conocido como las DevTools, es quien nos ayudar谩 a la hora de depurar c贸digo u otras acciones m谩s que deseemos realizar.

Para abrir este panel existen distintas formas.

**Con el mouse**
1. Click derecho sobre la p谩gina
2. Inspect | Inspeccionar

**Con combinacion de teclas**
- Mac: `Command + Option + I`
- Linux | Windows: `Control + Shift + I` 

No importa la forma en la que lo abras, abrir谩 algo similar a esto:

![Figura 3. Panel de recursos.](Pastedimage20220102191843.png)

Lo que nos interesa es el apartado superior que dice `sources | recursos`, lo presionamos y cambiara el contenido del panel.

*Cada panel interno puede modificar su tama帽o, inclusive la distribuci贸n de los mismos.*

![Figura 4. Secci贸n de recursos.](Pastedimage20220102193747.png)

Identifiquemos cada panel:

![Figura 5. Paneles numerados.](panleRecursosNumerado.png)

1. **Panel de archivos** muestra el servidor que corre la p谩gina, la carpeta raiz y  los archivos HTML, CSS y JavaScript y otros m谩s incluidos en la P谩gina que estemos viendo.
2. **Panel del editor de c贸digo** despu茅s de seleccionar un archivo en el primer panel mostrara el c贸digo de este mismo, permitiendo editarlo.
3. **Panel de depuraci贸n** de JS Cuenta con diversas herramientas 煤tiles para la depuraci贸n, herramientas tales como, una lista de los Breakpoints, el Call Stack, el Scope de las variables entre otras m谩s.
4. **Panel de consola** *En caso de no ser visible la consola, seleccione cualquier panel anterior y presione la tecla `esc`*.  Muestra una consola en la cual podemos utilizar c贸digo de JavaScript.

#### Breakpoints 
Un breakpoint en pocas palabras es un punto en el que el programa se detendr谩, y nos mostrara como se encuentran las variables y m谩s informaci贸n en ese punto especifico del c贸digo.

##### Breakpoints con console.log
Una de las formas m谩s comunes en las que se crean *"Breakpoints"* es mediante console.log(), la cual no es malo, pero si es limitado. 

Por ejemplo, si queremos conocer el estado de cada variable en cada momento har铆amos algo como lo siguiente:
```js
//app.js
function updateLabel() {
  var addend1 = getNumber1();
  console.log(`valor 1: ${addend1}`)
  var addend2 = getNumber2();
  console.log(`valor 2: ${addend2}`)
  var sum = addend1 + addend2;
  console.log(`Suma: ${sum}`)
  label.textContent = addend1 + ' + ' + addend2 + ' = ' + sum;
  console.log(`Texto asignado: ${addend1 + ' + ' + addend2 + ' = ' + sum}`)
}
```
Si corremos el nuevamente la suma y vemos el apartado de consola nos mostrara lo siguiente.

![Figura 6. Depuraci贸n mediante console log.](Pastedimage20220102200651.png)

Podemos observar como cada valor son n煤meros, pero la suma no es del todo correcta. 

##### Breakpoints con debugger

En el c贸digo anterior sustituiremos los console.log() por la instrucci贸n `debugger;` y regresemos a la pesta帽a de sources.

```js 
//app.js
function updateLabel() {
  var addend1 = getNumber1();
  debugger;
  var addend2 = getNumber2();
  debugger;
  var sum = addend1 + addend2;
  label.textContent = addend1 + ' + ' + addend2 + ' = ' + sum;
  debugger;
}
```

Colocamos valores y presionamos el bot贸n para sumar.

![Figura 7. Breakpoints con debugger.](pastedimage20220102203120.png)

Como podemos ver suceden varias cosas curiosas.

1. vemos como la p谩gina se oscurec茅 un poco.
2. en el panel de editor de c贸digo nos marca la linea 19 que dice `debugger`
3. en el panel de depuraci贸n nos despliega la pesta帽a de scope y a su vez nos muestra el valor de nuestras variables locales y globales.

Sigamos ejecutando y veamos que pasa.

![Figura 8. Formas de seguir depurar.](Pastedimage20220102203855.png)

Tenemos dos formas para esto:
1. 鈴? Hacer un salto hasta el siguiente breakpoint.
2. 鉄? Ir l铆nea a l铆nea.

鈴? Demos un par de saltos entre cada breakpoint y veamos que nos muestra.
![Figura 9. Debugger mostrando las variables.](pastedimage20220102204546.png)

#### Panel de depuraci贸n
Si nos enfocamos el panel de depuraci贸n podemos ver el [Scope](https://developer.mozilla.org/es/docs/Glossary/Scope) con los valores de nuestras variables, tanto locales como globales, tambi茅n podemos ver el call stack y como esta ordenada cada funci贸n.

![Figura 10. Panel de depuraci贸n.](Pastedimage20220102205658.png)
 
Podemos notar como nos muestra cada variable, como lo hac铆amos con los `console.log()`, sin embargo hay varias ventajas.

1. No tuvimos que listar una por una.
2. Nos muestra el [Scope](https://developer.mozilla.org/es/docs/Glossary/Scope).
3. Podemos inferir el tipo de dato.

Es curioso, ya que el ver las dobles comillas `" "` nos deber铆a dar una idea de lo que podr铆a estar fallando.

Si recordamos los valores dentro de comillas dobles `"1"` son tipos `String`, mientras que los valores sin comillas dobles `1` son `number`.

*Supongamos que no estamos del todo seguros de eso, y queremos seguir investigando*
 
**驴que m谩s podemos hacer?**

#### Watch
La pesta帽a **watch** dentro del mismo panel nos puede ayudar a trabajar con las variables.

Revisemos el tipo de variable utilizando la funci贸n [typeof](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/typeof).

Dentro de **Watch** pulsamos el icono **+** y coloquemos dentro las siguientes instrucciones.

`typeof addend1`

`typeof addend2`

`typeof sum`

![Figura 11.Tipo de cada variable.](Pastedimage20220102211934.png)

Podemos notar como el tipo de cada una de las variables es un string, indic谩ndonos que la operaci贸n que est谩 realizando [no es una suma, sino una concatenaci贸n](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Addition).

#### Consola
*驴Podemos hacer lo mismo de otra forma?*

**Correcto**. 
Con la consola podemos escribir c贸digo y mientras estemos dentro del scope de la funci贸n podemos ver sus variables.

Presiona `esc`, y dentro de la consola escribe lo mismo.

`typeof addend1`

`typeof addend2`

`typeof sum`

![Figura 12. Revisando cada variable.](Pastedimage20220102212628.png)

Ahora que ya sabemos que los valores son `String` y no `number`, podemos deducir que [no est谩 sumando, sino que est谩 concatenando.](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Addition).

#### Soluci贸n
**驴Que podemos hacer para arreglarlo?**

Aplicaremos un [parseo de string a enteros](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/parseInt).

Dentro de la consola colocaremos el siguiente c贸digo y presionamos `enter`.

```js
parseInt(addend1) + parseInt(addend2)
```

![Figura 13. Parseo de strings.](Pastedimage20220102213133.png)

Como podemos observar, ahora si muestra el valor esperado, sabiendo esto aplicaremos ese cambio en nuestro c贸digo, para que funcione de forma correcta.

```js
function updateLabel() {
  var addend1 = getNumber1();
  var addend2 = getNumber2();
  // var sum = addend1 + addend2;
  var sum = parseInt(addend1) + parseInt(addend2)
  label.textContent = addend1 + ' + ' + addend2 + ' = ' + sum;
}
```

Ejecutamos nuevamente nuestro programa y vemos el resultado.

![Figura 14. Operaci贸n correcta.](Pastedimage20220102213726.png)

### En resumen 鈿?
Chrome y otros navegadores cuentan con herramientas de desarrollador, las cuales nos ayudan a la hora de programar, la pesta帽a en la que nos enfocamos en esta ocasi贸n fue en la de Sources, la cual nos ayuda a depurar c贸digo.

La depuraci贸n de c贸digo como vimos se puede realizar de distintas maneras, ya sea mediante console.log () o utilizando la instrucci贸n debugger, aunque mediante console.log es posible, no es la mejor manera de depurar nuestro c贸digo, por otro lado, con la instrucci贸n debugger, de la mano con las herramientas de desarrollador esta tarea se vuelve sumamente sencilla.

No est谩 dem谩s mencionar que aunque las herramientas de depuraci贸n de Chrome son sumamente 煤tiles, tambi茅n debemos tener cierto conocimiento en el lenguaje, para detectar los errores y saber c贸mo solucionarlos.


### Referencias 馃
- [DevTools javascript](https://developer.chrome.com/docs/devtools/#javascript)
- [Scope](https://developer.mozilla.org/es/docs/Glossary/Scope)
- [typeof](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/typeof).
- [Operador +](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Addition)
- [parseInt](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/parseInt).

 <br/>

| [馃惁 Twitter](https://twitter.com/SamuelNarciso28) | [馃 SamuelNarciso.com](https://www.samuelnarciso.com/) | [馃摳 Instagram](https://www.instagram.com/samuel_narciso/) |
|:------------------------------------------------:|:-----------------------------------------------------:|:--------------------------------------------------------:|
