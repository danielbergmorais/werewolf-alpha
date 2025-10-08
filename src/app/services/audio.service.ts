import { Character } from "./characters.list";

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

    async playAudiosSequentially(sources: Character[]) {
        for (const source of sources) {

            console.log('Playing audios for character:', source.name);
            if (!this.isPlaying) break;
            await this.playAudio(source.audios[0]);

            if (!this.isPlaying) break;
            await new Promise(resolve => setTimeout(resolve, source.interval));

            if (!this.isPlaying) break;
            await this.playAudio(source.audios[1]);
        }
    }

    async waitForAWhile(ms: number): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
}

export const audioService = new AudioService();
