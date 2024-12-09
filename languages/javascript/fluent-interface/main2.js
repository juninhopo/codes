// main.js
import { criarTextoFluente } from './fluent-factory.js';

const texto1 = criarTextoFluente();
texto1.adicionar("Olá").adicionar(" mundo").maiusculas().exibir(); // Saída: OLÁ MUNDO

const texto2 = criarTextoFluente();
texto2.adicionar("Outro exemplo").exibir(); // Saída: Outro exemplo