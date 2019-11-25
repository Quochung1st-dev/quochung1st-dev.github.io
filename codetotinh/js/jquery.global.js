
jQuery(document).ready(function($) {
	// Stuff to do as soon as the DOM is ready. Use $() w/o colliding with other libs;
	$('#cloud').pan({
		fps: 30, // Frame trĂªn giĂ¢y, fps cĂ ng nhá» thĂ¬ chuyá»ƒn Ä‘á»™ng sáº½ cĂ ng giáº­t.
		speed: 1, // tá»‘c Ä‘á»™ di chuyá»ƒn cá»§a váº­y thá»ƒ
		dir: 'left' // hÆ°á»›ng chuyá»ƒn Ä‘á»™ng, left: pháº£i>trĂ¡i, right: trĂ¡i>pháº£i
	});
	$('#city').pan({
		fps: 30, // Frame trĂªn giĂ¢y, fps cĂ ng nhá» thĂ¬ chuyá»ƒn Ä‘á»™ng sáº½ cĂ ng giáº­t.
		speed: 2, // tá»‘c Ä‘á»™ di chuyá»ƒn cá»§a váº­y thá»ƒ
		dir: 'right' // hÆ°á»›ng chuyá»ƒn Ä‘á»™ng, left: pháº£i>trĂ¡i, right: trĂ¡i>pháº£i
	});
	
	$('#birds-1')
		.sprite({
			fps: 12, // Khung hĂ¬nh / giĂ¢y
			no_of_frames: 3 // sá»‘ lÆ°á»£ng khung hĂ¬nh trong bá»©c áº£nh
		})
		.spRandom({ // Bay tá»± do trong khoĂ£ng cĂ¡ch nhÆ° dÆ°á»›i
          	top: 70,
          	left: 100,
          	right: 200,
          	bottom: 340,
          	speed: 4000,
          	pause: 2000
      	})
      	.isDraggable({ // Náº¿u drag hoáº¡t Ä‘á»™ng, pháº£i thĂªm Jquery Ui vĂ o
		    start: function() { // Khi click chuá»™t vĂ o Ä‘á»‘i tÆ°á»£ng vĂ  kĂ©o
		        // CĂ¡c sá»± kiá»‡n sáº½ diá»…n ra
		        $('#birds-1').fadeTo('fast', 0.7);
		    },
		    stop: function() { // Khi bá» buĂ´n chuá»™t ra
		        // CĂ¡c sá»± kiá»‡n sáº½ diá»…n ra
		        $('#birds-1').fadeTo('fast', 1);
		        $('#birds-1').find("p").html("KĂ©o em Ä‘i....");
		    },
		    drag: function() { // Trong quĂ¡ trĂ¬nh kĂ©o
		        // cĂ¡c sá»± kiá»‡n sáº½ diá»…n ra.
		      	$('#birds-1').find("p").html("HĂ£y kĂ©o em Ä‘i tháº­t xa....");
		    }
		});
	$('#birds-3')
		.sprite({
			fps: 12, // Khung hĂ¬nh / giĂ¢y
			no_of_frames: 3 // sá»‘ lÆ°á»£ng khung hĂ¬nh trong bá»©c áº£nh
		})
		.spRandom({ // Bay tá»± do trong khoĂ£ng cĂ¡ch nhÆ° dÆ°á»›i
          	top: 70,
          	left: 100,
          	right: 200,
          	bottom: 340,
          	speed: 4000,
          	pause: 2000
      	})
      	.isDraggable({ // Náº¿u drag hoáº¡t Ä‘á»™ng, pháº£i thĂªm Jquery Ui vĂ o
		    start: function() { // Khi click chuá»™t vĂ o Ä‘á»‘i tÆ°á»£ng vĂ  kĂ©o
		        // CĂ¡c sá»± kiá»‡n sáº½ diá»…n ra
		       $('#birds-3').fadeTo('fast', 0.7);
		    },
		    stop: function() { // Khi bá» buĂ´n chuá»™t ra
		        // CĂ¡c sá»± kiá»‡n sáº½ diá»…n ra
		       	$('#birds-3').fadeTo('fast', 1);
		        $('#birds-3').find("p").html("ÄÆ°a thÆ° cho izwebz nĂ o !!!");
		    },
		    drag: function() { // Trong quĂ¡ trĂ¬nh kĂ©o
		        // cĂ¡c sá»± kiá»‡n sáº½ diá»…n ra.
		      	$('#birds-3').find("p").html("ÄÆ°a thÆ° Ä‘Æ°a thÆ° nĂ o....");
		    }
		});	
	$('#birds-2')
		.sprite({
			fps: 12, 
			no_of_frames: 3
		})
		.spRandom({
	      	top: 140,
		    left: 500,
		    right: 250,
		    bottom: 140,
		    speed: 3000,
		    pause: 2000
	    });
});