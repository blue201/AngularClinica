import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../interfaces/login';
import { FormularioService } from "../services/formulario.service";

@Injectable({
  providedIn: 'root'
})



export class LoginService {
  porMientras: string;//variable donde se guarda la contrase;a por si el usuario no registra la nueva
  datosUsuario: any ;
  idActualizar: number;


  API_ENDPOINT = 'http://127.0.0.1:8000/api/';
  headers = new HttpHeaders({
    'Content-Type':'application/json',
    // 'Authorization': "Bearer "+localStorage.getItem('token')
  });
  
  constructor(private httpClient :HttpClient, formularioService: FormularioService) {}
  idpaciente:any; //este es para recuperar el id y redireccionar 

  guardarDatos(login: Login){

    return this.httpClient.post(this.API_ENDPOINT + 'registrar', login, {headers: this.headers});

  }

  loguear(login: Login){

    return this.httpClient.post(this.API_ENDPOINT + 'loguear', login, {headers: this.headers});

  }

  actualizarDatos(login: Login){

    return this.httpClient.put(
      this.API_ENDPOINT+'datos_login/'+ login.cuenta, 
      login, 
      {headers: this.headers}
    );

  }

  obtenerUltimoId(){
    
    return this.httpClient.get(this.API_ENDPOINT + 'ultimoIdLogin');
    
  }


  // se verifica si el usuario existe introducciendo su numero de cuenta y contrasenia.
  obtenerUsuario(login: Login){
    
    return this.httpClient.post(this.API_ENDPOINT + 'obtenerUsuario', login, {headers: this.headers});
    
  }

  getCurrentUser(token: any){

    return this.httpClient.post(this.API_ENDPOINT + 'getCurrentUser', token , {headers: this.headers});
     

  }

  verificarClave(login : Login){

    return this.httpClient.post(this.API_ENDPOINT + 'verificarClave', login, {headers : this.headers});

  }



}
