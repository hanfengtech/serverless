'use strict';

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello Serverless world!!!',
        // input: event,
      },
      null,
      2
    ),
  };
};
