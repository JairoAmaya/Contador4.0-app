# 📊 Contador4.0-app

Sistema de Transformación con IA para Contadores Profesionales. Una biblioteca de 105 prompts especializados listos para usar con personalización de variables.

## ✨ Características

* **🎯 105 Prompts Especializados** organizados en 7 categorías de alto valor.
* **🔍 Búsqueda Inteligente** en tiempo real (por título, contenido y subcategoría).
* **🎨 Modal de Personalización** con sistema de variables dinámico.
* **✏️ Relleno Automático** de variables y vista previa en tiempo real.
* **📋 Copia Directa** a portapapeles con un clic.
* **🤖 Integración con IAs** (Botones directos para Claude, ChatGPT y Gemini).
* **📱 100% Responsive** - Optimizado para Móvil, Tablet y Desktop.
* **⚡ Performance Optimizada** - Construido con React + Vite.

---

## 🎯 Categorías de Prompts

Las 7 categorías están basadas en el flujo de trabajo real de un contador moderno (confirmado de `promptsData.js`):

1.  **📊 Análisis Financiero Estratégico**
2.  **💼 Comunicación Empresarial de Alto Impacto**
3.  **📨 Propuestas y Cotizaciones que Cierran Negocios**
4.  **📈 Reportes y Dashboards Inteligentes**
5.  **⚖️ Cumplimiento Fiscal Proactivo**
6.  **🔍 Auditoría y Control Robusto**
7.  **🌍 Clientes Internacionales Sin Fronteras**

---

## 🚀 Inicio Rápido

**Prerrequisitos:**
* Node.js >= 18.0.0
* npm >= 9.0.0

### Instalación

```bash
# 1. Clonar el repositorio
git clone [https://github.com/TU_USUARIO/contador4-express-v2.git](https://github.com/TU_USUARIO/contador4-express-v2.git)

# 2. Entrar al directorio
cd contador4-express-v2

# 3. Instalar dependencias
npm install

# 4. Ejecutar en modo desarrollo
npm run dev
```
La aplicación se abrirá automáticamente en `http://localhost:3000`.

---

## 📦 Scripts Disponibles

| Script | Descripción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor de desarrollo en `localhost:3000`. |
| `npm run build` | Compila la aplicación para producción en la carpeta `dist`. |
| `npm run preview` | Previsualiza el build de producción localmente. |

---

## 🌐 Despliegue en Vercel

### Opción 1: GitHub Integration (Recomendada)

1.  Conecta tu repositorio de GitHub con Vercel.
2.  Importa el proyecto `contador4-express-v2`.
3.  **Framework Preset:** Vercel lo detectará como `Vite`.
4.  **Build Command:** `vite build`
5.  **Output Directory:** `dist`
6.  Click en **Deploy**.

### Opción 2: Vercel CLI

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Desplegar a producción
vercel --prod
```

---

## 🏗️ Estructura del Proyecto

```
contador4-express-v2/
├── src/
│   ├── App.jsx          # Componente principal (con lógica de modal)
│   ├── styles.css       # Estilos completos + modal
│   ├── promptsData.js   # 105 prompts completos
│   └── main.jsx         # Entry point
├── .gitignore           # Archivos ignorados por Git
├── index.html           # HTML base
├── package.json         # Dependencias y Scripts
├── vite.config.js       # Configuración de Vite
└── README.md            # Este archivo
```

---

## 🎨 Tecnologías

| Tecnología | Versión | Descripción |
| :--- | :--- | :--- |
| **React** | `^18.2.0` | Biblioteca principal de UI. |
| **Vite** | `^5.0.8` | Build tool y servidor de desarrollo. |
| **CSS3** | | Estilos modernos (Flexbox, Grid, Gradientes). |

---

## 📄 Licencia

**UNLICENSED** - Proyecto Privado.

👤 **Autor:** Jairo Amaya - Full Stack Marketer
* **Website:** [jairoamaya.co](https://jairoamaya.co)
