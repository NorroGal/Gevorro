window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function() {
        document.querySelector('#menu').classList.toggle('is-active')
    })

                        //Работает но лучше по другому
                        
//     document.querySelectorAll(".section-work__step").forEach((e) =>
//     e.addEventListener("click", function (t) {
//       t.preventDefault(),
//         document
//           .querySelectorAll(".section-work__step")
//           .forEach((e) => e.classList.remove("section-work__step-active")),
//         e.classList.add("section-work__step-active");
//     })
//   )
//})
})

$(document).ready(function() {
    $('.burger__header').click(function (event) {
        $('.burger__header,.burger__line').toggleClass('active');
        $('body').toggleClass('lock');
    });
});