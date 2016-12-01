/**
 * Created by ajthomps on 11/21/2016.
 */
Ext.define('Spelling.view.test.answers.Answers', {
    extend: 'Ext.List',

    requires: [
        'Spelling.view.test.answers.AnswersModel',
		'Spelling.view.test.answers.AnswersController'
    ],

    cls: 'answers-list',

    layout: {
        type: 'fit',
        stretch: 'fit'
    },

    xtype: 'answers',

    useSimpleItems: true,

    viewModel: {
        type: 'answers'
    },

    disclosureProperty:false,
    //scrollable: 'y',

    title: 'ANSWERS',

    controller: 'answers',

    width: '100%',

    itemTpl : new Ext.XTemplate(

        '<tpl if="word !== answer">',
        '<div class="answer-list wrong">{word}<div class="x-listitem-disclosure"><div class="pictos">C</div></div>',
        '<tpl else>',
        '<div class="answer-list right">{word}<div class="x-listitem-disclosure"><div class="pictos">3</div></div>',
        '</tpl>',
        '</div>'
    ),

    listeners: {
        itemswipe: function(view , index , target , record , e , eOpts){

        },
        select: function(view, record) {
            console.log(record);
            console.log(view);
            //Ext.Msg.alert('Selected!', 'You selected ' + record.get('answer'));
        }
    }

});