# Davimar Group · Meta Ads B2B Analytics & Strategy Dashboard

Plataforma de análisis de métricas orgánicas y marco de medición publicitaria para **@davimargroup** (Abril – Agosto 2026). Integra estudio comparativo mes a mes, análisis de retención en video y reels, demografía B2B, matriz de oportunidades de mejora y generador de reportes ejecutivos en PDF de 4 páginas de alta resolución.

---

## 🚀 Tecnologías Utilizadas

- **Frontend:** React 19, TypeScript, Vite 6, Tailwind CSS v4
- **Visualización & Gráficos:** Recharts, Lucide React
- **Motor de Reportes PDF:** jsPDF (vectorial, optimizado para impresión A4)
- **Backend / Servidor:** Express, Node.js (`server.ts` con compilación CJS en `esbuild`)
- **Efectos & Micro-interacciones:** Canvas Confetti, Motion

---

## 🛠️ Instalación y Ejecución Local

### Prerrequisitos
- Node.js 18+ (recomendado Node 20+)
- npm 9+ o pnpm

### Pasos

1. **Clonar o descargar el repositorio:**
   ```bash
   git clone https://github.com/TU_USUARIO/davimar-meta-ads-dashboard.git
   cd davimar-meta-ads-dashboard
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Variables de entorno (opcional para funciones estándar):**
   Copiar `.env.example` a `.env` si se requiere configuración adicional:
   ```bash
   cp .env.example .env
   ```

4. **Iniciar en modo desarrollo:**
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:3000`.

5. **Compilar para producción:**
   ```bash
   npm run build
   ```
   Genera los archivos estáticos optimizados (`index.html`, JavaScript, CSS y assets) dentro de la carpeta `dist/` y el servidor bundled en `dist/server.cjs`.

6. **Ejecutar el servidor de producción:**
   ```bash
   npm start
   ```

---

## 📂 Estructura del Proyecto

```
├── index.html                  # Punto de entrada HTML con metaetiquetas SEO y fuentes
├── package.json                # Scripts y dependencias
├── vite.config.ts              # Configuración de Vite y Tailwind CSS v4
├── server.ts                   # Servidor Express con middleware Vite / estático
├── src/
│   ├── main.tsx                # Montaje de React
│   ├── App.tsx                 # Contenedor principal y navegación por pestañas
│   ├── index.css               # Estilos globales de Tailwind CSS
│   ├── types.ts                # Modelos de datos TypeScript (Métricas, Campañas, Reels)
│   ├── data/
│   │   ├── auditData.ts        # Métricas históricas consolidadas (Abril - Agosto 2026)
│   │   └── mockData.ts         # Datos de campañas y benchmarks
│   ├── components/             # Módulos de visualización y componentes UI
│   │   ├── ExecutiveSummary.tsx
│   │   ├── CampaignPlanner.tsx
│   │   ├── OrganicPerformance.tsx
│   │   ├── VideoAnalysis.tsx
│   │   ├── AudienceDemographics.tsx
│   │   ├── BenchmarksROAS.tsx
│   │   └── ImprovementPlan.tsx
│   └── utils/
│       ├── generateDashboardPdf.ts   # Generador de informe PDF ejecutivo (4 págs)
│       └── generateReelPdf.ts        # Generador de auditoría individual por Reel
└── dist/                       # Salida generada de compilación lista para despliegue
```

---

## 📤 Cómo llevar este proyecto a GitHub

### Opción 1: Exportar directamente desde Google AI Studio (Recomendada)
1. En la esquina superior derecha de la interfaz de AI Studio, haz clic en el menú **Settings / Export** (ícono de tres puntos o rueda dentada).
2. Selecciona **Export to GitHub** o **Download as ZIP**.
3. Si eliges GitHub, vincula tu cuenta y se creará automáticamente el repositorio con todo el historial de código.

### Opción 2: Subir manualmente mediante Git CLI
Si descargaste el archivo ZIP o tienes acceso a tu terminal local:

```bash
# 1. Inicializar repositorio
git init

# 2. Agregar todos los archivos
git add .

# 3. Crear el primer commit
git commit -m "feat: Davimar Group Meta Ads Analytics & Strategy Dashboard"

# 4. Vincular a tu repositorio en GitHub
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git

# 5. Subir a GitHub
git push -u origin main
```

---

## 📄 Licencia y Derechos
Desarrollado para **Davimar Group** (@davimargroup) · Departamento de Estrategia Digital y Trade Marketing.
