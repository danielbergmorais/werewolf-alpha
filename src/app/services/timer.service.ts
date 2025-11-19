import { BehaviorSubject } from 'rxjs';

export class TimerService {
    private seconds: number = 0;
    private timerSubject = new BehaviorSubject<string>('00:00'); // valor inicial
    timer$ = this.timerSubject.asObservable();
    private intervalId: any;

    constructor() { }

    setTimer(seconds: number) {
        this.seconds = seconds;
        this.updateTimerDisplay();
    }

    async startTimer(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.intervalId = setInterval(() => {
                if (this.seconds > 0) {
                    this.seconds--;
                    this.updateTimerDisplay();
                } else {
                    clearInterval(this.intervalId);
                    resolve();
                }
            }, 1000);
        });
    }

    stopTimer() {
        this.seconds = 0;
        this.updateTimerDisplay();
        clearInterval(this.intervalId);
    }

    private updateTimerDisplay() {
        const min = Math.floor(this.seconds / 60);
        const sec = this.seconds % 60;
        const display = `${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}`;
        this.timerSubject.next(display);
    }
}

export const timerService = new TimerService();
