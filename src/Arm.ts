export class Arma {
    private readonly nome: string =''
    private readonly descricao: string = ''
    private dano: number = 0
    
    // construtor
    // dano: number = 0 -> parâmetro opcional - cria por padrao uma arma sem dano
    constructor(nome: string, descricao: string, dano: number = 0) {
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

    getDetalhes() {
        return `${this.nome} -> ${this.descricao} - Dano: ${this.dano}`
    }

    setDano(dano: number) {
        if (dano < 0) {
           return 'Dano não pode ser negativo'
        }

        this.dano = dano
    }
}