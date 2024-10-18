<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).





# From the below you can find the relevent APIs links ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
---Don't worry about the implementation details of the API in Backend  , Just use this link and 
---If you get any unexpected error or warning you can reach inform it.


# All the Public APIs that are available  for the Hospital administrator to use 😊😊😊
----These web site is not a admin panel view and this is for the use of Hospital administration to work with our application 




# All the Protected API for Mobile Application 😊😊😊

---There is a common view for both user type (DOCTOR  and PARENT) until user landing to the Homer page 
   based on their user type and right credential 

💡💡Intereface -1➡️
No any Implementation in Backend - Navigation  only



💡💡Intereface -2➡️
1.Post Request for login -authenticate user with valid credentials 

👀 localhost:3000/auth/login      (Body of the request is userName and password )

(if the user credentials are valid then generate access token and send it with payload of userName ,nickname and userType)

2.Click on forgot password button- navigate to Ingterface 4
user should enter valid email that already in user document
(once the User click on forgot password button then user should receive OTP code and conformation method)
If the confimation done only user Should be able to navigate to interface 4

👀 localhost:3000/auth/forgot-password       (Post request)

3.Click on Change Password button -Navigate to interface 3

👀 localhost:3000/auth/change-password

💡💡Intereface 3➡️

Once the User click confirm then should able to add new password and confirm password filed and 
should able to update password

👀

(then Just navigate to interface 2 -after click on update button)

 

💡💡Intereface 4➡️
If user needs to change password then the userName ,current password and new password should be in the update request body
(If the user able to get change it successfully should recieve message with new password )

👀

(If the User successfully change the password then   navigate to interface 2 -after clicl on change password button)


(😊😊 That's all for the common protected route for both userType......)

-------------------------------------------------------------------------------------------------------

                                   (😍😍  DOCTOR VIEW 😍😍)

💡💡Intereface 5➡️  (Home page-Doctor view)

1.Display Date 

2.Display doctor name :
(Get route with that return Doctor full name )

👀

3.Get request for getting childProfiles from  full name

👀

(Here I should inform for front end developers , here I hope to help implement config driven UI )

😊😊Here , important to mentioned that after the successful login DOCTOR should Navigate to use the and the same time It should call for the 

Get all childProfiles :
👀


💡💡Intereface 6➡️
(Now this API should Work with relevant child profile)

1.Get request for Alergies of particular child :
👀

2.Get request for Born Dieases of particular child :
👀

3.Get request for vaccination schedule of particular child :
👀

4.Get request for medical record of particular child :
👀

5.Get request BMI chart display of particular child :
👀



💡💡Intereface 7➡️
1.Update request for alergies of particular child :
👀

2.Update request for born dieases of particular child :
👀


💡💡Intereface 8➡️
1.Update request for vaccine given field of particular child:
👀

2.Update request for vaccine to be given of particular child:
👀

💡💡Intereface 9➡️
1.Update route for medical record of particular child:
👀

💡💡Intereface 10➡️

1.Get request for  birth height of particular child:
👀

2.Get request for birth weight of particular child:
👀

(These two APIs actually execute when click on the BMI chart button in interface 6)


                         (😍😍  PARENT  VIEW 😍😍)

💡💡Intereface 11➡️

😊😊these API should called while loading :
After logging parent type of user should navigate to the interface 11 with displaying parent name and also  currnet date below the parent name 

there are four buttons: When these are click it should called following  APIs :

 (There are two buttons only give the result from front end implementation -currently I don't use any details regarding that for this moments it implement in front end  )

  -(  1.Vaccination details  2.BMI calculator  )   - display in interface 18 and 19 itself


-3. vaccination announcement: it outputs should be like interface 17 
get request for  announcement - Here I need to ask this from experts to get clear Idea ⭐⭐⭐👌👌👌👌

-4. Profile onclick:
should navigate the the interface with  calling for the child name get api:
While loading this called for get request for :
 Get child name :
👀


💡💡Intereface 12➡️

there are four get request for the for icon seperately ;
➡️ 1.Get request for relevant child alergies and born diseasess :
    👀
    2.Get request for relevant child medical records:
    👀

    3.Get request for relevant child  vaccination schedule :
    👀

    4.Get request for relevant child BMI charts :
    👀

💡💡Intereface 13➡️

➡️ 1.Update request for alergies of particular child:
    👀
    2.Update request for born diseases of particular child:
    👀

💡💡Intereface 14➡️

➡️ 1.Update request for vaccine given to the particular child:
    👀
    2.Update request for vaccine to be given to the particular child :
    👀


💡💡Intereface 15➡️

➡️ 1.Update request for medical records of particular child :
    👀


💡💡Intereface 16➡️

➡️ these two API should called the API while loading :
1.Get request for birth height of particular child:
👀
2.Get request for birth weight of particular child :
👀

( Here How to update nodes type of chart 😊😊😊😊😊 this shoulld ask from the child for sure .)







































