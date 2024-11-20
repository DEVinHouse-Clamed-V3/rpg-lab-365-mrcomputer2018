import { Arma } from "./Arm";

class Personagem {
    private nome: string;
    private vida: number
    private forca: number;
    private arma: Arma | null;

    constructor(nome: string, vida: number, forca: number) {
        this.nome = nome;
        this.vida = vida;
        this.forca = forca;
        this.arma = null;
    }
}
