function searchStudent() {
  student_id = document.getElementById("student_id").value;
  console.log(student_id);
  var request = new XMLHttpRequest();
  var url = "http://localhost:8888/lti/servers/search-student.php";
  var studentData;
  var params = "studentid=" + student_id;

  request.open("POST", url, true);
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  request.onreadystatechange = function () {
    if (request.readyState === XMLHttpRequest.DONE) {
      if (request.status === 200) {
        var response = JSON.parse(request.response);
        updateUI(response);
      }
    }
  };
  request.send(params);
}

function updateUI(student_info) {
  console.log(student_info);

  var tbody = document.querySelector('#student-table tbody');
  var stud_html = `<tr>
  <th>${student_info['Student Id']}</th>
  <td>${student_info.Name}</td>
  <td>${student_info.Gender}</td>
  <td>${student_info.DateOfBirth}</td>
  <td>${student_info.City}</td>
  <td>${student_info.State}</td>
  <td>${student_info.EmailId}</td>
  <td>${student_info.Qualification}</td>
  <td>${student_info.Stream}</td>
</tr>`;
tbody.innerHTML = stud_html;
}
