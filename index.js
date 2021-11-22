function app(){
    var mscreen = document.getElementById("screen").value
    if(mscreen == ""){
        alert("Please Write Something !")
    }
    else{
        fetch("https://api.github.com/users/" + mscreen)
            .then(function(data){
                return data.json()
    })
        .then(function(fullData){
            var arr = []
                arr.push(fullData)
                    var img = document.getElementById("img")
                    var name = document.getElementById("name")
                    var bio = document.getElementById("bio")
                    var repo = document.getElementById("repo")
                        img.src = arr[0].avatar_url
                        name.innerHTML = arr[0].login
                        bio.innerHTML = arr[0].bio
                        repo.innerHTML = arr[0].public_repos
                        follow.innerHTML = arr[0].followers
                        following.innerHTML = arr[0].following
        })
        document.getElementById("screen").value = ""
    }
}
