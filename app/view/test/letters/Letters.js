/**
 * Created by ajthomps on 11/16/2016.
 */
Ext.define('Spelling.view.test.letters.Letters', {
    extend: 'Ext.DataView',

    requires: [
        'Spelling.view.test.letters.LettersModel',
		'Spelling.view.test.letters.LettersController'
    ],

    xtype: 'letters',

    viewModel: {
        type: 'letters'
    },

    controller: 'letters',

    cls: 'letters-panel',

    listeners : {
        itemtap : 'letterTap'
    },

    bind: {
        store: '{letters}'
    },

    itemTpl: '<div class="letter-container {cls}"><button>{letter}</button></div>'
});