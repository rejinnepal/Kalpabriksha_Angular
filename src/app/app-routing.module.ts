import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CbwcComponent } from './cbwc/cbwc.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:""
  },
  {
    component:RegisterComponent,
    path:"register"
  },
  {
    component:NavBarComponent,
    path:"nav-bar"
  },
  {
    component: GalleryComponent,
    path:"gallery"
  },
  {component: FaqsComponent,
    path:"faqs"
  },
  {component: ContactComponent,
    path:"contact"
  },
  {component: AboutComponent,
  path:"about"
  },
  {component: CbwcComponent,
    path:"cbwc"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
