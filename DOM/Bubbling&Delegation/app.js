const tweetForm = document.querySelector('#tweetForm')
const tweetList = document.querySelector('#tweets')


// for (let li of liss) {
//     li.addEventListener('click', function () {
//         li.remove();
//     })
// }

// tweetList.append(document.createElement('h1').innerText = 'Tweets:');

tweetForm.addEventListener('submit', function (e) {

    e.preventDefault();
    const username = this.elements.username;
    const tweetitem = this.elements.tweet;

    addTweet(username.value, tweetitem.value)

    username.value = ''
    tweetitem.value = ''



})

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li')
    const bTag = document.createElement('b')
    bTag.append(username)

    newTweet.append(bTag)
    newTweet.append(` - ${tweet}`)

    tweetList.append(newTweet)


}

tweetList.addEventListener('click', function (e) {
    // const lis = document.querySelectorAll('li')
    // console.log(e);
    // for (let li of lis) {
    //     li.addEventListener('click', function () {
    //         li.remove();
    //     })
    // }

    e.target.nodeName === 'LI' && e.target.remove();

})
