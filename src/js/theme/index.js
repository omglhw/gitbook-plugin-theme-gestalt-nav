/*
 * @Descripttion: 
 * @version: 
 * @Author: lihw02
 * @Date: 2020-12-30 14:05:54
 * @LastEditors: lihw02
 * @LastEditTime: 2021-01-07 18:41:33
 */
var dropdown =   require('./dropdown');
var keyboard =   require('./keyboard');
var navigation = require('./navigation');
var sidebar =    require('./sidebar');
var toolbar =    require('./toolbar');
var anchor =    require('./anchor');
var scrollnav =    require('./scrollnav.min.umd');


var gitbook = window.gitbook;

function init() {
    // Init sidebar
    sidebar.init();

    // Init keyboard
    keyboard.init();

    // Bind dropdown
    dropdown.init();

    // // Init navigation
    navigation.init();
    console.log('init :>> ');
    console.log('scrollna2v :>> ', scrollnav);

    // Add action to toggle sidebar
    toolbar.createButton({
        index: 0,
        icon: 'fa fa-align-justify',
        onClick: function(e) {
            e.preventDefault();
            sidebar.toggle();
        }
    });
}

gitbook.events.on('start', init);

gitbook.events.on('page.change', function() {
    // Init anchor
    anchor.init();
});

gitbook.keyboard = keyboard;
gitbook.navigation = navigation;
gitbook.sidebar = sidebar;
gitbook.toolbar = toolbar;
