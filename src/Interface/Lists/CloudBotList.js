const ServiceBase = require('../ServiceBase');
const Util = require('../../Utils/Util');

/**
 * Represents the Cloud Botlist service.
 * @see https://apollos.gitbook.io/cloud-botlist/
 * @extends {ServiceBase}
 *
 * @constructor
 * @param {string} token The token/key for the service
 */
class CloudBotList extends ServiceBase {
  static get aliases() {
    return ['cloudbotList', 'cloud-botlist.xyz', 'cloudbotList.xyz', 'cloudbl', 'cbl'];
  }

  static get logoURL() {
    return 'https://get.snaz.in/7ya5MCW.png';
  }

  static get name() {
    return 'Cloud Botlist';
  }

  static get websiteURL() {
    return 'https://cloud-botlist.xyz';
  }

  static get baseURL() {
    return 'https://cloud-botlist.xyz/api';
  }

  /**
   * Posts statistics to this service.
   * @param {Object} options The options of the request
   * @param {string} options.token The Authorization token for the request
   * @param {IDResolvable} options.clientID The client ID that the request will post for
   * @param {CountResolvable} options.serverCount The amount of servers that the client is in
   * @param {CountResolvable} options.userCount The amount of users that the client cached
   * @returns {Promise<AxiosResponse>}
   */
  static post({ token, clientID, serverCount, userCount }) {
    return super._post({
      method: 'post',
      url: `/bots/${Util.resolveID(clientID)}`,
      headers: { Authorization: token },
      data: { guilds: Util.resolveCount(serverCount),
        users: Util.resolveCount(userCount) }
    });
  }

  /**
   * Gets the bot listed on this service.
   * @param {IDResolvable} id The bot's ID
   * @returns {Promise<AxiosResponse>}
   */
  getBot(id) {
    return this._request({ url: `/bots/${Util.resolveID(id)}` });
  }
}

module.exports = CloudBotList;
