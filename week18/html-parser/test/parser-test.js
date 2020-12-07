var assert = require("assert");
import {paserHTML} from "../src/parser.js"
describe('parse html', () => {
    it('<a>abc</a>', () => {
        paserHTML('<a>abc</a>');
        assert.equal(1, 1);
    });
});