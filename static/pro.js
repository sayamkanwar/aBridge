try {
  var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
}
catch(e) {
  console.error(e);
  $('.no-browser-support').show();
  $('.app').hide();
}


var noteContent = '';

var div = document.getElementById('tex');


recognition.continuous = true;

recognition.onresult = function(event) {

  var current = event.resultIndex;


  var transcript = event.results[current][0].transcript;

  var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);



  if(!mobileRepeatBug) {
    noteContent += transcript;
    console.log("You said: " + transcript);
    transcript="Routing is used to bind a URL to a specific action (function) and allows web applications to have better URLs, easy to remember. Flask provides developers with a route decorator, which is used to register a view function to a given URL rule. More about the route decorator can be found here. It is possible to add variable parts to the URL by using the <var_name> section. Now you could reuse the provided var_name argument in your Flask application by adding a parameter to the view function matching the variable name.";
    var url_gen = "http://127.0.0.1:5000/txt/"+transcript;
    var div2 = document.getElementById('bex');
    bex.innerHTML = transcript;
    console.log(url_gen);
    $.ajax({

        url:url_gen,
        success:function(r){
            console.log(r);
            $(".display").css({"left":"0"})
            div.innerHTML = r;
        }

    });

  }
};

recognition.onstart = function() { 
  console.log('Started Listening...');
}

recognition.onspeechend = function() {
  console.log('Paused');
}

recognition.onerror = function(event) {
  if(event.error == 'no-speech') {
    console.log('No voice');  
  };
}


function StartListening() {
  if (noteContent.length) {
    noteContent += ' ';
  }
  recognition.start();
}

function SendData() {
    console.log(1);
    var varval = document.getElementById('user-text').value;
    someText = varval.replace(/(\r\n\t|\n|\r\t)/gm,"");
    console.log('my text: ' + someText);
    var url_gen = "http://127.0.0.1:5000/txt/"+someText;
    console.log(url_gen);
    $.ajax({

        url:url_gen,
        success:function(m){
            console.log(m);
            document.getElementById('bex').innerHTML = someText;
            div.innerHTML = m;
        }

    });

}

function PauseListening() {
  recognition.stop();
  console.log('Paused');
  $(".display").css({"left":"0"})

}

$(document).ready(function(){
    // localStorage.setIt()em
});


// $("#dd").click(function(){

//     div.innerHTML = someText;

// });


// $("#dd").click(function(){

//     div.innerHTML = someText;

// });

x = 0;
        $(".white").click(function () {
            if (x==0) {
                $(".move").css({"top":"-2.5vh"})
                StartListening();
                x=1;
            }else if(x==1){
                $(".move").css({"top":"0vh"})
                PauseListening();
                x=0;
            }
        })

        $(".but1").click(function () {
            x=3
            $(".move").css({"top":"-5vh"})
            $(".mov2").css({"top":"-3.2vh"})
            $(".main").css({"height":"56vh"})
            $(".but1").css({"background":"rgba(98, 212, 195, 1)"})
            $(".but2").css({"background":"rgba(98, 212, 195, 0.5)"})
            setTimeout(function () {
                $(".inp").css({"opacity":"1"})
            }, 1100)
        })

        $(".but2").click(function () {
            x=0
            $(".inp").css({"opacity":"0"})
            
            setTimeout(function () {
                $(".main").css({"height":"100vh"})
                $(".move").css({"top":"0vh"})
                $(".mov2").css({"top":"3.5vh"})
                $(".but1").css({"background":"rgba(98, 212, 195, 0.5)"})
                $(".but2").css({"background":"rgba(98, 212, 195, 1)"})
            }, 500)
        })

        $(".process").click(function () {
            $(".display").css({"left":"0"})
        })


