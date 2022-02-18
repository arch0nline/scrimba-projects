
let input, showInput, showLength, showVolume, showMass

window.onload = function() {
  document.getElementById("input-el").focus();
};


function convertAll(){
    input = document.getElementById("input-el").value
   
    showLength = document.getElementById("show-length")
    showVolume = document.getElementById("show-volume")
    showMass = document.getElementById("show-mass")
    
    showLength.textContent = input + " feet" + " = " + (input * 3.28).toFixed(3) + " metres" 
                    + " | " + input + " metres " + " = " + (input / 3.28).toFixed(3) + " feet"
                        
    showVolume.textContent = input + " litres" + " = " + (input * 0.264).toFixed(3) + " gallons" 
                    + " | " + input + " gallons " + " = " + (input * 3.785).toFixed(3) + " litres"
    
    showMass.textContent = input + " kilograms" + " = " + (input * 2.204).toFixed(3) + " pounds" 
                    + " | " + input + " pounds " + " = " + (input / 2.204).toFixed(3) + " kilograms"
   
}

