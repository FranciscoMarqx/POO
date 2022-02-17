"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//energia, vida, ataque, defesa e nome
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class Personagem {
    //no Construtor posso especificar como os meus atributos serão inicializados, tu crê?
    //com o this posso acessar meus atributos no escopo classe.    
    constructor(nome, energia, vida, ataque, defesa) {
        this.nome = nome;
        this.energia = energia;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
    }
}
let Xisco = new Personagem("Xisco", 70, 250, 35, 65);
let teclado = (0, prompt_sync_1.default)();
let option = 0;
while (option)
    ;
9;
{
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
            case3: console.log("Xisco :>>", Xisco);
            break;
        default:
            break;
    }
}
