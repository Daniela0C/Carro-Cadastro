
function salvar(){
    let marca = document.getElementById("marca").value
    let modelo = document.getElementById("modelo").value

    let carro = {
        Marca: marca,
        Modelo: modelo
    };

    localStorage.setItem('Carro', JSON.stringify(carro))
    
    console.log(carro)
}