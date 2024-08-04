document.addEventListener('DOMContentLoaded', function () {
    var items = document.querySelectorAll('.dropdown-item');

    items.forEach(function(item) {
        item.addEventListener('mouseenter', function() {
            var textWidth = item.clientWidth;
            item.style.setProperty('--before-width', textWidth + 'px');
        });

        item.addEventListener('mouseleave', function() {
            item.style.setProperty('--before-width', '0');
        });
    });
});