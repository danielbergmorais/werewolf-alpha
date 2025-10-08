import { Component } from '@angular/core';
import { NativeAudio } from '@capacitor-community/native-audio';
import { Router } from '@angular/router';
import { audioService } from '../services/audio.service';
import { Character, charactersList } from '../services/characters.list';

export interface Personagem {
    id: string,
    img: string,
    img_grey: string,
    audio_begin: string,
    audio_end: string,
    timeout_begin: number,
    timeout_end: number,
    tocar: Function,
}

function waitForAWhile(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})

export class HomePage {
    private personagens_config: Array<String>
    public personagens: Array<Personagem>
    public vampires: Array<Personagem>
    public playingAudio: boolean = false;
    private selecteds: Character[] = []



    /*** Caminhos diferentes para browser e versão compilada para android **/

    /**  Versão browser */
    //   private path_android = 'public/assets/sounds' 

    /**  Versão android */
    private path_android = '/'

    constructor(private router: Router) {
        this.bgAudio();

        /***** Vampire *****/
        this.vampires = [
            {
                id: 'vampire',
                img: '/assets/vampire/vampiros/vampiro.jpg',
                img_grey: '/assets/vampire/vampiros/vampiro-grey.jpg',
                audio_begin: this.path_android + '/vampire/vampiros/vampiros.mp3',
                audio_end: this.path_android + '/vampire/vampiros/vampiros-b.mp3',
                tocar: this.lobisomen,
                timeout_begin: 9000,
                timeout_end: 4000,
            },
            {
                id: 'conde',
                img: '/assets/vampire/conde/conde.jpg',
                img_grey: '/assets/vampire/conde/conde-grey.jpg',
                audio_begin: this.path_android + '/vampire/conde/conde.mp3',
                audio_end: this.path_android + '/vampire/conde/conde-b.mp3',
                tocar: this.lobisomen,
                timeout_begin: 9000,
                timeout_end: 4000,
            },
            {
                id: 'renfield',
                img: '/assets/vampire/renfield/renfield.jpg',
                img_grey: '/assets/vampire/renfield/renfield-grey.jpg',
                audio_begin: this.path_android + '/vampire/renfield/renfield.mp3',
                audio_end: this.path_android + '/vampire/renfield/renfield-b.mp3',
                tocar: this.lobisomen,
                timeout_begin: 11000,
                timeout_end: 4000,
            },
            {
                id: 'diseased',
                img: '/assets/vampire/doente/doente.jpg',
                img_grey: '/assets/vampire/doente/doente-grey.jpg',
                audio_begin: this.path_android + '/vampire/doente/doente.mp3',
                audio_end: this.path_android + '/vampire/doente/doente-b.mp3',
                tocar: this.lobisomen,
                timeout_begin: 7000,
                timeout_end: 4000,
            },
            {
                id: 'cupid',
                img: '/assets/vampire/cupido/cupido.jpg',
                img_grey: '/assets/vampire/cupido/cupido-grey.jpg',
                audio_begin: this.path_android + '/vampire/cupido/cupido.mp3',
                audio_end: this.path_android + '/vampire/cupido/cupido-b.mp3',
                tocar: this.lobisomen,
                timeout_begin: 10000,
                timeout_end: 4000,
            },
            {
                id: 'instigator',
                img: '/assets/vampire/instigador/instigador.jpg',
                img_grey: '/assets/vampire/instigador/instigador-grey.jpg',
                audio_begin: this.path_android + '/vampire/instigador/instigador.mp3',
                audio_end: this.path_android + '/vampire/instigador/instigador-b.mp3',
                tocar: this.lobisomen,
                timeout_begin: 7500,
                timeout_end: 4000,
            },
            {
                id: 'priest',
                img: '/assets/vampire/sacerdote/sacerdote.jpg',
                img_grey: '/assets/vampire/sacerdote/sacerdote-grey.jpg',
                audio_begin: this.path_android + '/vampire/sacerdote/sacerdote.mp3',
                audio_end: this.path_android + '/vampire/sacerdote/sacerdote-b.mp3',
                tocar: this.lobisomen,
                timeout_begin: 9000,
                timeout_end: 4000,
            },
            {
                id: 'assassin',
                img: '/assets/vampire/assassino/assassino.jpg',
                img_grey: '/assets/vampire/assassino/assassino-grey.jpg',
                audio_begin: this.path_android + '/vampire/assassino/assassino.mp3',
                audio_end: this.path_android + '/vampire/assassino/assassino-b.mp3',
                tocar: this.lobisomen,
                timeout_begin: 8000,
                timeout_end: 4000,
            },
            {
                id: 'assassin-apprentice',
                img: '/assets/vampire/aprendiz-assassino/aprendiz-assassino.jpg',
                img_grey: '/assets/vampire/aprendiz-assassino/aprendiz-assassino-grey.jpg',
                audio_begin: this.path_android + '/vampire/aprendiz-assassino/aprendiz-assassino.mp3',
                audio_end: this.path_android + '/vampire/aprendiz-assassino/aprendiz-assassino-b.mp3',
                tocar: this.lobisomen,
                timeout_begin: 9000,
                timeout_end: 4000,
            },
        ]

        /***** WEREWOLF/Daybreak *****/
        this.personagens = [

            {
                id: 'wf',
                img: '/assets/sprites/01-lobisomem.jpg',
                img_grey: '/assets/sprites/01-lobisomem-grey.jpg',
                audio_begin: this.path_android + '/characters/01-lobisomen.-a.mp3',
                audio_end: this.path_android + '/characters/01-lobisomen.-b.mp3',
                tocar: this.lobisomen,
                timeout_begin: 9000,
                timeout_end: 4000,
            },
            {
                id: 'alpha',
                img: '/assets/daybreak/alpha-wolf/alpha-wolf.jpg',
                img_grey: '/assets/daybreak/alpha-wolf/alpha-wolf-grey.jpg',
                audio_begin: this.path_android + '/daybreak/alpha-wolf/alpha-wolf.mp3',
                audio_end: this.path_android + '/daybreak/alpha-wolf/alpha-wolf-b.mp3',
                tocar: this.lobisomen,
                timeout_begin: 8000,
                timeout_end: 4000,
            },
            {
                id: 'mystic',
                img: '/assets/daybreak/mystic-wolf/mystic-wolf.jpg',
                img_grey: '/assets/daybreak/mystic-wolf/mystic-wolf-grey.jpg',
                audio_begin: this.path_android + '/daybreak/mystic-wolf/mystic-wolf.mp3',
                audio_end: this.path_android + '/daybreak/mystic-wolf/mystic-wolf-b.mp3',
                tocar: this.lobisomen,
                timeout_begin: 9000,
                timeout_end: 4000,
            },

            {
                id: 'mi',
                img: '/assets/sprites/02-minion.jpg',
                img_grey: '/assets/sprites/02-minion-grey.jpg',
                audio_begin: this.path_android + '/characters/02-minion-a.mp3',
                audio_end: this.path_android + '/characters/02-minion-b.mp3',
                tocar: this.minion,
                timeout_begin: 7000,
                timeout_end: 7000,
            },
            {
                id: 'ma',
                img: '/assets/sprites/03-mason.jpg',
                img_grey: '/assets/sprites/03-mason-grey.jpg',
                audio_begin: this.path_android + '/characters/03-mason-a.mp3',
                audio_end: this.path_android + '/characters/03-mason-b.mp3',
                tocar: this.mason,
                timeout_begin: 3000,
                timeout_end: 4000,
            },
            {
                id: 'vi',
                img: '/assets/sprites/04-vidente.jpg',
                img_grey: '/assets/sprites/04-vidente-grey.jpg',
                audio_begin: this.path_android + '/characters/04-vidente-a.mp3',
                audio_end: this.path_android + '/characters/04-vidente-b.mp3',
                tocar: this.vidente,
                timeout_begin: 6000,
                timeout_end: 6000,
            },
            {
                id: 'aprendiz-vidente',
                img: '/assets/vampire/aprendiz-vidente/aprendiz-vidente.jpg',
                img_grey: '/assets/vampire/aprendiz-vidente/aprendiz-vidente-grey.jpg',
                audio_begin: this.path_android + '/vampire/aprendiz-vidente/aprendiz-vidente.mp3',
                audio_end: this.path_android + '/vampire/aprendiz-vidente/aprendiz-vidente-b.mp3',
                tocar: this.vidente,
                timeout_begin: 7000,
                timeout_end: 6000,
            },
            {
                id: 'iv',
                img: '/assets/sprites/05-c-investigador-paranormal.jpg',
                img_grey: '/assets/sprites/05-c-investigador-paranormal-grey.jpg',
                audio_begin: this.path_android + '/characters/05-c-investigador-paranormal.mp3',
                audio_end: this.path_android + '/characters/05-c-investigador-paranormal-b.mp3',
                tocar: this.investigador,
                timeout_begin: 12000,
                timeout_end: 5000,
            },
            {
                id: 'atirador',
                img: '/assets/vampire/atirador/atirador.jpg',
                img_grey: '/assets/vampire/atirador/atirador-grey.jpg',
                audio_begin: this.path_android + '/vampire/atirador/atirador.mp3',
                audio_end: this.path_android + '/vampire/atirador/atirador-b.mp3',
                tocar: this.vidente,
                timeout_begin: 9000,
                timeout_end: 6000,
            },
            {
                id: 'la',
                img: '/assets/sprites/05-ladrao.jpg',
                img_grey: '/assets/sprites/05-ladrao-grey.jpg',
                audio_begin: this.path_android + '/characters/05-ladrao-a.mp3',
                audio_end: this.path_android + '/characters/05-ladrao-b.mp3',
                tocar: this.ladrao,
                timeout_begin: 7000,
                timeout_end: 5000,
            },
            {
                id: 'wt',
                img: '/assets/sprites/06-b-bruxa.jpg',
                img_grey: '/assets/sprites/06-b-bruxa-grey.jpg',
                audio_begin: this.path_android + '/characters/06-c-bruxa.mp3',
                audio_end: this.path_android + '/characters/06-c-bruxa-b.mp3',
                tocar: this.bruxa,
                timeout_begin: 10000,
                timeout_end: 7000,
            },
            {
                id: 'pickpocket',
                img: '/assets/vampire/pickpocket/pickpocket.jpg',
                img_grey: '/assets/vampire/pickpocket/pickpocket-grey.jpg',
                audio_begin: this.path_android + '/vampire/pickpocket/pickpocket.mp3',
                audio_end: this.path_android + '/vampire/pickpocket/pickpocket-b.mp3',
                tocar: this.bruxa,
                timeout_begin: 9000,
                timeout_end: 5000,
            },
            {
                id: 'en',
                img: '/assets/sprites/06-encrenqueira.jpg',
                img_grey: '/assets/sprites/06-encrenqueira-grey.jpg',
                audio_begin: this.path_android + '/characters/06-encrenqueira-a.mp3',
                audio_end: this.path_android + '/characters/06-encrenqueira-b.mp3',
                tocar: this.encrenqueira,
                timeout_begin: 8000,
                timeout_end: 5000,
            },
            {
                id: 'idiot',
                img: '/assets/daybreak/idiota-vila/idiota-vila.jpg',
                img_grey: '/assets/daybreak/idiota-vila/idiota-vila-grey.jpg',
                audio_begin: this.path_android + '/daybreak/idiota-vila/idiota-vila.mp3',
                audio_end: this.path_android + '/daybreak/idiota-vila/idiota-vila-b.mp3',
                tocar: this.bruxa,
                timeout_begin: 14000,
                timeout_end: 6000,
            },
            {
                id: 'gremlin',
                img: '/assets/vampire/gremlin/gremlin.jpg',
                img_grey: '/assets/vampire/gremlin/gremlin-grey.jpg',
                audio_begin: this.path_android + '/vampire/gremlin/gremlin.mp3',
                audio_end: this.path_android + '/vampire/gremlin/gremlin-b.mp3',
                tocar: this.bruxa,
                timeout_begin: 8000,
                timeout_end: 5000,
            },
            {
                id: 'be',
                img: '/assets/sprites/07-bebado.jpg',
                img_grey: '/assets/sprites/07-bebado-grey.jpg',
                audio_begin: this.path_android + '/characters/07-bebado-a.mp3',
                audio_end: this.path_android + '/characters/07-bebado-b.mp3',
                tocar: this.bebado,
                timeout_begin: 6000,
                timeout_end: 7000,
            },
            {
                id: 'so',
                img: '/assets/sprites/08-sonambula.jpg',
                img_grey: '/assets/sprites/08-sonambula-grey.jpg',
                audio_begin: this.path_android + '/characters/08-sonambula-a.mp3',
                audio_end: '',
                tocar: this.sonambula,
                timeout_begin: 7500,
                timeout_end: 0,
            },
            {
                id: 'revelador',
                img: '/assets/daybreak/revelador/revelador.jpg',
                img_grey: '/assets/daybreak/revelador/revelador-grey.jpg',
                audio_begin: this.path_android + '/daybreak/revelador/revelador.mp3',
                audio_end: this.path_android + '/daybreak/revelador/revelador-b.mp3',
                tocar: this.bruxa,
                timeout_begin: 12000,
                timeout_end: 4000,
            },
        ]
        this.personagens_config = []

        let ls = localStorage.getItem("selecteds");
        if (ls) {
            this.selecteds = JSON.parse(ls)
        }
    }

    async newPlay() {
        this.playingAudio = true;

        audioService.playLoop('assets/sounds/bg.mp3');
        await audioService.waitForAWhile(2000);
        await audioService.playAudio('assets/sounds/begin.mp3');
        await audioService.playAudiosSequentially(this.selecteds);
        await audioService.playAudio('assets/sounds/end.mp3');
        await audioService.waitForAWhile(2000);
        audioService.stopLoop();
    }

    stop() {
        this.playingAudio = false;
        audioService.stopAudio();
        audioService.stopLoop();
    }

    bgAudio() {

        NativeAudio.preload({
            assetId: 'bgAudio',
            assetPath: this.path_android + '/bg.mp3',
            isUrl: false
        });

        NativeAudio.preload({
            assetId: 'begin',
            assetPath: this.path_android + '/begin.mp3',
            isUrl: false
        });

        NativeAudio.preload({
            assetId: 'end',
            assetPath: this.path_android + '/end.mp3',
            isUrl: false
        });

        NativeAudio.preload({
            assetId: 'begin_vampire',
            assetPath: this.path_android + '/begin-vampire.mp3',
            isUrl: false
        });

        NativeAudio.preload({
            assetId: 'end_vampire',
            assetPath: this.path_android + '/end-vampire.mp3',
            isUrl: false
        });

        NativeAudio.preload({
            assetId: 'amantes',
            assetPath: this.path_android + '/amantes.mp3',
            isUrl: false
        });


        NativeAudio.preload({
            assetId: 'vampiros_a',
            assetPath: this.path_android + '/vampire/vampiros/vampiros-a.mp3',
            isUrl: false
        });


    }

    playDawn() {
        NativeAudio.play({
            assetId: 'bgAudio',
        });
        NativeAudio.loop({
            assetId: 'bgAudio',
        });

        NativeAudio.play({
            assetId: 'begin_vampire',
        })

        let timeout_time = 6500
        this.vampires.forEach((item: Personagem) => {
            if (this.personagens_config.includes(item.id)) {

                if (item.id == 'renfield') {
                    setTimeout(() => {
                        NativeAudio.play({
                            assetId: 'vampiros_a',
                        })
                    }, timeout_time);
                    timeout_time += 4000
                }

                setTimeout(() => {
                    this.setActive('home_' + item.id)
                    console.log('begin ' + item.id)
                    NativeAudio.play({
                        assetId: item.id,
                    })
                }, timeout_time);

                timeout_time += 2000 + item.timeout_begin

                setTimeout(() => {
                    console.log('end ' + item.id)
                    NativeAudio.play({
                        assetId: item.id + '2',
                    });
                }, timeout_time);
                timeout_time += item.timeout_end
            }
        })
        setTimeout(() => {
            NativeAudio.play({
                assetId: 'end_vampire',
            });
        }, 2000 + timeout_time);

        setTimeout(() => {
            NativeAudio.stop({
                assetId: 'bgAudio',
            });
        }, 5000 + timeout_time)
    }

    playNight() {

        NativeAudio.play({
            assetId: 'bgAudio',
        });
        NativeAudio.loop({
            assetId: 'bgAudio',
        });

        NativeAudio.play({
            assetId: 'begin',
        })


        console.log('começa')
        let x = 0
        setInterval(() => {
            console.log(x++)
        }, 1000)

        let timeout_time = 4000

        if (this.personagens_config.includes('cupid')) {
            setTimeout(() => {
                NativeAudio.play({
                    assetId: 'amantes',
                });
            }, timeout_time);
            timeout_time += 7000
        }

        this.personagens.forEach((item: Personagem) => {
            if (this.personagens_config.includes(item.id)) {
                setTimeout(() => {
                    this.setActive('home_' + item.id)
                    console.log('begin ' + item.id)
                    NativeAudio.play({
                        assetId: item.id,
                    })
                }, timeout_time);

                timeout_time += 2000 + item.timeout_begin

                if (item.timeout_end > 0) {
                    setTimeout(() => {
                        console.log('end ' + item.id)
                        NativeAudio.play({
                            assetId: item.id + '2',
                        });
                    }, timeout_time);
                    timeout_time += item.timeout_end
                }
            }
        })

        setTimeout(() => {
            NativeAudio.play({
                assetId: 'end',
            });

        }, 2000 + timeout_time);

        setTimeout(() => {
            NativeAudio.stop({
                assetId: 'bgAudio',
            });
        }, 5000 + timeout_time)

    }

    public stopBg() {
        NativeAudio.play({
            assetId: 'end',
        });
        setTimeout(() => {
            console.log('pare')
            NativeAudio.stop({
                assetId: 'bgAudio',
            });
        }, 7000)

    }

    navigate() {
        this.router.navigate(['/config'])
    }

    private setActive(nameId: string) {
        const nodeList = document.querySelectorAll(".personagem");
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].classList.remove("on");
        }
        const selected = document.getElementById(nameId);
        if (selected)
            selected.classList.add("on")
    }

    public loadPersonagens() {
        let ls = localStorage.getItem("selecionados");

        if (ls) {
            this.personagens_config = JSON.parse(ls)
        }
        const nodeList = document.querySelectorAll<HTMLElement>(".personagem");
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].style.display = 'none'
        }

        this.personagens_config.forEach((item: String) => {
            let selected = document.getElementById('home_' + item);
            if (selected) selected.style.display = "block"
        })

        this.vampires.forEach((loading: Personagem) => {
            NativeAudio.preload({
                assetId: loading.id,
                assetPath: loading.audio_begin,
                isUrl: false
            });

            if (loading.audio_end) {
                NativeAudio.preload({
                    assetId: loading.id + '2',
                    assetPath: loading.audio_end,
                    isUrl: false
                });
            }
        })
        this.personagens.forEach((loading: Personagem) => {
            NativeAudio.preload({
                assetId: loading.id,
                assetPath: loading.audio_begin,
                isUrl: false
            });

            if (loading.audio_end) {
                NativeAudio.preload({
                    assetId: loading.id + '2',
                    assetPath: loading.audio_end,
                    isUrl: false
                });
            }
        })

    }

    ngAfterViewInit() {
        this.loadPersonagens()
    }

    public vampire() {
        this.setActive('/vampire')
        console.log('começa vampire')
        const time = 3 * 1000

        NativeAudio.play({
            assetId: 'vampire',
        });

        setTimeout(async () => {
            console.log('termina wf2')
            NativeAudio.play({
                assetId: 'vampire2',
            });
        }, time + 9000)

        return true
    }

    public lobisomen() {
        this.setActive('wf')
        console.log('começa wf')
        const time = 3 * 1000

        NativeAudio.play({
            assetId: 'wf',
        });

        setTimeout(async () => {
            console.log('termina wf2')
            NativeAudio.play({
                assetId: 'wf2',
            });
        }, time + 9000)

        return true
    }

    public minion() {
        this.setActive('mi')
        console.log('começa minion')
        const time = 5 * 1000

        NativeAudio.play({
            assetId: 'mi',
        });

        setTimeout(async () => {
            console.log('termina minion')
            NativeAudio.play({
                assetId: 'mi2',
            });
        }, time + 4000)

        return true
    }

    public mason() {
        this.setActive('ma')
        console.log('começa mason')
        const time = 3 * 1000

        NativeAudio.play({
            assetId: 'ma',
        });

        setTimeout(() => {
            console.log('termina mason')
            NativeAudio.play({
                assetId: 'ma2',
            });
        }, time + 4000)
    }

    public vidente() {
        this.setActive('vi')
        console.log('começa vidente')
        const time = 5 * 1000

        NativeAudio.play({
            assetId: 'vi',
        });

        setTimeout(() => {
            console.log('termina vidente')
            NativeAudio.play({
                assetId: 'vi2',
            });
        }, time + 6000)
    }

    public ladrao() {
        this.setActive('la')
        console.log('começa ladrao')
        const time = 5 * 1000

        NativeAudio.play({
            assetId: 'la',
        });

        setTimeout(() => {
            console.log('termina ladrao')
            NativeAudio.play({
                assetId: 'la2',
            });
        }, time + 5000)
    }

    public encrenqueira() {
        this.setActive('en')
        console.log('começa encrenqueira')
        const time = 5 * 1000

        NativeAudio.play({
            assetId: 'en',
        });

        setTimeout(() => {
            console.log('termina encrenqueira')
            NativeAudio.play({
                assetId: 'en2',
            });
        }, time + 6000)
    }

    public bebado() {
        this.setActive('be')
        console.log('começa bebado')
        const time = 5 * 1000

        NativeAudio.play({
            assetId: 'be',
        });

        setTimeout(() => {
            console.log('termina bebado')
            NativeAudio.play({
                assetId: 'be2',
            });
        }, time + 6000)
    }

    public sonambula() {
        this.setActive('so')
        console.log('começa sonambula')
        const time = 5 * 1000

        NativeAudio.play({
            assetId: 'so',
        });

    }

    public investigador() {
        this.setActive('iv')
        console.log('começa investigador')
        const time = 5 * 1000

        NativeAudio.play({
            assetId: 'iv',
        });

        setTimeout(() => {
            console.log('termina investigador')
            NativeAudio.play({
                assetId: 'iv',
            });
        }, time + 14000)
    }

    public bruxa() {
        this.setActive('wt')
        console.log('começa bruxa')
        const time = 5 * 1000

        NativeAudio.play({
            assetId: 'wt',
        });

        setTimeout(() => {
            console.log('termina bruxa')
            NativeAudio.play({
                assetId: 'wt2',
            });
        }, time + 10000)
    }




}
