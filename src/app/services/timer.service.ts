import { BehaviorSubject } from 'rxjs';

export class TimerService {

    private initialSeconds: number = 0;     // valor original do timer
    private currentSeconds: number = 0;     // valor que está sendo contado
    private intervalId: any = null;

    private displaySubject = new BehaviorSubject<string>('00:00');
    timer$ = this.displaySubject.asObservable();

    constructor() { }

    /** Define o tempo inicial do contador */
    setTimer(seconds: number) {
        this.initialSeconds = seconds;
        this.currentSeconds = seconds;
        this.updateDisplay();
    }

    /** Inicia ou continua a contagem */
    async start(): Promise<void> {
        if (this.intervalId) return; // evitar intervalos duplicados
        return new Promise((resolve, reject) => {
            this.intervalId = setInterval(() => {
                if (this.currentSeconds > 0) {
                    this.currentSeconds--;
                    this.updateDisplay();
                } else {
                    this.pause();
                    resolve();
                }
            }, 1000);
        });
    }

    /** Pausa o contador */
    pause() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    /** Reseta o contador para o valor inicial */
    reset() {
        this.pause();
        this.currentSeconds = this.initialSeconds;
        this.updateDisplay();
    }

    /** Atualiza o valor formatado HH:MM */
    private updateDisplay() {
        const min = Math.floor(this.currentSeconds / 60);
        const sec = this.currentSeconds % 60;
        const display =
            `${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}`;

        this.displaySubject.next(display);
    }
}

export const timerService = new TimerService();
