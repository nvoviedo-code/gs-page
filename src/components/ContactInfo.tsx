import { IonAlert, IonicSafeString } from "@ionic/react";

const contactInfo = <IonAlert
  className='custom-alert'
  trigger="contact"
  header="Lic. Gabriela Soledad López"
  subHeader="Fisioterapeuta y Kinesióloga"
  message={new IonicSafeString(`<br><img src="assets/icons/logo-whatsapp-green.svg" width="28px" height="28px" margin="20px"/> (+54) 351-3046800 <a href="https://wa.me/549351046800">Chat on WhatsApp</a>
                <br><br><img src="assets/icons/location-outline-red.svg" width="30px" height="30px"> Calandria 548. Torre 6 Dpto 9. Córdoba, Argentina.<br>
                <br><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13624.11366267814!2d-64.2573771!3d-31.38578!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329fbf8860df51%3A0xf8986c40cae67dea!2sGabriela%20Soledad%20L%C3%B3pez!5e0!3m2!1ses!2sar!4v1722281244853!5m2!1ses!2sar" width="300px" height="225px" style="border:0; margin: 0 auto; display: block" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                `)}
  buttons={['Close']}
></IonAlert>;

export default contactInfo; 