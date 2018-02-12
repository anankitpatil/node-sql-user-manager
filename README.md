# Node api with MySQL DB connection and JWT auth

Built on node-mysql-boilerplate to accomodate a simple user management api with simple jwt authentication.

# PreRequisite

* NodeJS
* Mysql
* Express

# Used Packages

### 1. MYSQL
```
 npm install mysql
```
* Used to get mysql function and modules to perform DB operation  [know more about package](https://www.npmjs.com/package/mysql)
* To Know more about MySQL built in functions [check here](https://www.github.com/mysqljs/mysql)

---

### 2. Express
```
npm install express
```
* Platform it built over it [know more about express](https://www.npmjs.com/package/express)
* To Know more about Express built in functions [check here](http://expressjs.com/en/starter/installing.html)

---

### 4. JWT
```
npm install jsonwebtoken
```
* jsonwebtoken is used for authentication of api through Token [know more about jwt](https://www.npmjs.com/package/jsonwebtoken)
* To Know more about jwt built in functions [check here](https://jwt.io/)

---

### 7. nodemailer
```
npm install nodemailer  
```
* nodemailer will send mail to given mail Id as for now i used for sending if any error comes.[know more about nodemailer](https://www.npmjs.com/package/nodemailer)
* To Know more about nodemailer [check here](https://nodemailer.com/about/)

---

### 9. bcrypt
```
npm install bcrypt  
```
* bcrypt will encrypt your password throughing hashing so your password won't store as plain text .[know more about bcrypt](https://www.npmjs.com/package/bcrypt)
* To Know more about nodemailer [check here](https://www.npmjs.com/package/bcrypt)

---

# Get Started

1. `$ git clone http://github.com/anankitpatil/node-sql-user-manager.git`
2. `$ npm install`
3. Launch Enviornment:
    * `$ npm start`
5. Api url
    * open `http://localhost:9890`


# API Usage

1. login route - `http://localhost:9890/api/login`
     * pass json object contain username and password.
2. other crud route are in secureApi -  `localhost:9890/secureApi/user`.
     * In all GET, PUT, DELETE and POST request pass `token` in header which you get in login response.

Example object for login request -

```
{
    "username":"test",
    "password":"testpass"
}
```
For Other Crud request -

```
{
   "name":"username",
   "age:11,
   "state":"statename",
   "country":"countryname"
}

```
Note: You have to pass `token` for each request as header which you will get in login response.

# Features

* To perform basic operation all `Create`, `Fetch`, `Delete` and `Update` functionality.
* Used Express framework to obtain required operations.
* Used Express router to route endpoint path.
* Used JWT Token for security and authentication of API.
* MVC structure in which `Route`, `Service` and `Model` layer.
* Used Connection Pooling which lead to reduce number of conncetion at any point of time and reduce stress in DB which leads to better availability and Performance of DB.
* Used common error structure format for all type of error throwing in Application.
* `nodemailer` is used to send mail over SMTP. as for i now used for sending mail if error comes.
* `bcrypt` is used to encrypt your password through salt and hashing technique and which won't store password as plain text in database.
