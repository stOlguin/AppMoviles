import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { User } from '../../app.model'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  pageTitle = 'Login';
  isNotHome = true;

  user: any = {
    username : '',
    password : ''
  }

  usuarios:User[] =[
    {id:1,correo:'ejemplo1@correo.cl',password:'1234'},
    {id:2,correo:'ejemplo2@correo.cl',password:'5678'}
  ]

  constructor(private toastCtrl: ToastController, private route : Router) { }

  ngOnInit() {
  }

  loguearse(){
    let usuarioEncontrado = false;

    for (const usuario of this.usuarios){
      if (this.user.username === usuario.correo && this.user.password === usuario.password){
        usuarioEncontrado = true;
        break;
      }
    }
    if (usuarioEncontrado) {
      this.presentToast('Bienvenido ' + this.user.username);
      this.route.navigate(['/']);
    }else {
      this.presentToast("Credenciales Incorrectas");
    }
  }

  async presentToast(message: string, duration?: number){
    const toast = await this.toastCtrl.create({
      message: message,
      duration: duration?duration:2500
    });
    toast.present();
  }

}
