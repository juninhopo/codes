fn main(){
    // bool
    let fernanda_is_beautiful:bool = true;
    let sleep_on_the_sofa = false;

    // char
    let my_love = '∆';
    let at_sign:char = '@';

    // float
    let balance_account_vanessa = 91599.99; // f64 is default
    let balance_account_gabriel:f32 = 1.99; // avoid use f32

    // array
    let payments_day = [5, 15, 20];
    let boletos:[f64; 4] = [459.90, 36.10, 1230.00, 9.99];

    let mut total:f64 = 0.0; // need init variable in rust
    for x in boletos.iter(){
        total += x;
    }

    println!("Total a pagar: {}", total);
    
}