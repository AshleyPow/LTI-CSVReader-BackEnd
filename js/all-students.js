function loadData() {
    var xhttp = new XMLHttpRequest();
    var url = "http://localhost:8888/lti/servers/all-students.php";
    var studentData;

    // request.open('GET', url, true);
    // request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //   request.onreadystatechange = function() {
    //     if (request.readyState === XMLHttpRequest.DONE) {
    //       if (request.status === 200) {
    //         var response = JSON.parse(request.response);
    //         console.log(response);
    //       }
    //     }
    //   };
    //   request.send(params);
      
    //xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            var response = JSON.parse(xhttp.response);
            studentData = response;

            updateUI(studentData);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function updateUI(student_info) {

    var tbody = document.querySelector('#student-table tbody');
    var html = "";
    for (var i = 1; i < student_info.length-1; i++) {
        html+="<tr>";
        html+="<td>"+student_info[i][0]+"</td>";
        html+="<td>"+student_info[i][1]+"</td>";
        html+="<td>"+student_info[i][2]+"</td>";
        html+="<td>"+student_info[i][3]+"</td>";
        html+="<td>"+student_info[i][4]+"</td>";
        html+="<td>"+student_info[i][5]+"</td>";
        html+="<td>"+student_info[i][6]+"</td>";
        html+="<td>"+student_info[i][7]+"</td>";
        html+="<td>"+student_info[i][8]+"</td>";
        html+="</tr>";
    }
    tbody.innerHTML = html;
}