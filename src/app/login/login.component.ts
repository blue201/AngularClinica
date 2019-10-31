import { Component, OnInit, RootRenderer } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router, RouterModule } from '@angular/router';
import { Login } from '../interfaces/login';
import { AppComponent } from "../app.component";
import { Paciente } from "../interfaces/paciente";
import { PacienteComponent } from '../paciente/paciente.component';
import { FormularioService } from '../services/formulario.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { LoginAdmin } from '../interfaces/login_admin';
import { LoginadminService } from '../services/loginadmin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  
})



export class LoginComponent implements OnInit {
 hide = true;
 loading: boolean =false;
  //input
  scrap: Paciente = {
    id_paciente: null,
    numero_paciente: null,
    contrasenia: null,
    nombre_completo: null,
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
    pulso: null
  }
  scrap1: LoginAdmin = {  
    id :null,
    usuario_admin : null,
    contrasenia_admin : null,
    nombre_admin : null,
    identidad_admin : null,
    especialidad_admin : null,  
  }
//,Validators.pattern(/^[2][0-9]{10}$/)
  login_form = new FormGroup({
    cuenta: new FormControl('',[Validators.required]),
    clave: new FormControl('',[Validators.required]),
  });
  login: Login = {
    cuenta: null,
    clave: null
  };
  login_admin: LoginAdmin
  login_admins: LoginAdmin[];
  paciente: Paciente;
  pacientes: Paciente[];
  Formulario: FormularioService;
  pase: boolean=true;

  constructor(private LoginAdminService: LoginadminService,private loginService: LoginService,private router: Router,
     private activar: AppComponent,  Formulario: FormularioService, private mensaje: MatSnackBar){
   activar.esconder();

 this.LoginAdminService.getAdmin().subscribe((data: LoginAdmin[]) =>{
    this.login_admins = data;
    console.log(this.login_admins);
  }, (error: any)=>{
    console.log(error);
  }); 

   Formulario.get().subscribe((data: Paciente[])=>{
    this.pacientes = data;
    console.log(this.pacientes);
  }, (error)=>{
    console.log(error);
  }); 

  
  }


  
  ngOnInit() {
  
  }

  comprobarDatos(){
    this.loading=true;
    this.login.cuenta = this.login_form.get('cuenta').value;
    this.login.clave = this.login_form.get('clave').value;

//PACIENTES
    for (let index = 0; index < this.pacientes.length; index++) {
      if (this.pacientes[index].numero_cuenta == this.login.cuenta) {
        this.pase=false;
        this.paciente=this.pacientes[index];
      }
    }    

    if (this.pase == true) {
      this.loginService.guardarDatos(this.login).subscribe( (data) =>{
        console.log(data);   
        
        this.mensaje.open('Todo perron', '', {duration:2000});

         this.router.navigate(['/formulario']);
      }, (error) => {
        this.loading=false;
        console.log(error);
        this.mensaje.open('Usuario Incorrecto', '', {duration:2000});
      });
      
    }else{
      if (this.paciente.contrasenia==this.login.clave) {
        this.router.navigate(['/datoPaciente/'+this.paciente.id_paciente]);  
      }else{
        this.loading=false;
        this.mensaje.open('Contraseña incorrecta', '', {duration:2000});
      }      
    } 

   //ADMIINISTRADORES
    for (let indexx = 0; indexx < this.login_admins.length; indexx++) {
      if (this.login_admins[indexx].usuario_admin == this.login.cuenta) {        
        this.login_admin=this.login_admins[indexx];
      }
    }


   if (this.login_admin.contrasenia_admin  == this.login.clave) {
 console.log(this.login_admin.contrasenia_admin);console.log( this.login.cuenta);
        this.router.navigate(['/principal/']);
      }else{
        
 console.log(this.login_admin.contrasenia_admin);console.log( this.login.cuenta);
        this.loading=false;
        alert('Contraseña incorrecta')
      } 






  }



  get cuenta(){return this.login_form.get('cuenta')};
  get clave(){return this.login_form.get('clave')}; 

}