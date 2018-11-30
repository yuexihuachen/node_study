import { version } from './package.json';
import answer from 'the-answer';

export default function () {
  console.log(`the answer is ${answer}`);
  console.log('version ' + version);
}