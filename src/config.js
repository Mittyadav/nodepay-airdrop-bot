class Config {
  constructor() {
    this.baseURL = 'https://nodepay.org';
    this.ipCheckURL = 'https://ipinfo.io/json';
    this.pingURL = 'http://52.77.10.116/api/network/ping',
        'http://13.215.134.222/api/network/ping',
        'http://18.136.143.169/api/network/ping',
        'http://52.74.35.173/api/network/ping',
        'http://18.142.214.13/api/network/ping',
        'http://18.142.29.174/api/network/ping',
        'http://52.74.31.107/api/network/ping';
    this.retryInterval = 30000;
    this.sessionURL = 'http://api.nodepay.ai/api/auth/session';
  }
}

module.exports = Config;
