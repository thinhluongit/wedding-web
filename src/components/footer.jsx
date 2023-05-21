import React from 'react';
import css from './footer.module.css'

const Footer = () => {
    return (
      <div className={css.containerFooter}>
        {/* <div className={css.footer}> */}
        <div className={css.leftFooter}></div>
        <div className={css.middleFooter}>
          <p>
            Địa chỉ: 168 Tỉnh lộ 882, ấp Phước Khánh, xã Phước Mỹ Trung, huyện
            Mỏ Cày Bắc, tỉnh Bến Tre
          </p>
          <p>Hotline:</p>
          <p>Hotline Tư vấn & CSKH: 0984374673 (Ms. Diễm)</p>
          <p>Email: aocuoidiembavat@gmail.com</p>
          <p>Facebook:</p>
          <p>Fanpage:</p>
        </div>
        <div className={css.rightFooter}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d347.09464837628394!2d106.27395645858653!3d10.186529134420589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a009e8431fd005%3A0x521ef8367b3f0b11!2z4bqibmggbcOgdSDDoW8gY8aw4bubaSBEaeG7hW0!5e0!3m2!1svi!2s!4v1684649567563!5m2!1svi!2s"
            className={css.map}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {/* </div> */}
      </div>
    );
}

export default Footer;