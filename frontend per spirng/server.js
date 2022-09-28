import getAuth from "./lib/auth.mjs"
import getData from "./lib/getData.mjs";
import doSingup from "./lib/doSingup.mjs";
import updateUser from "./lib/updateUser.mjs";
import sendMail from "./lib/sendMail.mjs";
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import fs from 'fs';
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/',express.static('static/home'))
app.use('/singup',express.static('static/singup'))
app.use('/image',express.static('static/image'))
app.use('/admin',async function (req, res, next) {
    if(await isAdmin(req.cookies.jwt)){
      next()
    } else {
      res.send("SESSIONE NON VALIDA")
    }
  }, express.static('adminHome'));

app.post('/doLogin', async (req,res) => {
  var response = await getAuth(req.body)
  if(response.data.length == 0){
    res.redirect("/login")  
  } else {
    res.cookie('jwt', response.data.token);
    res.cookie('user', response.data.user );
    
    res.redirect("/")  
  }
})

app.post('/doLoginAdmin', async (req,res) => {
  var response = await getAuth(req.body)
  res.cookie('jwt', response.data.token );
  res.cookie('user', response.data.user );
  
  if(await isAdmin(response.data.token)){
    res.redirect("/admin");
  } else {
    res.redirect("/");
  }

})

app.post('/doSingup', async (req,res) => {
  var stringSingupObj = JSON.stringify(req.body);
  var singupObj = JSON.parse(JSON.parse(stringSingupObj.substring(1,stringSingupObj.length-4)))

  singupObj.ruolo = "user"

  var risultato = false;
  risultato = await doSingup(JSON.stringify(singupObj))
  if(risultato.data) {
    sendMail(singupObj)
    res.send(true);
  };

  
})

app.get('/login', (req,res) => {
  res.send(readTemplate('login'));
})

app.get('/adminLogin', (req,res) => {
  res.send(readTemplate('adminLogin'));
})

app.get('/logout', (req,res) => {
  res.clearCookie('jwt');
  res.clearCookie('user');
  res.redirect("/");
})

app.post('/updateUser', async (req,res) => {
  const response = await updateUser(req.cookies.jwt,JSON.stringify(req.body));
  res.send(response.data)
})

app.listen(PORT, () => {
    console.log(`Server in ascolto alla ${PORT}`)
})

function readTemplate(template) {
  try {
      const data = fs.readFileSync(`./template/${template}.html`, 'utf8');
      return data;
  } catch (err) {
      console.error(err);
  }
}

async function isAdmin(cookie){
  var userData = await getData(cookie)
  if(userData.data.role == 'admin'){
    return true;
  } else {
    return false;
  }
}
