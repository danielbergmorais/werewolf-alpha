import { Component, OnInit } from '@angular/core';
import { charactersList, vampireList } from '../services/characters.list';

interface Artifacts {
    nameOriginal: string;
    nameNewVersion: string;
    description: string;
    imgOriginalSrc: string;
    imgNewSrc: string;
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

    constructor() { }

    ngOnInit() {
    }

}
