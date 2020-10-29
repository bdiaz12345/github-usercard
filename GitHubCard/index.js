/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios';


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
const cards = document.querySelector('.cards');

function cardMaker({avatar_url, name, login, location, html_url, followers, following, bio}){
  const card = document.createElement('div');
  card.classList.add('card');
  const image = document.createElement('img');
  image.src = avatar_url;
  card.appendChild(image);
  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  const personName = document.createElement('h3');
  personName.classList.add('name');
  personName.textContent = name;
  cardInfo.appendChild(personName);
  const userName = document.createElement('p');
  userName.classList.add('username');
  userName.textContent = login;
  cardInfo.appendChild(userName);
  const where = document.createElement('p');
  where.textContent = `Location: ${location}`;
  cardInfo.appendChild(where);
  const profile = document.createElement('p');
  profile.textContent = 'Profile: '
  const profileUrl = document.createElement('a');
  profileUrl.href = html_url;
  profile.appendChild(profileUrl);
  cardInfo.appendChild(profile);
  const myFollowers = document.createElement('p');
  myFollowers.textContent = `Followers: ${followers}`
  cardInfo.appendChild(myFollowers);
  const squad = document.createElement('p');
  squad.textContent = `Following: ${following}`
  cardInfo.appendChild(squad);
  const biography = document.createElement('p');
  biography.textContent = `Bio: ${bio}`
  cardInfo.appendChild(biography);
  card.appendChild(cardInfo);

  return card;
}




followersArray.forEach(person => {
  axios
  .get(`https://api.github.com/users/${person}`)
  .then(res => {
    cards.appendChild(cardMaker(res.data))
  })
  .catch(err => console.log(err))
})



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

// const card = document.createElement('div');
//   card.classList.add('card');
//   avatar_url = document.createElement('img');
//   card.appendChild(avatar_url);
//   const cardInfo = document.createElement('div');
//   cardInfo.classList.add('card-info');
//   card.appendChild(cardInfo);
//   name = document.createElement('h3');
//   name.classList.add('name');
//   cardInfo.appendChild(name);
//   login = document.createElement('p');
//   login.classList.add('username');
//   cardInfo.appendChild(login);
//   location = document.createElement('p');
//   cardInfo.appendChild(location);
//   const profile = document.createElement('p');
//   profile.textContent = 'Profile: ';
//   url = document.createElement('a');
//   url.textContent = 'address to users github page';
//   profile.appendChild(url);
//   cardInfo.appendChild(profile);
//   followers = document.createElement('p');
//   cardInfo.appendChild(followers);
//   following = document.createElement('p');
//   cardInfo.appendChild(following);
//   const bio = document.createElement('p');
//   cardInfo.appendChild(bio);