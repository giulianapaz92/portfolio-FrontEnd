export default class Educacion {
    id: number;
    nombre: string;
    estado: string;
    fechaDesde: string;
    fechaHasta: string;
    titulo: string;
    
    constructor(id: number, nombre:string, estado:string, fechaDesde:string, fechaHasta:string, titulo:string) {
        this.id = id;
        this.nombre = nombre;
        this.estado = estado;
        this.fechaDesde = fechaDesde;
        this.fechaHasta = fechaHasta;
        this.titulo = titulo;
    }

  }
