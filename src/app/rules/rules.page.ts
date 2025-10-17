import { Component, OnInit } from '@angular/core';
import { charactersList } from '../services/characters.list';

@Component({
    selector: 'app-rules',
    templateUrl: './rules.page.html',
    styleUrls: ['./rules.page.scss'],
})
export class RulesPage implements OnInit {
    charactersList = charactersList;
    constructor() { }

    ngOnInit() {
    }

}
