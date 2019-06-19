import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

  // jquery function to add/remove footer on scroll

  // $(window).scroll(function(event) {
  //   function footer()
  //     {
  //         var scroll = $(window).scrollTop(); 
  //         if(scroll > 30)
  //         { 
  //             $(".footer").fadeIn("slow").addClass("show");
  //         }
  //         else
  //         {
  //             $(".footer").fadeOut("slow").removeClass("show");
  //         }
          
  //         clearTimeout($.data(this, 'scrollTimer'));
  //         $.data(this, 'scrollTimer', setTimeout(function() {
  //             if ($('.footer').is(':hover')) {
  //             footer();
  //         }
  //             else
  //             {
  //               $(".footer").fadeOut("slow");
  //             }
  //     }, 2000));
  //     }
  //     footer();
  // });
  
