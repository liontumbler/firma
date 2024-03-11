/**
 * @author    Edwin Velasquez Jimenez 
 * @copyright 2024 lionTumbler latinoamerica presente ♥
 * 
 * @description Esta librería está hecha para crear formularios con campos de type firma
 * y poder recoger esa imagen que se dibuja a mano alzada como generalmente captura él
 * valor de un input HTML, muy, pero muy fácil de manejar para usarla solo basta con llamar 
 * la librería y empezar a usar en el HTML. La cree porque tenía la necesidad de aprender
 * y encontré la forma de que todos los desarrolladores la podamos usar lo que busco con esto 
 * es reconocimiento y que con ayuda de todos podamos dejar algo gratuito y de calidad para 
 * todos, utilízala y saca al máximo todo el provecho :)...
 * 
 * @licstart El siguiente es el aviso de licencia completo para el
 * Código Javascript en esta página
 * 
 * Licenciado bajo la Licencia Apache, Versión 2.0 (la "Licencia");
 * No puede utilizar este archivo excepto de conformidad con la Licencia.
 * Puede obtener una copia de la Licencia en:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * A menos que lo exija la ley aplicable o se acuerde por escrito, el software
 * distribuido bajo la Licencia se distribuye "TAL CUAL",
 * SIN GARANTÍAS NI CONDICIONES DE NINGÚN TIPO, ya sean expresas o implícitas.
 * Consulte la Licencia para conocer el idioma específico que rige los permisos y
 * limitaciones bajo la Licencia.
 *
 * @licend Lo anterior es el aviso de licencia completo para el
 * Código Javascript en esta página
 * 
 * @note Se aconseja no copiar y pegar este código, ya que este código la idea es que 
 * vaya recibiendo aportes de mejoras si la ven o si las veo, comunicarse desde
 * el git, creando una issue describiendo lo que se puede mejorar, en caso de que tenga
 * ya creado el código de mejora, dejar un mensaje en mi git para revisar y hacer aprobaciones 
 * de los cambios para dejar los reconocimientos asignados al funcionamiento.
 */
(function() {
    class Firma {
        #imagenVacia = 'data:image/png;base64,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';
        
        #mousePos = { x: 0, y: 0 };
        #ultimaPosMouse;

        #dibujar = false;
        lineaNegraImagen = false;

        #anchoFirma = 350;
        #altoFirma = 200;
        #coorYGuiaGris = 60;
        #coorYGuiaNegra = 140;
        #margenGuias = 10;
        gruesoLinea = 3;
        gruesoGuias = 5;

        colorPincel = '#494949';
        colorGuiaS = '#ccc';
        colorGuiaI = '#000';

        iconoBtnEliminar = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg>`;
        fontFirma = '24px "Tahoma"';
        warFirma = 'Esta vacia la firma';
        msgCanvas = 'No tienes un buen navegador.';
        
        #textFirma = '';
        #textFirma2 = '';
        TextMarcaAgua = '';

        trazados = [];
        puntos = [];
        
        input;
        button;
        constructor(input) {
            this.input = input;
            this.input.setAttribute('hidden', true);
            this.#ultimaPosMouse = this.#mousePos;
            this.input.value = null;

            const label = document.querySelector('[for="' + this.input.id + '"]');
            if (label) {
                label.style.cssText = 'display: block';
                label.style.textAlign = 'center';
            }

            if (window.innerWidth < this.#anchoFirma) {
                this.#anchoFirma = window.innerWidth - 20;
            }

            this.canvasP = document.createElement('canvas');
            this.canvasP.style.cssText = 'border: 2px dashed #CCCCCC; border-radius: 5px; cursor: crosshair; position: relative;';
            this.canvasP.width = this.#anchoFirma;
            this.canvasP.height = this.#altoFirma;
            this.canvasP.style.left = '50%';
            this.canvasP.style.transform = 'translateX(-50%)';
            this.canvasP.textContent = this.msgCanvas;
            this.canvasP.id = this.input.id + 'Canvas';
            this.canvasP.setAttribute('tabindex', '0');
            this.#eventosCanvasPrincipal();

            this.fondo = document.createElement('canvas');
            this.fondo.width = this.#anchoFirma;
            this.fondo.height = this.#altoFirma;
            this.fondo.style.cssText = 'margin-top: 2px; border-radius: 5px; background: #fff;';
            this.fondo.style.left = '50%';
            this.fondo.style.top = '0';
            this.fondo.style.transform = 'translateX(-50%)';
            this.fondo.style.position = 'absolute';
            this.fondo.style.zIndex = '-1';
            
            this.ctxP = this.canvasP.getContext("2d");
            this.ctx2 = this.fondo.getContext("2d");

            this.button = document.createElement('button');
            this.button.style.cssText = 'display: block; border-radius: 0px 0px 100% 100%; padding: 5px 10px; color: #fff; background-color: #dc3545; border-color: #dc3545;';
            this.button.style.cursor = 'pointer';
            this.button.style.display = 'none';
            this.button.style.position = 'absolute';
            this.button.style.top = '2px';
            this.button.style.left = '50%';
            this.button.style.transform = 'translateX(-50%)';
            this.button.innerHTML = this.iconoBtnEliminar;
            this.button.id = 'limpiar' + this.input.id;

            const divContenedor = document.createElement('div');
            divContenedor.style.position = 'relative';
            divContenedor.append(this.canvasP);
            divContenedor.append(this.fondo);
            divContenedor.append(this.button);
            this.input.parentNode.append(divContenedor);

            this.button.addEventListener("click", (e) => {
                this.#limpiarFirma();
            }, false);

            this.input.toPng = (nombreArchivo = 'Firma' + this.input.id) => {
                this.#descargar(nombreArchivo + '.png', 'image/png', this.#redimencinarEstandar(this.canvasP));
            };

            this.input.toJpeg = (nombreArchivo = 'Firma' + this.input.id) => {
                const cloneCanvas = this.canvasP.cloneNode();
                const ctx = cloneCanvas.getContext("2d");
                ctx.fillStyle = 'white';
                ctx.fillRect(0, 0, cloneCanvas.width, cloneCanvas.height);
                this.#suavisar(ctx);
                this.#obtenerFirma(ctx);

                this.#descargar(nombreArchivo + '.jpeg', 'image/jpeg', this.#redimencinarEstandar(cloneCanvas));
            };

            this.input.toSvg = (nombreArchivo = 'Firma' + this.input.id) => {
                const canvasRedimen = this.#redimencinarEstandar(this.canvasP);
                const svgimage = document.createElementNS('http://www.w3.org/2000/svg', 'image');
                svgimage.setAttribute('x', '0');
                svgimage.setAttribute('y', '0');
                svgimage.setAttribute('width', canvasRedimen.width.toString());
                svgimage.setAttribute('height', canvasRedimen.height.toString());
                svgimage.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', canvasRedimen.toDataURL());
                
                const svgimg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                svgimg.setAttribute('width', canvasRedimen.width.toString());
                svgimg.setAttribute('height', canvasRedimen.height.toString());
                svgimg.appendChild(svgimage);

                const enlace = document.createElement('a');
                enlace.setAttribute('href', 'data:image/svg+xml;base64,' + btoa(new XMLSerializer().serializeToString(svgimg)));
                enlace.download = nombreArchivo + '.svg';
                enlace.click();
            };

            this.input.agregarTextos = (text = null, text2 = null) => {
                this.#textFirma = text;
                this.#textFirma2 = text2;
            };

            this.input.show = (mostrar) => {
                if (mostrar) {
                    divContenedor.style.display = 'block';
                } else {
                    divContenedor.style.display = 'none';
                }
            };

            this.input.focus = () => {
                this.canvasP.focus();
            };

            this.input.blur = () => {
                this.canvasP.blur();
            };

            this.input.limpiarFirma = () => {
                this.#limpiarFirma();
            };

            this.input.deshacer = () => {
                this.#deshacerCambios();
            };

            this.input.esValido = () => {
                return this.#esFirmaValida();
            };

            this.input.bloquear = (bolean) => {
                if (bolean) {
                    this.fondo.style.zIndex = '2';
                    this.fondo.style.background = '#ffffff80';
                } else {
                    this.fondo.style.zIndex = '-1';
                    this.fondo.style.background = '#fff';
                }
            };
        }

        #eventosCanvasPrincipal() {
            this.canvasP.addEventListener("mousedown", (e) => {
                this.#empezarDibujo(e);
            }, false);

            this.canvasP.addEventListener("mousemove", (e) => {
                this.#pintar(e);
            }, false);

            this.canvasP.addEventListener("mouseup", (e) => {
                this.#terminarDibujo();
            }, false);

            this.canvasP.addEventListener("mouseleave", (e) => {
                this.#terminarDibujo();
            }, false);

            this.canvasP.addEventListener("mouseout", (e) => {
                this.#terminarDibujo();
            }, false);

            this.canvasP.addEventListener("touchstart", (e) => {
                if (e.cancelable)
                    e.preventDefault();

                this.#empezarDibujo(e);
            }, false);

            this.canvasP.addEventListener("touchmove", (e) => {
                this.#pintar(e);
            }, false);

            this.canvasP.addEventListener("touchend", (e) => {
                this.#terminarDibujo();
            }, false);

            this.canvasP.addEventListener("touchleave", (e) => {
                this.#terminarDibujo();
            }, false);

            this.canvasP.addEventListener("touchout", (e) => {
                this.#terminarDibujo();
            }, false);
        }

        habilitarCuadricula() {
            this.#agregarCuadricula(this.ctx2);
        };

        habilitarGuias() {
            this.#crearLineaGuiaGris(this.ctx2);
            this.#crearLineaGuiaNegra(this.ctx2);
        };

        #deshacerCambios() {
            this.trazados.pop();
            if (this.trazados.length == 0) {
                this.#limpiarFirma();
            } else {
                this.ctxP.clearRect(0, 0, this.canvasP.width, this.canvasP.height);
                this.#suavisar(this.ctxP);
                this.input.value = this.#obtenerFirma(this.ctxP);
            }
        }

        #redimencinarEstandar(canvas) {
            const nuevoCanvas = document.createElement("canvas");
            const nuevoContexto = nuevoCanvas.getContext("2d");
            nuevoCanvas.width = canvas.width * 2;
            nuevoCanvas.height = canvas.height * 2;
            nuevoContexto.drawImage(canvas, 0, 0, nuevoCanvas.width, nuevoCanvas.height);
            return nuevoCanvas;
        }

        #descargar(nombreArchivo, formatoImage, canvas) {
            const enlace = document.createElement('a');
            enlace.download = nombreArchivo;
            enlace.href = canvas.toDataURL(formatoImage, 1);
            enlace.click();
        }

        #pintar(e) {
            this.#mousePos = this.#getPosicionPuntero(e);
            this.#pintarTrazos(this.ctxP);
        }

        #empezarDibujo(e) {
            this.#dibujar = true;
            this.#ultimaPosMouse = this.#getPosicionPuntero(e);
        }

        #terminarDibujo() {
            if (this.#dibujar) {
                if (this.#suavizarLineas(this.ctxP)) {
                    this.input.value = this.#obtenerFirma(this.ctxP);
                }
                this.button.style.display = 'block';
            }
            
            this.#dibujar = false;
        }

        #pintarTrazos(ctx) {
            if (this.#dibujar) {
                this.puntos.push(this.#mousePos);

                ctx.beginPath();
                ctx.strokeStyle = this.colorPincel;
                ctx.lineWidth = this.gruesoLinea;
                ctx.lineCap = "round";
                ctx.moveTo(this.#ultimaPosMouse.x, this.#ultimaPosMouse.y);
                ctx.lineTo(this.#mousePos.x, this.#mousePos.y);
                ctx.stroke();
                ctx.closePath();

                this.#ultimaPosMouse = this.#mousePos;
            }
        }

        #getPosicionPuntero(event) {
            const rect = this.canvasP.getBoundingClientRect();
            if (event.clientX) {
                return {
                    x: event.clientX - rect.left,
                    y: event.clientY - rect.top
                };
            } else if (event.touches && event.touches[0].clientX) {
                return {
                    x: event.touches[0].clientX - rect.left,
                    y: event.touches[0].clientY - rect.top
                };
            }
        }

        #esFirmaValida() {
            const dataUrl = this.canvasP.toDataURL();
            if (this.#imagenVacia == dataUrl)
                return false;
            return true;
        }

        #limpiarFirma() {
            this.canvasP.width = this.canvasP.width;
            this.input.value = null;
            this.trazados = [];
            this.button.style.display = 'none';
        }

        #pintarMarcaAgua(ctx, text) {
            ctx.save();
            ctx.beginPath();
            ctx.fillStyle = '#73737330';

            let fontSize = 100;
            while (true) {
                ctx.font = fontSize + 'px "Tahoma"';
                const anchoTextoAux = ctx.measureText(text).width;
                const diatanciaDiagonal = Math.sqrt((Math.pow(this.canvasP.width, 2) + Math.pow(this.canvasP.height, 2)));
                //if (anchoTextoAux < this.canvasP.width) {
                if (anchoTextoAux < (diatanciaDiagonal -20)) {
                    break;
                }
                fontSize--;
            }

            const anchoTexto = ctx.measureText(text).width;
            const anguloRotacion = 12 * Math.PI / 180;
            const x = this.canvasP.width / 2; 
            const y = this.canvasP.height / 2;
            const offsetX = (Math.cos(anguloRotacion) * (x - (anchoTexto / 2))) - (Math.sin(anguloRotacion) * (y - (100 / 2)));
            const offsetY = (Math.sin(anguloRotacion) * (x - (anchoTexto / 2))) + (Math.cos(anguloRotacion) * (y - (100 / 2)));
            
            ctx.translate(offsetX, offsetY);
            ctx.rotate(anguloRotacion);
            ctx.fillText(text, 10, 10);
            ctx.stroke();
            ctx.closePath();
            ctx.restore();
        }

        #pintarText(ctx, text, titleY) {
            ctx.beginPath();
            ctx.font = this.fontFirma;
            ctx.fillStyle = this.colorGuiaI;
            ctx.fillText(text, this.#margenGuias, titleY, (this.#anchoFirma -20));
            ctx.stroke();
            ctx.closePath();
        }

        #obtenerFirma(ctx) {
            if (this.#esFirmaValida()) {
                
                if (this.TextMarcaAgua)
                    this.#pintarMarcaAgua(ctx, this.TextMarcaAgua);

                if (this.lineaNegraImagen)
                    this.#crearLineaGuiaNegra(ctx);

                let titleY = 167;
                if (this.#textFirma)
                    this.#pintarText(ctx, this.#textFirma, titleY);

                titleY += 25;
                if (this.#textFirma2)
                    this.#pintarText(ctx, this.#textFirma2, titleY);

                const canvasRedimen = this.#redimencinarEstandar(this.canvasP);

                return canvasRedimen.toDataURL('image/png', 1);
            } else {
                console.warn(this.warFirma);
                return '';
            }
        }

        #crearLineaGuiaGris(ctx) {
            ctx.beginPath();
            ctx.strokeStyle = this.colorGuiaS;
            ctx.lineWidth = this.gruesoGuias;
            ctx.lineCap = "butt";
            ctx.setLineDash([10, 5]);
            ctx.moveTo(this.#margenGuias, this.#coorYGuiaGris);
            ctx.lineTo(this.#anchoFirma - this.#margenGuias, this.#coorYGuiaGris);
            ctx.stroke();
            ctx.closePath();
        }

        #agregarCuadricula(ctx) {
            ctx.beginPath();
            for (let x = 0; x <= this.#anchoFirma; x = x +40){
                ctx.moveTo((x -12), 0);
                ctx.lineTo((x -12), this.#altoFirma);

                ctx.moveTo(0, (x));
                ctx.lineTo(this.#anchoFirma, (x));
            }
            ctx.strokeStyle = '#f1f2f3';
            ctx.lineWidth = 3;
            ctx.stroke();
            ctx.closePath();
        }

        #crearLineaGuiaNegra(ctx) {
            ctx.beginPath();
            ctx.strokeStyle = this.colorGuiaI;
            ctx.lineWidth = this.gruesoGuias;
            ctx.lineCap = "butt";
            ctx.setLineDash([]);
            ctx.moveTo(this.#margenGuias, this.#coorYGuiaNegra);
            ctx.lineTo(this.#anchoFirma - this.#margenGuias, this.#coorYGuiaNegra);
            ctx.stroke();
            ctx.closePath();
        }

        #suavizarLineas(ctx) {
            let nuevoArray = [];
            if (this.puntos.length > 0) {
                nuevoArray[0] = this.puntos[0];
                for (let i = 0; i < this.puntos.length; i++) {
                    if (i % 3 == 0) {
                        nuevoArray[nuevoArray.length] = this.puntos[i];
                    }
                }
                nuevoArray[nuevoArray.length - 1] = this.puntos[this.puntos.length - 1];
            }

            this.puntos = [];
            
            if (nuevoArray.length > 0) {
                ctx.clearRect(0, 0, this.#anchoFirma, this.#altoFirma);

                this.trazados.push(nuevoArray);

                this.#suavisar(ctx);

                return true;
            }
            
            return false;
        }

        #suavisar(ctx) {
            ctx.strokeStyle = this.colorPincel;
            ctx.lineWidth = this.gruesoLinea;
            ctx.lineCap = "round";
            for(let i = 0; i < this.trazados.length; i++) {
                const ry = this.trazados[i];
                if (ry.length > 0) {
                    const ultimoPunto = ry.length - 1;

                    ctx.beginPath();
                    ctx.moveTo(ry[0].x, ry[0].y);
                    for (let d = 1; d < ry.length - 2; d++) {
                        const pc = this.#calcularPuntoDeControl(ry, d, d + 1);
                        ctx.quadraticCurveTo(ry[d].x, ry[d].y, pc.x, pc.y);
                    }
                    ctx.quadraticCurveTo(ry[ultimoPunto - 1].x, ry[ultimoPunto - 1].y, ry[ultimoPunto].x, ry[ultimoPunto].y);
                    ctx.stroke();
                    ctx.closePath();
                }
            }
        }

        #calcularPuntoDeControl(ry, a, b) {
            let pc = {};
            pc.x = (ry[a].x + ry[b].x) / 2;
            pc.y = (ry[a].y + ry[b].y) / 2;
            return pc;
        }
    }

    const firmas = document.querySelectorAll('input[type="firma"]');
    for (const firma of firmas) {
        const firm = new Firma(firma);

        let canvasFocused = false;
        firm.canvasP.addEventListener('focus', function () {
            canvasFocused = true;
        });
        firm.canvasP.addEventListener('blur', function () {
            canvasFocused = false;
        });
        document.addEventListener('keydown', function (event) {
            if ((event.ctrlKey || event.metaKey) && event.key === 'z') {
                if (canvasFocused) {
                    firma.deshacer();
                }
            }
        });

        const activarCuadricula = firma.getAttribute('cuadricula') ?? 'false';
        if (activarCuadricula && activarCuadricula == 'true') {
            firm.habilitarCuadricula();
            firma.removeAttribute('cuadricula');
        }

        const activarHide = firma.getAttribute('hide') ?? 'false';
        if (activarHide && activarHide == 'true') {
            firma.show(false);
            firma.removeAttribute('hide');
        }

        const activarLineasGuia = firma.getAttribute('guia') ?? 'false';
        if (activarLineasGuia && activarLineasGuia == 'true') {
            firm.habilitarGuias();
            firma.removeAttribute('guia');
        }

        const lineaNegraImagen = firma.getAttribute('lineaNegraImagen') ?? 'false';
        if (lineaNegraImagen && lineaNegraImagen == 'true') {
            firm.lineaNegraImagen = true;
            firma.removeAttribute('lineaNegraImagen');
        }

        const gruesoLinea = firma.getAttribute('gruesoLinea');
        if (gruesoLinea) {
            firm.gruesoLinea = gruesoLinea;
            firma.removeAttribute('gruesoLinea');
        }

        const TextMarcaAgua = firma.getAttribute('TextMarcaAgua');
        if (TextMarcaAgua) {
            firm.TextMarcaAgua = TextMarcaAgua;
            firma.removeAttribute('TextMarcaAgua');
        }

        const text1 = firma.getAttribute('text1');
        const text2 = firma.getAttribute('text2');
        let string1 = null;
        let string2 = null;
        if (text1) {
            string1 = text1;
            firma.removeAttribute('text1');
        }

        if (text2) {
            string2 = text2;
            firma.removeAttribute('text2');
        }

        firma.agregarTextos(text1, text2);
    }
})();