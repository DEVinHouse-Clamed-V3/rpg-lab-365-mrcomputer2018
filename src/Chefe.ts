import Inimigo from "./Inimigo";
import Personagem from "./Personagem";

export default class Chefe extends Inimigo {
    private habilidadeEspecial: string = '';
    private danoEspecial: number = 0;

    constructor(nome: string, vida: number, dano: number, habilidadeEspecial: string, danoEspecial: number) {
        super(nome, vida, dano); // Chama o construtor da classe pai
        this.habilidadeEspecial = habilidadeEspecial;
        this.danoEspecial = danoEspecial;
    }

    usarHabilidadeEspecial(alvo: Personagem): void {
        console.log(`${this.getNome()} usa a habilidade especial: ${this.habilidadeEspecial}!`);
        alvo.receberDano(this.danoEspecial);
        console.log(`${alvo.getNome()} recebeu ${this.danoEspecial} de dano especial!`);
    }

    // Sobrescrevendo o comportamento aleatório para o chefe
    comportamentoAleatorio(jogador: Personagem): void {
        const acao = Math.random();
        
        if (acao < 0.4) {
            this.atacar(jogador);
        } else if (acao < 0.8) {
            this.usarHabilidadeEspecial(jogador);
        } else {
            console.log(`${this.getNome()} está se fortalecendo para o próximo ataque!`);
        }
    }
}