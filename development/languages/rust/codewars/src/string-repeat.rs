fn repeat_str(src: &str, count: usize) -> String {
  let mut result = String::new();
  for _ in 0..count {
    result.push_str(src);
  }
  result
}

const INPUT_STRING: &str = "OI";
const INPUT_NUMBER: usize = 6;

fn main () {
  let result = repeat_str(&INPUT_STRING, INPUT_NUMBER);

  println!("{}", result);
}






