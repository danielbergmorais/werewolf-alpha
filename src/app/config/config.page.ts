import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../home/home.page';

@Component({
    selector: 'app-config',
    templateUrl: './config.page.html',
    styleUrls: ['./config.page.scss'],
})

export class ConfigPage implements OnInit {

    public personagens: Array<{
        id: string,
        img: string,
        img_grey: string,
    }>

    public characters: Array<Character>

    private selecionados: Array<String>
    private selecteds: Array<String>

    constructor(private router: Router) {

        this.personagens = [
            {
                id: 'vampire',
                img: '/assets/vampire/vampiros/vampiro.jpg',
                img_grey: '/assets/vampire/vampiros/vampiro-grey.jpg',
            },
            {
                id: 'conde',
                img: '/assets/vampire/conde/conde.jpg',
                img_grey: '/assets/vampire/conde/conde-grey.jpg',
            },
            {
                id: 'renfield',
                img: '/assets/vampire/renfield/renfield.jpg',
                img_grey: '/assets/vampire/renfield/renfield-grey.jpg',
            },
            {
                id: 'diseased',
                img: '/assets/vampire/doente/doente.jpg',
                img_grey: '/assets/vampire/doente/doente-grey.jpg',
            },
            {
                id: 'cupid',
                img: '/assets/vampire/cupido/cupido.jpg',
                img_grey: '/assets/vampire/cupido/cupido-grey.jpg',
            },
            {
                id: 'instigator',
                img: '/assets/vampire/instigador/instigador.jpg',
                img_grey: '/assets/vampire/instigador/instigador-grey.jpg',
            },
            {
                id: 'priest',
                img: '/assets/vampire/sacerdote/sacerdote.jpg',
                img_grey: '/assets/vampire/sacerdote/sacerdote-grey.jpg',
            },
            {
                id: 'assassin',
                img: '/assets/vampire/assassino/assassino.jpg',
                img_grey: '/assets/vampire/assassino/assassino-grey.jpg',
            },
            {
                id: 'assassin-apprentice',
                img: '/assets/vampire/aprendiz-assassino/aprendiz-assassino.jpg',
                img_grey: '/assets/vampire/aprendiz-assassino/aprendiz-assassino-grey.jpg',
            },




            {
                id: 'wf',
                img: '/assets/sprites/01-lobisomem.jpg',
                img_grey: '/assets/sprites/01-lobisomem-grey.jpg',
            },
            {
                id: 'alpha',
                img: '/assets/daybreak/alpha-wolf/alpha-wolf.jpg',
                img_grey: '/assets/daybreak/alpha-wolf/alpha-wolf-grey.jpg',
            },
            {
                id: 'mystic',
                img: '/assets/daybreak/mystic-wolf/mystic-wolf.jpg',
                img_grey: '/assets/daybreak/mystic-wolf/mystic-wolf-grey.jpg',
            },



            {
                id: 'mi',
                img: '/assets/sprites/02-minion.jpg',
                img_grey: '/assets/sprites/02-minion-grey.jpg',
            },
            {
                id: 'ma',
                img: '/assets/sprites/03-mason.jpg',
                img_grey: '/assets/sprites/03-mason-grey.jpg',
            },
            {
                id: 'vi',
                img: '/assets/sprites/04-vidente.jpg',
                img_grey: '/assets/sprites/04-vidente-grey.jpg',
            },
            {
                id: 'aprendiz-vidente',
                img: '/assets/daybreak/aprendiz-vidente/aprendiz-vidente.jpg',
                img_grey: '/assets/daybreak/aprendiz-vidente/aprendiz-vidente-grey.jpg',
            },
            {
                id: 'iv',
                img: '/assets/sprites/05-c-investigador-paranormal.jpg',
                img_grey: '/assets/sprites/05-c-investigador-paranormal-grey.jpg',
            },
            {
                id: 'atirador',
                img: '/assets/vampire/atirador/atirador.jpg',
                img_grey: '/assets/vampire/atirador/atirador-grey.jpg',
            },
            {
                id: 'la',
                img: '/assets/sprites/05-ladrao.jpg',
                img_grey: '/assets/sprites/05-ladrao-grey.jpg',
            },
            {
                id: 'wt',
                img: '/assets/sprites/06-b-bruxa.jpg',
                img_grey: '/assets/sprites/06-b-bruxa-grey.jpg',
            },
            {
                id: 'pickpocket',
                img: '/assets/vampire/pickpocket/pickpocket.jpg',
                img_grey: '/assets/vampire/pickpocket/pickpocket.jpg',
            },

            {
                id: 'en',
                img: '/assets/sprites/06-encrenqueira.jpg',
                img_grey: '/assets/sprites/06-encrenqueira-grey.jpg',
            },
            {
                id: 'idiot',
                img: '/assets/daybreak/idiota-vila/idiota-vila.jpg',
                img_grey: '/assets/daybreak/idiota-vila/idiota-vila-grey.jpg',
            },
            {
                id: 'gremlin',
                img: '/assets/vampire/gremlin/gremlin.jpg',
                img_grey: '/assets/vampire/gremlin/gremlin-grey.jpg',
            },
            {
                id: 'be',
                img: '/assets/sprites/07-bebado.jpg',
                img_grey: '/assets/sprites/07-bebado-grey.jpg',
            },
            {
                id: 'so',
                img: '/assets/sprites/08-sonambula.jpg',
                img_grey: '/assets/sprites/08-sonambula-grey.jpg',
            },
            {
                id: 'revelador',
                img: '/assets/daybreak/revelador/revelador.jpg',
                img_grey: '/assets/daybreak/revelador/revelador-grey.jpg',
            },

        ]

        this.characters = [
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

        this.selecionados = []
        this.selecteds = []
        let ls = localStorage.getItem("selecionados");
        let ls2 = localStorage.getItem("selecteds");

        if (ls) {
            this.selecionados = JSON.parse(ls)
        }

        if (ls2) {
            this.selecteds = JSON.parse(ls2)
        }
    }

    confirm() {
        localStorage.setItem("selecionados", JSON.stringify(this.selecionados));
        localStorage.setItem("selecteds", JSON.stringify(this.characters));
    }
    reset() {
        //this.router.navigate(['/home'])
    }

    onSelect(id: string) {
        let auxiliar = this.selecionados
        const selected = document.getElementById('config_' + id);

        if (this.selecionados.includes(id)) {

            if (selected)
                selected.classList.remove("on")

            auxiliar = this.selecionados.filter((item) => {
                return item !== id
            })
        } else {
            if (selected)
                selected.classList.add("on")
            auxiliar.push(id)
        }
        this.selecionados = auxiliar
    }

    ngAfterViewInit() {
        let ls = localStorage.getItem("selecionados");
        let salvos = []
        if (ls) {
            salvos = JSON.parse(ls)
        }
        salvos.forEach((item: string) => {
            const selected = document.getElementById('config_' + item);
            if (selected) selected.classList.add("on")
        })
    }

    ngOnInit() {

    }

}
