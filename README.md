# Descripción General del Proyecto

## HTML y CSS

### Requisitos
Creé una página web que incluye:
1. **Encabezado**: Nombre del usuario e imagen de perfil.
2. **Sección Sobre Mí**: Breve descripción del usuario.
3. **Lista de Intereses**: Intereses del usuario.
4. **Formulario de Contacto**: Campos para nombre, email y mensaje.

### Enfoque
- Usé HTML semántico y CSS puro para un diseño responsive.
- Implementé media queries para adaptabilidad a distintos dispositivos.
- Apliqué módulos CSS para evitar conflictos de estilos.
- Añadí animaciones sutiles para mejorar la experiencia del usuario.

## React y Next.js 14

### Implementación
- Configuré el proyecto con Next.js 14.
- Desarrollé componentes React para cada sección: `Header`, `About`, `Interests`, y `ContactForm`.
- Aproveché el renderizado del lado del servidor y la generación de sitios estáticos de Next.js.

### Mejoras
- Implementé estados de carga para operaciones de datos.
- Optimicé imágenes con el componente `next/image`.

## API Externa y React Query

Integré una API externa usando React Query para:
- Obtener datos en tiempo real.
- Mejorar la gestión del estado y caché.
- Implementar revalidación y actualización en segundo plano.

## Extras

- **Módulos CSS**: Encapsulé estilos para cada componente.
- **Animaciones**: Añadí transiciones suaves a elementos interactivos.
- **Pruebas**: Escribí pruebas unitarias con Jest y Testing Library para componentes clave.

## Correr el proyecto

Asegúrate de tener instalado lo siguiente en tu sistema:

- Node.js (versión 12.0 o superior)
- npm (normalmente se instala con Node.js)
- Git

## Clonar el repositorio

1. Abre tu terminal.
2. Ejecuta el siguiente comando para clonar el repositorio:

   git clone https://github.com/tu-usuario/tu-proyecto-nextjs.git

3. Ingresa al directorio del proyecto:

   cd tu-proyecto-nextjs

## Instalar dependencias

Instala las dependencias del proyecto ejecutando:

npm install

## Ejecutar el proyecto

1. Para iniciar el servidor de desarrollo, ejecuta:

   npm run dev

2. Abre tu navegador y visita `http://localhost:3000` para ver la aplicación.

## Construcción para producción

1. Para construir la aplicación para producción, ejecuta:

   npm run build

2. Para iniciar el servidor de producción, ejecuta:

   npm start

## Comandos adicionales

- `npm test`: Ejecuta las pruebas (si están configuradas).



