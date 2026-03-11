let x:number = 10

let nome:string = "gui"

let vetor:number[] = [1,2,3]

let vetorstring:string[] = ["oi", "oi2"]

//console.log(a)
console.log(nome)

//teste

let bol:boolean = true;

bol = false;

const variavel:any = "oi"

const a:undefined = undefined;

let obj:{id:number, nome:string, idade:number} ={
id:1,
nome:"guilherme",
idade:31
}

obj.id=1
obj.nome="tere"
obj.idade=33


const asdf = [0,1,2,3,4,5]
asdf[0] = 10


const a1: number|string = 10

type Pessoa = {id:number, nome:string, idade:number}

let p1:Pessoa ={
id:1,
nome:"gui",
idade:31
}



//Funções no javascript/typescript
//oque é função?
//um bloco de codigo que executa uma tarefa

//beneficio: não repetir codigo 

function nomeFuncao(variavel:number): number{
    return 10
}

const f = (variavel:number): number=> 10
const f3 = f
const f2 = nomeFuncao(10)

console.log("valor de x é" + f3.toString)
console.log(`valor de x é ${f3}`)

const somavetor = [10, 20, 30, 40, 50];

//terminem essa função para retornar a soma de todos os elementos de um vetor.
function somaVetor(vetor:number[]){
    let soma = 0;
    for (let i = 0; i < vetor.length; i++) {
        
        const element = vetor[i];
        
        soma = soma + element!
    } return soma
}
console.log(`valor ${somaVetor([1,2,3,4,5,6])}`)

//soma par  
//funcao q recebe 2 vetores e faça a operaçao de merge ex: mergeVetor([1,2,3], [4,5,6]) => [1,2,3,4,5,6]
function mergeVetor(v1: number[], v2: number[]) {
   return v1.concat(v2);
}

console.log(mergeVetor([1,2,3,4],[4,5,6]));

///////////////////////////////////////////////
/**
 *8
function criaNovoVetor(vetor, valor1, valor2) {
    
}
/**
 * Exercício 01 - cria um novo vetor com os valores do vetor original mais dois novos valores
 * Nome da função - criaNovoVetor
 * Crie uma função que retorne um novo vetor com os valores do vetor original mais dois novos valores
 * @param {number[]} vetor Vetor de números
 * @param {number} valor1 Primeiro valor a ser adicionado
 * @param {number} valor2 Segundo valor a ser adicionado
 * @returns {number[]} Retorna um novo vetor com os valores do vetor original mais dois novos valores
 * @example
 * criaNovoVetor([1, 2, 3], 4, 5) // [1, 2, 3, 4, 5]
 * criaNovoVetor([1, 2, 3], 0, 0) // [1, 2, 3, 0, 0]
 */ 

function criaNovoVetor(vetor: number[], valor1: number, valor2: number) {
    const NovoVetor = vetor.concat(valor1, valor2);
return NovoVetor
}
console.log(criaNovoVetor([1, 2, 3], 4, 5)); // [1, 2, 3, 4, 5]
console.log(criaNovoVetor([1, 2, 3], 0, 0)); // [1, 2, 3, 0, 0]

/**
 * Exercício 02 - divisivelPor11
 * Nome da função - divisivelPor11
 * Crie uma função que retorna um array com os números divisíveis por 11 no intervalo
 * @param {number} min Número mínimo
 * @param {number} max Número máximo
 * @returns {number[]} Retorna um array com os números divisíveis por 11 no intervalo
 * @example
 *  divisivelPor11(1, 100) // [11, 22, 33, 44, 55, 66, 77, 88, 99]
 *  
 * divisivelPor11(11, 110) // [11, 22, 33, 44, 55, 66, 77, 88, 99, 110]
 */

function divisivelPor11(min: number, max: number): number[] {

const numeros: number[] = []

for (let i = min; i <= max; i++) {

if (i % 11 === 0) {
numeros.push(i)
}
}
return numeros
}
console.log(divisivelPor11(1, 100));// [11, 22, 33, 44, 55, 66, 77, 88, 99]
console.log(divisivelPor11(11, 110)); // [11, 22, 33, 44, 55, 66, 77, 88, 99, 110]

/**
 *  Exercício 03 - maioresDeIdade
 * Nome da função - maioresDeIdade
 * Crie uma função que retorna um array com os objetos com idade maior que 18
 * @param {vetor:Pessoa[]} vetor Vetor de objetos com id, nome e idade
 * @returns {Pessoa[]} Retorna um array com os objetos com idade maior que 18
 * @example
 * 
 * const pessoa1 = {id: 1, nome: 'João', idade: 20}
 * const pessoa2 = {id: 2, nome: 'Maria', idade: 18}
 * const pessoa3 = {id: 3, nome: 'José', idade: 17}
 * maioresDeIdade([pessoa1, pessoa2, pessoa3]) // [pessoa1, pessoa2]
 */
interface Pessoa{
    id: number,
    nome: string,
    idade: number
}

//Início do seu código
function maioresDeIdade(vetor: Pessoa[]): Pessoa[] {

const resultado: Pessoa[] = []

for (let i = 0; i < vetor.length; i++) {

if (vetor[i].idade >= 18) {
resultado.push(vetor[i])
}

}

return resultado

}
const pessoa1 = {id: 1, nome: 'João', idade: 20}
const pessoa2 = {id: 2, nome: 'Maria', idade: 18}
const pessoa3 = {id: 3, nome: 'José', idade: 17}

console.log(maioresDeIdade([pessoa1, pessoa2, pessoa3]))
//Fim do seu código

/**
 * Exercício 04 - resolve equação
 * Nome da função - resolveEquacao
 * Crie uma função que retorne os pontos em Y a partir de um vetor dos pontos em X da equação y = x^2 + 2x + 6
 * @param {number[]} vetor Vetor de pontos em X
 * @returns {number[]} Retorna um array com os pontos em Y
 * @example
 * resolveEquacao([1, 2, 3]) // [9, 14, 21]
 */

//Início do seu código
function resolveEquacao(vetor: number[]): number[] {

const resultado: number[] = []

for (let i = 0; i < vetor.length; i++) {

let y = vetor[i] * vetor[i] + 2 * vetor[i] + 6

resultado.push(y)
}
return resultado
}
console.log(resolveEquacao([1, 2, 3]))
//Fim do seu código

//LISTA 02//
/**
 * Exercício 01 - Calcular o quadrado de um número
 * Nome da função - calcularQuadrado
 * Crie uma função que receba um número e retorne o seu valor elevado ao quadrado.
 * @param {number} a Número a ser calculado
 * @returns {number} Retorna o quadrado do número
 * @example
 * calcularQuadrado(2) // 4
 * calcularQuadrado(-3) // 9
 */

//Início do seu código
function calcularQuadrado(a:number):number {
return a * a;
}
console.log(calcularQuadrado(2)); 
console.log(calcularQuadrado(-3));
//Fim do seu código

/**
 * Exercício 02 - Verificar se um número é positivo
 * Nome da função - ehPositivo
 * Crie uma função que retorne verdadeiro se o número for maior que zero e falso caso contrário.
 * @param {number} a Número a ser verificado
 * @returns {boolean} Retorna true para positivos e false para negativos ou zero
 * @example
 * ehPositivo(2) // true
 * ehPositivo(-3) // false
 */

//Início do seu código
function ehPositivo(a: number): boolean {

if (a > 0) {
return true
} else {
return false
}

}
console.log(ehPositivo(2))   // true
console.log(ehPositivo(-3))  // false
//Fim do seu código

/**
 * Exercício 03 - Calcular média de três números
 * Nome da função - calcularMedia
 * Crie uma função que receba três números e retorne a média aritmética entre eles.
 * @param {number} a Primeiro número
 * @param {number} b Segundo número
 * @param {number} c Terceiro número
 * @returns {number} Retorna a média dos três números
 * @example
 * calcularMedia(2, 4, 6) // 4
 * calcularMedia(10, 20, 30) // 20
 */

//Início do seu código
function calcularMedia(a: number, b: number, c: number): number {

let media = (a + b + c) / 3

return media
}
console.log(calcularMedia(2, 4, 6))     // 4
console.log(calcularMedia(10, 20, 30))  // 20
//Fim do seu código

/**
 * Exercício 04 - Verificar se um ano é bissexto
 * Nome da função - ehAnoBissexto
 * Crie uma função que verifique se um ano é bissexto (divisível por 4).
 * @param {number} ano Ano a ser verificado
 * @returns {boolean} Retorna true se for bissexto e false caso contrário
 * @example
 * ehAnoBissexto(2020) // true
 * ehAnoBissexto(2021) // false
 */

//Início do seu código

//Fim do seu código





 
