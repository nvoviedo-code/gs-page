import { IonButton, IonCard, IonCardContent, IonCardHeader, 
  IonCardSubtitle, IonCardTitle, IonContent, IonFooter, IonHeader, IonPage, IonRow, IonTitle, IonToolbar,
  IonGrid,
  IonCol,
  IonButtons,
  IonText} from '@ionic/react';
import './Home.css';
import PhotoPresenter from '../components/PhotoPresenter';
import Turnos from './Turnos';
import { useState } from 'react';
import contactInfo from '../components/ContactInfo';

const card_info_list = [
  {title: 'Spa y Estética', subtitle: 'Masajes Relajantes ✼ Fisioterapia Postoperatoria Estética ✼ Drenaje Linfático ✼ Reflexología ✼', img: 'assets/img/6168337.jpg',
    text: 'El fisioterapeuta estético se encarga de recuperar la elasticidad y firmeza de los tejidos mediante técnicas terapéuticas que producen relajación de la musculatura, reducción de la fatiga muscular, regulación de la tonicidad de la musculatura y alivio del dolor, logrando además un impacto positivo en la salud en geneal y a nivel emocional.'},
  {title: 'Neuro-Rehabilitación', subtitle: 'Rehabilitación motriz ✼ ...', img: 'assets/img/15880.jpg', text: 'Este tipo de terapia se centra en ayudar a las personas a mejorar su movimiento, equilibrio, amplitud de movimiento, fuerza, coordinación y postura. También proporciona educación y formación para ayudar a las personas a comprender mejor su enfermedad y adaptarse a su nueva normalidad.'},
  {title: 'Rehabilitación y Corrección Postural', subtitle: 'Rehabilitación estructural ✼ ...', img: 'assets/img/11198.jpg', text: 'Tratamiento enfocado en la corrección de problemas posturales y prevención de lesiones musculares.'}
];

const Home: React.FC = () => {

  const [showTurnosModal, setShowTurnosModal] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='my-toolbar'>
          <IonButtons collapse={true} slot="end">
            <IonButton id='contact'>Contacto</IonButton>
              {contactInfo}
            <IonButton color={'rose'} fill='outline' onClick={() => setShowTurnosModal(true) }>Turnos</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='ion-padding'>
      <PhotoPresenter/>
        <IonTitle color={'rose'} className='ion-padding'>
          <span style={{ fontStyle: 'oblique', fontFamily: 'Lucida Handwriting, cursive', fontSize: '42px', display: 'flex', justifyContent: 'center', margin: '20px 0'}}>
            <b>Fisioterapia y Rehabilitación</b>
          </span>
        </IonTitle>
        <IonTitle color={'tertiary'}></IonTitle>
        <IonGrid about='<h3>Nuestros Servicios</h3>'>
          <IonRow>
          {card_info_list.map((card_info) => (
            <IonCol>
              <IonCard className="cardconteudo">
                <IonCardHeader>
                  <IonCardTitle color={'primary'}>{card_info.title}</IonCardTitle>
                  <IonCardSubtitle><h6>{card_info.subtitle}</h6></IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={card_info.img} alt="neuro" style={{ width: '50%' }} />
                  </div>
                  <IonText class='ion-text-wrap'>
                    <h2>{card_info.text}</h2>
                  </IonText>
                  <IonButton fill='clear'>+ Info</IonButton>
                </IonCardContent>
              </IonCard>
              </IonCol>
            ))}
            </IonRow>
          </IonGrid>
          {showTurnosModal && <Turnos isOpen={showTurnosModal} onClose={() => setShowTurnosModal(false)}/>}
      </IonContent>
      <IonFooter slot='end' style={{ textAlign: 'right' }}>
        <span style={{ fontSize: '10px' }}>Iconos diseñados por
          <a href="https://www.freepik.es/vector-gratis/rehabilitacion-fisioterapia-personas-coleccion-iconos-planos_4027281.htm#query=rehabilitacion%20neurologica&position=7&from_view=keyword&track=ais_user&uuid=2b8131b4-f6fa-426e-a4cb-3bd45c2c3cbf">
            Imagen de macrovector</a> en Freepik
        </span>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
