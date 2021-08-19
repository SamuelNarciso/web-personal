---
title: JSX para principiantes
tags: [ reactjs ]
date: 2020-05-21T05:25:44.226Z
path: blog/jsx-para-principiantes
cover: ./jsx-portada.jpg
excerpt: JSX es un pseudolenguaje que facilita el desarrollo de aplicaciones web por su sintaxis similar a las etiquetas de HTML. Este cuenta con su propia sintaxis, la cuál extiende de Javascript , el cuál se usa en react para describir la interfaz de usuario

---

## Que no es JSX?
No es un string, ni HTML

## Que es?

JSX es un *pseudolenguaje* que facilita el desarrollo de aplicaciones web por su sintaxis similar a las etiquetas de HTML. Este cuenta con su propia sintaxis, la cuál extiende de Javascript , el cuál se usa en react para describir la interfaz de usuario

JSX produce **elementos** o **componentes** con  los cuales se pretende reutilizarlos a lo largo del sistema.

  

# Primeros pasos

Necesitamos tener corriendo react y las importaciones correspondientes 

> JSX toma las mismas etiquetas de HTML para crear los componentes

  

Ahora el primer elemento que crearemos con jsx sera:

     <h1> Hola mundo</h1>



Colocamos nuestra "Etiqueta de jsx" dentro del render, y lo estariamos viendo en nuestra pantalla. En ella solamente se estaria renderizando lo siguiente:

    import React from 'react';
    import ReactDOM from 'react-dom';
    
	ReactDOM.render( <h1> Hola mundo </h1> , document.getElementById('root'));

![Hola mundo JSX](https://dev-to-uploads.s3.amazonaws.com/i/2jhb458rfl9j75ghau64.png)


¿Qué te parece si nuestro JSX lo pasamos a una variable o constante y al render solo le pasamos la referencia de éste y así dejar la instrucción de render un poco mas limpio.?

    import React from 'react';
	import ReactDOM from 'react-dom';
	const jsx = <h1>Hola mundo desde una constante </h1>;
	ReactDOM.render( jsx, document.getElementById('root'));

### Que ventajas tenemos con jsx?

JSX nos permite trabajar con javascript dentro de las etiquetas

**Como hacemos eso?**

Únicamente colocamos  **{ }** dentro de la etiqueta, y dentro de ellos ponemos todo el código JavaScript que necesitemos.
*Veamos algunos ejemplos:*

    import React from 'react';
    import ReactDOM from 'react-dom';

    const jsx = <h1> Hola mundo del {new Date().getFullYear()}</h1>;

    ReactDOM.render( jsx, document.getElementById('root'));

Mostrara algo como: 

![JSX desde variable e inyectando js](https://dev-to-uploads.s3.amazonaws.com/i/09hxagtdxmqqo1zlwpbq.png)

    let nombre = 'Samuel';
    const jsx = <h1> Hola {nombre}</h1>;

    ReactDOM.render( jsx, document.getElementById('root'));

![Inyectando variables a JSX](https://dev-to-uploads.s3.amazonaws.com/i/puunhgpctps8jb4u3ond.png)

    const usuario = {
    nombre: 'Samuel',
    nickName: 'Samus',
    edad: 20  };
   
    const jsx = <h1> Hola {usuario.nombre}, tienes {usuario.edad} años y tu Nickname es {usuario.nickName} </h1>;
    
    ReactDOM.render(jsx, document.getElementById('root'));

![JSX con valores de un objeto](https://dev-to-uploads.s3.amazonaws.com/i/qzw1n9svvngjejurxwsk.png)

Con jsx podemos juntar la sencillez de html con el poder de Javascript, pero...
**que pasa si quieres poner mas de una etiqueta?**

Sigamos con el ejemplo anterior, supongamos que quiero el saludo en un h1 y los demas datos en un parrafo, podriamos pensar que haciendolo de las siguientes maneras seria correcto:
  
    const jsx = <h1> Hola {usuario.nombre}, </h1> <p> tienes {usuario.edad} años y tu Nickname es {usuario.nickName} </p> ;
    
    ReactDOM.render(jsx, document.getElementById('root'));

  
Si lo intentamos ejecutar mostrara algo parecido a esto:

![Error con JSX](https://dev-to-uploads.s3.amazonaws.com/i/4ue6wnjofo3y6dnmuuw9.png)

*(Si es que estas trabajando con vsCode)* , el mismo vscode te puede mencionar un error como el siguiente, el cual comenta es por que JSX debe tener un elemento primario, y ahi contamos con 2 elementos.

![VSCODE error en JSX](https://dev-to-uploads.s3.amazonaws.com/i/i60dtuvz7z6t1hk8gahi.png)

Por ende puedes pensar en crear varios elementos primarios y luego renderizarlos. vamos a intentarlo.

    const jsx = <h1> Hola {usuario.nombre}, </h1> ;
    const jsx2 = <p> tienes {usuario.edad} años y tu Nickname es {usuario.nickName} </p>;
    
    ReactDOM.render(jsx,jsx2, document.getElementById('root'));
De esta manera ya no nos marca un error por tener 2 elementos juntos, debido a que estan separados, pero si recargamos nuestra pagina nos muestra otro error

![Error, al renderizar varios componentes](https://dev-to-uploads.s3.amazonaws.com/i/rf1oldah7xy5sx3mc90w.png)

**Entonces, como podemos poner varias etiquetas a la vez?**
Para realizarlo debemos ponerlas dentro de un contenedor
  
    const jsx = (
    <div>
    <h1> Hola {usuario.nombre}, </h1>
    <p> tienes {usuario.edad} años y tu Nickname es {usuario.nickName} </p>
    </div>   );
    
    ReactDOM.render(jsx, document.getElementById('root'));

Ahora si, estamos cumpliendo con la regla de tener un elemento primario en JSX (siendo este nuestro contenedor div) y cumplimos con la regla de mandar solo un elemento jsx a renderizar.

![componentes dentro de un contenedor](https://dev-to-uploads.s3.amazonaws.com/i/d6fw02f9m9eb9pwarmv6.png)

_Nota_: Puede ser cualquier tipo de contenedor, no necesariamente un div. Por ejemplo: div, footer, main, header, section, article, _(... y todos los contenedores que se te ocurran )_

Veamos la estructura que nos genero en nuestro html

![JSX Estructura html](https://dev-to-uploads.s3.amazonaws.com/i/54p25vi7sqvp55b2yrpm.png)


Vemos como efectivamente, dentro del contenedor root ( el cual es referenciado dentro de la instruccion de render) estamos poniendo un div, un h1 y p.

pero que pasa si no queremos ese segundo div?

Utilizaremos **los fragments**, los cuales nos permiten agregar etiquetas sin agregar nodos extras al DOM,

y como los usamos?

Existen dos maneras:

### Forma 1 explicita

    const jsx = (
    <React.Fragment>
    
    <h1> Hola {usuario.nombre}, </h1>  
    <p> tienes {usuario.edad} años y tu Nickname es {usuario.nickName} </p>
    
    </React.Fragment>);

    ReactDOM.render(jsx, document.getElementById('root'));

  

Podemos notar como en lugar del contenedor padre **div** usamos **React.Fragment**
  
### Forma 2 Implicita

    const jsx = (
    <>
  
    <h1> Hola {usuario.nombre}, </h1>
    <p> tienes {usuario.edad} años y tu Nickname es {usuario.nickName} </p>
    
    </>   );
    
    ReactDOM.render(jsx, document.getElementById('root'));

  
Podemos notar como en lugar del contenedor padre **div** o **React.Fragment** Las etiquetas <> y </> estan vacias.

En ambos casos cuando inspeccionemos nuestra pagina, veremos lo siguiente:

![Fragments JSX](https://dev-to-uploads.s3.amazonaws.com/i/57p1puh3l9cr4xx1p1zl.png)

Notamos como ahora en este caso las etiquetas h1 y p estan directamente en el contenedor root, y no dentro de un contenedor extra, como si era el caso anterior.

### Atributos en las etiquetas de JSX

Recuerda que estas **no son HTML**, sino JSX, por ende algunos atributos cambiaron, son pocos los atributos que cambiaron, el principal motivo es que ya existen en js como palabras reservadas.

Aqui te menciono los mas destacados o mas comunes:

| JSX | HTML  | Descripcion|
|--|--| --|
| ClassName	|  class	|Define las clases que tendrá un elemento.	|
| htmlFor	|  For	|	Se aplica en etiquetas label, comúnmente usados en formularios|
| style={ }	|  style=""	|	Se usa para definir estilos en las mismas lineas de html, _forma poco usada_|
