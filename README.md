# PawGuard: Protección para Mascotas ♡

> Plataforma moderna de seguros para mascotas construida con React 18, Vite y TypeScript. Una solución integral para el registro de mascotas, selección de planes de salud y gestión de perfil de usuario.

## Enlaces del Proyecto

- **Live Demo:** https://pawguard-pet-insurance.vercel.app/

## Acceso para Calificación
> **Nota:** Para una revisión rápida, se puede utilizar el número de **DNI** como contraseña tras completar el flujo de registro (Checkout).

## Tech Stack

| Categoría            | Tecnología                    |
| -------------------- | ----------------------------- |
| **Framework**        | React 18 + Vite               |
| **Lenguaje**         | TypeScript                    |
| **Backend / Auth**   | Supabase (PostgreSQL)         |
| **Estado Global**    | Zustand                       |
| **Estilos**          | TailwindCSS                   |
| **Iconografía**      | Phosphor Icons                |
| **Mapas**            | React Leaflet (OpenStreetMap) |

## Prerrequisitos

- **Node.js** 18+
- **npm** 9+
- **Cuenta en Supabase** (para variables de entorno)

## Inicio Rápido

1. **Clonar y configurar variables**
   Crea un archivo `.env` en la raíz con tus credenciales de Supabase:
   ```env
   VITE_SUPABASE_URL=tu_url
   VITE_SUPABASE_ANON_KEY=tu_key
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar servidor de desarrollo**
   ```bash
   npm run dev
   ```

## Arquitectura

El proyecto utiliza una **Feature-Based Architecture**, separando la lógica por módulos independientes para asegurar escalabilidad y fácil mantenimiento.

```
src/
├── app/ # Páginas principales y vistas de entrada
├── assets/ # Imágenes, logos y recursos estáticos
├── common/ # Componentes UI, hooks, store y layouts compartidos
├── features/ # Módulos: auth, profile, checkout, clinics (Lógica propia)
└── router/ # Configuración de rutas (React Router DOM)
```

## Funcionalidades Principales (Key Features)

- **Smart Onboarding System:** Flujo de registro secuencial de 3 pasos (Usuario → Mascota → Plan) con validación preventiva y **persistencia de estado** vía Zustand, garantizando que el progreso se mantenga incluso tras recargar la página.
- **Dynamic User Dashboard:** Panel centralizado que sincroniza en tiempo real los datos del titular, información técnica de las mascotas y visualización de planes activos consumiendo directamente desde la base de datos de **Supabase**.
- **Security-First Architecture:** Gestión de identidad con rutas protegidas, políticas de seguridad **RLS (Row Level Security)** y sistema de cierre de sesión automático para garantizar la privacidad total de los datos del usuario.
- **Hybrid Service Map:** Localizador interactivo de sedes mediante **React Leaflet**, diseñado bajo un modelo de negocio híbrido: atención directa en red afiliada o gestión de reembolsos externos vía correo electrónico.
- **Responsive Experience:** Interfaz optimizada bajo el enfoque **Mobile-First**, utilizando un sistema de diseño minimalista con curvas suaves y componentes UI personalizados para máxima legibilidad.
- **Self-Service Security:** Módulo independiente para la actualización de credenciales con validación de seguridad e integración directa con el servicio de autenticación de Supabase.


## Reglas de Commits (Conventional Commits)

Para mantener un historial limpio y profesional, utilizamos los siguientes prefijos:

- `feat:` Nueva funcionalidad
- `fix:` Corrección de un error
- `docs:` Cambios en documentación
- `style:` Cambios de diseño/formato que no afectan la lógica
- `refactor:` Mejora de código que no añade funciones ni arregla bugs


## Estándares de Ingeniería

- **Feature-Based Architecture:** El código está organizado por dominios de negocio (Auth, Checkout, Profile), lo que facilita el mantenimiento.
- **Clean Code & SRP:** Aplicación del principio de Responsabilidad Única en cada Hook y Service.
- **TypeScript Ready:** Tipado estático para asegurar la integridad de los datos en toda la aplicación.
- **Conventional Commits:** Historial de Git profesional siguiendo los estándares de la industria.

## Resources

- [React 18 Docs](https://react.dev) - Biblioteca principal para la interfaz de usuario.
- [Vite Guide](https://vitejs.dev) - Herramienta de construcción y servidor de desarrollo.
- [Supabase Docs](https://supabase.com) - Backend as a Service para Auth y Base de Datos.
- [Zustand Docs](https://pmnd.rs) - Gestión de estado global simplificada.
- [TailwindCSS](https://tailwindcss.com) - Framework de estilos basado en utilidades.
- [Phosphor Icons](https://phosphoricons.com) - Set de iconos consistente y minimalista.
- [React Leaflet](https://js.org) - Integración de mapas interactivos de OpenStreetMap.
- [React Router](https://reactrouter.com) - Manejo de navegación y rutas protegidas.

---
*Built with ♡ by [Elynzx](https://github.com/elynzx)*
