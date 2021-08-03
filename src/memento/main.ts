import { Caretaker } from './caretaker';
import { Originator } from './originator';

const originador = new Originator('caminho/image.png','png');
const caretaker = new Caretaker(originador);

console.log(originador);

caretaker.backup();
originador.convertFormatTo('jpg');

caretaker.backup();
originador.convertFormatTo('bmp');

caretaker.backup();
originador.convertFormatTo('tiff');

console.log(originador);
caretaker.undo();
caretaker.undo();

console.log(originador);

