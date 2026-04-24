

// Sticky dot nav

var dots = document.querySelectorAll('.dot-nav .dot');


var dotMap = {};
dots.forEach(function(dot) {
    var id = dot.getAttribute('href').replace('#', '');
    dotMap[id] = dot;
});


var sectionObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {

            dots.forEach(function(d) { d.classList.remove('active'); });

            if (dotMap[entry.target.id]) {
                dotMap[entry.target.id].classList.add('active');
            }
        }
    });
}, { threshold: 0.4 });


document.querySelectorAll('[id]').forEach(function(el) {
    sectionObserver.observe(el);
});

// footer year
var yearEl = document.getElementById('current-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();


// Title: CSS Sticky Nav and Smooth Scroll
// Author: Remy Sharp
// Date Accessed: April 10, 2026
// Type: Technical Tutorial
// Availability: https://remysharp.com/2017/06/29/css-sticky-nav-and-smooth-scroll
// Note: Implementation techniques for navigation positioning and scrolling behavior.

// Title: This Navbar Trick Needs No JS
// Author: Tushar Kanjariya (Medium)
// Date Accessed: April 10, 2026
// Type: Technical Article
// Availability: https://medium.com/@TusharKanjariya/this-navbar-trick-needs-no-js-1c91c9a8b7a6
// Note: CSS-only methods for navigation interactivity.

// Title: Sticky Dot Navbar
// Author: Framer Marketplace
// Date Accessed: April 10, 2026
// Type: Component Documentation/Asset
// Availability: https://www.framer.com/marketplace/components/sticky-dot-navbar/
// Note: Visual design and structural inspiration for dot-based navigation.

// Title: How do I add a fill-up dot navigation style vertically on my HTML/CSS website
// Author: Stack Overflow Contributors
// Date Accessed: April 10, 2026
// Type: Technical Q&A
// Availability: https://stackoverflow.com/questions/61275260/how-do-i-add-a-fill-up-dot-navigation-style-vertically-on-my-html-css-website
// Note: Specific CSS logic for vertical dot navigation indicators.
