var projectsJSON = [
  {
    "projectImage": "./img/projects/tale.png",
    "projectName": "Website that shows a <br> new Bedtime Story each day",
    "projectDescription": "Every day a new story appears on the site,<br> older stories can be searched as well. Stories can be <br> rated.",
    "projectTechnologies": ['Java', 'Spring','postgresql','JavaScript','jQuery', 'HTML', 'CSS', 'Bootstrap'],
    "projectLink": "https://github.com/csaba97/Evening-Tales-Website",
    "demoLink": "./project_websites/tale/index.html",
    "projectYear": '2018'
  },
  {
    "projectImage": "./img/projects/ebay.png",
    "projectName": "eBay™ Popularity Search",
    "projectDescription": "A Chrome Extension that sorts the eBay™  <br>search results by their popularity",
    "projectTechnologies": ['JavaScript', 'HTML', 'CSS'],
    "projectLink": "https://github.com/csaba97/Ebay-Popularity-Search",
    "demoLink": "",
    "projectYear": '2018'
  },
  {
    "projectImage": "./img/projects/brick_breaker.png",
    "projectName": "Brick Breaker Chrome app",
    "projectDescription": "This app is a simple realization of <br> the well-known brick breaker(arkanoid) game",
    "projectTechnologies": ['JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    "projectLink": "https://github.com/csaba97/Chrome-App-Brick-Breaker-",
    "demoLink": "",
    "projectYear": '2018'
  },
  {
    "projectImage": "./img/projects/order.png",
    "projectName": "Order Processing System in Java with MySQL",
    "projectDescription": "This is a GUI Java application that can process orders from clients. <br>" +
     "It works with a MySQL database. Uses the JDBC driver.",
    "projectTechnologies": ['Java', 'MySql'],
    "projectLink": "https://github.com/csaba97/Order-processing-System-Java-MySQL",
    "demoLink": "",
    "projectYear": '2018'
  },
  {
    "projectImage": "./img/projects/file_transfer.png",
    "projectName": "TCP File Transfer App",
    "projectDescription": "An application that can be used to <br> send files over the Internet",
    "projectTechnologies": ['C#', 'XAML'],
    "projectLink": "https://github.com/csaba97/File-Transfer-Application-with-TCP-DotNet-WPF",
    "demoLink": "",
    "projectYear": '2018'
  },
  {
    "projectImage": "./img/projects/shell.png",
    "projectName": "Basic Shell implementation in C",
    "projectDescription": "Basic linux shell implementation<br>" +
     "with piped commands(more than 1 pipe allowed)<br>"+
     "asyncronous commands(more than 2 asyncronous commands allowed) etc.",
    "projectTechnologies": ['C','Linux'],
    "projectLink": "https://github.com/csaba97/Basic-Shell-implementation-in-C",
    "demoLink": "",
    "projectYear": '2018'
  },
  {
    "projectImage": "./img/projects/bank.jpg",
    "projectName": "Banking Application",
    "projectDescription": "This is a realization of a banking software.<br>" +
     "The application can be used only by an admin. He can add new clients,<br>"+
     "new accounts and make deposits or withdrawals.",
    "projectTechnologies": ['Java'],
    "projectLink": "https://github.com/csaba97/Basic-Banking-Application-in-Java",
    "demoLink": "",
    "projectYear": '2018'
  },
  {
    "projectImage": "./img/projects/polinom.png",
    "projectName": "Polynomial processing",
    "projectDescription": "This is a GUI `Java` application that can carry out polynomal processing and operations.  ",
    "projectTechnologies": ['Java'],
    "projectLink": "https://github.com/csaba97/Polinom-processing",
    "demoLink": "",
    "projectYear": '2018'
  },
  {
    "projectImage": "./img/projects/queue.png",
    "projectName": "Java Application implementing <br> Clients waiting in a queue",
    "projectDescription": "Simulates some people entering, staying in and leaving queues",
    "projectTechnologies": ['Java'],
    "projectLink": "https://github.com/csaba97/Java-Application-implementing-Clients-waiting-in-a-queue",
    "demoLink": "",
    "projectYear": '2018'
  },
  {
    "projectImage": "./img/projects/sensor.png",
    "projectName": "Analyzing the behavior of <br>a person recorded by a set of sensors",
    "projectDescription": "This is a Java 1.8 program that extracts some sensor data <br>" +
     "from a file and then processes it using Streams and<br>"+
     "shows statistical results based on the measured values.",
    "projectTechnologies": ['Java'],
    "projectLink": "https://github.com/csaba97/Analyzing-the-behavior-of-a-person-recorded-by-a-set-of-sensors",
    "demoLink": "",
    "projectYear": '2018'
  },
  {
    "projectImage": "./img/projects/semaphore.png",
    "projectName": "Linux semaphores implemented with <br> Mutexes and Pipes",
    "projectDescription": "",
    "projectTechnologies": ['C','Linux'],
    "projectLink": "https://github.com/csaba97/Linux-semaphores-implemented-with-Mutexes-and-Pipes-",
    "demoLink": "",
    "projectYear": '2018'
  },
  {
    "projectImage": "./img/projects/linux.jpg",
    "projectName": "Mutex and Conditional variable implemented <br> with Semaphores Pipes",
    "projectDescription": "",
    "projectTechnologies": ['C','Linux'],
    "projectLink": "https://github.com/csaba97/Mutex-and-Conditional-variable-implemented-with-Semaphores-Pipes",
    "demoLink": "",
    "projectYear": '2018'
  },
  {
    "projectImage": "./img/projects/labyrinth.png",
    "projectName": "Simple Assembly Labyrinth game",
    "projectDescription": "",
    "projectTechnologies": ['Assembly'],
    "projectLink": "https://github.com/csaba97/Simple-Assembly-Labyrinth-game",
    "demoLink": "",
    "projectYear": '2018'
  },
  {
    "projectImage": "./img/projects/cyrus.png",
    "projectName": "Implementation of Cyrus Beck, <br> Cohen Sutherland line clipping algorithms<br> and  Bresenham algorithm",
    "projectDescription": "",
    "projectTechnologies": ['C++'],
    "projectLink": "https://github.com/csaba97/Implementation-of-Cyrus-Beck-Cohen-Sutherland-line-clipping-algorithms-and-Bresenham-s-algorithm",
    "demoLink": "",
    "projectYear": '2018'
  }
];




function appendProjectToDocument(projectImage, projectName, projectDescription, projectTechnologies, projectLink, demoLink) {
  var technologiesUsed = "";
  //search for whole word only
  if (projectTechnologies.includes("spring"))
    technologiesUsed += "<span style='color:green'>Spring </span>";
    if (projectTechnologies.includes("postgresql"))
      technologiesUsed += "<span style='color:blue'>PostgreSQL </span>";
  if (projectTechnologies.includes("assembly"))
    technologiesUsed += "<span style='color:white'>Assembly </span>";
  if (projectTechnologies.includes("linux"))
    technologiesUsed += "<span style='color:orange'>Linux </span>";
  if (projectTechnologies.includes("c#"))
    technologiesUsed += "<span style='color:#974F9B'>C# </span>";
  if (projectTechnologies.includes("c++"))
    technologiesUsed += "<span style='color:#0101EC'>C++ </span>";
  if (projectTechnologies.includes("c"))
    technologiesUsed += "<span style='color:#0188EC'>C </span>";
  if (projectTechnologies.includes("xaml"))
    technologiesUsed += "<span style='color:#1488EC'>XAML </span>";
  if (projectTechnologies.includes("java"))
    technologiesUsed += "<span style='color:red'>Java </span>";
  if (projectTechnologies.includes("html"))
    technologiesUsed += "<span style='color:orange'>Html </span>";
  if (projectTechnologies.includes("css"))
    technologiesUsed += "<span style='color:blue'>Css </span>";
  if (projectTechnologies.includes("javascript"))
    technologiesUsed += "<span style='color:yellow'>JavaScript </span>";
  if (projectTechnologies.includes("bootstrap"))
    technologiesUsed += "<span style='color:purple'>Bootstrap </span>";
  if (projectTechnologies.includes("jquery"))
    technologiesUsed += "<span style='color:#7BA8EB'>jQuery </span>";
  if (projectTechnologies.includes("mysql"))
    technologiesUsed +="<span style='color:rgb(0,97,138)'>My</span>" + "<span style='color:rgb(228,142,0)'>Sql </span>";

    var demo = "";
    if(demoLink.length > 0){
      demo = '<a href="' + demoLink + '" target="_blank">' +
      '<button type="button" class="btn btn-outline-secondary" style="margin-left: 20px; margin-bottom: 10px">Demo</button>';
    }

  $("#main")
    .append('<div class="project">' +
      '<img src="' + projectImage + '" width="200" height="200">' +
      '<p class="project-name">' + projectName + '</p>' +
      '<p class="project-description"><i>' + projectDescription + '</i></p>' +
      '<p class="project-description"><i>' + "Technologies used: " + technologiesUsed + '</i></p>' +
      '<div class="interactive">' +
      '<a href="' + projectLink + '" target="_blank">' +
      '<button type="button" class="btn btn-outline-secondary" style="margin-bottom: 10px">Github</button>' +
      '</a>' +
      demo +
      '</div>' +
      '</div>');
  $("#main").append('<hr />');
}

function loadProjects() {
  //list all projects here
  for (let i = 0; i < projectsJSON.length; i++) {

    var currProject = projectsJSON[i];
    var projectImage = currProject.projectImage;
    var projectName = currProject.projectName;
    var projectDescription = currProject.projectDescription;
    var projectTechnologies = currProject.projectTechnologies;
    var projectLink = currProject.projectLink;
    var demoLink = currProject.demoLink;
    var projectYear = currProject.projectYear;
    //make all technology names toLowerCase for easier searching
    projectTechnologies = projectTechnologies.map(function(e) {
      return e.toLowerCase();
    });

    allProjects.push({
      "projectImage" : projectImage,
      "projectName": projectName,
      "projectDescription": projectDescription,
      "projectTechnologies": projectTechnologies,
      "projectLink": projectLink,
      "demoLink": demoLink,
      "projectYear": projectYear
    });
  }
}




function appendAllProjects(projects) {
  //empty parent div
  $('#main').empty();
  for (let i = 0; i < projects.length; i++) {
    var el = projects[i];
    appendProjectToDocument(el.projectImage, el.projectName, el.projectDescription, el.projectTechnologies, el.projectLink,el.demoLink);
  }
}


//******************************************************************************************************
//DECLARATIONS
var yearChosen = 'all';
var technologyChosen = 'all';
var showProjects = [];
var allProjects = [];
loadProjects();
appendAllProjects(allProjects);


function showSearch() {

  showProjects = [];

  if (technologyChosen == 'all') {
    showProjects = allProjects;
  } else {
    for (let i = 0; i < allProjects.length; i++) {
      if (allProjects[i].projectTechnologies.includes(technologyChosen)) {
        showProjects.push(allProjects[i]);
      }
    }
  }

  var showProjects2 = [];
  if (yearChosen == 'all') {
    showProjects2 = showProjects;
  } else {
    for (let i = 0; i < showProjects.length; i++) {
      if (showProjects[i].projectYear == yearChosen) {
        showProjects2.push(showProjects[i]);
      }
    }
  }

  appendAllProjects(showProjects2);
}

function showTech(nameTechnology) {
  technologyChosen = nameTechnology;
  showSearch();
}

function showYear(year) {
  yearChosen = year;
  showSearch();
}

$("document").ready(function() {
  //show selection from dropdown menu
  $(".dropdown-menu a").click(function() {
    $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
    $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
  })
});
