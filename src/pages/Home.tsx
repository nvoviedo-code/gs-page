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
  {title: 'Spa y Estética', subtitle: '✼ Masajes Relajantes ✼ Fisioterapia Postoperatoria Estética ✼ ...', img: 'assets/img/6168337.jpg', text: 'Tratamiento especializado para la recuperación de lesiones musculares y articulares.'},
  {title: 'Neuro-Rehabilitación', subtitle: '✼ .. ✼ ...', img: 'assets/img/15880.jpg', text: 'Este tipo de terapia se centra en ayudar a las personas a mejorar su movimiento, equilibrio, amplitud de movimiento, fuerza, coordinación y postura. También proporciona educación y formación para ayudar a las personas a comprender mejor su enfermedad y adaptarse a su nueva normalidad.'},
  {title: 'Rehabilitación y Corrección Postural', subtitle: '✼ .. ✼ ...', img: 'assets/img/11198.jpg', text: 'Tratamiento enfocado en la corrección de problemas posturales y prevención de lesiones musculares.'}
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
              message={new IonicSafeString(`<img src="assets/icons/location-outline.svg" width="22px" height="22px"> Calandria 548. Torre 6 Dpto 9. Córdoba, Argentina.<br>
                <br><img src="assets/icons/logo-whatsapp.svg" width="20px" height="20px"> (+54) 351-3046800.`)}
              // <ion-icon name="logo-instagram"></ion-icon>""
              // `&lt;a aria-label=&quot;Chat on WhatsApp&quot; href=&quot;https://wa.me/549351046800&quot;&gt;
              // &lt;img alt=&quot;Chat on WhatsApp&quot; src=&quot;assets/icons/WhatsAppButtonGreenLarge.svg&quot; style={{ width: &quot;90%&quot; }}/&gt;
              // &lt;/a&gt;`
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
        <IonToolbar className='cardconteudo'>
          <IonTitle color={'light'}>Servicios Ofrecidos</IonTitle>
        </IonToolbar>
        <IonGrid>
          <IonRow>
          {card_info_list.map((card_info) => (
            <IonCol>
              <IonCard className="cardconteudo">
                <IonCardHeader>
                  <IonCardTitle color={'light'}>{card_info.title}</IonCardTitle>
                  <IonCardSubtitle>{card_info.subtitle}</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={card_info.img} alt="neuro" style={{ width: '50%' }} />
                  </div>
                  <IonText class='ion-text-wrap'>
                    <h2>{card_info.text}</h2>
                  </IonText>
                  <IonButton>+ Info</IonButton>
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
