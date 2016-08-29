var userDetails = kendo.observable({
    firstName : null,
    lastName :null,
    email:null,
    picUrl:"",
    getAnother : function(){
        $.ajax({
  url: 'https://randomuser.me/api/?inc=gender,name,email,picture',
  dataType: 'json',
  success: function(data) {

    userDetails.set("firstName",data.results[0].name.first);
    userDetails.set("lastName",data.results[0].name.last);
    userDetails.set("email",data.results[0].email);
    userDetails.set("picUrl",data.results[0].picture.large);

    console.log(userDetails);
                            }
            });

                            }
});

userDetails.getAnother();
const kendoDiv = $("#appOneDiv");
kendo.bind(kendoDiv,userDetails);





//console.log(userDetails);

/*

var viewModel = kendo.observable({
    name: "John Doe",
    displayGreeting: function() {
        var name = this.get("name");
        alert("Hello, " + name + "!!!");
    }
});


const kendoDiv = $("#appOneDiv")
kendo.bind(kendoDiv,viewModel);*/

