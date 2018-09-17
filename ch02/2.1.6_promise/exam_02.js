
function findAndSaveUser(Users) {
  Users.findOne({}, (err, user) => {
    if (err) {
      return console.error(err);
    }
    user.name = 'zero';
    user.save((err) => {
      if (err) {
        return console.error(err);
      }
      Users.findOne({ gender: 'm' }, (err, user) => {
        
      });
    });
  });
}

// 세번 중첩되어 코드의 깊어진 위의 코드를 아래와 같이 변경

function findAndSaveUser(Users) {
  Users.findOne({})
  .then((user) => {
    user.name = 'zero';
    return user.save();
  })
  .then((user) => {
    return Users.findOne({ gender: 'm'});
  })
  .then((user) => {
    
  })
  .catch(err => {
    console.error(err);
  });
}

// findOne, save 메서드가 내부적으로 프로미스 객체를 가지고 있어서 
