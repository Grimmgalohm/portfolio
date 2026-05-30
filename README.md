# Dev Portfolio

Este es un portafolio profesional desarrollado con un stack moderno enfocado en el rendimiento, la mantenibilidad y la semántica, siguiendo los principios establecidos en el `ai-manifest`.

## 🚀 Tecnologías Core

- **Framework:** [React 19](https://react.dev/) (TypeScript)
- **Bundler:** [Vite 8](https://vite.dev/)
- **Estilos:** [Tailwind CSS 4.0](https://tailwindcss.com/) (Engine v4)
- **Package Manager:** [pnpm](https://pnpm.io/)
- **Linter/Formatter:** [ESLint](https://eslint.org/) + [TypeScript ESLint](https://typescript-eslint.io/)

## 🛠️ Ambiente de Desarrollo

### Requisitos Previos

- **Node.js:** Versión 20 o superior.
- **pnpm:** Versión 10 o superior recomendada.

### Configuración Inicial

1. Clona el repositorio.
2. Instala las dependencias:
   ```bash
   pnpm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   pnpm dev
   ```

El servidor estará disponible por defecto en `http://localhost:5173`.

### Estructura de Carpetas Clave

- `src/`: Código fuente de la aplicación.
- `ai-manifest/`: Contiene las reglas, principios y guías que rigen el desarrollo de este proyecto. **Es obligatorio seguir estas guías.**
- `public/`: Activos estáticos públicos.

## 📦 Despliegue

### Build de Producción

Para generar una versión optimizada para producción:

```bash
pnpm build
```

Esto generará la carpeta `dist/` lista para ser servida por cualquier servidor web estático.

### Estrategia de Despliegue Recomendada

Se recomienda el uso de plataformas que soporten despliegue continuo (CD) mediante integración con GitHub:

1. **Vercel / Netlify:** Configurar la raíz en la carpeta del proyecto y usar `pnpm build` como comando de construcción y `dist` como directorio de salida.
2. **GitHub Pages:** Utilizar una Action de GitHub para automatizar el build y deploy.

## 🧠 Consideraciones Importantes

### Cumplimiento del Manifiesto
Todo cambio en este repositorio debe alinearse con los documentos en `ai-manifest/`:
- **Core Principles:** Enfoque en Clean Code y SOLID.
- **Frontend Engineering:** Prioridad en semántica HTML, accesibilidad (A11y) y diseño responsivo.

### Estilos con Tailwind 4
Este proyecto utiliza la nueva arquitectura de Tailwind 4. No requiere un archivo `tailwind.config.js`. La configuración se realiza directamente mediante variables CSS en `src/index.css` utilizando `@theme`.

### Gestión de Dependencias
Se ha migrado estrictamente de `npm` a **`pnpm`**. Por favor, evita el uso de `npm install` o `yarn` para prevenir inconsistencias en el `pnpm-lock.yaml`.
