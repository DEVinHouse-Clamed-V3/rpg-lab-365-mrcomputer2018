export class Arma {
    private nome: string
    private descricao: string
    private dano: number
    
    constructor(nome: string, descricao: string, dano: number) {
        this.nome = nome;
        this.descricao = descricao;
        this.dano = dano; 
    }

    getNome() {
        return this.nome;
    }

    getDescricao () {
        return this.descricao
    }

    getDano() {
        return this.dano
    }

    setDano(dano: number) {
        if (dano < 0) {
           return 'Dano não pode ser negativo'
        }

        this.dano = dano
    }

    descricaoCompleta() {
        return `${this.nome}: ${this.descricao} - Dano: ${this.dano}`
    }
    
}