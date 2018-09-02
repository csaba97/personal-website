$("document").ready(function() {

    var projectName = "eBay™ Popularity Search";
    var projectDescription = "A Chrome Extension that sorts the eBay™  <br>search results by their popularity";
    var projectTechnologies = " JavaScript HTML CSS ";//in order to search for whole words only, every word needs a starting and ending space
    var projectLink = "https://github.com/csaba97/Ebay-Popularity-Search";

    projectTechnologies = projectTechnologies.toLowerCase();
    var wholeWordRegex = new RegExp("\\b"+"string"+"\\b");
    var technologiesUsed = "";
    //search for whole word only
    if(projectTechnologies.indexOf(" java ") > -1)
          technologiesUsed += "<span style='color:red'>Java </span>";
    if(projectTechnologies.indexOf(" html ") > -1)
          technologiesUsed += "<span style='color:orange'>Html </span>";
    if(projectTechnologies.indexOf(" css ") > -1)
          technologiesUsed += "<span style='color:blue'>Css </span>";
    if(projectTechnologies.indexOf(" javascript ") > -1)
          technologiesUsed += "<span style='color:yellow'>JavaScript </span>";
    if(projectTechnologies.indexOf(" bootstrap ") > -1)
          technologiesUsed += "<span style='color:purple'>Bootstrap </span>";
    if(projectTechnologies.indexOf(" jquery ") > -1)
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
});
