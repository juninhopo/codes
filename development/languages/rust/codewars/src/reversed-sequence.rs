// To execute a code
// rustc reversed-sequence.rs

fn reverse_seq(n: u32) -> Vec<u32> {
  let mut numbers: Vec<u32> = Vec::new();
  let mut number = n;
  
  while number != 0 {
    numbers.push(number);
    number -= 1;
  }
  
  println!("{:?}", numbers);
  numbers
}

const INPUT: u32 = 6;

fn main() {
  reverse_seq(INPUT);
}