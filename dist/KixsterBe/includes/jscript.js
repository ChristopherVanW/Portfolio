function flipBox(who) {
	var tmp; 
	if (document.images['b_' + who].src.indexOf('_on') == -1) { 
		tmp = document.images['b_' + who].src.replace('_off', '_on');
		document.getElementById('box_' + who).style.display = 'none';
		document.images['b_' + who].src = tmp;
	} else { 
		tmp = document.images['b_' + who].src.replace('_on', '_off');
		document.getElementById('box_' + who).style.display = 'block';
		document.images['b_' + who].src = tmp;
	} 
}

function addText(elname, wrap1, wrap2) {
	if (document.selection) { // for IE 
		var str = document.selection.createRange().text;
		document.forms['inputform'].elements[elname].focus();
		var sel = document.selection.createRange();
		sel.text = wrap1 + str + wrap2;
		return;
	} else if ((typeof document.forms['inputform'].elements[elname].selectionStart) != 'undefined') { // for Mozilla
		var txtarea = document.forms['inputform'].elements[elname];
		var selLength = txtarea.textLength;
		var selStart = txtarea.selectionStart;
		var selEnd = txtarea.selectionEnd;
		var oldScrollTop = txtarea.scrollTop;
		//if (selEnd == 1 || selEnd == 2)
		//selEnd = selLength;
		var s1 = (txtarea.value).substring(0,selStart);
		var s2 = (txtarea.value).substring(selStart, selEnd)
		var s3 = (txtarea.value).substring(selEnd, selLength);
		txtarea.value = s1 + wrap1 + s2 + wrap2 + s3;
		txtarea.selectionStart = s1.length;
		txtarea.selectionEnd = s1.length + s2.length + wrap1.length + wrap2.length;
		txtarea.scrollTop = oldScrollTop;
		txtarea.focus();
		return;
	} else {
		insertText(elname, wrap1 + wrap2);
	}
}

function insertText(elname, what) {
	if (document.forms['inputform'].elements[elname].createTextRange) {
		document.forms['inputform'].elements[elname].focus();
		document.selection.createRange().duplicate().text = what;
	} else if ((typeof document.forms['inputform'].elements[elname].selectionStart) != 'undefined') { // for Mozilla
		var tarea = document.forms['inputform'].elements[elname];
		var selEnd = tarea.selectionEnd;
		var txtLen = tarea.value.length;
		var txtbefore = tarea.value.substring(0,selEnd);
		var txtafter =  tarea.value.substring(selEnd, txtLen);
		var oldScrollTop = tarea.scrollTop;
		tarea.value = txtbefore + what + txtafter;
		tarea.selectionStart = txtbefore.length + what.length;
		tarea.selectionEnd = txtbefore.length + what.length;
		tarea.scrollTop = oldScrollTop;
		tarea.focus();
	} else {
		document.forms['inputform'].elements[elname].value += what;
		document.forms['inputform'].elements[elname].focus();
	}
}

function show_hide(msg_id) {
	msg_id.style.display = msg_id.style.display == 'none' ? 'block' : 'none';
}
/* Start Todays1Liner JavaScript */
 
var msg = new Array(); 
Stamp = new Date(); 
today = Stamp.getDate(); 
msg[1] = "Change is inevitable, except from a vending machine."; 
msg[2] = "Death is hereditary."; 
msg[3] = "Don't piss me off! I'm running out of places to hide the bodies. "; 
msg[4] = "Double your drive space. Delete Windows! "; 
msg[5] = "Error, no keyboard. Press F1 to continue."; 
msg[6] = "Ever notice how fast Windows runs? Neither did I."; 
msg[7] = "Everyone has a photographic memory. Some don't have film."; 
msg[8] = "Experience is something you don't get until just after you need it."; 
msg[9] = "For Sale: Parachute. Only used once, never opened, small stain. "; 
msg[10] = "Hard work has a future payoff. Laziness pays off now. "; 
msg[11] = "How do you tell when you run out of invisible ink? "; 
msg[12] = "I am not a vegetarian because I love animals. I am a vegetarian because I hate plants."; 
msg[13] = "I couldn't repair your brakes, so I made your horn louder. "; 
msg[14] = "I don't suffer from insanity. I enjoy every minute of it. "; 
msg[15] = "I used to have a handle on life, and then it broke."; 
msg[16] = "I used to have an open mind but my brains kept falling out. "; 
msg[17] = "I'm as confused as a baby in a topless bar. "; 
msg[18] = "I'm not a complete idiot, some parts are missing! "; 
msg[19] = "If Barbie is so popular, why do you have to buy her friends? "; 
msg[20] = "If you can't convince them, confuse them."; 
msg[21] = "If you tell the truth you don't have to remember anything. "; 
msg[22] = "Multitasking means screwing up several things at once. "; 
msg[23] = "Never test the depth of the water with both feet. "; 
msg[24] = "On the other hand, you have different fingers. "; 
msg[25] = "Shin: a device for finding furniture in the dark. "; 
msg[26] = "Smile, it's the second best thing you can do with your lips. "; 
msg[27] = "Smith & Wesson: The original point and click interface. "; 
msg[28] = "Some drink at the fountain of knowledge. Others just gargle."; 
msg[29] = "The early bird may get the worm, but the second mouse gets the cheese. "; 
msg[30] = "There are two theories to arguing with women. Neither one works. "; 
msg[31] = "What happens if you get scared half to death twice? "; 
function writeTip() { document.write(msg[today]); 
} 
// End --> 

/* End Todays1Liner JavaScript */


/* Start Mailto JavaScript */


function email(){
    var add = document.form.To.value
    var subject = document.form.value
    document.form.action="mailto:"+add+"?subject=Check out this site";}

// End Hiding-->

/* End Mailto JavaScript */


