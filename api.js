fetch("https://api.github.com/users/Parvez-31")
  .then((res) => res.json())
  .then((user) => {
    console.log(user.name);
    console.log(user.followers);
    console.log(user.public_repos);
  });
