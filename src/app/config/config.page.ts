import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character, charactersList, vampireList } from '../services/characters.list';


@Component({
    selector: 'app-config',
    templateUrl: './config.page.html',
    styleUrls: ['./config.page.scss'],
})

export class ConfigPage implements OnInit {
    public characters: Array<Character>

    private selectedsSlugs: Array<string> = []
    public voiceOption: string | null = localStorage.getItem('voiceOption');
    public timeOption: string | null = localStorage.getItem('voteTime');

    constructor(private router: Router) {
        this.characters = charactersList.concat(vampireList);

        let ls = localStorage.getItem('selectedsSlugs');

        if (ls) {
            this.selectedsSlugs = JSON.parse(ls)
        }
    }

    ngOnInit() { }

    ngAfterViewInit() {
        this.selectedsSlugs.forEach((item: string) => {
            let selectedElement = document.getElementById(item);
            if (selectedElement) selectedElement.classList.add('active')
        })
    }

    onSelect(slug: string) {

        const selected = this.characters.find(item => item.slug === slug);
        if (!selected) return;

        let index = this.selectedsSlugs.findIndex(item => item === selected.slug);
        let selectedElement = document.getElementById(slug);

        if (index >= 0) {
            this.selectedsSlugs.splice(index, 1);
            if (selectedElement) selectedElement.classList.remove('active')
        } else {
            this.selectedsSlugs.push(selected.slug);
            if (selectedElement) selectedElement.classList.add('active');
        }

        localStorage.setItem('selectedsSlugs', JSON.stringify(this.selectedsSlugs));
    }

    onVoiceChange(event: any) {
        let voice = event.detail.value;
        localStorage.setItem('voiceOption', voice);
    }
    onVoteTimeChange(event: any) {
        let voteTime = event.detail.value;
        localStorage.setItem('voteTime', voteTime);
    }


}
