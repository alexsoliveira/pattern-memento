import { Memento } from './memento';
import { Originator } from './originator';

export class Caretaker{
    private mementos: Memento[] = [];

    constructor(
        private originador: Originator
    ){}

    backup(): void {
        console.log('Backup: salvando o estado originador');
        this.mementos.push(this.originador.saveState());
    }

    undo(): void{
        const memento = this.mementos.pop();

        if(!memento){
            console.log('Backup: no mementos.');
            return;
        }

        this.originador.restore(memento);
        console.log(`Backup: ${memento.getName()} foi restaurado com sucesso.`);        
    }

    showMementos(): void{
        for(const memento of this.mementos){
            console.log(memento);
        }
    }
}