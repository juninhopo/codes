tags: #dev #aws #ecs
links:

## Description
	- O ECS (**Elastic Container Service**) é um serviço de orquestração de containers totalmente gerenciado e se integra com todo o ecossistema da AWS, incluindo CloudTrail, CloudWatch e Amazon ECR (Elastic Container Registry).

## Estructure
- Cluster - Podemos ter diversas EC2, detro do cluster podemos ter diversos services
- Service - Pode ser varios tipos de aplicações 
	- 1. Aplicacao web
	- 2. Worker
- Task Definition - O service vai se associar ao Task Definition = É a definição do que é um container. Ex: Olha a minha Task Definition da Aplicacao Web é um container que vai rodar na porta 80 que está utilizando a imagem que esta no path x/y/z que tem variavel de ambiente x y z. Tudo isso e o Task Definition. 
- Task - No task Definition que eu vou dizer quantas taks eu vou lancar. Ex: Olha, da aplicação web quero 1 task e do Worker eu quero 2 taks.
	- Web aplication -> 1
	- Worker -> 2

## What is the advantage of using ECS?
	- Ele vai automatizar o gerenciamento dos containers na aws. 
	- Quando você atualiza o seu projeto e voce conecta esse processo com o ECS, ele faz a atualização para você dos seus containers.