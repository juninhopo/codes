class RichPerson
  def money
    100000000
  end
end

class PoorPerson
  def money
    1000
  end
end

class Person < PoorPerson 
  attr_accessor :name, :age

  def initialize(name, age) 
    @name = name
    @age = age
  end

  def introduce
    "Ola, meu nome e #{@name} e eu tenho #{@age} anos e aqui e o Ruby." 
  end

  def adult? 
    @age >= 18
  end

  def adult!
    @age = 20
  end
end