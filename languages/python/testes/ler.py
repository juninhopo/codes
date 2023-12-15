import pandas as pd

def return_csv():
  df = pd.read_csv(r"languages/python/testes/test.csv")
  df
  columns = df.columns
  print(columns)
  return columns

def hello_nico():
  print("Hello Nicopau")