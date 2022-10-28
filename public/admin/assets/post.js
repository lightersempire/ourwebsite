const postForm = document.getElementById('postForm')

postForm.addEventListener('submit', async function(e){
    e.preventDefault();  // prevent the default property of a form to reload after submitting
    const formData = new FormData(this);

    await fetch('/admin/blog',{
    method:'POST',
    body: formData,
})
.then(res=>res.json())
.then(data =>{
    const message = data.value
    if( message == "success"){
        swal({
             icon: "success",
             text: "Blog posted successful",
             button: false,
            })
        setTimeout(() => {location.assign("/admin/postBlog.html") ; }, 1000);
    }else{
        swal({
             icon: "error",
             text: "There was an error while posting, please try again",
             button: false,
            })
    }

    })

})