
// Convert number to reversed array of digits
// To execute a code
// rustc convert-number-to-reverse-array-of-digits.rs

// Convert number to reversed array of digits

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):

// 35231 => [1,3,2,5,3]
// 0 => [0]

fn digitize(n: u64) -> Vec<u8> {
    let digits_string = n.to_string();
    let mut vector_result: Vec<u8> = Vec::new();

    for ch in digits_string.chars().rev() {
        if let Some(digit) = ch.to_digit(10) {
            vector_result.push(digit as u8);
        }
    }

    vector_result
}

const INPUT: u64 = 35231;

fn main () {
    let result = digitize(INPUT);
    println!("{:?}", result);
}
