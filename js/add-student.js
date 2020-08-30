window.onload = function() {
  today = new Date().toISOString().split("T")[0];
  document.getElementById("student_birth").setAttribute("max", today);
}

function submitStudent() {
    var name = document.getElementById('username');
    var request = new XMLHttpRequest();
      var url = "http://localhost:8888/lti/servers/add-student.php";
      var params = "username=" + name.value;

      request.open('POST', url, true);
      request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
          if (request.status === 200) {
            var response = JSON.parse(request.response);
            console.log(response);
          }
        }
      };
      request.send(params);
}