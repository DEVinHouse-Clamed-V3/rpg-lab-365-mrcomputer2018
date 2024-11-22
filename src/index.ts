import { Arma } from './Arm'
import Personagem from './Personagem'

const arma = new Arma('Espada', 'Uma espada comum', 10)

console.log(arma.getDetalhes())

const personagem1 = new Personagem("Guerreiro", 100, 30); // Sem arma (arma será null)
const personagem2 = new Personagem("Cavaleiro", 120, 40); // Com arma
personagem2.setArma(arma);

console.log(personagem1.getArma()) // null
console.log(personagem2.getArma()?.getDetalhes()) // Espada: Uma espada comum - Dano: 10
console.log(personagem2.getDetalhes()) // Nome: Cavaleiro - Vida: 120 - Força: 40 - Arma: Espada: Uma espada comum - Dano: 10