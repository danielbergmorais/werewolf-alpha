import { Component, OnInit } from '@angular/core';
import { charactersList, vampireList } from '../services/characters.list';

interface Artifacts {
    nameOriginal: string;
    nameNewVersion: string;
    description: string;
    imgOriginalSrc: string;
    imgNewSrc: string;
}

interface Marks {
    name: string;
    description: string;
    imgSrc: string;
}

@Component({
    selector: 'app-rules',
    templateUrl: './rules.page.html',
    styleUrls: ['./rules.page.scss'],
})

export class RulesPage implements OnInit {
    charactersList = charactersList;
    vampireList = vampireList;

    artifactsList: Array<Artifacts> = [
        {
            nameOriginal: 'Claw of the Werewolf',
            nameNewVersion: 'Garra do lobisomem',
            description: 'Transforma o jogador em um lobisomem',
            imgOriginalSrc: 'assets/artifacts/claw.jpg',
            imgNewSrc: 'assets/artifacts/claw.jpg'
        },
        {
            nameOriginal: 'Brand of the Villager',
            nameNewVersion: 'Marca do aldeão',
            description: 'Transforma o jogador em um aldeão, agora não possue mais habilidades especiais',
            imgOriginalSrc: 'assets/artifacts/brand.jpg',
            imgNewSrc: 'assets/artifacts/chapeu.jpg'
        },
        {
            nameOriginal: 'Cudgel of the Tanner',
            nameNewVersion: 'Porrete do suicida',
            description: 'Transforma o jogador em um suicida. Você só vence se for eliminado, se você for eliminado, o time dos lobisomens não vencem, Se você for um lobisomem e for eliminado, você e o time da vila ganham.',
            imgOriginalSrc: 'assets/artifacts/cudgel.jpg',
            imgNewSrc: 'assets/artifacts/picareta.jpg'
        },
        {
            nameOriginal: 'Void of Nothingness',
            nameNewVersion: 'Vazio do nada',
            description: 'Este artefato não faz nada.',
            imgOriginalSrc: 'assets/artifacts/void.jpg',
            imgNewSrc: 'assets/artifacts/vazio.jpg'
        },
        {
            nameOriginal: 'Mask of Muting',
            nameNewVersion: 'Máscara do silêncio',
            description: 'Este artefato impede o jogador de falar durante o dia. O jogador pode usar sinais de mãos ou mimica, contanto que permaneça em silêncio.',
            imgOriginalSrc: 'assets/artifacts/mask.jpg',
            imgNewSrc: 'assets/artifacts/mascara.jpg'
        },
        {
            nameOriginal: 'Shroud of Shame',
            nameNewVersion: 'Manto da Vergonha',
            description: 'O manto faz o jogador se virar de costas, com o rosto longe dos outros jogadores, o jogador pode falar mas não pode olhar para outros jogadores ou tokens. Na hora da votação ele também não pode virar e deve tentar apontar para quem deseja votar.',
            imgOriginalSrc: 'assets/artifacts/void.jpg',
            imgNewSrc: 'assets/artifacts/manto.jpg'
        },



    ];

    marksList: Array<Marks> = [
        {
            name: 'Mark of Vampire',
            description: "A marca é dada a qualquer jogador não vampiro, por escolha dos vampiros no jogo (Vampiro, Conde, Mestre). " +
                "O jogador que recebeu essa marca é um vampiro , mas ele ainda pode usar sua ação durante a noite e votar no final do jogo." +
                "Se o mestre acabar com essa marca ele ainda mantem o poder durante a votação. <br> Se o Renfield terminar com essa marca ele se torna um vampiro.",
            imgSrc: 'assets/marks/mark-vampire.png'
        },
        {
            name: 'Mark of fear',
            description: "A marca é dada a qualquer um jogador não vampiro, pelo jogador Conde. " +
                "O jogador que recebeu essa marca não pode usar sua habilidade especial durante a noite. " +
                "Se ele tiver a ação durante a Dusk ele ainda podera realiza-la, pois ele não sabe que esta com essa marca ate chegar a noite. ",
            imgSrc: 'assets/marks/mark-fear.png'
        },
        {
            name: 'Mark of Bat',
            description: "O Renfield reivindica essa marca para si próprio e coloca sua marca no lugar vazio no tabuleiro." +
                "Essa marca não tem nenhum efeito especial.",
            imgSrc: 'assets/marks/mark-bat.png'
        },
        {
            name: 'Mark of Diseased',
            description: "O doente (diseased) coloca essa marca em um jogador do lado esquero ou direito dele." +
                "Durante a votação qualquer jogador que votar em um jogaro com a marca doente não poderá ganhar.",
            imgSrc: 'assets/marks/mark-diseased.png'
        },
        {
            name: 'Mark of Traitor',
            description: "O Instigador escolhe um jogador que ira ser o traidor do seu time, dando a ele a marca do traidor." +
                "O jogador com a marca do traidor só poderá vencer se alguem do seu proprio time for eliminado, se ele for o unico membro do seu time essa marca não tem efeito.",
            imgSrc: 'assets/marks/mark-traitor.png'
        },
        {
            name: 'Mark of Clarity',
            description: "Uma marca de claridade é dada a todos os jogadores virado para baixo antes do jogo começar. A marca de claridade do tabuleiro é dadoa pelo jogador Sacerdote (Priest) para remover outras marcas que possam terem sidos trocadas." +
                "Jogadores com essa marca tem sua função e time definidas pela carta que possuem.",
            imgSrc: 'assets/marks/mark-clarity.png'
        },
        {
            name: 'Mark of love',
            description: "O cupido junta duas pessoas com essa marca, fazendo com que elas se tornem amantes." +
                "Imediatamente após a fase da noite começar, os amantes acordam e se reconhecem. Se um jogador com a marca do amor for eliminado, o outro jogador também é eliminado imediatamente." +
                "Se o jogador Mestre (The Master) receber essa marca e o outro jogador com essa marca for eliminado, o Mestre também é eliminado (Mesmo se um jogador vampiro tiver votado nele). <br>",
            imgSrc: 'assets/marks/mark-love.png'
        },
        {
            name: 'Mark of Assassin',
            description: "O Assassino dar a marca do alvo a qualquer um jogador. O assassino somente vence se o jogador que tiver essa marca de alvo for eliminado.",
            imgSrc: 'assets/marks/mark-assassin.png'
        },
    ]
    constructor() { }

    ngOnInit() {
    }

}
