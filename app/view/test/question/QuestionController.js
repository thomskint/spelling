/**
 * Created by ajthomps on 11/15/2016.
 */
Ext.define('Spelling.view.test.question.QuestionController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.question',

    /**
     * Called when the view is created
     */
    init: function() {
        var me = this,
            model = this.getViewModel();
        model.set('question',this.getView().getData());
        model.bind({
                bindTo: '{answer}'
                //deep: true
            },
            function (someObject) {
                me.updateAnswers(someObject);
            });
    },
    voiceWord: function(button){
        var model = this.getViewModel();
        responsiveVoice.speak(model.get('question').getData().word);
    },

    updateAnswers: function(answer){
        var model = this.getViewModel(),
            q = model.get('question'),
            s = model.getParent().getStore('testQuestions');
            s.findRecord('id',q.get('id')).set('answer',answer);
    },
    onResult: function(){

    }
});