import { Character, CharacterAudio } from "./characters.list";

class AudioService {
    private bgAudio?: HTMLAudioElement;
    private currentAudio?: HTMLAudioElement;
    private isPlaying: boolean = false;

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
        let audio = '';
        let useAI = 2;
        switch (useAI) {
            case 1:
                audio = (start) ? 'assets/sounds/begin.mp3' : 'assets/sounds/end.mp3';
                break;
            case 2:
                audio = (start) ? 'assets/audios-ai/00-begin.mp3' : 'assets/audios-ai/01-end.mp3';
                break;
            default:
                audio = (start) ? 'assets/sounds/begin.mp3' : 'assets/sounds/end.mp3';
        }

        return new Promise((resolve, reject) => {
            this.currentAudio = new Audio(audio);

            this.currentAudio.onended = () => resolve();
            this.currentAudio.onerror = (e) => reject(e);
            this.currentAudio.play();
        });
    }

    selectVoice(audios: CharacterAudio, useAI: Number): Array<string> {

        //assets/audios/{slug}/tts/acordar.mp3
        switch (useAI) {
            case 1:
                return audios.legacy;
            case 2:
                return audios.ttsmp3;
            default:
                return audios.legacy;
        }
    }

    async playAudiosSequentially(sources: Character[], currentPlayingAudio: { value: string }): Promise<void> {
        for (const source of sources) {
            console.log('Playing audios for character:', source.name);
            currentPlayingAudio.value = source.name;

            if (!this.isPlaying) break;
            await this.playAudio(this.selectVoice(source.audios, 2)[0]);
            // await this.playAudio(this.selectVoice(source.slug, begin: true));

            if (!this.isPlaying) break;
            await new Promise(resolve => setTimeout(resolve, source.interval));

            if (!this.isPlaying) break;
            await this.playAudio(this.selectVoice(source.audios, 2)[1]);
            //await this.playAudio(this.selectVoice(source.slug, begin: false));

            await this.waitForAWhile(1000);
        }
    }

    async waitForAWhile(ms: number): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
}

export const audioService = new AudioService();
