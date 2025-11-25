
export interface Character {
    id: number,
    interval: number,
    dusker: boolean,
    img: string,
    name: string,
    slug: string,
    originalOrder: string,
    description?: string,
}

const intervalBetweenCharacters = 4000;
const longIntervalBetweenCharacters = 7000;
const veryLongIntervalBetweenCharacters = 10000;
const noInterval = 0;

export const vampireList: Character[] = [
    {
        id: 1,
        interval: intervalBetweenCharacters,
        dusker: true,
        img: 'vampire.jpg',
        name: 'Vampiro (Vampire)',
        slug: 'vampire',
        originalOrder: '-6',
        description: "Vampiros (incluindo o Mestre[The Master] e o Conde [The Count]) acorda e procura por outros vampiros." +
            "Então eles escolhem outro jogador não vampiro para colocar a marca do vampiro, trocando a marca original sem olhar e colocando ela no espaço da marca vazia do vampiro.<br> <br>" +
            "<span> O Vampiro faz parte do time dos Vampiros.</span>"
    },
    {
        id: 2,
        interval: intervalBetweenCharacters,
        dusker: true,
        img: 'the-count.jpg',
        name: 'O Conde (The Count)',
        slug: 'count',
        originalOrder: '-6b',
        description: "O Conde(The Count) acorda junto dos vampiros e procura por outros vampiros. " +
            "Ele acorda depois que os outros vampiros fecham os olhos e deve colocar a <strong>marca de medo </strong> na frente de outro jogador não vampiro " +
            "(ele pode não pode colocar no jogador que recebeu a marca do vampiro, pois ele agora faz parte do time dos vampiros). " +
            "O jogador que recebeu a marca de medo não pode realizar a ação durante a noite (se ele tiver ação). <br><br> " +
            "<span> O Conde faz parte do time dos Vampiros.</span>"
    },
    {
        id: 4,
        interval: noInterval,
        dusker: true,
        img: 'the-master.jpg',
        name: 'O mestre (The Master)',
        slug: 'master',
        originalOrder: '',
        description: "O Mestre (The Master) acorda junto dos vampiros e procura por outros vampiros. " +
            "O poder especial do Mestre só funciona durante a votação:  <br> " +
            "Se outro Vampiro (o vampiro comum, o vampiro, o conde) votar nele, o mestre está protegido e não pode ser eliminado. " +
            "Em vez disso, o jogador com o segundo maior número de votos (maior que 1) é eliminado. <br><br>" +
            "<span> O Mestre faz parte do time dos Vampiros.</span>"
    },
    {
        id: 3,
        interval: intervalBetweenCharacters,
        dusker: true,
        img: 'renfield.jpg',
        name: 'Renfield',
        slug: 'renfield',
        originalOrder: '-6c',
        description: "O Conde não acorda durante a noite. Se o Conde for eliminado, ele escolhe um jogador para se tornar o novo Conde. " +
            "O jogador escolhido não revela sua nova identidade até o final do jogo. <br> <br>" +
            "<span> O Renfield faz parte do time dos Vampiros.</span>"
    },
    {
        id: 4,
        interval: longIntervalBetweenCharacters,
        dusker: true,
        img: 'diseased.jpg',
        name: 'Diseased',
        slug: 'diseased',
        originalOrder: '-5',
        description: "A doente (Diseased) acorda e deve colocar a marca do doente (mark of disease) em um jogador ao lado esquerdo ou direito dela e colocar a marca original do jogador que ela escolheu (sem olhar)" +
            " virado pra baixo no local da marca que ela tirou. <br>" +
            "Qualquer jogador que votar no jogador <strong>Doente</strong> não pode ganhar, mesmo se o time dele for o vencedor. Porem, o voto ainda é contabilizado, e se o jogador com a carta de <strong>Doente</strong> " +
            "ou a marca da doença for quem recebeu mais votos, ele é eliminado como qualquer outro jogador, e apenas os jogadores do time vencedor que não votaram no <strong> Doente</strong> são os jogadores vencedores.<br><br> " +
            "<span> O Doente faz parte do time da Vila.</span>"
    },
    {
        id: 4,
        interval: longIntervalBetweenCharacters,
        dusker: true,
        img: 'diseased.jpg',
        name: 'Doente',
        slug: 'doente',
        originalOrder: '-5',
        description: "A doente (Diseased) acorda e deve colocar a marca do doente (mark of disease) em um jogador ao lado esquerdo ou direito dela e colocar a marca original do jogador que ela escolheu (sem olhar)" +
            " virado pra baixo no local da marca que ela tirou. <br>" +
            "Qualquer jogador que votar no jogador <strong>Doente</strong> não pode ganhar, mesmo se o time dele for o vencedor. Porem, o voto ainda é contabilizado, e se o jogador com a carta de <strong>Doente</strong> " +
            "ou a marca da doença for quem recebeu mais votos, ele é eliminado como qualquer outro jogador, e apenas os jogadores do time vencedor que não votaram no <strong> Doente</strong> são os jogadores vencedores.<br><br> " +
            "<span> O Doente faz parte do time da Vila.</span>"
    },
    {
        id: 5,
        interval: longIntervalBetweenCharacters,
        dusker: true,
        img: 'cupid.jpg',
        name: 'Cupido',
        slug: 'cupid',
        originalOrder: '-4',
        description: "O cúpido (Cupid) acorda e coloca a marca de amor na frente de dois outros jogadores, ela deve colocar as marcas originais no local vazio das marcas do amor. <br>" +
            "Jogadores que receberam a marca do amor acordam juntos após a fase do crepusculo(dusk) terminar e estão enamorados. Se um dos dois jogadores for eliminado o outro também é eliminado junto. Jogadores com a marca do amor continuam no mesmo time a que a carta deles pertece. <br><br> " +
            "<span> O Cúpido faz parte do time da Vila.</span>"
    },
    {
        id: 6,
        interval: longIntervalBetweenCharacters,
        dusker: true,
        img: 'instigator.jpg',
        name: 'Instigador',
        slug: 'instigator',
        originalOrder: '-3',
        description: "O instigador acorda e coloca a marca de traidor virado para baixo na frente de outro jogador e coloca a marca original (sem olhar) no local vazio no tabuleiro. <br>" +
            "O jogador que recebeu a marca do traidor (mark of the traitor) somente vence se alguem do time dele for eliminado. Se o jogador com a marca do traidor é a unica pessoa no time dele, a marca do traidor não tem efeito. <br><br> " +
            "<span> O Instigador faz parte do time da Vila.</span>"
    },
    {
        id: 5,
        interval: longIntervalBetweenCharacters,
        dusker: true,
        img: 'priest.jpg',
        name: 'Sacerdote',
        slug: 'priest',
        originalOrder: '-2',
        description: "O Sacerdote (Priest) acorda e deve colocar uma marca de clareza em si proprio e em outro jogador, devolvendo as marcas originais de cada jogador para os espaços vazios do tabuleiro. <br><br> " +
            "<span> O Sacerdote faz parte do time da Vila.</span>"
    },
    {
        id: 6,
        interval: longIntervalBetweenCharacters,
        dusker: true,
        img: 'assassin.jpg',
        name: 'Assassino',
        slug: 'assassin',
        originalOrder: '-1',
        description: "O assassino acorda e deve colocar a marca do assassino em outro jogador e devolver a marca original do jogador para o espaço vazio no tabuleiro. <br>" +
            " O assassino só consegue vencer apenas se o jogador com a marca do assassino for eliminado, independente de qual time o jogador pertença. O assassino não precisa sobreviver ao final do jogo para vencer.  <br> " +
            "O assassino é o unico que se ele vencer, os outros times também podem vencer, então é possivel do assassino vencer junto dos vampiros, vila ou o suicida(tanner).<br>" +
            "Se acontecer do proprio assassino acabar com a marca do assassino no final do jogo, ele somente vence se ele próprio for eliminado. <br> <br>" +
            "<span> O assassino pertence apenas ao próprio time.</span>"
    },
    {
        id: 7,
        interval: longIntervalBetweenCharacters,
        dusker: true,
        img: 'apprentice-assassin.jpg',
        name: 'Assassino Aprendiz',
        slug: 'apprentice-assassin',
        originalOrder: '-1B',
        description: "O Aprendiz de Assassino acorda imediatamente depois do assassino colocar a marca do assassino em outro jogador, enquanto o assassino esta com os olhos abertos. O aprendiz de asssino e o assassino se reconhecem. <br>" +
            "O aprendiz de assassino vence se o assassino for eliminado. O aprendiz de asssino não precisa esta vivo no final do jogo para ganhar.  <br> " +
            "Se não tiver um assasino no jogo, o aprendiz de asssino deve colocar a marca na frente de outro jogador e somente vence se o jogador com a marca for eliminado, incluido ele mesmo.  <br><br>" +
            "<span> O aprendiz de assassino pertence apenas ao próprio time.</span>"

    },
    {
        id: 8,
        interval: intervalBetweenCharacters,
        dusker: false,
        img: 'lovers.jpg',
        name: 'Amantes',
        slug: 'lovers',
        originalOrder: '0',
        description: "Assim que iniciar a noite, os jogadores que estão enamorados ( os que possuem a marca do amor) acordam e se reconhecem um ao outro. " +
            "Os jogadores com a marca de amor esta ligados, se um eliminado o outro jogador é eliminado também. <br> " +
            "É possivel que somente um jogador possua a marca do amor se o instigador, sacerdote, assassino ou aprendiz de assassino estiverem no jogo. Se for esse o caso, a marca do amor não tem nenhum efeito. <br> " +
            "<span> Possuir a marca do amor não troca o time a qual a carta do jogador pertence.</span>"
    },
    {
        id: 9,
        interval: veryLongIntervalBetweenCharacters,
        dusker: false,
        img: 'marksman.jpg',
        name: 'Marksman',
        slug: 'marksman',
        originalOrder: '5D',
        description: "Marksman " +
            "O <strong>Marksman</strong> acorda e pode olhar uma carta de jogador e a marca de outro jogador (não pode olhar a marca e carta do mesmo jogador). <br> <br> " +
            "<span> O Marksman faz parte do time da Vila.</span>"
    },
    {
        id: 10,
        interval: longIntervalBetweenCharacters,
        dusker: false,
        img: 'pickpocket.jpg',
        name: 'Pickpocket',
        slug: 'pickpocket',
        originalOrder: '6C',
        description: "O Pickpocket acorda e pode trocar a marca dele com a marca de outro jogador e então ve sua nova marca. <br> <br> " +
            "<span> O Pickpocket faz parte do time da vila.</span>"
    },
    {
        id: 11,
        interval: longIntervalBetweenCharacters,
        dusker: false,
        img: 'gremlin.jpg',
        name: 'Gremlin',
        slug: 'gremlin',
        originalOrder: '7D',
        description: "O <strong>Gremlin</strong> acorda durante a noite e pode troca a carta ou a marca (não os dois) entre outros dois jogadores, mas sem olhar a marca ou a carta que foi trocada. <br><br>" +
            "<span> O Gremlin faz parte do time da Vila.</span>"
    },
];

export const charactersList: Character[] = [
    {
        id: 0,
        interval: longIntervalBetweenCharacters,
        dusker: false,
        img: 'sentinela.jpg',
        name: 'Sentinela',
        slug: 'sentinela',
        originalOrder: '0A',
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
        interval: longIntervalBetweenCharacters,
        dusker: false,
        img: 'lobisomem.jpg',
        name: 'Lobisomem',
        slug: 'lobisomens',
        originalOrder: '2',
        description: "A noite, todos os lobisomens acordam e se reconhecem. Se ninguem abrir os olhos, " +
            "os outros lobisomens estão no centro da mesa. <br> Opção de Lobo Solitário: " +
            "Se houver apenas um lobisomem no jogo, o Lobisomem pode olhar uma carta no centro. " +
            "Isto é extremamente benéfico para o Lobisomem, que não tem um parceiro e fornece uma " +
            "ferramenta util para enganar os outros jogadores."
    },
    {
        id: 2,
        interval: longIntervalBetweenCharacters,
        dusker: false,
        img: 'alpha.jpg',
        name: 'Lobisomem Alpha',
        slug: 'lobisomem-alpha',
        originalOrder: '2B',
        description: "Se estiver jogando com o Lobo Alfa, posicione qualquer outra carta de Lobisomem " +
            "(incluindo um Lobisomem comum, o Lobisomem Místico ou o Lobisomem Sonhador) virada para baixo e " +
            "perpendicular às três cartas centrais (veja a imagem abaixo para um exemplo de onde colocar a carta de Lobisomem Central). " +
            "<img src='assets/setup.jpg' alt='Lobo Alfa Setup' style='max-width: 100%; margin-top: 10px;'/><br>" +
            "Durante a noite, o Lobo Alfa acorda junto com os outros Lobisomens. Depois disso, o Lobo Alfa acorda separadamente. " +
            "O Lobo Alfa deve trocar a carta de Lobisomem Central com a carta de qualquer outro jogador (mas não pode trocar com " +
            "a própria carta nem com a carta de outro Lobisomem), sem olhar para nenhuma das duas cartas. " +
            "Todos os papéis que podem ver ou mover uma carta central também podem ver ou mover a carta de Lobisomem Central.<br> " +
            "<span>O Lobo Alfa faz parte da equipe dos Lobisomens.</span>"

    },
    {
        id: 3,
        interval: longIntervalBetweenCharacters,
        dusker: false,
        img: 'mystic.jpg',
        name: 'Lobisomem Místico',
        slug: 'lobisomem-mistico',
        originalOrder: '2C',
        description: "O Lobisomem Místico acorda junto com os outros Lobisomens. " +
            "Depois disso, o Lobisomem Místico acorda separadamente. " +
            "O Lobisomem Místico pode olhar a carta de outro jogador. <br> " +
            "<span>O Lobisomem Místico faz parte da equipe dos Lobisomens.</span>"
    },
    {
        id: 4,
        interval: intervalBetweenCharacters,
        dusker: false,
        img: 'minion.jpg',
        name: 'Minion',
        slug: 'minion',
        originalOrder: '3',
        description: " Age logo após a ação dos Lobisomens. o Minion acorda e ve quem são os Lobisomens, " +
            "Durante esta fase, todos os Lobisomens colocam seus dedões para cima para que o Minion " +
            " possa ver quem são. Os Lobisomens não sabem quem é o Minion. Se o Minion for eliminado e " +
            "nenhum Lobisomem for eliminado, os Lobisomens (e o Minion) vencem. " +
            "Se nenhum jogador for Lobisomem, o Minion vence se qualquer outro jogador for eliminado " +
            "(que não seja Minion). Esta função pode ser um aliado muito poderoso para o time dos Lobisomens."
    },
    {
        id: 5,
        interval: intervalBetweenCharacters,
        dusker: false,
        img: 'mason.jpg',
        name: 'Mason',
        slug: 'maçons',
        originalOrder: '4',
        description: "A Quando estiver usando os Maçons, coloque os dois no jogo. O Maçom acorda durante a noite e " +
            "procura o outro Maçom. Se o Maçom não encontrar outro Maçom, ele sabe que o outro está no centro da mesa. <br> " +
            "<span> Os Maçons está no time do vilarejo.</span>"
    },
    {
        id: 6,
        interval: longIntervalBetweenCharacters,
        dusker: false,
        img: 'vidente.jpg',
        name: 'Vidente',
        slug: 'vidente',
        originalOrder: '5',
        description: "A noite, o Vidente acorda e pode olhar a carta de outro jogador ou duas cartas do centro da " +
            "mesa, mas não pode move-las. <span> A Vidente está no time do vilarejo.</span>"
    },
    {
        id: 7,
        interval: longIntervalBetweenCharacters,
        dusker: false,
        img: 'aprendiz-vidente.jpg',
        name: 'Aprendiz de Vidente',
        slug: 'aprendiz-de-vidente',
        originalOrder: '5B',
        description: "A Vidente Aprendiz acorda e pode olhar uma das cartas do centro. <br> " +
            "<span>A Vidente Aprendiz faz parte da equipe da vila.</span>"
    },
    {
        id: 8,
        interval: veryLongIntervalBetweenCharacters,
        dusker: false,
        img: 'investigador.jpg',
        name: 'Investigador Paranormal',
        slug: 'investigador-paranormal',
        originalOrder: '5C',
        description: "O Investigador Paranormal acorda e pode olhar as cartas de até dois outros jogadores, uma de cada vez. " +
            "Se ele vir um Lobisomem ou um Suicida (Tanner), não pode mais olhar outras cartas e se torna um Lobisomem ou Suicida, respectivamente." +
            "Se o Investigador Paranormal ver o Doppelgänger que viu um Lobisomem, ele continua olhando normalmente, pois não sabe o que o Doppelgänger " +
            "viu e não se torna o mesmo papel, mesmo que o Doppelgänger tenha se tornado um Lobisomem ou Suicida. <br> " +
            "O Investigador Paranormal faz parte da equipe da vila, a menos que encontre um Lobisomem, nesse caso, ele se junta à equipe dos Lobisomens, " +
            "ou se encontrar um Suicida, torna-se um Suicida e só vence se for eliminado."
    },
    {
        id: 9,
        interval: longIntervalBetweenCharacters,
        dusker: false,
        img: 'ladrao.jpg',
        name: 'Ladrão',
        slug: 'ladrao',
        originalOrder: '6',
        description: "A noite, o Ladrão acorda e pode roubar uma carta de outro jogador e colocar " +
            "sua carta no lugar da outra carta. Então o Ladrão pode olhar sua nova carta. " +
            "O jogador que recebe a carta do Ladrão está no time da vila. O Ladrão fica no " +
            "time da carta que ele pegou, no entanto, ele não faz a ação da nova carta durante a noite." +
            "<br>Se o Ladrão escolher não roubar a carta do outro jogador, ele permanece como Ladrão. <br> " +
            "<span> O Ladrão está no time do vilarejo.</span>"
    },
    {
        id: 10,
        interval: longIntervalBetweenCharacters,
        dusker: false,
        img: 'bruxa.jpg',
        name: 'Bruxa',
        slug: 'bruxa',
        originalOrder: '6B',
        description: "A Bruxa acorda e pode olhar uma das cartas do centro." +
            "Se ela olhar uma carta do centro, deve trocá-la com a carta de qualquer jogador (inclusive a própria). " +
            "A carta do jogador trocado deve ser colocada de volta no centro, no mesmo lugar, sem olhar para ela. " +
            "A Bruxa faz parte da <strong>equipe da vila</strong>, a menos que troque sua própria carta por uma de outra equipe."
    },
    {
        id: 11,
        interval: veryLongIntervalBetweenCharacters,
        dusker: false,
        img: 'encrenqueira.jpg',
        name: 'Encrenqueira',
        slug: 'encrenqueira',
        originalOrder: '7',
        description: "A noite, a Encrenqueira acorda e pode trocar as cartas de dois outros jogadores sem olhar as " +
            "cartas. Os jogadores que recebem as cartas diferentes são agora do time da carta que eles receberam, " +
            "mesmo que eles não saibam e essa função permanece ate o final do jogo. <br>" +
            "<span> O encrenqueiro esta no time do vilarejo.</span>"
    },
    {
        id: 12,
        interval: veryLongIntervalBetweenCharacters,
        dusker: false,
        img: 'idiota-vila.jpg',
        name: 'Idiota da Vila',
        slug: 'idiota-da-vila',
        originalOrder: '7B',
        description: "O Idiota da Vila acorda e pode mover as cartas de todos os jogadores, exceto a sua própria, " +
            "uma posição para a esquerda ou para a direita. Se ele decidir mover as cartas, deve mover todas as cartas dos " +
            "jogadores (exceto a dele), não pode mover cartas do centro, nem cartas com ficha de escudo. <br> " +
            "<span>O Idiota da Vila faz parte da equipe da vila.</span>"
    },
    {
        id: 13,
        interval: longIntervalBetweenCharacters,
        dusker: false,
        img: 'bebado.jpg',
        name: 'Bêbado',
        slug: 'bebado',
        originalOrder: '8',
        description: "O Bêbado está tão bêbado que não se lembra da sua função. Quando for a hora de acordar " +
            "durante a noite, ele deve trocar sua carta de Bêbado por qualquer carta do centro, mas ele " +
            "não olha a sua carta. O Bêbado assume a função da carta sua frente (mesmo que ele não saiba que função é essa) " +
            "e está no time dessa função."
    },
    {
        id: 14,
        interval: intervalBetweenCharacters,
        dusker: false,
        img: 'sonambula.jpg',
        name: 'Sonâmbula',
        slug: 'sonambula',
        originalOrder: '9',
        description: " A Sonâmbula acorda e procura pela sua carta (pra ver se ela mudou). Apenas use a Sonâmbula" +
            "se o ladrão ou encrenqueira estiverem no jogo. <span> A Sonâmbula está no time do vilarejo.</span>"
    },
    {
        id: 15,
        interval: veryLongIntervalBetweenCharacters,
        dusker: false,
        img: 'revelador.jpg',
        slug: 'revelador',
        name: 'Revelador',
        originalOrder: '10',
        description: "O Revelador acorda e pode virar a carta de outro jogador para cima." +
            "Se a carta revelada for um Lobisomem ou um Enforcado (Tanner), ele deve virá-la novamente para baixo." +
            "Se o Revelador revelar uma carta de Doppelgänger ou Investigador Paranormal (P.I.), ele a deixa virada para cima." +
            "O Revelador só pode virar uma carta para cima, mesmo que revele um Lobisomem ou Enforcado." +
            "<br> <span>O Revelador faz parte da equipe da vila.</span>"
    },
    {
        id: 16,
        interval: longIntervalBetweenCharacters,
        dusker: false,
        img: 'curador.jpg',
        name: 'Curador',
        slug: 'curador',
        originalOrder: '11',
        description: "O Curador acorda e pode escolher e colocar uma ficha de Artefato virada para baixo, " +
            "aleatoriamente (sem olhar) sobre a carta de qualquer jogador (inclusive a sua própria). " +
            "Consulte a lista de artefatos para ver os efeitos de cada um. " +
            "O Curador não pode colocar uma ficha de Artefato em uma carta que tenha uma ficha de escudo. " +
            "<br> <span>O Curador faz parte da equipe da vila.</span>"
    },
    {
        id: 17,
        interval: noInterval,
        dusker: false,
        img: 'caçador.jpg',
        name: 'Caçador',
        slug: 'caçador',
        originalOrder: '999',
        description: "O Caçador não acorda durante a noite. Se o Caçador for eliminado,o outro jogador que ele estiver apontando é eliminado também." +
            "<br> <span> O Caçador está no time do vilarejo.</span>"
    },
    {
        id: 18,
        interval: noInterval,
        dusker: false,
        img: 'suicida.jpg',
        name: 'Suicida',
        slug: 'suicida',
        originalOrder: '999',
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
        interval: noInterval,
        dusker: false,
        img: 'dreamwolf.jpg',
        slug: 'lobisomem-dos-sonhos',
        name: 'Lobisomem Sonhador',
        originalOrder: '999',
        description: "O Lobisomem Sonhador não acorda com os outros Lobisomens." +
            "Quando os Lobisomens são chamados à noite, ele apenas levanta o polegar, para que os outros Lobisomens saibam quem ele é. " +
            "Se estiver jogando com o Capanga (Minion), o Lobisomem Sonhador também levanta o polegar durante a fase noturna do Capanga. " +
            "<br> <span>O Lobisomem Sonhador faz parte da equipe dos Lobisomens.</span>"
    }

]


export function compareOrder(a: string, b: string) {
    const regex = /^(-?\d+)([a-z]*)$/i;
    const [, numA, sufA] = a.match(regex) || [];
    const [, numB, sufB] = b.match(regex) || [];

    if (+numA !== +numB) {
        return +numA - +numB;
    }

    // ordem das letras: '' < 'a' < 'b'...
    return sufA.localeCompare(sufB);
}

export function isDusker(order: string): boolean {
    const regex = /^(-?\d+)([a-z]*)$/i;
    const match = order.match(regex);

    if (!match) return false;

    const num = Number(match[1]);
    return num < 0;
}
