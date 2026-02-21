# Guía de Personalización del Portafolio

Este portafolio ha sido diseñado para ser elegante, sobrio y fácil de mantener. A continuación, encontrarás las instrucciones para personalizar el contenido, los colores y las tipografías, así como recomendaciones para optimizar tus archivos multimedia.

## 1. Cómo cambiar Textos, Imágenes y Videos

Toda la información principal de tu portafolio está centralizada en el archivo `src/App.tsx`.
Abre este archivo y busca la constante `PORTFOLIO_DATA` en la parte superior.

```typescript
const PORTFOLIO_DATA = {
  name: "Joni b",
  role: "Ilustrador & Artista Digital",
  bio: "Tu biografía aquí...",
  socials: {
    instagram: "https://instagram.com/tu_usuario",
    youtube: "https://youtube.com/c/tu_canal",
    tiktok: "https://tiktok.com/@tu_usuario",
    email: "hola@jonib.com"
  },
  images: [
    { id: 1, src: "/images/ilustracion1.jpg", alt: "Descripción", title: "Título de la obra" },
    // Añade o modifica más imágenes aquí
  ],
  videos: [
    { id: 1, src: "/videos/loop1.mp4", poster: "/images/poster1.jpg", title: "Loop Animado 1" },
    // Añade o modifica más videos aquí
  ]
};
```

### Recomendaciones para Imágenes:
- **Formato:** Usa `WebP` o `JPEG` optimizado (calidad 80-85%).
- **Tamaño (Resolución):** Para la galería, un ancho máximo de `1920px` es ideal. No subas imágenes de 4K o 8K ya que harán la página lenta.
- **Peso:** Intenta que cada imagen pese menos de `500KB`. Puedes usar herramientas como [TinyPNG](https://tinypng.com/) o [Squoosh](https://squoosh.app/).
- **Ubicación:** Crea una carpeta `public/images/` en tu proyecto y guarda ahí tus imágenes. Luego referéncialas en el código como `src: "/images/mi-imagen.jpg"`.

### Recomendaciones para Videos:
- **Formato:** Usa `MP4` con compresión H.264.
- **Tamaño (Resolución):** `1080p` (1920x1080) o `720p` es suficiente para web.
- **Peso:** Mantén los loops cortos (5-15 segundos) y optimiza el peso a menos de `5MB` por video si es posible.
- **Poster:** Siempre incluye una imagen `poster` (una captura del video) para que se muestre mientras el video carga.
- **Ubicación:** Crea una carpeta `public/videos/` y referéncialos como `src: "/videos/mi-loop.mp4"`.

## 2. Cómo cambiar la Carta de Color

El diseño actual utiliza una paleta oscura y fría (tonos azulados/grisáceos oscuros). Si deseas modificarla, puedes hacerlo en dos lugares:

1. **Fondo General:** En `src/index.css`, busca la regla `body` y cambia el `background-color`:
   ```css
   body {
     background-color: #05070a; /* Cambia este código hexadecimal */
   }
   ```
2. **Secciones Alternas:** En `src/App.tsx`, algunas secciones tienen fondos ligeramente distintos para crear contraste (por ejemplo, `bg-[#080b11]`). Busca estas clases en los `<section>` y modifícalas.
3. **Acentos:** El color de acento principal es blanco (`text-white`, `border-white/20`) y algunos detalles en cyan oscuro (`bg-cyan-800`). Puedes buscar estas clases de Tailwind en `App.tsx` y reemplazarlas (ej. por `bg-indigo-800` o `bg-slate-700`).

## 3. Cómo cambiar las Tipografías

El proyecto utiliza Google Fonts importadas en `src/index.css`.

1. Ve a [Google Fonts](https://fonts.google.com/) y selecciona tus fuentes (una Serif elegante para títulos y una Sans-serif limpia para textos).
2. En `src/index.css`, reemplaza la URL del `@import`:
   ```css
   @import url('https://fonts.googleapis.com/css2?family=Tu+Fuente+Serif&family=Tu+Fuente+Sans&display=swap');
   ```
3. Actualiza las variables en la sección `@theme`:
   ```css
   @theme {
     --font-sans: "Tu Fuente Sans", sans-serif;
     --font-serif: "Tu Fuente Serif", serif;
   }
   ```

## 4. Despliegue en Netlify

Este proyecto está construido con Vite, lo cual lo hace perfecto para Netlify.

1. Sube tu código a un repositorio en GitHub.
2. Entra a [Netlify](https://www.netlify.com/) y haz clic en "Add new site" -> "Import an existing project".
3. Conecta tu cuenta de GitHub y selecciona tu repositorio.
4. Netlify debería detectar automáticamente la configuración:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Haz clic en "Deploy site". ¡Tu portafolio estará en vivo en un par de minutos!
