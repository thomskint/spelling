/**
 * Created by ajthomps on 11/16/2016.
 */
Ext.define('Spelling.view.test.letters.LettersController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.letters',

    /**
     * Called when the view is created
     */
    init: function() {

    },
    
    letterTap: function(dataview, rowIdx, el, record, e) {
        var model =  dataview.up().getViewModel(),
            answer = model.get('answer');
        if (e.getTarget('button')) {
            if(record.get('id') === 27){
                answer = answer.slice(0, -1);
            }else{
                answer = answer + record.get('letter')
            }
            model.set('answer',answer);
         }
    }
});
