# Examen Práctico: Backend Mini-Netflix

<p align=center>
  Usando el framework de NestJS
</p>

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Objetivo

Desarrollar y desplegar una API RESTful escalable utilizando NestJS, PostgreSQL y TypeORM.

## Tecnologías utilizadas

<p> <a href="https://nestjs.com/" target="blank"> <img src="https://nestjs.com/img/logo-small.svg" width="20" alt="NestJS Logo" /> </a> NestJS / Nest CLI </p>
<p> <a href="https://typeorm.io/" target="blank"> <img src="https://raw.githubusercontent.com/typeorm/typeorm/master/resources/logo_big.png" width="20" alt="TypeORM Logo" /> </a> TypeORM </p>
<p> <a href="https://jwt.io/" target="blank"> <img src="https://jwt.io/img/logo-asset.svg" width="20" alt="JWT Logo" /> </a> JWT (Autenticación) </p>
<p> <a href="https://www.postgresql.org/" target="blank"> <img src="https://www.postgresql.org/media/img/about/press/elephant.png" width="20" alt="PostgreSQL Logo" /> </a> PostgreSQL </p>
<p> <a href="https://www.docker.com/" target="blank"> <img src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" width="20" alt="Docker Logo" /> </a> Docker </p>
<p> <a href="https://git-scm.com/" target="blank"> <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" width="20" alt="Git Logo" /> </a> Git </p>

## Ejecución del proyecto

### El proyecto se encuentra desplegado en Render en el siguiente enlace:

https://mini-netflix-back.onrender.com

### Para hacer correr el proyecto localmente se requiere tener instalado:

- <p>
    <a href="https://git-scm.com/" target="blank">
      <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" width="20" alt="Git Logo" />
    </a>
    Git
  </p>

- <p>
    <a href="https://nodejs.org/" target="blank">
      <img src="https://nodejs.org/static/images/logo.svg" width="20" alt="Node.js Logo" />
    </a>
    Node.js (LTS)
  </p>

- <p> <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="20" alt="Nest Logo" /></a> Nest CLI </p>

- <p>
    <a href="https://www.docker.com/" target="blank">
      <img src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" width="20" alt="Docker Logo" />
    </a>
    Docker
  </p>

- <p>
    <a href="https://www.postgresql.org/" target="blank">
      <img src="https://www.postgresql.org/media/img/about/press/elephant.png" width="20" alt="PostgreSQL Logo" />
    </a>
    PostgreSQL
  </p>

### Paso 1. Clone el proyecto:

```bash
$ git clone https://github.com/Isaac-sys-2023/mini-netflix-back.git
```

### Paso 2. Instale las dependencias de node para que corra el proyecto:

```bash
$ cd mini-netflix-back
$ npm install
```

### Paso 3. Configure su .env con sus propias variables de entorno

```bash
$ cp .env.example .env
```

```.env
POSTGRES_HOST=your_host
POSTGRES_PORT=your_port
POSTGRES_USERNAME=your_username
POSTGRES_PASSWORD=your_password
POSTGRES_DATABASE=your_database
POSTGRES_SSL=false

JWT_SECRET=yourSecretKeyHere
```

**Nota:** Si usara docker para correr el proyecto configure tambien el docker-compose.yml para que coincida con el .env y ejecute en la terminal

```bash
$ docker compose up -d
```

### Paso 4. Inicialice el proyecto:

```bash
$ npm run start:dev
```

Luego diríjase a http://localhost:3000/ donde debería de ver el texto "Hello World".

## Entidades

### Users

Para el acceso de algunos endpoints que estan protegidos por autenticacion y autorizacion debe crearse un usuario y luego logearse con este, para ello:

En Postman (o herramientas similares):

Request POST a http://localhost:3000/auth/register

```.json
{
  "username": "your_username"
  "email": "your_email@valido.com"
  "password": "su_contraseña_Super_Segura"
}
```

Luego hacer un request POST a http://localhost:3000/auth/login y copiar el token que este le generará:

```.json
{
  "email": "your_email@valido.com"
  "password": "su_contraseña_Super_Segura"
}
```

Su respuesta probablemente será algo como:

```.json
{
  "token": "ey.....algo"
}
```

Copie ese token y guardelo para más despues.

### Series

La entidad de series tiene los siguientes endpoints:

**Obtener todas las series y sus episodios:**<br>GET http://localhost:3000/serie

**Obtener una serie (por id) y sus episodios:**<br>GET http://localhost:3000/serie/{id}

**Crear una serie:**<br>POST http://localhost:3000/serie<br>Requiere el token de autenticacion y enviar el siguiente body

```.json
{
  "titulo": "titulo_de_la_serie",
  "genero": "genero_de_la_serie",
  "sinopsis": "sinopsis_de_la_serie",
  "urlPortada": "url_de_imagen_de_portada"
}

```

**Actualizar/Editar una serie:**<br>PATCH http://localhost:3000/serie/{id}<br>Requiere el token de autenticacion y enviar el siguiente body parcialmente (es decir no necesariamente debe enviar todos los campos con enviar 1 o más de estos basta)

```.json
{
  "titulo": "titulo_de_la_serie",
  "genero": "genero_de_la_serie",
  "sinopsis": "sinopsis_de_la_serie",
  "urlPortada": "url_de_imagen_de_portada"
}

```

**Eliminar una serie:**<br>DELETE http://localhost:3000/serie/{id}<br>Requiere el token de autenticacion.

### Episodios

Los episodios estan relacionados a series mediante una relacion de uno a muchos, es decir, muchos episodios son de una serie, pero una serie tiene muchos episodios.

La entidad de episodios tiene los siguientes endpoints:

**Obtener todos los episodios:**<br>GET http://localhost:3000/episodio

**Obtener un episodio (por id) y sus episodios:**<br>GET http://localhost:3000/episodio/{id}

**Crear un episodio:**<br>POST http://localhost:3000/episodio<br>Requiere el token de autenticacion y enviar el siguiente body

```.json
{
  "titulo": "titulo_de_la_episodio",
  "duracion": 0, (En minutos)
  "numeroCapitulo": 0,
  "serieId": 0 (id numerico de la serie a la que pertenece el episodio)
}

```

**Nota:** Elimine todo lo que esta en parentesis a la hora de copiar el json.

**Actualizar/Editar un episodio:**<br>PATCH http://localhost:3000/episodio/{id}<br>Requiere el token de autenticacion y enviar el siguiente body parcialmente (es decir no necesariamente debe enviar todos los campos con enviar 1 o más de estos basta)

```.json
{
  "titulo": "titulo_de_la_episodio",
  "duracion": 0, (En minutos)
  "numeroCapitulo": 0,
  "serieId": 0 (id numerico de la serie a la que pertenece el episodio)
}

```

**Nota:** Elimine todo lo que esta en parentesis a la hora de copiar el json.

**Eliminar un episodio:**<br>DELETE http://localhost:3000/episodio/{id}<br>Requiere el token de autenticacion.
