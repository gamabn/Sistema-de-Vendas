import './styles/global.scss'; // Certifique-se de que você tenha um arquivo de estilos globais, se necessário
import 'bulma/css/bulma.css'; // Importa o Bulma CSS
import { Layout } from './componentes/layout';

export default function Home() {
  return (
    <div>
        <Layout/>
  </div>
  );
}
