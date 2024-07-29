import { IonButton, IonCard, IonCardContent, IonCardHeader, 
  IonCardSubtitle, IonCardTitle, IonContent, IonFooter, IonHeader, IonPage, IonRow, IonTitle, IonToolbar,
  IonGrid,
  IonCol,
  IonButtons,
  IonText,
  IonAlert,
  IonicSafeString} from '@ionic/react';
import './Home.css';

const card_info_list = [
  {title: 'Spa y Estética', subtitle: 'Masajes Relajantes ✼ Fisioterapia Postoperatoria Estética ✼ Drenaje Linfático ✼ Reflexología ✼', img: 'assets/img/6168337.jpg',
    text: 'El fisioterapeuta estético se encarga de recuperar la elasticidad y firmeza de los tejidos mediante técnicas terapéuticas que producen relajación de la musculatura, reducción de la fatiga muscular, regulación de la tonicidad de la musculatura y alivio del dolor, logrando además un impacto positivo en la salud en geneal y a nivel emocional.'},
  {title: 'Neuro-Rehabilitación', subtitle: 'Rehabilitación motriz ✼ ...', img: 'assets/img/15880.jpg', text: 'Este tipo de terapia se centra en ayudar a las personas a mejorar su movimiento, equilibrio, amplitud de movimiento, fuerza, coordinación y postura. También proporciona educación y formación para ayudar a las personas a comprender mejor su enfermedad y adaptarse a su nueva normalidad.'},
  {title: 'Rehabilitación y Corrección Postural', subtitle: 'Rehabilitación estructural ✼ ...', img: 'assets/img/11198.jpg', text: 'Tratamiento enfocado en la corrección de problemas posturales y prevención de lesiones musculares.'}
];

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='my-toolbar'>
          {/* <IonTitle color={'primary'} size='large'>
          </IonTitle> */}
          <IonButtons collapse={true} slot="end">
            <IonButton id='contact'>Contacto</IonButton>
            <IonAlert
              className='custom-alert'
              trigger="contact"
              header="Lic. Gabriela Soledad López"
              subHeader="Fisioterapeuta y Kinesióloga"
              message={new IonicSafeString(`<br><img src="assets/icons/logo-whatsapp-green.svg" width="28px" height="28px" margin="20px"/> (+54) 351-3046800 <a href="https://wa.me/549351046800">Chat on WhatsApp</a>
                <br><br><img src="assets/icons/location-outline-red.svg" width="30px" height="30px"> Calandria 548. Torre 6 Dpto 9. Córdoba, Argentina.<br>
                <br><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13624.11366267814!2d-64.2573771!3d-31.38578!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329fbf8860df51%3A0xf8986c40cae67dea!2sGabriela%20Soledad%20L%C3%B3pez!5e0!3m2!1ses!2sar!4v1722281244853!5m2!1ses!2sar" width="300px" height="225px" style="border:0; margin: 0 auto; display: block" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                `)}
              // <ion-icon name="logo-instagram"></ion-icon>""
              // <img alt="Chat on WhatsApp" src="assets/icons/WhatsAppButtonGreenLarge.svg" style={{ width: "90%" }}/>
              buttons={['Close']}
              ></IonAlert>
              <IonButton color={'warning'} fill='outline'>Turnos</IonButton>
          </IonButtons>
        </IonToolbar>
        {/* <img src="assets/img/logo.png" alt="logo" style={{ width: '100px' }}></img> */}
        <IonTitle color={'secondary'}>
        <span style={{ fontStyle: 'oblique', fontFamily: 'Lucida Handwriting, cursive', fontSize: '42px', display: 'flex', justifyContent: 'center', margin: '20px 0'}}>
          <b>Fisioterapia y Rehabilitación</b>
        </span>
        </IonTitle>
      </IonHeader>
      <IonContent fullscreen className='ion-padding'>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        </div>
        <IonTitle color={'tertiary'}><h3>Nuestros Servicios</h3></IonTitle>
        <IonGrid>
          <IonRow>
          {card_info_list.map((card_info) => (
            <IonCol>
              <IonCard className="cardconteudo">
                <IonCardHeader>
                  <IonCardTitle color={'tertiary'}>{card_info.title}</IonCardTitle>
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
