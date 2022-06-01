import { Row, Col } from 'antd';
import styles from './Footer.module.scss';

const Footer = () => (
  <footer>
    <Row className={styles['footer-container']}>
      <Col
        data-testid="footer-main-links"
        span={6}
        className={styles['main-links-container']}
      >
        <p className={styles['main-links']}>
          <a href="#">Encontre uma loja da nike</a>
        </p>
        <p className={styles['main-links']}>
          <a href="#">Cadastre-se para receber novidades</a>
        </p>
        <p className={styles['main-links']}>
          <a href="#">Mapa do site</a>
        </p>
      </Col>
      <Col
        data-testid="footer-caption-links"
        span={6}
        className={styles['caption-links-container']}
      >
        <h2>Ajuda</h2>
        <p className={styles['caption-link']}>
          <a href="#">Dúvidas Gerais</a>
        </p>
        <p className={styles['caption-link']}>
          <a href="#">Encontre seu Tamanho</a>
        </p>
        <p className={styles['caption-link']}>
          <a href="#">Entregas</a>
        </p>
        <p className={styles['caption-link']}>
          <a href="#">Pedidos</a>
        </p>
        <p className={styles['caption-link']}>
          <a href="#">Trocas e Devoluções</a>
        </p>
        <p className={styles['caption-link']}>
          <a href="#">Editar consentimento</a>
        </p>
        <p className={styles['caption-link']}>
          <a href="#">Preferências de Cookie</a>
        </p>
        <p className={styles['caption-link']}>
          <a href="#">Pagamentos</a>
        </p>
        <p className={styles['caption-link']}>
          <a href="#">Produtos</a>
        </p>
        <p className={styles['caption-link']}>
          <a href="#">Corporativo</a>
        </p>
        <p className={styles['caption-link']}>
          <a href="#">Fale Conosco</a>
        </p>
      </Col>
      <Col
        data-testid="footer-about-nike-links"
        span={6}
        className={styles['about-nike']}
      >
        <h2>Sobre a nike</h2>
        <p className={styles['caption-link']}>
          <a href="#">Feito para Jogar</a>
        </p>
        <p className={styles['caption-link']}>
          <a href="#">Sustentabilidade</a>
        </p>
      </Col>
      <Col span={6} className={styles['social-payment']}>
        <h2>Redes sociais</h2>
        <img
          data-testid="social-media"
          src="/assets/logo_redes_sociais_facebook.svg"
          alt="facebook logo"
        />
        <img
          data-testid="social-media"
          src="/assets/logo_redes_sociais_instagram.svg"
          alt="instagram logo"
        />
        <img
          data-testid="social-media"
          src="/assets/logo_redes_sociais_youtube.svg"
          alt="youtube logo"
        />

        <h2>Formas de pagamento</h2>
        <img
          data-testid="payment-option"
          src="/assets/pgto_Mastercard.svg"
          alt="visa logo"
        />
        <img
          data-testid="payment-option"
          src="/assets/pgto_Visa.svg"
          alt="visa logo"
        />
        <img
          data-testid="payment-option"
          src="/assets/pgto_Amex.svg"
          alt="amex logo"
        />
        <img
          data-testid="payment-option"
          src="/assets/pgto_Elo.svg"
          alt="elo logo"
        />
        <img
          data-testid="payment-option"
          src="/assets/pgto_Hipercard.svg"
          alt="hipercard logo"
        />
        <img
          data-testid="payment-option"
          src="/assets/pgto_Discover.svg"
          alt="discover logo"
        />
        <img
          data-testid="payment-option"
          src="/assets/pgto_Boleto.svg"
          alt="boleto logo"
        />
      </Col>
    </Row>
    <Row className={styles['copyright-container']}>
      <Col span={12}>
        <ul className={styles['menu-copyright']}>
          <li>
            <a href="#">Brasil</a>
          </li>
          <li>
            <a href="#">Politica de privacidade</a>
          </li>
          <li>
            <a href="#">Termos de uso</a>
          </li>
        </ul>
      </Col>
      <Col className={styles['copyright-text-container']} span={12}>
        <span className={styles['copyright-text']}>
          © 2021 Nike. Todos os direitos reservados. Fisia Comércio de Produtos
          Esportivos Ltda - CNPJ: 59.546.515/0016-10 Rua José Semião Rodrigues
          Agostinho, 1370 - Galpão Unidade 17 - Nível 0, 1 e 2 - CEP 06833-300 -
          Embu das Artes/SP.
        </span>
      </Col>
    </Row>
  </footer>
);

export default Footer;
