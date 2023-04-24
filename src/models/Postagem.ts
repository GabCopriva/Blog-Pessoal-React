import Tema from './Tema'
import Usuario from './Usuario';

interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    data: String;
    tema?: Tema | null
}

export default Postagem;