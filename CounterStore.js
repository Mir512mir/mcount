import { observable, action, makeObservable, autorun, reaction, when } from 'mobx';

class CounterStore {
    counter = 0;
    constructor() {
        makeObservable(this, {
            counter: observable,
            additions: action,
            subtraction: action
        });
        autorun(() => {
            console.log('Autorun', this.counter);
        })
        when(() => this.counter >= 5,
            () => {
                console.log('This number work');
            })
        const counterDisposer = reaction(() =>
            this.counter,
            (counter, prevCounter) => {
                console.log('Number', this.counter);
                if (counter >= 10) {
                    counterDisposer();
                }
            }
        )

    }
additions(){
    this.counter ++;

}
subtraction(){
    this.counter --;
}
}
const counterStore = new CounterStore();

export default counterStore;