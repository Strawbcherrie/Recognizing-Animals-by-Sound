function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier =  ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/kiE6yTFo-/model.json", model_ready);
    }

    function model_ready()
    {
        classifier.classify(gotResults);
    }
    


    function gotResults(error, results){
        console.log("Got Results");
        if(error){
            console.log(error);
        }
        else{

            console.log("function started");

            cat = 0;
            dog = 0;
            wolf = 0;
            chicken = 0;
            frog = 0;

            console.log(results);
            r = Math.floor(Math.random() * 255)+1;
            g = Math.floor(Math.random() * 255)+1;
            b = Math.floor(Math.random() * 255)+1;

            console.log("function going on")


            document.getElementById("animal_identified_lbl").innerHTML= "The sound identified is " + results[0].label;
            document.getElementById("confidence_or_accuracy_lbl").innerHTML= "The accuracy or confidence level is " + (results[0].confidence * 100) + "%";
            // Why so much code for confidence and not label results?


            document.getElementById("animal_identified_lbl").style.color="rgb("+r+" , "+g+" , "+b+")";
            document.getElementById("confidence_or_accuracy_lbl").style.color="rgb("+r+" , "+g+" , "+b+")";


            if(results[0].label = "Dog"){
                animalgifid.src="dog.gif";
            }
            if(results[0].label = "Cat"){
                animalgifid.src="cat.gif";
            }
            if(results[0].label = "Frog"){
                animalgifid.src="frog.gif";
            }
            if(results[0].label = "Wolf"){
                animalgifid.src="wolf.gif";
            }
            if(results[0].label = "Chicken"){
                animalgifid.src="hen.gif";
            }
            if(results[0].label = "Background Noise"){
                animalgifid.src="ear.gif";
            }
        }
        console.log("function ended");
    }

    

