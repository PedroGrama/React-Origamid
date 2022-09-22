/* function showlist(empresa, ...clientes){
console.log(empresa)
console.log(clientes)
}

showlist("Origamid", "João","Maria") */

/* const numeros = [1,5,3,99,44,34,6,65];

console.log(Math.max(...numeros)) */

/* const items = document.querySelectorAll("li");
console.log(items); */



/* const carro = {
    cor:"Azul",
    portas: 4,
    ano:"2022"
};
const carro2 = carro;
const cloneCarro = {...carro, turbo:true} */

 class Transporte{
   constructor(){
    this.terrestre = true;
   }
   andar(){
    console.log("andou")
   }
}

class Carro extends Transporte{
    constructor(cor, portas){
        super();
        this.cor = true;
        this.portas = portas;
    }

}

const carro=new Carro("vermelho",4);

const cloneCarro = {...carro};

console.log(carro);
console.log(cloneCarro)