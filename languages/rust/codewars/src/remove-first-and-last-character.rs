
pub fn remove_char(s: &str) -> String {
  if s.len() > 2 {
    let mut chars = s.chars();
    chars.next();
    chars.next_back();
    chars.collect()

  } else {
    String::from("")
  }
}

const INPUT: &str = "A newbie";

fn main() {
  let result = remove_char(&INPUT);

  println!("{}", result);
}
