class CalculadoraIMC {
    constructor(p, a) {
        this.peso = p;
        this.altura = a;
    }

    calcularIMC() {
        const imc = this.peso / (this.altura * this.altura);
        return imc.toFixed(2);
    }

    obtenerCategoria() {
        const imc = this.calcularIMC();
        let categoria = "";
        let imagen = "";

        if (imc < 18.5) {
            categoria = "Bajo peso, oye pequeñe deberías comer más";
            imagen = "Image/aime3.jpg";
        } else if (imc < 25) {
            categoria = "Peso coquet (normal)";
            imagen = "Image/coquete.jpg";
        } else if (imc < 30) {
            categoria = "Sobrepeso, vas por el camino de AimeP3";
            imagen = "Image/aime1.jpg";
        } else {
            categoria = "Obesidad, oh no la politziaaa";
            imagen = "Image/aime2.jpg";
        }

        return { categoria, imagen, imc };
    }

    generarResumen() {
        const d = this.obtenerCategoria();
        return `
            Tu IMC es: <strong>${d.imc}</strong> <br>
            Categoría: <strong>${d.categoria}</strong>
        `;
    }
}


// Evento calcular IMC
document.getElementById('forma').addEventListener("submit", function (e) {
    e.preventDefault();

    const peso = parseFloat(document.getElementById('peso').value.trim());
    const altura = parseFloat(document.getElementById('altura').value.trim());

    const objIMC = new CalculadoraIMC(peso, altura);
    const datos = objIMC.obtenerCategoria();

    const resumen = document.getElementById('resumen');
    resumen.innerHTML = objIMC.generarResumen();
    resumen.classList.add("fade");

    const img = document.getElementById('imagen');
    img.src = datos.imagen;
    img.style.display = "block";

    actualizarBarra(datos.imc);
});


// Barra de colores según IMC
function actualizarBarra(imc) {
    const indicador = document.getElementById("indicador");
    let color = "";

    if (imc < 18.5) color = "blue";
    else if (imc < 25) color = "green";
    else if (imc < 30) color = "yellow";
    else color = "red";

    indicador.style.background = color;
    indicador.style.width = (imc * 3) + "%";
}


// Botón limpiar
document.getElementById('limpiar').addEventListener("click", () => {
    document.getElementById('peso').value = "";
    document.getElementById('altura').value = "";
    document.getElementById('resumen').innerHTML = "";
    document.getElementById('imagen').style.display = "none";
    document.getElementById("indicador").style.width = "0";
});



