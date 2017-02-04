//headroom.js
 // grab an element
    var myElement = document.querySelector(".navbar");
    // construct an instance of Headroom, passing the element
    var headroom  = new Headroom(myElement);
    // initialise
    headroom.init();

    var menuButton = document.querySelector('#menu');
    var chevron = document.querySelector('#chevron');
    transform = getComputedStyle(chevron).getPropertyValue('transform');
    menuButton.onmouseover = chevron.setAttribute('transform', transform);

    var logo = document.querySelector('#logo');
    var navPageTitle = document.querySelector('#nav-page-title');
    logo.onmouseover = function() {navPageTitle.style.display = 'none'};
    logo.onmouseout = function() {navPageTitle.style.display = 'inline-block'};

//menu
	var $button = $('#menu');
    var $menu = $('.menu-list');
    var $ol = $('#menu-items');
    var visible = false;
    $menu.hover(function(e) {
      if (visible) {
        $ol.slideUp(0, function() {
          $ol.addClass('hide');
          $ol.slideDown('fast');
        });
      } else {
          $ol.slideUp(0, function() {
          $ol.removeClass('hide');
          $ol.slideDown('fast', function() {
          	// $button.on('click', buttonHandler);
          });
        });
      }
      visible = !visible;
	});
	// function buttonHandler() {
	// 	$button.off('click', buttonHandler);
	// 	$ol.slideUp('fast', function() {
 //        	$ol.addClass('hide');
 //        	$ol.slideDown(0);
 //    	});
	// }
    

//icons
    var icons = $('[id^="icon-"]');
    icons.each(function(index, icon) {
      $(this).css('width', Math.round($(this).width() * .1) + 'vw');
    });

//pie charts
var revenueResults = [
             {name: "INDIVIDUALS", count: 190826, color: "#1D637B"},
             {name: "FOUNTATIONS", count: 78845, color: "#2A9DBD"},
             {name: "GOVERNMENT", count: 31067, color: "#39D8FF"},
             {name: "CORPORATE", count: 8577, color: "#848B91"},
             {name: "826NATIONAL CONTRIBUTIONS", count: 50211, color: "#848B91"},
             {name: "FUNDRAISING EVENTS", count: 113297, color: "#CED0D3"},
             {name: "EARNED INCOME", count: 203152, color: "#FFFFFF"},
            ];

           var expensesResults = [
              {name: "PROGRAMMING", count: 400409, color: "#FFFFFF"},
              {name: "FUNDRAISING", count: 51676, color: "#39D8FF"},
              {name: "ADMINISTRATIVE", count: 28002, color: "#1D637B"},
            ];

          function drawCharts(scale) {
            //revenue
            var cx = document.querySelector('#income').getContext("2d");
            var total = revenueResults.reduce(function(sum, choice) {
                                        return sum + choice.count;
                                      }, 0);
            cx.clearRect(0, 0, document.querySelector('#income').width, document.querySelector('#income').height);
            // Start at the top
            var currentAngle = -0.5 * Math.PI;
            
            if (scale == 'md') {
              if (lastCanvasSize == 'lg') cx.scale(.7, .7);
            } else if (scale == 'lg') {
              if (lastCanvasSize == 'md') cx.scale(1.43, 1.43);
            }
            lastCanvasSize = scale;
            
            revenueResults.forEach(function(result) {
              var sliceAngle = (result.count / total) * 2 * Math.PI;
              cx.beginPath();
              cx.arc(320, 335, 319,
                     currentAngle, currentAngle + sliceAngle);
              currentAngle += sliceAngle;
              cx.lineTo(320, 335);
              cx.strokeStyle = result.color;
              cx.stroke();
            });

            cx.beginPath();
            cx.moveTo(306, 670);
            cx.lineTo(303, 686);
            cx.strokeStyle = revenueResults[4]['color'];
            cx.stroke();

            cx.beginPath();
            cx.moveTo(428, 653);
            cx.lineTo(435, 670);
            cx.strokeStyle = revenueResults[3]['color'];
            cx.stroke();

            cx.beginPath();
            cx.moveTo(488, 623);
            cx.lineTo(495, 634);
            cx.lineTo(548, 634);
            cx.strokeStyle = revenueResults[2]['color'];
            cx.stroke();

            //expenses
            var cx = document.querySelector('#expenses').getContext("2d");
            var total = expensesResults.reduce(function(sum, choice) {
                                        return sum + choice.count;
                                      }, 0);
            cx.clearRect(0, 0, document.querySelector('#expenses').width, document.querySelector('#expenses').height);
            // Start at the top
            var currentAngle = -0.5 * Math.PI;
            expensesResults.forEach(function(result) {
            var sliceAngle = (result.count / total) * 2 * Math.PI;
            cx.beginPath();
            cx.arc(234, 260, 232,
                   currentAngle, currentAngle + sliceAngle);
            currentAngle += sliceAngle;
            cx.lineTo(234, 260);
            cx.strokeStyle = result.color;
            cx.stroke();
            });

            cx.beginPath();
            cx.moveTo(182, 1);
            cx.lineTo(186, 19);
            cx.strokeStyle = expensesResults[2]['color'];
            cx.stroke();
          }

          function drawMobileChart(chartId, results) {
            var cx = document.querySelector(chartId).getContext('2d');
            var total = results.reduce(function(sum, choice) {
              return sum + choice.count;
            }, 0);
            var currentAngle = -0.5 * Math.PI;
            var counter = 0;
            cx.clearRect(0, 0, chartId.width, chartId.height);
            results.forEach(function(result) {
              counter++;
              var sliceAngle = (result.count / total) * 2 * Math.PI;
              
              cx.beginPath();
              cx.arc(145, 145, 145,
                currentAngle, currentAngle + sliceAngle);
              if (counter == results.length) var angle = currentAngle;
              currentAngle += sliceAngle;
              cx.lineTo(145, 145);
              cx.fillStyle = result.color;
              cx.strokeStyle = '#0a1724';
              cx.lineWidth = 4;
              cx.fill();
              cx.stroke();
              if (counter == results.length) {
                var sliceAngle = (results[results.length - 1].count / total) * 2 * Math.PI;
                cx.fill();
                cx.beginPath();
                cx.arc(145, 145, 145,
                  angle, angle + sliceAngle);
                cx.stroke();
              } 
            });
          }
          var md = window.matchMedia('all and (min-width: 621px) and (max-width: 764px)');
          var lastCanvasSize = 'lg';
          var mobile = window.matchMedia( 'all and (max-width: 620px)' );
          var handler = function() {
            if(mobile.matches) {
                drawMobileChart('#income--mobile', revenueResults);
                drawMobileChart('#expenses--mobile', expensesResults);
            } else if (md.matches) {
              drawCharts('md');
            } else {
              drawCharts('lg');
            }
          }
          handler();
          window.onresize = handler;

