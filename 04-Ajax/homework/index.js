var direccion = `http://localhost:5000/amigos`;
$(`#boton`).click(function () {
  $.get(`${direccion}`, function (amigos) {
    console.log(amigos);
    amigos.array.forEach((element) => {
      $(`#lista`).append(`<li id=`);
    });
  });
});
