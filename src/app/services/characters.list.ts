export interface Character {
    name: string,
    img: string,
    audios: Array<string>,
    interval: number,
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
    {
        name: 'Bruxa',
        img: '/assets/sprites/06-b-bruxa.jpg',
        audios: [
            '/assets/audios/bruxa/bruxa-1.mp3',
            '/assets/audios/bruxa/bruxa-2.mp3',
        ],
        interval: 2000,
    },
    {
        name: 'Encrenqueira',
        img: '/assets/sprites/06-encrenqueira.jpg',
        audios: [
            '/assets/audios/encrenqueira/encrenqueira-1.mp3',
            '/assets/audios/encrenqueira/encrenqueira-2.mp3',
        ],
        interval: 2000,
    },
    {
        name: 'Bêbado',
        img: '/assets/sprites/07-bebado.jpg',
        audios: [
            '/assets/audios/bebado/bebado-1.mp3',
            '/assets/audios/bebado/bebado-2.mp3',
        ],
        interval: 2000,
    },
    {
        name: 'Sonâmbula',
        img: '/assets/sprites/08-sonambula.jpg',
        audios: [
            '/assets/audios/sonambula/sonambula-1.mp3',
            '/assets/audios/sonambula/sonambula-2.mp3',
        ],
        interval: 2000,
    },
]

