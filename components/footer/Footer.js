import { Row, Col } from 'antd';
import styles from './Footer.module.scss'

const Footer = () => (
      <Row className={styles['footer-container']}>
        <Col span={6} className={styles['main-links-container']}>
            <p className={styles['main-links']}><a href="#">Encontre uma loja da nike</a></p>
            <p className={styles['main-links']}><a href="#">Cadastre-se para receber novidades</a></p>
            <p className={styles['main-links']}><a href="#">Mapa do site</a></p>
        </Col>
        <Col span={6} className={styles['caption-links-container']}>
            <h2>Ajuda</h2>
            <p className={styles['caption-link']}><a href="#">Dúvidas Gerais</a></p>
            <p className={styles['caption-link']}><a href="#">Encontre seu Tamanho</a></p>
            <p className={styles['caption-link']}><a href="#">Entregas</a></p>
            <p className={styles['caption-link']}><a href="#">Pedidos</a></p>
            <p className={styles['caption-link']}><a href="#">Trocas e Devoluções</a></p>
            <p className={styles['caption-link']}><a href="#">Editar consentimento</a></p>
            <p className={styles['caption-link']}><a href="#">Preferências de Cookie</a></p>
            <p className={styles['caption-link']}><a href="#">Pagamentos</a></p>
            <p className={styles['caption-link']}><a href="#">Produtos</a></p>
            <p className={styles['caption-link']}><a href="#">Corporativo</a></p>
            <p className={styles['caption-link']}><a href="#">Fale Conosco</a></p>
        </Col>
        <Col span={6} className={styles['about-nike']}>
            <h2>Sobre a nike</h2>
            <p className={styles['caption-link']}><a href="#">Feito para Jogar</a></p>
            <p className={styles['caption-link']}><a href="#">Sustentabilidade</a></p>
        </Col>
        <Col span={6} className={styles['social-payment']}>
            <h2>Redes sociais</h2>
            <img src="/assets/logo_redes_sociais_facebook.svg" />
            <img src="/assets/logo_redes_sociais_instagram.svg" />
            <img src="/assets/logo_redes_sociais_youtube.svg" />

            <h2>Formas de pagamento</h2>
            <img src="/assets/pgto_Mastercard.svg"></img>
            <img src="/assets/pgto_Visa.svg"></img>
            <img src="/assets/pgto_Amex.svg"></img>
            <img src="/assets/pgto_Elo.svg"></img>
            <img src="/assets/pgto_Hipercard.svg"></img>
            <img src="/assets/pgto_Discover.svg"></img>
            <img src="/assets/pgto_Boleto.svg"></img>
        </Col>
      </Row>
);

export default Footer;
