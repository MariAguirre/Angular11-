/*
    ===== Código de TypeScript =====
*/
// any: meter lo que sea y funciona
// para que soporte todo los typos de datos
//let habilidades: (boolean | string |number) [] = ['Bash', 'Counter', 'Healing', 100];

let habilidades: string [] = ['Bash', 'Counter', 'Healing'];

//Se crea una interface para trabajar con objetos

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string //Se coloca ? para que acepte el valor adiconal y sea opcional
}

const personaje: Personaje = { 
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Pueblo Paleta';

console.table( personaje );