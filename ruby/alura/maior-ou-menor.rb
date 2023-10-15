puts "Welcome to the guessing game\n"

puts "What your name?\n\n"
name = gets

puts "We will start the game for you #{name}\n"

puts "Choosing a secret number between 0 and 200...\n\n"

secret_number = 175

puts "Chosen... Try to guess our secret number:\n\n"

puts "Attempt 1"
puts "Enter the number:\n"

attempt = gets

puts "Did you get it right? You tried #{attempt}"

isCorrect = secret_number == attempt.to_i

if isCorrect
    puts "Correct!"
else
    bigger = secret_number > attempt.to_i
    if bigger 
        puts "The number is bigger"
    else
        puts "The number is smaller"
    end
end