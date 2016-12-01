/**
 * Created by ajthomps on 11/16/2016.
 */
Ext.define('Spelling.view.test.testlist.TestlistModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.testlist',

    stores: {
        year1: {
            model: 'Spelling.model.Test',
            autoLoad: true,
            data: { items: [
                { name: 'Level 1', questions: [
                    {id: '1',word:'do'},
                    {id: '2',word:'of'},
                    {id: '3',word:'said'},
                    {id: '4',word:'says'},
                    {id: '5',word:'are'},
                    {id: '6',word:'were'},
                    {id: '7',word:'was'},
                    {id: '8',word:'is'},
                    {id: '9',word:'his'},
                    {id: '10',word:'has'}

                ]},
                { name: 'Level 2', questions: [
                    {id: '1',word:'you'},
                    {id: '2',word:'your'},
                    {id: '3',word:'be'},
                    {id: '4',word:'says'},
                    {id: '5',word:'are'},
                    {id: '6',word:'were'},
                    {id: '7',word:'was'},
                    {id: '8',word:'is'},
                    // {id: '9',word:'his'},
                    // {id: '10',word:'has'}

                ]},
                { name: 'Level 3', questions: [{id: '1',word:'xxxx'},{id: '2',word:'xxxx'}]},
                { name: 'Level 4', questions: [{id: '1',word:'xxxx'},{id: '2',word:'xxxx'}]},
                { name: 'Level 5', questions: [{id: '1',word:'xxxx'},{id: '2',word:'xxxx'}]},
                { name: 'Level 6', questions: [{id: '1',word:'xxxx'},{id: '2',word:'xxxx'}]},
                { name: 'Level 7', questions: [{id: '1',word:'xxxx'},{id: '2',word:'xxxx'}]},
                { name: 'Level 8', questions: [{id: '1',word:'xxxx'},{id: '2',word:'xxxx'}]},
                { name: 'Level 9', questions: [{id: '1',word:'xxxx'},{id: '2',word:'xxxx'}]},
                { name: 'Level 10', questions: [{id: '1',word:'xxxx'},{id: '2',word:'xxxx'}]}
            ]}
        }
    },

    data: {
        /* This object holds the arbitrary data that populates the ViewModel and is then available for binding. */
    }
});