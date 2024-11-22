import { Arma } from './Arm'
import Inimigo from './Inimigo';
import Personagem from './Personagem'

const arma = new Arma('Espada', 'Uma espada comum', 10)

console.log(arma.getDetalhes())

const personagem1 = new Personagem("Guerreiro", 100, 30); // Sem arma (arma será null)
const personagem2 = new Personagem("Cavaleiro", 120, 40); // Com arma
personagem2.setArma(arma);

const inimigo = new Inimigo("Orc", 80, 25);

console.log("\n==== Ataque do personagem 1 ====") 
personagem1.atacar(inimigo);
