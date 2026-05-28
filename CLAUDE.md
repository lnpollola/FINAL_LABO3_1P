---
project_name: FINAL_LABO3_1P
project_type: "academic-first-semester-final"
complexity: "medium"
technologies: "typescript, angular-8, javascript, firebase, bootstrap"
description: "Primer parcial final de Laboratorio Programación III (2018) - Demostración de Angular, Firebase y Material Design"
status: "completed"
role_match: "Frontend Developer, Angular Developer"
---

# 📌 FINAL_LABO3_1P

## 🎯 Descripción

**Primer Parcial Final** de **Laboratorio de Programación III** (2018).
Proyecto académico para demostrar conocimientos de desarrollo web con Angular.

**Archivos principales:**
- `PrimerParcial-starter/` - Código base del parcial
- `PrimerParcial-starter.zip` - Archivo comprimido del starter
- `Primer parcial - 2018.pdf` - Enunciado del parcial (6.8 MB)

## 🛠️ Tecnologías

- **Lenguajes:** TypeScript, JavaScript
- **Frameworks:** Angular 8 (v8.2.x)
- **CLI:** Angular CLI v8.3.2
- **UI:** Angular Material 8.2.3, Bootstrap 4.3.1, ng-bootstrap 5.1.4
- **Auth:** Firebase Authentication v7.24.0
- **Testing:** Jasmine, Karma, Protractor
- **Export:** angular-file-saver, pdfmake, ngx-slick-carousel

## 📁 Estructura del Proyecto

```
FINAL_LABO3_1P/
├── CLAUDE.md              ← Este archivo
├── .claude/               ← Configuración de Claude
│   ├── settings.json
│   ├── agents/
│   ├── commands/
│   ├── hooks/
│   ├── rules/
│   └── skills/
├── .git/
├── angular.json           ← Configuración Angular
├── browserslist
├── e2e/                   ← Tests E2E con Protractor
├── karma.conf.js
├── package.json
├── package-lock.json
├── LICENSE
├── Screenshots/           ← Capturas de prueba
├── src/                   ← Código fuente Angular
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.spec.json
├── tslint.json
├── README.md
├── PrimerParcial-starter/
├── PrimerParcial-starter.zip
└── "Primer parcial - 2018.pdf"
```

## 📦 Dependencias Principales

**Production:**
- Angular: 8.2.11 (animations, cdk, common, compiler, core, forms, http)
- Angular Material: 8.2.3
- Angular Router: 8.2.4
- Bootstrap: 4.3.1
- ng-bootstrap: 5.1.4
- Firebase: 7.24.0
- jQuery: 3.4.1

**Dev:**
- Angular CLI: 8.3.2
- TypeScript: 3.5.3
- Protractor: 5.4.0
- Karma + Jasmine
- codelyzer: 5.0.0

## 🚀 Comandos Útiles

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
ng serve

# Build para producción
ng build

# Ejecutar tests unitarios
npm test

# Ejecutar E2E tests
ng e2e

# Linting
ng lint

# Deploy a GitHub Pages
ng deploy
```

## 🧪 Testing

- **Unit tests:** Jasmine + Karma en `src/`
- **E2E tests:** Protractor en carpeta `e2e/`
- **Cobertura:** Istanbul reporter en Karma
- **Requisito:** Mantener tests verdes (cero failures)

## 💡 Puntos Clave para el Desarrollador

1. **Proyecto académico:** Primer parcial de evaluación
2. **Angular v8:** Versión específica del curso (2018)
3. **Firebase:** Autenticación y datos en Firestore/Firebase
4. **Material Design:** Componentes de Angular Material
5. **Bootstrap:** Complemento de estilos
6. **Simplicidad:** No sobrecargar con librerías innecesarias

## 🔒 Seguridad y restricciones

- **NUNCA** commitear `node_modules/`
- **NUNCA** hardcodear credenciales Firebase (`firebaseOptions`)
- **NUNCA** commitear `.env` o variables con secretos
- **NUNCA** commitear `PrimerParcial-starter.zip` (es el archivo original)
- Validar y sanitizar todos los inputs del usuario

## 📝 Contexto del Proyecto

- **Asignatura:** Programación III (Laboratorio)
- **Periodo:** 2018
- **Tipo:** Parcial final de evaluación
- **Audiencia:** Estudiantes de desarrollo web
- **Objetivo:** Demostrar conocimientos de Angular, Firebase y UI moderna

---
*Memoria de proyecto generada por Claude*
