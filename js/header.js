/////////////////Responsive header :) /////////////////////
        // Fsad
        $(document).ready(function(){
            //Donc Dès qu'on clique sur menuButon, il faut excecuter les instructions suivantes
            $(".menuButon").click(function(){
                //menuButon aura une nouvelle classe qui s'appelle 'active'
                $(".menuButon").toggleClass("active")
                //comme menuButon, <nav> aussi aura sera desormais ratachée à un nouvelle classe qui sappelle 'active'
                $("nav").toggleClass("active")
            })
        })

/////////////////END Responsive header :) /////////////////////
