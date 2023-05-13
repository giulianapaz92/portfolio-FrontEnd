export default class Usuario {
    id: number;
    nombre: string;
    email: string;
    password: string;
    
    constructor(id: number, nombre: string, email:string, password:string) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }

  }
