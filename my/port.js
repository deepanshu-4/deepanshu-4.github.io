document.addEventListener('DOMContentLoaded',function(){

document.querySelector("#about").addEventListener("click",()=>call('about'));
document.querySelector("#education").addEventListener("click",()=>call('education'));
document.querySelector("#projects").addEventListener("click",()=>call('projects'));
document.querySelector("#achievements").addEventListener("click",()=>call('achievements'));
document.querySelector("#skills").addEventListener("click",()=>call('skills'));
call('about')
})

function call(val){
	if(val==="about")
	{
		document.getElementById("im").style.display="block";
		document.querySelector("#tp").innerHTML=`<h3 style="color:darkorange;" >Deepanshu Kaushik S/O Raman Kumar </h3>
		  	<h5>deepukaushik2001@gmail.com</h5>
		  	<h5>8708099191</h5>
		  	<a href="" >Github </h3>
		  	<a href="">LinkedIn</a>
		  	<a href="">Codechef</a>
		  	<a href="">GeeksforGeeks</a>
		  	<a href="">Leetcode</a>
		  	`;
		document.querySelector('#pro').style.display = 'none';
		console.log("a");
		document.querySelector("#h1").innerHTML=`<h1>About</h1><br><fieldset><h2 style="color:blue;">My name is Deepanshu.  I am pursuing my B.tech in field of <span style="color:green;">Computer Science and Eng.</span> from DCRUST , Murthal Haryana . Currently I am in 3rd year. I have interest in field of Web development,Machine Learning,Blockchain. I know C++,Python programming languages. </h2> </fieldset> <fieldset><h2 style="color:darkblue;">Currently I am living at Jakhauli, Sonipat,Haryana (131023)</h3></fieldset>`;

	}
	else if(val=='education')
	{
		document.getElementById("im").style.display="none";
		document.querySelector("#tp").innerHTML=`<span>Education</span><hr><div style="color:navajowhite;background:linear-gradient(
			45deg, grey, blue);"><h5>B.tech</h5>
			<h5>Computer Science and Engineering</h5>
			<h5>in Blockchain</h5>
		  	<h5>DCRUST,Murthal Haryana</h5>
		  	</div>`;
		document.querySelector('#pro').style.display = 'none';
		document.querySelector("#h1").innerHTML=`<h1>Education</h1><br>
		<div class="flex-container">
		   <div class="edu" style="flex-grow: 1;display:table;">BTech 
		       <table> <th>Semester</th><th>CGPA</th> 
		       <tr><td>Ist</td><td>7.91</td></tr>
		       <tr><td>2nd</td><td>8.78</td></tr>
		       <tr><td>3rd</td><td>8.90</td></tr>
		       <tr><td>4th</td><td>9.29</td></tr>
		       <tr><td>5th</td><td>8.76</td></tr>
		       </table>
		   </div>

		   <div class="edu" style="flex-grow: 1;display:table;">12th Non Med
		   <table>  
		       <tr><td>Board</td><td>CBSE</td></tr>
		       <tr><td>Result</td><td>94.2%</td></tr>
		       <tr><td>Passing Year</td><td>2018</td></tr>
		       </table>
		   </div> 
		   <div class="edu" style="flex-grow: 1;display:table;">10th
		   <table>  
		       <tr><td>Board</td><td>HBSE</td></tr>
		       <tr><td>Result</td><td>97.2%</td></tr>
		       <tr><td>Passing Year</td><td>2016</td></tr>
		       </table>

		   </div> 
		 </div>`;

	}
	
	else if(val==="achievements")
	{
		document.getElementById("im").style.display="block";
		document.querySelector("#tp").innerHTML=`<span>Achievements</span><hr><div style="color:navajowhite;background:linear-gradient(
27deg, black, transparent);"><h5>Gate qualified in 2021</h5>
			<h5>Qualified in Google codejam  for first round</h5>
			<h5>3* at codechef with rating 1775</h5>
		  	<h5>Solve more than 300 question on Leetcode and GeeksforGeeks</h5>
		  	</div>`;
	    document.querySelector('#pro').style.display = 'none';
		document.querySelector("#h1").innerHTML=`<h1>Achievements</h1><br>
		<ul>
		<li>Gate qualified in 2021 with  AIR 3420/101922.</li>
		<li>Get place in Top 10% in all Semester </li>
		<li>Participate in Google Codejam 2021  First Round global rank 7720</li>
        <li>Participate in Google KickStart 2020</li>

		</li>
		</ul>

		`;



	}


	else if(val==="skills")
	{
		document.getElementById("im").style.display="block";
		document.querySelector("#tp").innerHTML=`<span>Skills</span><hr><div style="color:navajowhite;background:linear-gradient(
27deg, darkblue, transparent);"><h5>Software Engineer , Web Developer </h3>
		<h5>Competitive Programming , Blockchain Developer </h3>
		<h5>Machine Learning Enthusiastic</h3>
		  	</div>`;
	    document.querySelector('#pro').style.display = 'none';
		document.querySelector("#h1").innerHTML=`<h1>Skills</h1><br>
		<table style="width:100%;border-collapse: collapse;">
		  <tr>
		    <th>Programming languages:</th>
		    <td>Python</td>
		    <td>C++</td>
		    <td>JavaScript</td>
		    <td>HTML</td>
		    <td>CSS</td>
		  </tr>
		    <th>Web Framework</th>
		    <td>Django</td>
		  <tr>
		  </tr>
		  <tr>
		    <th>Databases</th>
		    <td>SQL</td>
		    <td>MySQL</td>
		  </tr>
		  <tr>
		    <th>Others</th>
		    <td>Git</td>
		    <td>Github</td>
		    <td>OOPs</td>
		    <td>Linux</td>
		    <td>Data Structures</td>
		    <td>Algorithms</td>
		    <td>Problem Solving</td>
		  </tr>
		</table>

		`;



	}

	else if(val==="projects")
	{
		  	var element = document.getElementById("tp");
 		 	
 		 	element.classList.add("typewriter");
 		 	document.getElementById("im").style.display="none";
 		 	

			document.querySelector("#tp").innerHTML=`<h3 style="color:purple;" > Web development  Machine Learning </h3>
		  	
		  	`;
		document.querySelector('#pro').style.display = 'block';
		document.querySelector("#h1").innerHTML="Projects";
		document.querySelector("#ml").addEventListener("click",()=>scall('ml'));
        document.querySelector("#web").addEventListener("click",()=>scall('web'));
	    console.log("p");

	}
	else{
		element.classList.remove("typewriter");
	}

}

function scall(val){

	if(val==="ml"){
		console.log("a");
		document.querySelector("#h2").innerHTML="ML";

	}
	else if(val=='web'){
		console.log("e");
		document.querySelector("#h2").innerHTML="Web";

	}

}