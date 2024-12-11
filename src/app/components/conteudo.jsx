class Projetos {
    constructor(id, url, titulo, descricao, linguagem, stack) {
        this.id = id;
        this.url = url;
        this.titulo = titulo;
        this.descricao = descricao;
        this.linguagem = linguagem;
        this.stack = stack;
      }
}

const projeto_1 = new Projetos(3, "https://finastampadecor.com.br/loja/wp-content/uploads/2019/11/MM558001-Copia.jpg", "Título 1", "Descrição 1", "JavaScript/react", "front_end")
const projeto_2 = new Projetos(2, "https://finastampadecor.com.br/loja/wp-content/uploads/2019/11/MM558001-Copia.jpg", "Título 2", "Descrição 1", "JavaScript/vue", "front_end")
const projeto_3 = new Projetos(1, "https://finastampadecor.com.br/loja/wp-content/uploads/2019/11/MM558001-Copia.jpg", "Título 3", "Descrição 1", "JavaScript/vue", "front_end")
const projeto_4 = new Projetos(3, "https://finastampadecor.com.br/loja/wp-content/uploads/2019/11/MM558001-Copia.jpg", "Título 1", "Descrição 1", "Python", "back_end")
const projeto_5 = new Projetos(2, "https://finastampadecor.com.br/loja/wp-content/uploads/2019/11/MM558001-Copia.jpg", "Título 2", "Descrição 1", "Python", "back_end")
const projeto_6 = new Projetos(1, "https://finastampadecor.com.br/loja/wp-content/uploads/2019/11/MM558001-Copia.jpg", "Título 3", "Descrição 1", "Python", "back_end")
const projeto_7 = new Projetos(3, "https://finastampadecor.com.br/loja/wp-content/uploads/2019/11/MM558001-Copia.jpg", "Título 1", "Descrição 1", "ia/postgreSQL", "datas")
const projeto_8 = new Projetos(2, "https://finastampadecor.com.br/loja/wp-content/uploads/2019/11/MM558001-Copia.jpg", "Título 2", "Descrição 1", "Metabase", "datas")
const projeto_9 = new Projetos(1, "https://finastampadecor.com.br/loja/wp-content/uploads/2019/11/MM558001-Copia.jpg", "Título 3", "Descrição 1", "Metabase", "datas")

export const Biblioteca = [projeto_1, projeto_2, projeto_3,projeto_4,projeto_5,projeto_6,projeto_7, projeto_8, projeto_9]
