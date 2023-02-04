export class Persona {
    id: number;
    nombres: string;
    apellidos: string;
    saldo: number;


    

    constructor(id: number, nombres: string, apellidos: string, saldo: number) {
        this.id = id;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.saldo = saldo;
    }

}


export class saldoFin{
    saldo : number 
    constructor(saldo: number) {
        this.saldo = saldo;
    }
}
