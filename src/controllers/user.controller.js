const db = require('../../database');

const register = async (req, res) => {
  try {
    let { username, password, email, phone, address } = req.body;

    if (!username || !password || !email) {
      throw new Error('Something missing');
    }

    /**fix me using regex */

    if (password.length < 8) {
      throw new Error('Password is short');
    }

    const user = await db.model.User.findOne({
      where: {
        email,
      },
    });

    if (!!user) {
      throw new Error('User is valid');
    }

    /**doan salt nay dung de lam j  */
    const saltRounds = 10;
    let salt = await bcrypt.genSalt(saltRounds);
    let new_pass = await bcrypt.hash(password, salt);
    user = await db.model.User.create({
      username: username,
      password: new_pass,
      email,
      phone,
      address,
    });

    await db.model.save(user);

    return res.json();
  } catch (err) {
    return res;
  }
};
