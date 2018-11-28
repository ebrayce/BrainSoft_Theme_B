let Main_Wrapper_height = '' ;
let Body_height = '';
let Dashboard_height = '';
let Footer_height = '';
let Header_height = '';
let Content_height = '';
let ViewPort = '';
let Body_margin_left = '';

let Main_Wrapper_width = '';
let Body_width = '';
let Dashboard_width = '';
let Footer_width = '';
let Header_width = '';
let Content_width = '';

let DashboardState = "open";
let MAIN_WRAPPER = $('#MAIN_RAPPER');
let BODY = $('#BODY');
let DASHBOARD = $('#DASHBOARD');
let FOOTER = $('#FOOTER');
let HEADER = $('#HEADER');
let CONTENT = $('#CONTENT');
let ToggleButtonHeight = $('#btnDashToggle').outerHeight();
let ThemeButtonHeight = $('#btnTheme').outerHeight();

Theme(DashboardState);

function SetViewPort() {
    /*
    // Extra small devices (portrait phones, less than 0 - 576px)
    // No media query for `xs` since this is the default in Bootstrap

    // Small devices (landscape phones, 576px - 767px)
    @media (min-width: 576px) { ... }

    // Medium devices (tablets, 768px - 991px)
    @media (min-width: 768px) { ... }

    // Large devices (desktops, 992px - 1200px)
    @media (min-width: 992px) { ... }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) { ... }
    */

    // amd &&  or ||


    if (Main_Wrapper_width <= 768  ){
        ViewPort =  'sm';
    }
    else if (Main_Wrapper_width <= 992  ){
        ViewPort =  'md';
    }
    else if (Main_Wrapper_width >= 1200) {
        ViewPort = 'lg'
    }
    else if (Main_Wrapper_width >= 1200) {
        ViewPort = 'xl'
    }

}

function Theme(state){
    Main_Wrapper_height  = $(window).height();
    Main_Wrapper_width = $(window).width();
    parseInt(Main_Wrapper_height);
    parseInt(Main_Wrapper_width);
    SetViewPort();

    if (state === "close"){
        CloseDashboard();
    }
    else if (state === "open") {
        OpenDashboard();
    }
}

function AnimateTheme() {
    // MAIN_WRAPPER.addClass('ThemeAnimate');
    BODY.addClass('ThemeAnimate');
    DASHBOARD.addClass('ThemeAnimate');
    HEADER.addClass('ThemeAnimate');
    CONTENT.addClass('ThemeAnimate');
    FOOTER.addClass('ThemeAnimate');
    $('.Theme-dark').addClass('ThemeAnimate');
    $('.Theme-light').addClass('ThemeAnimate');

}

$(function () {
    AnimateTheme();

    $(window).resize(function () {
        Theme(DashboardState);
    });
});




function OpenDashboard() {
    DashboardState = "open";

    Body_height  = Main_Wrapper_height;
    Dashboard_height  = Main_Wrapper_height;
    Content_height = Main_Wrapper_height - (parseInt(ToggleButtonHeight) + parseInt(ThemeButtonHeight)) ;

    switch (ViewPort){
        case 'sm':
            Body_width  = Main_Wrapper_width * 0.2;
            Dashboard_width  = parseInt(Main_Wrapper_width) - parseInt(Body_width);
            Header_width = Main_Wrapper_width;
            Content_width = Main_Wrapper_width;
            Footer_width = Main_Wrapper_width;

            Body_margin_left = Dashboard_width;
            break;

        case 'md':
            Body_width  = Main_Wrapper_width * 0.8;
            Dashboard_width  = Main_Wrapper_width * 0.2;
            Header_width = Body_width;
            Content_width = Body_width;
            Footer_width = Body_width;

            Body_margin_left = Dashboard_width;
            break;

        case 'lg':
            Body_width  = Main_Wrapper_width * 0.8;
            Dashboard_width  = Main_Wrapper_width * 0.2;
            Header_width = Body_width;
            Content_width = Body_width;
            Footer_width = Body_width;

            Body_margin_left = Dashboard_width;
            break;

        case 'xl':
            Body_width  = Main_Wrapper_width * 0.8;
            Dashboard_width  = Main_Wrapper_width * 0.2;
            Header_width = Body_width;
            Content_width = Body_width;
            Footer_width = Body_width;

            Body_margin_left = Dashboard_width;
            break;
    }

    

    MAIN_WRAPPER.height(Main_Wrapper_height);
    BODY.height(Body_height);

    DASHBOARD.height(Dashboard_height);
    FOOTER.height(Footer_height);
    HEADER.height(Header_height);
    CONTENT.height(Content_height);

    BODY.css({marginLeft:Body_margin_left+'px'});

    MAIN_WRAPPER.width(Main_Wrapper_width);
    BODY.width(Body_width);
    DASHBOARD.width(Dashboard_width);
    FOOTER.width(Footer_width);
    HEADER.width(Header_width);
    CONTENT.width(Content_width);
}

function CloseDashboard() {
    DashboardState = "close";

    // Body_height  = Main_Wrapper_height;
    // Dashboard_height  = Main_Wrapper_height;
    // Header_height = Main_Wrapper_height * 0.1;
    // Content_height = Main_Wrapper_height * 0.8;
    // Footer_height = Main_Wrapper_height * 0.1;

    Body_height  = Main_Wrapper_height;
    Dashboard_height  = Main_Wrapper_height;
    Header_height = ToggleButtonHeight;
    Content_height = Main_Wrapper_height - (parseInt(ToggleButtonHeight) + parseInt(ThemeButtonHeight)) ;
    Footer_height = ThemeButtonHeight;

    Body_width  = Main_Wrapper_width * 0.95;
    Dashboard_width  = Main_Wrapper_width * 0.5;
    Header_width = Body_width;
    Content_width = Body_width;
    Footer_width = Body_width;

    Body_margin_left = parseInt(Main_Wrapper_width) * 0.05;

    MAIN_WRAPPER.height(Main_Wrapper_height);
    BODY.height(Body_height);

    DASHBOARD.height(Dashboard_height);
    FOOTER.height(Footer_height);
    HEADER.height(Header_height);
    CONTENT.height(Content_height);

    BODY.css({marginLeft:Body_margin_left});

    MAIN_WRAPPER.width(Main_Wrapper_width);
    BODY.width(Body_width);
    DASHBOARD.width(Dashboard_width);
    FOOTER.width(Footer_width);
    HEADER.width(Header_width);
    CONTENT.width(Content_width);
}

function ToggleThemeState(state){
    switch(state) {
        case 'open':
            Theme('close');
            break;
        case 'close':
            Theme('open');
            break;
    }
}

// ToggleThemeState(DashboardState);