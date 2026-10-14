# FOX.FILES — Recorrido virtual

## 1. Concepto

FOX.FILES es un recorrido virtual inspirado en la película
*Fantastic Mr. Fox* (2009), dirigida por Wes Anderson.

El proyecto explora cinco espacios de la película mediante
una navegación interactiva que permite descubrir elementos
de la historia, interpretar sus escenarios y volver al inicio
desde cualquier punto.

## 2. Objetivo

Crear una experiencia digital que combine narrativa,
diseño visual e interacción. El usuario puede elegir
su propio recorrido y explorar los espacios a su ritmo.

## 3. Espacios del recorrido

1. **Inicio:** presenta el concepto y permite elegir una ruta.
2. **La casa:** explora la familia y la identidad del protagonista.
3. **Las granjas:** representa el conflicto y el deseo de control.
4. **El refugio:** aborda la cooperación y la supervivencia.
5. **El supermercado:** explora la comida y el acceso a recursos.
6. **Los túneles:** representa las rutas alternativas y la creatividad.

## 4. Identidad visual

### Paleta de colores

- Crema: #F4ECD9
- Papel: #FFF8E9
- Negro: #24261F
- Naranja quemado: #E85D2A
- Rojo: #B93726
- Amarillo mostaza: #F2BD3F
- Verde oliva: #687A45
- Azul grisáceo: #6B8990

La paleta evoca los tonos otoñales, los materiales artesanales
y la estética cinematográfica de la película.

### Tipografía

- **Syne:** titulares grandes y expresivos.
- **Space Grotesk:** textos y descripciones.
- **DM Mono:** etiquetas, numeración y detalles técnicos.

Las fuentes se cargan desde Google Fonts.

### Composición

Se utilizan retículas, bordes definidos, sombras marcadas,
tarjetas numeradas y una composición editorial para crear
una identidad visual coherente.

## 5. Interactividad

- Los enlaces conectan los seis espacios.
- Cada página incluye una ruta para volver al inicio.
- Las letras cambian de color cuando se pulsan.
- El audio ambiental se puede activar y pausar.
- Las tarjetas tienen efectos visuales al pasar el cursor.
- El diseño se adapta a pantallas de computador y móvil.

## 6. Estructura técnica

- `index.html`: portada y mapa de navegación.
- `casa.html`: espacio de la casa.
- `granjas.html`: espacio de las granjas.
- `refugio.html`: espacio del refugio.
- `supermercado.html`: espacio del supermercado.
- `tuneles.html`: espacio de los túneles.
- `css/estilo.css`: estilos y diseño visual.
- `js/interacciones.js`: interacciones de las letras y audio.
- `img/`: recursos visuales.
- `audio/ambiente.mp3`: recurso de audio.

## 7. Decisiones creativas

La navegación permite que el usuario elija entre diferentes
espacios en lugar de seguir una única secuencia obligatoria.

Los colores y la tipografía construyen una identidad visual
reconocible. Las interacciones de las letras y el sonido
buscan que la experiencia no sea únicamente de lectura,
sino también de exploración.

## 8. Pruebas

- [ ] La portada carga correctamente.
- [ ] Los cinco espacios se pueden abrir.
- [ ] Las imágenes aparecen correctamente.
- [ ] Los enlaces funcionan.
- [ ] Es posible volver al inicio desde todas las páginas.
- [ ] Las letras cambian de color.
- [ ] El audio se reproduce después de una interacción.
- [ ] El diseño funciona en pantallas pequeñas.

## 9. Observaciones

El audio utiliza un archivo local y no incluye automáticamente
la banda sonora original de la película.

Las imágenes utilizadas deben corresponder a los archivos
disponibles en la carpeta `img`.
