# Estrutura de dados - FILA

Uma fila é uma estrutura de dados que segue o princípio "primeiro a entrar, primeiro a sair" (FIFO - "First-In, First-Out"). É semelhante a uma fila do mundo real, onde a primeira pessoa que chega é a primeira a ser atendida.

Uma fila possui duas operações principais:

1. **Enfileirar (enqueue):** Adiciona um elemento ao final da fila. Esse novo elemento passa a ser o último da fila, aguardando sua vez de ser processado.
2. **Desenfileirar (dequeue):** Remove o elemento do início da fila. Esse elemento é o primeiro a ser adicionado à fila e é o próximo a ser processado.

As operações de enfileirar e desenfileirar são executadas nas extremidades da fila. O elemento adicionado por meio da operação de enfileirar é chamado de "rear" ou "tail" da fila, enquanto o elemento removido por meio da operação de desenfileirar é chamado de "front" ou "head" da fila.

Além disso, é comum que as filas tenham uma operação adicional chamada **primeiro da fila (peek)**, que permite acessar o elemento do início da fila sem removê-lo. Essa operação é útil quando você precisa verificar qual é o próximo elemento a ser processado, sem alterar a estrutura da fila.

As filas podem ser implementadas usando várias estruturas de dados subjacentes, como arrays (vetores) ou listas ligadas. A escolha da implementação depende das necessidades específicas e das operações que serão realizadas com maior frequência.

Aqui está um exemplo simples de uma fila representada usando uma lista ligada:

```js
class Fila {
  constructor() {
    this.fila = []
  }

  enfileirar(valor) {
    this.fila.push(valor)
  }

  desenfileirar() {
    if (this.fila.length === 0) {
      return null
    }
    return this.fila.shift()
  }

  primeiroDaFila() {
    if (this.fila.length === 0) {
      return null
    }
    return this.fila[0]
  }
}

// Exemplo de uso
const fila = new Fila()
fila.enfileirar(10)
fila.enfileirar(20)
fila.enfileirar(30)

console.log(fila.primeiroDaFila()) // Saída: 10

fila.desenfileirar()
console.log(fila.primeiroDaFila()) // Saída: 20
```

Neste exemplo, cada nó da lista ligada (`No`) possui um valor e um ponteiro para o próximo nó. A classe `Fila` mantém referências para a cabeça (`head`) e a cauda (`tail`) da fila. A operação de enfileirar adiciona um novo nó ao final da fila, a operação de desenfileirar remove o nó do início da fila e a operação de primeiro da fila retorna o valor do primeiro elemento da fila sem removê-lo.

Essa é uma visão geral básica da estrutura de dados fila. Ela é amplamente utilizada em várias aplicações, como simulação de eventos, processamento de tarefas em um sistema operacional, agendamento de recursos, entre outros.
