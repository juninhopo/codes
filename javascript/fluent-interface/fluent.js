// fluent.js
export const textoFluente = {
  valor: "",

  adicionar(palavra) {
    this.valor += palavra;
    return this; // Retorna o próprio objeto
  },

  maiusculas() {
    this.valor = this.valor.toUpperCase();
    return this; // Retorna o próprio objeto
  },

  exibir() {
    console.log(this.valor);
    return this; // Retorna o próprio objeto
  }
};