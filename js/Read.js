function getdata() {
    var user=document.getElementById("user").value;
    //firebase data retrieval function
    //path of your data
    //.once will get all your data in one time
    firebase.database().ref('user/'+user).once('value').then(function (snapshot) {
        //here we will get data
        //enter your field name
        var userid=snapshot.val().userId;
        var name=snapshot.val().userName;
        var gender=snapshot.val().userGender;
        var age=snapshot.val().userage;
        var qualification=snapshot.val().userqualification;
        var phone=snapshot.val().userphone;

        //now we have data in variables
        //now show them in our html
        document.getElementById("userid").innerHTML=userid;
        document.getElementById("name").innerHTML=name;
        document.getElementById("gender").innerHTML=gender;
        document.getElementById("age").innerHTML=age;
        document.getElementById("qualification").innerHTML=qualification;
        document.getElementById("phone").innerHTML=phone;
        alert('geted')
    })
}