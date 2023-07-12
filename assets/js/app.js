let cl = console.log;

const showModal = document.getElementById('showModal')
const backDrop = document.getElementById('backDrop')
const ourModal = document.getElementById('ourModal')
const modalClose = document.querySelectorAll('.modalClose')
const movieForm = document.getElementById('movieForm')
const titleControl = document.getElementById('title')
const ratingControl = document.getElementById('rating')
const urlControl = document.getElementById('url')
const movieContainer = document.getElementById('movieContainer')


const movieArray = [
    {
        "title": "Avengers : Infinity War",
        "rating": "5",
        "url": "data:image/jpeg;base64,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"
    }
];

const templating = (arr) => {
    let res = ''
    arr.forEach(movieObj => {
        res += `
        <div class="col-md-4 mb-4">
        <div class="card mt-4">
            <div class="card-header">
                <h5>${movieObj.title}</h5>
            </div>
            <div class="card-body">
                <figure class="imgHolder m-0">
                    <img src="${movieObj.url}" alt="">
                        <figcaption>
                            <p class="m-0">Rating ${movieObj.rating} / 5</p>
                        </figcaption>
                </figure>
            </div>
            <div class="card-footer d-flex justify-content-between align-items-center">
                <button class="btn btn-primary">Edit</button>
                <button class="btn btn-danger">Delete</button>
            </div>
        </div>
    </div>
        
               `
    })
    movieContainer.innerHTML = res;
}
templating(movieArray) // we have 1 obj of card above, to show on UI this line is written.


const onModalHandler = () => {
    backDrop.classList.toggle('active')
    ourModal.classList.toggle('active')
}

const onMovieSubmit = (eve) => {
    eve.preventDefault();
    let movieObj = {
        title: titleControl.value,
        rating: ratingControl.value,
        url: urlControl.value
    }
    movieArray.unshift(movieObj)
    templating(movieArray)           // new card will be create or to show new card on UI
    eve.target.reset();
    cl(movieArray)
    onModalHandler()
}


showModal.addEventListener('click', onModalHandler)
// backDrop.addEventListener('click', onModalHandler)
movieForm.addEventListener('submit', onMovieSubmit)

modalClose.forEach(ele => {
    ele.addEventListener('click', () => {
        // alert("Modal Closed")
        onModalHandler()
    })
})
