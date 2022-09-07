![](/public/assets/images/logo.png)
# AutoLuc 

El proyecto comienza con la necesidad de realizar un market place para una tienda de vente de Repuestos de autos.
Para dar solución a esto se desarrolló un sitio basado en React con la premisa de ser una SPA. 
Como soporte de información se utiliza una base de datos de FireBase.

## Contenido

El proyecto cuenta solo con una rama ya que fue desarrollado en su totalidad por el autor.
Para la creación del mismo se utilizó:
* HTML 5
* CSS3
* React "^18.2.0"
* react-dom "^18.2.0",
* react-router-dom "^6.3.0",
* Bootstrap "^5.1.3"
* Firebase "^9.9.2"
* @emailjs/browser "^3.7.0"

## Demo

A continuación una breve demostración del funcionamiento del sitio: (https://drive.google.com/file/d/1rBYG0nXJPiRWrzmmYdTX5rG4zI2iHg18/view?usp=sharing)

Adicionalmente a lo que vemos en el video, la aplicación se encarga de enviar un mail de confirmación al usuario para que obtenga toda la información necesaria para hacer seguimiento del pedido.

## Como clonar el proyecto 

En caso de querer copiar el proyecto y utilizarlo de base, realizar los siguientes pasos:
* git clone https://github.com/LucasFernandezC/autolucReact.git 
* Posicionarse desde la terminal en la carpeta donde descargamos el proyecto y ejecutar NPM I para instalar las dependencias.
* Levantar el servidor con el comando NPM START


## Previsualizacion

A continuación podemos ver una pantalla de preview del sitio.

![](/public/assets/images/sitio.png)

## Características relevantes del proyecto

Durante el desarrollo de la aplicación se buscó generar código que pueda ser reutilizable y que sea lo mas simple posible para su lectura y mantenimiento.

Otra de las premisas del proyecto era que el sitio sea responsive, cosa que se logró en base a la utilización de clases de Bootstrap y algunas adecuaciones puntuales realizadas con CSS y MediQuery.

Dentro del repositorio se puede observar un MOCK que fue utilizado en las fases iniciales del desarrollo a la espera de la creación de una api y/o conexión a una base de datos.

El uso de context nos permitió tener visibilidad del carrito del usuario desde cualquier sección de la aplicación. 

Al utilizar LINK pudimos mantener la idea de una SPA sin necesidad de recargar el sitio en ningun momento.

## Funcionalidades

La aplicación cuenta con las siguientes funcionalidad:

* Agregar elementos al carrito de compras. En caso de que el producto que se agregue ya esté, solo se aumentará la cantidad. Al momento de realizar esta acción se controla que haya stock suficiente.
* Navegar distintas categorías de productos para acotar las búsquedas.
* Vaciado del carrito desde el CartWidget.
* Acceso al checkout de la compra al momento de agregar un producto o desde el CartWidget.
* Realizar búsquedas de pedidos completados tanto por mail como por ID de compra. Esto lo hace en forma automática el sitio sin necesidad de elegir que opción de búsqueda deseamos utilizar.
* Valida la información ingresada en el formulario de compra antes de emitir la orden.
* Actualiza el stock disponible en la base de datos luego de que se complete la orden de compra.

### Notas

Este desarrollo surgió de la realización de un curso pero despertó gran interés en mi por esta tecnología. Me resultó muy interesante la forma en que trabaja y espero poder seguir adquiriendo experiencia.
