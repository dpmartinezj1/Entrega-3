
document.addEventListener("DOMContentLoaded", () => {
    const musica = document.getElementById("musica");
    const botonSonido = document.getElementById("botonSonido");
    const selector = document.getElementById("selectorCancion");

    const audios = {
        inicio: "audio/ambiente.mp3",
        casa: "audio/casa.mp3",
        granjas: "audio/granjas.mp3",
        refugio: "audio/ambiente.mp3",
        supermercado: "audio/supermercado.mp3",
        tuneles: "audio/tuneles.mp3"
    };

    const espacio = document.body.dataset.espacio || "inicio";
    const audioInicial = audios[espacio] || audios.inicio;

    if (musica) {
        musica.src = audioInicial;
        musica.loop = true;
        musica.volume = 0.4;
        musica.load();

        if (selector) {
            selector.value = audioInicial;

            selector.addEventListener("change", async () => {
                musica.src = selector.value;
                musica.load();

                try {
                    await musica.play();
                    if (botonSonido) {
                        botonSonido.textContent = "♫ PAUSAR";
                    }
                } catch (error) {
                    if (botonSonido) {
                        botonSonido.textContent = "♫ REPRODUCIR";
                    }
                }
            });
        }

        if (botonSonido) {
            botonSonido.addEventListener("click", async () => {
                if (musica.paused) {
                    try {
                        await musica.play();
                        botonSonido.textContent = "♫ PAUSAR";
                    } catch (error) {
                        console.error("No se pudo reproducir el audio:", error);
                        botonSonido.textContent = "ERROR DE AUDIO";
                    }
                } else {
                    musica.pause();
                    botonSonido.textContent = "♫ REPRODUCIR";
                }
            });
        }
    }

    // Letras interactivas
    const letras = document.querySelectorAll(
        ".letra, .letras-interactivas button"
    );

    const colores = [
        "#e85d2a",
        "#687a45",
        "#f2bd3f",
        "#6b8990",
        "#b93726",
        "#24261f"
    ];

    letras.forEach((letra, indice) => {
        letra.addEventListener("click", async () => {
            letra.style.color = colores[indice % colores.length];
            letra.classList.toggle("activa");

            if (musica && musica.paused) {
                try {
                    await musica.play();
                    if (botonSonido) {
                        botonSonido.textContent = "♫ PAUSAR";
                    }
                } catch (error) {
                    console.log("Pulsa el botón para activar el sonido.");
                }
            }
        });
    });

    // El video pausa la música para escuchar la explicación.
    const video = document.querySelector(".video-granjas");

    if (video) {
        video.addEventListener("play", () => {
            if (musica) musica.pause();
            if (botonSonido) {
                botonSonido.textContent = "♫ REPRODUCIR";
            }
        });
    }
});
