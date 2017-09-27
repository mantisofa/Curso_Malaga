export class ProvinciaClass {
    id: string;
    name: string;
}

export interface Provincia {
    idProvincia: number;
    nombre: string;
}

export interface Interface2 {
    id: number;
    nombre: string;
}

interface InterfacePrivada {//esta interfaz no podría ser usada desde fuera
    id: number;
    nombre: string;
}
