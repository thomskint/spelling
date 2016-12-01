/**
 * Created by ajthomps on 11/16/2016.
 */
Ext.define('Spelling.view.test.letters.LettersModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.letters',

    stores: {
        letters: {
            fields: ['letter', 'age'],
            data: [
                {letter: 'a', id: 1},
                {letter: 'b', id: 2},
                {letter: 'c', id: 3},
                {letter: 'd', id: 4},
                {letter: 'e', id: 5},
                {letter: 'f', id: 6},
                {letter: 'g', id: 7},
                {letter: 'h', id: 8},
                {letter: 'i', id: 9},
                {letter: 'j', id: 10},
                {letter: 'k', id: 11},
                {letter: 'l', id: 12},
                {letter: 'm', id: 13},
                {letter: 'n', id: 14},
                {letter: 'o', id: 15},
                {letter: 'p', id: 16},
                {letter: 'q', id: 17},
                {letter: 'r', id: 18},
                {letter: 's', id: 19},
                {letter: 't', id: 20},
                {letter: 'u', id: 21},
                {letter: 'v', id: 22},
                {letter: 'w', id: 23},
                {letter: 'x', id: 24},
                {letter: 'y', id: 25},
                {letter: 'z', id: 26},
                {letter: 'Backspace', id: 27, cls:'large'}
            ]
        }
        /*
        A declaration of Ext.data.Store configurations that are first processed as binds to produce an effective
        store configuration. For example:

        users: {
            model: 'Letters',
            autoLoad: true
        }
        */
    }
});