import estilosTopo from '@/componentes/Topo/Topo.module.css';

export default function Topo() {
  return (
    <header className={estilosTopo.topo}>
        <div>
          <img src="logo.png" alt='imagem de um óculos à direita e o nome da ótica à esquerda' />

          <nav>
            <a href='#produtos'>PRODUTOS</a>
            <a href='#sobre'>SOBRE</a>
            <a href='#contato'>CONTATO</a>
          </nav>
        </div>
      </header>
  )
}