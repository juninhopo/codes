// To execute a code
// rustc counting-sheep.rs

// Consider an array/list of sheep where some sheep may be
// missing from their place. We need a function that counts
// the number of sheep present in the array (true means present).

// For example,

// &[true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

fn count_sheep(sheep: &[bool]) -> u8 {
    let mut save_true: u8 = 0;

    for &is_saved in sheep {
        if is_saved {
            save_true += 1;
        }
    }

    save_true
}

const INPUT: [bool; 24] = [
    true, true, true, false, true, true, true, true,
    true, false, true, false, true, false, false, true,
    true, true, true, true, false, false, true, true
];

fn main() {
  let result = count_sheep(&INPUT);

  println!("{}", result);
}
