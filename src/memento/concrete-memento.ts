import { Memento } from './memento';

export class ConcreteMemento implements Memento{
    constructor(
        private name: string,
        private data: Date,
        private filePath: string,
        private fileFormat: string
    ){}

    getName(): string{
        return this.name;
    }

    getDate(): Date{
        return this.data
    }

    getFilePath(): string{
        return this.filePath
    }

    getFileFormat(): string{
        return this.fileFormat
    }
}