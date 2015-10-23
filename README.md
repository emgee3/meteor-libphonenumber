meteor-libphonenumber
=====================

Meteor wrapper of [google-libphonenuber](https://www.npmjs.org/package/google-libphonenumber), itself a wrapper of [libphonenumber](https://code.google.com/p/libphonenumber/).

Javascript library for parsing, formatting, storing and validating international phone numbers

Exports `LibPhoneNumber` on server only.


####Example usage:

    if (Meteor.isServer()) {
      var util = LibPhoneNumber.PhoneNumberUtil.getInstance();
      var format = LibPhoneNumber.PhoneNumberFormat;
      var types = LibPhoneNumber.PhoneNumberType;

      function getKey (obj, val) {
        for (var prop in obj) {
          if (obj.hasOwnProperty(prop))
            if (obj[prop] === val)
              return prop;
        }
      };

      function parsePhone (opts) {
        var parsedNumber = util.parse(opts.phone, opts.country || "US");
        var type = getKey(types, util.getNumberType(parsedNumber));
    
       return {
          phone   : util.format(parsedNumber, format.E164),
          isValid : util.isValidNumber(parsedNumber),
          type    : type
        };
      }
    }
