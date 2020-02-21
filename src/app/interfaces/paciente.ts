export interface Paciente {
    id_paciente: number;
    numero_paciente?: string;
    nombre_completo: string;
    numero_cuenta: string;
    numero_identidad: string;
    imagen?: string;
    lugar_procedencia: string;
    direccion: string;
    carrera: string;
    fecha_nacimiento: Date;
    edad?: number;
    sexo: any;
    estado_civil: any;
    seguro_medico?: any;
    numero_telefono: string;
    emergencia_telefono: string;
    emergencia_persona: string;
    peso?: string;
    talla?: string;
    imc?: string;
    temperatura?: string;
    presion?: string;
    pulso?: string;
    prosene?:string;
    categoria?:string;
    created_at?:string;
    updated_at?:string;
}
