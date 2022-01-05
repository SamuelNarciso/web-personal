---
title: Aprende a depurar código JavaScript con Chrome DevTools
tags: [ herramientas, javascript, principiante]
date: 2022-01-04T18:09:14.101Z
path: blog/aprende-a-depurar-codigo-javascript-con-chrome-dev-tools
coverCard: ./coverCardaprende-a-depurar-codigo-javascript.png
coverPage: ./coverPageaprende-a-depurar-codigo-javascript.png
excerpt: La depuración de código es una de las partes fundamentales de programar, es por eso que veo necesario aprender a utilizar las herramientas de desarrollador o DevTools que nos proporciona Chrome, para agilizar esta tarea.

---
# Aprende a depurar código JavaScript con Chrome DevTools

## Tabla de contenido
- [[#Tabla de contenido|Tabla de contenido]]
- [[#Introducción 🤓|Introducción 🤓]]
- [[#Manos a la obra|Manos a la obra]]
	- [[#Familiarizándonos con el panel de herramientas de desarrollador|Familiarizándonos con el panel de herramientas de desarrollador]]
	- [[#Breakpoints|Breakpoints]]
		- [[#Breakpoints con console.log|Breakpoints con console.log]]
		- [[#Breakpoints con debugger|Breakpoints con debugger]]
	- [[#Panel de depuración|Panel de depuración]]
	- [[#Watch|Watch]]
	- [[#Consola|Consola]]
	- [[#Solución|Solución]]
- [[#En resumen ⚡|En resumen ⚡]]
- [[#Referencias 🧐|Referencias 🧐]]

## Introducción 🤓
La depuración de código es una de las partes fundamentales de programar, cuando programo por largas horas dedico más tiempo a corregir errores que escribiendo lineas de código, pero muchas veces la forma en la que ubico los errores es mediante `console.log()` , la cual es una herramienta útil, pero no siempre es la más optima o precisa para la tarea de depuración o debugging.

Todos los exploradores actuales cuentan con una herramienta especializada en la funcion de depuracion y no muchos la usan, sin embargo en este post me propongo explicarte de forma sencilla, clara y mediante un ejemplo como es que la puedes utilizar y sacarle todo el jugo a tan poderosa herramienta.

*En este post estaré utilizando Chrome, sin embargo no dudo que el conocimiento se pueda aplicar a cualquier otro navegador.*

## Manos a la obra
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
  if (getNumber1() === '' || getNumber2() === '') {
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

![[Pasted image 20220102191025.png]]
*Figura 1. Página de ejemplo.*

Coloca un par de números en cada campo, y presiona el botón de sumar y observa lo que sucede.

![[Pasted image 20220102191152.png]]
*Figura 2. La suma de los valores debería dar 3.*

Claramente tenemos un error ⚠ 
Este sencillo ejemplo nos ayudara.

### Familiarizándonos con el panel de herramientas de desarrollador
El panel de herramientas de desarrollador o también conocido como las DevTools, es quien nos ayudará a la hora de depurar código u otras acciones más que deseemos realizar.

Para abrir este panel existen distintas formas.

**Con el mouse**
1. Click derecho sobre la página
2. Inspect | Inspeccionar

**Con combinacion de teclas**
Mac: `Command + Option + I`
Linux | Windows: `Control + Shift + I` 

No importa la forma en la que lo abras, abrirá algo similar a esto:
![[Pasted image 20220102191843.png]]
*Figura 3. Panel de recursos.*

Lo que nos interesa es el apartado superior que dice `sources | recursos`, lo presionamos y cambiara el contenido del panel.

===*Cada panel interno puede modificar su tamaño, inclusive la distribución de los mismos.*===

![[Pasted image 20220102193747.png]]
*Figura 4. Sección de recursos.*

Identifiquemos cada panel:

![[panleRecursosNumerado.png]]
*Figura 5. Paneles numerados.*

1. **Panel de archivos** muestra el servidor que corre la página, la carpeta raiz y  los archivos HTML, CSS y JavaScript y otros más incluidos en la Página que estemos viendo.
2. **Panel del editor de código** después de seleccionar un archivo en el primer panel mostrara el código de este mismo, permitiendo editarlo.
3. **Panel de depuración** de JS Cuenta con diversas herramientas útiles para la depuración, herramientas tales como, una lista de los Breakpoints, el Call Stack, el Scope de las variables entre otras más.
4. **Panel de consola** ==*En caso de no ser visible la consola, seleccione cualquier panel anterior y presione la tecla `esc`*==. 
Muestra una consola en la cual podemos utilizar código de JavaScript.

### Breakpoints 
Un breakpoint en pocas palabras es un punto en el que el programa se detendrá, y nos mostrara como se encuentran las variables y más información en ese punto especifico del código.

#### Breakpoints con console.log
Una de las formas más comunes en las que se crean *"Breakpoints"* es mediante console.log(), la cual no es malo, pero si es limitado. 

Por ejemplo, si queremos conocer el estado de cada variable en cada momento haríamos algo como lo siguiente:
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

![[Pasted image 20220102200651.png]]
*Figura 6. Depuración mediante console.log*

Podemos observar como cada valor son números, pero la suma no es del todo correcta. 

#### Breakpoints con debugger

En el código anterior sustituiremos los console.log() por la instrucción `debugger;` y regresemos a la pestaña de sources.

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

Colocamos valores y presionamos el botón para sumar.

![[Pasted image 20220102203120.png]]
*Figura 7. Breakpoints con debugger*

Como podemos ver suceden varias cosas curiosas.

1. vemos como la página se oscurecé un poco.
2. en el panel de editor de código nos marca la linea 19 que dice `debugger`
3. en el panel de depuración nos despliega la pestaña de scope y a su vez nos muestra el valor de nuestras variables locales y globales.

Sigamos ejecutando y veamos que pasa.

![[Pasted image 20220102203855.png]]
*Figura 8. Formas de seguir depurando.*

Tenemos dos formas para esto:
1. ⏩ Hacer un salto hasta el siguiente breakpoint.
2. ⟳ Ir línea a línea.

⏩ Demos un par de saltos entre cada breakpoint y veamos que nos muestra.
![[Pasted image 20220102204546.png]]
*Figura 9. Debugger mostrando las variables.

### Panel de depuración
Si nos enfocamos el panel de depuración podemos ver el [Scope](https://developer.mozilla.org/es/docs/Glossary/Scope) con los valores de nuestras variables, tanto locales como globales, también podemos ver el call stack y como esta ordenada cada función.

![[Pasted image 20220102205658.png]]
*Figura 10. Panel de depuración.*
 
Podemos notar como nos muestra cada variable, como lo hacíamos con los `console.log()`, sin embargo hay varias ventajas.

1. No tuvimos que listar una por una.
2. Nos muestra el [Scope](https://developer.mozilla.org/es/docs/Glossary/Scope).
3. Podemos inferir el tipo de dato.

Es curioso, ya que el ver las dobles comillas `" "` nos debería dar una idea de lo que podría estar fallando.

Si recordamos los valores dentro de comillas dobles `"1"` son tipos `String`, mientras que los valores sin comillas dobles `1` son `number`.

*Supongamos que no estamos del todo seguros de eso, y queremos seguir investigando*
 
**¿que más podemos hacer?**

### Watch
La pestaña **watch** dentro del mismo panel nos puede ayudar a trabajar con las variables.

Revisemos el tipo de variable utilizando la función [typeof](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/typeof).

Dentro de **Watch** pulsamos el icono **+** y coloquemos dentro las siguientes instrucciones.

`typeof addend1`
`typeof addend2`
`typeof sum`

![[Pasted image 20220102211934.png]]
*Figura 11.Tipo de cada variable*

Podemos notar como el tipo de cada una de las variables es un string, indicándonos que la operación que está realizando [no es una suma, sino una concatenación](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Addition)..

### Consola
*¿Podemos hacer lo mismo de otra forma?*

**Correcto**. 
Con la consola podemos escribir código y mientras estemos dentro del scope de la función podemos ver sus variables.

Presiona `esc`, y dentro de la consola escribe lo mismo
`typeof addend1`
`typeof addend2`
`typeof sum`

![[Pasted image 20220102212628.png]]
*Figura 12. Revisando cada variable desde la consola.*

Ahora que ya sabemos que los valores son `String` y no `number`, podemos deducir que [no está sumando, sino que está concatenando](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Addition).

### Solución
**¿Que podemos hacer para arreglarlo?**

Aplicaremos un [parseo de string a enteros](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/parseInt).

Dentro de la consola colocaremos el siguiente código y presionamos `enter`.

```js
parseInt(addend1) + parseInt(addend2)
```

![[Pasted image 20220102213133.png]]
*Figura 13. Parseo de strings.*

Como podemos observar, ahora si muestra el valor esperado, sabiendo esto aplicaremos ese cambio en nuestro código, para que funcione de forma correcta.

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

![[Pasted image 20220102213726.png]]
*Figura 14. Operación correcta.*

## En resumen ⚡
Chrome y otros navegadores cuentan con herramientas de desarrollador, las cuales nos ayudan a la hora de programar, la pestaña en la que nos enfocamos en esta ocasión fue en la de Sources, la cual nos ayuda a depurar código.

La depuración de código como vimos se puede realizar de distintas maneras, ya sea mediante console.log () o utilizando la instrucción debugger, aunque mediante console.log es posible, no es la mejor manera de depurar nuestro código, por otro lado, con la instrucción debugger, de la mano con las herramientas de desarrollador esta tarea se vuelve sumamente sencilla.

No está demás mencionar que aunque las herramientas de depuración de Chrome son sumamente útiles, también debemos tener cierto conocimiento en el lenguaje, para detectar los errores y saber cómo solucionarlos.


## Referencias 🧐
- [DevTools javascript](https://developer.chrome.com/docs/devtools/#javascript)
- [Scope](https://developer.mozilla.org/es/docs/Glossary/Scope)
- [typeof](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/typeof).
- [Operador +](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Addition)
- [parseInt](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/parseInt).


| [🐦 Twitter](https://twitter.com/SamuelNarciso28) | [🤖 SamuelNarciso.com](https://www.samuelnarciso.com/) | [📸 Instagram](https://www.instagram.com/samuel_narciso/) |
|:------------------------------------------------:|:-----------------------------------------------------:|:--------------------------------------------------------:|
