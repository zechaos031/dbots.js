const ServiceBase = require('../ServiceBase');
const Util = require('../../Utils/Util');

/**
 * Represents the Cloud List service.
 * @see https://www.cloudlist.xyz/apidocs
 * @extends {ServiceBase}
 *
 * @constructor
 * @param {string} token The token/key for the service
 */
class CloudList extends ServiceBase {
  static get aliases() {
    return ['cloudlist', 'cloudlistxyz', 'cloudlist.xyz'];
  }

  static get logoURL() {
    return 'https://i.olsh.me/icon?size=1..100..500&url=www.cloudlist.xyz';
  }

  static get name() {
    return 'Cloud List';
  }

  static get websiteURL() {
    return 'https://www.cloudlist.xyz/';
  }

  static get baseURL() {
    return 'https://www.cloudlist.xyz/api';
  }

  /**
   * Posts statistics to this service.
   * @param {Object} options The options of the request
   * @param {string} options.token The Authorization token for the request
   * @param {IDResolvable} options.clientID The client ID that the request will post for
   * @param {CountResolvable} options.serverCount The amount of servers that the client is in
   * @returns {Promise<AxiosResponse>}
   */
  static post({ token, clientID, serverCount }) {
    return super._post({
      method: 'post',
      url: `/stats/${Util.resolveID(clientID)}`,
      headers: { Authorization: token },
      data: { count: Util.resolveCount(serverCount) }
    });
  }

  /**
   * Gets the bot listed on this service.
   * @param {IDResolvable} id The bot's ID
   * @returns {Promise<AxiosResponse>}
   */
  getBot(id) {
    return this._request({
      url: `/bot/${Util.resolveID(id)}`,
      headers: { Authorization: this.token },
    }, {
      requiresToken: true
    });
  }

  /**
   * Gets the list of people who voted this bot on this service.
   * @param {IDResolvable} id The bot's ID
   * @returns {Promise<AxiosResponse>}
   */
  getBotVotes(id) {
    return this._request({
      url: `/bot/vote/${Util.resolveID(id)}`,
      headers: { Authorization: this.token },
    }, {
      requiresToken: true
    });
  }
}

module.exports = CloudList;
