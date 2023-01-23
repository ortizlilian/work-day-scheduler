// Displays the current time and date in the jumbutron 
// var today = moment();
$("#currentDay").text(moment().format('MMMM Do YYYY, LTS'));

// 2. Colour code each block based on the current time
//      Create variables to target each time block

var timeblocks = $('.timeblock');
// console.log(timeblocks);
// console.log(timeblocks[0].attr('hour'));
// var timeblock1 = timeblocks[0].attr('data-hour'); // O PROBLEMA TA AQUI .attr('data-hour')
// console.log(timeblock1);
// console.log(timeblocks);
//      In the html add the data-hour that represents which hour each element is
//      Create variable for moment().format(H) (0 - 23) e.g. thisHour
// function setColor() {
//     var thisHour = moment().format('H');

//     for (let i = 0; i < timeblocks.length; i++) {
//         if (this.attr('data-hour') < thisHour) {
//             this.css({'background-color': '#bfbfbf'});
//         }    
//     }
// }
// setColor();
    // timeblocks.forEach(function () {
    //     console.log(this);
//         if (element.attr('data-hour') < thisHour) {
//             element.css({'background-color': '#bfbfbf'});
//         } else if (element.attr('data-hour') == thisHour) {
//             element.css({'background-color': '#f54242'});
//         } else {
//             element.css({'background-color': '#42f55d'});
//         }
    // });
// }

// setColor();
  
    timeblocks.each(function(index, value) {
        console.log(value.dataset.hour);
        let thisHour = moment().format('H');
        // console.log(thisHour);
        let hour = Number(value.dataset.hour);
        if (hour < thisHour) {
            $(this).css({'background-color': '#bfbfbf'});
            
        } else if (hour == thisHour) {
            $(this).css({'background-color': '#f54242'});
        } else {
            $(this).css({'background-color': '#42f55d'});
            console.log(hour, thisHour);
        }
    });


// 3. Save input to local storage
//      create variable (an array) called inputs that will store all of the input data
//      Add event listener to all save button
//          Add event.preventDefault inside the click event listener
//          Push the input value to inputs array with the format of { time: xx, input: xxx }
//              Get the input value
//              Get the hour value
//              Push to the inputs array if the hour entry not exist yet in the array
//              Replace the existing entry if the hour entry exist in the array
//          Save inputs variable to local storage
//              Stringify the inputs array
//          Show feedback message to the user (optional)
//          The feedback need to be dissappeared automatically
//
//      Example of inputs array format
//      var inputs = [{
//        time: 9,
//        input: 'Meeting',
//      },{
//        time: 10,
//        input: 'Coffee',
//      },...];
// 4. Load input from local storage when page load/refresh if there's any data in local storage
//      var localStorageInput = get data from local storage
//      check if localStorageInput exist, if it is
//          var parsedLocalStorageInput = parse localStorageInput
//          populate the inputs with the value from parsedLocalStorageInput
//          inputs.forEach(function(input) {
//              input => {
//                time: 9,
//                input: 'Meeting',
//              }
//              $('.timeblock[data-hour="' + input.time + '"] textarea').val(input.input)
//          })
//      if theres no data in local storage, do nothing

// Extra, add hover effect on the save button
