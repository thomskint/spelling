/**
 * Created by ajthomps on 11/15/2016.
 */
Ext.define('Spelling.view.test.TestModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.test',

    stores: {

        testQuestions: {
            model: 'Spelling.model.Question',
            autoLoad: true
        },
    },
    data: {
        activeQuestion: 0,
        questionArr: []
    }
});