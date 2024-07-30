# Estrutura de Dados - LISTA

Uma lista é uma estrutura de dados linear que permite armazenar um conjunto de elementos em uma determinada ordem. Cada elemento na lista é chamado de nó ou item e possui uma relação com o próximo elemento da lista. Essa relação é estabelecida através de referências ou ponteiros.

Existem dois tipos principais de listas: lista encadeada (linked list) e lista estática (array list).

1. Lista Encadeada:

   - Na lista encadeada, cada nó contém um valor e um ponteiro que aponta para o próximo nó da lista.
   - O último nó da lista aponta para NULL, indicando o final da lista.
   - A estrutura de uma lista encadeada pode variar, podendo ser simplesmente encadeada (singly linked list), duplamente encadeada (doubly linked list) ou circular.
   - Na lista simplesmente encadeada, cada nó tem um ponteiro para o próximo nó.
   - Na lista duplamente encadeada, cada nó tem um ponteiro para o próximo nó e um ponteiro para o nó anterior.
   - Na lista circular, o último nó da lista aponta para o primeiro nó, formando um ciclo.

2. Lista Estática:
   - A lista estática, também conhecida como array list ou vetor, é uma lista cujos elementos são armazenados em posições contíguas de memória.
   - Ela possui um tamanho fixo, definido previamente, e pode ocupar espaço adicional se o tamanho máximo for excedido.
   - Acesso aos elementos da lista é feito por meio de índices.
   - Para inserir ou remover elementos em uma lista estática, é necessário realizar deslocamentos de elementos, o que pode ser ineficiente para operações frequentes de inserção e remoção.

As listas oferecem várias operações comuns, como:

- Inserção: permite adicionar um novo elemento em uma determinada posição da lista.
- Remoção: permite excluir um elemento de uma determinada posição da lista.
- Acesso: permite acessar o valor de um elemento em uma determinada posição da lista.
- Pesquisa: permite encontrar a posição de um determinado valor na lista.
- Tamanho: retorna a quantidade de elementos presentes na lista.

A escolha entre a lista encadeada e a lista estática depende das necessidades específicas do problema. A lista encadeada é mais flexível para inserção e remoção de elementos, enquanto a lista estática é mais eficiente para acessar elementos em posições específicas.

É importante considerar o desempenho e as características de cada tipo de lista ao escolher a estrutura de dados mais adequada para uma determinada aplicação.
