
var myRj;

$(document).ready(function () {

    localStorage.setItem("DATA_CARGADA", 0);
    localStorage.setItem("POS_REGISTRO", 0);
    localStorage.setItem("TOTAL_REGISTRO", 0);

    var ListaIdPreguntas = [-1, -1, -1, -1];
    var ListaDecripsPreguntas = ['', '', '', -''];
    var ListaComentarios = ['', '', '', -''];

    localStorage.setItem("LISTA_IDPREGUNTAS", JSON.stringify(ListaIdPreguntas));
    localStorage.setItem("LISTA_DESCRIP_PREGUNTAS", JSON.stringify(ListaDecripsPreguntas));
    localStorage.setItem("LISTA_COMENTARIO_PREGUNTAS", JSON.stringify(ListaComentarios));

    //llamar reloj
    var Tiempo_ = 5000;
    myRj = setTimeout(finaliza, Tiempo_);

});

function finaliza() {
    clearTimeout(myRj);
    //Cerrar pagina
    window.close;
}
