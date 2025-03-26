(function ($) {
    "use strict";

    function removePickup() {
        //Local Storage
        const LOCAL_STORAGE_TASKS_KEY = "tasks";
    
        let tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASKS_KEY));
    
        function save() {
          localStorage.setItem(LOCAL_STORAGE_TASKS_KEY, JSON.stringify(tasks));
        }
        tasks = tasks.filter((task) => !task.name.includes("Pickup for: "));
        save();
        window.location.reload();
      }

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });


    // paperCount Progress Bar
    let paperCount = 0;
    const maxPapers = 100; // adjust this value to set the maximum number of papers
    
    // function to update the progress bar
    function updateProgressBar() {
        if (paperCount >= maxPapers) {
          alert("Bin full!! please Schedule appointment soon!!");
          return;
        }
      
        const progress = Math.floor((paperCount / maxPapers) * 100); // round down to whole number
        $('#paper-progress-bar').css('--progress', progress + "%");
        $('#paper-progress-bar').attr('aria-valuenow', progress);
        $('#paper-count').text(`${progress}%`);
      }
    
    // increase paper count when user clicks on paper-div
    $('#paper-div').on('click', () => {
      paperCount++;
      updateProgressBar();
    });
    
    // Create a button to reset the paper count
    $('#reset-paper-button').on('click', function() {
        if (paperCount === 0){return;}
        paperCount = 0;
        updateProgressBar();
        removePickup();
      });

    // initialize the progress bar
    updateProgressBar();



// Glass Progress Bar
let glassCount = 0;
const maxGlasses = 100; // adjust this value to set the maximum number of glasses

// function to update the progress bar
function updateGlassProgressBar() {
  if (glassCount >= maxGlasses) {
     alert("Bin full!! please Schedule appointment soon!!");
    return;
  }
  
  const progress = Math.floor((glassCount / maxGlasses) * 100); // round down to whole number
  $('#glass-progress-bar').css('--progress', progress + "%");
  $('#glass-progress-bar').attr('aria-valuenow', progress);
  $('#glass-count').text(`${progress}%`);
}

// increase glass count when user clicks on glass-div
$('#glass-div').on('click', () => {
  glassCount++;
  updateGlassProgressBar();
});

$('#reset-glass-button').on('click', function() {
    if (glassCount === 0){return;}
    glassCount = 0;
    updateGlassProgressBar();
    removePickup();
  });

// initialize the progress bar
updateGlassProgressBar();


// Plastic Progress Bar
let plasticCount = 0;
const maxPlastics = 75; // adjust this value to set the maximum number of plastics

// function to update the progress bar
function updatePlasticProgressBar() {
  if (plasticCount >= maxPlastics) {
     alert("Bin full!! please Schedule appointment soon!!");
    return;
  }
  
  const progress = Math.floor((plasticCount / maxPlastics) * 100); // round down to whole number
  $('#plastic-progress-bar').css('--progress', progress + "%");
  $('#plastic-progress-bar').attr('aria-valuenow', progress);
  $('#plastic-count').text(`${progress}%`);
}

// increase plastic count when user clicks on plastic-div
$('#plastic-div').on('click', () => {
  plasticCount++;
  updatePlasticProgressBar();
});

$('#reset-plastic-button').on('click', function() {
    if (plasticCount === 0){return;}
    plasticCount = 0;
    updatePlasticProgressBar();
    removePickup();
  });

// initialize the progress bar
updatePlasticProgressBar();


// Can Progress Bar
let canCount = 0;
const maxCans = 50; // adjust this value to set the maximum number of cans

// function to update the progress bar
function updateCanProgressBar() {
  if (canCount >= maxCans) {
     alert("Bin full!! please Schedule appointment soon!!");
    return;
  }
  
  const progress = Math.floor((canCount / maxCans) * 100); // round down to whole number
  $('#can-progress-bar').css('--progress', progress + "%");
  $('#can-progress-bar').attr('aria-valuenow', progress);
  $('#can-count').text(`${progress}%`);
}

// increase can count when user clicks on can-div
$('#can-div').on('click', () => {
  canCount++;
  updateCanProgressBar();
});

$('#reset-can-button').on('click', function() {
    if (canCount === 0){return;} 
    canCount = 0;
    updateCanProgressBar();
    removePickup();
  });

// initialize the progress bar
updateCanProgressBar();

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav : false
    });

    
})(jQuery);

