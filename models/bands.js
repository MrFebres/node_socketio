const Band = require("./band");

class Bands {
  constructor() {
    this.bands = [];
  }

  addBand(band = new Band()) {
    this.bands.push(band);
  }

  deleteBand(id = '') {
    return this.bands.filter(band => id !== band.id);
  }

  getBands() {
    return this.bands;
  }

  voteBand(id = '') {
    this.bands = this.bands.map(band => {
      if (band.id === id) {
        band.votes++
        return band
      }

      return band
    });
  }
}

module.exports = Bands