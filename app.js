//declearing html element

const imgDiv = document.querySelector('.profilePic');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadPic = document.querySelector('#uploadPic');

//if user hover on profile

imgDiv.addEventListener('mouseenter', function(){
    uploadPic.style.display = "block";
});

imgDiv.addEventListener('mouseleave', function(){
    uploadPic.style.display = "none";
});

//when we choose a photo to upload
file.addEventListener('change', function(){
    //this refers to file
    const choosedFile = this.files[0];
    if(choosedFile){
        const reader = new FileReader();
        //FileReader is a predefined function of JS
        reader.addEventListener('load', function(){
            img.setAttribute('src', reader.result);
        });
        reader.readAsDataURL(choosedFile);
    }
});