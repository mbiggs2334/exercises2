/** User class for message.ly */
const db = require("../db");
const ExpressError = require("../expressError");
const bcrypt = require('bcrypt');
const res = require("express/lib/response");

/** User of the site. */

class User {

  /** register new user -- returns
   *    {username, password, first_name, last_name, phone}
   */

  static async register({username, password, first_name, last_name, phone}) { 
      const date = new Date();
      const today = (date.getDay() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
      const hashed_pw = await bcrypt.hash(password, 12);
      const results = await db.query(`INSERT INTO users (username, password, first_name, last_name, phone, join_at, last_login_at)
                              VALUES ($1, $2, $3, $4, $5, $6, $7)
                              RETURNING username, password, first_name, last_name, phone, join_at`, [username, hashed_pw, first_name, last_name, phone, today, today]);
      
      return results.rows[0];
  }

  /** Authenticate: is this username/password valid? Returns boolean. */

  static async authenticate(username, password) { 
      const hashed_pw = await db.query(`SELECT password FROM users WHERE username = $1`, [username]);
      if(hashed_pw.rows.length === 0){
        throw new ExpressError('Username not found', 404);
      };
      if(await bcrypt.compare(password, hashed_pw.rows[0].password)){
        return true;
      }
      return false;
  }

  /** Update last_login_at for user */

  static async updateLoginTimestamp(username) {
      const date = new Date();
      const today = (date.getDay() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
      const results = await db.query(`UPDATE users SET last_login_at = $1 
                                      WHERE username = $2 
                                      RETURNING username, last_login_at`, [today,username]);
      if(results.rows.length === 0){
        throw new ExpressError('Username not found', 404);
      };
      return results.rows[0];
   }

  /** All: basic info on all users:
   * [{username, first_name, last_name, phone}, ...] */

  static async all() { 
      const results = await db.query(`SELECT username, first_name, last_name, phone FROM users`);
      if(results.rows.length === 0){
        throw new ExpressError('There are no users', 404);
      };
      return results.rows;
  }

  /** Get: get user by username
   *
   * returns {username,
   *          first_name,
   *          last_name,
   *          phone,
   *          join_at,
   *          last_login_at } */

  static async get(username) { 
      const results = await db.query(`SELECT username, first_name, last_name, phone, join_at, last_login_at
                                      FROM users
                                      WHERE username = $1`, [username]);
      if(results.rows.length === 0){
        throw new ExpressError('Username not found', 404);
      };
      return results.rows[0];
  }

  /** Return messages from this user.
   *
   * [{id, to_user, body, sent_at, read_at}]
   *
   * where to_user is
   *   {username, first_name, last_name, phone}
   */

  static async messagesFrom(username) { 
    const result = await db.query(
      `SELECT m.id, m.to_username, u.first_name, u.last_name, u.phone, m.body, m.sent_at, m.read_at
        FROM messages AS m
        JOIN users AS u
        ON m.to_username = u.username
        WHERE from_username = $1`,[username]);

    if(result.rows.length === 0){
      throw new ExpressError('No messages found', 404);
    };

    return result.rows.map(m => ({
      id: m.id,
      to_user: {
        username: m.to_username,
        first_name: m.first_name,
        last_name: m.last_name,
        phone: m.phone
      },
      body: m.body,
      sent_at: m.sent_at,
      read_at: m.read_at
    }));
  }

  /** Return messages to this user.
   *
   * [{id, from_user, body, sent_at, read_at}]
   *
   * where from_user is
   *   {username, first_name, last_name, phone}
   */

  static async messagesTo(username) {
    const result = await db.query(
      `SELECT m.id, m.from_username, u.first_name, u.last_name, u.phone, m.body, m.sent_at, m.read_at
        FROM messages AS m
        JOIN users AS u
        ON m.from_username = u.username
        WHERE to_username = $1`, [username]);
    
    if(result.rows.length === 0){
      throw new ExpressError('No messages found', 404);
    };

    return result.rows.map(m => ({
      id: m.id,
      from_user: {
        username: m.from_username,
        first_name: m.first_name,
        last_name: m.last_name,
        phone: m.phone,
      },
      body: m.body,
      sent_at: m.sent_at,
      read_at: m.read_at
    }));
  }


}


module.exports = User;