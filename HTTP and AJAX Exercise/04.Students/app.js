function attachEvents() {
  const baseUrl = 'http://localhost:3030/jsonstore/collections/students'
  const tbodyElement = document.querySelector('tbody')
  const submitButton = document.getElementById('submit')
  submitButton.addEventListener('click', addNewStudentEvent)

  async function Students() {
      tbodyElement.innerHTML = ''

      try {
          const studentResponse = await fetch(baseUrl)
          if (!studentResponse.ok) {
              throw new Error(`HTTP error! status: ${studentResponse.status}`);
          }
          const students = await studentResponse.json()

          for (const key of Object.keys(students)) {
              const studentData = students[key];
              const trElement = document.createElement('tr');
              const tdFirstName = document.createElement('td');
              tdFirstName.textContent = studentData.firstName

              const tdLastName = document.createElement('td');
              tdLastName.textContent = studentData.lastName

              const tdFacultyNumber = document.createElement('td');
              tdFacultyNumber.textContent = studentData.facultyNumber

              const tdGrade = document.createElement('td');
              tdGrade.textContent = studentData.grade

              trElement.appendChild(tdFirstName)
              trElement.appendChild(tdLastName)
              trElement.appendChild(tdFacultyNumber)
              trElement.appendChild(tdGrade)

              tbodyElement.appendChild(trElement)
          }
      } catch (error) {
          console.error('Error extracting students:', error);
      }
  }
  
  Students()

  async function addNewStudentEvent() {
      const firstName = document.getElementsByName('firstName')[0];
      const lastName = document.getElementsByName('lastName')[0];
      const facultyNumber = document.getElementsByName('facultyNumber')[0];
      const grade = document.getElementsByName('grade')[0];

      const student = {
          firstName: firstName.value,
          lastName: lastName.value,
          facultyNumber: facultyNumber.value,
          grade: grade.value
      }

      try {
          await fetch(baseUrl, {
              method: 'POST',
              body: JSON.stringify(student)
          })

          Students()

          firstName.value = ''
          lastName.value = ''
          facultyNumber.value = ''
          grade.value = ''
      } catch (error) {
          console.error('Error adding new student:', error);
      }
  }
}

attachEvents();
