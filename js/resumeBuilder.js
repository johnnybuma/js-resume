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

var work = [
	{
		"employer": "Freelance",
		"title": "Front-end Web Developer",
		"dates": "May 2014 - Present",
		"location": "Los Angeles, California",
		"description": "I have been independently studying and practicing web development since 2012. In May of 2014 I was given the opportunity to leave my previous career as a commercial electrician to refine my skills and focus my career on web development. I am currently available to consider full-time employment"
	},
	{
		"employer": "Accord Electric Corp",
		"title": "Lead Electrician",
		"dates": "August 2012 - June 2014",
		"location": "Huntington Beach, California",
		"description": "I was involved in the installation of large-scale industrial electrical systems. Responsible for supervising small teams on specified installations, planning daily schedule, material inventory/orders, RFI's, QA, and testing. Notable projects: Meggit AeroSpace - Simi Valley, Zodiac AeroSpace - Huntington Beach, Jacobs Engineering - Pasadena"
	}

];

var projects = [
	
	{
		"title": "Foothill Construction",
		"date": "January 2015",
		"description": "Designed local marketing page and custom estimating software for general contractor",
		"image": "images/foothill.jpg"
	},
	{
		"title": "Green Lifestyles Network",
		"date": "March 2015",
		"description": "Working on redevelopment of non-profit Green Media orginizations web presence",
		"image": "images/gln.jpg"
	}


];

var education = [

		{
			"Course": "Front-end Web Development",
			"School": "Udacity",
			"Format": "Online - Guided",
			"Dates": "June 2015 - Present",
			"Credential": "Nano Degree"
		},
		{
			"Course": "Introduction to CS and Programming Using Python",
			"School": "MITx",
			"Format": "Online - Self-paced",
			"Dates": "June 2013 - December 2013",
			"Credential": "Certificate"
		},
		{
			"Course": "Introduction to Computer Science",
			"School": "MITx",
			"Format": "Online",
			"Dates": "January 2014 - July 2014",
			"Credential": "Certificate"
		}

];

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedLinkedin = HTMLlinkedin.replace("%data%",bio.contacts.linkedin);
var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%",bio.WelcomeMsg);
var formattedSkills = HTMLskills.replace("%data%",bio.skills);

$("#topContacts").prepend(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLinkedin);
$("#footerContacts").prepend(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedLinkedin);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

$("#header").append(HTMLskillsStart);


bio.skills.display = function() {

	for (var i = 0; i < bio.skills.length; i++) {

		var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
		$("#skills").append(formattedSkill);
	}
}

work.display = function() {
	$("#workExperience").append(HTMLworkStart);
	for (var i = 0; i < work.length; i++) {
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work[i].employer);
		$(".work-entry:last").append(formattedEmployer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work[i].title);
		$(".work-entry:last").append(formattedTitle);
		var formattedDates = HTMLworkDates.replace("%data%",work[i].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedLocation = HTMLworkLocation.replace("%data%",work[i].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDescription = HTMLworkDescription.replace("%data%",work[i].description);
		$(".work-entry:last").append(formattedDescription);
	}

}

projects.display = function () {
	$("#projects").append(HTMLprojectStart);

	for (var i = 0; i < projects.length; i++) {
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects[i].title);
		$(".project-entry:last").append(formattedProjectTitle);
		var formattedProjectDate = HTMLprojectDates.replace("%data%",projects[i].date);
		$(".project-entry:last").append(formattedProjectDate);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects[i].description);
		$(".project-entry:last").append(formattedProjectDescription);
		
	}

}

education.display = function() {
	$("#education").append(HTMLschoolStart);

	for (var i = 0; i < education.length; i++){
		var formattedSchoolName = HTMLschoolName.replace("%data%",education[i].School);
		$(".education-entry:last").append(formattedSchoolName);
		var formattedSchoolCourse = HTMLschoolMajor.replace("%data%",education[i].Course);
		$(".education-entry:last").append(formattedSchoolCourse);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education[i].Format);
		$(".education-entry:last").append(formattedSchoolLocation);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%",education[i].Dates);
		$(".education-entry:last").append(formattedSchoolDates);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education[i].Credential);
		$(".education-entry:last").append(formattedSchoolDegree);

	}	
}
console.log(education.length);
bio.skills.display();
work.display();
projects.display();
education.display();

