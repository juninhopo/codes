fn to_alternating_case(s: &str) -> String {
    let mut result = String::with_capacity(s.len());

    for c in s.chars() {
        if c.is_ascii_lowercase() {
            result.push(c.to_ascii_uppercase());
        } else if c.is_ascii_uppercase() {
            result.push(c.to_ascii_lowercase());
        } else {
            result.push(c);
        }
    }

    result
}

fn main() {
    let input = "HELLO world";

    let response = to_alternating_case(input);

    println!("Input: {}", input);
    println!("Response: {}", response);
}
