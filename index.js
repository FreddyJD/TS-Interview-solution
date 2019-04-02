class Register {
  constructor() {
      this.maxValue = 0;
      this.minValue = 0;
      this.ringCount = 0;
      this.frequency = 0;
      this.sumAmount = 0;
      this.value = 0;
      this.priceAmount = {};
  }

  ringUp(int) {
    let { priceAmount, sumAmount, value, frequency, ringCount, maxValue, minValue } = this;

    if (int < minValue) {
      minValue = int;
    }
    if (int > maxValue) {
      maxValue = int;
    }

    value = int;

    if (priceAmount[int.toString] === undefined) {
      priceAmount[int.toString] = 1;
    } else {
      priceAmount[int.toString] += 1;

      if (priceAmount[int.toString] > frequency) {
        frequency += 1;
        value = int;
      }
    }
    sumAmount += int;
    ringCount += 1;
  }
  getMax() {
    console.log(this.maxValue);
    return this.maxValue;
  }
  getMin() {
    console.log(this.minValue);
    return this.minValue;
  }
  getMean() {
    console.log(this.sumAmount / this.ringCount);
    return this.sumAmount / this.ringCount;
  }
  getMode() {
    console.log(this.value);
    return this.value;
  }
}

const __test = new Register();

