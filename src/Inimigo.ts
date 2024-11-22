import { Arma } from "./Arm";
import Personagem from "./Personagem";

export default class Inimigo extends Personagem{

    constructor(nome: string, energia: number, vida: number){
        super(nome, energia, vida);
    }

    // metodos
    /* atacar(alvo: Personagem): O inimigo realiza um ataque contra o personagem (ou jogador). 
    O ataque tem uma chance de falhar (50%), e se bem-sucedido, o dano é calculado 
    e o personagem alvo recebe esse dano.

    comportamentoAleatorio(jogador: Personagem): Método que define uma ação aleatória para o inimigo, 
    podendo ser atacar o jogador ou apenas esperar. Isso simula um comportamento imprevisível durante o combate. */

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