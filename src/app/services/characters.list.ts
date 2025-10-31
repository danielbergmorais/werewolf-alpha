
export interface Character {
    id: number,
    img: string,
    interval: number,
    name: string,
    slug: string,
    originalOrder?: string,
    description?: string,
}


export const charactersList = [
    {
        id: 0,
        img: '/assets/sprites/sentinela.jpg',
        interval: 3000,
        name: 'Sentinela',
        slug: 'sentinela',
        originalOrder: '#0',
        description: "O Sentinela acorda e pode colocar uma ficha de escudo sobre a carta de qualquer jogador, exceto a sua própria." +
            "Essa carta não pode ser vista nem movida, e não pode receber uma ficha de Artefato. " +
            "A ficha de escudo impede que os seguintes papéis vejam ou movam sua própria carta, caso ela esteja protegida: " +
            "<ul> " +
            "   <li>Bruxa (Witch)</li> " +
            "   <li>Ladrão (Robber)</li> " +
            "   <li>Bêbado (Drunk)</li> " +
            "   <li>Sonâmbula (Insomniac)</li> " +
            "</ul> " +
            "Embora o poder do Bêbado normalmente seja obrigatório, uma ficha de escudo na sua carta impede que ele use seu poder." +
            "Durante a preparação do jogo, uma ficha de escudo deve ser colocada próxima às cartas do centro, para que o Sentinela possa pegá-la facilmente." +
            "<br> <span>O Sentinela faz parte da equipe da vila.</span>"
    },
    {
        id: 1,
        img: '/assets/sprites/lobisomem.jpg',
        interval: 2500,
        name: 'Lobisomem',
        slug: 'lobisomens',
        originalOrder: '#2',
        description: "A noite, todos os lobisomens acordam e se reconhecem. Se ninguem abrir os olhos, " +
            "os outros lobisomens estão no centro da mesa. <br> Opção de Lobo Solitário: " +
            "Se houver apenas um lobisomem no jogo, o Lobisomem pode olhar uma carta no centro. " +
            "Isto é extremamente benéfico para o Lobisomem, que não tem um parceiro e fornece uma " +
            "ferramenta util para enganar os outros jogadores."
    },
    {
        id: 2,
        img: '/assets/sprites/alpha.jpg',
        interval: 2500,
        name: 'Lobisomem Alpha',
        slug: 'lobisomem-alpha',
        originalOrder: '#2-B',
        description: "Se estiver jogando com o Lobo Alfa, posicione qualquer outra carta de Lobisomem " +
            "(incluindo um Lobisomem comum, o Lobisomem Místico ou o Lobisomem Sonhador) virada para baixo e " +
            "perpendicular às três cartas centrais (veja a imagem abaixo para um exemplo de onde colocar a carta de Lobisomem Central). " +
            "<img src='/assets/setup.jpg' alt='Lobo Alfa Setup' style='max-width: 100%; margin-top: 10px;'/><br>" +
            "Durante a noite, o Lobo Alfa acorda junto com os outros Lobisomens. Depois disso, o Lobo Alfa acorda separadamente. " +
            "O Lobo Alfa deve trocar a carta de Lobisomem Central com a carta de qualquer outro jogador (mas não pode trocar com " +
            "a própria carta nem com a carta de outro Lobisomem), sem olhar para nenhuma das duas cartas. " +
            "Todos os papéis que podem ver ou mover uma carta central também podem ver ou mover a carta de Lobisomem Central.<br> " +
            "<span>O Lobo Alfa faz parte da equipe dos Lobisomens.</span>"

    },
    {
        id: 3,
        img: '/assets/sprites/mystic.jpg',
        interval: 2500,
        name: 'Lobisomem Místico',
        slug: 'lobisomem-mistico',
        originalOrder: '#2-C',
        description: "O Lobisomem Místico acorda junto com os outros Lobisomens. " +
            "Depois disso, o Lobisomem Místico acorda separadamente. " +
            "O Lobisomem Místico pode olhar a carta de outro jogador. <br> " +
            "<span>O Lobisomem Místico faz parte da equipe dos Lobisomens.</span>"
    },
    {
        id: 4,
        img: '/assets/sprites/minion.jpg',
        interval: 2500,
        name: 'Minion',
        slug: 'minion',
        originalOrder: '#3',
        description: " Age logo após a ação dos Lobisomens. o Minion acorda e ve quem são os Lobisomens, " +
            "Durante esta fase, todos os Lobisomens colocam seus dedões para cima para que o Minion " +
            " possa ver quem são. Os Lobisomens não sabem quem é o Minion. Se o Minion for eliminado e " +
            "nenhum Lobisomem for eliminado, os Lobisomens (e o Minion) vencem. " +
            "Se nenhum jogador for Lobisomem, o Minion vence se qualquer outro jogador for eliminado " +
            "(que não seja Minion). Esta função pode ser um aliado muito poderoso para o time dos Lobisomens."
    },
    {
        id: 5,
        img: '/assets/sprites/mason.jpg',
        interval: 2000,
        name: 'Mason',
        slug: 'maçons',
        originalOrder: '#4',
        description: "A Quando estiver usando os Maçons, coloque os dois no jogo. O Maçom acorda durante a noite e " +
            "procura o outro Maçom. Se o Maçom não encontrar outro Maçom, ele sabe que o outro está no centro da mesa. <br> " +
            "<span> Os Maçons está no time do vilarejo.</span>"
    },
    {
        id: 6,
        img: '/assets/sprites/vidente.jpg',
        interval: 3000,
        name: 'Vidente',
        slug: 'vidente',
        originalOrder: '#5',
        description: "A noite, o Vidente acorda e pode olhar a carta de outro jogador ou duas cartas do centro da " +
            "mesa, mas não pode move-las. <span> A Vidente está no time do vilarejo.</span>"
    },
    {
        id: 7,
        img: '/assets/sprites/aprendiz-vidente.jpg',
        interval: 3000,
        name: 'Aprendiz de Vidente',
        slug: 'aprendiz-de-vidente',
        originalOrder: '#5-B',
        description: "A Vidente Aprendiz acorda e pode olhar uma das cartas do centro. <br> " +
            "<span>A Vidente Aprendiz faz parte da equipe da vila.</span>"
    },
    {
        id: 8,
        img: '/assets/sprites/investigador.jpg',
        interval: 2000,
        name: 'Investigador Paranormal',
        slug: 'investigador-paranormal',
        originalOrder: '#5-C',
        description: "O Investigador Paranormal acorda e pode olhar as cartas de até dois outros jogadores, uma de cada vez. " +
            "Se ele vir um Lobisomem ou um Suicida (Tanner), não pode mais olhar outras cartas e se torna um Lobisomem ou Suicida, respectivamente." +
            "Se o Investigador Paranormal ver o Doppelgänger que viu um Lobisomem, ele continua olhando normalmente, pois não sabe o que o Doppelgänger " +
            "viu e não se torna o mesmo papel, mesmo que o Doppelgänger tenha se tornado um Lobisomem ou Suicida. <br> " +
            "O Investigador Paranormal faz parte da equipe da vila, a menos que encontre um Lobisomem, nesse caso, ele se junta à equipe dos Lobisomens, " +
            "ou se encontrar um Suicida, torna-se um Suicida e só vence se for eliminado."
    },
    {
        id: 9,
        img: '/assets/sprites/ladrao.jpg',
        interval: 2000,
        name: 'Ladrão',
        slug: 'ladrao',
        originalOrder: '#6',
        description: "A noite, o Ladrão acorda e pode roubar uma carta de outro jogador e colocar " +
            "sua carta no lugar da outra carta. Então o Ladrão pode olhar sua nova carta. " +
            "O jogador que recebe a carta do Ladrão está no time da vila. O Ladrão fica no " +
            "time da carta que ele pegou, no entanto, ele não faz a ação da nova carta durante a noite." +
            "<br>Se o Ladrão escolher não roubar a carta do outro jogador, ele permanece como Ladrão. <br> " +
            "<span> O Ladrão está no time do vilarejo.</span>"
    },
    {
        id: 10,
        img: '/assets/sprites/bruxa.jpg',
        interval: 2000,
        name: 'Bruxa',
        slug: 'bruxa',
        originalOrder: '#6-B',
        description: "A Bruxa acorda e pode olhar uma das cartas do centro." +
            "Se ela olhar uma carta do centro, deve trocá-la com a carta de qualquer jogador (inclusive a própria). " +
            "A carta do jogador trocado deve ser colocada de volta no centro, no mesmo lugar, sem olhar para ela. " +
            "A Bruxa faz parte da <strong>equipe da vila</strong>, a menos que troque sua própria carta por uma de outra equipe."
    },
    {
        id: 11,
        img: '/assets/sprites/encrenqueira.jpg',
        interval: 4000,
        name: 'Encrenqueira',
        slug: 'encrenqueira',
        originalOrder: '#7',
        description: "A noite, a Encrenqueira acorda e pode trocar as cartas de dois outros jogadores sem olhar as " +
            "cartas. Os jogadores que recebem as cartas diferentes são agora do time da carta que eles receberam, " +
            "mesmo que eles não saibam e essa função permanece ate o final do jogo. <br>" +
            "<span> O encrenqueiro esta no time do vilarejo.</span>"
    },
    {
        id: 12,
        img: '/assets/sprites/idiota-vila.jpg',
        interval: 6000,
        name: 'Idiota da Vila',
        slug: 'idiota-da-vila',
        originalOrder: '#7-B',
        description: "O Idiota da Vila acorda e pode mover as cartas de todos os jogadores, exceto a sua própria, " +
            "uma posição para a esquerda ou para a direita. Se ele decidir mover as cartas, deve mover todas as cartas dos " +
            "jogadores (exceto a dele), não pode mover cartas do centro, nem cartas com ficha de escudo. <br> " +
            "<span>O Idiota da Vila faz parte da equipe da vila.</span>"
    },
    {
        id: 13,
        img: '/assets/sprites/bebado.jpg',
        interval: 3000,
        name: 'Bêbado',
        slug: 'bebado',
        originalOrder: '#8',
        description: "O Bêbado está tão bêbado que não se lembra da sua função. Quando for a hora de acordar " +
            "durante a noite, ele deve trocar sua carta de Bêbado por qualquer carta do centro, mas ele " +
            "não olha a sua carta. O Bêbado assume a função da carta sua frente (mesmo que ele não saiba que função é essa) " +
            "e está no time dessa função."
    },
    {
        id: 14,
        img: '/assets/sprites/sonambula.jpg',
        interval: 3000,
        name: 'Sonâmbula',
        slug: 'sonambula',
        originalOrder: '#9',
        description: " A Sonâmbula acorda e procura pela sua carta (pra ver se ela mudou). Apenas use a Sonâmbula" +
            "se o ladrão ou encrenqueira estiverem no jogo. <span> A Sonâmbula está no time do vilarejo.</span>"
    },
    {
        id: 15,
        img: '/assets/sprites/revelador.jpg',
        slug: 'revelador',
        name: 'Revelador',
        interval: 3000,
        originalOrder: '#10',
        description: "O Revelador acorda e pode virar a carta de outro jogador para cima." +
            "Se a carta revelada for um Lobisomem ou um Enforcado (Tanner), ele deve virá-la novamente para baixo." +
            "Se o Revelador revelar uma carta de Doppelgänger ou Investigador Paranormal (P.I.), ele a deixa virada para cima." +
            "O Revelador só pode virar uma carta para cima, mesmo que revele um Lobisomem ou Enforcado." +
            "<br> <span>O Revelador faz parte da equipe da vila.</span>"
    },
    {
        id: 16,
        img: '/assets/sprites/curador.jpg',
        interval: 3000,
        name: 'Curador',
        slug: 'curador',
        originalOrder: '#11',
        description: "O Curador acorda e pode escolher e colocar uma ficha de Artefato virada para baixo, " +
            "aleatoriamente (sem olhar) sobre a carta de qualquer jogador (inclusive a sua própria). " +
            "Consulte a lista de artefatos para ver os efeitos de cada um. " +
            "O Curador não pode colocar uma ficha de Artefato em uma carta que tenha uma ficha de escudo. " +
            "<br> <span>O Curador faz parte da equipe da vila.</span>"
    },
    {
        id: 17,
        img: '/assets/sprites/caçador.jpg',
        name: 'Caçador',
        slug: 'caçador',
        interval: 0,
        description: "O Caçador não acorda durante a noite. Se o Caçador for eliminado,o outro jogador que ele estiver apontando é eliminado também." +
            "<br> <span> O Caçador está no time do vilarejo.</span>"
    },
    {
        id: 18,
        img: '/assets/sprites/suicida.jpg',
        name: 'Suicida',
        slug: 'suicida',
        interval: 0,
        description: "<p> O Suicida odeia tanto seu trabalho que ele quer morrer.</p>" +
            "<ul>" +
            "<li>Se o Suicida for eliminado, ele vence sozinho.</li>" +
            "<li>Se o Suicida for eliminado e nenhum Lobisomem for eliminado, os Lobisomens não vencem.</li>" +
            "<li>Se o Suicida for eliminado e um Lobisomem também, o time da Vila também vence.</li>" +
            "<li>O Suicida é considerado membro da Vila (mas ele não esta no time deles), portanto se" +
            "o Suicida for eliminado, e todos os Lobisomens estiverem no centro, o time da Vila perde</li>" +
            "</ul>"
    },
    {
        id: 19,
        img: '/assets/sprites/dreamwolf.jpg',
        slug: 'lobisomem-dos-sonhos',
        name: 'Lobisomem Sonhador',
        interval: 0,
        description: "O Lobisomem Sonhador não acorda com os outros Lobisomens." +
            "Quando os Lobisomens são chamados à noite, ele apenas levanta o polegar, para que os outros Lobisomens saibam quem ele é. " +
            "Se estiver jogando com o Capanga (Minion), o Lobisomem Sonhador também levanta o polegar durante a fase noturna do Capanga. " +
            "<br> <span>O Lobisomem Sonhador faz parte da equipe dos Lobisomens.</span>"
    }

]

