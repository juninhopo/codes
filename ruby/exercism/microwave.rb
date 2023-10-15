
# # Instructions
# # Convert the buttons entered on the microwave panel 
# to their timer equivalent.

# # Microwave timers are smart enough to know that when you press 
# 90 for seconds, you mean '01:30', which is 90 seconds. We want 
# to have a "smart display" that will convert this to the lowest 
# form of minutes and seconds, rather than leaving it as 90 seconds.

# # Build a class that accepts buttons entered and converts them to 
# the proper display panel time.

# 1min30 = 90s
# max = 60
# timer = 180 
# smart_display = 

class Microwave
  def initialize(input)
    @time = input
  end
  def timer
    # The input here a some number of digits.
    # The last 2 digits represents the number of seconds.
    # Any preceding digits are the number of minutes.
    #
    # For example, the input "990" will represent
    # 9 minutes and 90 seconds, or 10:30 for the display.
    minutes, seconds = @time.divmod 100
    if seconds >= 60
      seconds %= 60
      minutes += 1
    end
    sprintf "%02d:%02d", minutes, seconds
  end
end