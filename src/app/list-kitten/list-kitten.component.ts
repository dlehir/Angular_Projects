import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-list-kitten',
templateUrl: './list-kitten.component.html',
styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent implements OnInit {
Kitten = [
{ id: 1, name: 'kitten 1', race: 'eur', year: '2106', image: 'https://www.sciencesetavenir.fr/assets/img/2017/03/29/cover-r4x3w1000-58dbbd655242b-capture-d-e-cran-2017-03-29-a-15-55-40.png'},
{ id: 2, name: 'kitten 2', race: 'eur', year: '2106', image: 'https://www.sciencesetavenir.fr/assets/img/2017/03/29/cover-r4x3w1000-58dbbd655242b-capture-d-e-cran-2017-03-29-a-15-55-40.png'},
{ id: 3, name: 'kitten 3', race: 'eur', year: '2106', image: 'https://www.sciencesetavenir.fr/assets/img/2017/03/29/cover-r4x3w1000-58dbbd655242b-capture-d-e-cran-2017-03-29-a-15-55-40.png'},
{ id: 4, name: 'kitten 4', race: 'eur', year: '2106', image: 'https://www.sciencesetavenir.fr/assets/img/2017/03/29/cover-r4x3w1000-58dbbd655242b-capture-d-e-cran-2017-03-29-a-15-55-40.png'},
{ id: 5, name: 'kitten 5', race: 'eur', year: '2106', image: 'https://www.sciencesetavenir.fr/assets/img/2017/03/29/cover-r4x3w1000-58dbbd655242b-capture-d-e-cran-2017-03-29-a-15-55-40.png'},
{ id: 6, name: 'kitten 6', race: 'eur', year: '2106', image: 'https://www.sciencesetavenir.fr/assets/img/2017/03/29/cover-r4x3w1000-58dbbd655242b-capture-d-e-cran-2017-03-29-a-15-55-40.png'},
{ id: 7, name: 'kitten 7', race: 'eur', year: '2106', image: 'https://www.sciencesetavenir.fr/assets/img/2017/03/29/cover-r4x3w1000-58dbbd655242b-capture-d-e-cran-2017-03-29-a-15-55-40.png'},
{ id: 8, name: 'kitten 8', race: 'eur', year: '2106', image: 'https://www.sciencesetavenir.fr/assets/img/2017/03/29/cover-r4x3w1000-58dbbd655242b-capture-d-e-cran-2017-03-29-a-15-55-40.png'},
{ id: 9, name: 'kitten 9', race: 'eur', year: '2106', image: 'https://www.sciencesetavenir.fr/assets/img/2017/03/29/cover-r4x3w1000-58dbbd655242b-capture-d-e-cran-2017-03-29-a-15-55-40.png'},
{ id: 10, name: 'kitten 10', race: 'eur', year: '2106', image: 'https://www.sciencesetavenir.fr/assets/img/2017/03/29/cover-r4x3w1000-58dbbd655242b-capture-d-e-cran-2017-03-29-a-15-55-40.png'}
];
userForm: any = {};
User = [];
constructor() { }

ngOnInit() {
console.log(this.User);
}

addKitten(Kitten) {
console.log(Kitten);
console.log(this.User.push(Kitten));
}

deleteKitten(user) {
const index = this.User.findIndex(users => users === user);
this.User.splice(index, 1);
}

formKitten() {
this.Kitten.push(this.userForm);
this.userForm = {};
}


}