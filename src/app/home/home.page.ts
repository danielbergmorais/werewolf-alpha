import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { audioService } from '../services/audio.service';
import { Character, charactersList, vampireList, compareOrder } from '../services/characters.list';
import { timerService } from '../services/timer.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})

export class HomePage {
    public currentPlayingAudio: { isplaying: boolean, value: string } = { isplaying: false, value: '' };
    public characters: Character[] = [];
    public slugs: string[] = [];
    timer$: Observable<string> = timerService.timer$;
    timing: boolean = false;

    constructor(private router: Router) {

    }

    async play() {
        this.currentPlayingAudio.isplaying = true;
        audioService.playLoop('assets/audios/bg.mp3');
        if (this.characters.some(c => c.dusker)) {
            await audioService.playStartEnd(true, true);
            await audioService.playAudiosSequentially(this.characters, this.currentPlayingAudio, true);
            await audioService.playStartEnd(false, true);
            this.stop();


        }
        if (this.characters.some(c => !c.dusker) && this.characters.some(c => c.dusker)) {
            timerService.setTimer(10);
            timerService.startTimer();
            await audioService.waitForAWhile(10000);
        }

        if (this.characters.some(c => !c.dusker)) {
            audioService.playLoop('assets/audios/bg.mp3');
            this.currentPlayingAudio.isplaying = true;
            await audioService.waitForAWhile(2000);
            await audioService.playStartEnd(true);
            await audioService.playAudiosSequentially(this.characters, this.currentPlayingAudio);
            await audioService.playStartEnd(false);
            await audioService.waitForAWhile(2000);
            this.stop();
        }
    }

    stop() {
        this.currentPlayingAudio.isplaying = false;
        this.currentPlayingAudio.value = '';
        audioService.stopAudio();
        audioService.stopLoop();
    }

    async playTime() {
        this.timing = true;
        let time = localStorage.getItem('voteTime') || '5';
        timerService.setTimer(parseInt(time));

        await timerService.startTimer();
        let randomAlertSong = ['assets/audios/alerts/zelda-1.mp3', 'assets/audios/alerts/zelda-2.mp3', 'assets/audios/alerts/zelda-3.mp3', 'assets/audios/alerts/zelda-4.mp3', 'assets/audios/alerts/zelda-5.mp3'];
        let randomIndex = Math.floor(Math.random() * randomAlertSong.length);
        audioService.playAudio(randomAlertSong[randomIndex]);
        this.timing = false;
    }

    stopTime() {
        this.timing = false;
        timerService.stopTimer();
    }

    navigate() {
        this.router.navigate(['/config'])
    }

    ngOnInit() {

        let ls = localStorage.getItem("selectedsSlugs");
        if (ls) {
            this.slugs = JSON.parse(ls)
        }
        this.slugs.forEach(element => {
            const allChars = [...charactersList, ...vampireList];

            const found = allChars.find(item => item.slug === element);

            if (found) {
                this.characters.push(found);
            }

        });
        this.characters.sort((a: Character, b: Character) => compareOrder(a.originalOrder, b.originalOrder));
    }
}
