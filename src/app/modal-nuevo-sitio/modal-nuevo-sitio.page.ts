import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Plugins, CameraResultType } from '@capacitor/core';
import { ImgService } from '../services/img.service';

 
const { Camera } = Plugins;

@Component({
  selector: 'app-modal-nuevo-sitio',
  templateUrl: './modal-nuevo-sitio.page.html',
  styleUrls: ['./modal-nuevo-sitio.page.scss'],
})
export class ModalNuevoSitioPage implements OnInit {

  lat;
  lon;
  description;
  foto;
  preview;
 
 
  constructor(
    private modalCtrl : ModalController,
    public img: ImgService) { }

  ngOnInit() {
  }

  cerrarModal(){
    this.modalCtrl.dismiss();
  }

  async sacarFoto(){
    try {
      const profilePicture = await Camera.getPhoto({
      quality: 50,
      height: 400,
      width: 600,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      });
      this.foto = 'data:image/png;base64,' + profilePicture.base64String;
      this.preview = this.img.getImage(this.foto);
 
    } catch (error) {
      console.error(error);
    }
  }
 
 

}
