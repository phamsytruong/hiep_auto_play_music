setTimeout( () => {
	console.log('truongps: start auto()');
    Auto();
}, 15 * 1000);


function Auto() {
	let showingAds = false;
	
	// 1. click play to show ads
	// Playlist
	try {
		console.log('truongps: click Playlist');
		document.getElementsByClassName('ButtonRow__button ButtonRow__button--play')[0].click();
	}
	catch(ex){
		
	}
	
	// and then 8s check ads
	setTimeout(() => {
		console.log('truongps: view ads');
		
		// view ads
		try {
			document.querySelector('#region-coachmark iframe').contentWindow.document.querySelector('#reward').click();
			showingAds = true; 
		}
		catch(ex) {
			showingAds = false; 
		}
		
		setTimeout( () => {
			if (showingAds) {
				console.log('truongps: showingAds, waiting 35s to do more ...');
				setTimeout( () => {
					Auto();
				}, 35000);
			}
			else {
				console.log('truongps: not showingAds, waiting 5s to do more ...');
				ClickAuto();
				
				setTimeout( () => {
					Auto();
				}, 5000);
			}
		}, 5000);
		
	}, 8000);
	
	
}

function ClickAuto() {
	// Click Login
	try {
		document.getElementsByClassName('SignupModalButtons__loginLink')[0].click();
	}
	catch(ex) {}
	try {
		document.getElementsByClassName('ButtonT3 ButtonT3--large ButtonT3--dark ButtonT3--full')[0].click();
	}
	catch(ex) {}

	// [1] CLose  Button
	try {
	   document.querySelector('#region-coachmark iframe').contentWindow.document.querySelector('#close-button').click();    
	}
	catch(ex) {
	}

	// resume
	try {
		document.getElementsByClassName('ButtonT3 ButtonT3--inline')[document.getElementsByClassName('ButtonT3 ButtonT3--inline').length - 1].click(); 
	}
	catch(ex) {}
	
	// let me listen
	try {
		document.getElementsByClassName('SimStreamViolation__acceptLink')[0].click();
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
	
}
