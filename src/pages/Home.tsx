import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon
} from "@ionic/react";
import React from "react";
import { fingerPrint, basket, cart, listBox } from 'ionicons/icons';

import Menu from '../components/Menu/Menu';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Benu Ion-React</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        
        <Menu text="Login" page="/login">
          <IonIcon icon={ fingerPrint }></IonIcon>
        </Menu>
        <Menu text="Produk" page="/produk">
          <IonIcon icon={ basket }></IonIcon>
        </Menu>
        <Menu text="Keranjang" page="/keranjang">
          <IonIcon icon={ cart }></IonIcon>
        </Menu>
        <Menu text="Artikel" page="/artikel">
          <IonIcon icon={ listBox }></IonIcon>
        </Menu>

      </IonContent>
    </IonPage>
  );
};

export default Home;
