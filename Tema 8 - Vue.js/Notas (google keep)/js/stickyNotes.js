// Usa el modo estricto
"use strict";

(function stickyNotes() {

    /*
    ---------------------------
        Functions
    ---------------------------
    */

    // Definir una función para obtener el parámetro de enlace.
    function getParam(query) {
        var param = {};
        var link = window.location.search;
        link = link.replace('?', '');
        var divide = link.split('&').forEach(function(variable){
           var half = variable.split('=');
           param[half[0]] = half[1];
        });
        
        if (param[query]) {
            return param[query];
        } else {
            return '';
        }
    }


    var header = new Vue({
        el: '#header',
        data: {
            isHashtag: getParam('s')
        }
    });


    var addNote = new Vue({
        el: '#notes',
        components: {
            'sticky-notes': httpVueLoader('components/multiNotes.vue'),
            'shared-note': httpVueLoader('components/sharedNote.vue')
        }
    });    

})();
