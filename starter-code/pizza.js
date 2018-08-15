// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  $(".btn-pepperonni").click(function() {
    $(".btn-pepperonni").toggleClass("active");
    $(".pep").toggleClass("desaparece");
    $(".pepper").toggleClass("borrar");
  });

  $(".btn-mushrooms").click(function() {
    $(".btn-mushrooms").toggleClass("active");
    $(".mushroom").toggleClass("desaparece");
    $(".mush").toggleClass("borrar");
  });

  $(".btn-green-peppers").click(function() {
    $(".btn-green-peppers").toggleClass("active");
    $(".green-pepper").toggleClass("desaparece");
    $(".green-pepp").toggleClass("borrar");
  });

  $(".btn-crust").click(function() {
    $(".btn-crust").toggleClass("active");
    $(".crust").toggleClass("crust-gluten-free");
    $(".gluten-crust").toggleClass("borrar");
  });

  $(".btn-sauce").click(function() {
    $(".btn-sauce").toggleClass("active");
    $(".sauce").toggleClass("sauce-white");
    $(".white").toggleClass("borrar");
  });
});
