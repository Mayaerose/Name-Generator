// alert('works')

document.querySelector('.send').addEventListener('click',wuTang);

function wuTang(){
    const questions = ['name1','name2','name3','name4','name5']
    const answers = questions.map(function (question){
 
        const picked = document.querySelector('input[name = "' + question + '"]:checked') 

        return picked ? picked.value : '';
    })

    if(answers.includes('')){
        document.querySelector('#message').innerText = 'Protect Your Neck';
        return 

    }
    const query = questions 
    .map(function(question,index){
        return question + '=' + answers[index];
    })
    .join('&') 

    fetch('/api?' + query)
    .then(function (response) {
        return response.json()
    })
    .then(function(data){
        document.querySelector('#message').innerText = 'Your Name is ' + data.name;
    })
    .catch(function(err){
        console.log(err)
    })
}
