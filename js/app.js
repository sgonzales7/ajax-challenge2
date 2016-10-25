// 1) Using jquery -- create $(document).ready function

// 2) Within here put a listener on the search button -- it can be in a form or not

// 3) Get the username from the input box and put that into the gitHub api url ( https://api.github.com/users/{username} )

// 4) Use an ajax call to call to this url and get back the json data

// 5) Pull out and put the data that you need to put into the elements on your html page

$(document).ready(function(){

  $("#buttonsearch").click(function(e){
        e.preventDefault();
    var submitbtn = $('#buttonsearch');
    var username = $('#textsearch').val();
    var gitAPI   = 'https://api.github.com/users/'+ username;

    $('#list').html('<li>' + gitAPI + '</li>');

    $.getJSON(gitAPI,function(data){



        var fullname   = data.name;
        var aviurl     = data.avatar_url;
        var followersnum = data.followers;
        var reposnum     = data.public_repos;

        $('#picture').html('<img src="' + aviurl + '" />');
        $('#gitname').html(fullname);
        $('#uname').html("Username: "+ username);
        $('#repos').html("Repos: " + reposnum);
        $('#gitfollow').html("Followers: " + followersnum);

    })
  })
});
