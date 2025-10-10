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
    public currentPlayingAudio: { isplaying: boolean, value: string } = { isplaying: false, value: '' };
    public selecteds: Character[] = [];
    public personagens: Character[] = [];

    constructor(private router: Router) {
        let ls = localStorage.getItem("selecteds");
        if (ls) {
            this.personagens = this.selecteds = JSON.parse(ls)

        }
    }

    async play() {
        this.currentPlayingAudio.isplaying = true;
        audioService.playLoop('assets/sounds/bg.mp3');
        await audioService.waitForAWhile(2000);
        await audioService.playAudio('assets/sounds/begin.mp3');
        await audioService.playAudiosSequentially(this.selecteds, this.currentPlayingAudio);
        await audioService.playAudio('assets/sounds/end.mp3');
        await audioService.waitForAWhile(2000);
        audioService.stopLoop();
    }

    stop() {
        this.currentPlayingAudio.isplaying = false;
        this.currentPlayingAudio.value = '';
        audioService.stopAudio();
        audioService.stopLoop();
    }

    navigate() {
        this.router.navigate(['/config'])
    }

    ngAfterViewInit() {

    }


}
