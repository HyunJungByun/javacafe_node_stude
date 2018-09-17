
async function findAndSaveUser(Users) {
  try {
  let user = await Users.findOne({});
  user.name = 'zero';
  user = await user.save();
  user = await Users.findOne({ gender: 'm' });
  
  }catch (error) {
    console.error(error);
  }
}

// 아래와 같이 변경 할 수 있다.

const findAndSaveUser = async (Users) => {
  try {
    let user = await Users.findOne({});
    user.name = 'zero';
    user = await user.save();
    user = await Users.findOne({ gender: 'm' });
    
  } catch (error) {
    console.error(error);
  }
};
