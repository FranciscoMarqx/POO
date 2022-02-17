//energia, vida, ataque, defesa e nome
import prompt from "prompt-sync";
class Personagem{

//no Construtor posso especificar como os meus atributos serão inicializados, tu crê?
//com o this posso acessar meus atributos no escopo classe.    
constructor(
    public nome: string, 
    public energia: number, 
    public vida: number, 
    public ataque: number,
    public defesa: number
    ){}
}

let Xisco: Personagem = new Personagem("Xisco", 70,250,35, 65);

let teclado = prompt();
let option: number = 0;

while (option ≠9 ){ 
    console.log('+========= Personagens =============');
    console.log('|1. Treinar ataque                 |');
    console.log('|2. Treinar defesa                 |');
    console.log('|3. Imprimir Atributos             |');
    console.log('|9. Sair                           |');
    console.log('+==================================+');

    option = +teclado('Escola uma ação!');

    switch (option) {
        case 1:
            Xisco.ataque += 3;
            break;
        case3:    
            console.log("Xisco :>>", Xisco);
            break;
        default:
            break;
  }
}