// import { publicFunc as publicFuncFromModule1 } from "./module1";
// import 'jquery';

//import ImportedModules;
// import * as moduleInFile from './dependencies'; 



//declare const $: any;

class Startup {

        public static main(): number {
    
        // publicFuncFromModule1();
        console.log("OK");


        var data = [
            [
                "Tiger Nixon",
                "System Architect",
                "Edinburgh",
                "5421",
                "2011/04/25",
                "$3,120"
            ],
            [
                "Garrett Winters",
                "Director",
                "Edinburgh",
                "8422",
                "2011/07/25",
                "$5,300"
            ]
        ]

        $(document).ready( function () {
            var datatable = $('#table_id').DataTable({
                data,                           
            });
        } );

        $(document).ready(function(){
            $('#clickme').click(function(){
                var datatable = $('#table_id').DataTable();
                datatable.cell(1, 1).data('new data').draw();
            });
        });

        return 0;
    }
}

Startup.main();
