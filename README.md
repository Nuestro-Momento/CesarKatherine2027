# Invitación de matrimonio

Versión creada desde cero con estética full-screen, entrada tipo glass, cuenta regresiva, carrusel, modales y confirmación por WhatsApp.

## Qué cambiar
- Nombres: busca `Cesar` y `Katherine` en `index.html`.
- Fecha y hora: cambia `2027-02-27T16:00:00-03:00` en `script.js`.
- Lugar: actualmente está configurado como `Black Forest Los Ángeles` y los enlaces de Google Maps usan las coordenadas `-37.419851,-72.4503352`.
- WhatsApp: cambia el número `56959548664`.
- Fotos: están guardadas en `assets/photos`.

## Música de entrada
La música de fondo está en `index.html`, dentro de:

```html
<audio id="bgMusic" loop>
  <source src="..." type="audio/mpeg">
</audio>
```

Para usar una canción propia, guarda un archivo `.mp3` en `assets/audio/` y cambia el `src` por algo así:

```html
<source src="assets/audio/nuestra-cancion.mp3" type="audio/mpeg">
```

Actualmente la invitación usa la versión instrumental guardada como:

```html
<source src="assets/audio/perfect-ed-sheeran.mp3" type="audio/mpeg">
```

El navegador solo permite reproducir música después de un click del invitado. Por eso funciona con el botón `Entrar con música`.

## Playlist de Spotify
El bloque de playlist está en `index.html`, en la sección `playlist-section`.

- Actualmente el botón `Abrir en Spotify` apunta a `https://open.spotify.com/playlist/7dLIUESUkePwcJ59BTOwox`.
- Para que los invitados entren y agreguen canciones directamente, crea una playlist colaborativa en Spotify y pega ese enlace en el botón `Abrir en Spotify`.
- Según Spotify, el enlace para invitar colaboradores a una playlist privada dura 7 días. Si lo vas a mandar con mucha anticipación, conviene renovar ese link cerca de la fecha.
- Si quieres incrustar Spotify de verdad, usa el link embed de Spotify:

```html
https://open.spotify.com/embed/playlist/ID_DE_LA_PLAYLIST
```

Spotify no permite reproducir canciones completas como música de fondo desde una playlist embebida. Para fondo musical necesitas un archivo `.mp3` o un audio con enlace directo.

## Formulario para sugerir canción
El modal de música incluye un formulario con:

- Canción
- Artista
- Link de Spotify

Cuando el invitado presiona `Enviar sugerencia`, se abre WhatsApp con el mensaje listo para enviar.

## Botones actuales
- `Entrar con música`: entra a la invitación y reproduce el audio de fondo.
- `Entrar | Enter`: entra sin música.
- `♪`: pausa o activa la música después de entrar.
- `¡Agendar evento en calendario!`: abre el link de Google Calendar.
- `Cómo llegar`: abre Google Maps.
- `Agendar`: abre Google Calendar con el evento.
- `Confirmar asistencia`: abre WhatsApp.
- `Sugerir canción`: abre un formulario y luego WhatsApp con los datos escritos.
- `Dress code`: ahora es una sección visible con vestimenta formal y cambio opcional blanco para después.
- `Solo adultos`: sección visible que aclara que durante el día pueden asistir niños, pero la fiesta de noche será solo para adultos.
- `Regalos`: ahora es una sección visible con mensaje de lluvia de sobres.
- `Ver en Instagram`: falta cambiarlo por el perfil, publicación o hashtag real.

## Dress code
La invitación incluye una sección visible de dress code. La idea está configurada como vestimenta formal para el matrimonio; si después quieren cambiarse para estar más cómodos o usar la piscina, esa segunda ropa debería ser blanca.

## Solo adultos
La invitación incluye una sección visible para explicar con respeto que durante el día pueden asistir niños, pero la fiesta nocturna será solo para adultos.

## Regalos
La invitación incluye una sección visible de regalos con mensaje de lluvia de sobres. El texto está en `index.html`, sección `gift-section`.
