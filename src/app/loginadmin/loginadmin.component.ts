import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from "../app.component";
import { LoginadminService } from '../services/loginadmin.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { UsuarioAdminUnicoService } from '../validations/usuario-admin-unico.directive';
import { Administrador } from '../interfaces/administrador';
import { LoginService } from '../services/login.service';
import { Login } from '../interfaces/login';
import { ThemeService } from 'ng2-charts';


export interface select {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit {

  esconderClave: boolean ;
  esconderConfirmacionClave : boolean;

  loginadmin_form = new FormGroup({

    usuario: new FormControl('', {
      validators: [Validators.required, Validators.minLength(4)],
      asyncValidators: [this.usuarioAdminUnicoService.validate.bind(this.usuarioAdminUnicoService)]
    }),

    contrasenia: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
    contraseniaC: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
    nombre: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(30)]),
    identidad: new FormControl('', [Validators.required, Validators.minLength(13), Validators.maxLength(13), Validators.pattern('[0-9]*')]),

  });


  getErrorMessage() {
    return this.loginadmin_form.get('usuario').hasError('required') ? 'You must enter a value' :
      this.loginadmin_form.get('usuario').hasError('usuario') ? 'Not a valid usuario' : '';
  }

  administrador: Administrador = {
    usuario: null,
    password: null,
    nombre_completo: null,
    identidad: null
  };

  id: any;
  editing: boolean = false;
  admins: Administrador[];
  constructor(private activatedRoute: ActivatedRoute, private router: Router, activar: AppComponent,
    private login_adminservice: LoginadminService, private mensaje: MatSnackBar,
    public dialogo: MatDialog,
    private usuarioAdminUnicoService: UsuarioAdminUnicoService) {
    activar.esconder();
    this.getdato();
    this.id = this.activatedRoute.snapshot.params['id'];

    if (this.id) {

      this.editing = true;

      this.login_adminservice.obtenerAdministrador(this.id).subscribe((data: any) => {

        this.administrador = data;

        //establesco el valor al los formcontrol para que se visualizen en los respectivos inputs
        this.usuario.setValue(this.administrador.usuario);
        // this.contrasenia.setValue(this.administrador.password);
        // this.contraseniaC.setValue(this.administrador.password);
        this.nombre.setValue(this.administrador.nombre_completo);
        this.identidad.setValue(this.administrador.identidad);

        this.login_adminservice.idActualizar = this.administrador.id_administrador;

      }, (error) => {
        console.log(error);
      });

    } else {

      this.editing = false;

    }
  }//fin del constructor

  getdato() {

    this.login_adminservice.obtenerAdministradores().subscribe((data: Administrador[]) => {

      this.admins = data;

    }, (error) => {

      console.log(error);
      alert('Ocurrio un error');
    });

  }

  showError(message: string) {
    const config = new MatSnackBarConfig();
    config.panelClass = ['background-red'];
    config.duration = 2000;
    this.mensaje.open(message, null, config);
  }



  ngOnInit() {
    this.getdato();
  }



  onKeydown(event) {

    if (event.key === "Enter") {
      this.esconderClave = true;
      this.esconderConfirmacionClave = true;
      this.llamarDialogo();
    }
  }


  llamarDialogo(){

    if (this.loginadmin_form.valid) {


      if (this.contraseniaC.value == this.contrasenia.value) {

        const dialogRef = this.dialogo.open(DialogoVerificar, {
          disableClose: true,
          panelClass: 'verificar',
          data: { id: this.id, editando: this.editing, formulario: this.loginadmin_form }

        });

      } else {

        this.showError('La contraseña no coincide');


      }

    }

  }
  comprobarDatos() {

    this.llamarDialogo();
    
  }//fin del boton

  get usuario() { return this.loginadmin_form.get('usuario') };
  get contrasenia() { return this.loginadmin_form.get('contrasenia') };
  get contraseniaC() { return this.loginadmin_form.get('contraseniaC') };
  get nombre() { return this.loginadmin_form.get('nombre') };
  get identidad() { return this.loginadmin_form.get('identidad') };

}


//dialogo
@Component({
  selector: 'dialogoVerificar',
  templateUrl: 'dialogoVerificar.html',
})

export class DialogoVerificar implements OnDestroy {

  esconderClave: boolean;

  formulario_verificar_clave = new FormGroup({

    clave: new FormControl('', [Validators.required]),

  });

  usuario: Login = {
    cuenta: null,
    password: null,

  }

  administrador: Administrador = {
    id_administrador: null,
    usuario: null,
    password: null,
    nombre_completo: null,
    identidad: null
  };

  administradores: Administrador[];

  constructor(public dialogRef: MatDialogRef<DialogoVerificar>,
    private loginAdminService: LoginadminService,
    private loginService: LoginService,
    private mensaje: MatSnackBar,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any) {


  }


  //EVENTO CUANDO SE DA ENTER
  onKeydown(event) {

    if (event.key === "Enter") {
      this.esconderClave = true;
      this.verificar();
    }

  }

  salir() {
    this.dialogRef.close();
  }

  getAdministradores() {
    this.loginAdminService.obtenerAdministradores().subscribe((data: any[]) => {
      this.administradores = data;
    })
  }

  guardar() {

    this.verificar();

  }

  verificar() {


    if (this.formulario_verificar_clave.valid) {

      this.usuario.cuenta = this.loginService.datosUsuario.cuenta;
      this.usuario.password = this.clave.value;

      this.loginService.verificarClave(this.usuario).subscribe((data: any) => {

        if (data.codigoError == 0) {

          if (this.data.editando) {



            // this.disabledloginadmin = true;

            // this.administrador.password = this.data.formulario.get('contraseniaC').value;
            this.administrador.id_administrador = this.data.id;
            this.administrador.usuario = this.data.formulario.get('usuario').value;
            // this.administrador.password = this.contraseniaC.value;
            this.administrador.nombre_completo = this.data.formulario.get('nombre').value;
            this.administrador.identidad = this.data.formulario.get('identidad').value;

            this.loginAdminService.actualizarAdministrador(this.administrador).subscribe((data) => {
              console.log(data);
              this.router.navigate(['/principal/veradministradores']);
              this.getAdministradores();
              this.showError('Administrador actualizado correctamente');

            }, (error) => {
              console.log(error);
              alert('se chorrio');
            });



          } else {

            this.administrador.password = this.data.formulario.get('contraseniaC').value;

            if (this.administrador.password == this.data.formulario.get('contrasenia').value) {

              this.administrador.usuario = this.data.formulario.get('usuario').value;
              this.administrador.password = this.data.formulario.get('contrasenia').value;
              this.administrador.nombre_completo = this.data.formulario.get('nombre').value;
              this.administrador.identidad = this.data.formulario.get('identidad').value;

              if (this.data.formulario.valid) {

                // this.disabledloginadmin = true;

                this.loginAdminService.guardarAdministrador(this.administrador).subscribe((data) => {

                  this.getAdministradores();

                  this.router.navigate(['/principal/veradministradores']);

                  this.showError('Administrador creado con exito');

                }, (error) => {

                  console.log(error);

                });

              } else {

                this.showError('Ingrese los datos correctamente');
              }

            } else {

              this.showError('La contraseña no coincide');

            }
          }

          this.salir();

        } else {

          this.showError(data.msg);

        }

      }, (error) => {

        console.log(error);

      });


    }

  }


  showError(message: string) {
    const config = new MatSnackBarConfig();
    config.panelClass = ['background-red'];
    config.duration = 2000;
    this.mensaje.open(message, null, config);
  }

  ngOnDestroy(): void { }

  get clave() { return this.formulario_verificar_clave.get('clave') };

} 