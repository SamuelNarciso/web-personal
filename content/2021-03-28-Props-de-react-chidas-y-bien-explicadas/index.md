---
title: Props de react chidas y bien explicadas.
tags: [reactjs ]
date: 2021-03-28T05:25:44.226Z
path: blog/props-de-react-chidas-y-bien-explicadas
coverCard: ./coverCard.png
coverPage: ./coverPage.png
excerpt: Las propiedades o por la forma mas común **props** es la manera de enviar datos a los componentes, pasándolos por parámetros.
---

Las propiedades o por la forma mas común **props** es la manera de enviar datos a los componentes, pasándolos por parámetros.
ejemplo:
Queremos crear un componente que sea una tarjeta de usuario, el cual se llene con datos de cada usuario.
hacemos algo como esto:
```js
export const tarjetaUser = ()=>{
  return( 
    <div style={caja}>
      <h1> Hola!</h1>
      <p> tus datos son los siguientes: </p>
      <ul>
        <li>Nombre: </li>
        <li>Sexo: </li>
        <li>Nickname:</li>
        <li>Edad:</li>
        <li>Nacionalidad:</li>
      </ul>
    </div>
   );
};
```


Ahora nuestro componente ocupa los datos [ *nombre, sexo, nickname, edad, nacionalidad* ]

podríamos establecerlos directamente en nuestro texto, pero eso no seria muy dinamico de nuestra parte

entonces aquí entran las props, que vendrían siendo **parámetros** con valores dados por el sistema o usuario.

## como enviamos las propiedades a nuestros componentes?

Para enviar un valor por props los enviamos desde donde estamos llamando al componente, siguiendo la siguiente estructura:

```jsx
    <NombreComponente
      nombre_propiedad =  'valor_de_la_propiedad'  
	  .
	  .
	  .  
    />
```
podemos poner cuantas propiedades sean necesarias para nuestro componente.

```js
 <TarjetaUser
    Nombre='Sam'
    Sexo='Masculino'
    Nickname='Samus'
    Edad='21'
    Nacionalidad='Mexicana'
/>
```

Ya enviamos nuestras propiedades bien dinamicas a nuestro objeto, pero ahora...
## Como obtenemos las propiedades en nuestro objeto?

Estos llegan a los parámetros de nuestro componente y la forma mas común de  obtenerlos es con un objeto que se llame **props** y de ahí llamar cada propiedad según la necesitemos.

```js
export const tarjetaUser = (props)=>{
  return( 
    <div style={caja}>
      <h1> Hola! {props.nombre}</h1>
      <p> tus datos son los siguientes: </p>
      <ul>
        <li>Nombre: {props.nombre} </li>
        <li>Sexo: {props.sexo} </li>
        <li>Nickname: {props.nickname}</li>
        <li>Edad: {props.edad}</li>
        <li>Nacionalidad: {props.nacionalidad}</li>
      </ul>
    </div>
   );
};
```


*(El nombre de las propiedades debe ser el mismo que le colocamos cuando las enviamos)*

(El nombre **props** es un nombre estándar, pero si podemos colocarle el nombre que nosotros gustemos.)
```js
export const tarjetaUser = (conectoHD_Propiedades)=>{
  return( 
    <div style={caja}>
      <h1> Hola! {conectoHD_Propiedades.nombre}</h1>
      <p> tus datos son los siguientes: </p>
      <ul>
        <li>Nombre: {conectoHD_Propiedades.nombre} </li>
        <li>Sexo: {conectoHD_Propiedades.sexo} </li>
        <li>Nickname: {conectoHD_Propiedades.nickname}</li>
        <li>Edad: {conectoHD_Propiedades.edad}</li>
        <li>Nacionalidad: {conectoHD_Propiedades.nacionalidad}</li>
      </ul>
    </div>
   );
};
```

## Trucos con las props

Como las estamos pasado por parámetros, podemos utilizar la funcionalidad de [Desestructuracion](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment) y así evitamos la palabra props y colocamos únicamente el nombre del elemento que estamos pasando, haciendo mas entendible nuestro código.

```js
export const tarjetaUser = ({ nombre, sexo, nickname, edad, nacionalidad }) => {
  return (
    <div style={caja}>
      <h1> Hola! {nombre}</h1>
      <p> tus datos son los siguientes: </p>
      <ul>
        <li>Nombre: {nombre} </li>
        <li>Sexo: {sexo} </li>
        <li>Nickname: {nickname}</li>
        <li>Edad: {edad}</li>
        <li>Nacionalidad: {nacionalidad}</li>
      </ul>
    </div>
  );
};
```

En cualquier caso, si lo desestructuras o no, el resultado siempre seguirá siendo el mismo.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/m8yt047fxzpwcphj0plj.PNG)

*(El nombre de las propiedades al ser desestructuradas debe ser el mismo que le colocamos cuando las enviamos)*