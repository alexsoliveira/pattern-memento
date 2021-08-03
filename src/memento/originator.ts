import { ConcreteMemento } from './concrete-memento';
import { Memento } from './memento';

export class Originator{
    constructor(
        private filePath: string, 
        private fileFormat: string
    ){}

    convertFormatTo(format: string): void{
        this.fileFormat = format;
        this.filePath = this.filePath.split('.').slice(0, -1).join('');
        this.filePath += '.' + this.fileFormat;
    }

    saveState(): Readonly<Memento>{
        const data = new Date();

        return new ConcreteMemento(
            data.toISOString(),
            data,
            this.filePath,
            this.fileFormat);
    }

    restore(memento: Memento): void{
        const concreteMemento = memento as ConcreteMemento;
        this.filePath = concreteMemento.getFilePath();
        this.fileFormat = concreteMemento.getFileFormat();
    }
}