import { useEffect, useState } from "react";

import {
  FaArrowRight,
  FaBars,
  FaTimes,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa";

import "./App.css";
import escritorioImg from "./assets/escritorio.jpg";
import logoAlmeida from "./assets/logo2.png";

const areas = [
  {
    number: "01",
    title: "Direito Civil",
    description:
      "Contratos, responsabilidade civil, obrigações, patrimônio e resolução de conflitos.",
  },
  {
    number: "02",
    title: "Direito Empresarial",
    description:
      "Assessoria jurídica para empresas, contratos comerciais e prevenção de riscos.",
  },
  {
    number: "03",
    title: "Direito Trabalhista",
    description:
      "Orientação jurídica em relações de trabalho para profissionais e empresas.",
  },
  {
    number: "04",
    title: "Direito Previdenciário",
    description:
      "Aposentadorias, benefícios, planejamento e questões previdenciárias.",
  },
  {
    number: "05",
    title: "Família e Sucessões",
    description:
      "Divórcio, guarda, inventário, sucessões e planejamento patrimonial familiar.",
  },
  {
    number: "06",
    title: "Direito do Consumidor",
    description:
      "Proteção dos direitos do consumidor e atuação estratégica em conflitos de consumo.",
  },
];

const artigos = [
  {
    categoria: "Direito Civil",
    data: "05 OUT 2026",
    titulo:
      "Contratos: cuidados importantes antes de assumir uma obrigação",
  },
  {
    categoria: "Direito Empresarial",
    data: "28 SET 2026",
    titulo:
      "Por que a prevenção jurídica pode reduzir riscos para uma empresa?",
  },
  {
    categoria: "Família e Sucessões",
    data: "17 SET 2026",
    titulo:
      "Planejamento sucessório: quando começar a organizar o patrimônio?",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  /* =====================================================
     ANIMAÇÕES AO ROLAR A PÁGINA
  ===================================================== */

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="site">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="header">
        <div className="container header-inner">

          <a href="#inicio" className="brand" onClick={closeMenu}>
          <img
          src={logoAlmeida}
          alt="Almeida Costa Advogados"
          className="brand-logo"
          />
          </a>

          <nav className={menuOpen ? "navigation open" : "navigation"}>
            <a href="#inicio" onClick={closeMenu}>
              Início
            </a>

            <a href="#escritorio" onClick={closeMenu}>
              O escritório
            </a>

            <a href="#atuacao" onClick={closeMenu}>
              Atuação
            </a>

            <a href="#equipe" onClick={closeMenu}>
              Equipe
            </a>

            <a href="#conteudos" onClick={closeMenu}>
              Conteúdos
            </a>

            <a href="#contato" onClick={closeMenu}>
              Contato
            </a>
          </nav>

          <a href="#contato" className="header-contact">
            Fale conosco
            <FaArrowRight />
          </a>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </header>

      <main>

        {/* =====================================================
            HERO / CAPA
        ===================================================== */}

        <section className="hero" id="inicio">

          <div className="hero-background" />
          <div className="hero-overlay" />

          <div className="container hero-content">

            <div className="hero-main hero-animate">

              <div className="hero-label">
                <span></span>
                ALMEIDA COSTA · ADVOGADOS
              </div>

              <h1>
                Segurança jurídica
                <br />
                para decisões
                <br />
                <em>importantes.</em>
              </h1>

              <p>
                Atuação estratégica e atendimento próximo para pessoas e
                empresas que precisam tomar decisões com mais clareza e
                segurança.
              </p>

              <div className="hero-actions">

                <a href="#atuacao" className="hero-primary">
                  Conheça nossa atuação
                  <FaArrowRight />
                </a>

                <a href="#contato" className="hero-secondary">
                  Fale conosco
                </a>

              </div>
            </div>

            <div className="hero-side">
              <span>ATUAÇÃO JURÍDICA</span>

              <p>
                Estratégias construídas de acordo com cada contexto e
                acompanhadas de perto.
              </p>

              <a href="#escritorio">
                Conheça o escritório
                <FaArrowRight />
              </a>
            </div>

          </div>

          <div className="hero-footer">
            <div className="container hero-footer-inner">
              <span>Direito Civil</span>
              <span>Direito Empresarial</span>
              <span>Direito Trabalhista</span>
              <span>Direito Previdenciário</span>
              <span>Família e Sucessões</span>
            </div>
          </div>

        </section>


        {/* =====================================================
            O ESCRITÓRIO
        ===================================================== */}

        <section className="about section" id="escritorio">

          <div className="container">

            <div className="about-top reveal reveal-up">

              <span className="section-index">
                01 — O ESCRITÓRIO
              </span>

              <div className="about-title">
                <h2>
                  Uma advocacia que começa
                  <br />
                  <em>pela escuta.</em>
                </h2>
              </div>

            </div>

            <div className="about-content">

              <div className="about-photo reveal reveal-left">

                <img
                  src={escritorioImg}
                  alt="Ambiente do escritório Almeida Costa Advogados"
                />

                <div className="about-photo-overlay"></div>

                <div className="about-photo-text">
                  <span>ALMEIDA COSTA</span>
                  <small>ADVOGADOS</small>
                </div>

              </div>

              <div className="about-text reveal reveal-right">

                <p className="about-lead">
                  Entender o contexto é tão importante quanto conhecer a lei.
                </p>

                <p>
                  Nosso trabalho parte de uma relação próxima com cada cliente.
                  Antes de propor caminhos, buscamos compreender o problema,
                  seus impactos e os objetivos envolvidos.
                </p>

                <p>
                  A partir disso, construímos estratégias jurídicas claras,
                  responsáveis e adequadas à realidade de cada situação.
                </p>

                <a href="#atuacao" className="underlined-link">
                  Conheça nossas áreas de atuação
                  <FaArrowRight />
                </a>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            ÁREAS DE ATUAÇÃO
        ===================================================== */}

        <section className="practice section" id="atuacao">

          <div className="container">

            <div className="practice-heading reveal reveal-up">

              <span className="section-index light">
                02 — ÁREAS DE ATUAÇÃO
              </span>

              <h2>
                Experiência aplicada
                <br />
                <em>a cada contexto.</em>
              </h2>

              <p>
                Análise técnica e visão estratégica para lidar com questões
                jurídicas de diferentes naturezas.
              </p>

            </div>

            <div className="practice-list">

              {areas.map((area, index) => (

                <a
                  href="#contato"
                  className="practice-row reveal reveal-up"
                  key={area.number}
                  style={{
                    "--delay": `${index * 90}ms`,
                  }}
                >

                  <span className="practice-number">
                    {area.number}
                  </span>

                  <h3>{area.title}</h3>

                  <p>{area.description}</p>

                  <div className="practice-arrow">
                    <FaArrowRight />
                  </div>

                </a>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            FORMA DE ATUAÇÃO
        ===================================================== */}

        <section className="statement">

          <div className="statement-visual reveal reveal-left">

            <div className="statement-frame"></div>

            <div className="statement-monogram">
              <span>A</span>
              <span>C</span>
            </div>

            <div className="statement-visual-content">

              <span className="statement-small">
                NOSSA ESSÊNCIA
              </span>

              <h3>
                Clareza.
                <br />
                Estratégia.
                <br />
                <em>Proximidade.</em>
              </h3>

              <div className="statement-signature">
                <strong>ALMEIDA COSTA</strong>
                <span>ADVOGADOS</span>
              </div>

            </div>

            <span className="statement-number">
              03
            </span>

          </div>


          <div className="statement-content reveal reveal-right">

            <span className="section-index">
              NOSSA FORMA DE ATUAR
            </span>

            <blockquote>
              Não existem soluções jurídicas realmente eficientes sem
              compreender as pessoas por trás de cada decisão.
            </blockquote>

            <p>
              Técnica jurídica, comunicação direta e acompanhamento próximo
              em todas as etapas.
            </p>

            <a href="#contato" className="underlined-link">
              Converse com nossa equipe
              <FaArrowRight />
            </a>

          </div>

        </section>


        {/* =====================================================
            EQUIPE
        ===================================================== */}

        <section className="team section" id="equipe">

          <div className="container">

            <div className="team-heading reveal reveal-up">

              <span className="section-index">
                03 — EQUIPE
              </span>

              <div>

                <h2>
                  Relações de confiança
                  <br />
                  começam com <em>pessoas.</em>
                </h2>

                <p>
                  Profissionais dedicados a uma atuação jurídica responsável,
                  acessível e próxima.
                </p>

              </div>

            </div>


            <div className="team-grid">

              <article className="professional reveal reveal-left">

                <div className="professional-image professional-one">
                  <span>FOTO PROFISSIONAL</span>
                </div>

                <div className="professional-info">

                  <div>
                    <h3>Henrique Almeida</h3>
                    <span>Sócio fundador</span>
                  </div>

                  <p>
                    Direito Civil e Empresarial
                  </p>

                  <small>
                    OAB/RN 00.000
                  </small>

                </div>

              </article>


              <article
                className="professional professional-offset reveal reveal-right"
              >

                <div className="professional-image professional-two">
                  <span>FOTO PROFISSIONAL</span>
                </div>

                <div className="professional-info">

                  <div>
                    <h3>Mariana Costa</h3>
                    <span>Sócia fundadora</span>
                  </div>

                  <p>
                    Direito Trabalhista e Previdenciário
                  </p>

                  <small>
                    OAB/RN 00.000
                  </small>

                </div>

              </article>

            </div>

          </div>

        </section>


        {/* =====================================================
            CONTEÚDOS
        ===================================================== */}

        <section className="articles section" id="conteudos">

          <div className="container">

            <div className="articles-heading reveal reveal-up">

              <div>

                <span className="section-index">
                  04 — CONTEÚDOS
                </span>

                <h2>
                  Informação também
                  <br />
                  gera <em>segurança.</em>
                </h2>

              </div>

              <a href="#conteudos" className="underlined-link">
                Ver todos os conteúdos
                <FaArrowRight />
              </a>

            </div>


            <div className="articles-grid">

              <article className="article-main reveal reveal-left">

                <div className="article-image article-image-one"></div>

                <div className="article-meta">
                  <span>{artigos[0].categoria}</span>
                  <time>{artigos[0].data}</time>
                </div>

                <h3>
                  {artigos[0].titulo}
                </h3>

                <a href="#contato">
                  Ler conteúdo
                  <FaArrowRight />
                </a>

              </article>


              <div className="article-side">

                {artigos.slice(1).map((artigo, index) => (

                  <article
                    key={artigo.titulo}
                    className="reveal reveal-right"
                    style={{
                      "--delay": `${index * 130}ms`,
                    }}
                  >

                    <div className="article-meta">
                      <span>{artigo.categoria}</span>
                      <time>{artigo.data}</time>
                    </div>

                    <h3>
                      {artigo.titulo}
                    </h3>

                    <a href="#contato">
                      Ler conteúdo
                      <FaArrowRight />
                    </a>

                  </article>

                ))}

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            CONTATO
        ===================================================== */}

        <section className="contact" id="contato">

          <div className="container contact-layout">

            <div className="contact-heading reveal reveal-left">

              <span className="section-index light">
                05 — CONTATO
              </span>

              <h2>
                Vamos conversar
                <br />
                sobre o seu <em>caso?</em>
              </h2>

              <p>
                Entre em contato com nossa equipe para receber informações
                sobre atendimento e conhecer os próximos passos.
              </p>

              <a href="#contato" className="whatsapp">
                <FaWhatsapp />
                Falar pelo WhatsApp
                <FaArrowRight />
              </a>

            </div>


            <div className="contact-details reveal reveal-right">

              <div className="contact-line">

                <FaPhoneAlt />

                <div>
                  <span>TELEFONE</span>
                  <p>(84) 99999-9999</p>
                </div>

              </div>


              <div className="contact-line">

                <FaEnvelope />

                <div>
                  <span>E-MAIL</span>
                  <p>contato@almeidacosta.com.br</p>
                </div>

              </div>


              <div className="contact-line">

                <FaMapMarkerAlt />

                <div>
                  <span>ENDEREÇO</span>
                  <p>Rio Grande do Norte, Brasil</p>
                </div>

              </div>


              <div className="contact-line">

                <div className="empty-icon"></div>

                <div>
                  <span>ATENDIMENTO</span>
                  <p>Segunda a sexta · 08h às 18h</p>
                </div>

              </div>

            </div>

          </div>

        </section>

      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="footer">

        <div className="container footer-top">

          <div className="footer-brand">

            <a href="#inicio" className="brand" onClick={closeMenu}>
            <img
            src={logoAlmeida}
            alt="Almeida Costa Advogados"
            className="brand-logo"
            />
            </a>

            <p>
              Advocacia construída com conhecimento,
              <br />
              clareza e relações de confiança.
            </p>

          </div>


          <div className="footer-nav">

            <span>NAVEGAÇÃO</span>

            <a href="#inicio">Início</a>
            <a href="#escritorio">O escritório</a>
            <a href="#atuacao">Atuação</a>
            <a href="#equipe">Equipe</a>
            <a href="#conteudos">Conteúdos</a>
            <a href="#contato">Contato</a>

          </div>


          <div className="footer-social">

            <span>ACOMPANHE</span>

            <div>

              <a href="#contato" aria-label="Instagram">
                <FaInstagram />
              </a>

              <a href="#contato" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>

            </div>

          </div>


          <a
            href="#inicio"
            className="back-top"
            aria-label="Voltar ao topo"
          >
            <FaArrowUp />
          </a>

        </div>


        <div className="container footer-bottom">

          <span>
            © {new Date().getFullYear()} Almeida Costa Advogados. Todos os
            direitos reservados.
          </span>

          <span>
            Site institucional
          </span>

        </div>

      </footer>

    </div>
  );
}

export default App;