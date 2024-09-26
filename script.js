const ImagemDeFundo = document.getElementById('ContainerDaImagem')
const Botoes = document.getElementById('ContainerDosBotoesAgrDeVdd')
const testo = document.getElementById('testoID')
const RisadaFoda = document.getElementById('risada')
const Cenarios = {
    Inicio: {
        Mensagem: 'bem vindo ao mundo (você nasceu)',
        Botoes: ['Iniciar'],
        AcaoBotao: ['Cenario2'],
        ImagemFundo: 'nascendo.webp'
    },
    Cenario2: {
        Mensagem: 'Você acaba de fazer 3 anos, qual sua decisão',
        Botoes: ['gravar tiktok', 'Ir pra revoada'],
        AcaoBotao: ['Cenario3', 'Casa'],
        ImagemFundo: 'aniversario.jpg'
    },
    Casa: {
        Mensagem: 'Voce deu perdido na coroa, e foi pro baile',
        Botoes: ['voltar pra casa', 'dar fuga nos coxa'],
        AcaoBotao: ['Jantar', 'APOSTAR'],
        ImagemFundo: 'WhatsApp Image 2024-09-20 at 13.21.44.jpeg'
    },
    APOSTAR: {
        Mensagem: 'capotou de motoca e foi presoKKKKKKKKKKKKKKKKKKKKKKK',
        Botoes: ['...'],
        AcaoBotao: ['perdeu'],
        ImagemFundo: 'gato.jpg',
        RisadaFoda: 'meme do gato rindo.mp3'    },

}

MudarCenario('Inicio');

function MudarCenario(Cenario) {

    //Se o cenarioExiste
    if (Cenarios[Cenario]) {
        let cen = Cenarios[Cenario];

        //Pega A Imagem do respectivo cenario
        let img = cen.ImagemFundo;
        //Mudar A Imagem de fundo
        ImagemDeFundo.src = 'imgs/' + img;
let audio=cen.RisadaFoda
RisadaFoda.src = 'audios/' + audio

    

        //ADD os botoes
        ////limpa a div
        Botoes.innerHTML = '';
        //percorreTodosOsBotoesDoCenario
        cen.Botoes.forEach((e, index) => {
            //cria o botao
            let BTN = document.createElement('button')

            //add o texto do botao
            BTN.innerHTML = e;
            //add o evento de click
            BTN.addEventListener('click', () => {
                MudarCenario(cen.AcaoBotao[index])
            });
            //add o botao a div dos botoes
            Botoes.append(BTN)
RisadaFoda.play()


        });

        //pegar o testo
        let textoMENSAGEM = cen.Mensagem;
        //Mudar o testo
        testo.innerText = textoMENSAGEM

    } else {
        alert('Muito cringe.');
    }
}