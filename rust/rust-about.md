link -> https://gist.github.com/juninhopo/9655a99a6339813c138a0dd5d469993d

# Prefácio

- [Prefácio](#prefácio)
    - [Links para você usar](#links-para-você-usar)
- [Como surgiu o Rust](#como-surgiu-o-rust)
- [Pilares do Rust](#pilares-do-rust)
- [Tipos primitivos:](#tipos-primitivos)
  - [Escalares (scalar types)](#escalares-scalar-types)
    - [Tipos:](#tipos)
  - [Compostos (compound types)](#compostos-compound-types)
    - [Tipos:](#tipos-1)
- [Inteiros](#inteiros)
  - [Signed](#signed)
  - [Unsigned](#unsigned)
- [Testando os tipos - ESCALARES](#testando-os-tipos---escalares)
    - [Floats](#floats)
    - [Boolean](#boolean)
    - [Character](#character)
- [Testando os tipos - COMPOSTOS](#testando-os-tipos---compostos)
    - [Tuplas](#tuplas)
    - [Matrizes / Arrays](#matrizes--arrays)
- [Erros comuns em linguagem de baixo nível](#erros-comuns-em-linguagem-de-baixo-nível)
    - [Out of Bound Error](#out-of-bound-error)

### Links para você usar

1. [Rust Playground](https://play.rust-lang.org/?version=stable&mode=debug&edition=2021) -> Para você pegar o código da documentação e rodar direto no navegador.

# Como surgiu o Rust

- Surgiu como alternativa ao C e C++

Ao longo do tempo ela se tornou uma linguagem multi propósito

- Desenvolvimento Web
- Desenvolvimento de aplicativos
- Desenvolvimento nos sistemas operacionais

# Pilares do Rust

- Segurança
- Performance
- Concorrência

Ultimamente o Rust tem atendimento muito bem no Backend e Frontend.

Vários desenvolvedores com bastantes criações de respeito para a comunidade diz que o Rust vai ser bastante usado no futuro.

# Tipos primitivos:

Os tipos primitivos em Rust são divididos em 2 categorias: `Escalares e Compostos`

## Escalares (scalar types)

- Representam  um único valor contido dentro de uma escala conhecida.
- Permitem a comparação direta entre valores.

### Tipos:

- inteiro (integer) ex: `5`
- flutuante (floating point) ex: `42.1`
- booleano (bool) ex: `true`, `false`
- caractere (chat) ex: `'a'`, `Ω≈`, `'😒'`

## Compostos (compound types)

- Servem para agregar múltiplos valores.

### Tipos:

- tupla (tuple) ex: `(5, true, 42.1,, 'a')`
- matriz (array) ex: `[1, 2, 3, 4, 5, 6]`

# Inteiros

| bits | signed | unsigned | 
|------|--------|----------|
| 8    | i8     | u8       | 
| 16   | i16    | u16      |
| 32   | i32    | u32      |
| 64   | i64    | u64      |
| 128  | i128   | u128     |
| arch | isize  | usize    |

## Signed

range: -(2^n-1) até ((2^n-1)-1)
i8: -128 até 127 [-(2^7) até ((2^7)-1)]

## Unsigned

range: 0 até ((2^n)-1)
u8: 0 até 255 [0 até ((2ˆ8)-1)]

# Testando os tipos - ESCALARES

- Abaixo o Rust não vai deixar passar pelo problema de overflow, que seria colocar um valor onde ele não "cabe". O tipo u8 não suporta o valor de x * 200. `5 * 200 = 1000`

```rs
fn main() {
    let x: u8 = 5;
    let y: u8 = x * 200;
}
```

- Rust facilita na hora de criar números para ficar visível. Com isso você consegue deixar visível qual o valor que esta ali. Método comum utilizado é você trocar o "." pelas "_".

  - O "_" vai ser ignorado pelo Rust, é como se ele não existisse.

```rs
fn main() {
    let x = 5;
    let y = 1_193_123_000
}
```

- Rust nos permite colocar inteiros que estão em outras bases.

- h = Hexadecimal
- o = Octal
- b = Binário
- by = Byte

```rs
fn main() {
    let h = 0xff;
    let o = 0o77;
    let b = 0b111_000;
    let by = b'A';
```

### Floats

- Rust nos permite colocar os Floats.

```rs
fn main() {
    let x:f64 = 42.11;
    let y:f32 = 42.1;
}
```

### Boolean

- Rust nos permite colocar os Booleans.

```rs
fn main() {
    let x = true;
    let y = false;
}
```

### Character

- Rust nos permite colocas os character. Ele nos permite criar até 4 bytes dentro da tabela unicode. O Rust vai nos permitir utilizar símbolos, como por exemplo emojis. Observação importante no tipo character é necessário utilizar aspas simples `'🥲'`.

```rs
fn main() {
    let letra1: char = 'a';
    let letra2 = 'b'; 
    let emoji1 = '🥲'; 
}
```

# Testando os tipos - COMPOSTOS

### Tuplas

- O mais importante tipo composto do Rusto é a `TUPLA`. A Tupla é um tipo que tem um tamanho fixo de elementos dentro dela. Uma outra característica é que ela tem a tipagem Heterogênea, ela permite que tenhamos elementos de mais de um tipo misturados dentro de uma única tupla.

- Uma tupla assim criada com 3 valores, você não pode alterar o tamanho dela, ela sempre vai precisar ter a mesma estrutura.

```rs
fn main() {
    let numbers = (1, 2, 3);
    // durante a inferência o rust vai criar um tipo assim:
    // let numbers: (i32, i32, i32) = (1, 2, 3)
    println!("{:?}", numbers);

    // pegando um elemento dentro da tupla
    println!("{:?}", numbers.0);
    println!("{:?}", numbers.2);
    println!("{:?}", numbers.1);
}
```

- Uma coisa interessante das tuplas é o fato delas poderem ser desestruturadas através do pattern match. Isso é bastante util quando o assunto é retorno de funções. 

```rs
fn main() {
    let numbers = (1, 2, 3);

    let (a, b, c) = numbers;
    // isso ficaria assim
    // a = 1
    // b = 2
    // c = 3

    println!("{:?}", a);
    println!("{:?}", b);
    println!("{:?}", c);
}
```

- Apesar da tupla ser de tamanho e tipos fixos, ela pode ser mutável.

```rs
fn main() {
    let mut numbers = (1, 2, 3);

    numbers.0 = 50;
    println!("{:?}", numbers);

    // usando o pattern match podemos mudar a tupla inteira
    // lembrando que precisa estar no mesmo tipo de
    // dos elementos e a mesma quantidade
    numbers = (45, 90, 100);
    println!("{:?}", numbers);
}
```

### Matrizes / Arrays

- A diferença no `array` para a `tupla` é que no `array` não aceita tipos diferentes dentro do mesmo objeto. 

```rs
fn main() {
    let numbers = [1, 2, 3];
    // a inferência que o Rust faz nesse let é assim
    // let numbers: [i32;3] = [1, 2, 3]
    // no tipo a gente passa o array com o tipo e a quantidade de elementos dentro dele
    println!("{:?}", numbers);

    // acessando o valor do array
    println!("{}", numbers[0]);
    println!("{}", numbers[1]);
    println!("{}", numbers[2]);
}
```

- Podemos fazer o array mutável

```rs
fn main() {
    let mut numbers = [4, 5, 6];
    println!("{:?}", numbers);

    numbers = [10, 20, 30];
    println!("{:?}", numbers);

    numbers[0] = 50;
    println!("{}", numbers[0]);
}
```

# Erros comuns em linguagem de baixo nível

### Out of Bound Error

- Estou tentando pegar um elemento na posição `3` mas so temos as posições `0,1,2`. Assim tomamos o `Out of Bound Error`. Esse erro acontece na compilação e não na execução. 

```rs
fn main() {
    let numbers = [1.1, 2.0, 3.3];
    println!("{:?}", numbers[3]);
}
```

- Existe um comando que podemos rodar chamado slice para poder pegar apenas uma parte desse array.

```rs
fn main() {
    let numbers = [1, 2, 3];
    println!("{:?}", &numbers[1..3]); // output -> [2, 3]
}
```

- Com o mesmo comando podemos omitir partes desse array passando apenas onde vai começar e ele vai até o final.

```rs
fn main() {
    let numbers = [1, 2, 3];
    println!("{:?}", &numbers[1..]); // output -> [2, 3] 
}
```
