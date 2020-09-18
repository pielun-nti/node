window.onload = loadedJS()

function loadedJS(){
    console.log("loaded")

}

function showAlert(){
    alert("hi alert!")
    $('.toast').toast('show')
    $('.toast').on('show.bs.toast', function () {
        console.log("show toast!")
      })
}