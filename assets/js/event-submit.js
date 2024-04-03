$(document).ready(function () {
  $("#submit-msg").click(function (event) {
    event.preventDefault();

    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const message = $("#message").val().trim();

    if (name === "" || email === "" || message === "") {
      Swal.fire({
        title: "Error!",
        text: "Isi semua form yang tersedia.",
        icon: "error",
        iconColor: "#fbbf24",
        confirmButtonText: "Close",
        confirmButtonColor: "#fbbf24",
        focusConfirm: false,
      });
      return;
    }

    if (!validateEmail(email)) {
      Swal.fire({
        title: "Error!",
        text: "Isi alamat email dengan benar.",
        icon: "error",
        iconColor: "#fbbf24",
        confirmButtonText: "Close",
        confirmButtonColor: "#fbbf24",
        focusConfirm: false,
      });
      return;
    }
    Swal.fire({
      title: "Pesan terkirim!",
      text: "Terima kasih atas pesannya.",
      icon: "success",
      iconColor: "#fbbf24",
      confirmButtonText: "Close",
      confirmButtonColor: "#fbbf24",
      focusConfirm: false,
    });
  });
});

function validateEmail(email) {
  const re = /\@/;
  return re.test(email);
}
