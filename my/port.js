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
		  	<a href="https://github.com/deepanshu-4" target=_blank >Github </h3>
		  	<a href="https://www.linkedin.com/in/deepanshu-kaushik-a479301b3/" target=_blank>LinkedIn</a>
		  	<a href="https://www.codechef.com/users/dk20" target=_blank >Codechef</a>
  	<a href="https://auth.geeksforgeeks.org/user/cse4/practice/" target=_blank >GeeksforGeeks</a>
  	<a href="https://leetcode.com/dk4/" target=_blank >Leetcode</a>
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
		document.querySelector("#h1").innerHTML="<h1>Projects</h1>";
		document.querySelector("#ml").addEventListener("click",()=>scall('ml'));
        document.querySelector("#web").addEventListener("click",()=>scall('web'));
        document.querySelector("#python").addEventListener("click",()=>scall('python'));
        document.querySelector("#chrome").addEventListener("click",()=>scall('chrome'));
	    console.log("p");

	}
	else{
		element.classList.remove("typewriter");
	}

}

function scall(val){

	if(val==="ml"){
		console.log("a");
		// document.querySelector("#h2").innerHTML="ML";
		document.querySelector('#chrome').style.backgroundColor = 'lightgrey';
		document.querySelector('#web').style.backgroundColor = 'lightgrey';
		document.querySelector('#ml').style.backgroundColor = 'blue';
		document.querySelector('#python').style.backgroundColor = 'lightgrey';
		document.querySelector('#inproject').innerHTML=`<br><div class="inpro">

         

		<div class="flex-container">
				<div  style="flex-grow: 1"><h4>Python , Machinelearning, Data Science </h4></div>
	  			
		</div> 
		</div>
		
        <br><div class="inpro">
		<div class="flexcontainer">
			<div  style="flex-grow: 1"><h1> Loan Prediction</h1>
  			</div>
  			   <br>
  			<div  style="flex-grow: 8;  word-wrap: break-word;">
	  			  <ol style="color:black;">
	  			<li>Using Machine learning Algorithms make a classifier that can find whetheter loan should be given or not
	  		    </li>
	  		 
	  		  
	  		    	<li>Language used :- Python</li>
	  		    	<li>Library used :-  Numpy,Scipy,Scikit-learn</li>
	  		    	<li><a href="https://github.com/deepanshu-4/Loan-Prediction-Using-ML" target=_blank>Link for project</a></li>
	  		    <ol>
  			</div>
		</div> 


		</div>

		<br>
		<div class="inpro">
			<div>
				<div  style="flex-grow: 1"><h1>Disease Prediction Based on Symptom </h1></div>
					<br>
		  			<div  style="flex-grow: 8">
		  			<ol style="color:black;">
		  			<li>
		  			 Build a ml model using classification Algorithms that classify the Disease and predict disease based on symptom 		   
		  		   	</li>
		  		   
		  		   	
		  		    <li><a href="https://github.com/deepanshu-4/Disease-Prediction" target=_blank> Link for project</a></li>
		  		    </ol>
  				</div>
			</div> 
		</div>`;


	}
	else if(val=='web'){
		console.log("e");
		document.querySelector('#ml').style.backgroundColor = 'lightgrey';
		document.querySelector('#web').style.backgroundColor = 'blue';
		// document.querySelector("#h2").innerHTML="Web";
		document.querySelector('#python').style.backgroundColor = 'lightgrey';
		document.querySelector('#chrome').style.backgroundColor = 'lightgrey';
		document.querySelector('#inproject').innerHTML=`

		

		<br><div class="inpro">
        
		<div class="flex-container">
				<div  style="flex-grow: 1"><h4> Using Django HTML  CSS JS </h4></div>
	  			
		</div> 
		</div>


		<br>
		<div class="inpro">
			<div class="flexcontainer">
				<div  style="flex-grow: 1"><h1> DigiStorage</h1></div>
					<br>
		  			<div  style="flex-grow: 8">
		  			<ol style="color:black;">
		  			<li>
		  			 Build a website to store images,files , music , youtube , playlist on online storage using cloudinary	  		   
		  		   	</li>
		  		    <li>
		  			  Authentication of user by sending otp through email using sendgrid api	  		   
		  		   	</li>
		  		   	<li>
		  			 Provide a feature to share image in public network 	  		   
		  		   	</li>
		  		   <li><a href="http://digistorage.herokuapp.com/data" target=_blank> http://digistorage.herokuapp.com/data</a></li>
		  		    </ol>
  				</div>
			</div> 
		</div>

		<br>
		<div class="inpro">
			<div>
				<div  style="flex-grow: 1"><h1>Codechef Profilematcher </h1></div>
					<br>
		  			<div  style="flex-grow: 8">
		  			<ol style="color:black;">
		  			<li>
		  			 Build a website to that fetch the details of two codechef profile using username and make a comparison report	  		   
		  		   	</li>
		  		    <li>
		  			  Using webscrapping to fetch the data	  		   
		  		   	</li>
		  		   	
		  		    <li><a href="https://mcodechefp.herokuapp.com/codescrap" target=_blank> https://mcodechefp.herokuapp.com/codescrap</a></li>
		  		    </ol>
  				</div>
			</div> 
		</div>

		
		<br>
		<div class="inpro">
			<div>
				<div  style="flex-grow: 1"><h1>Attendence Mangement </h1></div>
					<br>
		  			<div  style="flex-grow: 8">
		  			<ol style="color:black;">
		  			<li>
		  			 Develop a website that read pdf genereated by chrome attendence extension and maintain the attendence 	  		   
		  		   	</li>
		  		    <li>
		  			  Helpful for teacher to maintain student Attendence record 		   
		  		   	</li>
		  		   	
		  		    <li><a href="https://github.com/" target=_blank> Link for project</a></li>
		  		    </ol>
  				</div>
			</div> 
		</div>

		<br>
		<div class="inpro">
			<div>
				<div  style="flex-grow: 1"><h1>Codsaver </h1></div>
					<br>
		  			<div  style="flex-grow: 8">
		  			<ol style="color:black;">
		  			<li>
		  			 Develop a website to that is used to store coding problem with title ,topic, solution ,importance value and problem link	  		   
		  		   	</li>
		  		    <li>
		  			  Helpful for student to store their practice problem so that they can again revise it  		   
		  		   	</li>
		  		   	
		  		    <li><a href="http://codsaver.herokuapp.com/" target=_blank> http://codsaver.herokuapp.com/</a></li>
		  		    </ol>
  				</div>
			</div> 
		</div>
        
		<br>
    <div class="inpro">
			<div>
				<div  style="flex-grow: 1"><h1>E V M </h1></div>
					<br>
		  			<div  style="flex-grow: 8">
		  			<ol style="color:black;">
		  			<li>
		  			 Build a website that is like a voting machine.  	  		   
		  		   	</li>
		  		   
		  		   	
		  		    <li><a href="https://github.com/" target=_blank> Link for project</a></li>
		  		    </ol>
  				</div>
			</div> 
		</div>

		
		`

	}

	else if(val==='python'){
		document.querySelector('#ml').style.backgroundColor = 'lightgrey';
		document.querySelector('#web').style.backgroundColor = 'lightgrey';
		document.querySelector('#python').style.backgroundColor = 'blue';
		document.querySelector('#chrome').style.backgroundColor = 'lightgrey';
		document.querySelector('#inproject').innerHTML=`
		
		
		<br><div class="inpro">

		<div>
				<div  style="flex-grow: 1"><h1> To Do list cli application</h1></div>
				<br>
	  			<div  style="flex-grow: 8">
	  			<ol style="color:black;">
	  			<li>
	  			 	Using Python make a to do list application that execute on commannd line interface  		   
	  		   	</li>
	  		    <li><a href="https://www.geeksforgeeks.org/how-to-make-a-todo-list-cli-application-using-python/" target=_blank> My article on gfg</a></li>
	  		    </ol>
  			</div>
		</div> 
		</div>
		<br><div class="inpro">

		<div>
				<div  style="flex-grow: 1"><h1> File-Arranger-in-Python</h1></div>
				<br>
	  			<div  style="flex-grow: 8">
	  			<ol style="color:black;">
	  			<li>
	  			 	Arrange different files in different folder like images,documents etc  		   
	  		   	</li>
	  		    <li><a href="https://github.com/deepanshu-4/File-Arranger-in-Python" target=_blank> Link </a></li>
	  		    </ol>
  			</div>
		</div> 
		</div>

		<br><div class="inpro">

		<div>
				<div  style="flex-grow: 1"><h1>Python-Desktop-Applications</h1></div>
				<br>
	  			<div  style="flex-grow: 8">
	  			<ol style="color:black;">
	  			<li>
	  			 	<strong>FaceDetector.py</strong><br>
	  			 	<br>
	  			 	Facedetector.py can be used to keep track who use your pc. When anyone start the PC  the application automatically click the photo of user and send image to gmail id of registered user.
					<br><br><span style="color:orange;">How to Use</span><br><br>
Add shortcut of facedetector.bat file in startup folder. (Type shell:startup in Window Run)
In facedetector.py add your email address  		   
	  		   	</li><br>
	  		   	<li>
	  		   	<strong>Siri.py</strong><br>
A desktop voice assisant which can used to google search,youtube video playing etc
	  		   	</li><br>
	  		    <li><a href="https://github.com/deepanshu-4/Python-Desktop-Applications" target=_blank> Link </a></li>
	  		    </ol>
  			</div>
		</div> 
		</div>
		`



		;

	}
	else{
		document.querySelector('#ml').style.backgroundColor = 'lightgrey';
		document.querySelector('#web').style.backgroundColor = 'lightgrey';
		document.querySelector('#chrome').style.backgroundColor = 'blue';
		document.querySelector('#python').style.backgroundColor = 'lightgrey';
		document.querySelector('#inproject').innerHTML=`
		<br><div class="inpro">
        
		<div class="flex-container">
				<div  style="flex-grow: 1"><h4> Using JavaScript and chromeAPI</h4></div>
	  			
		</div> 
		</div>


		
		<br><div class="inpro">

		<div>
				<div  style="flex-grow: 1"><h1> Google Meet Attendence Collector</h1></div>
				<br>
	  			<div  style="flex-grow: 8">
	  			<ol style="color:black;">
	  			<li>
	  			 Developed a chrome extension that fetch Attendence from Google meet and generate a report in form of pdf	  		   
	  		   	</li>
	  		    
	  		    <li><a href="https://github.com/deepanshu-4/Chrome-Extensions/tree/main/popupsgooglemmeet" target=_blank> Link for project</a></li>
	  		    </ol>
  			</div>
		</div> 
		</div>

		
		
		<br><div class="inpro">
        
		<div class="flex-container">
				<div  style="flex-grow: 1"><h1> AddBlocker  Chrome Extension to block add </h1></div>
	  			<div  style="flex-grow: 8">
	  			<ol style="color:black;">
	  			<li>
	  			 Developed a chrome extension that block the advertisement that are available on webpages .	  		   
	  		   	</li>
	  		    
	  		    <li><a href="https://github.com/deepanshu-4/Chrome-Extensions/tree/main/adblocker" target=_blank > Link for project</a></li>
	  		    </ol>
  			</div>
		</div> 
		</div>

		<br><div class="inpro">

		<div>
				<div  style="flex-grow: 1"><h1> Imagechanger Chrome Extension </h1></div>
				<br>
	  			<div  style="flex-grow: 8">
	  			<ol style="color:black;">
	  			<li>
	  			 Developed a chrome extension that replace the all given images with random given images	  		   
	  		   	</li>
	  		    <li><a href="https://github.com/deepanshu-4/Chrome-Extensions/tree/main/imageextension" target=_blank> Link for project</a></li>
	  		    </ol>
  			</div>
		</div> 
		</div>

		<br><div class="inpro">

		<div >
				<div  style="flex-grow: 1"><h1> Magic Chrome Extension like Thanos </h1></div>
				<br>
	  			<div  style="flex-grow: 8">
	  			<ol style="color:black;">
	  			<li>
	  			 Developed a chrome extension that delete the complete  webpage.	  		   
	  		   	</li>
	  		    <li><a href="https://github.com/deepanshu-4/Chrome-Extensions/tree/main/magic" target=_blank> Link for project</a></li>
	  		    </ol>
  			</div>
		</div> 
		</div>
		`

	}

}