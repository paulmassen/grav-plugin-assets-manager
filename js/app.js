 $(document).ready(
function autoCompleteInit(){
    $(document).find(".autoComplete").each(function(){
       var $input = $(this);
       var comp = $input;
      console.log($input)
       if ($input.next(".easy-autocomplete-container").length == 0 ) {
       var $url = $(this).data("url");
       var options = {
        url: function(phrase) {
            return "https://api.cdnjs.com/libraries?search="  + phrase;
        },
        getValue: function(element) {
            return element.latest;
        },
           template: {
            type: "description",
            fields: {
                description: "name"
            }
        },
        ajaxSettings: {
            dataType: "json",
            method: "GET",
            data: {
            //    dataType: "json"
            }
        },
        categories: [
            {   //Category fruits
                listLocation: "results",
                header: "results"
            }
        ],
        list: {
            maxNumberOfElements: 20,
            match: {
                enabled: true
            }
        },
       // theme: "plate-dark",
       // preparePostData: function(data) {
       //     data.phrase = $(comp).val();
       //     return data;
       // },
        requestDelay: 400
    };
         $input.easyAutocomplete(options);
         console.log("init");
            };
            
        })
  
 // $('#newfield').click(function() {
//var dummy = '<div id="wrapper"><input type="text" class="autoComplete" id="target"></input></div>';
//document.getElementById('big').innerHTML += dummy;  
// $(".autoclass").easyAutocomplete(options);
//   autoCompleteInit
// });

// list.on('click', '> .collection-actions [data-action="add"]', (event) => this.addItem(event));
  $('body').on('mutation._grav', function() {
    //$('button[data-action="add"]').click(function() {
    $(document).find(".autoComplete").each(function(){
       var $input = $(this);
       if ($input.next(".easy-autocomplete-container").length == 0 ) {
       var $url = $(this).data("url");
       var options = {
        url: function(phrase) {
           // var phrase = phrase.replace("&","?");
           // var phrase = param.replace("phrase=","");
            return "https://api.cdnjs.com/libraries?search=" + phrase;
        },
        getValue: function(element) {
            return element.latest;
        },
        template: {
            type: "description",
            fields: {
                description: "name"
            }
        },
        ajaxSettings: {
            dataType: "json",
            method: "GET",
            data: {
              // output: "human"
            }
        },
        categories: [
            {   //Category fruits
                listLocation: "results",
                header: "results"
            }
        ],
        list: {
            match: {
                enabled: true
            }
        },
        // theme: "plate-dark",
        //preparePostData: function(data) {
        //    data = $('input').val();
        //    return data;
        //},
        requestDelay: 400
    };
         $input.easyAutocomplete(options);
         console.log("init");
            };
   
 });
      });
});

