function midFilt(data, windowN) {
  const n = data.length;
  const result = [];

  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i - windowN / 2; j <= i + windowN / 2; j++) {
      if (j >= 0 && j < n) {
        sum += data[j];
      }
    }
    result.push(sum);
  }

  return result;
}

class RLSFilter {
    constructor(order, reg_param) {
        this.order = order;
        this.reg_param = reg_param;
        this.w = new Array(order).fill(0);
        this.P = new Array(order).fill(0).map(() => new Array(order).fill(0));
        this.alpha = reg_param;
    }

    update(input, output) {
        let n = this.order;
        let y = output;
        let x = new Array(n).fill(0).map(() => input);
        let z = x.slice(-n).join('');
        let e = y - this.predict(z);
        let Pn_inv = this.P[n - 1][n - 1];
        this.w[n - 1] += this.alpha * e * x[n - 1];
        this.P[n - 1][n - 1] -= this.alpha * e * e * Pn_inv;
        for (let i = n - 2; i >= 0; i--) {
            let P_ii = this.P[i][i];
            let P_in = this.P[i][n - 1];
            this.P[i][n - 1] -= this.alpha * e * P_in;
            this.P[i][i] -= this.alpha * (x[i] * P_in * x[i] * P_ii + x[n - 1] * P_in * x[n - 1] * P_ii);
            this.w[i] += this.alpha * e * x[i] * P_ii;
        }
    }

    predict(input) {
        let n = this.order;
        let z = input;
        let x = new Array(n).fill(0).map(() => input);
        let sum = 0;
        for (let i = 0; i < n; i++) {
            sum += this.w[i] * x[i];
        }
        return sum;
    }
}