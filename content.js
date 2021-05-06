
setInterval( () => {

  // [1] CLose Button
  try {
    document.querySelector('#region-coachmark iframe').contentWindow.document.querySelector('#close-button').click();
  }
  catch (ex) {}

  // [2] Auto replay
  try {
    if (document.getElementsByClassName('PlayButton Tuner__Control__Button Tuner__Control__Play__Button TunerControl')[0].getAttribute('data-qa').includes('play_button')) {
      document.getElementsByClassName('PlayButton Tuner__Control__Button Tuner__Control__Play__Button TunerControl')[0].click();
    }
  }
  catch (ex) {}

  
}, 3000)
