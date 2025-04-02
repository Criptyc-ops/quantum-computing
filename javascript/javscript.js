var toggleButton = $('<button id="toggle-menu-btn">Toggle Menu</button>');
$('body').prepend(toggleButton);

// Create and prepend the hamburger button
var toggleButton = $(`
    <button id="toggle-menu-btn">
        <div></div>
        <div></div>
        <div></div>
    </button>
`);
$('body').prepend(toggleButton);

// Create the hidden menu
var hiddenMenu = $(`
    <div id="hidden-menu">
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Quantum Computing History</a></li>
            <li><a href="works.html">How It All Works Together</a></li>
            <li><a href="why.html">Why Quantum Computing Is Important</a></li>
            <li><a href="support.html">Support</a></li>
        </ul>
    </div>
`);
$('body').prepend(hiddenMenu);

// Toggle the visibility of the hidden menu and update the hamburger button
$('#toggle-menu-btn').on('click', function () {
    $('#hidden-menu').toggle();
    $(this).toggleClass('open'); // Add/remove the 'open' class for styling
});