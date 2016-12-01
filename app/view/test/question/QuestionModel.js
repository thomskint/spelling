/**
 * Created by ajthomps on 11/15/2016.
 */
Ext.define('Spelling.view.test.question.QuestionModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.question',

    stores: {

    },

    data: {
        question: {},
        answer: ""
    },
    formulas: {
         answersReady: {
            bind: {
                answer: '{answer}'
            },
            get: function (data) {
                var arr = this.getParent().getStore('testQuestions'),
                    ready = false;

                this.getParent().getStore('testQuestions').each(function(question){
                    console.log(question.data.answer);
                    if(question.data.answer === ""){
                        ready = true;
                    }

                });
                return ready;
            }
        }
    }

});