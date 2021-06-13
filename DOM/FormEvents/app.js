const tweetForm = document.querySelector('#tweetForm')
// const tweet = document.createElement('li')
// const tweetsSection = document.querySelector('ul')

tweetForm.addEventListener('submit', function (e) {
    // const usernameInput = document.querySelectorAll('input')[0].value
    // const tweetInput = document.querySelectorAll('input')[1].value

    const username = tweetForm.elements.username.value;
    const tweet = tweetForm.elements.tweet.value;

    const newTweet = document.createElement('li')
    const bTag = document.createElement('b');
    const divTag = document.createElement('div')

    bTag.append(username);
    newTweet.append(bTag);

    divTag.append(tweet)
    newTweet.append(divTag)

    document.body.append(newTweet)
    e.preventDefault();

    // const tweet = document.createElement('li')
    // tweet.append(usernameInput)
    // tweet.append(passwordInput)
    // document.body.appendChild(tweet)
    // document.body.append(passwordInput)
})

// tweet.innerText = 'hello'
// tweetsSection.appendChild(tweet)