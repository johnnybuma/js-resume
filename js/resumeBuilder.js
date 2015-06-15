var bio = {
	"name": "Jonathan Buma",
	"role": "Front-end Web Developer",
	"contacts": {
		"mobile": "801-673-7144",
		"email": "johnny.buma@gmail.com",
		"github": "johnnybuma",
		"linkedin": "jonathanbuma"
	},
	"WelcomeMsg": "Go ahead and check out my chomps, then let me know what I can do for you!",
	"skills": [
		"HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap3", "Organized", "Obviously a perfect fit!", "Don't miss out on this one, I'm a catch!"
	],
	"bioPic": "images/fry.jpg"
};

var education = {
	"schools": [
		{
			"name": "West Jordan High School",
			"city": "West Jordan Utah",
			"degree": "High School Diploma",
			"year": "2006"
		},
		{
			"name": "Udacity",
			"location": "Online",
			"degree": "Front-end Web Developer",
			"year": "2015"
		}	
	]
}

var work = {

}

var projects = {

}

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedLocation = HTMLlocation.replace("%data%",bio.location);
var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%",bio.WelcomeMsg);
var formattedSkills = HTMLskills.replace("%data%",bio.skills);

$("#main").append(formattedMobile);
$("#main").append(formattedEmail);

/*if(bio.skills.length > 0) {
	console.log("its true!");
    $("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);

	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
	

}    
*/
$("#header").append(HTMLskillsStart);
console.log(bio.skills.length);
for (var i = 0; i < bio.skills.length; i++) {

	var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
	$("#skills").append(formattedSkill);
}