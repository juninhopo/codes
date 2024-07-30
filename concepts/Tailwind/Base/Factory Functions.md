Os Factory Functions são funções que retorna um novo Objeto.

Aqui está 2 exemplos de como funcionaria em uma variavel.

### Ex:
```
let person1 = {
	firstName: 'John',
	lastName: 'Doe',
	getFullName() {
		return this.firstName + ' ' + this.lastName
	},
}

console.log(person1.getFullName())
```

### Output
```
John Doe
```


## Funcionamento do Factory Functions

```
function createPerson(firstName, lastName) {
	return {
		firstName: firstName,
		lastName: lastName,
		
		getFullName() {
			return firstName + ' ' + lastName
		},
	},
}

let person1 = createPerson('Darlan', 'Jr')
let person2 = createPerson('Fernanda', 'Pires')

console.log(person1.getFullName())
console.log(person2.getFullName())
```

### Assim ficaria o output: 
```
Darlan Jr
Fernanda Pires
```
