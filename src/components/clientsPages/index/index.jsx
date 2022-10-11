// import gif from '../images/gifHome.gif';
import {Image} from '@shopify/hydrogen';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const ladingPage = () => {
  return (
    <>
      <div className="banner">
        <div className="background-image-banner">
          <div className="text-banner">
            <h1>Ritualiza</h1>
            <h6>Seu ritual de skincare personalizado</h6>
            <p>
              Você nos conta como é a sua pele, hábitos e objetivos. Nós fazemos
              a fórmula específica pra você!
            </p>
            <button className="btn">Responda o Quiz</button>
          </div>
          <div className="carousel-div">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <Image
                    src="https://static.wixstatic.com/media/3b7294_950acdbdd8324c18bb63086813f86c7b~mv2.jpg/v1/fill/w_492,h_392,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3b7294_950acdbdd8324c18bb63086813f86c7b~mv2.jpg"
                    className="d-block"
                    alt="..."
                    width={400}
                    height={400}
                  />
                </div>
                <div className="carousel-item">
                  <Image
                    src="https://static.wixstatic.com/media/3b7294_2ef10b70ac5d47faa7c455544695819f~mv2.jpg/v1/fill/w_492,h_392,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3b7294_2ef10b70ac5d47faa7c455544695819f~mv2.jpg"
                    className="d-block"
                    alt="..."
                    width={400}
                    height={400}
                  />
                </div>
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className="ritual">
        <div className="ritual-title">
          <h4>COMO CRIAR SEU RITUAL</h4>
        </div>
        <div className="steps">
          <div className="card-steps">
            <Image
              src="https://static.wixstatic.com/media/11062b_d946d8aad50f410b960b0e4d01e9ab5e~mv2.jpeg/v1/fill/w_247,h_162,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Amigas%20femininas.jpeg"
              alt=""
              width={400}
              height={400}
            />
            <h5>1- Sobre você e sua pele</h5>
            <p>
              Você preenche o quiz da pele. Nele você nos conta um pouco sobre
              as características da sua pele, seus hábitos e objetivos de
              skincare.
            </p>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
          <div className="card-steps">
            <Image
              src="https://static.wixstatic.com/media/11062b_c094368592194853975b6a9305c5add0~mv2.jpg/v1/fill/w_271,h_151,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/homeopatia.jpg"
              alt=""
              width={400}
              height={400}
            />
            <h5>2- Adquirindo os produtos</h5>
            <p>
              Depois de responder o quiz, você terá acesso às informações sobre
              os ingredientes naturais de alta performance que farão parte do
              seu ritual. Recomendamos 4 produtos para uma rotina minimalista.
              Adicione ao carrinho as suas escolhas.
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
          <div className="card-steps">
            <Image
              src="https://static.wixstatic.com/media/11062b_eaa40b14d9dd4799933c1f366d25a6fc~mv2.jpg/v1/fill/w_271,h_151,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Clube%20de%20assinatura.jpg"
              alt=""
              width={400}
              height={400}
            />
            <h5>3- Ritualizando</h5>
            <p>
              Pode relaxar, que agora é com a gente! Em até 7 dias seus produtos
              serão preparados e enviados fresquinhos pra você. Seu kit
              Ritualiza chegará na porta de casa e você poderá começar seu
              ritual diário de cuidado com a pele.
            </p>
          </div>
        </div>
        <button className="btn">Responda o Quiz</button>
      </section>
      <section className="base-catalog">
        <Image
          alt=""
          id="background-image-catalog"
          src="https://static.wixstatic.com/media/11062b_e55321c53b02478b9bafa28958160488f000.jpg/v1/fill/w_1718,h_553,al_r,q_85,usm_0.33_1.00_0.00,enc_auto/11062b_e55321c53b02478b9bafa28958160488f000.jpg"
          width={400}
          height={400}
        />
        <span className="base-catalog-infos">
          minimalista & alta performance & sem desperdício
        </span>
        <div className="base-catalog-itens"></div>
      </section>
      <section className="about-products">
        <div className="about-container">
          <h2>NOSSAS ESCOLHAS</h2>
          <div className="about-quality">
            <Image
              src="https://static.wixstatic.com/media/3b7294_ace8bb2dd688452986e85c4c34690a9f~mv2.png/v1/fill/w_107,h_107,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/INGREDIENTES%20NATURAIS.png"
              alt=""
              width={400}
              height={400}
            />
            <Image
              src="https://static.wixstatic.com/media/3b7294_d6cc68ac699949f3b9d245468ef0c7ea~mv2.png/v1/fill/w_177,h_107,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/SEM%20PARABENOS.png"
              alt=""
              width={400}
              height={400}
            />
            <Image
              src="https://static.wixstatic.com/media/3b7294_ee0535efeec34f1297d664091b7ca874~mv2.png/v1/fill/w_146,h_107,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/BELEZA%20LIMPA.png"
              alt=""
              width={400}
              height={400}
            />
            <Image
              src="https://static.wixstatic.com/media/3b7294_f66ab1c507834eeead5b69cb5064cb4e~mv2.png/v1/fill/w_122,h_107,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/PERSONALIZADO.png"
              alt=""
              width={400}
              height={400}
            />
            <Image
              src="https://static.wixstatic.com/media/3b7294_1e90b6875a2446fda46aed025196d458~mv2.png/v1/fill/w_136,h_107,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/VEGANO.png"
              alt=""
              width={400}
              height={400}
            />
          </div>
          <div className="about-nature-responsabilty">
            <Image
              src="https://static.wixstatic.com/media/3b7294_f0b4c39b7a0a41299c1c026396a8e889~mv2.gif"
              alt=""
              width={400}
              height={400}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              fill="currentColor"
              className="bi bi-recycle"
              viewBox="0 0 16 16"
              style={{color: '#9d6147'}}
            >
              <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242-2.532-4.431zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24l2.552-4.467zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.498.498 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244l-1.716-3.004z" />
            </svg>
            <p>
              FÓRMULAS BIODEGRADÁVEIS EMBALAGENS DE VIDRO, REUTILIZÁVEL E
              RECICLÁVEL. *Não descarte sua embalagem! Em breve novidades.
            </p>
          </div>
          <button className="btn">Responda o Quiz</button>
        </div>
      </section>
      <section className="section-banner-infos">
        <div className="banner-infos">
          <h4>Cuidando da sua pele e do planeta !</h4>
          <div className="steps-for-ritual">
            <Image
              src="https://static.wixstatic.com/media/3b7294_bd939f7a13d7465aa12fe5472febd945~mv2.jpg/v1/fill/w_359,h_239,fp_0.50_0.50,q_90,enc_auto/3b7294_bd939f7a13d7465aa12fe5472febd945~mv2.webp"
              alt=""
              width={400}
              height={400}
            />
            <a href="">
              RITUAL MINIMALISTA: OS 4 PASSOS DE SKINCARE PARA A MELHOR PELE DA
              SUA VIDA!
            </a>
          </div>
          <a className="btn btn-outline-dark" href="">
            Saber Mais
          </a>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-contact">
            <Image
              src="https://static.wixstatic.com/media/3b7294_174b54fd22154589b0bdae2d96011b93~mv2.png/v1/fill/w_250,h_107,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/S%C3%8DMBOLO%202.png"
              alt=""
              width={400}
              height={400}
            />
            <h5>FALE COM A GENTE</h5>

            <a href="mailto:sac@ritualizacosmeticos.com.br">
              sac@ritualizacosmeticos.com.br
            </a>
            <span>Telefone: +55 (48) 99607-7930</span>
            <a
              className="footer-contact-whatsapp"
              href="https://wa.me/5548996077930?text=Olá, gostaria de saber mais sobre os produtos da Ritualiza!"
            >
              Whats App
            </a>
          </div>
          <div className="footer-social-media">
            <h5>Nossas Redes Socias</h5>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
            </div>
          </div>
          <div className="footer-address">
            <p>
              RITUALIZA COMERCIO DE COSMETICOS LTDA CNPJ: 43.652.071/0001-81
            </p>
            <p>
              Rua Luis Oscar da Carvalho, n 75, Trindade - Florianópolis - SC
            </p>
            <p>CEP: 88036-400</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ladingPage;
