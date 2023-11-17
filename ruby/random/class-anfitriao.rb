# Criando o Anfitriao
class Anfitriao
  def initialize(nome = "Mundo")
    @nome = nome
  end
  def diz_ola
    puts "Ola #{@nome}!"
  end
  def diz_adeus
    puts "Adeus #{@nome}, volte sempre."
  end
end

# Iniciando o Anfitriao
g = Anfitriao.new("Joao")

g.diz_adeus

g.diz_ola

g.nome
