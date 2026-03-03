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


//terminem essa função para retornar a soma de todos os elementos de um vetor.
function somaVetor(vetor:number[]){
    let soma = 0
    for (let i= 0; i < vetor.length; i++) {
        soma = soma + vetor[i];             
    }
    return soma           
}
const x = somaPar([1,2,3,4,])

// Faça uma função que receba 2 vetores e 
//faça a operação de merge entre eles 
ex: mergeVetor([1,2,3])
