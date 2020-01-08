const driverWait = async (driver, milliseconds) => {
  await driver.wait(new Promise(resolve => setTimeout(resolve, milliseconds)));
};

module.exports = {
  driverWait
};
