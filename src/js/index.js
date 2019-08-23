// Webpack entrypoint

import '../styles/styles.scss';
import ExampleClass from './ExampleClass';

// Any JS below runs on page load
let example = new ExampleClass();
let message = example.getMessage();
console.log(message);