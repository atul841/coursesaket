const params = new URLSearchParams(window.location.search);
  const courseName = params.get("course");

  const courseData = {
    "The Ultimate Job Ready Data Science Course": {
      title: "The Ultimate Job Ready Data Science Course",
      description:
        "Ready to break into the world of Data Science? This all-in-one Job-Ready Data Science Course is designed for beginners and intermediate learners who want to master data science skills and become industry-ready with hands-on experience.",
      badge: "Hot & New",
      author: "CodeWithHarry",
      updated: "05/07/2025",
      lang: "Hindi",
    },
    "[English] Complete 2025 Python Bootcamp": {
      title: "[English] Complete 2025 Python Bootcamp",
      description:
        "Unlock your potential and become a confident Python developer in 2025 with this comprehensive bootcamp for beginners.",
      badge: "New Release",
      author: "CodeWithHarry",
      updated: "03/07/2025",
      lang: "English",
    }
  };

  const course = courseData[courseName];

  if (course) {
    document.getElementById("title").textContent = course.title;
    document.getElementById("desc").textContent = course.description;
    document.getElementById("badge").textContent = course.badge;
    document.getElementById("author").textContent = course.author;
    document.getElementById("updated").textContent = course.updated;
    document.getElementById("lang").textContent = course.lang;
  } else {
    document.getElementById("title").textContent = "Course Not Found";
    document.getElementById("desc").textContent = "Sorry, we couldn't load the details for this course.";
    document.getElementById("badge").style.display = "none";
    document.getElementById("author").textContent = "N/A";
    document.getElementById("updated").textContent = "--/--/----";
    document.getElementById("lang").textContent = "-";
  }