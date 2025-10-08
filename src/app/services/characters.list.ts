export interface Character {
    name: string, // nome do personagem
    img: string,// caminho da imagem
    audios: Array<string>,  // caminhos dos áudios
    interval: number,// intervalo entre os áudios
}

export const charactersList = [
    {
        name: 'Lobisomem',
        img: '/assets/sprites/01-lobisomem.jpg',
        audios: [
            '/assets/audios/lobisomem/lobisomem-1.mp3',
            '/assets/audios/lobisomem/lobisomem-2.mp3',
        ],
        interval: 2500,
    },
    {
        name: 'Minion',
        img: '/assets/sprites/02-minion.jpg',
        audios: [
            '/assets/audios/minion/minion-1.mp3',
            '/assets/audios/minion/minion-2.mp3',
        ],
        interval: 2500,
    },
    {
        name: 'Mason',
        img: '/assets/sprites/03-mason.jpg',
        audios: [
            '/assets/audios/mason/mason-1.mp3',
            '/assets/audios/mason/mason-2.mp3',
        ],
        interval: 2000,
    },
    {
        name: 'Vidente',
        img: '/assets/sprites/04-vidente.jpg',
        audios: [
            '/assets/audios/vidente/vidente-1.mp3',
            '/assets/audios/vidente/vidente-2.mp3',
        ],
        interval: 2000,
    },
    {
        name: 'Investigador Paranormal',
        img: '/assets/sprites/05-c-investigador-paranormal.jpg',
        audios: [
            '/assets/audios/investigador-paranormal/investigador-paranormal-1.mp3',
            '/assets/audios/investigador-paranormal/investigador-paranormal-2.mp3',
        ],
        interval: 2000,
    },
    {
        name: 'Ladrão',
        img: '/assets/sprites/05-ladrao.jpg',
        audios: [
            '/assets/audios/ladrao/ladrao-1.mp3',
            '/assets/audios/ladrao/ladrao-2.mp3',
        ],
        interval: 2000,
    },
]

