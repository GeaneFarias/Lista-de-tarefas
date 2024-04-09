$(document).ready(function(){

    $("#formulario").on("submit", function(e){
    e.preventDefault();

    const tarefanova = $('#tarefa-txt').val()
    const novatarefa = $('<li></li>')

    $(`<div>${tarefanova}</div>`).appendTo(novatarefa);
    $(novatarefa).appendTo('ul')
    $('#tarefa-txt').val('')



   // Adicionando evento de clique para o texto dentro de novatarefa
   novatarefa.find('div').click(function() {
    $(this).toggleClass("sublinhado");
});



    })

})

