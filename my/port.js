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
		document.querySelector("#tp").innerHTML=`<div  style="width:100%; word-wrap: break-word;"><h3 style="color:darkorange;" >Hi, I'm Deepanshu Kaushik</h3>
		 
		  <h5 style="color:blue">A  Software Engineer | Full stack Web Developer | Blockchain Developer | Competitive Programmer |</h5>
		</div>
		  	<h5><a style="color:purple" href="mailto:deepukaushik2001@gmail.com">deepukaushik2001@gmail.com</a></h5>
		  	<h5>8708099191</h5>
		  	<div style="background-color:#CCCC66;">
	
		  	<a href="https://github.com/deepanshu-4" target=_blank >Github </h3>
		  	<a href="https://www.linkedin.com/in/deepanshu-kaushik-a479301b3/" target=_blank>LinkedIn</a>
		  	<a href="https://www.codechef.com/users/dk20" target=_blank >Codechef</a>
		  	<a href="https://www.codeforces.com/profile/dk_04" target=_blank >Codeforces</a>
  	<a href="https://auth.geeksforgeeks.org/user/cse4/practice/" target=_blank >GeeksforGeeks</a>
  	<a href="https://leetcode.com/dk4/" target=_blank >Leetcode</a>

      	</div>
		  	`;
		document.querySelector('#pro').style.display = 'none';
		console.log("a");
		document.querySelector("#h1").innerHTML=`<h1 style="color:silver; text-align:center;">&#169 Deepanshu Kaushik </h1>`;

	}

	else if(val=='education')
	{
		document.getElementById("im").style.display="none";
		document.querySelector("#tp").innerHTML=`<span style="color:purple;">Education</span><hr><div style="color:navajowhite;background:linear-gradient(
			45deg, grey, blue);"><h5>Bachelor of Technology ( B.Tech ) 2018-2022  </h5>
			<h5>Computer Science and Engineering</h5>
			<h5>in Blockchain</h5>
		  	<h5>Deenbandhu Chhotu Ram University Of Science And Technology, Murthal Sonipat</h5>
		  	</div>`;
		document.querySelector('#pro').style.display = 'none';
		document.querySelector("#h1").innerHTML=`<h1  style="color:gold; text-align:center;">Educational Detail  <span>&#9759;</span></h1><br>
		<div class="flex-container">
		   <div class="edu" style="flex-grow: 1;display:table;">BTech 
		       <table> <td>Course</td><td>B.Tech CSE</td> 
		       <tr><td>CGPA</td><td>8.67</td></tr>
		       <tr><td>Passing year</td><td>2022</td></tr>
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
		document.querySelector("#tp").innerHTML=`<span  style="color:purple;">Achievements</span><hr><div style="color:navajowhite;background:linear-gradient(
27deg, black, transparent);">
			<h5>3* at codechef with rating 1775</h5>
		  	<h5>Solve more than 300 question on Leetcode and GeeksforGeeks</h5>
		  	<h5>Student Coordinator at Institution Innovation Cell , DCRUST</h5>
		  	<h5>District Topper in 10th class (HBSE) and among top 10 in Haryana State.</h5>
		  	</div>`;
	    document.querySelector('#pro').style.display = 'none';
		;
		document.querySelector("#h1").innerHTML=``;
	}


	else if(val==="skills")
	{
		document.getElementById("im").style.display="block";
		document.getElementById("im").style.display="none";
		document.querySelector("#tp").innerHTML=`<span style="color:purple;">Technical knowledge</span><hr><div style="color:navajowhite;background:linear-gradient(
27deg, darkblue, transparent);"><h5>Software Development , Web Developement </h3>
		<h5>Competitive Programming , Blockchain Development </h3>
		<h5>Machine Learning & Data Science </h3> 
		  	</div>`;

	    document.querySelector('#pro').style.display = 'none';
		document.querySelector("#h1").innerHTML=`<h1 style="color:gold; text-align:center;">Skills <span>&#9759;</span></h1><br>
		
		<div class="container">
			<div class="card">
			<h1>Programming languages</h1>
			<h2>C++ | C | Python | JavaScript</h2>
			</div>
			
			<div class="card">
			<h1>Web Developement</h1>
			<h2>HTML | CSS </h2>
			<h2>JavaScript | React Js</h2>
			<h2>Django | NodeJs </h2>
			</div>
			
			<div class="card">
			<h1>Blockchain Developement</h1>
			<h2>Solidity | Web3 | Truffle</h2>
			<h2> IPFS | ReactJs | NFT</h2>
			</div>

			<div class="card">
			<h1>Machine Learning and Data Science</h1>
			<h2>Python | Pandas | Numpy </h2>
			</div>
           
           <div class="card">
			<h1>Databases</h1>
			<h2>SQL | MongoDB </h2>
			</div>


			<div class="card">
			<h1>Other Tools and Technology</h1>
			<h2>Data Structures & Algorithm | Git | Github </h2>
			<h2> RESTFUL Api | OOPS | Linux | React Native </h2>
			</div>

			
		</div>

		`;



	}

	else if(val==="projects")
	{
		  	var element = document.getElementById("tp");
 		 	
 		 	element.classList.add("typewriter");
 		 	document.getElementById("im").style.display="none";
			document.querySelector("#tp").innerHTML=`<h3 style="color:purple; letter-spacing:2px;" > Technical Projects </h3>
		  	
		  	`;
		document.querySelector('#pro').style.display = 'block';
		document.querySelector("#h1").innerHTML=`<h1 style="color:gold;text-align:center;">Projects  <span>&#9759;</span></h1`;
		document.querySelector("#ml").addEventListener("click",()=>scall('ml'));
        document.querySelector("#web").addEventListener("click",()=>scall('web'));
        document.querySelector("#python").addEventListener("click",()=>scall('python'));
        document.querySelector("#chrome").addEventListener("click",()=>scall('chrome'));
        document.querySelector("#blockchain").addEventListener("click",()=>scall('blockchain'));

	}
	else{
		element.classList.remove("typewriter");
	}

}

function scall(val){
	if(val==="blockchain")
	{
		document.querySelector('#chrome').style.backgroundColor = 'lightgrey';
		document.querySelector('#web').style.backgroundColor = 'lightgrey';
		document.querySelector('#ml').style.backgroundColor = 'lightgrey';
		document.querySelector('#blockchain').style.backgroundColor = 'blue';
		document.querySelector('#python').style.backgroundColor = 'lightgrey';
		document.querySelector('#inproject').innerHTML=`<br><div class="inpro">

         

		<div class="flex-container">
				<div  style="flex-grow: 1">
				<h3>Solidity | Web3 | Ganache | Truffle | ReactJs | IPFS  </h4></div>
	  			
		</div> 
		</div>
		
        <br><div class="inpro">
		<div class="flexcontainer">
			<div  style="flex-grow: 1"><h1  style="letter-spacing:0.2rem;color:blue; text-align:center">DappDrive</h1>
  			</div>
  			   <br>
  			<div  style="flex-grow: 8;  word-wrap: break-word;">
	  			  <ol style="color:black;">
	  			<li>
	  			 DappDrive is distributed and decentralized web application based on blockchain. It is file and image storing and sharing website.
	  			 In this application user can store their files and images in private and secure manner. This application also provide feature to share images publically on website so that other user can also watch their images.
	  			 In this application for stroing assests IPFS(Interplanetry File Storage System) is used . IPFS is a peer to peer and distributed network. and  when data is upload on IPFS then hash value is genereated .
	  			 In this application hash is stored on blockchain so that intergrity and immutablity of system can be maintained.
	  			 For frontend part react js is used and to interact with blockchain smart contract is used.
	  			 <br>

	  			 </li>
	  			 <li><a href="https://github.com/deepanshu-4/dapp" target=_blank>&#8688; Project link</a></li>
	  			 <li style="margin-top:5%;">
	  			 <img  src="dapp5 (1).png">
	  			 <img  src="dapp5 (2).png">
	  			 <img  src="dapp5 (3).png">
	  			 <img  src="dapp5 (4).png">
	  			 <img  src="dapp5 (5).png">
	  			 <img  src="dapp5 (6).png">
	  		    
	  		    </li>
	  		 
	  		    
	  		    <ol>
  			</div>
		</div> 

		</div>

		<br>
		`;




	}

	else if(val==="ml"){
		console.log("a");
		// document.querySelector("#h2").innerHTML="ML";
		document.querySelector('#blockchain').style.backgroundColor = 'lightgrey';
		document.querySelector('#chrome').style.backgroundColor = 'lightgrey';
		document.querySelector('#web').style.backgroundColor = 'lightgrey';
		document.querySelector('#ml').style.backgroundColor = 'blue';
		document.querySelector('#python').style.backgroundColor = 'lightgrey';
		document.querySelector('#inproject').innerHTML=`<br><div class="inpro">

         

		<div class="flex-container">
				<div  style="flex-grow: 1"><h3>Python | Machine Learning Algorthm | Pandas | Scikit-learn </h4></div>
	  			
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
	  		    	<li><a href="https://github.com/deepanshu-4/Loan-Prediction-Using-ML" target=_blank> &#8688; Link for project</a></li>
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
		  		   
		  		   	
		  		    <li><a href="https://github.com/deepanshu-4/Disease-Prediction" target=_blank>&#8688; Link for project</a></li>
		  		    </ol>
  				</div>
			</div> 
		</div>`;


	}
	else if(val=='web'){

		console.log("e");
		document.querySelector('#ml').style.backgroundColor = 'lightgrey';
		document.querySelector('#web').style.backgroundColor = 'blue';
		document.querySelector('#blockchain').style.backgroundColor = 'lightgrey';
		document.querySelector('#python').style.backgroundColor = 'lightgrey';
		document.querySelector('#chrome').style.backgroundColor = 'lightgrey';
		document.querySelector('#inproject').innerHTML=`

		

		<br><div class="inpro">
        
		<div class="flex-container">
				<div  style="flex-grow: 1"><h3> HTML | CSS | JS | ReactJs | Django | Chartjs </h4></div>
	  			
		</div> 
		</div>


		<br>
		<div class="inpro">
			<div class="flexcontainer">
				<div  style="flex-grow: 1"><h1  style="letter-spacing:0.2rem;color:blue; text-align:center"> DigiStorage</h1></div>
					<br>
		  			<div  style="flex-grow: 8">
		  			<ol style="color:black;">
		  			<li>
		  			Digistorage is a web application that provide you to save and manage your data such as images ,files , songs.
		  			This application provide feature to create folder like structure to store data.
		  			For storing files,images and music user can create multiple folder so that different data can access effectively .In this website user can also share image so that other user can see the shared image.


		  			User can also create  youtube video's playlist. 

		  		   	</li>
		  		    <li>
		  			  Features:-
                      Complete user authentication through otp on e-mail.
                      Forget password & Reset password feature also available and a unique link is generated to authenticate the legitimate user.


		  		   	</li>
		  		   	<li>
		  			 Sendgrid api is used to sending otp through mail.
		  			 Cloudinary stroage api is used to store data.
		  			 Django web framework is used for developement of this website.  	  		   
		  		   	</li>
		  		   <li><a href="http://digistorage.herokuapp.com/data" target=_blank>&#8688; Link of project</a></li>
		  		    </ol>
  				</div>
			</div> 
		</div>
         <br>
		<div class="inpro">
			<div>
				<div  style="flex-grow: 1"><h1>Google Meet Attendence Collector & Manager </h1></div>
					<br>
		  			<div  style="flex-grow: 8">
		  			<ol style="color:black;">
		  			<li>
		  			 This application help to reduce the teacher's work to maintain the attendence of students.
		  			 In online classes it is difficult task to collect & manage the attendence. So I developed a chrome extension that will generate 
		  			 the pdf that will contain name of students who are present in <b>google meet</b>.
		  			 After generating pdf it is necessary to process the file so that attendence can be easily manage. So for managing
		  			 the attendence this website is used.   	  		   
		  		   	</li>
		  		    <li>
		  			  In this web application there is complete authentication system through otp. So to use this website
		  			  first user have to register on it . After successful registering a user can create multiple classes and can registered student name in class.
		  			  Afte this teacher can upload pdf and it will automatically calculate the total attendence.   
		  		   	</li>
		  		   	
		  		    <li><a href="https://github.com/" target=_blank>&#8688; Link for website</a></li>
		  		     <li><a href="https://github.com/deepanshu-4/Chrome-Extensions/tree/main/popupsgooglemmeet" target=_blank>&#8688; Link for extension</a></li>

		  		    </ol>
  				</div>
			</div> 
		</div>
		<br>
		<div class="inpro">
			<div>
				<div  style="flex-grow: 1"><h1  style="letter-spacing:0.2rem;color:blue; text-align:center">Codechef Profile Comparator </h1></div>
					<br>
		  			<div  style="flex-grow: 8">
		  			<ol style="color:black;">
		  			<li>
                    
		  			 Build a website to that fetch the details of two codechef profile using username and make a comparison report.

		  		   	
		  		   	</li>
		  		    <li>
		  			  A RestFul api is designed using django and webscrapping that extracts the detail of two user and using chart.js graphical comparison report is shown that describe which user is better.
		  			  Frontend is designed using react js.   		   
		  		   	</li>
		  		    
		  		    <li><a href="https://deepanshu-4.github.io/ccpanalyzer/" target=_blank>&#8688; Link of project (Using Api & ReactJs)</a>	
		  		    <li><a href="https://mcodechefp.herokuapp.com/codescrap" target=_blank>&#8688; Link of project</a></li>
		  		      <li><a href="https://codedkapi.herokuapp.com/api/?x=csedk&y=dk20" target=_blank>&#8688; Api </a></li>
		  		   
		  		    </ol>
  				</div>
			</div> 
		</div>

		<br>
		<div class="inpro">
			<div>
				<div  style="flex-grow: 1"><h1>Covid19Tracker (India)</h1></div>
					<br>
		  			<div  style="flex-grow: 8">
		  			<ol style="color:black;">
		  			<li>
		  			This application uses govt api to show real time data of covid cases for different states.

		  		   	</li>
		  		   	<li>React Js (Functional component) is used for developement of this website. </li>
		  		   
		  		    <li><a href="https://deepanshu-4.github.io/Covidupdate/" target=_blank>&#8688; Website Link</a></li>
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
		  		   	
		  		    <li><a href="http://codsaver.herokuapp.com/" target=_blank>&#8688;Link of project</a></li>
		  		    </ol>
  				</div>
			</div> 
		</div>
        
		<br>
		<div class="inpro">
			<div>
				<div  style="flex-grow: 1"><h1>Twitter clone</h1></div>
					<br>
		  			<div  style="flex-grow: 8">
		  			<ol style="color:black;">
		  			<li>
		  			 This application is twitter clone and have functioniality such as 
		  			 share tweet , like & dislike etc.   	  		   
		  		   	</li>
		  		    <li>Django web framework is used  for backend and HTML ,CSS , Js is used  for frontend</li>
		  		   	
		  		    <li><a href="https://www.youtube.com/watch?v=dGFUsl0j6BY" target=_blank>&#8688;Video Link</a></li>
		  		    </ol>
  				</div>
			</div> 
		</div>

		<br>
		<div class="inpro">
			<div>
				<div  style="flex-grow: 1"><h1>Wikiedia clone</h1></div>
					<br>
		  			<div  style="flex-grow: 8">
		  			<ol style="color:black;">
		  			<li>
		  			 This application is Wikipedia clone and have functioniality such as 
		  			 create new article , search article , get random article.   	  		   
		  		   	</li>
		  		    <li>Django web framework is used  for backend and HTML ,CSS , Js is used  for frontend</li>
		  		   	
		  		    <li><a href="https://www.youtube.com/watch?v=vgWJD41VBtI" target=_blank>&#8688; Video Link</a></li>
		  		    </ol>
  				</div>
			</div> 
		</div>
		<br>
		<div class="inpro">
			<div>
				<div  style="flex-grow: 1"><h1>Gmail clone</h1></div>
					<br>
		  			<div  style="flex-grow: 8">
		  			<ol style="color:black;">
		  			<li>
		  			 This application is gmail clone and have functioniality such as 
		  			 Send Mail , Mail Inbox , View Mail , Archive and Unarchive , Reply.   	  		   
		  		   	</li>
		  		    <li>Using html , css , JavaScript</li>
		  		   	
		  		    <li><a href="https://www.youtube.com/watch?v=uefZym-M8FQ" target=_blank>&#8688; Video Link</a></li>
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
		document.querySelector('#blockchain').style.backgroundColor = 'lightgrey';
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

		document.querySelector('#blockchain').style.backgroundColor = 'lightgrey';
		document.querySelector('#ml').style.backgroundColor = 'lightgrey';
		document.querySelector('#web').style.backgroundColor = 'lightgrey';
		document.querySelector('#chrome').style.backgroundColor = 'blue';
		document.querySelector('#python').style.backgroundColor = 'lightgrey';
		document.querySelector('#inproject').innerHTML=`
		<br><div class="inpro">
        
		<div class="flex-container">
				<div  style="flex-grow: 1"><h3>JavaScript | ChromeAPI </h4></div>
	  			
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