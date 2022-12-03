$(document).ready(function(){
    $('.boxes').waypoint(function(){
        $('.boxes').addClass('animate__animated animate__fadeInDown')
    },{
        offset:'35%'
    })
    $('#about .column-1').waypoint(function(){
        $('#about .column-1').addClass('animate__animated animate__fadeInLeft')
    },{
        offset:'35%'
    })
    $('#about .column-2').waypoint(function(){
        $('#about .column-2').addClass('animate__animated animate__fadeInRight')
    },{
        offset:'35%'
    })
    $('#service .container').waypoint(function(){
        $('#service .container').addClass('animate__animated animate__fadeInUpBig')
    },{
        offset:'35%'
    })
    $('#contact .column-1').waypoint(function(){
        $('#contact .column-1').addClass('animate__animated animate__fadeInLeft')
    },{
        offset:'35%'
    })
    $('#contact .column-2').waypoint(function(){
        $('#contact .column-2').addClass('animate__animated animate__fadeInRight')
    },{
        offset:'35%'
    })
})