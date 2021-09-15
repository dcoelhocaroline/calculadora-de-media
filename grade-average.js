function calcAverage(){
    
    var grade1 = parseFloat(document.getElementById("grade1").value);
    var grade2 = parseFloat(document.getElementById("grade2").value);
    var grade3 = parseFloat(document.getElementById("grade3").value);
    var grade4 = parseFloat(document.getElementById("grade4").value);
 
    var average = Number((grade1 + grade2 + grade3 + grade4) / 4);

    
        document.getElementById("gradeAverage").innerHTML = average.toFixed(1)
        
        if (average >= 7 && average <= 10) {
            document.getElementById("gradeInfo").innerHTML = "Você passou!"
        } else if (average < 7 && average >= 0){
            document.getElementById("gradeInfo").innerHTML = "Você não atingiu a média."
        } else {
            document.getElementById("gradeAverage").innerHTML = ""
            document.getElementById("gradeInfo").innerHTML = "Parece que tivemos um erro.<br>Verifique se inseriu as notas corretamente."
        }
}