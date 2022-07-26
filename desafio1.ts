/* Como podemos rodar isso em um arquivo .ts sem causar erros?

employee.code = 10;
employee.name = "John"; */

// Respota 1
let employee = {
    code: 10,
    name: 'John'
};

// Resposta 2
let employee2: {code:number, name: string} = {
    code: 10,
    name: 'John'
}

// Resposta 3
interface employee {
    code: number,
    name: string
}

// Resposta 4
let employee3: employee = {
    code: 200,
    name: 'Jhon'
} 
