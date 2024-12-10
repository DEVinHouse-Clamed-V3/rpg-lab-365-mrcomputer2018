import { Arma } from "./Arm";
import Inimigo from "./Inimigo";

export default class Personagem {
    //atributos
    protected nome: string = '';
    protected vida: number = 100;
    protected forca: number = 10;
    private arma: Arma | null = null;

    //construtor
    constructor(nome: string, vida: number = 100, forca: number = 10) {
        this.nome = nome;
        this.vida = vida;
        this.forca = forca;
    }

    // metodos
    getNome(): string {
        return this.nome
    }

    getVida(): number {
        return this.vida
    }

    getForca(): number {
        return this.forca
    }

    getArma(): Arma | null {
        return this.arma;
    }

    getDetalhes(): string {
        return `Nome: ${this.nome} - Vida: ${this.vida} - Força: ${this.forca } - Arma: ${this.arma?.getDetalhes()}`;
    }

    setNome(nome: string): string {
        return this.nome = nome
    }

    setVida(vida: number): number {
        if (vida <= 0) {
            console.log(`${this.nome} foi derrotado!`);
        }
        
        return this.vida = vida
    }

    setArma(arma: Arma): void {
        this.arma = arma;
    }

    atacar(alvo: Inimigo): void {
        if (Math.random() < 0.5) {
            const dano = this.calcularDano();
            alvo.receberDano(dano);
        } else {
            console.log(`${this.nome} errou o ataque!`);
        }
    }

    protected calcularDano(): number {
        return this.forca + (this.arma ? this.arma.getDano() : 0);
    }

    receberDano(dano: number): void {
        this.vida -= dano;
        if (this.vida <= 0) {
            console.log(`${this.nome} foi derrotado!`);
        } else {
            console.log(`${this.nome} recebeu ${dano} de dano!`);
        }
    }

    equiparArma(arma: Arma): void {
        this.arma = arma;
        console.log(`${this.nome} equipou a arma ${arma.getNome()}`);
    }   

}
