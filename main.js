// SUMA TOTAL DE COSTO
const valores = document.querySelectorAll('[id^="valor"]');
const totalCosto = document.getElementById('totalCosto');

const actualizarTotal = () => {
    const total = [...valores].reduce((acc, elemento) => acc + parseFloat(elemento.value || 0), 0);
    totalCosto.value = total;

    // Actualizar la suma total automáticamente
    actualizarSuma();
    // Calcular porcentaje automáticamente
    calcularPorcentaje();
};

valores.forEach(elemento => elemento.addEventListener('input', actualizarTotal));


// COMISION

const precioSugeridoInput = document.getElementById('psugerido');
const comisionInput = document.getElementById('comision');

precioSugeridoInput.addEventListener('input', () => {
    const precioSugerido = parseFloat(precioSugeridoInput.value);
    const comision = precioSugerido * 0.3;
    comisionInput.value = comision.toFixed(2);

    // Actualizar la suma total automáticamente
    actualizarSuma();
    // Calcular porcentaje automáticamente
    calcularPorcentaje();
});


// FACTURA

const facturaSugeridoInput = document.getElementById('psugerido');
const facturaInput = document.getElementById('factura');

facturaSugeridoInput.addEventListener('input', () => {
    const precioSugerido = parseFloat(facturaSugeridoInput.value);
    const factura = precioSugerido * 0.16;
    facturaInput.value = factura.toFixed(2);

    // Actualizar la suma total automáticamente
    actualizarSuma();
    // Calcular porcentaje automáticamente
    calcularPorcentaje();
});


// SUMAR PRECIO SUGERIDO

const camposASumar = document.querySelectorAll('#totalCosto, #comision, #factura, #adm, #margen');
const preciop = document.getElementById('preciop');

let ptotal = 0;

const actualizarSuma = () => {
    ptotal = [...camposASumar].reduce((acc, elemento) => acc + parseFloat(elemento.value || 0), 0);
    preciop.value = ptotal;
};

camposASumar.forEach(elemento => elemento.addEventListener('input', actualizarSuma));


// TOTAL COSTO PORCENTAJE
const totalCostoInput = document.getElementById('totalCosto');
const preciopInput = document.getElementById('preciop');
const pcostoInput = document.getElementById('pcosto');
const pmargen = document.getElementById('margen');

const calcularPorcentaje = () => {
    const totalCosto = parseFloat(totalCostoInput.value || 0);
    const preciop = parseFloat(preciopInput.value || 0);

    const porcentaje = ((totalCosto / preciop) * 100).toFixed(2);

    pcostoInput.value = porcentaje + '%';
};


totalCostoInput.addEventListener('input', calcularPorcentaje);
preciopInput.addEventListener('input', calcularPorcentaje);
pmargen.addEventListener('input', calcularPorcentaje);

calcularPorcentaje();

// TOTAL COMISION PORCENTAJE

const pcomisionInput = document.getElementById('pcomision');
const psugeridoInput = document.getElementById('psugerido');

const porcentajeComision = () => {
    const totalC = parseFloat(comisionInput.value || 0);
    const preciopublico = parseFloat(preciopInput.value || 0);

    const porcentaje = ((totalC / preciopublico) * 100).toFixed(2);

    pcomisionInput.value = porcentaje + '%';
};

comisionInput.addEventListener('input', porcentajeComision);
preciopInput.addEventListener('input', porcentajeComision);
pmargen.addEventListener('input', porcentajeComision);
psugeridoInput.addEventListener('input', porcentajeComision);

porcentajeComision();

// TOTAL FACTURA PORCENTAJE

const pfacturaInput = document.getElementById('pfactura');

const porcentajeFactura = () => {

    const totalF = parseFloat(facturaInput.value || 0);
    const precioP = parseFloat(preciopInput.value || 0);

    const facturacion = ((totalF / precioP) * 100).toFixed(2);

    pfacturaInput.value = facturacion + '%';
};

facturaInput.addEventListener('input', porcentajeFactura);
preciopInput.addEventListener('input', porcentajeFactura);
pmargen.addEventListener('input', porcentajeFactura);
psugeridoInput.addEventListener('input', porcentajeFactura);

porcentajeFactura();


// TOTAL MARGEN PORCENTAJE

const margenInput = document.getElementById('margenp');
const margen = document.getElementById('margen');

const margenGanacias = () => {

    const totalM = parseFloat(margen.value || 0);
    const publicoP = parseFloat(preciopInput.value || 0);

    const margenp = ((totalM / publicoP) * 100).toFixed(2);

    margenInput.value = margenp + '%';
};

margen.addEventListener('input', margenGanacias);
preciopInput.addEventListener('input', margenGanacias);
pmargen.addEventListener('input', margenGanacias);
psugeridoInput.addEventListener('input', margenGanacias);

margenGanacias();

// SUMAR TOTAL DE PORCENTAJES

//GUARDAR PDF

document.getElementById('capturarTabla').addEventListener('click', () => {
    // Selecciona la tabla
    const tabla = document.getElementById('miTabla');
    
    // Captura la tabla como una imagen utilizando html2canvas
    html2canvas(tabla, {
        onrendered: function(canvas) {
            // Crea un enlace para descargar la captura de pantalla
            const enlace = document.createElement('a');
            enlace.href = canvas.toDataURL('image/png');
            enlace.download = 'captura_tabla.png';
            
            // Haz clic en el enlace para descargar la captura de pantalla
            enlace.click();
        }
    });
});
