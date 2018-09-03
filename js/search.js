function appendProjectToDocument(projectName,projectDescription,projectTechnologies,projectLink){
    var technologiesUsed = "";
    //search for whole word only
    if(projectTechnologies.includes("java"))
          technologiesUsed += "<span style='color:red'>Java </span>";
    if(projectTechnologies.includes("html"))
          technologiesUsed += "<span style='color:orange'>Html </span>";
    if(projectTechnologies.includes("css"))
          technologiesUsed += "<span style='color:blue'>Css </span>";
    if(projectTechnologies.includes("javascript"))
          technologiesUsed += "<span style='color:yellow'>JavaScript </span>";
    if(projectTechnologies.includes("bootstrap"))
          technologiesUsed += "<span style='color:purple'>Bootstrap </span>";
    if(projectTechnologies.includes("jquery"))
          technologiesUsed += "<span style='color:#7BA8EB'>jQuery </span>";
    $("#main")
      .append('<div class="project">' +
        '<img src="./img/projects/ebay.png" width="200" height="200">' +
        '<p class="project-name">' + projectName + '</p>' +
        '<p class="project-description"><i>'+ projectDescription +'</i></p>' +
        '<p class="project-description"><i>'+ "Technologies used: "+ technologiesUsed +'</i></p>' +
        '<div class="interactive">' +
        '<a href="'+ projectLink +'" target="_blank">' +
        '<button type="button" class="btn btn-outline-secondary" style="margin-bottom: 10px">Github</button>' +
        '</a>' +
        '</div>' +
        '</div>');
      $("#main").append('<hr />');
}

function loadProjects(){
    //list all projects here
    var projectName = "eBay™ Popularity Search";
    var projectDescription = "A Chrome Extension that sorts the eBay™  <br>search results by their popularity";
    var projectTechnologies = ['JavaScript', 'HTML', 'CSS'];
    var projectLink = "https://github.com/csaba97/Ebay-Popularity-Search";
    var projectYear = '2018';
    //make all technology names toLowerCase for easier searching
    projectTechnologies = projectTechnologies.map(function (e) {
        return e.toLowerCase();
    });

    allProjects.push({
        "projectName" : projectName,
        "projectDescription" : projectDescription,
        "projectTechnologies" : projectTechnologies,
        "projectLink" : projectLink,
        "projectYear" : projectYear
    });
}




function appendAllProjects(projects){
  //empty parent div
  $('#main').empty();
  for(let i=0;i<projects.length;i++){
    var el = projects[i];
    appendProjectToDocument(el.projectName,el.projectDescription,el.projectTechnologies,el.projectLink);
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


function showSearch(){

  showProjects = [];

  if(technologyChosen == 'all'){
    showProjects = allProjects;
  }
  else{
    for(let i=0;i<allProjects.length;i++){
      if(allProjects[i].projectTechnologies.includes(technologyChosen)){
          showProjects.push(allProjects[i]);
      }
    }
  }

  var showProjects2 = [];
  if(yearChosen == 'all'){
    showProjects2 = showProjects;
  }
  else{
    for(let i=0;i<showProjects.length;i++){
      if(allProjects[i].projectYear == yearChosen){
          showProjects2.push(allProjects[i]);
      }
    }
  }

  appendAllProjects(showProjects2);
}

function showTech(nameTechnology){
  technologyChosen = nameTechnology;
  showSearch();
}

function showYear(year){
  yearChosen = year;
  showSearch();
}

$("document").ready(function() {
    //show selection from dropdown menu
    $(".dropdown-menu a").click(function(){
      $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
      $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
    })
});
