import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { HeaderComponent } from "./header/header.component";
import { FabMenuComponent } from "./fab-menu/fab-menu.component";

@NgModule ({
    declarations: [
        HeaderComponent,
        FabMenuComponent
    ],
    imports: [
        CommonModule,
        IonicModule,RouterModule    ],
    exports: [
        HeaderComponent,
        FabMenuComponent
    ]
})

export class ComponentsModule {}