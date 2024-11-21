import { Arma } from "./Arm";

export default class Personagem {
    //atributos
    private nome: string;
    private vida: number
    private forca: number;
    private arma: Arma | null;

    //construtor
    constructor(nome: string, vida: number, forca: number, arma: Arma | null) {
        this.nome = nome;
        this.vida = vida;
        this.forca = forca;
        this.arma = arma;
    }

    // metodos
    getArma(): Arma | null {
        return this.arma;
    }

    setArma(arma: Arma): void {
        this.arma = arma;
    }
}
