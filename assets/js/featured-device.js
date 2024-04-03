$(document).ready(function () {
  $.ajax({
    url: "https://raw.githubusercontent.com/rstubryan/umkm-vape-json/master/device.json",
    dataType: "json",
    success: function (data) {
      let product = data.products[0];
      $("#product-3 h5.about-heading").text(product.name);
      $("#product-3 span:contains('Price Here')").text(
        "Rp" + product.price.toLocaleString("id-ID")
      );
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.error("Error fetching data:", textStatus, errorThrown);
    },
  });
});
