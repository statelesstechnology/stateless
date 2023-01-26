var openNav = document.getElementById('toggle-open');
var closeNav = document.getElementById('toggle-close');
var NavItems = document.getElementById('nav-items');

var SolutionExpand = document.getElementById('solution-expand');
var SolutionCollapse = document.getElementById('solution-collapse');
var ProductExpand = document.getElementById('product-expand');
var ProductCollapse = document.getElementById('product-collapse');
var SolutionSubnav = document.getElementById('solution-subnav');
var ProductSubnav = document.getElementById('product-subnav');

var CopyrightText = document.getElementById('copyright');

var NewDate = new Date();
let CurrentYear = NewDate.getFullYear();
console.log(CurrentYear);
CopyrightText.innerHTML = '&copy; ' + CurrentYear + ' Stateless Technology';

function ToggleNavOpen(arg) {
    // body...
    openNav.style.display = 'none';
    closeNav.style.opacity = '0.0';
    closeNav.style.display = 'block';
    NavItems.style.opacity = '0.0';
    NavItems.style.display = 'block';
    
    setTimeout(function() {
        NavItems.style.opacity = '0.25';
        closeNav.style.opacity = '0.25';
    }, 100);
    
    setTimeout(function() {
        NavItems.style.opacity = '0.5';
        close.style.opacity = '0.5';
    }, 200);
    
    setTimeout(function() {
        NavItems.style.opacity = '0.75';
        closeNav.style.opacity = '0.75';
    },300);
    
    setTimeout(function() {
        NavItems.style.opacity = '1.0';
        closeNav.style.opacity = '1.0';
    }, 400);
}

function ToggleNavClose(arg) {
    // body...
    openNav.style.display = 'block';
    
    closeNav.style.display = 'none';
    
    
    NavItems.style.display = 'none';
    openNav.style.display = 'block';
    SolutionCollapse.style.display = 'none';
    ProductCollapse.style.display = 'none';
    ProductExpand.style.display = 'block';
    SolutionExpand.style.display = 'block';
    SolutionSubnav.style.display = 'none';
    ProductSubnav.style.display = 'none';
}

function SolutionToggle(arg) {
    // body...
    
    
    if (SolutionExpand.style.display == 'none') {
        
        SolutionExpand.style.display = 'block';
        SolutionCollapse.style.display = 'none';
        SolutionSubnav.style.display = 'none';
        
    } else {
        
        SolutionExpand.style.display = 'none';
        SolutionCollapse.style.display = 'block';
        SolutionSubnav.style.display = 'block';
        SolutionSubnav.style.transform = 'scale(1, 1)';
        SolutionSubnav.style.opacity = '0.0';
        
        setTimeout(function() {
            SolutionSubnav.style.opacity = '0.25';
        }, 100);
    
        setTimeout(function() {
            SolutionSubnav.style.opacity = '0.5';
        }, 200);
    
        setTimeout(function() {
            SolutionSubnav.style.opacity = '0.75';
        },300);
    
        setTimeout(function() {
            SolutionSubnav.style.opacity = '1.0';
        }, 400);
        
        ProductExpand.style.display = 'block';
        ProductCollapse.style.display = 'none';
        ProductSubnav.style.display = 'none';
    }
}

function ProductToggle() {
    // body...
    if (ProductExpand.style.display == 'none') {
        
        ProductExpand.style.display = 'block';
        ProductCollapse.style.display = 'none';
        ProductSubnav.style.display = 'none';
    } else {
        
        ProductExpand.style.display = 'none';
        ProductCollapse.style.display = 'block';
        ProductSubnav.style.display = 'block';
        ProductSubnav.style.transform = 'scale(1, 1)';
        ProductSubnav.style.opacity = '0.0';
        
        setTimeout(function() {
            ProductSubnav.style.opacity = '0.25';
        }, 100);
    
        setTimeout(function() {
            ProductSubnav.style.opacity = '0.5';
        }, 200);
    
        setTimeout(function() {
            ProductSubnav.style.opacity = '0.75';
        },300);
    
        setTimeout(function() {
            ProductSubnav.style.opacity = '1.0';
        }, 400);
        
        SolutionExpand.style.display = 'block';
        SolutionCollapse.style.display = 'none';
        SolutionSubnav.style.display = 'none';
    }
}
