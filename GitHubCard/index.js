import axios from 'axios'

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios
  .get('https://api.github.com/users/bdiaz12345')
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log('err')
  })

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

followersArray.forEach((person) => {
  axios
    .get(`https://api.github.com/users/${person}`)
    .then(res => {
      const cards = document.querySelector('.cards');
      const image = res.data.avatar_url;
      const name = res.data.name;
      const username = res.data.login;
      const location = res.data.location;
      const profileUrl = res.data.html_url;
      const followers = res.data.followers;
      const following = res.data.following;
      const bio = res.data.bio;
      cards.appendChild(cardMaker({ image, name, username, location, profileUrl, followers, following, bio }));
    })
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

const cardMaker = ({ image, name, username, location, profileUrl, followers, following, bio }) => {
  const card = document.createElement('div');
  const img = document.createElement('img');
  const cardInfo = document.createElement('div');
  const Name = document.createElement('h3');
  const Username = document.createElement('p');
  const Location = document.createElement('p');
  const Profile = document.createElement('p');
  const url = document.createElement('a');
  const Followers = document.createElement('p');
  const Following = document.createElement('p');
  const Bio = document.createElement('p');

  Profile.appendChild(url);
  cardInfo.appendChild(Name);
  cardInfo.appendChild(Username);
  cardInfo.appendChild(Location);
  cardInfo.appendChild(Profile);
  cardInfo.appendChild(Followers);
  cardInfo.appendChild(Following);
  cardInfo.appendChild(Bio);
  card.appendChild(img);
  card.appendChild(cardInfo);

  card.classList.add('card');
  img.src = image;
  cardInfo.classList.add('card-info');
  Name.classList.add('name');
  Name.textContent = name;
  Username.classList.add('username');
  Username.textContent = username;
  Location.textContent = `Location: ${location}`;
  Profile.textContent = 'Profile: ';
  url.href = profileUrl;
  Followers.textContent = `Followers: ${followers}`;
  Following.textContent = `Following: ${following}`;
  Bio.textContent = `Bio: ${bio}`;

  return card;

}

axios
  .get('https://api.github.com/users/bdiaz12345')
  .then(res => {
    const cards = document.querySelector('.cards');
    const image = res.data.avatar_url;
    const name = res.data.name;
    const username = res.data.login;
    const location = res.data.location;
    const profileUrl = res.data.html_url;
    const followers = res.data.followers;
    const following = res.data.following;
    const bio = res.data.bio;
    cards.appendChild(cardMaker({ image, name, username, location, profileUrl, followers, following, bio }));
  })
  .catch(err => {console.log('err')})

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
