use clap::{App, Arg};

fn main() {
    let app = App::new("calculator") // instancia o cli do app
    .arg(
        Arg::with_name("sum")        // adiciona o arg nomeado 'sum'
            .long("--sum")           // registra o pattern '--sum='
            .takes_value(true)       // armazena o valor
    )
    .get_matches();                  // coleta os args passados

    if let Some(numbers) = app.value_of("sum") {    // se 'sum' foi encontrado
        let result: u32 = numbers                   // recebe &str "5 1 4"
            .split_whitespace()                     // split em Vec<&str>["5", "1", "4"]
            .map(|n| n.parse::<u32>().unwrap())     // converte em Vec<u32>[5, 1, 4]
            .sum();                                 // Soma com resultado 10u32

        println!("Result: {}", result.to_string());
    }

}