# Proyecto listado de Posts 

![List Posts](https://raw.githubusercontent.com/MoratDev/Portafolio/master/assets/img/app-posts.png)

Este proyecto es una aplicación web desarrollada con React, que utiliza autenticación por medio Google, Facebook, GitHub y que consume la API de [https://dummyapi.io/](https://dummyapi.io/) para mostrar un listado de posts, la aplicación permite ver y hacer lo siguiente:

- Autenticación por medio de Google, Facebook y GitHub
- Ver cada post con foto y nombre del usuario que hizo el post
- Ver imagen y texto del post
- Ver tags del post
- Ver cantidad de likes
- Ver comentarios (se visualizan en un modal)
- Ver información detallada del usuario (se visualiza en un modal)
- Filtrar los posts por tag

## Tecnologías utilizadas

- HTML
- CSS
- React
- FireBase
- Axio
- Atomic Design como metodología para el diseño de sistema de componentes

## Requisitos

- Tener instalado Node.js en tu equipo.
- Una cuenta de DummyAPI para obtener la App ID suya y es la que se debe reemplazar por la propiedad app-id que se envia en la cabecera al momento de realizar cualquier petición, aqui te muestro un ejemplo:
```javascript
const headers = {
    'app-id': 'Aqui va su App ID'
};
await axios.get('https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109f4/post?limit=10',  { headers })
```
## Instalación 

Para instalar este proyecto, sigue estos pasos:

1. Descarga el proyecto y descomprímelo en tu computadora.
2. Utiliza el siguiente comando para instalar las dependencias:
   ### `npm install`
3. Utiliza el siguiente comando para iniciar la aplicación:
   ### `npm start`
4. Accede a la aplicación en tu navegador web a través de la dirección
   [http://localhost:3000](http://localhost:3000)

## Uso
Para utilizar esta aplicación, deberas autenticarte por medio de los proveedores que aparecen en el login en este caso te puedes autenticar por medio de Google, Facebook o GitHub.

## Author

- [@MoratDev](https://github.com/MoratDev)

