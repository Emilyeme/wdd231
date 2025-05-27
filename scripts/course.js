const courses = [
  {name: "WDD 101", completed: true , credits: 3, category: "Wdd"},
  {name: "CSE 201", completed: faise , credits: 4, category: "Cse"},
  {name: "MAT 101", completed: true , credits: 3, category: "Mat"},

];

function displayCourses(courseArray){
    const courseList = document.getElementById("course-list");
    courseList.innerHTML= "";

    let totalCredits = 0;
    courseArray.forEach(course => {
        const courseCard = document.createElement("div");
        courseCard.className = "course-card";

        if (course.completed){
            courseCard.style.backgroundColor = "lightgreen";
        }

        const courseTitle = document.createElement("h2");
        courseTitle.textContent = course.name;

        courseCard.appendChild(courseTitle);
        courseCard.appendChild(courseCredits);
        courseList.appendChild(courseCard);

        totalCredits += course.credits;
    });

    document.getElementById("total-credits").textContent = totalCredits;

    }

    function filterCourses(category){
        const filteredCourses = category === "All" ? courses : courses.filter(course => course.category === category);
        displayCourses(filteredCourses);
    }
    displayCourses(courses);
        
    
