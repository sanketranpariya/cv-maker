function bio(req) {
 
    return `

    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>MY BIO</title>
    
        <style>
    
            .main-body-container{
                display: flex;
                justify-content: center;
                margin: 25px;
    
            }
    
            .main-bio {
                border: 2px solid black;
                display: flex;
                flex-direction: column;
                width: 850px;
                padding: 30px;
            }
    
            .my-profile {
                padding-bottom: 5px;
            }
    
            .my-profile>h1 {
                padding-left: 10px;
            }
    
            .my-profile>div {
                padding: 3px 0 3px 25px;
            }
    
            .my-qualification {
                padding-bottom: 5px;
            }
    
            .my-qualification>h2 {
                padding-left: 10px;
            }
    
            .my-qualification>div,
            h3 {
                padding: 3px 0 3px 25px;
            }
    
            .my-introduction {
                padding-bottom: 5px;
            }
    
            .my-introduction>h2 {
                padding-left: 10px;
            }
    
            .my-introduction>p {
                padding: 3px 0 3px 25px;
            }
    
            .social-media {
                padding-bottom: 10px;
            }
    
            .social-media>div>h3 {
                padding-left: 10px;
            }
    
            .social-media>div>a {
                padding: 3px 0 3px 25px;
                text-decoration: none;
            }
    
            .my-hobbies {
                padding-bottom: 5px;
            }
    
            .my-hobbies>h3 {
                padding-left: 10px;
            }
    
        </style>
    </head>
    
    <body>
    
        <div class="main-body-container">
            <div class="main-bio">
    
                <div class="my-profile">
                    <h1>IT'S MY PROFILE</h1>
    
                    <div>
                        Name: ${req.body.name}
                    </div>
    
                    <div>
                        Father's name: ${req.body.fatherName}
                    </div>
    
                    <div>
                        Mother's name: ${req.body.motherName}
                    </div>
    
                    <div>
                        Date of Birth: ${req.body.birthDate}
                    </div>
    
                    <div>
                        Address: ${req.body.address}
                    </div>
    
                    <div>
                        Mobile no: ${req.body.mobileNo}
                    </div>
    
                    <div>
                        Email: ${req.body.email}
                    </div>
    
                    <div>
                        Gender: ${req.body.gender}
                    </div>
    
                </div>
    
                <div class="my-introduction">
    
                    <h2>ABOUT ME</h2>
                    <p>${req.body.aboutMe}</p>
    
                </div>
    
                <div class="my-qualification">
                    <h2>EDUCATION</h2>
    
                    <div>
                        Qualification: ${req.body.qualification}
                    </div>
                
                    <div>
                        Degree-Name: ${req.body.degree}
                    </div>
    
                    <div>
                        Course-Name: ${req.body.course}
                    </div>
    
                    <div>
                        University/School: ${req.body.uniName}
                    </div>
    
                </div> 
    
                <div class="social-media">
    
                    <div>
                        <h3>MY LINKEDIN PROFILE</h3>
                        <a href="${req.body.linkedin}" target="blank"
                            title="click me">${req.body.linkedin}</a>
                    </div>
    
                    <div>
                        <h3>MY GITHUB PROFILE</h3>
                        <a href="${req.body.github}" target="blank" title="click me">${req.body.github}</a>
                    </div>
    
                </div>
    
                <div class="my-hobbies">
                    <h3>HOBBIES</h3>
                    <p>${req.body.hobbies}</p>
                    
                </div>
    
            </div>
        </div>
    
    </body>
    
    </html>
    
    `
}

module.exports = bio;