import { Character } from "./characters.list";

class AudioService {
    private bgAudio?: HTMLAudioElement;
    private currentAudio?: HTMLAudioElement;
    private isPlaying: boolean = false;
    private voiceOption: string = 'narakeet';

    constructor() {

    }

    playLoop(src: string) {
        this.isPlaying = true;
        if (this.bgAudio) this.bgAudio.pause();
        this.bgAudio = new Audio(src);
        this.bgAudio.loop = true;
        this.bgAudio.volume = 0.5;
        this.bgAudio.play();
    }

    stopLoop() {
        if (this.bgAudio) {
            this.bgAudio.pause();
            this.bgAudio.currentTime = 0;
        }
    }

    playAudio(src: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.currentAudio = new Audio(src);

            this.currentAudio.onended = () => resolve();
            this.currentAudio.onerror = (e) => reject(e);
            this.currentAudio.play();
        });
    }

    stopAudio() {
        if (this.currentAudio && this.isPlaying) {
            this.currentAudio.pause();
            this.currentAudio.currentTime = 0;
            this.isPlaying = false;
        }
    }

    playStartEnd(start: boolean): Promise<void> {
        let ls = localStorage.getItem("voiceOption");
        if (ls) {
            this.voiceOption = ls;
        }
        let audio = (start) ? `assets/audios/noite/${this.voiceOption}/noite.mp3` : `assets/audios/noite/${this.voiceOption}/amanhecer.mp3`;

        return new Promise((resolve, reject) => {
            this.currentAudio = new Audio(audio);

            this.currentAudio.onended = () => resolve();
            this.currentAudio.onerror = (e) => reject(e);
            this.currentAudio.play();
        });
    }

    selectVoice(slug: string, begin: boolean): string {
        let ls = localStorage.getItem("voiceOption");
        if (ls) {
            this.voiceOption = ls;
        }
        return (begin) ? `assets/audios/${slug}/${this.voiceOption}/acordar.mp3` : `assets/audios/${slug}/${this.voiceOption}/adormecer.mp3`;
    }

    async playAudiosSequentially(sources: Character[], currentPlayingAudio: { value: string }): Promise<void> {
        for (const source of sources) {
            console.log('Playing audios for character:', source.name);
            currentPlayingAudio.value = source.name;

            if (!this.isPlaying) break;
            await this.playAudio(this.selectVoice(source.slug, true));

            if (!this.isPlaying) break;
            await new Promise(resolve => setTimeout(resolve, source.interval));

            if (!this.isPlaying) break;
            await this.playAudio(this.selectVoice(source.slug, false));

            await this.waitForAWhile(1000);
        }
    }

    async waitForAWhile(ms: number): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
}

export const audioService = new AudioService();
