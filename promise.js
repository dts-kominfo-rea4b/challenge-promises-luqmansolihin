const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  await new Promise((r) => setTimeout(r, 200));

  return new Promise(async (resolve) => {
    const arrTheaterIXX = await promiseTheaterIXX();

    return resolve(arrTheaterIXX);
  })
    .then(async (result) => {
      await new Promise((r) => setTimeout(r, 200));

      return new Promise(async (resolve) => {
        const arrTheaterVGC = result.concat(await promiseTheaterVGC());

        return resolve(arrTheaterVGC);
      });
    })
    .then(async (result) => {
      await new Promise((r) => setTimeout(r, 200));

      return new Promise((resolve) => {
        const count = result.filter((obj) => obj.hasil == emosi).length;

        return resolve(count);
      });
    })
    .catch((error) => {
      return error;
    });

  // try {
  //   const count = (arr) => {
  //     return arr.filter((obj) => obj.hasil == emosi).length;
  //   };
  //   const countTheaterIXX = count(await promiseTheaterIXX());
  //   const countTheaterVGC = count(await promiseTheaterVGC());
  //   return countTheaterIXX + countTheaterVGC;
  // } catch (error) {
  //   return error;
  // }
};

module.exports = {
  promiseOutput,
};
