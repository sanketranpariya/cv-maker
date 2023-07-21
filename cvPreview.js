function bio(req)  {
    return `<!DOCTYPE html>
    <html>
    <head>
    <title>PROFILE PAGE</title>
    </head>
    <hr>
    <body><font size=5>
    <h2>IT's MY PROFILE</h2>
    <h4>Name: ${req.body.name}</h4>
    <h4>Father's name : ${req.body.fatherName}</h4>
    <h4>Mothers's name: ${req.body.motherName}</h4>
    <h4>DOB: ${req.body.birthDate}</h4>
    <h4>Address: ${req.body.address}</h4>
    <h4>Mobile no: ${req.body.mobileNo}</h4>
    <h4>Gender:${req.body.gender}</h4>
    <h2>Qualification: ${req.body.qualification}</h2>
    <h2>Degree-Name: ${req.body.degree}</h2>
    <h2>Course-Name: ${req.body.course}</h2>
    <h2>University/School: ${req.body.uniName}</h2>
  
    <br>
    <h4>THIS IS MY introduction SECTION : </h4>
    <p>${req.body.aboutMe}</p>
    <br>
    <h3>My GitHub Profile</h3>
     <strong><a href="${req.body.github}" target="blank" title="click me">GitHub</a></strong>
    
    <br>
    
    <h3>My LinkedIn Profile</h3>
    <strong><a href="${req.body.linkedin}" target="blank" title="click me">Linkedin</a></strong><br>
     <br>
    <h4>Email: ${req.body.email}</h4><br>
    <h3>Hobbies :</h3>
    <p>${req.body.hobbies}</p>
    
    </body>
    </html>`
}

module.exports = bio;