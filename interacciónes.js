document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("musica");
  const button = document.getElementById("botonSonido");
  const select = document.getElementById("selectorCancion");

  const espacio = document.body.dataset.espacio || "inicio";

  const canciones = {
    inicio: "audio/ambiente.mp3",
    casa: "audio/casa.mp3",
    granjas: "audio/granjas.mp3",
    refugio: "audio/ambiente.mp3",
    tuneles: "audio/tuneles.mp3",
    supermercado: "audio/supermercado.mp3"
  };

  function actualizarBoton() {
    if (!button || !audio) return;

    button.textContent = audio.paused
      ? "♫ REPRODUCIR"
      : "♫ PAUSAR";
  }

  async function reproducir() {
    try {
      await audio.play();
      actualizarBoton();
    } catch (error) {
      console.error("No se pudo reproducir el audio:", error);

      if (button) {
        button.textContent = "REVISAR AUDIO";
      }
    }
  }

  if (audio) {
    const cancionInicial = canciones[espacio] || canciones.inicio;

    audio.src = cancionInicial;
    audio.loop = true;
    audio.volume = 0.4;
    audio.load();

    if (select) {
      select.value = cancionInicial;

      select.addEventListener("change", () => {
        audio.src = select.value;
        audio.load();
        reproducir();
      });
    }

    if (button) {
      button.addEventListener("click", () => {
        if (audio.paused) {
          reproducir();
        } else {
          audio.pause();
          actualizarBoton();
        }
      });
    }

    audio.addEventListener("play", actualizarBoton);
    audio.addEventListener("pause", actualizarBoton);

    audio.addEventListener("error", () => {
      console.error("No se encuentra el archivo:", audio.currentSrc);

      if (button) {
        button.textContent = "REVISAR ARCHIVO";
      }
    });
  }

  const colores = [
    "#e85d2a",
    "#687a45",
    "#f2bd3f",
    "#6b8990",
    "#b93726",
    "#24261f"
  ];

  document.querySelectorAll(".letras-interactivas button").forEach((letra, i) => {
    letra.addEventListener("click", () => {
      letra.style.color = colores[i % colores.length];
      letra.classList.toggle("activa");

      if (audio && audio.paused) {
        reproducir();
      }
    });
  });

  const video = document.querySelector(".video-granjas");

  if (video && audio) {
    video.addEventListener("play", () => {
      audio.pause();
      actualizarBoton();
    });
  }
});