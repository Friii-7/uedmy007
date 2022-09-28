$(document).ready(function(){
    
  
  //Slider
  if(window.location.href.indexOf('index') > -1){
    $('.galeria').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive: true,
        pager: true
      }); 
    
    }

      // Posts
      if(window.location.href.indexOf('index') > -1){
      var posts = [
        {
          title: 'Pureba de titulo 1',
          date: 'Publicado el dia ' + moment().format() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
          content : ' Where does it come fromContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC'
        },
        {
          title: 'Pureba de titulo 2',
          date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
          content : ' Where does it come fromContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC'
        },
        {
          title: 'Pureba de titulo 3',
          date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
          content : ' Where does it come fromContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC'
        },
        {
          title: 'Pureba de titulo 4',
          date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
          content : ' Where does it come fromContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC'
        },
        {
          title: 'Pureba de titulo 5',
          date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
          content : ' Where does it come fromContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC'
        },
        {
          title: 'Pureba de titulo 6',
          date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
          content : ' Where does it come fromContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC'
        },
      ];
      
      posts.forEach((item, index) => {
        var post = `
            <article class="post">
                        <h2>${item.title}</h2>
                        <span class="date">${item.date}</span>
                        <p>
                            ${item.content}
                        </p>
                        <a href="#" class="button-more">Leer mas</a>
                    </article>
       `;

        $("#posts").append(post);
      });
    }

      //selector de tema 
          var theme = $("#theme");
          $("#to-green").click(function(){
            theme.attr("href", "green.css");
        });
        $("#to-red").click(function(){
          theme.attr("href", "red.css");
      });
      $("#to-blue").click(function(){
        theme.attr("href", "blue.css");
    });

    //scroll arriba de la web
    $('.subir').click(function(e){
      e.preventDfault();

      $('html, body').animate({
          scrollTop: 0
      }, 500);

      return false;

    });

    //login falso

    $("#login form").submit(function(){
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);
      });


      var form_name = localStorage.getItem("form_name");
        
        if(form_name != null && form_name != "undefined"){
          var about_parrafo = $("#about p");
          
          about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong> ");
          about_parrafo.append("<a href='#' id='logout'>Cerrar sesion</a>");

          $("#login").hide();

          $("#logout").click(function(){
            localStorage.clear();
            location.reload();
          });
          
        }
        
        if(window.location.href.indexOf('about') > -1){
          $("#acordeon").accordion();
        }
});