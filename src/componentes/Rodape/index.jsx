import estilo_Rodape from '@/componentes/Rodape/Rodape.module.css';

export default function Rodape() {
  return (
    <footer>
      <div className={estilo_Rodape.container_rodape}>
        <p>© 2022 Óticas Vida. - Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}