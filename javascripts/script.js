$("#button1").click(function(){
    $('<input type="number" class="form-control margin-top text-center liczba" />').appendTo('.kontener')
});

$("#button2").click(function(){
   var suma = 0
   var isValid = true
   
$('.liczba').each(function() {
    var value = $(this).val()
  if (!value) {
    isValid = false
  }
  suma += Number($(this).val())
})
    if (isValid) {
  alert(suma)
       $(".kontener").empty()
} else {
  alert('Uzupelnj wszystkie pola')
}
});