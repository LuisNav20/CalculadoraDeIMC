
class CalculadoraIMC{
    constructor(p,a){
        this.peso=p;
        this.altura=a;
    }

    calcularIMC(){
        const imc = this.peso / (this.altura * this.altura);
        return imc.toFixed(2);
    }

    obtenerCategoria(){
        const imc = this.calcularIMC();
        let categoria = "";
        let imagen = "";

        if(imc < 18.5){
            categoria = "Bajo peso";
            imagen = "Image/bajoPeso.png";
        }else if(imc >= 18.5 && imc < 25){
            categoria = "Peso normal";
            imagen = "Image/pesoNormal.jpg";
        }else if(imc >= 25 && imc < 30){
            categoria = "Sobrepeso";
            imagen = "Image/sobrePeso.jpg";
        }else{
            categoria = "Obesidad";
            imagen = "Image/obesidad.jpg";
        }

        return {categoria, imagen, imc};
    }

    generarResumen(){
        const datos = this.obtenerCategoria();
        return `Tu IMC es: <strong>${datos.imc}</strong> <br>
                Categoría: <strong>${datos.categoria}</strong>`;
    }
}


document.getElementById('forma').addEventListener("submit", function(e){
    e.preventDefault();

    const peso=parseFloat(document.getElementById('peso').value.trim());
    const altura=parseFloat(document.getElementById('altura').value.trim());
    const objIMC=new CalculadoraIMC(peso, altura);
    document.getElementById('resumen').innerHTML=objIMC.generarResumen();

    const datos=objIMC.obtenerCategoria();
    const img=document.getElementById('imagen');
    img.src=datos.imagen;
    img.style.display="block";
});