import { Component, OnInit, ViewChild } from '@angular/core';
import type { IonModal } from '@ionic/angular';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  pageTitle = 'recuperar';
  isNotHome = true;

  @ViewChild('modal', { static: true }) modal: IonModal;

  constructor(private animationCtrl: AnimationController) {}

  ngOnInit() {
    const enterAnimation = (baseEl: HTMLElement) => {
      const root = baseEl.shadowRoot;

      const backdropAnimation = this.animationCtrl
        .create()
        .addElement(root.querySelector('ion-backdrop'))
        .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

      const wrapperAnimation = this.animationCtrl
        .create()
        .addElement(root.querySelector('.modal-wrapper'))
        .keyframes([
          { offset: 0, opacity: '0', transform: 'scale(0)' },
          { offset: 1, opacity: '0.99', transform: 'scale(1)' },
        ]);

      return this.animationCtrl
        .create()
        .addElement(baseEl)
        .easing('ease-out')
        .duration(500)
        .addAnimation([backdropAnimation, wrapperAnimation]);
    };

    const leaveAnimation = (baseEl: HTMLElement) => {
      return enterAnimation(baseEl).direction('reverse');
    };

    this.modal.enterAnimation = enterAnimation;
    this.modal.leaveAnimation = leaveAnimation;
  }

  closeModal() {
    this.modal.dismiss();
  }

}
