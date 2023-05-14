export default class Experiencia {
    id: number;
    empresa: string;
    puesto: string;
    fechaDesde: string;
    fechaHasta: string;
    descripcion: string;
    
    constructor(id: number, empresa:string, puesto:string, fechaDesde:string, fechaHasta:string, descripcion:string) {
        this.id = id;
        this.empresa = empresa;
        this.puesto = puesto;
        this.fechaDesde = fechaDesde;
        this.fechaHasta = fechaHasta;
        this.descripcion = descripcion;
    }

  }
