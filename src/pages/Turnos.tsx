import React from 'react';
import { IonButtons, IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonPage, IonDatetime, IonItem, IonLabel, IonTextarea, IonInput, IonIcon } from '@ionic/react';

import './Turnos.css';

const Turnos: React.FC<any> = ({isOpen, onClose}) => {
  const today = new Date().toISOString(); // Declare and initialize the 'today' variable

  const getAppointment = (): void => {
    const nombre = document.getElementById('nombre') as HTMLInputElement;
    const fecha = document.getElementById('fecha') as HTMLIonDatetimeElement;
    const selectedDate = fecha.value;
    const message = `Hola, me gustaría solicitar un turno para el ${selectedDate}. ¿Está disponible?`;
    const whatsappUrl = `https://wa.me/549351046800?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    console.log('Turno solicitado por ' + nombre.value + ' para el ' + selectedDate);
  }

  return (
    <IonModal isOpen={isOpen}>
      <IonHeader>
        <IonToolbar>
          <IonTitle color={'secondary'}>Turnos</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={onClose}>Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel>Nombre</IonLabel>
          <IonInput id='nombre'></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel>Fecha</IonLabel>
          <IonDatetime color='rose' id='fecha' presentation='date'></IonDatetime>
        </IonItem>
        <IonButton onClick={getAppointment}><IonIcon icon={'logo-whatsapp'}/>Solicitar Turno</IonButton>
      </IonContent>
    </IonModal>
  );
}

export default Turnos;