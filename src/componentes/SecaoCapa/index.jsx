import estilosSecaoCapa from '@/componentes/SecaoCapa/SecaoCapa.module.css';
import estilos from '@/styles/Home.module.css';

export default function SecaoCapa() {
  return (
    <section className={estilos.limitar_secao}>
      <div className={estilosSecaoCapa.container_capa}>
        <p>Preços baixos em</p>
        <h1>Óculos de grau e de sol</h1>
        <p>Você só encontra aqui</p>
      </div>
    </section>
  )
}