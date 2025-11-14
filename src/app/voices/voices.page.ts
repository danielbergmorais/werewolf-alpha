import { Component, OnInit } from '@angular/core';
import { charactersList } from '../services/characters.list';
import { audioService } from '../services/audio.service';

@Component({
    selector: 'app-voices',
    templateUrl: './voices.page.html',
    styleUrls: ['./voices.page.scss'],
})
export class VoicesPage implements OnInit {
    charactersList = charactersList;
    voiceOption = 'narakeet';
    constructor() { }

    ngOnInit() {
    }

    async play(slug: string, timeout: number = 1000) {
        let ls = localStorage.getItem("voiceOption");
        if (ls) {
            this.voiceOption = ls;
        }
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
        let voice = event.detail.value;
        localStorage.setItem("voiceOption", voice);
    }
}
