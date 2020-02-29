import {VariableGroup, Variable} from './_variable-group';
import {createVariableTable} from './_create-table';

const FONTS_SUFFIX = 'fonts.dev.css';
const FONTS_CONTAINER_SELECTOR = '.n-hopin-styleguide-js-fonts-grid';

class FontsTable extends VariableGroup {
    constructor() {
        super(FONTS_CONTAINER_SELECTOR, FONTS_SUFFIX);
    }

    renderData(variables: Variable[]): HTMLElement[] {
        return [createVariableTable(variables)];
    }
}

window.addEventListener('load', function() {
    if (!document.querySelector(FONTS_CONTAINER_SELECTOR)) {
        return
    }

    new FontsTable().render();
});