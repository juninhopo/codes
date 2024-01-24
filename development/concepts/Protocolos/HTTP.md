HTTP - Protocolo de comunicação

Put - Atualização
Post - Criação
Delete - Deletar
Get - Puxar informações de determinada rota

Definição:

HTTP (Hypertext Transfer Protocol) é um protocolo de comunicação utilizado para transferir informações pela internet. Ele define a maneira como os clientes (como navegadores da web) e os servidores se comunicam e trocam dados.

O HTTP foi desenvolvido para permitir que os sistemas de hipermídia (como páginas web) pudessem ser acessados e compartilhados de forma eficiente. Ele é baseado no modelo cliente-servidor, onde o cliente envia uma solicitação ao servidor e espera por uma resposta.

Quando você digita um endereço de um site no navegador, por exemplo, o navegador envia uma solicitação HTTP para o servidor que hospeda esse site. Essa solicitação geralmente contém informações como o método HTTP (como GET, POST, PUT, DELETE), o endereço do recurso solicitado (URL) e os cabeçalhos que fornecem detalhes adicionais.

O servidor recebe a solicitação e processa-a, realizando a ação correspondente ao método HTTP. Por exemplo, se for uma solicitação GET, o servidor retornará o conteúdo do recurso solicitado. Em seguida, o servidor envia uma resposta HTTP de volta ao cliente, que contém informações como o código de status (como 200 OK, 404 Not Found), os cabeçalhos de resposta e, opcionalmente, o corpo da resposta (que contém os dados solicitados).

O HTTP é um protocolo sem estado, o que significa que cada solicitação e resposta são independentes uma da outra. O servidor não mantém informações sobre solicitações anteriores do mesmo cliente. No entanto, para lidar com a necessidade de manter o estado em aplicativos web, foram desenvolvidas técnicas, como o uso de cookies e sessões.

Ao longo do tempo, o HTTP evoluiu e diferentes versões foram lançadas. O HTTP/1.1 é uma das versões mais amplamente utilizadas atualmente. O HTTP/2 e o HTTP/3 (também conhecido como QUIC) são versões mais recentes que foram desenvolvidas para melhorar o desempenho e a segurança das comunicações na web.

Em resumo, o HTTP é um protocolo de comunicação que permite a transferência de informações entre clientes e servidores na internet. Ele desempenha um papel fundamental na troca de dados em aplicativos web e é a base para o funcionamento da World Wide Web.
