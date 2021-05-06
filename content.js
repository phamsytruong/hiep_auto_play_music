

setInterval( () => {
  let bads = false;
  
  // [1] CLose  Button
  try {
    // view ads
    try {
      document.querySelector('#region-coachmark iframe').contentWindow.document.querySelector('#reward').click();
      bads = true;
    }
    catch(ex) {
      
    }
    
    // if false
    try {
      if (!bads) {
        document.querySelector('#region-coachmark iframe').contentWindow.document.querySelector('#close-button').click();  
        console.log('click close');
      }
        
    }
    catch(ex) {
    }
   
    
  }
  catch (ex) {}
  
  try {
    document.getElementsByClassName('ButtonT3 ButtonT3--inline')[document.getElementsByClassName('ButtonT3 ButtonT3--inline').length - 1].click() 
  }
  catch(ex) {}
  
  // Get started
  try {
    document.getElementsByClassName('ButtonT3 ButtonT3--dark ButtonT3--block')[0].click();
  }
  catch(ex) {
  }
  
  // Playlist
  try {
    document.getElementsByClassName('ButtonRow__button ButtonRow__button--play')[0].click();
  }
  catch(ex) {}

  // [2] Auto replay
  try {
    if (document.getElementsByClassName('PlayButton Tuner__Control__Button Tuner__Control__Play__Button TunerControl')[0].getAttribute('data-qa').includes('play_button')) {
      document.getElementsByClassName('PlayButton Tuner__Control__Button Tuner__Control__Play__Button TunerControl')[0].click();
    }
  }
  catch (ex) {}
  
  // loop
  try {
    if (document.getElementsByClassName('RepeatButton Tuner__Control__Button Tuner__Control__Repeat__Button TunerControl')[0].getAttribute('aria-label').includes('Repeat off')) {
      document.getElementsByClassName('RepeatButton Tuner__Control__Button Tuner__Control__Repeat__Button TunerControl')[0].click();
    }
  }
  catch (ex) {}
  
  // random
  try {
    if (document.getElementsByClassName('ShuffleButton Tuner__Control__Button Tuner__Control__Shuffle__Button TunerControl')[0].getAttribute('aria-checked').includes('false')) {
      document.getElementsByClassName('ShuffleButton Tuner__Control__Button Tuner__Control__Shuffle__Button TunerControl')[0].click();
    }
  }
  catch (ex) {}

  
}, 7000)
