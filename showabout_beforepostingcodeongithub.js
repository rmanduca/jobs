var usern = 'rmanduca'
var domai = 'harvard.'
var school = 'edu'
var whatevs = '@g.'
var whatdoing = 'mailt'

function showabout(){
	$('#overlay').css('width', '100%');
	$('#overlay').css('height', '100%');
	$('#about').css('width','600px');
	$('#about').css('top','50%');
	$('#about').css('left','50%');
	$('#about').css('height','450px');
	$('#about').css('padding','10px');
    $('#about').css('border','2px solid #111');
	$('#about').html('<b>We talk a lot about jobs in this country: jobs created, jobs lost, good jobs, bad jobs. But where are these jobs, exactly?</b> <br><br>This visualization plots one dot for every job in the United States, according to the Census Bureau\'s <a href="http://lehd.ces.census.gov/data/" target="_blank">Longitudinal Employer-Household Dynamics</a> data. The LEHD data is based on state unemployment insurance records, and tabulates the count of jobs by census block. Here, jobs are colored by type, allowing us to see how different industries and sectors exhibit different spatial patterns--some clustering in downtowns, others spreading across city and suburbs alike. <br><br>This project was inspired by the <a href="http://demographics.coopercenter.org/DotMap/index.html" target="_blank">Racial Dot Map</a>, as implemented most recently by the <a href="http://www.coopercenter.org/" target="_blank">Cooper Center</a> at the University of Virginia. I\'m grateful to them for hosting such a stunning visualization, and especially for their extensive methodology section, which I drew on heavily to create the map here. <br><br>If you like this visualization, you might be interested in checking out some of my <a href="http://www.robertmanduca.com/?cat=2" target="_blank">other projects</a>. You can find more about me <a href="http://www.robertmanduca.com" target="_blank">here</a>. And feel free to get in touch via <a href="'+whatdoing +'o:'+usern+whatevs+domai+school+'">email</a> or <a href="http://www.twitter.com/robertmanduca" target="_blank">Twitter</a>!');
		
}

function showfaq(){
	$('#overlay').css('width', '100%');
	$('#overlay').css('height', '100%');
	$('#about').css('width','900px');
	$('#about').css('left','40%');
	$('#about').css('top','47%');
	$('#about').css('height','510px');
	$('#about').css('padding','10px');
	$('#about').css('text-align','left');
    $('#about').css('border','2px solid #111');	
	$('#about').html('<b>Some frequently asked questions:</b><br><br><b>Is this really all of the jobs?</b> It\'s all of the jobs covered by state unemployment insurance programs, plus some federal jobs (described in detail <a href="http://lehd.ces.census.gov/doc/help/onthemap/FederalEmploymentInOnTheMap.pdf" target="_blank")>here</a>). The BLS estimates that this includes about <a href="http://lehd.ces.census.gov/doc/QWI_101.pdf" target="_blank">96% of civilian wage and salary jobs</a>.<br><br><b>What\'s in each category?</b> The LEHD dataset breaks down job counts by 2-digit <a href="http://www.census.gov/eos/www/naics/index.html" target="_blank">NAICS</a> code. This represents the primary industry of the employing company. I aggregated these categories as follows: <ul><li>Manufacturing and Trade: 11 (Agriculture and Forestry), 21 (Mining), 22 (Utilities), 23 (Construction), 31-33 (Manufacturing), 42 (Wholesale Trade), 48-49 (Transportation and Warehousing)</li><li>Professional Services: 51 (Information), 52 (Finance and Insurance), 53 (Real Estate), 54 (Professional, Scientific, and Technical Services), 55 (Management of Companies and Enterprises)</li><li>Healthcare, Education, and Government: 61 (Educational Services), 62 (Health Care), 81 (Other Services - largely Religious, Grantmaking, Civic, Professional, and Similar Organizations)</li><li>Retail, Hospitality, and Other Services: 44-45 (Retail Trade), 56 (Administrative and Support Services), 71 (Arts, Entertainment, and Recreation - largely Amusement, Gambling, and Recreation), 72 (Accomodation and Food Services)</li></ul><b>Where is Boston?</b> Unfortunately, a few jurisdictions - most notably Massachusetts - haven\'t yet integrated their data into the LEHD database. As soon as they do I\'ll add it to the map. <br><br><b>This is super cool! Have you thought about XXXX?</b> Probably not. Send me an <a href="'+whatdoing +'o:'+usern+whatevs+domai+school+'">email</a> or <a href="http://www.twitter.com/robertmanduca" target="_blank">tweet</a> and let\'s talk!');}
function hideabout(){
	$('#overlay').css('width', '0%');
	$('#overlay').css('height', '0%');
	$('#about').css('width','0px');
	$('#about').css('height','0px');
	$('#about').css('padding','0px');
	$('#about').css('text-align','center');
    $('#about').css('border','0px solid #111');
	$('#about').html('');
}
