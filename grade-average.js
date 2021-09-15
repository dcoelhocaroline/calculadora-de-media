function calcAverage(){
    
    var grade1 = parseFloat(document.getElementById("grade1").value);
    var grade2 = parseFloat(document.getElementById("grade2").value);
    var grade3 = parseFloat(document.getElementById("grade3").value);
    var grade4 = parseFloat(document.getElementById("grade4").value);
 
    var average = (grade1 + grade2 + grade3 + grade4) / 4;

    document.getElementById("gradeAverage").innerHTML = average.toFixed(2)
    
    if (average >= 7) {
        document.getElementById("gradeInfo").innerHTML = "Você passou!"
    }else {
        document.getElementById("gradeInfo").innerHTML = "Você não atingiu a média."
        }

}