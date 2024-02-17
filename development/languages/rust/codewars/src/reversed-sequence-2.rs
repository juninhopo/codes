// To execute a code
// rustc reversed-sequence-2.rs

fn reverse_seq(n: u32) -> Vec<u32> {
  let mut numbers: Vec<u32> = Vec::with_capacity(n as usize);
  
  for number in (1..=n).rev() {
      numbers.push(number);
  }
  
  numbers
}

const INPUT: u32 = 6;

fn main() {
  reverse_seq(INPUT);
}