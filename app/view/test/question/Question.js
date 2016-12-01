/**
 * Created by ajthomps on 11/15/2016.
 */
Ext.define('Spelling.view.test.question.Question', {
    extend: 'Ext.Container',

    requires: [
        'Spelling.view.test.question.QuestionModel',
		'Spelling.view.test.question.QuestionController'
    ],

    xtype: 'question',

    defaults: {
        //cls: 'demo-solid-background',
        margin: '0 5 10 5'
    },

    viewModel: {
        type: 'question'
    },

    layout: {
        type: 'vbox'
    },

    controller: 'question',

    items: [
        {
            xtype: 'textfield',
            placeHolder: 'Start Spelling',
            bind: {
                value: '{answer}'
            },
            height: 50

        },
        {
            xtype: 'button',
            handler: 'voiceWord',
            text: 'Hear the word',
            margin: '0 5 10 5',
            scale: 'large'
        },
        {
            xtype: 'letters'
        },
        {
            xtype: 'button',
            text: 'Get My Result!',
            handler: 'onResult',
            scale   : 'large',
            bind:{
                hidden: '{answersReady}'
            } 

        }
        /* include child components here */
    ]
});