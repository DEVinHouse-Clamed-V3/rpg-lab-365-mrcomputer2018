import { Arma } from './Arm'
import Inimigo from './Inimigo';
import Personagem from './Personagem'

const espada = new Arma('Espada','Uma espada comum', 300)
const lanca = new Arma('Lança', 'Uma lança comum', 400)
const adaga = new Arma('Adaga', 'Uma adaga comum', 200)

console.log(espada.getDetalhes())
console.log(lanca.getDetalhes())
console.log(adaga.getDetalhes())

const inimigo1 = new Inimigo('Orc', 100, 50)
inimigo1.setArma(adaga)

const inimigo2 = new Inimigo('Goblin', 80, 40)
inimigo2.setArma(espada)

const inimigo3 = new Inimigo('Troll', 120, 60)
const inimigo4 = new Inimigo('Ogro', 150, 70)
const inimigo5 = new Inimigo('Gigante', 200, 100)

console.log(inimigo1.getDetalhes())
console.log(inimigo2.getDetalhes())
console.log(inimigo3.getDetalhes())
console.log(inimigo4.getDetalhes())
console.log(inimigo5.getDetalhes())

const personagem1 = new Personagem("Guerreiro", 100, 30); // Sem arma (arma será null)
personagem1.setArma(lanca);

console.log("\n==== Ataque do personagem ====") 
personagem1.atacar(inimigo1);
