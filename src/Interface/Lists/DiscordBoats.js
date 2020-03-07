const ServiceBase = require('../ServiceBase');

/**
 * Represents the discord.boats's service
 * @see https://discord.boats/api/docs
 * @extends {ServiceBase}
 *
 * @constructor
 * @param {string} token The token/key for the service
 */
class DiscordBoats extends ServiceBase {
  static get baseURL() {
    return 'https://discord.boats/api/v2';
  }

  static post({ token, clientID, serverCount }) {
    return super._post({
      method: 'post',
      url: `/bot/${clientID}`,
      headers: { Authorization: token },
      data: { server_count: serverCount }
    });
  }

  /**
   * Gets the bot listed for this service
   * @param {string} id The bot's ID.
   */
  getBot(id) {
    return this._request({ url: `/bot/${id}` });
  }

  /**
   * Gets the user listed for this service
   * @param {string} id The user's ID.
   */
  getUser(id) {
    return this._request({ url: `/user/${id}` });
  }

  /**
   * Whether or not a user has voted for a bot
   * @param {string} id The bot's ID.
   * @param {string} userID The user's ID.
   */
  userVoted(id, userID) {
    return this._request({ url: `/bot/${id}/voted?id=${userID}` });
  }
}

module.exports = DiscordBoats;
