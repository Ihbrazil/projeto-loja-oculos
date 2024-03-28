import estilosSecaoContatos from '@/componentes/SecaoContatos/SecaoContatos.module.css';
import estilos from '@/styles/Home.module.css';

export default function SecaoContato() {
  return (
    <section id='contato' className={estilosSecaoContatos.secao_contato}>
      <div className={estilos.limitar_secao}>
        <h3>Fale conoco</h3>
        <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>

        <div className={estilosSecaoContatos.contato_container}>
          <div>
              <h4>Contato</h4>
              <div className={estilosSecaoContatos.contato_conteudo}>
                  <img src="local.png" title="Ícone local" alt="Pino de localização"/>
                  <span>Nova Iguaçu, RJ</span>
              </div>
              <div className={estilosSecaoContatos.contato_conteudo}>
                  <img src="telefone.png" title="Ícone telefone" alt="Ícone de um telefone"/>
                  <span>(21) 9999-9999</span>
              </div>
              <div className={estilosSecaoContatos.contato_conteudo}>
                  <img src="email.png" title="Ícone email" alt="Ícone de uma carta"/>
                  <span>contato@oticavida.com</span>
              </div>
          </div>
          <div>
              <h4>Nossas Redes Sociais</h4>
              <div className={estilosSecaoContatos.contato_conteudo}>
                  <img src="fb.png" title="Ícone facebook" alt="logo do facebook"/>
                  <span>/OticaVida</span>
              </div>
              <div className={estilosSecaoContatos.contato_conteudo}>
                  <img src="ig.png" title="Ícone instagram" alt="logo do instagram"/>
                  <span>@oticavidarj</span>
              </div>
              <div className={estilosSecaoContatos.contato_conteudo}>
                  <img src="tt.png" title="Ícone twitter" alt="logo do twitter"/>
                  <span>@oticavidarj</span>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}