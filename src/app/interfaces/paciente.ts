export interface Paciente {
    id_paciente?: number;
    numero_paciente?: string;
    contrasenia?: string;
    primer_apellido: string;
    segundo_apellido?: string;
    primer_nombre: string;
    segundo_nombre?: string;
    numero_cuenta: string;
    numero_identidad: string;
    lugar_procedencia: string;
    direccion: string;
    carrera: string;
    fecha_nacimiento: Date;
    sexo: string;
    estado_civil: string;
    seguro_medico?: string;
    numero_telefono: string;
    emergencia_telefono: string;
    peso?: string;
    talla?: string;
    imc?: string;
    temperatura?: string;
    presion?: string;
    pulso?: string;
    estudiante?: boolean;
    empleado?: boolean;
    visitante?: boolean;
    prosene?: boolean;
    created_at?:string;
    update_at?:string;

}