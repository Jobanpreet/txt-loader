import { ES5, ES6 } from '../../constants';

export default (esModule) => (esModule ? ES6 : ES5);
