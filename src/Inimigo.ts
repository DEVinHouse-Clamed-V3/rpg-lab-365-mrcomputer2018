import { Arma } from "./Arm";
import Personagem from "./Personagem";

export default class Inimigo extends Personagem{

    constructor(nome: string, energia: number, vida: number){
        super(nome, energia, vida);
    }

    // metodos
    atacar(alvo: Personagem): void {
        if(Math.random() < 0.5){
            const dano = this.calcularDano();
            alvo.receberDano(dano);
        } else {
            console.log(`${this.nome} errou o ataque!`);
        }
    }

    comportamentoAleatorio(jogador: Personagem): void {
        if(Math.random() < 0.5){
            this.atacar(jogador);
        } else {
            console.log(`${this.nome} está esperando...`);
        }
    }
}