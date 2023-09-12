import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FabMenuComponent } from 'src/app/components/fab-menu/fab-menu.component';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  pageTitle = 'home';
  isNotHome = false;
  loading : HTMLIonLoadingElement;

  constructor(private loadingCtrl: LoadingController, private route:Router, private navCtrl:NavController) {}

  ngOnInit(): void {
    this.cargarLoading('Cargando');
  }

  cargarLoading(message: string){
    this.presentLoading(message);
    setTimeout(() => {
      this.loading.dismiss();
    },2000);
  }

  async presentLoading(message: string) {
    this.loading = await this.loadingCtrl.create({
      message,
    });

    await this.loading.present();
  }

  goHome(){
    this.route.navigate(['/home']);
  }

  goAbout(){
    this.route.navigate(['/about']);
  }

}