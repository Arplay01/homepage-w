import '../scss/style.scss';
import {person, hello} from './modules/object.js';
import maciek from './modules/object.js';
import {pleaseSayHelloAtStart as hi} from './modules/test.js'
import * as korsi from './modules/object2.js';
import moment from 'moment';

console.log(person);

console.log(hello(person.name));

console.log(maciek);

hi(person.name);

console.log(korsi.person);

console.log(korsi.hello(korsi.person.name));

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));