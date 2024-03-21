document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar todos los elementos de álbumes
    const albums = document.querySelectorAll(".album");

    // Iterar sobre cada elemento de álbum
    albums.forEach(function(album) {
        const albumContent = album.querySelector(".album-content");
        const albumImages = album.querySelectorAll(".hidden-images img");
        const backButton = document.createElement("button");
        backButton.textContent = "Regresar";
        backButton.classList.add("back-button");
        
        backButton.addEventListener("click", function() {
            // Eliminar la sección de fotos y el botón de regreso
            const albumPhotos = album.querySelector(".album-photos");
            albumPhotos.parentNode.removeChild(albumPhotos);
            backButton.parentNode.removeChild(backButton);
            
            // Mostrar nuevamente el contenido original del álbum
            albumContent.style.display = "block";
            
            // Mostrar la imagen principal del álbum
            const albumImage = album.querySelector(".album-image");
            albumImage.style.display = "block";
        });

        // Función para mostrar las imágenes del álbum
        function showAlbumPhotos() {
            // Ocultar el contenido original del álbum
            albumContent.style.display = "none";
            
            // Ocultar la imagen principal del álbum
            const albumImage = album.querySelector(".album-image");
            albumImage.style.display = "none";

            // Crear una nueva sección para las fotos del álbum
            const albumPhotos = document.createElement("div");
            albumPhotos.classList.add("album-photos");

            // Agregar las imágenes del álbum a la nueva sección
            albumImages.forEach(function(img) {
                albumPhotos.appendChild(img.cloneNode(true));
            });

            // Insertar la nueva sección antes del contenido original del álbum
            albumContent.parentNode.insertBefore(albumPhotos, albumContent);

            // Insertar el botón de regreso después de la nueva sección de fotos
            albumPhotos.parentNode.insertBefore(backButton, albumPhotos.nextSibling);
        }

        // Escuchar el clic en el botón "Ver Fotos"
        albumContent.querySelector("button").addEventListener("click", showAlbumPhotos);
    });
});
