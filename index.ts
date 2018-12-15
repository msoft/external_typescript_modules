/// <reference path="node_modules/@types/jquery/index.d.ts" />

class Startup {

        public static main(): number {
    
        console.log("OK");

        var data = [
            [
                "Gianluigi Buffon",
                "PSG"
            ],
            [
                "Kylian Mbappé",
                "PSG"
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
                datatable.cell(1, 1).data('Madrid').draw();
            });
        });

        return 0;
    }
}

Startup.main();
