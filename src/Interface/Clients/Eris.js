const ClientFiller = require('../ClientFiller');

/**
 * Represents the client filler for Eris clients.
 * @private
 * @extends {ClientFiller}
 */
class Eris extends ClientFiller {
  constructor(client) {
    super(client);

    /**
     * This client does not natively support sharding.
     * @type {null}
     * @readonly
     * @private
     */
    this.shard = null;
  }

  get userCount() {
    return this.client.users.size;
  }

  get serverCount() {
    return this.client.guilds.size;
  }

  get voiceConnections() {
    if (this.client.voiceConnections.constructor.name === 'VoiceConnectionManager')
      return this.client.voiceConnections.size;
    else return Object.keys(this.client.voiceConnections.pendingGuilds).size;
  }

  get clientID() {
    return this.client.user ? this.client.user.id : null;
  }
}

module.exports = Eris;
