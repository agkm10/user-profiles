var users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];
module.exports = {
    login(req, res) {
      console.log(req.body.name)
      let currentUser = users.filter(user=>user.name === req.body.name && user.password === req.body.password);
      if(currentUser[0]) {
        req.session.currentUser = currentUser[0]
        res.send({ userFound: true });
      } else {
        res.send({ userFound: false });
      }

    }
};
