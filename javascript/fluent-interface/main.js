// main.js
import { textoFluente } from './fluent.js';

textoFluente
  .adicionar("Olá, ")
  .adicionar("mundo!")
  .maiusculas()
  .exibir(); // Saída: OLÁ, MUNDO!