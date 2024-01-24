# Estrutura de dados - Pilha

Uma pilha, também conhecida como stack em inglês, é uma estrutura de dados linear que segue o princípio conhecido como LIFO (Last In, First Out), ou seja, o último welemento inserido na pilha é o primeiro a ser removido.

A pilha é semelhante a uma pilha de pratos, em que você pode adicionar um novo prato somente no topo e só pode remover o prato mais recentemente adicionado. Essa abordagem é usada em muitas situações da vida real, como a pilha de livros ou a pilha de cartas em um jogo.

A estrutura da pilha consiste em dois principais componentes: o topo da pilha e os elementos armazenados. O topo da pilha é o ponto de acesso onde ocorrem as operações de inserção (push) e remoção (pop) dos elementos.

Aqui estão as principais operações suportadas por uma pilha:

1. Push (Inserção): Adiciona um elemento no topo da pilha. O novo elemento se torna o elemento mais recente e é colocado acima dos outros elementos existentes.

2. Pop (Remoção): Remove o elemento do topo da pilha. O elemento removido é aquele que foi adicionado mais recentemente.

3. Top (Consulta): Retorna o valor do elemento no topo da pilha sem removê-lo.

4. Empty (Vazia): Verifica se a pilha está vazia. Retorna verdadeiro se não houver nenhum elemento na pilha e falso caso contrário.

5. Size (Tamanho): Retorna o número de elementos presentes na pilha.

As pilhas podem ser implementadas usando estruturas de dados como arrays (vetores) ou listas encadeadas. A implementação mais comum é usando arrays, onde o topo da pilha é representado pelo índice do elemento mais recente.

Ao realizar operações em uma pilha, é importante garantir que não ocorra um estouro de pilha (stack overflow), que acontece quando você tenta adicionar um elemento em uma pilha já cheia, ou um subfluxo de pilha (stack underflow), que ocorre quando você tenta remover um elemento de uma pilha vazia.

A pilha tem uma natureza recursiva e é amplamente utilizada em algoritmos e estruturas de dados, como avaliação de expressões matemáticas, reversão de palavras ou caracteres, rastreamento de chamadas de função, entre outros.

Espero que esta explicação detalhada tenha ajudado a compreender a estrutura de dados pilha!

## Exemplo de uso:

Suponha que você esteja escrevendo um programa para verificar se uma expressão matemática contendo parênteses está corretamente balanceada. Ou seja, você precisa verificar se os parênteses estão abrindo e fechando corretamente na expressão.

Nesse caso, você pode usar uma pilha para realizar essa verificação. Aqui está um exemplo de como você pode implementar isso:

1. Inicialize uma pilha vazia.

2. Percorra a expressão caractere por caractere.

3. Se encontrar um parêntese de abertura (como '('), empilhe-o na pilha.

4. Se encontrar um parêntese de fechamento (como ')'), verifique se a pilha está vazia. Se estiver vazia, isso significa que a expressão não está balanceada, pois não há parênteses de abertura correspondentes. Caso contrário, desempilhe um parêntese da pilha.

5. Continue percorrendo a expressão até o final.

6. Após percorrer toda a expressão, verifique se a pilha está vazia. Se estiver vazia, isso significa que todos os parênteses foram balanceados corretamente. Caso contrário, a expressão não está balanceada.

A utilização da pilha nesse caso permite que você mantenha um controle adequado dos parênteses. Ao encontrar um parêntese de fechamento, você verifica se há um parêntese de abertura correspondente na pilha. Se não houver, significa que a expressão não está balanceada.

Esse é apenas um exemplo de uso de pilha em um código. Existem muitos outros casos em que as pilhas são utilizadas, como inversão de palavras, resolução de problemas de rastreamento (tracing) e muitos algoritmos complexos.
