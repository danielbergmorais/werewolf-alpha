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
    private selecteds: Array<Character> = []

    constructor(private router: Router) {
        this.characters = charactersList;

        let ls = localStorage.getItem("selecteds");

        if (ls) {
            this.selecteds = JSON.parse(ls)
        }
    }

    ngOnInit() { }

    ngAfterViewInit() {
        this.selecteds.forEach((item: Character) => {
            let selected = document.getElementById(item.name);
            if (selected) selected.classList.add("active")
        })

    }

    onSelect(name: string) {

        let selected = this.characters.find(item => item.name === name);

        if (!selected) return;

        let index = this.selecteds.findIndex(item => item.name === name);
        let selectedElement = document.getElementById(name);

        if (index >= 0) {
            this.selecteds.splice(index, 1);
            if (selectedElement) selectedElement.classList.remove("active")
        } else {
            this.selecteds.push(selected);
            if (selectedElement) selectedElement.classList.add("active");
        }

        this.selecteds.sort((a, b) => a.id - b.id);
        localStorage.setItem("selecteds", JSON.stringify(this.selecteds));
    }

}
