export type roles = 'cliente' |'admin';
export class Usuario {
    id!:number;
    nombre!:string ;
    apellido!: string ;
    //tipoDocumento!: string;
   // documento!: number;
    correo!: string;
    usuario!: string;
    clave!: string;
    constructor(){}
}
