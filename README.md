After cloning this project, be sure to make a .env file in the root of the project (beside app.js), after creating this file, go into 'environment-template' and copy those values over to the .env file. These values serve as environment variables for the contact part of this site.

EMAIL_USERNAME should have the email of the sender, and this sender needs to have third-party apps security off, so that NodeMailer is able to "login" to this account and send the mail. So please use a test mail for this, not your actual email.

EMAIL_PASSWORD should have the password of said email, which NodeMailer will use to 'login' and send the mail to the receiver.

EMAIL_RECEIVER should have the email of the receiving end, that is to say, the email you want the information to be sent to, the mail itself.