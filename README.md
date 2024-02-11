# HTMX

Documentación de HTMX : [official_documentation](https://htmx.org/)

HTMX no es un framework es una biblioteca.
Se dedica y se ecentra a darle acceso a HTML a AYAX, CSS trasitions.

**Peticiones HTTP con HTMX**
hx-get (Para hacer una petición GET)
hx-post (Para hacer una petición POST)
hx-put (Para hacer una petición PUT)
hx-delete (Para hacer una petición DELETE)
hx-patch (Para hacer una petición PATCH)
hx-options (Para hacer una petición OPTIONS)
hx-head (Para hacer una petición HEAD)

hx-trigger(Para indicar la acción)
hx-target(Para indicar donde se va a cargar el resultado)
hx-swap(Para indicar como cargarlo) hx-indicator(selecionamos el indicador que reralizara la carga)
hx-disabled-elt(indica que tiene que desacrtivar)
mustache-template(Para indicar el template que se va a utilizar)
El siguinte código CSS que se puede remplazar con la etiqueta hx-swap="innerHTML transition:true" para hacer una transición de la carga de los datos.

```css
#results-movies.htmx-swapping {
  opacity: 0;
  transition: opacity 1s ease;
}

#results-movies.htmx-settling {
  animation: ease fadeIn 1s both;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
```
