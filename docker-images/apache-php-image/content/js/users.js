$(function() {
        console.log("Loading users...");

        function loadUsers() {
                $.getJSON( "/api/students/", function( users ) {
                        console.log(users);
                        var message = "No users to display...";
                        if ( users.length > 0 ) {
                                message = "User " + users[0].firstName + " has come";
                        }
                        $(".dardou").text(message);
                });
        };

        loadUsers();

        setInterval( loadUsers, 2000 );

});
