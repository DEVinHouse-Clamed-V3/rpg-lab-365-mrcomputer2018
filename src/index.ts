import { Arma } from './Arm'
import Inimigo from './Inimigo';
import Personagem from './Personagem'

const espada = new Arma('Espada','Uma espada comum', 300)
const lanca = new Arma('Lança', 'Uma lança comum', 400)
const adaga = new Arma('Adaga', 'Uma adaga comum', 200)
const faca = new Arma('Faca', 'Uma faca comum', 100)
const punhal = new Arma('Punhal', 'Um punhal comum', 150)

console.log(espada.getDetalhes())

const personagem1 = new Personagem("Guerreiro", 100, 30); // Sem arma (arma será null)
personagem1.setArma(lanca);

const personagem2 = new Personagem("Cavaleiro", 120, 40); 
personagem2.setArma(espada);

const inimigo = new Inimigo("Orc", 80, 25);

console.log("\n==== Ataque do personagem 1 ====") 
personagem1.atacar(inimigo);
