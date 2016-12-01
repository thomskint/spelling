/**
 * Created by ajthomps on 11/15/2016.
 */
Ext.define('Spelling.view.test.TestController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.test',
    listen: {
        global: {
            loadTest: 'onLoadTest'
        }
    },
    /**
     * Called when the view is created
     */
    init: function() {
        var me = this;
    },
    
    onLoadTest: function(testRecord){
        var me = this,
            questions = me.getView().lookupReference('questions'),
            testStore = this.getViewModel().getStore('testQuestions');
            testStore.setData(testRecord.get('questions'));
            a = [];

        // save items (not needed, probably need to keep a reference for later use)
        var buttons = questions.getItems().items[0]
        //remove everytihing
        questions.removeAll(false);
        questions.add(buttons);
        a.push({
            xtype: 'answers',
            bind: {
                store: '{testQuestions}'
            }
        });
        testStore.each(function(question){
                a.push({
                    xtype: 'question',
                    data: question
                });
        });
        a.push({
            xtype: 'answers',
            bind: {
                store: '{testQuestions}'
            }
        });
        var model = this.getViewModel();
            model.set('questionArr',a);
    }
});