
/* Normal errors */
exports.INVALID_CREDENTIALS = 1000;
exports.NO_DEVICES = 1001;
exports.DUPLICATE_DEVICE = 1002;
exports.DEVICE_NOT_FOUND = 1003;
exports.EXPIRED_SESSION = 1004;
exports.UNKNOWN_USER = 1005;
exports.ALREADY_IN_USE = 1006;
exports.ALREADY_SET_UP = 1007;
exports.CONFIRMATION_EXPIRED = 1008;
exports.LINK_EXPIRED = 1009;
exports.MUST_ACTIVATE_FIRST = 1010;
exports.APP_VERSION_EXPIRED = 1011;
exports.INVALID_CREDENTIALS_CHANGE_PASSWORD = 1012;
exports.NOT_AUTHORIZED = 1013;
exports.LINK_IS_INVALID = 1025;


/* Server errors */
exports.UNEXPECTED_ERROR = 2000;
exports.UNSUPPORTED_DEVICE = 2001;
exports.DOWN_FOR_MAINTENANCE = 2002;
exports.CONTENT_NOT_FOUND = 2003;


/* Programmer errors */
exports.MISSING_INFO_IN_API = 3000;
exports.INVALID_INFO_IN_API = 3001;
exports.MISSING_SESSION = 3002;
exports.INVALID_SETUP_ID = 3003;
exports.INVALID_TIER_LEVEL = 3004;

var unexpectedError = [];
unexpectedError["en-us"] = "An unexpected error has occurred. Please try again later";

exports.unexpectedError = { "errorCode": 2000, "language": "en-us", "userMessage": "An unexpected error has occurred. Please try again later"};

exports.defaultLanguage = "en-us";


exports.sendErrorResponse = function(req, res, error, language) {

	// Make sure we have a language
	if (!language) {
		language = req.get('x-language');
		if (!language && req.sessionInfo)
			language = req.sessionInfo.language;
		if (!language)
			language = "en-us";
	}

	// If an unknown or system error
	if (!error.errNum) {
		SendUnexpectedError(res, error, language);
	}

	// Look up the message for this error
	else {
		res.send(status, error);
	}
}


function SendUnexpectedError(res, err, language) {
  var userMessage;
  if(err){
    userMessage = err;
  }else{
    userMessage = unexpectedError[language];
    if (!userMessage) userMessage = unexpectedError["en-us"];
  }

  res.send (500, { "errorCode":2000, "language":language, "userMessage":userMessage });
}

