const path = require('path');
const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')
const server = http.createServer(function(req, res) {
const page = url.parse(req.url).pathname;
const params = querystring.parse(url.parse(req.url).query);

const names = {
  a : {
    first : [
      'Huey',
      'Riley',
      'Robert',
      'Jazmine',
      'Tom'
    ],
    last : [
      'Freeman',
      'Freeman',
      'Freeman',
      'DuBois',
      'DuBois'
    ]
  },
  b : {
    first : [
      'A Pimp',
      'Sarah',
      'Colonel',
      'Barack',
      'Uncle'
    ],
    last : [
      'Named Slickback',
      'DuBois',
      'Stinkmeaner',
      'Obama',
      'Ruckus'
    ]
  },
  c : {
    first : [
      'Huey',
      'Riley',
      'Robert',
      'Jazmine',
      'Tom'
    ],
    last : [
      'Freeman',
      'Freeman',
      'Freeman',
      'DuBois',
      'DuBois'
    ]
  },
  d : {
    first : [
      'A Pimp',
      'Sarah',
      'Colonel',
      'Barack',
      'Uncle'
    ],
    last : [
      'Named Slickback',
      'DuBois',
      'Stinkmeaner',
      'Obama',
      'Ruckus'
    ]
  },
  e : {
    first : [
      'Dewey',
      'Cindy',
      'Ebony',
      'Thug',
      'Dr. Martin Luther'
    ],
    last : [
      'Jenkins',
      'McPhearson',
      'Brown',
      'nificent',
      'King Jr.'
    ]
  }
}
//Create a new list of array
function listRandom(list){
  //randomize a number out of this list
  return list[Math.floor(Math.random() * list.length)] 
}
//count how many times a,b,c show up and return how many times and return the highest count wins
function mostPicked(answered){
  const counts = {
    a:0,
    b:0,
    c:0,
    d:0,
    e:0
  };
  //wait
  answered.forEach(function(answer){
    if(counts[answer] !== undefined){
      //count how many times each a,b,c comes in
      counts[answer] += 1;
    }
  });
  let winner = 'a';
  //refer to the key and know when it counted
  if(counts.b > counts[winner]) winner = 'b';
  if(counts.c > counts[winner]) winner = 'c';
  if(counts.d > counts[winner]) winner = 'd';
  if(counts.e > counts[winner]) winner = 'e';
  return winner;
}

console.log(page);
      if (page == '/') {
        fs.readFile('index.html', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          res.end();
        });
      }else if (page == '/api') {
        const answer = [params.name1,params.name2,params.name3, params.name4, params.name5]
        const letter = mostPicked(answer)
        const group = names[letter]
        const name =listRandom(group.first) + ` ` + listRandom(group.last)
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({name : name}));


      }
       
      else if (page == '/css/normalize.css'){
        fs.readFile('css/normalize.css', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/css'});
          res.write(data);
          res.end();
        });
      }else if (page == '/css/style.css'){
        fs.readFile('css/style.css', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/css'});
          res.write(data);
          res.end();
        });
      }else if (page == '/js/main.js'){
        fs.readFile('js/main.js', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.write(data);
          res.end();
        });
      }else if (page.startsWith('/img') || page.startsWith('/assets')){
        const imagePath = '.' + page;
        const ext = path.extname(imagePath).toLowerCase();
        const mimeTypes = {
          '.gif': 'image/gif',
          '.png': 'image/png',
          '.webp': 'image/webp',
          '.jpg': 'image/jpeg'
        }
        fs.readFile(imagePath, function(err, data) {
          res.writeHead(200, {'Content-Type': mimeTypes[ext] || 'application/octet-stream'});
          res.write(data);
          res.end();
        });
      }else{
        figlet('404!!', function(err, data) {
          if (err) {
              console.log('Something went wrong...');
              console.dir(err);
              return;
          }
          res.write(data);
          res.end();
        });
      }
    });
    
    server.listen(8000);

