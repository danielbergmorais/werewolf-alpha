import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character, charactersList } from '../services/characters.list';

@Component({
    selector: 'app-config',
    templateUrl: './config.page.html',
    styleUrls: ['./config.page.scss'],
})

export class ConfigPage implements OnInit {
    public characters: Array<Character>
    private selectedsIds: Array<number> = []
    public voiceOption: string | null = localStorage.getItem('voiceOption');

    constructor(private router: Router) {
        this.characters = charactersList;

        let ls = localStorage.getItem('selectedsIds');

        if (ls) {
            this.selectedsIds = JSON.parse(ls)
        }
    }

    ngOnInit() { }

    ngAfterViewInit() {
        this.selectedsIds.forEach((item: number) => {
            let selectedElement = document.getElementById(item.toString());
            if (selectedElement) selectedElement.classList.add('active')
        })

    }

    onSelect(id: number) {

        let selected = this.characters.find(item => item.id === id);
        if (!selected) return;

        let index = this.selectedsIds.findIndex(item => item === id);
        let selectedElement = document.getElementById(id.toString());

        if (index >= 0) {
            this.selectedsIds.splice(index, 1);
            if (selectedElement) selectedElement.classList.remove('active')
        } else {
            this.selectedsIds.push(selected.id);
            if (selectedElement) selectedElement.classList.add('active');
        }

        this.selectedsIds.sort((a: number, b: number) => a - b);
        localStorage.setItem('selectedsIds', JSON.stringify(this.selectedsIds));
    }

    onVoiceChange(event: any) {
        let voice = event.detail.value;
        localStorage.setItem('voiceOption', voice);
    }


}
