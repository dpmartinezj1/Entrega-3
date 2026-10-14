document.addEventListener("DOMContentLoaded", () => {
  /* ===================== AUDIO ===================== */
  const audio = document.getElementById("musica");
  const boton = document.getElementById("botonSonido");
  const selector = document.getElementById("selectorCancion");

  const canciones = {
    inicio: "audio/ambiente.mp3",
    casa: "audio/casa.mp3",
    granjas: "audio/granjas.mp3",
    refugio: "audio/ambiente.mp3",
    tuneles: "audio/tuneles.mp3",
    supermercado: "audio/supermercado.mp3"
  };

  function actualizarBoton() {
    if (!boton || !audio) return;
    boton.textContent = audio.paused ? "♫ REPRODUCIR" : "♫ PAUSAR";
  }

  async function reproducir() {
    if (!audio) return;
    try {
      await audio.play();
    } catch (error) {
      console.error("Error al reproducir:", error);
      // Si el navegador bloquea el audio, basta con volver a pulsar el botón.
      if (boton && error.name !== "NotAllowedError") {
        boton.textContent = "♫ NO SE ENCUENTRA EL AUDIO";
        return;
      }
    }
    actualizarBoton();
  }

  if (audio) {
    const espacio = document.body.dataset.espacio || "inicio";
    const cancionInicial = canciones[espacio] || canciones.inicio;

    audio.loop = true;
    audio.volume = 0.7;
    audio.preload = "auto";
    audio.src = cancionInicial;
    audio.load();

    if (selector) selector.value = cancionInicial;

    if (boton) {
      boton.addEventListener("click", () => {
        if (audio.paused) {
          reproducir();
        } else {
          audio.pause();
        }
      });
    }

    if (selector) {
      selector.addEventListener("change", () => {
        audio.pause();
        audio.src = selector.value;
        audio.load();
        reproducir();
      });
    }

    audio.addEventListener("play", actualizarBoton);
    audio.addEventListener("pause", actualizarBoton);
    audio.addEventListener("error", () => {
      console.error("No se pudo cargar el audio:", audio.currentSrc, audio.error);
      if (boton) boton.textContent = "♫ NO SE ENCUENTRA EL AUDIO";
    });

    // El audio se pausa cuando se reproduce el video de las granjas
    const video = document.querySelector(".video-granjas");
    if (video) {
      video.addEventListener("play", () => audio.pause());
    }

    // Al tocar la foto principal se activa (o pausa) la música
    document.querySelectorAll(".marco img").forEach((foto) => {
      foto.title = "Toca la foto para activar la música";
      foto.addEventListener("click", () => {
        if (audio.paused) {
          reproducir();
        } else {
          audio.pause();
        }
      });
    });

    actualizarBoton();
  } else {
    console.error("No existe el elemento <audio id=\"musica\">.");
  }

  /* ============ COLOR + MOVIMIENTO SUTIL DE LETRAS ============ */
  const paleta = ["#e85d2a", "#687a45", "#f2bd3f", "#6b8990", "#b93726", "#24261f"];

  function cambiarLetra(elemento) {
    // Avanza al siguiente color de la paleta (empieza en uno al azar)
    let indice = elemento.dataset.color;
    indice = indice === undefined
      ? Math.floor(Math.random() * paleta.length)
      : (Number(indice) + 1) % paleta.length;

    elemento.dataset.color = indice;
    elemento.style.color = paleta[indice];

    // Reinicia la animación para que se repita en cada toque
    elemento.classList.remove("mueve");
    void elemento.offsetWidth;
    elemento.classList.add("mueve");
  }

  // Letras de los botones interactivos
  document.querySelectorAll(".letras-interactivas button").forEach((letra) => {
    letra.addEventListener("click", () => {
      cambiarLetra(letra);
      if (audio && audio.paused) reproducir();
    });
    letra.addEventListener("animationend", () => letra.classList.remove("mueve"));
  });

  // Letras de los títulos: se separa cada letra en un <span>
  document.querySelectorAll(".hero h1, .cabecera-espacio h1").forEach((titulo) => {
    titulo.setAttribute("aria-label", titulo.textContent.replace(/\s+/g, " ").trim());

    const walker = document.createTreeWalker(titulo, NodeFilter.SHOW_TEXT);
    const nodos = [];
    while (walker.nextNode()) nodos.push(walker.currentNode);

    nodos.forEach((nodo) => {
      const fragmento = document.createDocumentFragment();

      nodo.textContent.split(/(\s+)/).forEach((trozo) => {
        if (!trozo) return;

        if (/^\s+$/.test(trozo)) {
          fragmento.appendChild(document.createTextNode(" "));
          return;
        }

        const palabra = document.createElement("span");
        palabra.className = "palabra-titulo";
        palabra.setAttribute("aria-hidden", "true");

        [...trozo].forEach((caracter) => {
          const letra = document.createElement("span");
          letra.className = "letra-titulo";
          letra.textContent = caracter;
          letra.addEventListener("pointerenter", () => cambiarLetra(letra));
          letra.addEventListener("animationend", () => letra.classList.remove("mueve"));
          palabra.appendChild(letra);
        });

        fragmento.appendChild(palabra);
      });

      nodo.replaceWith(fragmento);
    });
  });
});


