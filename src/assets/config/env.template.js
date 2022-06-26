(function(window) {
    window.env = window.env || {};
  
    // Environment variables 
    // For API calls
    window["env"]["StoreId"]                            =     "${STORE_ID}";
    window["env"]["BuildConfigurationType"]             =     "${BUILD_CONFIGURATION_TYPE}";
    window["env"]["ApiBaseUrl"]                         =     "${API_BASE_URL}";
    window["env"]["ClientAppVersionName"]               =     "${CLIENT_APP_VERSION_NAME}";
    window["env"]["ClientAppVersionCode"]               =     "${CLIENT_APP_VERSION_CODE}";
    window["env"]["VendorId"]                           =     "${VENDOR_ID}";
    
    window["env"]["GoogleClientId"]                     =     "${GOOGLE_CLIENT_ID}";
    window["env"]["FacebookClientId"]                   =     "${FACEBOOK_CLIENT_ID}";
    window["env"]["GoogleMapsKey"]                      =     "${GOOGLE_MAPS_KEY}";
    

    console.log('Loadded env ', window["env"])

  })(this);
