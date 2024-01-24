# Criando a classe
class Exemplo
  attr_accessor :nomes
end
 
exemplo = Exemplo.new

# Usando o método setter para definir
# o valor da variável de instância
exemplo.nomes = ['João', 'Maria', 'Pedro', 'Jonas']

# Usando o método getter para acessar 
# o valor da variável de instância
puts exemplo.nomes

# Output: ['João', 'Maria', 'Pedro']

# Aqui nesse exemplo eu tenho uma classe Exemplo
# que possui uma variavel de instancia @nomes
# quando utilizar o attr_acessor :nomes, os metodos
# nomes e nomes= sao automaticamente criados. O
# metodo nomes e usado para obter o valor da variavel
# de instancia, enquanto o metodo nomes= e usado para 
# definir o valor da variavel de instancia. Dessa forma
# nos podemos acessar e modificar o valor da variavel 
# de instancia @nomes usando os metodos gerados 
# automaticamente pelo attr_acessor.