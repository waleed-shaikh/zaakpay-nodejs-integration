
var resCode = [
    { code: 100, message: 'The transaction was completed successfully.' },
    { code: 101, message: 'Merchant not found. Please check your merchantIdentifier field.' },
    { code: 102, message: 'Customer cancelled transaction.' },
    { code: 103, message: 'Fraud Detected.' },
    { code: 104, message: 'Customer Not Found.' },
    { code: 105, message: 'Transaction details not matched.' },
    { code: 106, message: 'IpAddress BlackListed.' },
    { code: 107, message: 'Transaction Amount not in specified amount range.' },
    { code: 108, message: 'Validation Successful.' },
    { code: 109, message: 'Validation Failed.' },
    { code: 110, message: 'MerchantIdentifier field missing or blank.' },
    { code: 111, message: 'MerchantIdentifier Not Valid.' },
    { code: 126, message: 'Date received with request was not valid.' },
    { code: 127, message: 'ReturnUrl does not match the registered domain.' },
    { code: 128, message: 'Order Id Already Processed with this Merchant.' },
    { code: 129, message: 'OrderId field missing or blank.' },
    { code: 130, message: 'OrderId received with request was not Valid.' },
    { code: 131, message: 'ReturnUrl field missing or blank.' },
    { code: 132, message: 'ReturnUrl received with request was not Valid.' },
    { code: 133, message: 'BuyerEmail field missing or blank.' },
    { code: 134, message: 'BuyerEmail received with request was not Valid.' },
    { code: 135, message: 'BuyerFirstName field missing or blank.' },
    { code: 136, message: 'BuyerFirstName received with request was not Valid.' },
    { code: 137, message: 'BuyerLastName field missing or blank.' },
    { code: 138, message: 'BuyerLastName received with request was not Valid.' },
    { code: 139, message: 'BuyerAddress field missing or blank.' },
    { code: 140, message: 'BuyerAddress received with request was not Valid.' },
    { code: 141, message: 'BuyerCity field missing or blank.' },
    { code: 142, message: 'BuyerCity received with request was not Valid.' },
    { code: 143, message: 'BuyerState field missing or blank.' },
    { code: 144, message: 'BuyerState received with request was not Valid.' },
    { code: 145, message: 'BuyerCountry field missing or blank.' },
    { code: 146, message: 'BuyerCountry received with request was not Valid.' },
    { code: 147, message: 'BuyerPincode field missing or blank.' },
    { code: 148, message: 'BuyerPinCode received with request was not Valid.' },
    { code: 149, message: 'BuyerPhoneNumber field missing or blank.' },
    { code: 150, message: 'BuyerPhoneNumber received with request was not Valid.' },
    { code: 151, message: 'TxnType field missing or blank.' },
    { code: 152, message: 'TxnType received with request was not Valid.' },
    { code: 153, message: 'ZpPayOption field missing or blank.' },
    { code: 154, message: 'ZpPayOption received with request was not Valid.' },
    { code: 155, message: 'Mode field missing or blank.' },
    { code: 156, message: 'Mode received with request was not Valid.' },
    { code: 157, message: 'Currency field missing or blank.' },
    { code: 158, message: 'Currency received with request was not Valid.' },
    { code: 159, message: 'Amout field missing or blank.' },
    { code: 160, message: 'Amount received with request was not Valid.' },
    { code: 161, message: 'BuyerIpAddress field missing or blank.' },
    { code: 162, message: 'BuyerIpAddress received with request was not Valid.' },
    { code: 163, message: 'Purpose field missing or blank.' },
    { code: 164, message: 'Purpose received with request was not Valid.' },
    { code: 165, message: 'ProductDescription field missing or blank.' },
    { code: 166, message: 'ProductDescription received with request was not Valid.' },
    { code: 167, message: 'Product1Description received with request was not Valid.' },
    { code: 168, message: 'Product2Description received with request was not Valid.' },
    { code: 169, message: 'Product3Description received with request was not Valid.' },
    { code: 170, message: 'Product4Description received with request was not Valid.' },
    { code: 171, message: 'ShipToAddress received with request was not Valid.' },
    { code: 172, message: 'ShipToCity received with request was not Valid.' },
    { code: 173, message: 'ShipToState received with request was not Valid.' },
    { code: 174, message: 'ShipToCountry received with request was not Valid.' },
    { code: 175, message: 'ShipToPincode received with request was not Valid.' },
    { code: 176, message: 'ShipToPhoneNumber received with request was not Valid.' },
    { code: 177, message: 'ShipToFirstname received with request was not Valid.' },
    { code: 178, message: 'ShipToLastname received with request was not Valid.' },
    { code: 179, message: 'Date is blank.' },
    { code: 179, message: 'Date received with request was not valid.' },
    { code: 180, message: 'Checksum received with request is not equal to what we calculated.' },
    { code: 181, message: 'Merchant Data Complete.' },
    { code: 182, message: 'Merchant data not completed in our database.' },
    { code: 183, message: 'Unfortunately, the transaction has failed.' },
    { code: 400, message: 'The transaction was declined by the issuing bank.' },
    { code: 401, message: 'The transaction was rejected by the acquiring bank.' },
    { code: 402, message: 'This test transaction has been successfully completed.' },
    { code: 403, message: 'Transaction failed because this card has been blocked by Zaakpay Payment Gateway.' },
    { code: 404, message: 'Transaction failed due to security checks.' },
    { code: 501, message: 'Debitorcredit is blank.' },
    { code: 502, message: 'Bankid is blank.' },
    { code: 503, message: 'Encrypted pan is blank.' },
    { code: 504, message: 'Card is blank.' },
    { code: 505, message: 'Nameoncard is blank.' },
    { code: 506, message: 'Encrypted cvv is blank.' },
    { code: 507, message: 'Encrypted expiry month is blank.' },
  ];
  
  exports.getResponseCodes = function(elm) {
    const errorObject = resCode.find(error => error.code == elm);
    return errorObject ? errorObject.message : 'Unknown error';
  };