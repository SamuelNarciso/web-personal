---
title: Manual bien explicado del akko 3068
tags: []
date: 2021-09-14T05:25:44.226Z
path: blog/manual-bien-explicado-del-akko-3068
coverCard: ./coverCard.png
coverPage: ./coverPage.png
excerpt: En esta entrada de blog explicare como podemos crear macros y las distintas macros que ya incluye el teclado akko 3068.
---
# Manual bien explicado del akko 3068

He investigado por internet y encuentro muy pocos sitios en donde el manual del akko 3068 esta traducido y bien explicado, por eso me di a la tarea de hacer este post, en donde explicare las distintas funcionalidades que tiene el teclado Akko 3068.

*Posiblemenmte este manual sirva para los demas teclados de akko, es cuestion de probarlo*


## Macros propias del teclado


### Macros para controlar la luz del teclado
|Tecla|Accion|
|-----|------|
|**Fn** + **↑** (*flecha arriba*)| Subir brillo|
|**Fn** + **↓** (*flecha abajo*)| Bajar brillo|
|**Fn** + **←** (*flecha izquierda*)| Acelerar animacion|
|**Fn** + **→** (*flecha derecha*)| Relantizar animacion|
|**Fn** + **L** | Prender o Apagar animacion|
|**Fn** + **Del** | Cambiar la animacion|



### Macros para acceder a funciones del sistema
|Tecla|Accion|
|-----|------|
|**Fn** + **1 hasta 0** | f1 hasta f10 |
|**Fn** + **-** | f11 |
|**Fn** + **=** | f12 |
|**Fn** + **Page Up** | Home |
|**Fn** + **Page Down** | End |
|**Fn** + **I** | Insertar |
|**Fn** + **<** | Bajar volumen |
|**Fn** + **>** | Subir volumen |
|**Fn** + **M** | Mutear |
|**Fn** + **W** | Cambiar de A S D W con **← ↓ → ↑** |
|**Fn** + **C** | Abrir calculadora |
|**Fn** + **Win** | Deshabilitar/Habilitar tecla de windows |
|**Fn** + **~** | Restaurar configuraciones de fabrica |


## Crear macros personalizadas

### Pasos para crear una macro personalizada
1. *Entrar al modo macros*  **Presionar por 3 segundos Fn + Win**
2. *Comenzar el editor de macros*  **Fn + Esc**
3. *Colocar la tecla que invocara la macro*  **Fn + TECLA**
4. *Grabar la macro*  **Tecla o sencuencia de teclas a grabar**
5. *Finalizar el grabado de la macro*  **Fn + TECLA que invoca a la macro**
6. *Cerrar el editor de macros*  **Fn + Esc**
7. *Salir del modo macros*  **Presionar por 3 segundos Fn + Win**

### Ejemplo de macro personalizada
1. Presionar por 3 segundos Fn + Win
2. Fn + Esc
3. Fn + H
4. H o l a ,  m u n d o
5. Fn + H
6. Fn + Esc
7. Presionar por 3 segundos Fn + Win

Ahora cada que yo presione  `Fn + H` se escribira **"Hola, mundo"**

### Formas para acceder a las macros personalizadas
Existen dos formas distintas para acceder a las macros que hemos creado previamente.

**Primer Metodo**, Acceder al modo macros durante 3 segundos `Fn + Win`. Ahora todas las teclas de macros estan activadas, y apenas la presiones haran su debida accion, pero este modo no es muy practico, ya que habran ocasiones en las que querramos usar dicha tecla con su funcionamiento normal, entonces tendriamos que salir del modo macros, escribir la tecla, luego volver a entrar al modo macros y tendriamos acceso a la macro nuevamente, en fin, un metodo no tan practico para el uso diario.   
<br>

**Segunda Metodo**, Acceder de forma rapida a nuestra macro pre-configurada, presionando `Fn + Alt (derecho) + Tecla pre-configurada`, de esta manera no tendremos que estar cambiando entre el modo macros y el modo default, sino que presionando estas tres teclas podemos acceder directamente a nuestra macros personalizada. 


### Eliminar una macro personalizada
1. *Entrar al modo macros*  **Presionar por 3 segundos Fn + Win**
2. *Comenzar el editor de macros*  **Fn + Esc**
3. *Presionar la tecla que invoca la macros a borrar*  **Fn + TECLA**
4. *Cerrar el editor de macros*  **Fn + Esc**
5. *Salir del modo macros*  **Presionar por 3 segundos Fn + Win**

## Notas sobre las macros personalizadas
Hay algunos detalles que debes saber sobre las macros personalizadas:

1. Si estas en modo macros, y desconectas el cable del teclado o se apaga el teclado se saldra del modo macros y regresara al modo default.
2. Si borras una macro debes re-escribirla, no hay forma de cancelar dicha accion,
3. Para llamar una macro de modo rapido debes presionar primero `Fn` y posteriormente `Alt derecho`, ya que si lo haces al reves no accedera a tu macro.
4. Las macros creadas en tu teclado se guardaran en el, no depende de ningun driver en la computadora ni nada por el estilo.
5. Las teclas que no puedes asignarle una macro son `Esc`, `Fn` y `Win`
6. El Akko 3068 no soporta macros invocadas con teclas simultaneas, no puedes invocar una macro con `Fn + Alt + A+B`, en ese caso la macro se asignara a la letra **A** , ignorando la tecla **B**.
