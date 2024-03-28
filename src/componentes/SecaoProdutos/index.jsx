import estilosSecaoProdutos from '@/componentes/SecaoProdutos/SecaoProdutos.module.css';
import estilos from '@/styles/Home.module.css';

export default function SecaoProdutos() {
  return (
    <section id='produtos' className={estilosSecaoProdutos.secao_produtos}>
      <div className={estilos.limitar_secao}>
        <h3>Nossos produtos</h3>
        <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
        <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
        <div className={estilosSecaoProdutos.container_produtos}>
          <div className={estilosSecaoProdutos.box_produto}>
            <h4>Óculos de grau</h4>
            <img src='oculos01.png' title='Óculos de grau' alt='4 óculos de grau de cores diferentes'/>
            <p>R$ 500,00</p>
          </div>
          <div className={estilosSecaoProdutos.box_produto}>
            <h4>Óculos transition</h4>
            <img src='oculos02.png' title='Óculos de grau' alt='4 óculos de grau de cores diferentes'/>
            <p>R$ 750,00</p>
          </div>
          <div className={estilosSecaoProdutos.box_produto}>
            <h4>Óculos de sol</h4>
            <img src='oculos03.png' title='Óculos de grau' alt='4 óculos de grau de cores diferentes'/>
            <p>R$ 700,00</p>
          </div>
          <div className={estilosSecaoProdutos.box_produto}>
            <h4>Óculos infantil</h4>
            <img src='oculos04.png' title='Óculos de grau' alt='4 óculos de grau de cores diferentes'/>
            <p>R$ 500,00</p>
          </div>
        </div>

        <p>Todos os nossos produtos incluem:</p>

        <ul>
          <li>Garantia de 1 ano</li>
          <li>Manutenção preventiva</li>
          <li>Descontos especiais na compra da segunda unidade</li>
          <li>Flexibilidade de pagamento</li>
        </ul>
      </div>
    </section>
  )
}