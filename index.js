
		$(document).ready(function () {
			// timetable overlay functions 
				// click functions for main-center-button
			$(".main-center-button").mousedown(function () {
				$(this).addClass(".selected");
			});
			$(".main-center-button").mouseenter(function () {
				$(this).addClass(".selected");
			});
			$(".main-center-button").mouseup(function () {
				$(this).removeClass(".selected");
			});
			$(".main-center-button").mouseleave(function () {
				$(this).removeClass(".selected");
			});
				// click functions for transition
			$(".main-center-button.right").click(function () {
				$(".timetable-header-view").fadeIn("fast");
				$(".timetable-backdrop").fadeIn("fast");
				$(".timetable-content-view").fadeIn("fast");

			})

			$(".timetable-off").click(function () {
				$(this).parent().fadeOut("fast");
				$(".timetable-content-view").fadeOut("fast");
				$(".timetable-backdrop").fadeOut("fast");
			})
			// ends here 

			// about dev block 
			$(".about-dev-btn").click(function () {
				hideAllOverlays();
				$(".fullscreen-backdrop").fadeIn("slow");
				$(".about-dev-overlay").fadeIn("slow");
			})
			// map show block 
			$(".contact-map-img").click(function () {
				hideAllOverlays();
				$(".fullscreen-backdrop").fadeIn("slow");
				$(".map-show-block").fadeIn("slow");
			});

			// login button 
			$(".login-button").click(function () {
				hideAllOverlays();
				$(".fullscreen-backdrop").fadeIn("slow");
				$(".login-block").fadeIn("slow");
				// $("#userid").focus();
			});

			// menu toggle 
			$(".menu-toggle").click(function () {
				hideAllOverlays();
				$(".fullscreen-backdrop").fadeIn("fast");
				$(".side-menu-backdrop").fadeIn("fast");
				$(".side-menu").slideToggle("fast");
			});

			// fullscreen backdrop 
			$(".fullscreen-backdrop").click(function () {
				hideAllOverlays();
			});

			// disappear all overlay // function

			var hideAllOverlays = function () {
				$(".side-menu-backdrop").fadeOut("fast");
				$(".side-menu").fadeOut("fast");

				$(".map-show-block").fadeOut("slow");
				$(".login-block").fadeOut("slow");
				$(".about-dev-overlay").fadeOut("slow");

				$(".fullscreen-backdrop").fadeOut("slow");
			}

			// updateTimetable function *****
			var updateTimetable = function () {
				
				var cName = ".timetable_";

				for (var i = 0 ; i < 7 ; i ++) {
					for (var ii = 0 ; ii < 3 ; ii ++) {
						cName = ".timetable_" + i + "_" + ii;
						$(cName).html(timetableObj.timetable.classes[i][ii]);
					}
				}
			}
			updateTimetable();
			// end *****
		});