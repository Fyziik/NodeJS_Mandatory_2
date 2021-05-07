# NodeJs Portfolio
This was a project during 4th semester, NodeJs elective at KEA. We had to make a portfolio site, fulfilling the requirements of

- Create pages with headers and footers. 
- Create the project structure. Backend/Frontend. SSR. 
- An empty frontpage. 
- The projects page.
- The contact page.
- All other pages not listed above but included in the design.
- Fill out the frontpage.
- Style the project.
- Personalize the project to reflect you. It’s a portfolio afterall. 
- Send email using Nodemailer to yourself when a contact message has been sent.

Bonus: Deploy your application. (We will talk about hosting but perhaps not in time before the deadline. You still have access to AWS Educate).

## How To
### Pre-Requisites
After cloning this project, be sure to make a .env file in the root of the project (beside app.js), after creating this file, go into 'environment-template' and copy those values over to the .env file. These values serve as environment variables for the contact part of this site.


### Environment Variables using DotEnv
This project contains the DotEnv library, so that I, and possibly you if you were to both use and publish your own version of this project I suppose, can make important information only available to ourselves, if we remember to add .env in our .gitignore file. Handy indeed!

Other than that, do as I said before, and get to copy-pasting values, and then inserting your very own data!

**EMAIL_USERNAME** should have the email of the sender, and this sender needs to have third-party apps security off, so that NodeMailer is able to "login" to this account and send the mail. So please use a test mail for this, not your actual email.

**EMAIL_PASSWORD** should have the password of said email, which NodeMailer will use to 'login' and send the mail to the receiver.

**EMAIL_RECEIVER** should have the email of the receiving end, that is to say, the email you want the information to be sent to, the mail itself.
