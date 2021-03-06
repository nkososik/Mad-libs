$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput= $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();

    let userInputs = [person1Input, person2Input, animalInput, exclamationInput, verbInput, nounInput];
    let identifications = ["person1", "person2", "animal", "exclamation", "verb", "noun"];
    let index = 0;
    identifications.forEach(function(identification) {
      $("." + identification).text(userInputs[index]);
      index += 1; 
    });

    $("#story").show();
  });
});