import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from '../interfaces/paciente';
import { FormularioService } from '../services/formulario.service';
import { AntecedentesFamiliares } from '../interfaces/antecedentes-familiares';
import { AntecedentesPersonales } from '../interfaces/antecedentes-personales';
import { HabitosToxicologicosPersonales } from '../interfaces/habitos-toxicologicos-personales';
import { ActividadSexual } from '../interfaces/actividad-sexual';
import { AntecedentesGinecologicos } from '../interfaces/antecedentes-ginecologicos';
import { PlanificacionesFamiliares } from '../interfaces/planificaciones-familiares';
import { AntecedentesObstetricos } from '../interfaces/antecedentes-obstetricos';
import { AppComponent } from "../app.component";
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';

export interface Loginadmin {
  value: string;
  viewValue: string;
}

export interface Sexo {
  value: string;
  viewValue: string;
}

export interface seguro_medico {
  value: string;
  viewValue: string;
}

export interface estado_civil {
  value: string;
  viewValue: string;
}

export interface Parentesco {
  value: string;
  viewValue: string;
}

export interface Desnutricion {
  value: string;
  viewValue: string;
}

export interface enfermedad_mental {
  value: string;
  viewValue: string;
}

export interface Alergia {
  value: string;
  viewValue: string;
}

export interface Cancer {
  value: string;
  viewValue: string;
}

export interface practica_sexual_riesgo {
  value: string;
  viewValue: string;
}

export interface Periocidad {
  value: string;
  viewValue: string;
}

export interface Caracteristica {
  value: string;
  viewValue: string;
}

export interface Metodo {
  value: string;
  viewValue: string;
}

export interface resultado_embarazo {
  value: string;
  viewValue: string;
}

export class MyErrorStateMatcher implements ErrorStateMatcher{
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class FormularioComponent implements OnInit {

  formulario_datos_generales = new FormGroup({

      primer_apellido: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-z]{2,15}$/)]),
      segundo_apellido: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-z]{2,15}$/)]),
      primer_nombre: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-z]{2,15}$/)]),
      segundo_nombre: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-z]{2,15}$/)]),
      numero_cuenta: new FormControl('', [Validators.required,Validators.pattern(/^[2][0-9]{10}$/)]), 
      // "^$" delimita el inicio y el final de lo que quiere que se cumpla de la expresion
      // "/ /" indica el inicio y el final de la expresion regular
      // "{10}" indica le numero de digitos de lo que lo antecede
      numero_identidad: new FormControl('', [Validators.required,Validators.pattern(/^\d{4}\d{4}\d{5}$/)]),
       // "\d" es lo mismo "[0-9]"
      lugar_procedencia: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-z\s]{5,30}$/)]),
      direccion: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      carrera: new FormControl('', [Validators.required]),
      fecha_nacimiento: new FormControl('', Validators.required),
      sexo: new FormControl('', Validators.required),
      estado_civil: new FormControl('', Validators.required),
      seguro_medico: new FormControl('', Validators.required),
      numero_telefono: new FormControl('', [Validators.required, Validators.pattern(/^\d{8}$/)]),
      emergencia_telefono: new FormControl('', [Validators.required, Validators.pattern(/^\d{8}$/)]),
  
  
  });

  formulario_antecedentes_familiares = new FormGroup({
    
    diabetes : new FormControl('',[Validators.required]),
    observacion_diabetes : new FormControl({value:'', disabled: true},[]),
    tb_pulmonar : new FormControl('',[Validators.required]),
    observacion_tb_pulmonar : new FormControl({value:'', disabled: true},[]),
    desnutricion : new FormControl('',[Validators.required]),
    observacion_desnutricion : new FormControl({value:'', disabled: true},[]),
    tipo_desnutricion: new FormControl({value:'', disabled: true},[]),
    enfermedades_mentales : new FormControl('',[Validators.required]),
    observacion_enfermedades_mentales : new FormControl({value:'', disabled: true},[]),
    tipo_enfermedad_mental: new FormControl({value:'', disabled: true},[]),
    convulsiones : new FormControl('',[Validators.required]),
    observacion_convulsiones : new FormControl({value:'', disabled: true},[]),
    alcoholismo_sustancias_psicoactivas : new FormControl('',[Validators.required]),
    observacion_alcoholismo_sustancias_psicoactivas: new FormControl({value:'', disabled: true},[]),
    
    alergias : new FormControl('',[Validators.required]),
    observacion_alergias: new FormControl({value:'', disabled: true},[]),
    tipo_alergia: new FormControl({value:'', disabled: true},[]),


    cancer : new FormControl('',[Validators.required]),
    observacion_cancer: new FormControl({value:'', disabled: true},[]),
    tipo_cancer: new FormControl({value:'', disabled: true},[]),
    hipertension_arterial: new FormControl('',[Validators.required]),
    observacion_hipertension_arterial: new FormControl({value:'', disabled: true},[]),
    otros : new FormControl('',[]),
    observacion_otros : new FormControl('',[]),
      
  });


  formulario_antecedentes_personales = new FormGroup({
  
    diabetes : new FormControl('',[Validators.required]),
    observacion_diabetes : new FormControl('',[]),
    tb_pulmonar : new FormControl('',[Validators.required]),
    observacion_tb_pulmonar : new FormControl('',[]),
    its : new FormControl('',[Validators.required]),
    observacion_its : new FormControl('',[]),
    desnutricion : new FormControl('',[Validators.required]),
    observacion_desnutricion : new FormControl('',[]),
    tipo_desnutricion: new FormControl('',[]),
    enfermedades_mentales : new FormControl('',[Validators.required]),
    observacion_enfermedades_mentales : new FormControl('',[]),
    tipo_enfermedad_mental: new FormControl('',[]),
    convulsiones : new FormControl('',[Validators.required]),
    observacion_convulsiones : new FormControl('',[]),
    alergias : new FormControl('',[Validators.required]),
    observacion_alergias : new FormControl('',[]),
    tipo_alergia: new FormControl('',[]),
    cancer : new FormControl('',[Validators.required]),
    observacion_cancer : new FormControl('',[]),
    tipo_cancer: new FormControl('',[]),
    hospitalarias_quirurgicas : new FormControl('',[Validators.required]),
    fecha_antecedente_hospitalario: new FormControl('',[]),
    tratamiento: new FormControl('',[]),
    diagnostico: new FormControl('',[]),
    tiempo_hospitalizacion: new FormControl('',[]),
    traumaticos : new FormControl('',[Validators.required]),
    observacion_traumaticos : new FormControl('',[]),
    otros : new FormControl('',[]),
    observacion_otros : new FormControl('',[]),
  });

  formulario_habito_toxicologico_personal = new FormGroup({

    alcohol : new FormControl('',[Validators.required]),
    observacion_alcohol : new FormControl(''),
    tabaquismo : new FormControl('',[Validators.required]),
    observacion_tabaquismo : new FormControl(''),
    marihuana : new FormControl('',[Validators.required]),
    observacion_marihuana : new FormControl(''),
    cocaina : new FormControl('',[Validators.required]),
    observacion_cocaina : new FormControl(''),
    otros : new FormControl(''),
    observacion_otros : new FormControl('')

  });

  formulario_actividad_sexual = new FormGroup({

    actividad_sexual : new FormControl('', Validators.required),
    edad_inicio_sexual : new FormControl(''),
    numero_parejas_sexuales : new FormControl(''),
    practicas_sexuales_riesgo : new FormControl(''),
  
  });

  formulario_antecedente_ginecologico = new FormGroup ({

    edad_inicio_menstruacion : new FormControl('',[Validators.required]),
    fum : new FormControl('',[Validators.required]),
    citologia : new FormControl('',[Validators.required]),
    fecha_citologia : new FormControl(''),
    resultado_citologia : new FormControl(''),
    duracion_ciclo_menstrual : new FormControl('', [Validators.required]),
    periocidad_ciclo_menstrual : new FormControl('',[Validators.required]),
    caracteristicas_ciclo_menstrual : new FormControl('',[Validators.required])


  });

  formulario_planificacion_familiar = new FormGroup({

    planificacion_familiar : new FormControl('',Validators.required),
    metodo_planificacion : new FormControl(''),
    observacion_planificacion : new FormControl(''),
    
  });

  formulario_antecedente_obstetrico = new FormGroup({

    partos: new FormControl(''),
    abortos: new FormControl(''),
    cesarias: new FormControl(''),
    hijos_vivos: new FormControl(''),
    hijos_muertos: new FormControl(''),
    fecha_termino_ult_embarazo : new FormControl(''),
    descripcion_termino_ult_embarazo : new FormControl(''),
    observaciones : new FormControl(''),
  
  });
  

  matcher = new MyErrorStateMatcher();
  
  
// Aqui esta codificando MELVIN
c1 = true;
c1si() {      
    this.c1 = false;
}
c1no() {
this.c1 = true;      
}

isDisabled1 = true;
triggerSomeEventSi1() {    
    this.isDisabled1 = false;
}
triggerSomeEventNo1() { 
  this.isDisabled1 = true; 
}

isDisabled2 = true;
triggerSomeEventSi2() {      
    this.isDisabled2 = false;
}
triggerSomeEventNo2() {  
  this.isDisabled2 = true; 
}

isDisabled3 = true;
triggerSomeEventSi3() {      
  this.isDisabled3 = false;
}
triggerSomeEventNo3() { 
  this.isDisabled3 = true;   
  }

isDisabled4 = true;
triggerSomeEventSi4() {      
    this.isDisabled4 = false;
}
triggerSomeEventNo4() {
  this.isDisabled4 = true; 
}

isDisabled5 = true;
triggerSomeEventSi5() {      
    this.isDisabled5 = false;
}
triggerSomeEventNo5() {  
  this.isDisabled5 = true; 
}

isDisabled6 = true;
triggerSomeEventSi6() {      
    this.isDisabled6 = false;
}
triggerSomeEventNo6() {  
  this.isDisabled6 = true; 
}

isDisabled7 = true;
triggerSomeEventSi7() {      
    this.isDisabled7 = false;
}
triggerSomeEventNo7() {  
  this.isDisabled7 = true; 
}



isDisabled8 = true;
triggerSomeEventSi8() {      
    this.isDisabled8 = false;
}
triggerSomeEventNo8() {
  this.isDisabled8 = true; 
  }

  isDisabled9 = true;
triggerSomeEventSi9() {      
    this.isDisabled9 = false;
}
triggerSomeEventNo9() { 
  this.isDisabled9 = true; 
  }

isDisabledB1 = true;
triggerSomeEventSiB1() {      
    this.isDisabledB1 = false;
}
triggerSomeEventNoB1() {  
  this.isDisabledB1 = true; 
 }

 isDisabledB2 = true;
 triggerSomeEventSiB2() {      
     this.isDisabledB2 = false;
 }
 triggerSomeEventNoB2() {  
   this.isDisabledB2 = true; 
  }
   isDisabledB3 = true;
triggerSomeEventSiB3() {      
    this.isDisabledB3 = false;
}
triggerSomeEventNoB3() {  
  this.isDisabledB3 = true; 
 }

isDisabledB4 = true;
triggerSomeEventSiB4() {      
    this.isDisabledB4 = false;
}
triggerSomeEventNoB4() {  
  this.isDisabledB4 = true; 
  }

  isDisabledB5 = true;
triggerSomeEventSiB5() {      
    this.isDisabledB5 = false;
}
triggerSomeEventNoB5() {  
  this.isDisabledB5 = true; 
  }

  isDisabledB6 = true;
triggerSomeEventSiB6() {      
    this.isDisabledB6 = false;
}
triggerSomeEventNoB6() {  
  this.isDisabledB6 = true; 
  }


  isDisabledB77 = true;
  triggerSomeEventSiB77() {      
    this.isDisabledB77 = false;
}
triggerSomeEventNoB77() {  
  this.isDisabledB77 = true; 
  }



  isDisabledB8 = true;
triggerSomeEventSiB8() {      
    this.isDisabledB8 = false;
}
triggerSomeEventNoB8() {  
  this.isDisabledB8 = true; 
  }

  isDisabledB9 = true;
triggerSomeEventSiB9() {      
    this.isDisabledB9 = false;
}
triggerSomeEventNoB9() {  
  this.isDisabledB9 = true; 
  }

isDisabledB10 = true;
inputB10 : string ;
triggerSomeEventSiB10() { 

  console.log(this.formulario_datos_generales.get('sexo').value);
  
  if(this.formulario_datos_generales.get('sexo').value == "Hombre"){
    this.isDisabledB10 = false;
  }else{
    this.isDisabledB10 = false;
    this.ocultar=false;
  }
  
  
}
triggerSomeEventNoB10() {  
  console.log(this.formulario_datos_generales.get('sexo').value);

  if(this.formulario_datos_generales.get('sexo').value == "Hombre"){
    this.inputB10  =null ;
    this.isDisabledB10 = true; 
  }else{
    this.inputB10  =null ;
    this.isDisabledB10 = true; 
    this.ocultar=true;
  }
}

isDisabledB11 = true;
inputB11 : string ;
triggerSomeEventSiB11() {    
  this.isDisabledB11 = false;
}
triggerSomeEventNoB11() {  
  this.inputB11  =null ;
  this.isDisabledB11 = true; 
}

isDisabledB12 = true;
inputB12 : string ;
triggerSomeEventSiB12() {      
    this.isDisabledB12 = false;
}
triggerSomeEventNoB12() {             
  this.inputB12  =null ;
  this.isDisabledB12 = true; 
}


des = true;
ingreso : string ;
des1 = true;
ingreso1: string ;
des2 = true;
ingreso2: string ;
des3 = true;
ingreso3: string ;
    
Mostrar() {      
  this.des = false;
}
Esconder() {
this.ingreso  =null ;
this.des = true;      
}


Mostrar1() {      
this.des1 = false;
}
Esconder1() {
this.ingreso1  =null ;
this.des1 = true;      
}

Mostrar2() {      
this.des2 = false;
}
Esconder2() {
this.ingreso2  =null ;
this.des2 = true;      
}
Mostrar3() {      
this.des3 = false;
}
Esconder3() {
this.ingreso3  =null ;
this.des3 = true;      
}


mostrarS(){
  this.ocultar=false;
}
mostrarN(){
this.ocultar=true;
}

ocultar: boolean = true;


  paciente: Paciente = {
    primer_apellido: null,
    segundo_apellido: null,
    primer_nombre: null,
    segundo_nombre: null,
    numero_cuenta: null,
    numero_identidad: null,
    lugar_procedencia: null,
    direccion: null,
    carrera: null,
    fecha_nacimiento: null,
    sexo: null,
    estado_civil: null,
    seguro_medico: null,
    numero_telefono: null,
    emergencia_telefono: null

  };

  antecedente_familiar: AntecedentesFamiliares ={

    diabetes : null,
    observacion_diabetes : null,
    tb_pulmonar : null,
    observacion_tb_pulmonar : null,
    desnutricion : null,
    observacion_desnutricion : null,
    tipo_desnutricion: null,
    enfermedades_mentales : null,
    observacion_enfermedades_mentales : null,
    tipo_enfermedad_mental: null,
    convulsiones : null,
    observacion_convulsiones : null,
    alcoholismo_sustancias_psicoactivas : null,
    observacion_alcoholismo_sustancias_psicoactivas: null,
    alergias : null,
    observacion_alergias: null,
    tipo_alergia: null,
    cancer : null,
    observacion_cancer: null,
    tipo_cancer: null,
    hipertension_arterial: null,
    observacion_hipertension_arterial: null,
    otros : null,
    observacion_otros : null,
    id_paciente : null
    

  };

  antecedente_personal: AntecedentesPersonales = {
    diabetes : null,
    observacion_diabetes : null,
    tb_pulmonar : null,
    observacion_tb_pulmonar : null,
    its : null,
    observacion_its : null,
    desnutricion : null,
    observacion_desnutricion : null,
    tipo_desnutricion: null,
    enfermedades_mentales : null,
    observacion_enfermedades_mentales : null,
    tipo_enfermedad_mental: null,
    convulsiones : null,
    observacion_convulsiones : null,
    alergias : null,
    observacion_alergias : null,
    tipo_alergia: null,
    cancer : null,
    observacion_cancer : null,
    tipo_cancer: null,
    hospitalarias_quirurgicas : null,
    fecha_antecedente_hospitalario: null,
    tratamiento: null,
    diagnostico: null,
    tiempo_hospitalizacion: null,
    traumaticos : null,
    observacion_traumaticos : null,
    otros : null,
    observacion_otros : null,
    id_paciente : null
  };

  habito_toxicologico_personal: HabitosToxicologicosPersonales = {
    alcohol : null,
    observacion_alcohol : null,
    tabaquismo : null,
    observacion_tabaquismo : null,
    marihuana : null,
    observacion_marihuana : null,
    cocaina : null,
    observacion_cocaina : null,
    otros : null,
    observacion_otros : null,
    id_paciente : null,

  }

  actividad_sexual: ActividadSexual = {
    actividad_sexual : null,
    edad_inicio_sexual : null,
    numero_parejas_sexuales : null,
    practicas_sexuales_riesgo : null,
    id_paciente : null
  };

  antecedente_ginecologico: AntecedentesGinecologicos = {
    edad_inicio_menstruacion : null,
    fum : null,
    citologia : null,
    fecha_citologia : null,
    resultado_citologia : null,
    duracion_ciclo_menstrual : null,
    periocidad_ciclo_menstrual : null,
    caracteristicas_ciclo_menstrual : null,
    id_paciente : null
  };

  planificacion_familiar: PlanificacionesFamiliares = {
    planificacion_familiar : null,
    metodo_planificacion : null,
    observacion_planificacion : null,
    id_paciente : null
    
  };

  antecedente_obstetrico: AntecedentesObstetricos = {
    partos: null,
    abortos: null,
    cesarias: null,
    hijos_vivos: null,
    hijos_muertos: null,
    fecha_termino_ult_embarazo : null,
    descripcion_termino_ult_embarazo : null,
    observaciones : null,
    id_paciente : null
  
  };

  error: boolean = false;

  //date picker
  minDate = new Date(1950, 0, 1);
  maxDate = new Date();
  


  

  //select
  sexos: Sexo[] = [
    {value: 'hombre', viewValue: 'Hombre'},
    {value: 'mujer', viewValue: 'Mujer'},
    {value: 'otro', viewValue: 'Otro'}
  ];

  seguros_medicos: seguro_medico[] = [
    {value: 'Privado', viewValue: 'Privado'},
    {value: 'IHSS', viewValue: 'IHSS'},
    {value: 'No', viewValue: 'No'}
  ];

  estados_civiles: estado_civil[] = [
    {value: 'Soltero', viewValue: 'Soltero'},
    {value: 'Union Libre', viewValue: 'Union Libre'},
    {value: 'Divorciado', viewValue: 'Divorciado'},
    {value: 'Viudo', viewValue: 'Viudo'},
    {value: 'Casado', viewValue: 'Casado'},
   
  ];

  parentescos: Parentesco[] = [
    {value: 'Padre' , viewValue: 'Padre'},
    {value: 'Madre' , viewValue: 'Madre'},
    {value: 'Abuelos' , viewValue: 'Abuelos'},
    {value: 'Tios' , viewValue: 'Tios'},

  ];

  desnutriciones: Desnutricion[] = [
    {value: 'Obecidad' , viewValue: 'Obecidad'},
    {value: 'Muy degaldo' , viewValue: 'Muy delgado'},

  ];

  enfermedades_mentaless: enfermedad_mental[] = [
    {value: 'Alzheimer' , viewValue: 'Alzheimer'},
    {value: 'Parkinson' , viewValue: 'Parkinson'},
    {value: 'Esquizofrenia' , viewValue: 'Esquizofrenia'},
    {value: 'Ansiedad' , viewValue: 'Ansiedad'},
    {value: 'Trastorno de pánico' , viewValue: 'Trastorno de pánico'},
    {value: 'Estrés' , viewValue: 'Estrés'},
    {value: 'Bipolar' , viewValue: 'Bipolar'},

  ];
  
  tipos_alergias: Alergia[] = [
    {value: 'Medicamentos' , viewValue: 'Medicamentos'},
    {value: 'Alimentos' , viewValue: 'Alimentos'},
    {value: 'Cambios de clima' , viewValue: 'Cambios de clima'},
    {value: 'Tipo de tela' , viewValue: 'Tipos de tela'},
    {value: 'Animales' , viewValue: 'Animales'},
    {value: 'Otros' , viewValue: 'Otros'},

  ];

  canceres: Cancer[] = [
    {value: 'Mama' , viewValue: 'Mama'},
    {value: 'Tiroides' , viewValue: 'Tiroides'},
    {value: 'Estómago' , viewValue: 'Estómago'},
    {value: 'Páncreas' , viewValue: 'Páncreas'},
    {value: 'Testiculo' , viewValue: 'Testiculo'},
    {value: 'Pene' , viewValue: 'Pene'},
    {value: 'Leucemia' , viewValue: 'Leucemia'},

  ];

  practicas_sexuales: practica_sexual_riesgo[] = [
    {value: 'Anal' , viewValue: 'Anal'},
    {value: 'Vaginal' , viewValue: 'Vaginal'},
    {value: 'Oral' , viewValue: 'Oral'},
  ];

  periocidades: Periocidad[] = [
    {value: 'Regular' , viewValue: 'Regular'},
    {value: 'Irregular' , viewValue: 'Irregular'},

  ];
  
  caracteristicas: Caracteristica[] = [
    {value: 'Abundante' , viewValue: 'Abundante'},
    {value: 'Normal' , viewValue: 'Normal'},
    {value: 'Escasa' , viewValue: 'Escasa'},

  ];

  metodos: Metodo[] = [
    {value: 'DIU' , viewValue: 'DIU'},
    {value: 'Condón' , viewValue: 'Condón'},
    {value: 'Pastilla' , viewValue: 'Pastilla'},
    {value: 'Implante' , viewValue: 'Implante'},
    {value: 'Inyección trimestral' , viewValue: 'Inyección trimestral'},
    {value: 'Inyección trimestral' , viewValue: 'Inyección trimestral'},
    {value: 'Inyección mensual' , viewValue: 'Inyección mensual'},
    {value: 'Ritmo' , viewValue: 'Ritmo'},
    {value: 'Esterilización' , viewValue: 'Esterilización'},

  ];

  resultados_embarazos: resultado_embarazo[] = [
    {value: 'Sin complicaciones' , viewValue: 'Sin complicaciones'},
    {value: 'Con complicaciones' , viewValue: 'Con complicaciones'},
    
  ];


  resultado:any;

  //radio buttons
  opciones: string[] = ['Si', 'No' ];
  scrap: Paciente = {
    id_paciente: null,
    numero_paciente: null,
    contrasenia: null,
    primer_apellido: null,
    segundo_apellido: null,
    primer_nombre: null,
    segundo_nombre: null,
    numero_cuenta: null,
    numero_identidad: null,
    lugar_procedencia: null,
    direccion: null,
    carrera: null,
    fecha_nacimiento: null,
    sexo: null,
    estado_civil: null,
    seguro_medico: null,
    numero_telefono: null,
    emergencia_telefono: null,
    peso: null,
    talla: null,
    imc: null,
    temperatura: null,
    presion: null,
    pulso: null,
    estudiante: null,
    empleado: null,
    visitante: null,
    prosene: null,
  }
  
 
  constructor(private formularioService: FormularioService, 
    private router: Router, activar: AppComponent) {
          
    //Obtencion de datos scrapping
     this.formularioService.getScrap().subscribe((data: Paciente)=>{
        this.scrap = data;
        console.log(this.scrap);
        this.formularioService.IngresoPaciente=this.scrap;
      }, (error)=>{
        console.log(error);
      }); 
  
     }
     pacienteNuevo: Paciente = {
      id_paciente: null,
      numero_paciente: null,
      contrasenia: null,
      primer_apellido: null,
      segundo_apellido: null,
      primer_nombre: null,
      segundo_nombre: null,
      numero_cuenta: null,
      numero_identidad: null,
      lugar_procedencia: null,
      direccion: null,
      carrera: null,
      fecha_nacimiento: null,
      sexo: null,
      estado_civil: null,
      seguro_medico: null,
      numero_telefono: null,
      emergencia_telefono: null,
      peso: null,
      talla: null,
      imc: null,
      temperatura: null,
      presion: null,
      pulso: null,
      estudiante: null,
      empleado: null,
      visitante: null,
      prosene: null,
    }

  ngOnInit() {
    
  }

  enviarDatos(){

    

   
      if(this.formulario_datos_generales.valid){

          // guardar datos del formulario en paciente y enviarlo a la api
        this.paciente.primer_apellido = this.formulario_datos_generales.get('primer_apellido').value;
        this.paciente.segundo_apellido = this.formulario_datos_generales.get('segundo_apellido').value;
        this.paciente.primer_nombre = this.formulario_datos_generales.get('primer_nombre').value;
        this.paciente.segundo_nombre = this.formulario_datos_generales.get('segundo_nombre').value;
        this.paciente.numero_cuenta = this.formulario_datos_generales.get('numero_cuenta').value;
        this.paciente.numero_identidad = this.formulario_datos_generales.get('numero_identidad').value;
        this.paciente.lugar_procedencia = this.formulario_datos_generales.get('lugar_procedencia').value;
        this.paciente.direccion = this.formulario_datos_generales.get('direccion').value;
        this.paciente.carrera = this.formulario_datos_generales.get('carrera').value;
        this.paciente.fecha_nacimiento = this.formulario_datos_generales.get('fecha_nacimiento').value;
        this.paciente.sexo = this.formulario_datos_generales.get('sexo').value;
        this.paciente.estado_civil = this.formulario_datos_generales.get('estado_civil').value;
        this.paciente.seguro_medico = this.formulario_datos_generales.get('seguro_medico').value;
        this.paciente.numero_telefono = this.formulario_datos_generales.get('numero_telefono').value;
        this.paciente.emergencia_telefono = this.formulario_datos_generales.get('emergencia_telefono').value;
        
        
        this.formularioService.guardarDatosGenerales(this.paciente).subscribe( (data) =>{
          console.log(data);     
        }, (error) => {
          console.log(error);
          this.error = true;
          alert('ocurrion un error');
        });
      }else{
        this.error= true;
      }
     

      if(this.formulario_antecedentes_familiares){
        // guardar datos del formulario en antecedente_familiar y enviarlo a la api
        this.antecedente_familiar.diabetes = this.formulario_antecedentes_familiares.get('diabetes').value;
        this.antecedente_familiar.observacion_diabetes = this.formulario_antecedentes_familiares.get('observacion_diabetes').value;
        this.antecedente_familiar.tb_pulmonar = this.formulario_antecedentes_familiares.get('tb_pulmonar').value;
        this.antecedente_familiar.observacion_tb_pulmonar = this.formulario_antecedentes_familiares.get('observacion_tb_pulmonar').value;
        this.antecedente_familiar.desnutricion = this.formulario_antecedentes_familiares.get('desnutricion').value;
        this.antecedente_familiar.observacion_desnutricion = this.formulario_antecedentes_familiares.get('observacion_desnutricion').value;
        this.antecedente_familiar.tipo_desnutricion = this.formulario_antecedentes_familiares.get('tipo_desnutricion').value;
        this.antecedente_familiar.enfermedades_mentales = this.formulario_antecedentes_familiares.get('enfermedades_mentales').value;
        this.antecedente_familiar.observacion_enfermedades_mentales = this.formulario_antecedentes_familiares.get('observacion_enfermedades_mentales').value;
        this.antecedente_familiar.tipo_enfermedad_mental = this.formulario_antecedentes_familiares.get('tipo_enfermedad_mental').value;
        this.antecedente_familiar.convulsiones = this.formulario_antecedentes_familiares.get('convulsiones').value;
        this.antecedente_familiar.observacion_convulsiones = this.formulario_antecedentes_familiares.get('observacion_convulsiones').value;
        this.antecedente_familiar.alcoholismo_sustancias_psicoactivas = this.formulario_antecedentes_familiares.get('alcoholismo_sustancias_psicoactivas').value;
        this.antecedente_familiar.observacion_alcoholismo_sustancias_psicoactivas = this.formulario_antecedentes_familiares.get('observacion_alcoholismo_sustancias_psicoactivas').value;
        this.antecedente_familiar.alergias = this.formulario_antecedentes_familiares.get('alergias').value;
        this.antecedente_familiar.observacion_alergias = this.formulario_antecedentes_familiares.get('observacion_alergias').value;
        this.antecedente_familiar.tipo_alergia = this.formulario_antecedentes_familiares.get('tipo_alergia').value;
        this.antecedente_familiar.cancer = this.formulario_antecedentes_familiares.get('cancer').value;
        this.antecedente_familiar.observacion_cancer = this.formulario_antecedentes_familiares.get('observacion_cancer').value;
        this.antecedente_familiar.tipo_cancer = this.formulario_antecedentes_familiares.get('tipo_cancer').value;
        this.antecedente_familiar.hipertension_arterial = this.formulario_antecedentes_familiares.get('hipertension_arterial').value;
        this.antecedente_familiar.observacion_hipertension_arterial = this.formulario_antecedentes_familiares.get('observacion_hipertension_arterial').value;
        this.antecedente_familiar.otros = this.formulario_antecedentes_familiares.get('otros').value;
        this.antecedente_familiar.observacion_otros = this.formulario_antecedentes_familiares.get('observacion_otros').value;

        this.formularioService.guardarAntecedentesFamiliares(this.antecedente_familiar).subscribe( (data) =>{
          console.log(data);
        }, (error) => {
          console.log(error);
          this.error = true;
          alert('ocurrion un error');
        });

      }else{
        this.error= true;
      }
      
      if(this.formulario_antecedentes_personales.valid){

        // guardar datos del formulario en antecedente_personal y enviarlo a la api
        this.antecedente_personal.diabetes = this.formulario_antecedentes_personales.get('diabetes').value;
        this.antecedente_personal.observacion_diabetes = this.formulario_antecedentes_personales.get('observacion_diabetes').value;
        this.antecedente_personal.tb_pulmonar = this.formulario_antecedentes_personales.get('tb_pulmonar').value;
        this.antecedente_personal.observacion_tb_pulmonar = this.formulario_antecedentes_personales.get('observacion_tb_pulmonar').value;
        this.antecedente_personal.its = this.formulario_antecedentes_personales.get('its').value;
        this.antecedente_personal.observacion_its = this.formulario_antecedentes_personales.get('observacion_its').value;
        this.antecedente_personal.desnutricion = this.formulario_antecedentes_personales.get('desnutricion').value;
        this.antecedente_personal.observacion_desnutricion = this.formulario_antecedentes_personales.get('observacion_desnutricion').value;
        this.antecedente_personal.tipo_desnutricion = this.formulario_antecedentes_personales.get('tipo_desnutricion').value;
        this.antecedente_personal.enfermedades_mentales = this.formulario_antecedentes_personales.get('enfermedades_mentales').value;
        this.antecedente_personal.observacion_enfermedades_mentales = this.formulario_antecedentes_personales.get('observacion_enfermedades_mentales').value;
        this.antecedente_personal.tipo_enfermedad_mental = this.formulario_antecedentes_personales.get('tipo_enfermedad_mental').value;
        this.antecedente_personal.convulsiones = this.formulario_antecedentes_personales.get('convulsiones').value;
        this.antecedente_personal.observacion_convulsiones = this.formulario_antecedentes_personales.get('observacion_convulsiones').value;
        this.antecedente_personal.alergias = this.formulario_antecedentes_personales.get('alergias').value;
        this.antecedente_personal.observacion_alergias = this.formulario_antecedentes_personales.get('observacion_alergias').value;
        this.antecedente_personal.tipo_alergia = this.formulario_antecedentes_personales.get('tipo_alergia').value;
        this.antecedente_personal.cancer = this.formulario_antecedentes_personales.get('cancer').value;
        this.antecedente_personal.observacion_cancer = this.formulario_antecedentes_personales.get('observacion_cancer').value;
        this.antecedente_personal.tipo_cancer = this.formulario_antecedentes_personales.get('tipo_cancer').value;
        this.antecedente_personal.hospitalarias_quirurgicas = this.formulario_antecedentes_personales.get('hospitalarias_quirurgicas').value;
        this.antecedente_personal.fecha_antecedente_hospitalario = this.formulario_antecedentes_personales.get('fecha_antecedente_hospitalario').value;
        this.antecedente_personal.tratamiento = this.formulario_antecedentes_personales.get('tratamiento').value;
        this.antecedente_personal.diagnostico = this.formulario_antecedentes_personales.get('diagnostico').value;
        this.antecedente_personal.tiempo_hospitalizacion = this.formulario_antecedentes_personales.get('tiempo_hospitalizacion').value;
        this.antecedente_personal.traumaticos = this.formulario_antecedentes_personales.get('traumaticos').value;
        this.antecedente_personal.observacion_traumaticos = this.formulario_antecedentes_personales.get('observacion_traumaticos').value;
        this.antecedente_personal.otros = this.formulario_antecedentes_personales.get('otros').value;
        this.antecedente_personal.observacion_otros = this.formulario_antecedentes_personales.get('observacion_otros').value;
    
        
        this.formularioService.guardarAntecedentesPersonales(this.antecedente_personal).subscribe( (data) =>{
          console.log(data);
        }, (error) => {
          this.error = true;
          console.log(error);
          alert('ocurrion un error');
        });
    
      }else{
        this.error= true;
      }

        
      if(this.formulario_habito_toxicologico_personal.valid){

        // guardar datos del formulario en habito_toxicologico y enviarlo a la api
        this.habito_toxicologico_personal.alcohol = this.formulario_habito_toxicologico_personal.get('alcohol').value;
        this.habito_toxicologico_personal.observacion_alcohol = this.formulario_habito_toxicologico_personal.get('observacion_alcohol').value;
        this.habito_toxicologico_personal.tabaquismo = this.formulario_habito_toxicologico_personal.get('tabaquismo').value;
        this.habito_toxicologico_personal.observacion_tabaquismo = this.formulario_habito_toxicologico_personal.get('observacion_tabaquismo').value;
        this.habito_toxicologico_personal.marihuana = this.formulario_habito_toxicologico_personal.get('marihuana').value;
        this.habito_toxicologico_personal.observacion_marihuana = this.formulario_habito_toxicologico_personal.get('observacion_marihuana').value;
        this.habito_toxicologico_personal.cocaina = this.formulario_habito_toxicologico_personal.get('cocaina').value;
        this.habito_toxicologico_personal.observacion_cocaina = this.formulario_habito_toxicologico_personal.get('observacion_cocaina').value;
        this.habito_toxicologico_personal.otros = this.formulario_habito_toxicologico_personal.get('otros').value;
        this.habito_toxicologico_personal.observacion_otros = this.formulario_habito_toxicologico_personal.get('observacion_otros').value;
      
        this.formularioService.guardarHabitosToxicologicosPersonales(this.habito_toxicologico_personal).subscribe( (data) =>{
          console.log(data);
        }, (error) => {
          this.error = true;
          console.log(error);
          alert('ocurrion un error');
        });

      }else{
        this.error= true;
      }

      if(this.formulario_actividad_sexual.valid){
          // guardar datos del formulario en actividad_sexual y enviarlo a la api
        this.actividad_sexual.actividad_sexual = this.formulario_actividad_sexual.get('actividad_sexual').value;
        this.actividad_sexual.edad_inicio_sexual = this.formulario_actividad_sexual.get('edad_inicio_sexual').value;
        this.actividad_sexual.numero_parejas_sexuales = this.formulario_actividad_sexual.get('numero_parejas_sexuales').value;
        this.actividad_sexual.practicas_sexuales_riesgo = this.formulario_actividad_sexual.get('practicas_sexuales_riesgo').value;

        this.formularioService.guardarActividadSexual(this.actividad_sexual).subscribe( (data) =>{
          console.log(data);
        }, (error) => {
          this.error = true;
          console.log(error);
          alert('ocurrion un error');
        });

      }else{
        this.error= true;
      }


      if(this.ocultar == false){

        if(this.formulario_antecedente_ginecologico.valid){

          // guardar datos del formulario en antecedente_genicologico y enviarlo a la api
          this.antecedente_ginecologico.edad_inicio_menstruacion = this.formulario_antecedente_ginecologico.get('edad_inicio_menstruacion').value;
          this.antecedente_ginecologico.fum = this.formulario_antecedente_ginecologico.get('fum').value;
          this.antecedente_ginecologico.citologia = this.formulario_antecedente_ginecologico.get('citologia').value;
          this.antecedente_ginecologico.fecha_citologia = this.formulario_antecedente_ginecologico.get('fecha_citologia').value;
          this.antecedente_ginecologico.resultado_citologia = this.formulario_antecedente_ginecologico.get('resultado_citologia').value;
          this.antecedente_ginecologico.duracion_ciclo_menstrual = this.formulario_antecedente_ginecologico.get('duracion_ciclo_menstrual').value;
          this.antecedente_ginecologico.periocidad_ciclo_menstrual = this.formulario_antecedente_ginecologico.get('periocidad_ciclo_menstrual').value;
          this.antecedente_ginecologico.caracteristicas_ciclo_menstrual = this.formulario_antecedente_ginecologico.get('caracteristicas_ciclo_menstrual').value;

          this.formularioService.guardarAntecedentesGinecologicos(this.antecedente_ginecologico).subscribe( (data) =>{
            console.log(data);
          }, (error) => {
            this.error = true;
            console.log(error);
            alert('ocurrion un error');
          });
          
          
        }

        if(this.formulario_antecedente_obstetrico.valid){

          // guardar datos del formulario en antecedente_obstetrico y enviarlo a la api
          this.antecedente_obstetrico.partos = this.formulario_antecedente_obstetrico.get('partos').value;
          this.antecedente_obstetrico.abortos = this.formulario_antecedente_obstetrico.get('abortos').value;
          this.antecedente_obstetrico.cesarias = this.formulario_antecedente_obstetrico.get('cesarias').value;
          this.antecedente_obstetrico.hijos_vivos = this.formulario_antecedente_obstetrico.get('hijos_vivos').value;
          this.antecedente_obstetrico.hijos_muertos = this.formulario_antecedente_obstetrico.get('hijos_muertos').value;
          this.antecedente_obstetrico.fecha_termino_ult_embarazo = this.formulario_antecedente_obstetrico.get('fecha_termino_ult_embarazo').value;
          this.antecedente_obstetrico.descripcion_termino_ult_embarazo = this.formulario_antecedente_obstetrico.get('descripcion_termino_ult_embarazo').value;
          this.antecedente_obstetrico.observaciones = this.formulario_antecedente_obstetrico.get('observaciones').value;  
  
  
          this.formularioService.guardarAntecedentesObstetricos(this.antecedente_obstetrico).subscribe( (data) =>{
            console.log(data);
          }, (error) => {
            this.error = true;
            console.log(error);
            alert('ocurrion un error');
          });
         
          
        } 

      }


      if(this.formulario_planificacion_familiar.valid){

          // guardar datos del formulario en planificacion_familiar y enviarlo a la api
        this.planificacion_familiar.planificacion_familiar = this.formulario_planificacion_familiar.get('planificacion_familiar').value;
        this.planificacion_familiar.metodo_planificacion = this.formulario_planificacion_familiar.get('metodo_planificacion').value;
        this.planificacion_familiar.observacion_planificacion = this.formulario_planificacion_familiar.get('observacion_planificacion').value;

        this.formularioService.guardarPlanificacionesFamiliares(this.planificacion_familiar).subscribe( (data) =>{
          console.log(data);
        }, (error) => {
          this.error = true;
          console.log(error);
          alert('ocurrion un error');
        });

      }else{
        this.error= true;
      }
      

      this.obtener();  
      for (let index = 0; index < 10; index++) {
        this.obtener();
        
      }
     
     if(this.resultado==null){
      this.obtener();
     }else{
     }
      alert ('los datos se enviarion');
    
  };

  obtener(){
     //Obtencion de Paciente recien registrado
     this.formularioService.getUltimoID().subscribe((data)=>{
      this.resultado = data;
      console.log(this.resultado);
      if(this.resultado!=null){
        if(this.resultado[0].ultimoId!=null){
        this.router.navigate(['datoPaciente/'+this.resultado[0].ultimoId]);
      }
       }
    }, (error)=>{
      console.log(error);
    }); 

  }
  



  //obtener los campos del formGroup: formulario_datos_generales
  get primer_apellido(){return this.formulario_datos_generales.get('primer_apellido')};
  get segundo_apellido(){return this.formulario_datos_generales.get('segundo_apellido')};
  get primer_nombre(){return this.formulario_datos_generales.get('primer_nombre')};
  get segundo_nombre(){return this.formulario_datos_generales.get('segundo_nombre')};
  get numero_cuenta(){return this.formulario_datos_generales.get('numero_cuenta')};
  get numero_identidad(){return this.formulario_datos_generales.get('numero_identidad')};
  get lugar_procedencia(){return this.formulario_datos_generales.get('lugar_procedencia')};
  get direccion(){return this.formulario_datos_generales.get('direccion')};
  get carrera(){return this.formulario_datos_generales.get('carrera')};
  get fecha_nacimiento(){return this.formulario_datos_generales.get('fecha_nacimiento')};
  get sexo(){return this.formulario_datos_generales.get('sexo')};
  get estado_civil(){return this.formulario_datos_generales.get('estado_civil')};
  get seguro_medico(){return this.formulario_datos_generales.get('seguro_medico')};
  get numero_telefono(){return this.formulario_datos_generales.get('numero_telefono')};
  get emergencia_telefono(){return this.formulario_datos_generales.get('emergencia_telefono')};

  
  //obtener los campos del formGroup: formulario_antecedentes_familiares
  get diabetes(){return this.formulario_antecedentes_familiares.get('diabetes')};
  get observacion_diabetes(){return this.formulario_antecedentes_familiares.get('observacion_diabetes')};
  get tb_pulmonar(){return this.formulario_antecedentes_familiares.get('tb_pulmonar')};
  get observacion_tb_pulmonar(){return this.formulario_antecedentes_familiares.get('observacion_tb_pulmonar')};
  get desnutricion(){return this.formulario_antecedentes_familiares.get('desnutricion')};
  get observacion_desnutricion(){return this.formulario_antecedentes_familiares.get('observacion_desnutricion')};
  get tipo_desnutricion(){return this.formulario_antecedentes_familiares.get('tipo_desnutricion')};
  get enfermedades_mentales(){return this.formulario_antecedentes_familiares.get('enfermedades_mentales')};
  get observacion_enfermedades_mentales(){return this.formulario_antecedentes_familiares.get('observacion_enfermedades_mentales')};
  get tipo_enfermedad_mental(){return this.formulario_antecedentes_familiares.get('tipo_enfermedad_mental')};
  get convulsiones(){return this.formulario_antecedentes_familiares.get('convulsiones')};
  get observacion_convulsiones(){return this.formulario_antecedentes_familiares.get('observacion_convulsiones')};
  get alcoholismo_sustancias_psicoactivas(){return this.formulario_antecedentes_familiares.get('alcoholismo_sustancias_psicoactivas')};
  get observacion_alcoholismo_sustancias_psicoactivas(){return this.formulario_antecedentes_familiares.get('observacion_alcoholismo_sustancias_psicoactivas')};
  get alergias(){return this.formulario_antecedentes_familiares.get('alergias')};
  get observacion_alergias(){return this.formulario_antecedentes_familiares.get('observacion_alergias')};
  get tipo_alergia(){return this.formulario_antecedentes_familiares.get('tipo_alergia')};
  get cancer(){return this.formulario_antecedentes_familiares.get('cancer')};
  get observacion_cancer(){return this.formulario_antecedentes_familiares.get('observacion_cancer')};
  get tipo_cancer(){return this.formulario_antecedentes_familiares.get('tipo_cancer')};
  get hipertension_arterial(){return this.formulario_antecedentes_familiares.get('hipertension_arterial')};
  get observacion_hipertension_arterial(){return this.formulario_antecedentes_familiares.get('observacion_hipertension_arterial')};
  get otros(){return this.formulario_antecedentes_familiares.get('otros')};
  get observacion_otros(){return this.formulario_antecedentes_familiares.get('observacion_otros')};


  //obtener los campos del formGroup: formulario_antecedentes_personales
  get diabetes_ap(){return this.formulario_antecedentes_personales.get('diabetes')};
  get observacion_diabetes_ap(){return this.formulario_antecedentes_personales.get('observacion_diabetes')};
  get tb_pulmonar_ap(){return this.formulario_antecedentes_personales.get('tb_pulmonar')};
  get observacion_tb_pulmonar_ap(){return this.formulario_antecedentes_personales.get('observacion_tb_pulmonar')};
  get its(){return this.formulario_antecedentes_personales.get('its')};
  get observacion_its(){return this.formulario_antecedentes_personales.get('observacion_its')};
  get desnutricion_ap(){return this.formulario_antecedentes_personales.get('desnutricion')};
  get observacion_desnutricion_ap(){return this.formulario_antecedentes_personales.get('observacion_desnutricion')};
  get tipo_desnutricion_ap(){return this.formulario_antecedentes_personales.get('tipo_desnutricion')};
  get enfermedades_mentales_ap(){return this.formulario_antecedentes_personales.get('enfermedades_mentales')};
  get observacion_enfermedades_mentales_ap(){return this.formulario_antecedentes_personales.get('observacion_enfermedades_mentales')};
  get tipo_enfermedad_mental_ap(){return this.formulario_antecedentes_personales.get('tipo_enfermedad_mental')};
  get convulsiones_ap(){return this.formulario_antecedentes_personales.get('convulsiones')};
  get observacion_convulsiones_ap(){return this.formulario_antecedentes_personales.get('observacion_convulsiones')};
  get alergias_ap(){return this.formulario_antecedentes_personales.get('alergias')};
  get observacion_alergias_ap(){return this.formulario_antecedentes_personales.get('observacion_alergias')};
  get tipo_alergia_ap(){return this.formulario_antecedentes_personales.get('tipo_alergia')};
  get cancer_ap(){return this.formulario_antecedentes_personales.get('cancer')};
  get observacion_cancer_ap(){return this.formulario_antecedentes_personales.get('observacion_cancer')};
  get tipo_cancer_ap(){return this.formulario_antecedentes_personales.get('tipo_cancer')};
  get hospitalarias_quirurgicas(){return this.formulario_antecedentes_personales.get('hospitalarias_quirurgicas')};
  get fecha_antecedente_hospitalario(){return this.formulario_antecedentes_personales.get('fecha_antecedente_hospitalario')};
  get tratamiento(){return this.formulario_antecedentes_personales.get('tratamiento')};
  get diagnostico(){return this.formulario_antecedentes_personales.get('diagnostico')};
  get tiempo_hospitalizacion(){return this.formulario_antecedentes_personales.get('tiempo_hospitalizacion')};
  get traumaticos(){return this.formulario_antecedentes_personales.get('traumaticos')};
  get observacion_traumaticos(){return this.formulario_antecedentes_personales.get('observacion_traumaticos')};
  get otros_ap(){return this.formulario_antecedentes_personales.get('otros')};
  get observacion_otros_ap(){return this.formulario_antecedentes_personales.get('observacion_otros')};

  //obtener los campos del formGroup: formulario_habito_toxicologico_personal
  get alcohol(){return this.formulario_habito_toxicologico_personal.get('alcohol')};
  get observacion_alcohol(){return this.formulario_habito_toxicologico_personal.get('observacion_alcohol')};
  get tabaquismo(){return this.formulario_habito_toxicologico_personal.get('tabaquismo')};
  get observacion_tabaquismo(){return this.formulario_habito_toxicologico_personal.get('observacion_tabaquismo')};
  get marihuana(){return this.formulario_habito_toxicologico_personal.get('marihuana')};
  get observacion_marihuana(){return this.formulario_habito_toxicologico_personal.get('observacion_marihuana')};
  get cocaina(){return this.formulario_habito_toxicologico_personal.get('cocaina')};
  get observacion_cocaina(){return this.formulario_habito_toxicologico_personal.get('observacion_cocaina')};
  get otros_ht(){return this.formulario_habito_toxicologico_personal.get('otros')};
  get observacion_otros_ht(){return this.formulario_habito_toxicologico_personal.get('observacion_otros')};


  //obtener los campos del formGroup: formulario_actividad_sexual
  get actividad_sexuall(){return this.formulario_actividad_sexual.get('actividad_sexual')};
  get edad_inicio_sexual(){return this.formulario_actividad_sexual.get('edad_inicio_sexual')};
  get numero_parejas_sexuales(){return this.formulario_actividad_sexual.get('numero_parejas_sexuales')};
  get practicas_sexuales_riesgo(){return this.formulario_actividad_sexual.get('practicas_sexuales_riesgo')};


  //obtener los campos del formGroup: formulario_antecedente_ginecologico
  get edad_inicio_menstruacion(){return this.formulario_antecedente_ginecologico.get('edad_inicio_menstruacion')};
  get fum(){return this.formulario_antecedente_ginecologico.get('fum')};
  get citologia(){return this.formulario_antecedente_ginecologico.get('citologia')};
  get fecha_citologia(){return this.formulario_antecedente_ginecologico.get('fecha_citologia')};
  get resultado_citologia(){return this.formulario_antecedente_ginecologico.get('resultado_citologia')};
  get duracion_ciclo_menstrual(){return this.formulario_antecedente_ginecologico.get('duracion_ciclo_menstrual')};
  get periocidad_ciclo_menstrual(){return this.formulario_antecedente_ginecologico.get('periocidad_ciclo_menstrual')};
  get caracteristicas_ciclo_menstrual(){return this.formulario_antecedente_ginecologico.get('caracteristicas_ciclo_menstrual')};


  //obtener los campos del formGroup: formulario_planifacion_familiar
  get planificacion_familiarr(){return this.formulario_planificacion_familiar.get('planificacion_familiar')};
  get metodo_planificacion(){return this.formulario_planificacion_familiar.get('metodo_planificacion')};
  get observacion_planificacion(){return this.formulario_planificacion_familiar.get('observacion_planificacion')};

  //obtener los campos del formGroup: formulario_antecedente_obstetrico
  get partos(){return this.formulario_antecedente_obstetrico.get('partos')};
  get abortos(){return this.formulario_antecedente_obstetrico.get('abortos')};
  get cesarias(){return this.formulario_antecedente_obstetrico.get('cesarias')};
  get hijos_vivos(){return this.formulario_antecedente_obstetrico.get('hijos_vivos')};
  get hijos_muertos(){return this.formulario_antecedente_obstetrico.get('hijos_muertos')};
  get fecha_termino_ult_embarazo(){return this.formulario_antecedente_obstetrico.get('fecha_termino_ult_embarazo')};
  get descripcion_termino_ult_embarazo(){return this.formulario_antecedente_obstetrico.get('descripcion_termino_ult_embarazo')};
  get observaciones(){return this.formulario_antecedente_obstetrico.get('observaciones')};

  

}
