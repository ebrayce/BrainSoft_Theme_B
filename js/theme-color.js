let ThemeColor = 'blue';
let ThemeContainState = 'hide';
let ThemeContainer = $('#ThemeContainer');
let Theme_light = $('.Theme-light');
let Theme_dark = $('.Theme-dark');

function removePreviousTheme() {
    Theme_light.removeClass('yellow-light');
    Theme_light.removeClass('cyan-light');
    Theme_light.removeClass('indigo-light');
    Theme_light.removeClass('purple-light');
    Theme_light.removeClass('green-light');
    Theme_light.removeClass('blue-light');

    Theme_dark.removeClass('yellow-dark');
    Theme_dark.removeClass('cyan-dark');
    Theme_dark.removeClass('indigo-dark');
    Theme_dark.removeClass('purple-dark');
    Theme_dark.removeClass('green-dark');
    Theme_dark.removeClass('blue-dark');

}

function themeColors(color) {
    ThemeColor = color;
    removePreviousTheme();

    Theme_light.addClass(color+'-light');
    Theme_dark.addClass(color+'-dark');
}
function green() {
    themeColors('green');
}

function blue() {
    themeColors('blue');
}

function purple() {
    themeColors('purple');
}

function yellow() {
    themeColors('yellow');
}

function cyan() {
    themeColors('cyan');
}

function indigo() {
    themeColors('indigo');
}


function showThemeContainer() {
    ThemeContainState = 'show';
    ThemeContainer.removeClass('bounceOutRight');
    ThemeContainer.addClass('bounceInRight');
}
function hideThemeContainer() {
    ThemeContainState = 'hide';
    ThemeContainer.removeClass('bounceInRight');
    ThemeContainer.addClass('bounceOutRight');
}

function ToggleThemeContainer() {
    switch (ThemeContainState){
        case 'show':
            hideThemeContainer();
            break;
        case 'hide':
            showThemeContainer();
            break;

    }
}

