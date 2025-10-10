export interface Character {
    id: number,
    name: string,
    img: string,
    audios: Array<string>,
    interval: number,
}

export const charactersList = [
    {
        id: 1,
        name: 'Lobisomem',
        img: '/assets/sprites/01-lobisomem.jpg',
        audios: [
            '/assets/audios/lobisomem/lobisomem-1.mp3',
            '/assets/audios/lobisomem/lobisomem-2.mp3',
        ],
        interval: 2500,
    },
    {
        id: 2,
        name: 'Minion',
        img: '/assets/sprites/02-minion.jpg',
        audios: [
            '/assets/audios/minion/minion-1.mp3',
            '/assets/audios/minion/minion-2.mp3',
        ],
        interval: 2500,
    },
    {
        id: 3,
        name: 'Mason',
        img: '/assets/sprites/03-mason.jpg',
        audios: [
            '/assets/audios/mason/mason-1.mp3',
            '/assets/audios/mason/mason-2.mp3',
        ],
        interval: 2000,
    },
    {
        id: 4,
        name: 'Vidente',
        img: '/assets/sprites/04-vidente.jpg',
        audios: [
            '/assets/audios/vidente/vidente-1.mp3',
            '/assets/audios/vidente/vidente-2.mp3',
        ],
        interval: 3000,
    },
    {
        id: 5,
        name: 'Investigador Paranormal',
        img: '/assets/sprites/05-c-investigador-paranormal.jpg',
        audios: [
            '/assets/audios/investigador-paranormal/investigador-paranormal-1.mp3',
            '/assets/audios/investigador-paranormal/investigador-paranormal-2.mp3',
        ],
        interval: 2000,
    },
    {
        id: 6,
        name: 'Ladrão',
        img: '/assets/sprites/05-ladrao.jpg',
        audios: [
            '/assets/audios/ladrao/ladrao-1.mp3',
            '/assets/audios/ladrao/ladrao-2.mp3',
        ],
        interval: 2000,
    },
    {
        id: 7,
        name: 'Bruxa',
        img: '/assets/sprites/06-b-bruxa.jpg',
        audios: [
            '/assets/audios/bruxa/bruxa-1.mp3',
            '/assets/audios/bruxa/bruxa-2.mp3',
        ],
        interval: 2000,
    },
    {
        id: 8,
        name: 'Encrenqueira',
        img: '/assets/sprites/06-encrenqueira.jpg',
        audios: [
            '/assets/audios/encrenqueira/encrenqueira-1.mp3',
            '/assets/audios/encrenqueira/encrenqueira-2.mp3',
        ],
        interval: 4000,
    },
    {
        id: 9,
        name: 'Bêbado',
        img: '/assets/sprites/07-bebado.jpg',
        audios: [
            '/assets/audios/bebado/bebado-1.mp3',
            '/assets/audios/bebado/bebado-2.mp3',
        ],
        interval: 3000,
    },
    {
        id: 10,
        name: 'Sonâmbula',
        img: '/assets/sprites/08-sonambula.jpg',
        audios: [
            '/assets/audios/sonambula/sonambula-1.mp3',
            '/assets/audios/sonambula/sonambula-2.mp3',
        ],
        interval: 3000,
    },
]

