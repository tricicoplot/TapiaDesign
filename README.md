# TapiaDesign - Consultora de Diseño de Interiores

Sitio web profesional, interactivo y responsivo enfocado en la presentación de proyectos de diseño de interiores, optimización de espacios y asesorías personalizadas en Santiago de Chile.

Este desarrollo corresponde a la **Evaluación N°1** de la asignatura **Programación Front End**.

---

## 📋 Información Académica

* **Asignatura:** Programación Front End
* **Evaluación:** Evaluación N°1 (Landing Page)
* **Tema Asignado:** Tema 9 - Consultora de diseño de interiores
* **Estudiantes / Integrantes:** * Fabian Tapia
    * Cristian Plaza
* **Sección:** 2026|O TI3V31|V-IEI-N3-P3-C1|V
* **Sede:** INACAP Sede La Granja IEI

---

## 🚀 Características del Proyecto (Cumplimiento de Rúbrica)

* **E1 - Estructura HTML5 Válida:** Uso estricto de etiquetas semánticas (`header`, `nav`, `main`, `section`, `article`, `footer`) cumpliendo con los estándares de accesibilidad y validación W3C.
* **E2 - Secciones Mínimas Completas:** Inclusión de todas las secciones requeridas por la guía: Hero, Sobre Nosotros, Catálogo de Soluciones (Servicios), Tabla de Tarifas, Testimonios/Equipo y Formulario de Contacto.
* **E3 - Imágenes con Atributo Alt:** Inclusión de descripciones claras y accesibles mediante el atributo `alt` en cada recurso visual del sitio.
* **E4 - CSS Externo y Variables:** Centralización de estilos en un único archivo (`home.css`) utilizando variables CSS para una gestión limpia de la paleta de colores corporativa.
* **E5 - Layout con Flexbox o Grid:** Estructuración de la cabecera, grillas de servicios y distribución del carrusel mediante módulos modernos de alineación CSS.
* **E6 & E7 - Diseño Responsive y Accesibilidad:** Adaptabilidad fluida garantizada mediante Media Queries para resoluciones móviles, asegurando legibilidad con tamaños base correctos, contraste óptimo y scroll horizontal seguro en tablas (`.ts-table-wrapper`).
* **E8 - Formulario con Validación JS:** Implementación de lógica nativa en JavaScript para interceptar y validar los campos obligatorios del formulario de contacto antes de su envío.
* **E9 - Repositorio Organizado:** Control de versiones estructurado a través de Git con commits descriptivos frecuentes, inclusión de archivo `.gitignore` y documentación completa.

---

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Marcado semántico y estructuración de contenidos.
* **CSS3:** Estilos unificados, adaptabilidad móvil y diseño de componentes visuales.
* **JavaScript (Vanilla JS):** Lógica nativa e independiente para el control del carrusel instantáneo y la validación del formulario.

---

## 📂 Estructura del Proyecto

```text
├── index.html               # Portada principal con carrusel responsivo
├── README.md                # Documentación del proyecto y datos de evaluación
├── .gitignore               # Exclusión de archivos temporales del sistema
└── src/                     # Carpeta contenedora de recursos
    ├── assets/              # Recursos visuales (Logo vectorial SVG e imágenes de proyectos)
    ├── css/                 # Hojas de estilo
    │   └── home.css         # Archivo único de estilos unificados (Portadas/Servicios)
    └── js/                  # Scripts del sistema
        ├── carousel.js      # Lógica nativa aislada para el cambio de imágenes
        └── form.js          # Lógica nativa para la validación del formulario de contacto

---

## 💻 Ejecución en Entorno Local

1. Clonar el repositorio desde GitHub:
   git clone https://github.com/tricicoplot/TapiaDesign.git

2. Navegar a la carpeta del proyecto:
   cd TapiaDesign

3. Visualizar el sitio:
   * Abre directamente el archivo `index.html` en tu navegador.
   * Se recomienda el uso de la extensión **Live Server** en Visual Studio Code para levantar el entorno local en `http://127.0.0.1:5500`.

---

## ✒️ Créditos

* **Desarrolladores:** Fabian Tapia & Cristian Plaza
* **Año:** 2026