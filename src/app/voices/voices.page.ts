import { Component, OnInit } from '@angular/core';
import { charactersList, vampireList } from '../services/characters.list';
import { audioService } from '../services/audio.service';

@Component({
    selector: 'app-voices',
    templateUrl: './voices.page.html',
    styleUrls: ['./voices.page.scss'],
})
export class VoicesPage implements OnInit {
    charactersList = charactersList;
    vampireList = vampireList;

    public voiceOption: string | null = localStorage.getItem('voiceOption') ? localStorage.getItem('voiceOption') : 'narakeet';
    constructor() { }

    ngOnInit() {
        this.removeAllWithZeroInterval(this.charactersList, 'interval');
        this.removeAllWithZeroInterval(this.vampireList, 'interval');
    }

    async play(slug: string, timeout: number = 1000) {
        let audio1 = `assets/audios/${slug}/${this.voiceOption}/acordar.mp3`;
        let audio2 = `assets/audios/${slug}/${this.voiceOption}/adormecer.mp3`;
        await audioService.playAudio(audio1);
        await new Promise(resolve => setTimeout(resolve, timeout));
        await audioService.playAudio(audio2);
    }

    stop() {
        audioService.stopAudio();
    }
    onVoiceChange(event: any) {
        this.voiceOption = event.detail.value;
    }

    removeAllWithZeroInterval(array: any[], attr: string = 'interval') {
        // mantém apenas os itens cujo atributo seja diferente de 0
        const filtered = array.filter(item => item[attr] !== 0);

        // atualiza o array original
        array.length = 0;
        array.push(...filtered);
    }
}
