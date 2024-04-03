$(document).ready(function () {
  $.ajax({
    url: "https://raw.githubusercontent.com/rstubryan/umkm-vape-json/master/device.json",
    dataType: "json",
    success: function (data) {
      $("#product-list-3").empty();
      $.each(data.products, function (index, product) {
        let listItem = $("<li>").text(product.name);
        let br = $("<br>");
        listItem.append(br);
        let button = $("<button>")
          .addClass("btn btn-primary text-dark fw-medium btn-sm pe-none")
          .text("Rp" + product.price.toLocaleString("id-ID"));
        listItem.append(button);
        $("#product-list-3").append(listItem);
      });
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.error("Error fetching data:", textStatus, errorThrown);
    },
  });
});
