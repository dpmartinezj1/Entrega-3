# Recorrido virtual: Fantastic Mr. Fox

## 1. Concepto y Justificación
El proyecto propone un recorrido virtual interactivo inspirado en la película *Fantastic Mr. Fox* (2009), dirigida por Wes Anderson. La experiencia permite explorar los escenarios clave de la historia mediante una estructura editorial que combina tipografías llamativas, paletas de colores terrosas, imágenes, hipervínculos, un vídeo explicativo y elementos sonoros interactivos activados al hacer clic en las imágenes de cada sección.

## 2. Objetivos del Proyecto
* **Inmersión:** Trasladar la estética visual y narrativa única del universo de Wes Anderson a la web.
* **Interactividad y Control:** Permitir al usuario elegir su propia ruta de navegación entre los diferentes espacios (inicio, casa, granjas, refugio, túneles y supermercado) y activar la música ambiental directamente al interactuar con las imágenes principales.

## 3. Organización del Recorrido
* **Inicio:** Presentación de la película, acceso a la portada principal (con un tamaño optimizado y destacado) y mapa de navegación de los 5 espacios.
* **Espacio 01 (La casa):** Foco en el hogar, la familia y la identidad del protagonista.
* **Espacio 02 (Las granjas):** El conflicto con Boggis, Bunce y Bean, acompañado de un archivo audiovisual en vídeo.
* **Espacio 03 (El refugio):** La cooperación y supervivencia bajo tierra, configurado con su pista de audio correspondiente (`refugio.mp3`).
* **Espacio 04 (Los túneles):** Rutas de escape y agilidad mental.
* **Espacio 05 (El supermercado):** Meta final del recorrido que representa la abundancia.

## 4. Decisiones de Diseño y Estética Visual
Se implementó una tipografía estructurada con **Syne** para titulares, **Space Grotesk** para párrafos y **DM Mono** para etiquetas técnicas. La paleta de colores rescata tonos cálidos característicos del filme (crema, papel, naranja, mostaza y verde oliva). Se eliminó el reproductor estático superior para priorizar una interfaz limpia donde la música se controla orgánicamente mediante las imágenes.

## 5. Estructura Técnica de Archivos
* `index.html`
* `casa.html`
* `granjas.html`
* `refugio.html`
* `tuneles.html`
* `supermercado.html`
* `css/estilo.css`
* `interacciones.js`
* Carpetas de recursos: `img/`, `audio/`, `video/`
