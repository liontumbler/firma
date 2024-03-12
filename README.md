# [DEMO](https://liontumbler.github.io/firma/)
## Descripción técnicas:
Para poder implementarlo se necesita del archivo firma.js, para importarlo a tu página:
-     <script src="firma.js"></script>
ó
-     <script src="https://liontumbler.github.io/firma/firma.js"></script>
ó
-     import 'https://liontumbler.github.io/firma/firma.js';
-     import 'firma.js';
### Nota:
Recuerda siempre hacer esta importación después del llamado de todas las librerías que necesites, ya que si la pones de primeras se ejecutaría de primeras y no alcanzaría a ver los cambios que causen tus archivos js, en caso de que necesites que se ejecuten antes de hacer la creación de la firma, de todas maneras prueba y mira donde te puede quedar mejor.

Ya para poder implementarlo crea en tu HTML crea una etiqueta de tipo input con el type firma y obviamente su id para capturar su valor o estado:

-     <input type="firma" id="xxx6">

Eso es todo!, para poder recoger la firma, vasta solo como se hace en los input por lo general en con .value:
-     document.getElementById('xxx6').value;

Puedes limpiar la firma:

-     document.getElementById('xxx6').limpiarFirma();

Descargar imagenes a PNG JPEG SVG, el nombre no es requerido
-     document.getElementById('xxx6').toPng(nombreArchivo);
-     document.getElementById('xxx6').toJpeg(nombreArchivo);
-     document.getElementById('xxx6').toSvg(nombreArchivo);

### entre otro metodos que te pueden ser utiles:

#### Agrega texto a la firma
-     document.getElementById('xxx6').agregarTextos(text = null, text2 = null)
    text = string
    text2 = string
    
#### Muestra u ocula segun mostrar
-     document.getElementById('xxx6').show(mostrar)
    mostrar= bolean
    
#### Enfoca
-     document.getElementById('xxx6').focus()

#### Desenfocar
-     document.getElementById('xxx6').blur()

#### Deshacer camnbios del trazo
-     document.getElementById('xxx6').deshacer()

#### Valida si es valida la firma
-     document.getElementById('xxx6').esValido()

#### Bloquea la firma (input)
-     document.getElementById('xxx6').bloquear()

#### tambien puedes usarlo:
```html
    <div>
        <!--label for="xxx">campo firma1:</label-->
        <input type="firma" id="xxx" cuadricula="true" guia="true"  lineaNegraImagen="true" text1="Edwin Velasquez Jimenez" text2="Creador de la libreria">
     </div>

    <div>
        <label for="xxx2">campo firma2:</label>
        <input type="firma" id="xxx2" cuadricula="false" guia="true"  lineaNegraImagen="true" text1="Edwin Velasquez Jimenez" text2="Creador de la libreria">
    </div>

    <div>
        <label for="xxx3">campo firma3:</label>
        <input type="firma" id="xxx3" cuadricula="true" guia="false" lineaNegraImagen="true"  text1="Edwin Velasquez Jimenez" text2="Creador de la libreria" TextMarcaAgua="Marca Registrada">
    </div>

    <div>
        <label for="xxx4">campo firma4:</label>
        <input type="firma" id="xxx4" cuadricula="false" guia="false" lineaNegraImagen="false"  text1="Edwin Velasquez Jimenez" text2="Creador de la libreria" TextMarcaAgua="Edwin Velasquez Jimenez">
    </div>

    <div>
        <label for="xxx5">campo firma5:</label>
        <input type="firma" id="xxx5" cuadricula="false" guia="false" lineaNegraImagen="false">
    </div>

    <div>
        <label for="xxx6">campo firma6:</label>
        <input type="firma" id="xxx6" gruesoLinea="6" TextMarcaAgua="Marca">
    </div>
```
