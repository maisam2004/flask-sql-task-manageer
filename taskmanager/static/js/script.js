document.addEventListener("DOMContentLoaded", function() {
    // sidenav initialization
    let sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav);

    //date picker
    var datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
        format : "dd mmmm, yyyy",
        i18n: {done: "Select"}
    });

    //category select options
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);
    //for collapsible tasks
    var collapsibles = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsibles);
});
