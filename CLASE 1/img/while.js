//let numero=Number(prompt("Elije un numero menor al 100: "))

/* while(numero<10){
    numero++;
    document.write(numero)
} */
/* 
do{
    numero++;
    document.write(numero +"<br>")
}while(numero<100)

while(numero<1000){
    numero++;
    document.write(numero+"<br>");
    if(numero==500){
        break;
    }
} */

for(let i=0;i>10;i++){
    console.log(i)
}

for(i=0;i<10;i++){
    console.log(2*i)
}

const lenguajes=["Javascript","Java", "Python", "PHP"]
console.log(lenguajes[2])
console.log(lenguajes.length)
console.log(lenguajes[lenguajes.length-1])

let animales=["perro", "Gato", "Yaguarete", "Yacare","Suribi", "Carpincho", "Perro"]
let numeros=[1,2,8,7,4,6,7,3]
let bidimensional=[1,2,3,4,5,6[7,8]]
let dev="Codo a Codo"

const nuevoArray=numeros.map(elements=>elements*10)
console.log(nuevoArray)

const nuevoArray2=animales.filter(elements=>elements=="Perro"||elements=="Gato")
console.log(nuevoArray2)

const nuevoArray3=animales.forEach(elements,i)=>{
    console.log(`el ${element} se encuentra en el indice ${i}`)
}
console.log(nuevoArray3)
