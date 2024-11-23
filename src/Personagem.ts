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

/* Descrição

Nesta questão, você deve criar a classe Personagem
Atributos da Classe Personagem:

    nome: O nome do personagem, representado como uma string. Este atributo define a identidade do personagem.

    vida: A quantidade de pontos de vida do personagem, representada por um número. Quando a vida 
    chegar a 0 ou menos, o personagem é derrotado.

    forca: A força do personagem, usada para calcular o dano durante o ataque. Esse atributo 
    também é do tipo número e afeta diretamente o poder de ataque do personagem.

    arma: A arma que o personagem usa, que pode ser null ou um objeto da classe Arma. A arma pode ser 
    equipada ao personagem e impacta o cálculo de dano no ataque. Este atributo é do tipo Arma | null.

Métodos da Classe Personagem:

    getNome(): Retorna o nome do personagem.

    setNome(nome: string): Define o nome do personagem.

    getVida(): Retorna a quantidade de vida do personagem.

    setVida(vida: number): Define a quantidade de vida do personagem.

    getForca(): Retorna o valor da força do personagem.

    setForca(forca: number): Define a força do personagem.

    getArma(): Retorna a arma equipada do personagem (se houver).

    setArma(arma: Arma | null): Define a arma do personagem, podendo ser null ou um objeto da classe Arma.

    atacar(alvo: Inimigo): Realiza um ataque contra um inimigo, com uma chance de falhar (50%). Se o ataque for bem-sucedido, o dano é calculado e aplicado no inimigo.

    receberDano(dano: number): Reduz a vida do personagem com base no dano recebido. Caso a vida chegue a 0 ou menos, o personagem é derrotado.

    equiparArma(arma: Arma): Permite equipar uma arma ao personagem, afetando o cálculo do dano no ataque.

    calcularDano(): Método privado que calcula o dano do personagem somando sua força com o dano da arma equipada (se houver).

Desafio:

    Implemente a classe Personagem com os atributos e métodos descritos.

    Faça com que o personagem possa atacar um inimigo, com uma chance de falha de ataque, e que o dano seja calculado 
    com base na força do personagem e na arma equipada (se houver).

    Verifique o comportamento da vida do personagem, mostrando mensagens quando ele receber dano ou for derrotado.
 */