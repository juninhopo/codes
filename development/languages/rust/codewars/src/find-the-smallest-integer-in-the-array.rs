fn find_smallest_int(arr: &[i32]) -> i32 {
    // your code here
    let mut minor = i32::MAX;

    for &num in arr {
        if num < minor {
            minor = num;
        }
    }

    minor

}


fn main () {
    let input: &[i32] = &[34, 15, 88, 2];
    let result = find_smallest_int(input);

    println!("{}", result);
}
