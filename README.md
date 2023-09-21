# Lab04 DeSolNube 
Claro, aquí tienes una documentación paso a paso para construir imágenes en Docker utilizando tu Dockerfile como ejemplo:

# Documentación para construir imágenes Docker

Esta guía te mostrará cómo construir una imagen Docker utilizando un archivo Dockerfile como base. El ejemplo que utilizaremos clona un repositorio de GitHub y ejecuta una aplicación Node.js.

## Prerrequisitos

Antes de comenzar, asegúrate de tener los siguientes prerrequisitos:

1. **Docker**: Debes tener Docker instalado en tu sistema. Puedes descargar e instalar Docker desde el [sitio web oficial de Docker](https://www.docker.com/).

2. **Un proyecto en GitHub**: Asegúrate de tener un proyecto en GitHub que desees utilizar para construir una imagen Docker. En este ejemplo, utilizaremos el repositorio `https://github.com/Mariodev27/PruebaLab04.git`. Asegúrate de que este repositorio exista y contenga un archivo `package.json`.

## Pasos para construir una imagen Docker

Sigue estos pasos para construir una imagen Docker utilizando tu Dockerfile:

1. **Crea un archivo Dockerfile**: En tu proyecto local, crea un archivo llamado `Dockerfile` (sin extensión) y coloca el siguiente contenido en él:

   ```Dockerfile
   FROM node
   LABEL maintainer mario.santisteban@tecsup.edu.pe
   RUN git clone -q https://github.com/Mariodev27/PruebaLab04.git
   WORKDIR PruebaLab04
   RUN npm install > /dev/null
   EXPOSE 9000
   CMD ["npm", "start"]
   ```

   Este Dockerfile define las instrucciones para construir la imagen Docker. Asegúrate de ajustar la URL del repositorio de GitHub si estás utilizando un repositorio diferente.

2. **Abre una terminal**: Abre una terminal en el directorio donde se encuentra tu Dockerfile. Debes estar en el directorio que contiene el archivo `Dockerfile` y donde deseas construir la imagen.

3. **Construye la imagen Docker**: Ejecuta el siguiente comando para construir la imagen Docker:

   ```bash
   docker build -t nombre-de-la-imagen .
   ```

   Reemplaza `nombre-de-la-imagen` con el nombre que desees para tu imagen Docker. El punto final `.` indica que Docker debe buscar el Dockerfile en el directorio actual.

4. **Espera a que se complete la construcción**: Docker descargará las capas necesarias y ejecutará las instrucciones del Dockerfile. Esto puede llevar un tiempo, dependiendo de la velocidad de tu conexión a Internet y la complejidad de tu imagen.

5. **Verifica que la imagen se haya construido correctamente**: Una vez que la construcción haya finalizado sin errores, puedes verificar que la imagen se haya creado correctamente con el siguiente comando:

   ```bash
   docker images
   ```

   Esto mostrará una lista de todas las imágenes Docker en tu sistema, incluida la que acabas de crear.
   
   **ADVERTENCIA!!!!!!**:
   Antes de ir al siguiente paso debemos habilitar el puerto 9000 de nuestra instancia para ello sigue lo siguiente desde la consola AWS:
   ```bash
   Seguridad -> Grupos de Seguridad -> Editar reglas de Entrada
   ```
7. **Ejecuta un contenedor basado en la imagen**: Para ejecutar un contenedor basado en la imagen que has creado, puedes utilizar el siguiente comando, reemplazando `nombre-de-la-imagen` con el nombre que le hayas dado a tu imagen:

   ```bash
   docker run -i -t -p 9000:5000 nombre-de-la-imagen
   ```

   Esto ejecutará un contenedor que expone el puerto 9000 de tu imagen en el puerto 9000 de tu sistema local. Puedes acceder a la aplicación Node.js con la dirección publica que da aws `[IP pública]:puerto`.

8. **Detén y elimina el contenedor (opcional)**: Cuando hayas terminado de probar tu aplicación, puedes detener y eliminar el contenedor utilizando el siguiente comando:

   ```bash
   docker stop nombre-del-contenedor
   ```

   Reemplaza `nombre-del-contenedor` con el nombre o el ID del contenedor en ejecución. Luego, puedes eliminar el contenedor con:

   ```bash
   docker rm nombre-del-contenedor
   ```

¡Listo! Ahora tienes una imagen Docker construida a partir de tu proyecto en GitHub y puedes ejecutar contenedores basados en ella en cualquier momento.
