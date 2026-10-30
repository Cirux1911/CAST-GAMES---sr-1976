 


> Abrir esta página en [https://cirux1911.github.io/CAST-GAMES---sr-1976/](https://cirux1911.github.io/CAST-GAMES---sr-1976/)

## Usar como extensión

Este repositorio se puede agregar como **extensión** en MakeCode.

* abrir [https://arcade.makecode.com/](https://arcade.makecode.com/)
* haz clic en **Nuevo proyecto**
* haz clic en **Extensiones** en el menú del engranaje
* buscar **https://github.com/cirux1911/CAST-GAMES---sr-1976** e importar

## Editar este proyecto

Para editar este repositorio en MakeCode.

* abrir [https://arcade.makecode.com/](https://arcade.makecode.com/)
* haz clic en **Importar** y luego haz clic en **Importar URL**
* pega **https://github.com/cirux1911/CAST-GAMES---sr-1976** y haz clic en importar

#### Metadatos (se utilizan para buscar y renderizar)

* for PXT/arcade
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>

## Actualización del juego publicado

**La rama principal es `master`.** La página utiliza un archivo compilado (`assets/js/binary.js`), no ejecuta `main.ts` directamente. Por eso un merge por sí solo no actualizaba el juego.

Se agregó el workflow `.github/workflows/publicar-pages.yml` para compilar MakeCode Arcade y publicar el sitio cada vez que cambie `master`. **Configuración inicial obligatoria:** en GitHub abrir **Settings → Pages → Build and deployment → Source → GitHub Actions**. Sin ese ajuste, la publicación automática puede no funcionar.

Después de fusionar un PR, abrir **Actions → Publicar juego en GitHub Pages** y comprobar que el build y el deploy finalicen correctamente. Si falla la compilación, leer el registro del trabajo antes de volver a publicar; no sustituir el archivo compilado por el código fuente.

Si se trabaja desde MakeCode Arcade, también es posible usar su integración de GitHub y **Create release** para generar una publicación; el workflow de releases existente es independiente y no se ejecuta con cada merge.

### Comprobación rápida

1. Confirmar que el cambio aparece en `main.ts` de `master`.
2. Confirmar que la acción **Publicar juego en GitHub Pages** terminó correctamente.
3. Abrir [el juego](https://cirux1911.github.io/CAST-GAMES---sr-1976/) con Ctrl+F5.
4. Si el juego no cambia, revisar la acción y comprobar la versión de `assets/js/binary.js` generada en el despliegue. No es necesario borrar ramas ni reescribir el historial.

### Errores de jugabilidad pendientes de validar en MakeCode

- `bala_de_jefe` está declarada como número, aunque `sprites.onOverlap` espera tipos de sprite.
- El evento de impacto `Projectile` contra `Enemy` descuenta vida de `vida_jefe_final`, incluso antes de que exista el jefe. Separar las colisiones de soldados y jefe.
- El evento de salud cero compara `status` con `Jefe_final` (un sprite) en lugar de `vida_jefe_final` (una barra) y no llama a `game.gameOver(true)`.
- `Angulo` se genera en grados pero `Math.cos` y `Math.sin` usan radianes; convertir el ángulo antes de disparar.
- La variable `protección` cambia de valor durante el contacto con enemigos, pero no se comprueba antes de reducir una vida.
- El jefe recibe velocidad horizontal negativa cada 15 ms y no se coloca explícitamente en el mapa final; revisar su movimiento y aparición.
- `main.blocks` y `main.ts` deben modificarse juntos desde MakeCode Arcade para evitar que el editor sobrescriba cambios.

No se modificaron automáticamente estos comportamientos porque requieren probarlos en el simulador y conservar la correspondencia entre bloques y TypeScript.
