# Actividad 2.6 - Cheerio

## Objetivo

Procesar HTML en backend usando Node.js, Express y Cheerio para extraer información estructurada desde un archivo HTML.

---

# Tecnologías utilizadas

- Node.js
- Express
- Cheerio
- Git
- GitHub

---

# Instalación

## Clonar repositorio

```bash
git clone https://github.com/Cathwe/actividad-cheerio-backend.git
```

## Entrar al proyecto

```bash
cd actividad-cheerio-backend
```

## Instalar dependencias

```bash
npm install
```

---

# Ejecución

Iniciar servidor:

```bash
node server.js
```

Servidor disponible en:

```txt
http://localhost:3000
```

---

# Endpoints

## GET /scrape

Obtiene productos desde un archivo HTML usando Cheerio.

---

# Ejemplo de Request

## Método

```txt
GET
```

## URL

```txt
http://localhost:3000/scrape
```

---

# Ejemplo de Response

```json
{
  "ok": true,
  "total": 3,
  "productos": [
    {
      "nombre": "Leche Entera",
      "precio": "1200",
      "categoria": "Lacteos"
    },
    {
      "nombre": "Arroz",
      "precio": "900",
      "categoria": "Granos"
    },
    {
      "nombre": "Aceite",
      "precio": "2500",
      "categoria": "Despensa"
    }
  ]
}
```

---

# Datos extraídos

- Nombre
- Precio
- Categoría

---

# Selectores utilizados

```js
.producto
.nombre
.precio
.categoria
```

---

# Arquitectura del proyecto

```txt
controllers/
services/
routes/
data/
```

---

# Manejo de errores

- HTML vacío
- Productos no encontrados
- Error interno del servidor

---

# Autor

Camila Ávila Salas