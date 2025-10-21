import { Component } from '@angular/core';
import { NativeAudio } from '@capacitor-community/native-audio';
import { Router } from '@angular/router';
import { audioService } from '../services/audio.service';
import { Character, charactersList } from '../services/characters.list';


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})

export class HomePage {
    public currentPlayingAudio: { isplaying: boolean, value: string } = { isplaying: false, value: '' };
    public characters: Character[] = [];
    public ids: number[] = [];

    constructor(private router: Router) {
        let ls = localStorage.getItem("selectedsIds");
        if (ls) {
            this.ids = JSON.parse(ls)
        }
    }

    async play() {
        this.currentPlayingAudio.isplaying = true;
        audioService.playLoop('assets/audios/bg.mp3');
        await audioService.waitForAWhile(2000);
        await audioService.playStartEnd(true);
        await audioService.playAudiosSequentially(this.characters, this.currentPlayingAudio);
        await audioService.playStartEnd(false);
        await audioService.waitForAWhile(2000);
        this.stop();
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
        this.ids.forEach(element => {
            const character = charactersList.find(item => item.id === element);
            if (character) {
                this.characters.push(character);
            }
        });
    }


}
