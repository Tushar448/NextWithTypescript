/* eslint-disable import/no-extraneous-dependencies */

const express = require("express");
const cors = require("cors");
const apiMock = require("@ng-apimock/core");
const apiMockUI = require("@ng-apimock/dev-interface");

const app = express();

apiMock.processor.process({
  src: "mocks/",
  patterns: {
    mocks: "**/*mock.json",
    presets: "**/*preset.json",
  },
  watch: true,
});

app.use(cors());
app.use("/mock/blob.ico", express.static("mocks/favicon/blob.ico"));
app.use("/mock/favicon.ico", (req, res) => {
  // Literally a random blob: https://www.blobmaker.app/
  res.redirect("/mock/blob.ico");
});
app.use(apiMock.middleware);

app.use("/mock", express.static(apiMockUI));

// eslint-disable-next-line no-console
app.listen(9500, () => console.log("Mock API listening on port 9500"));
