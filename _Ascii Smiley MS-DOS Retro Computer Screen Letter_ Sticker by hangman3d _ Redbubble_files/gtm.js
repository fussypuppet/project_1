
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"624",
  
  "macros":[{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"amountUsd",
      "vtp_dataLayerVersion":1
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"amountAud",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product_id"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",5],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","(\\d+)-([A-Z]{2})-(.+)","value","$1-US-$3"]]
    },{
      "function":"__v",
      "vtp_name":"orderId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"couponCode",
      "vtp_dataLayerVersion":1
    },{
      "function":"__c",
      "vtp_value":"AW"
    },{
      "function":"__v",
      "vtp_name":"revenueUsd",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return[47778,45327,49694,47774,47775,47776,47777]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\"})();"]
    },{
      "function":"__c",
      "vtp_value":"1"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nb"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",14],
      "vtp_map":["list",["map","key","1","value","Infected - Blocking"],["map","key","0","value","Infected - Monitoring"]]
    },{
      "function":"__v",
      "convert_null_to":"",
      "convert_undefined_to":"",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"enrolments"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",16],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"Unknown",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*namogoo-1=variant.*","value","B"],["map","key",".*namogoo-1=control.*","value","A"]]
    },{
      "function":"__c",
      "vtp_value":"UA-322978-1"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var e=\"namogoo\",a=\"\",b=document.cookie.split(\";\"),d=0;d\u003Cb.length;d++){for(var c=b[d];\" \"==c.charAt(0);)c=c.substring(1);0==c.indexOf(e+\"\\x3d\")\u0026\u0026(a=c.substring(e.length,c.length),a=a.split(\"\\x3d\")[1])}if(\"\"==a||void 0==a||\"Unknown\"==a||\"NA\"==a||\"none\"==a)a=",["escape",["macro",17],8,16],"||\"NA\";b=new Date;b.setTime(b.getTime()+31536E6);b=\"; expires\\x3d\"+b.toGMTString();d=\"; path\\x3d\/\";document.cookie=e+\"\\x3d\"+a+b+d;return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var e=\"qt_split\",b=10,a=\"\",d=document.cookie.split(\";\"),f=0;f\u003Cd.length;f++){for(var c=d[f];\" \"==c.charAt(0);)c=c.substring(1);0==c.indexOf(e+\"\\x3d\")\u0026\u0026(a=c.substring(e.length,c.length),a=a.split(\"\\x3d\")[1])}if(\"\"==a||void 0==a)a=(100*Math.random()|0)+1\u003C=b?\"1\":\"0\";b=new Date;b.setTime(b.getTime()+31536E6);b=\"; expires\\x3d\"+b.toGMTString();d=\"; path\\x3d\/\";document.cookie=e+\"\\x3d\"+a+b+d;return a})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"ref",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__k",
      "convert_undefined_to":"\"\"",
      "vtp_decodeCookie":false,
      "vtp_name":"brandbassador_ref"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"criteoBasketItems"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"criteoTrackTransaction"
    },{
      "function":"__r"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"licensed-property"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"isNewCustomer"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"product_ids"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"quantityList"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"discountedPrices"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"currency"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"shareASaleCouponCode"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"shareasaleSSCID"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"product_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"language"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"sha256OrderEmail"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"country"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"orderEmail"
    },{
      "function":"__c",
      "vtp_value":"1a3fab544c3935964878a3bcc8ce1ffa"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"splitVar"
    },{
      "function":"__r"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"visitorType",
      "vtp_dataLayerVersion":1
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"fb_ranking_referrer",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"btc"
    },{
      "function":"__c",
      "vtp_value":"nv5z0"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__hid"
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.visibleTime",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "priority":1000,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Namogoo Malware",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"User Enrolled",
      "vtp_eventLabel":["macro",17],
      "vtp_dimension":["list",["map","index","22","dimension",["macro",17]],["map","index","5","dimension",["macro",19]]],
      "vtp_trackingId":["macro",18],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":155
    },{
      "function":"__awct",
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",2],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1001847797",
      "vtp_conversionLabel":"YhI0COOTnwQQ9ffb3QM",
      "vtp_url":["macro",3],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":8
    },{
      "function":"__awct",
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",4],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1067467798",
      "vtp_conversionLabel":"6I-pCIzySBCWiIH9Aw",
      "vtp_url":["macro",3],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":9
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"1067467798",
      "vtp_customParamsFormat":"NONE",
      "vtp_conversionLabel":"3g2fCLKSjQMQloiB_QM",
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":false,
      "vtp_url":["macro",3],
      "vtp_enableRdpCheckbox":true,
      "tag_id":15
    },{
      "function":"__awct",
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1001847797",
      "vtp_conversionLabel":"QwzkCKjFrlgQ9ffb3QM",
      "vtp_url":["macro",3],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":40
    },{
      "function":"__awct",
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1067467798",
      "vtp_conversionLabel":"wxA_COG3vVgQloiB_QM",
      "vtp_url":["macro",3],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":42
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_customParams":["list",["map","key","ecomm_prodid","value",["macro",6]],["map","key","ecomm_pagetype","value","works"]],
      "vtp_conversionId":"1067467798",
      "vtp_customParamsFormat":"USER_SPECIFIED",
      "vtp_conversionLabel":"3g2fCLKSjQMQloiB_QM",
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":false,
      "vtp_url":["macro",3],
      "vtp_enableRdpCheckbox":true,
      "tag_id":62
    },{
      "function":"__awj",
      "once_per_event":true,
      "vtp_merchantId":"7554",
      "tag_id":73
    },{
      "function":"__awc",
      "once_per_event":true,
      "vtp_orderRef":["macro",7],
      "vtp_discountCode":["macro",8],
      "vtp_merchantId":"7554",
      "vtp_testMode":false,
      "vtp_channel":["macro",9],
      "vtp_currency":"USD",
      "vtp_orderValue":["macro",10],
      "vtp_group":"default",
      "tag_id":74
    },{
      "function":"__crto",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_accountId":["macro",11],
      "vtp_productID":["macro",6],
      "vtp_tagType":"PRODUCT_TAG",
      "vtp_siteType":["macro",12],
      "tag_id":113
    },{
      "function":"__crto",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_accountId":["macro",11],
      "vtp_tagType":"LISTING_TAG",
      "vtp_listingID":["macro",13],
      "vtp_siteType":["macro",12],
      "tag_id":114
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":121
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_eventCategory":"Namogoo Malware",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Infected",
      "vtp_eventLabel":["macro",15],
      "vtp_dimension":["list",["map","index","18","dimension",["macro",15]],["map","index","22","dimension",["macro",17]]],
      "vtp_trackingId":["macro",18],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":122
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/www.redbubble.com\/email_subscription\/check",
      "tag_id":157
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":159
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":226
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":227
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Brandbassador",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"brandbassador-visit",
      "vtp_eventLabel":["macro",23],
      "vtp_trackingId":["macro",18],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":234
    },{
      "function":"__crto",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_accountId":["macro",11],
      "vtp_tagType":"BASKET_TAG",
      "vtp_siteType":["macro",12],
      "vtp_basketArray":["macro",24],
      "tag_id":239
    },{
      "function":"__crto",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_accountId":["macro",11],
      "vtp_tagType":"TRANSACTION_TAG",
      "vtp_siteType":["macro",12],
      "vtp_TransactionID":["macro",7],
      "vtp_TransactionArray":["macro",25],
      "tag_id":240
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",2],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"752131730",
      "vtp_conversionLabel":"j_94COrGy6wBEJK90uYC",
      "vtp_url":["macro",3],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":241
    },{
      "function":"__gclidw",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "vtp_enableCookieFlagsFeature":false,
      "vtp_enableUrlPassthroughFeature":false,
      "tag_id":242
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"addto0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"rbcom0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9681786",
      "vtp_ordinalStandard":["macro",26],
      "vtp_url":["macro",3],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":262
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"fanar0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"fanar000",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9681786",
      "vtp_ordinalStandard":["macro",26],
      "vtp_url":["macro",3],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":265
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_revenue":["macro",10],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",7],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sales0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"sales0",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9681786",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",3],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":267
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"produ00",
      "vtp_useImageTag":true,
      "vtp_activityTag":"produ00",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9681786",
      "vtp_ordinalStandard":["macro",26],
      "vtp_url":["macro",3],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":269
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"searc0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"web-s0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9681786",
      "vtp_ordinalStandard":["macro",26],
      "vtp_url":["macro",3],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":271
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"allco0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"allco000",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9681786",
      "vtp_ordinalStandard":["macro",26],
      "vtp_url":["macro",3],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":272
    },{
      "function":"__twitter_website_tag",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_event_type":"PageView",
      "vtp_twitter_pixel_id":"nv5z0",
      "tag_id":775
    },{
      "function":"__html",
      "vtp_html":["template","\u003Cimg id=\"_SHRSL_img_1\" src=\"https:\/\/shareasale.com\/sale.cfm?amount=",["escape",["macro",10],12],"\u0026amp;tracking=",["escape",["macro",7],12],"\u0026amp;transtype=sale\u0026amp;merchantID=21395\u0026amp;newcustomer=",["escape",["macro",28],12],"\u0026amp;skulist=",["escape",["macro",29],12],"\u0026amp;quantitylist=",["escape",["macro",30],12],"\u0026amp;pricelist=",["escape",["macro",31],12],"\u0026amp;currency=",["escape",["macro",32],12],"\u0026amp;couponcode=",["escape",["macro",33],12],"\u0026amp;sscidmode=6\u0026amp;sscid=",["escape",["macro",34],12],"\" width=\"1\" height=\"1\"\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":5
    },{
      "function":"__html",
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.uetq=window.uetq||[];window.uetq.push({gv:",["escape",["macro",10],8,16],"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":34
    },{
      "function":"__html",
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=window._fbq||(window._fbq=[]);if(!b.loaded){var a=document.createElement(\"script\");a.async=!0;a.src=\"\/\/connect.facebook.net\/en_US\/fbds.js\";var c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(a,c);b.loaded=!0}})();window._fbq=window._fbq||[];window._fbq.push([\"track\",\"6024777979309\",{value:\"0.00\",currency:\"USD\"}]);\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" alt=\"\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?ev=6024777979309\u0026amp;cd[value]=0.00\u0026amp;cd[currency]=USD\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":39
    },{
      "function":"__html",
      "metadata":["map"],
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003E(function(){function c(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=location.protocol+\"\/\/ak.sail-horizon.com\/spm\/spm.v1.min.js\";a.onload=function(){Sailthru.init({customerId:\"37fc5beaf07c7c183e419640e11a0d44\"})};var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)}c()})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":45
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.defer=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"526277364169987\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=526277364169987\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":49
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",33,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"ViewContent\",{content_ids:[\"",["escape",["macro",35],7],"\"],content_type:\"product\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":54
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",33,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"AddToCart\",{content_ids:[\"",["escape",["macro",35],7],"\"],content_type:\"product\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":55
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"526277364169987\");\n\"undefined\"!==typeof ",["escape",["macro",29],8,16],"\u0026\u0026null!=",["escape",["macro",29],8,16],"\u0026\u00260\u003C",["escape",["macro",29],8,16],".length\u0026\u0026fbq(\"track\",\"Purchase\",{content_ids:",["escape",["macro",29],8,16],",content_type:\"product\",value:\"",["escape",["macro",10],7],"\",currency:\"USD\",order_id:\"",["escape",["macro",7],7],"\"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":56
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"4007074\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E\u003Cnoscript\u003E\u003Cimg src=\"\/\/bat.bing.com\/action\/0?ti=4007074\u0026amp;Ver=2\" height=\"0\" width=\"0\" style=\"display:none; visibility: hidden;\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":65
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._fs_debug=!1;window._fs_host=\"www.fullstory.com\";window._fs_org=\"1KQM4\";window._fs_namespace=\"FS\";\n(function(e,f,k,l,g,c,b,h){cog=f.cookie.replace(\/(?:(?:^|.*;\\s*)cognito_id\\s*=\\s*([^;]*).*$)|^.*$\/,\"$1\");sampleNum=parseInt(cog.replace(\/.*-([0-9a-z]*)$\/,\"$1\"),16)%1E3;isNaN(sampleNum)||1\u003C=sampleNum||(k in e\u0026\u0026e.console\u0026\u0026e.console.log?e.console.log('FullStory namespace conflict. Please set window[\"_fs_namespace\"].'):(b=e[k]=function(d,a){b.q?b.q.push([d,a]):b._api(d,a)},b.q=[],c=f.createElement(l),c.async=1,c.src=\"https:\/\/\"+_fs_host+\"\/s\/fs.js\",h=f.getElementsByTagName(l)[0],h.parentNode.insertBefore(c,\nh),b.identify=function(d,a){b(g,{uid:d});a\u0026\u0026b(g,a)},b.setUserVars=function(d){b(g,d)},b.identifyAccount=function(d,a){c=\"account\";a=a||{};a.acctId=d;b(c,a)},b.clearUserCookie=function(b,a,c){if(!b||document.cookie.match(\"fs_uid\\x3d[^;`]*`[^;`]*`[^;`]*`\"))for(a=f.domain;;){f.cookie=\"fs_uid\\x3d;domain\\x3d\"+a+\";path\\x3d\/;expires\\x3d\"+new Date(0);c=a.indexOf(\".\");if(0\u003Ec)break;a=a.slice(c+1)}}))})(window,document,window._fs_namespace,\"script\",\"user\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":72
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",78,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Epintrk(\"track\",\"PageVisit\",{product_id:\"",["escape",["macro",35],7],"\",content_type:\"product\"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":78
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",78,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E\"undefined\"!==typeof ",["escape",["macro",10],8,16],"\u0026\u0026pintrk(\"track\",\"Checkout\",{product_ids:",["escape",["macro",29],8,16],",order_id:\"",["escape",["macro",7],7],"\",value:parseFloat(",["escape",["macro",10],8,16],"),currency:\"USD\"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":83
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",78,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Epintrk(\"track\",\"AddtoCart\",{product_id:\"",["escape",["macro",35],7],"\"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":84
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=\"",["escape",["macro",36],7],"\",b={en:\"278d169f-d232-41cc-9dca-f26962363c7b\",de:\"c6285839-2797-4b31-acb9-832e78563f27\",fr:\"2308507f-b0af-4048-8358-790f0dc2072d\",es:\"da760081-0860-4da9-aedb-8aa7f24661b6\"}[a];a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/storage.googleapis.com\/code.snapengage.com\/js\/\"+b+\".js\";var c=!1;a.onload=a.onreadystatechange=function(){c||this.readyState\u0026\u0026\"loaded\"!==this.readyState\u0026\u0026\"complete\"!==this.readyState||(c=!0)};b=document.getElementsByTagName(\"script\")[0];\nb.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":100
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"    \u003Cstyle type=\"text\/css\" id=\"branch-iframe-css-modal-fix\"\u003E\n     #branch-banner-iframe { z-index: 10002;!important;}\n    \u003C\/style\u003E\n    \u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,c,d,l,g,h,k,e,f){if(!a[d]||!a[d]._q){for(;k\u003Ch.length;)l(g,h[k++]);e=b.createElement(c);e.async=1;e.src=\"https:\/\/cdn.branch.io\/branch-latest.min.js\";f=b.getElementsByTagName(c)[0];f.parentNode.insertBefore(e,f);a[d]=g}})(window,document,\"script\",\"branch\",function(a,b){a[b]=function(){a._q.push([b,arguments])}},{_q:[],_v:1},\"addListener applyCode banner closeBanner creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setBranchViewData setIdentity track validateCode\".split(\" \"),\n0);branch.init(\"key_live_bjrmdx2BAeRahXZjkY8pCcliAtf7dkAS\");(function(){for(var a={},b=document.cookie.split(\";\"),c=0;c\u003Cb.length;c++){var d=b[c].split(\"\\x3d\");a[d[0].trim()]=d[1]}branch.setBranchViewData({data:{_rbpuid:a._rbpuid}})})();\u003C\/script\u003E\n    \u003Cscript type=\"text\/gtmscript\"\u003Evar listener=function(a){branch.track(\"Journey Closed\")},gaListener=function(a){ga(\"send\",\"event\",\"Branch\",a,{nonInteraction:!0})};branch.addListener(\"didShowJourney\",gaListener);branch.addListener(\"didClickJourneyCTA\",gaListener);branch.addListener(\"didClickJourneyClose\",listener);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":111
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/mjca-yijws.global.ssl.fastly.net\/RE6F28S0N.js\" async\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":118
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(d,a,b,f,e){d[e]=d[e]||[];d[e].push({projectId:\"10000\",properties:{pixelId:\"10002664\"}});var c=a.createElement(b);c.src=f;c.async=!0;c.onload=c.onreadystatechange=function(){var a=this.readyState,c=d[e];if(!a||\"complete\"==a||\"loaded\"==a)try{var b=YAHOO.ywa.I13N.fireBeacon;d[e]=[];d[e].push=function(a){b([a])};b(c)}catch(g){}};a=a.getElementsByTagName(b)[0];b=a.parentNode;b.insertBefore(c,a)})(window,document,\"script\",\"https:\/\/s.yimg.com\/wi\/ytc.js\",\"dotq\");\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dotq=window.dotq||[];window.dotq.push({projectId:\"10000\",properties:{pixelId:\"10002664\",qstrings:{et:\"custom\",ea:\"AddToCart\",product_id:\"",["escape",["macro",35],7],"\"}}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":126
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(d,a,b,f,e){d[e]=d[e]||[];d[e].push({projectId:\"10000\",properties:{pixelId:\"10002664\"}});var c=a.createElement(b);c.src=f;c.async=!0;c.onload=c.onreadystatechange=function(){var a=this.readyState,c=d[e];if(!a||\"complete\"==a||\"loaded\"==a)try{var b=YAHOO.ywa.I13N.fireBeacon;d[e]=[];d[e].push=function(a){b([a])};b(c)}catch(g){}};a=a.getElementsByTagName(b)[0];b=a.parentNode;b.insertBefore(c,a)})(window,document,\"script\",\"https:\/\/s.yimg.com\/wi\/ytc.js\",\"dotq\");\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dotq=window.dotq||[];window.dotq.push({projectId:\"10000\",properties:{pixelId:\"10002664\",qstrings:{et:\"custom\",ea:\"ViewProduct\",product_id:\"",["escape",["macro",35],7],"\"}}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":127
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(d,a,b,f,e){d[e]=d[e]||[];d[e].push({projectId:\"10000\",properties:{pixelId:\"10002664\"}});var c=a.createElement(b);c.src=f;c.async=!0;c.onload=c.onreadystatechange=function(){var a=this.readyState,c=d[e];if(!a||\"complete\"==a||\"loaded\"==a)try{var b=YAHOO.ywa.I13N.fireBeacon;d[e]=[];d[e].push=function(a){b([a])};b(c)}catch(g){}};a=a.getElementsByTagName(b)[0];b=a.parentNode;b.insertBefore(c,a)})(window,document,\"script\",\"https:\/\/s.yimg.com\/wi\/ytc.js\",\"dotq\");\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dotq=window.dotq||[];window.dotq.push({projectId:\"10000\",properties:{pixelId:\"10002664\",qstrings:{et:\"custom\",ea:\"Purchase\",gv:\"",["escape",["macro",10],7],"\",product_id:\"",["escape",["macro",7],7],"\"}}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":128
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(d,a,b,f,e){d[e]=d[e]||[];d[e].push({projectId:\"10000\",properties:{pixelId:\"10002664\"}});var c=a.createElement(b);c.src=f;c.async=!0;c.onload=c.onreadystatechange=function(){var a=this.readyState,c=d[e];if(!a||\"complete\"==a||\"loaded\"==a)try{var b=YAHOO.ywa.I13N.fireBeacon;d[e]=[];d[e].push=function(a){b([a])};b(c)}catch(g){}};a=a.getElementsByTagName(b)[0];b=a.parentNode;b.insertBefore(c,a)})(window,document,\"script\",\"https:\/\/s.yimg.com\/wi\/ytc.js\",\"dotq\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":129
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003Evar google_conversion_id=998460700,google_custom_params=window.google_tag_params,google_remarketing_only=!0;\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cdiv style=\"display:inline;\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"\/\/googleads.g.doubleclick.net\/pagead\/viewthroughconversion\/998460700\/?guid=ON\u0026amp;script=0\"\u003E\n\u003C\/div\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":133
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._tfa=window._tfa||[];_tfa.push({notify:\"action\",name:\"Conversion1\"});\u003C\/script\u003E\n\u003Cscript data-gtmsrc=\"\/\/cdn.taboola.com\/libtrc\/redbubbleinc-sc\/tfa.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":134
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,e){if(!a.snaptr){var c=a.snaptr=function(){c.handleRequest?c.handleRequest.apply(c,arguments):c.queue.push(arguments)};c.queue=[];var d=\"script\";a=b.createElement(d);a.async=!0;a.src=e;b=b.getElementsByTagName(d)[0];b.parentNode.insertBefore(a,b)}})(window,document,\"https:\/\/sc-static.net\/scevent.min.js\");snaptr(\"init\",\"926d343c-95cb-4eb5-8bb0-1286b07af1ad\");snaptr(\"track\",\"PAGE_VIEW\",{item_ids:\"",["escape",["macro",29],7],"\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":139
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Esnaptr(\"track\",\"ADD_CART\",{item_ids:\"",["escape",["macro",35],7],"\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":140
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,e){if(!a.snaptr){var c=a.snaptr=function(){c.handleRequest?c.handleRequest.apply(c,arguments):c.queue.push(arguments)};c.queue=[];var d=\"script\";a=b.createElement(d);a.async=!0;a.src=e;b=b.getElementsByTagName(d)[0];b.parentNode.insertBefore(a,b)}})(window,document,\"https:\/\/sc-static.net\/scevent.min.js\");snaptr(\"init\",\"926d343c-95cb-4eb5-8bb0-1286b07af1ad\",{user_hashed_email:\"",["escape",["macro",38],7],"\"});\nsnaptr(\"track\",\"PURCHASE\",{currency:\"USD\",price:\"",["escape",["macro",10],7],"\",transaction_id:\"",["escape",["macro",7],7],"\",item_ids:\"",["escape",["macro",35],7],"\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":141
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,e){if(!a.snaptr){var c=a.snaptr=function(){c.handleRequest?c.handleRequest.apply(c,arguments):c.queue.push(arguments)};c.queue=[];var d=\"script\";a=b.createElement(d);a.async=!0;a.src=e;b=b.getElementsByTagName(d)[0];b.parentNode.insertBefore(a,b)}})(window,document,\"https:\/\/sc-static.net\/scevent.min.js\");snaptr(\"init\",\"926d343c-95cb-4eb5-8bb0-1286b07af1ad\");snaptr(\"track\",\"VIEW_CONTENT\",{item_ids:\"",["escape",["macro",35],7],"\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":142
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._talkableq=window._talkableq||[];var siteID=\"redbubble\";if(\"",["escape",["macro",39],7],"\"===\"AU\")siteID=\"redbubble-au\";if(\"",["escape",["macro",39],7],"\"===\"CA\")siteID=\"redbubble-ca\";_talkableq.push([\"init\",{site_id:siteID}]);window._talkableq.push([\"authenticate_customer\",{email:\"\",first_name:\"\",last_name:\"\"}]);window._talkableq.push([\"register_affiliate\",{}]);var talkableScript=document.createElement(\"script\");talkableScript.setAttribute(\"async\",\"async\");\ntalkableScript.setAttribute(\"src\",\"\/\/d2jjzw81hqbuqv.cloudfront.net\/integration\/clients\/\"+siteID+\".min.js\");document.body.appendChild(talkableScript);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":153
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._talkableq=window._talkableq||[];var siteID=\"redbubble\";if(\"",["escape",["macro",39],7],"\"===\"AU\")siteID=\"redbubble-au\";if(\"",["escape",["macro",39],7],"\"===\"CA\")siteID=\"redbubble-ca\";_talkableq.push([\"init\",{siteID:siteID}]);window._talkableq.push([\"authenticate_customer\",{email:\"",["escape",["macro",40],7],"\",first_name:\"\",last_name:\"\"}]);window._talkableq.push([\"register_affiliate\",{}]);var talkableScript=document.createElement(\"script\");talkableScript.setAttribute(\"async\",\"async\");\ntalkableScript.setAttribute(\"src\",\"\/\/d2jjzw81hqbuqv.cloudfront.net\/integration\/clients\/\"+siteID+\".min.js\");document.body.appendChild(talkableScript);\u003C\/script\u003E\n \u003Cscript type=\"text\/gtmscript\"\u003Evar _talkable_data={purchase:{order_number:\"",["escape",["macro",7],7],"\",subtotal:\"",["escape",["macro",10],7],"\",coupon_code:\"",["escape",["macro",8],7],"\"}};window._talkableq.push([\"register_purchase\",_talkable_data]);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":154
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,e){if(!a.snaptr){var c=a.snaptr=function(){c.handleRequest?c.handleRequest.apply(c,arguments):c.queue.push(arguments)};c.queue=[];var d=\"script\";a=b.createElement(d);a.async=!0;a.src=e;b=b.getElementsByTagName(d)[0];b.parentNode.insertBefore(a,b)}})(window,document,\"https:\/\/sc-static.net\/scevent.min.js\");snaptr(\"init\",\"926d343c-95cb-4eb5-8bb0-1286b07af1ad\");snaptr(\"track\",\"START_CHECKOUT\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":156
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar shareasaleSSCID=shareasaleGetParameterByName(\"sscid\");function shareasaleSetCookie(a,b,c,d,e){if(a\u0026\u0026b){var f;d=d?\"; path\\x3d\"+d:\"\";e=e?\"; domain\\x3d\"+e:\"\";var g=\"\";c\u0026\u0026((f=new Date).setTime(f.getTime()+c),g=\"; expires\\x3d\"+f.toUTCString());document.cookie=a+\"\\x3d\"+b+g+d+e}}\nfunction shareasaleGetParameterByName(a,b){b||(b=window.location.href);a=a.replace(\/[\\[\\]]\/g,\"\\\\$\\x26\");var c=(new RegExp(\"[?\\x26]\"+a+\"(\\x3d([^\\x26#]*)|\\x26|#|$)\")).exec(b);return c?c[2]?decodeURIComponent(c[2].replace(\/\\+\/g,\" \")):\"\":null}shareasaleSSCID\u0026\u0026shareasaleSetCookie(\"shareasaleSSCID\",shareasaleSSCID,94670778E4,\"\/\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":158
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","  \u003Cscript language=\"javascript\" type=\"text\/gtmscript\"\u003Evar mid=\"313603\",cust_type=\"1\",order_value=\"",["escape",["macro",10],7],"\",order_id=\"",["escape",["macro",7],7],"\",units_ordered=\"1\";\u003C\/script\u003E\n\n   \u003Cscript language=\"javascript\" data-gtmsrc=\"https:\/\/s1.cnnx.io\/api\/roi_tracker.min.js?v=1\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":161
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","  \u003Cscript language=\"javascript\" type=\"text\/gtmscript\"\u003Evar mid=\"313602\",cust_type=\"1\",order_value=\"",["escape",["macro",10],7],"\",order_id=\"",["escape",["macro",7],7],"\",units_ordered=\"1\";\u003C\/script\u003E\n\n   \u003Cscript language=\"javascript\" data-gtmsrc=\"https:\/\/s1.cnnx.io\/api\/roi_tracker.min.js?v=1\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":162
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","  \u003Cscript language=\"javascript\" type=\"text\/gtmscript\"\u003Evar mid=\"313604\",cust_type=\"1\",order_value=\"",["escape",["macro",10],7],"\",order_id=\"",["escape",["macro",7],7],"\",units_ordered=\"1\";\u003C\/script\u003E\n\n   \u003Cscript language=\"javascript\" data-gtmsrc=\"https:\/\/s1.cnnx.io\/api\/roi_tracker.min.js?v=1\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":163
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var c=(Math.random()+\"\").substr(2),b=\"https:\/\/api.brandbassador.com\/tracking\/pixel.gif?key\\x3d",["escape",["macro",41],7],"\\x26order_id\\x3d",["escape",["macro",7],7],"\\x26total\\x3d",["escape",["macro",2],7],"\\x26currency\\x3dUSD\",a=b;\"",["escape",["macro",8],7],"\".startsWith(\"RBC-B\")?a+=\"\\x26code\\x3d",["escape",["macro",8],7],"\":\"",["escape",["macro",23],7],"\".startsWith(\"bb-\")\u0026\u0026(a+=\"\\x26ref\\x3d",["escape",["macro",23],7],"\\x26tracking_link\\x3dtrue\");b!=a\u0026\u0026(a=a+\"\\x26cachebust\\x3d\"+c,(new Image).src=a)})();\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":222
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\n\n\n\n\n\n\n\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var c=\"4.0.0\",h=\"30789\",k=\"term\\x3dvalue\";try{var f=\"\"!==top.document.referer?encodeURIComponent(top.document.referrer.substring(0,2048)):\"\"}catch(g){f=null!==document.referrer?document.referrer.toString().substring(0,2048):\"\"}try{var a=window\u0026\u0026window.top\u0026\u0026document.location\u0026\u0026window.top.location===document.location?document.location:window\u0026\u0026window.top\u0026\u0026window.top.location\u0026\u0026\"\"!==window.top.location?window.top.location:document.location}catch(g){a=document.location}try{var d=\"\"!==parent.location.href?\nencodeURIComponent(parent.location.href.toString().substring(0,2048)):\"\"}catch(g){try{d=null!==a?encodeURIComponent(a.toString().substring(0,2048)):\"\"}catch(l){d=\"\"}}var e;a=document.createElement(\"script\");var b=document.getElementsByTagName(\"script\");b=Number(b.length)-1;b=document.getElementsByTagName(\"script\")[b];\"undefined\"===typeof e\u0026\u0026(e=Math.floor(1E17*Math.random()));c=\"dx.steelhousemedia.com\/spx?dxver\\x3d\"+c+\"\\x26shaid\\x3d\"+h+\"\\x26tdr\\x3d\"+f+\"\\x26plh\\x3d\"+d+\"\\x26cb\\x3d\"+e+k;a.type=\"text\/javascript\";\na.src=(\"https:\"===document.location.protocol?\"https:\/\/\":\"http:\/\/\")+c;b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\n\n\n\n\n\n\n\n\n\n\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var c=\"4.0.0\",h=\"30788\",k=\"term\\x3dvalue\";try{var f=\"\"!==top.document.referer?encodeURIComponent(top.document.referrer.substring(0,2048)):\"\"}catch(g){f=null!==document.referrer?document.referrer.toString().substring(0,2048):\"\"}try{var a=window\u0026\u0026window.top\u0026\u0026document.location\u0026\u0026window.top.location===document.location?document.location:window\u0026\u0026window.top\u0026\u0026window.top.location\u0026\u0026\"\"!==window.top.location?window.top.location:document.location}catch(g){a=document.location}try{var d=\"\"!==parent.location.href?\nencodeURIComponent(parent.location.href.toString().substring(0,2048)):\"\"}catch(g){try{d=null!==a?encodeURIComponent(a.toString().substring(0,2048)):\"\"}catch(l){d=\"\"}}var e;a=document.createElement(\"script\");var b=document.getElementsByTagName(\"script\");b=Number(b.length)-1;b=document.getElementsByTagName(\"script\")[b];\"undefined\"===typeof e\u0026\u0026(e=Math.floor(1E17*Math.random()));c=\"dx.steelhousemedia.com\/spx?dxver\\x3d\"+c+\"\\x26shaid\\x3d\"+h+\"\\x26tdr\\x3d\"+f+\"\\x26plh\\x3d\"+d+\"\\x26cb\\x3d\"+e+k;a.type=\"text\/javascript\";\na.src=(\"https:\"===document.location.protocol?\"https:\/\/\":\"http:\/\/\")+c;b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\n\n\n\n\n\n\n\n\n\n\n\n\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var c=\"4.0.0\",h=\"30787\",k=\"term\\x3dvalue\";try{var f=\"\"!==top.document.referer?encodeURIComponent(top.document.referrer.substring(0,2048)):\"\"}catch(g){f=null!==document.referrer?document.referrer.toString().substring(0,2048):\"\"}try{var a=window\u0026\u0026window.top\u0026\u0026document.location\u0026\u0026window.top.location===document.location?document.location:window\u0026\u0026window.top\u0026\u0026window.top.location\u0026\u0026\"\"!==window.top.location?window.top.location:document.location}catch(g){a=document.location}try{var d=\"\"!==parent.location.href?\nencodeURIComponent(parent.location.href.toString().substring(0,2048)):\"\"}catch(g){try{d=null!==a?encodeURIComponent(a.toString().substring(0,2048)):\"\"}catch(l){d=\"\"}}var e;a=document.createElement(\"script\");var b=document.getElementsByTagName(\"script\");b=Number(b.length)-1;b=document.getElementsByTagName(\"script\")[b];\"undefined\"===typeof e\u0026\u0026(e=Math.floor(1E17*Math.random()));c=\"dx.steelhousemedia.com\/spx?dxver\\x3d\"+c+\"\\x26shaid\\x3d\"+h+\"\\x26tdr\\x3d\"+f+\"\\x26plh\\x3d\"+d+\"\\x26cb\\x3d\"+e+k;a.type=\"text\/javascript\";\na.src=(\"https:\"===document.location.protocol?\"https:\/\/\":\"http:\/\/\")+c;b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\n\n\n\n\n\n\n\n\n\n\n\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var c=\"4.0.0\",h=\"30727\",k=\"term\\x3dvalue\";try{var f=\"\"!==top.document.referer?encodeURIComponent(top.document.referrer.substring(0,2048)):\"\"}catch(g){f=null!==document.referrer?document.referrer.toString().substring(0,2048):\"\"}try{var a=window\u0026\u0026window.top\u0026\u0026document.location\u0026\u0026window.top.location===document.location?document.location:window\u0026\u0026window.top\u0026\u0026window.top.location\u0026\u0026\"\"!==window.top.location?window.top.location:document.location}catch(g){a=document.location}try{var d=\"\"!==parent.location.href?\nencodeURIComponent(parent.location.href.toString().substring(0,2048)):\"\"}catch(g){try{d=null!==a?encodeURIComponent(a.toString().substring(0,2048)):\"\"}catch(l){d=\"\"}}var e;a=document.createElement(\"script\");var b=document.getElementsByTagName(\"script\");b=Number(b.length)-1;b=document.getElementsByTagName(\"script\")[b];\"undefined\"===typeof e\u0026\u0026(e=Math.floor(1E17*Math.random()));c=\"dx.steelhousemedia.com\/spx?dxver\\x3d\"+c+\"\\x26shaid\\x3d\"+h+\"\\x26tdr\\x3d\"+f+\"\\x26plh\\x3d\"+d+\"\\x26cb\\x3d\"+e+k;a.type=\"text\/javascript\";\na.src=(\"https:\"===document.location.protocol?\"https:\/\/\":\"http:\/\/\")+c;b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":223
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\n\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var g=\"30789\",h=\"",["escape",["macro",7],7],"\",k=\"",["escape",["macro",10],7],"\",l=\"\",m=\"\",n=\"\",p=\"\",q=\"\",r=\"\";try{var c=\"\"!==top.document.referer?encodeURIComponent(top.document.referrer.substring(0,512)):\"\"}catch(f){c=null!==document.referrer?document.referrer.toString().substring(0,512):\"\"}try{var a=window\u0026\u0026window.top\u0026\u0026document.location\u0026\u0026window.top.location===document.location?document.location:window\u0026\u0026window.top\u0026\u0026window.top.location\u0026\u0026\"\"!==window.top.location?window.top.location:document.location}catch(f){a=\ndocument.location}try{var d=\"\"!==parent.location.href?encodeURIComponent(parent.location.href.toString().substring(0,512)):\"\"}catch(f){try{d=null!==a?encodeURIComponent(a.toString().substring(0,512)):\"\"}catch(t){d=\"\"}}var e;a=document.createElement(\"script\");var b=document.getElementsByTagName(\"script\");b=Number(b.length)-1;b=document.getElementsByTagName(\"script\")[b];\"undefined\"===typeof e\u0026\u0026(e=Math.floor(1E17*Math.random()));c=\"dx.steelhousemedia.com\/spx?conv\\x3d1\\x26shaid\\x3d\"+g+\"\\x26tdr\\x3d\"+c+\n\"\\x26plh\\x3d\"+d+\"\\x26cb\\x3d\"+e+\"\\x26shoid\\x3d\"+h+\"\\x26shoamt\\x3d\"+k+\"\\x26shocur\\x3d\"+l+\"\\x26shopid\\x3d\"+m+\"\\x26shoq\\x3d\"+n+\"\\x26shoup\\x3d\"+p+\"\\x26shpil\\x3d\"+q+r;a.type=\"text\/javascript\";a.src=(\"https:\"===document.location.protocol?\"https:\/\/\":\"http:\/\/\")+c;b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\n\n\n\n\n\n\n\n\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var g=\"30788\",h=\"",["escape",["macro",7],7],"\",k=\"",["escape",["macro",10],7],"\",l=\"\",m=\"\",n=\"\",p=\"\",q=\"\",r=\"\";try{var c=\"\"!==top.document.referer?encodeURIComponent(top.document.referrer.substring(0,512)):\"\"}catch(f){c=null!==document.referrer?document.referrer.toString().substring(0,512):\"\"}try{var a=window\u0026\u0026window.top\u0026\u0026document.location\u0026\u0026window.top.location===document.location?document.location:window\u0026\u0026window.top\u0026\u0026window.top.location\u0026\u0026\"\"!==window.top.location?window.top.location:document.location}catch(f){a=\ndocument.location}try{var d=\"\"!==parent.location.href?encodeURIComponent(parent.location.href.toString().substring(0,512)):\"\"}catch(f){try{d=null!==a?encodeURIComponent(a.toString().substring(0,512)):\"\"}catch(t){d=\"\"}}var e;a=document.createElement(\"script\");var b=document.getElementsByTagName(\"script\");b=Number(b.length)-1;b=document.getElementsByTagName(\"script\")[b];\"undefined\"===typeof e\u0026\u0026(e=Math.floor(1E17*Math.random()));c=\"dx.steelhousemedia.com\/spx?conv\\x3d1\\x26shaid\\x3d\"+g+\"\\x26tdr\\x3d\"+c+\n\"\\x26plh\\x3d\"+d+\"\\x26cb\\x3d\"+e+\"\\x26shoid\\x3d\"+h+\"\\x26shoamt\\x3d\"+k+\"\\x26shocur\\x3d\"+l+\"\\x26shopid\\x3d\"+m+\"\\x26shoq\\x3d\"+n+\"\\x26shoup\\x3d\"+p+\"\\x26shpil\\x3d\"+q+r;a.type=\"text\/javascript\";a.src=(\"https:\"===document.location.protocol?\"https:\/\/\":\"http:\/\/\")+c;b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\n\n\n\n\n\n\n\n\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var g=\"30727\",h=\"",["escape",["macro",7],7],"\",k=\"",["escape",["macro",10],7],"\",l=\"\",m=\"\",n=\"\",p=\"\",q=\"\",r=\"\";try{var c=\"\"!==top.document.referer?encodeURIComponent(top.document.referrer.substring(0,512)):\"\"}catch(f){c=null!==document.referrer?document.referrer.toString().substring(0,512):\"\"}try{var a=window\u0026\u0026window.top\u0026\u0026document.location\u0026\u0026window.top.location===document.location?document.location:window\u0026\u0026window.top\u0026\u0026window.top.location\u0026\u0026\"\"!==window.top.location?window.top.location:document.location}catch(f){a=\ndocument.location}try{var d=\"\"!==parent.location.href?encodeURIComponent(parent.location.href.toString().substring(0,512)):\"\"}catch(f){try{d=null!==a?encodeURIComponent(a.toString().substring(0,512)):\"\"}catch(t){d=\"\"}}var e;a=document.createElement(\"script\");var b=document.getElementsByTagName(\"script\");b=Number(b.length)-1;b=document.getElementsByTagName(\"script\")[b];\"undefined\"===typeof e\u0026\u0026(e=Math.floor(1E17*Math.random()));c=\"dx.steelhousemedia.com\/spx?conv\\x3d1\\x26shaid\\x3d\"+g+\"\\x26tdr\\x3d\"+c+\n\"\\x26plh\\x3d\"+d+\"\\x26cb\\x3d\"+e+\"\\x26shoid\\x3d\"+h+\"\\x26shoamt\\x3d\"+k+\"\\x26shocur\\x3d\"+l+\"\\x26shopid\\x3d\"+m+\"\\x26shoq\\x3d\"+n+\"\\x26shoup\\x3d\"+p+\"\\x26shpil\\x3d\"+q+r;a.type=\"text\/javascript\";a.src=(\"https:\"===document.location.protocol?\"https:\/\/\":\"http:\/\/\")+c;b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\n\n\n\n\n\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var g=\"30787\",h=\"",["escape",["macro",7],7],"\",k=\"",["escape",["macro",10],7],"\",l=\"\",m=\"\",n=\"\",p=\"\",q=\"\",r=\"\";try{var c=\"\"!==top.document.referer?encodeURIComponent(top.document.referrer.substring(0,512)):\"\"}catch(f){c=null!==document.referrer?document.referrer.toString().substring(0,512):\"\"}try{var a=window\u0026\u0026window.top\u0026\u0026document.location\u0026\u0026window.top.location===document.location?document.location:window\u0026\u0026window.top\u0026\u0026window.top.location\u0026\u0026\"\"!==window.top.location?window.top.location:document.location}catch(f){a=\ndocument.location}try{var d=\"\"!==parent.location.href?encodeURIComponent(parent.location.href.toString().substring(0,512)):\"\"}catch(f){try{d=null!==a?encodeURIComponent(a.toString().substring(0,512)):\"\"}catch(t){d=\"\"}}var e;a=document.createElement(\"script\");var b=document.getElementsByTagName(\"script\");b=Number(b.length)-1;b=document.getElementsByTagName(\"script\")[b];\"undefined\"===typeof e\u0026\u0026(e=Math.floor(1E17*Math.random()));c=\"dx.steelhousemedia.com\/spx?conv\\x3d1\\x26shaid\\x3d\"+g+\"\\x26tdr\\x3d\"+c+\n\"\\x26plh\\x3d\"+d+\"\\x26cb\\x3d\"+e+\"\\x26shoid\\x3d\"+h+\"\\x26shoamt\\x3d\"+k+\"\\x26shocur\\x3d\"+l+\"\\x26shopid\\x3d\"+m+\"\\x26shoq\\x3d\"+n+\"\\x26shoup\\x3d\"+p+\"\\x26shpil\\x3d\"+q+r;a.type=\"text\/javascript\";a.src=(\"https:\"===document.location.protocol?\"https:\/\/\":\"http:\/\/\")+c;b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":224
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction controlVariant(){dataLayer.push({event:\"steelhouse\"});return variantOne}function testVariant(){dataLayer.push({event:\"competitor\"});return variantTwo}var randomNumSample=1073741824,variantOne=\"steelhouse\",variantTwo=\"competitor\",variant=variantOne;\nif(!",["escape",["macro",42],8,16],"\u0026\u0026randomNumSample){",["escape",["macro",43],8,16],"\u003CrandomNumSample?variant=testVariant():",["escape",["macro",43],8,16],"\u003E=randomNumSample\u0026\u0026(variant=controlVariant());var d=new Date;d.setTime(d.getTime()+63072E6);var expires=\"expires\\x3d\"+d.toGMTString();document.cookie=\"splitVar\\x3d\"+variant+\"; \"+expires+\"; path\\x3d\/\"}else ",["escape",["macro",42],8,16],"==variantOne\u0026\u0026randomNumSample?variant=controlVariant():",["escape",["macro",42],8,16],"==variantTwo\u0026\u0026randomNumSample\u0026\u0026(variant=testVariant());\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":225
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=document.location.protocol+\"\/\/static.bytedance.com\/pixel\/sdk.js?sdkid\\x3dBKR4B1P5IEMD6H5NC7RG\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":228
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(c,d){if(!c.rdt){var a=c.rdt=function(){a.sendEvent?a.sendEvent.apply(a,arguments):a.callQueue.push(arguments)};a.callQueue=[];var b=d.createElement(\"script\");b.src=\"https:\/\/www.redditstatic.com\/ads\/pixel.js\";b.async=!0;var e=d.getElementsByTagName(\"script\")[0];e.parentNode.insertBefore(b,e)}}(window,document);rdt(\"init\",\"t2_ir5w3\");rdt(\"enableFirstPartyCookies\");rdt(\"track\",\"PageVisit\");\u003C\/script\u003E\n\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":229
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(c,d){if(!c.rdt){var a=c.rdt=function(){a.sendEvent?a.sendEvent.apply(a,arguments):a.callQueue.push(arguments)};a.callQueue=[];var b=d.createElement(\"script\");b.src=\"https:\/\/www.redditstatic.com\/ads\/pixel.js\";b.async=!0;var e=d.getElementsByTagName(\"script\")[0];e.parentNode.insertBefore(b,e)}}(window,document);rdt(\"init\",\"t2_ir5w3\");rdt(\"track\",\"ViewContent\");\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":230
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Erdt(\"track\",\"AddToCart\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":231
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(c,d){if(!c.rdt){var a=c.rdt=function(){a.sendEvent?a.sendEvent.apply(a,arguments):a.callQueue.push(arguments)};a.callQueue=[];var b=d.createElement(\"script\");b.src=\"https:\/\/www.redditstatic.com\/ads\/pixel.js\";b.async=!0;var e=d.getElementsByTagName(\"script\")[0];e.parentNode.insertBefore(b,e)}}(window,document);rdt(\"init\",\"t2_ir5w3\");rdt(\"track\",\"Purchase\");\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":232
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eif(\"",["escape",["macro",21],7],"\".startsWith(\"bb-\")\u0026\u0026\"",["escape",["macro",23],7],"\"!=\"",["escape",["macro",21],7],"\"){var date=new Date;date.setTime(date.getTime()+24*60*60*1E3);var expires=\"; expires\\x3d\"+date.toGMTString();var default_path=\"; path\\x3d\/\";document.cookie=\"brandbassador_ref\\x3d\"+\"",["escape",["macro",21],7],"\"+expires+default_path};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":233
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o39vt\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o39vt\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o39vt\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":245
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var g=function(d,h,f,g){this.get=function(a){a+=\"\\x3d\";for(var b=document.cookie.split(\";\"),c=0,d=b.length;c\u003Cd;c++){for(var e=b[c];\" \"==e.charAt(0);)e=e.substring(1,e.length);if(0==e.indexOf(a))return e.substring(a.length,e.length)}return null};this.set=function(a,b){var c=new Date;c.setTime(c.getTime()+6048E5);c=\"; expires\\x3d\"+c.toGMTString();document.cookie=a+\"\\x3d\"+b+c+\"; path\\x3d\/; \"};this.check=function(){var a=this.get(f);if(a)a=a.split(\":\");else if(100!=d)\"v\"==h\u0026\u0026(d=Math.random()\u003E=\nd\/100?0:100),a=[h,d,0],this.set(f,a.join(\":\"));else return!0;var b=a[1];if(100==b)return!0;switch(a[0]){case \"v\":return!1;case \"r\":return b=a[2]%Math.floor(100\/b),a[2]++,this.set(f,a.join(\":\")),!b}return!0};this.go=function(){if(this.check()){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.src=g;document.body\u0026\u0026document.body.appendChild(a)}};this.start=function(){var a=this;\"complete\"!==document.readyState?window.addEventListener?window.addEventListener(\"load\",function(){a.go()},\n!1):window.attachEvent\u0026\u0026window.attachEvent(\"onload\",function(){a.go()}):a.go()}};try{(new g(10,\"v\",\"QSI_S_ZN_br5amnLEmOXdurH\",\"https:\/\/znbr5amnlemoxdurh-redbubble.siteintercept.qualtrics.com\/SIE\/?Q_ZID\\x3dZN_br5amnLEmOXdurH\")).start()}catch(d){}})();\u003C\/script\u003E\u003Cdiv id=\"ZN_br5amnLEmOXdurH\"\u003E\u003C\/div\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":247
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=document.location.protocol+\"\/\/static.bytedance.com\/pixel\/sdk.js?sdkid\\x3dBNPVCBRBR8LG54J4G95G\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":276
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=document.location.protocol+\"\/\/static.bytedance.com\/pixel\/sdk.js?sdkid\\x3dBNFEUVK0M0F93BI70BV0\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":277
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=document.location.protocol+\"\/\/static.bytedance.com\/pixel\/sdk.js?sdkid\\x3dBNPVKL96KSL7A3HCLFG0\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":278
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=document.location.protocol+\"\/\/static.bytedance.com\/pixel\/sdk.js?sdkid\\x3dBNPVM416KSL7A3HCLFH0\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":279
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E!function(b){if(!window.pintrk){window.pintrk=function(){window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var a=window.pintrk;a.queue=[];a.version=\"3.0\";a=document.createElement(\"script\");a.async=!0;a.src=b;b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)}}(\"https:\/\/s.pinimg.com\/ct\/core.js\");pintrk(\"load\",\"2619914275841\",{em:\"orderEmail\"});pintrk(\"load\",\"2619914275841\");pintrk(\"page\",{page_name:\"",["escape",["macro",44],7],"\"});\u003C\/script\u003E \n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":280
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv5z0\");twq(\"track\",\"PageView\",{value:\"",["escape",["macro",10],7],"\",currency:\"USD\"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":773
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",55,1]],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar tkbl_product={sku:\"",["escape",["macro",35],7],"\",title:document.querySelector(\"meta[property\\x3d'og:title']\").getAttribute(\"content\"),url:document.location.href,description:document.querySelector(\"meta[property\\x3d'og:description']\").getAttribute(\"content\"),custom_properties:{images:{\"default\":document.querySelector(\"meta[property\\x3d'og:image']\").getAttribute(\"content\")}}};window._talkableq=window._talkableq||[];\nfunction show_talkable_product_sharing(){window._talkableq.push([\"register_affiliate\",{customer:{product:tkbl_product},campaign_tags:[\"free-sticker\",\"product-sharing\"],iframe:{name:\"talkable-product-sharing-iframe\",container:\"talkable-product-sharing\"}}])}var custom_cta=document.querySelector(\"#free-sticker-button\");custom_cta\u0026\u0026custom_cta.addEventListener(\"click\",show_talkable_product_sharing,!1);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":780
    }],
  "predicates":[{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"check-out\/thanks"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.load"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(\/people\/[a-zA-Z0-9\\-]+\/works\/.*)|(\/shop\/p\/.+)|(\/i\/)"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(email_address|order_email)="
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"Email Subscription Submitted"
    },{
      "function":"_gt",
      "arg0":["macro",7],
      "arg1":"0"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/check-out\/thanks"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/shop\/"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"NamogooBot"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"NamogooMalware"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"1"
    },{
      "function":"_sw",
      "arg0":["macro",21],
      "arg1":"bb-"
    },{
      "function":"_cn",
      "arg0":["macro",22],
      "arg1":"redbubble.com"
    },{
      "function":"_cn",
      "arg0":["macro",22],
      "arg1":"brandbassador.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/cart"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"product-add-to-cart"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"undefined"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"verifyGTM=true"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"product-view"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/check-out"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/contact"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"perf=true"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":".*namogoo-1=variant.*"
    },{
      "function":"_cn",
      "arg0":["macro",37],
      "arg1":"namogoo=true"
    },{
      "function":"_re",
      "arg0":["macro",39],
      "arg1":"US|CA|AU"
    },{
      "function":"_cn",
      "arg0":["macro",37],
      "arg1":"\/p\/338-friends-share"
    },{
      "function":"_re",
      "arg0":["macro",40],
      "arg1":".+"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"undefined"
    },{
      "function":"_gt",
      "arg0":["macro",7],
      "arg1":"1"
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"FR"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"redbubble.com\/fr\/"
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"GB"
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"DE"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"redbubble.com\/de\/"
    },{
      "function":"_eq",
      "arg0":["macro",42],
      "arg1":"steelhouse"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.dom"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"\/people\/[a-zA-Z0-9\\-]+\/works\/.*"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"\/shop\/p\/.+"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/i\/"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(\/shop\/p\/[0-9]+\\.EJUG5)|(\/shop\/p\/[0-9]+\\.JCQM3)|(\/shop\/p\/[0-9]+\\.O9UDB)"
    }],
  "rules":[
    [["if",0,1],["add",1,2,16,20,24,29,30,36,40,50,64,66,70],["block",71]],
    [["if",2],["add",3,7,13,15,27,32,33,37,38,48,49,51,58,65,67,73,74,21,28,63]],
    [["if",5],["add",4,5,31]],
    [["if",2,3],["add",6],["block",3,51]],
    [["if",2,6,7],["add",8,62]],
    [["if",1,3],["add",9,25,39,46,54,68,75],["block",67]],
    [["if",1,8],["add",10,26]],
    [["if",9],["add",11]],
    [["if",10],["add",12]],
    [["if",1],["add",0]],
    [["if",2,11],["add",14]],
    [["if",2,12],["unless",13],["add",17,71]],
    [["if",2,14],["add",17]],
    [["if",2,15],["add",18,22,42]],
    [["if",16],["add",18,22,35,41,45,52,69,72,76]],
    [["if",0,2],["add",19,47,53,77,79],["block",7,33,51,55,57,67]],
    [["if",1],["unless",17],["add",23]],
    [["if",19],["add",34]],
    [["if",2,20],["add",42,57]],
    [["if",1,21],["add",42]],
    [["if",1],["unless",22],["add",43]],
    [["if",1,23],["add",44]],
    [["if",1,24],["add",44]],
    [["if",1,25],["unless",18],["add",55]],
    [["if",1,26],["add",55]],
    [["if",0,1,25,27,29],["unless",28],["add",56]],
    [["if",0,1,30,31],["add",59]],
    [["if",0,1,32],["add",60]],
    [["if",0,1,33,34],["add",61]],
    [["if",0,35,36],["add",64]],
    [["if",1],["unless",0,37,38,39],["add",78]],
    [["if",1,40],["unless",18],["add",80]],
    [["if",2,4],["block",3]],
    [["if",2,18],["block",33,44]]]
},
"runtime":[[50,"__awj",[46,"a"],[52,"b",["require","injectScript"]],["b",[0,[0,"https://www.dwin1.com/",[17,[15,"a"],"merchantId"]],".js"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"],"awj"]],[50,"__crto",[46,"a"],[52,"b",["require","createQueue"]],[52,"c",["require","injectScript"]],[52,"d","https://static.criteo.net/js/ld/ld.js"],[52,"e",["b","criteo_q"]],[41,"f"],[3,"f",[8,"event","viewHome"]],[38,[17,[15,"a"],"tagType"],[46,"LISTING_TAG","PRODUCT_TAG","BASKET_TAG","TRANSACTION_TAG"],[46,[5,[46,[3,"f",[8,"event","viewList","item",[17,[15,"a"],"listingID"]]],[4]]],[5,[46,[3,"f",[8,"event","viewItem","item",[17,[15,"a"],"productID"]]],[4]]],[5,[46,[3,"f",[8,"event","viewBasket","item",[17,[15,"a"],"basketArray"]]],[4]]],[5,[46,[3,"f",[8,"event","trackTransaction","id",[30,[17,[15,"a"],"TransactionID"],""],"item",[17,[15,"a"],"TransactionArray"]]],[4]]]]],["e",[8,"event","setAccount","account",[17,[15,"a"],"accountId"]],[8,"event","setHashedEmail","email",[30,[17,[15,"a"],"hashedEmail"],""]],[8,"event","setSiteType","type",[30,[17,[15,"a"],"siteType"],"d"]],[15,"f"]],["c",[15,"d"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"],"criteoStatic"]],[50,"__twitter_website_tag",[46,"a"],[50,"i",[46],[41,"l"],[3,"l",["d","twq"]],[22,[15,"l"],[46,[36,[15,"l"]]]],["h","twq",[51,"",[7],[52,"n",["d","twq.exe.apply"]],[22,[15,"n"],[46,["c","twq.exe.apply",[45],[15,"arguments"]]],[46,["c","twq.queue.push",[15,"arguments"]]]]],true],["h","twq.version","1",true],["h","twq.queue",[7],true],[52,"m",[51,"",[7]]],["e","https://static.ads-twitter.com/uwt.js",[15,"m"],[15,"m"],"twitter_website_tag"],[36,["d","twq"]]],[52,"b",["require","createArgumentsQueue"]],[52,"c",["require","callInWindow"]],[52,"d",["require","copyFromWindow"]],[52,"e",["require","injectScript"]],[52,"f",["require","makeString"]],[52,"g",["require","makeTableMap"]],[52,"h",["require","setInWindow"]],[41,"j"],[3,"j",["i"]],["j","init",["f",[17,[15,"a"],"twitter_pixel_id"]]],[52,"k",["g",[30,[17,[15,"a"],"event_parameters"],[7]],"param_table_key_column","param_table_value_column"]],[22,[1,[15,"k"],[2,[15,"k"],"hasOwnProperty",[7,"content_ids"]]],[46,[53,[41,"l"],[3,"l",[16,[15,"k"],"content_ids"]],[3,"l",[2,[2,[15,"l"],"split",[7,"\""]],"join",[7,"\u0027"]]],[41,"m"],[3,"m",[2,[2,[15,"l"],"slice",[7,[2,[15,"l"],"indexOf",[7,"["]],[2,[15,"l"],"indexOf",[7,"]"]]]],"split",[7,","]]],[3,"m",[2,[15,"m"],"map",[7,[51,"",[7,"n"],[36,[30,[16,[2,[15,"n"],"split",[7,"\u0027"]],1],""]]]]]],[43,[15,"k"],"content_ids",[15,"m"]]]]],["j","track",["f",[17,[15,"a"],"event_type"]],[15,"k"]],[2,[15,"a"],"gtmOnSuccess",[7]]]]
,"permissions":{"__awj":{"inject_script":{"urls":["https:\/\/www.dwin1.com\/*"]}},"__crto":{"access_globals":{"keys":[{"key":"criteo_q","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/static.criteo.net\/js\/ld\/ld.js"]}},"__twitter_website_tag":{"access_globals":{"keys":[{"key":"twq","read":true,"write":true,"execute":true},{"key":"twq.exe","read":true,"write":true,"execute":true},{"key":"twq.queue","read":true,"write":true,"execute":true},{"key":"twq.queue.push","read":true,"write":true,"execute":true},{"key":"twq.version","read":true,"write":true,"execute":false},{"key":"twq.exe.apply","read":true,"write":true,"execute":true}]},"inject_script":{"urls":["https:\/\/static.ads-twitter.com\/uwt.js"]}}}

,"security_groups":{
"nonGoogleScripts":["__awj","__crto","__twitter_website_tag"]}

};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ea="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},fa;if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ha;a:{var ia={Tf:!0},ja={};try{ja.__proto__=ia;ha=ja.Tf;break a}catch(a){}ha=!1}fa=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ka=fa,la=function(a,b){a.prototype=ea(b.prototype);a.prototype.constructor=a;if(ka)ka(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]},ma=this||self,na=/^[\w+/_-]+[=]{0,2}$/,oa=null;var pa=function(a,b){this.a=a;this.i=b};var qa=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ra=function(){this.o={};this.m=!1;this.H={}};ra.prototype.get=function(a){return this.o["dust."+a]};ra.prototype.set=function(a,b){this.m||(a="dust."+a,this.H.hasOwnProperty(a)||(this.o[a]=b))};ra.prototype.has=function(a){return this.o.hasOwnProperty("dust."+a)};var ta=function(a){var b=[],c;for(c in a.o)a.o.hasOwnProperty(c)&&b.push(c.substr(5));return b};var h=function(a){this.i=new ra;this.a=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(qa(b)?this.a[Number(b)]=a[Number(b)]:this.i.set(b,a[b]))};aa=h.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.a.length;c++){var d=this.a[c];null===d||void 0===d?b.push(""):d instanceof h?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if("length"==a){if(!qa(b))throw Error("RangeError: Length property must be a valid integer.");this.a.length=Number(b)}else qa(a)?this.a[Number(a)]=b:this.i.set(a,b)};aa.get=function(a){return"length"==a?this.length():qa(a)?this.a[Number(a)]:this.i.get(a)};aa.length=function(){return this.a.length};aa.bc=function(){for(var a=ta(this.i),b=0;b<this.a.length;b++)a.push(b+"");return new h(a)};
var ua=function(a,b){if(qa(b))delete a.a[Number(b)];else{var c=a.i,d;d="dust."+b;c.m||c.H.hasOwnProperty(d)||delete c.o[d]}};aa=h.prototype;aa.pop=function(){return this.a.pop()};aa.push=function(a){return this.a.push.apply(this.a,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.a.shift()};aa.splice=function(a,b,c){return new h(this.a.splice.apply(this.a,arguments))};aa.unshift=function(a){return this.a.unshift.apply(this.a,Array.prototype.slice.call(arguments))};
aa.has=function(a){return qa(a)&&this.a.hasOwnProperty(a)||this.i.has(a)};var va=function(){function a(f,g){if(b[f]){if(b[f].Ub+g>b[f].max)throw Error("Quota exceeded");b[f].Ub+=g}}var b={},c=void 0,d=void 0,e={kh:function(f){c=f},ve:function(){c&&a(c,1)},mh:function(f){d=f},Ca:function(f){d&&a(d,f)},Ih:function(f,g){b[f]=b[f]||{Ub:0};b[f].max=g},Lg:function(f){return b[f]&&b[f].Ub||0},reset:function(){b={}},sg:a};e.onFnConsume=e.kh;e.consumeFn=e.ve;e.onStorageConsume=e.mh;e.consumeStorage=e.Ca;e.setMax=e.Ih;e.getConsumed=e.Lg;e.reset=e.reset;e.consume=e.sg;return e};var wa=function(a,b){this.H=a;this.P=function(c,d,e){return c.apply(d,e)};this.m=b;this.i=new ra;this.a=this.o=void 0};wa.prototype.add=function(a,b){ya(this,a,b,!1)};var ya=function(a,b,c,d){if(!a.i.m)if(a.H.Ca(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.i;e.set(b,c);e.H["dust."+b]=!0}else a.i.set(b,c)};
wa.prototype.set=function(a,b){this.i.m||(!this.i.has(a)&&this.m&&this.m.has(a)?this.m.set(a,b):(this.H.Ca(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b)))};wa.prototype.get=function(a){return this.i.has(a)?this.i.get(a):this.m?this.m.get(a):void 0};wa.prototype.has=function(a){return!!this.i.has(a)||!(!this.m||!this.m.has(a))};var za=function(a){var b=new wa(a.H,a);a.o&&(b.o=a.o);b.P=a.P;b.a=a.a;return b};var Ca=function(){},Da=function(a){return"function"==typeof a},p=function(a){return"string"==typeof a},Ea=function(a){return"number"==typeof a&&!isNaN(a)},Ga=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},C=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ha=function(a,b){if(a&&Ga(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ia=function(a,b){if(!Ea(a)||
!Ea(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},La=function(a,b){for(var c=new Ka,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Ma=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Na=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Pa=function(a){return Math.round(Number(a))||0},Qa=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},Ra=function(a){var b=[];if(Ga(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Sa=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Ta=function(){return(new Date).getTime()},Ka=function(){this.prefix="gtm.";this.values={}};Ka.prototype.set=function(a,b){this.values[this.prefix+a]=b};Ka.prototype.get=function(a){return this.values[this.prefix+a]};
var Ua=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Wa=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Xa=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ya=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Za=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},ab=function(a){for(var b=E,c=0;c<a.length-1;c++){if(!b.hasOwnProperty(a[c]))return;b=b[a[c]]}return b},bb=function(a,b){for(var c=
{},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},cb=function(a){var b=[];Ma(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var db=function(a,b){ra.call(this);this.a=a;this.P=b};la(db,ra);db.prototype.toString=function(){return this.a};db.prototype.bc=function(){return new h(ta(this))};db.prototype.i=function(a,b){a.H.ve();return this.P.apply(fb(this,a),Array.prototype.slice.call(arguments,1))};var fb=function(a,b){var c=function(d,e){this.i=d;this.m=e};c.prototype.a=function(d){var e=this.m;return Ga(d)?gb(e,d):d};c.prototype.H=function(d){return hb(this.m,d)};c.prototype.o=function(){return b.H};return new c(a,b)};
db.prototype.Fa=function(a,b){try{return this.i.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};var hb=function(a,b){for(var c,d=0;d<b.length&&!(c=gb(a,b[d]),c instanceof pa);d++);return c},gb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof db))throw Error("Attempting to execute non-function "+b[0]+".");return c.i.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.o;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};var ib=function(){ra.call(this)};la(ib,ra);ib.prototype.bc=function(){return new h(ta(this))};var jb=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|Map|List)$/i,kb={Fn:"function",Map:"Object",List:"Array"},F=function(a,b,c){for(var d=0;d<b.length;d++){var e=jb.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],k=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==k){var n=typeof l;l instanceof db?n="Fn":l instanceof h?n="List":l instanceof ib&&(n="Map");if(n!=k)throw Error("Error in "+
a+". Argument "+f+" has type "+n+", which does not match required type "+(kb[k]||k)+".");}}};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var lb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,mb=function(a){if(null==a)return String(a);var b=lb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},nb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},ob=function(a){if(!a||"object"!=mb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!nb(a,"constructor")&&!nb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||nb(a,b)},G=function(a,b){var c=b||("array"==mb(a)?[]:{}),d;for(d in a)if(nb(a,d)){var e=a[d];"array"==mb(e)?("array"!=mb(c[d])&&(c[d]=[]),c[d]=G(e,c[d])):ob(e)?(ob(c[d])||(c[d]={}),c[d]=G(e,c[d])):c[d]=e}return c};var qb=function(a,b){var c=[],d=[],e=function(g,k){for(var l=ta(g),m=0;m<l.length;m++)k[l[m]]=f(g.get(l[m]))},f=function(g){var k=C(c,g);if(-1<k)return d[k];if(g instanceof h){var l=[];c.push(g);d.push(l);for(var m=g.bc(),n=0;n<m.length();n++)l[m.get(n)]=f(g.get(m.get(n)));return l}if(g instanceof ib){var r={};c.push(g);d.push(r);e(g,r);return r}if(g instanceof db){var t=function(){for(var q=Array.prototype.slice.call(arguments,0),u=0;u<q.length;u++)q[u]=pb(q[u],b);var w=b?b.H:va(),v=new wa(w);b&&
(v.a=b.a);return f(g.i.apply(g,[v].concat(q)))};c.push(g);d.push(t);e(g,t);return t}switch(typeof g){case "boolean":case "number":case "string":case "undefined":return g;case "object":if(null===g)return null}};return f(a)},pb=function(a,b){var c=[],d=[],e=function(g,k){for(var l in g)g.hasOwnProperty(l)&&k.set(l,f(g[l]))},f=function(g){var k=C(c,g);if(-1<k)return d[k];if(Ga(g)||Na(g)){var l=new h([]);c.push(g);d.push(l);for(var m in g)g.hasOwnProperty(m)&&l.set(m,f(g[m]));return l}if(ob(g)){var n=
new ib;c.push(g);d.push(n);e(g,n);return n}if("function"===typeof g){var r=new db("",function(q){for(var u=Array.prototype.slice.call(arguments,0),w=0;w<u.length;w++)u[w]=qb(this.a(u[w]),b);return f((0,this.m.P)(g,g,u))});c.push(g);d.push(r);e(g,r);return r}var t=typeof g;if(null===g||"string"===t||"number"===t||"boolean"===t)return g};return f(a)};var rb={control:function(a,b){return new pa(a,this.a(b))},fn:function(a,b,c){var d=this.m,e=this.a(b);if(!(e instanceof h))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.o().Ca(a.length+f.length);return new db(a,function(){return function(g){var k=za(d);void 0===k.a&&(k.a=this.m.a);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=this.a(l[m]),l[m]instanceof pa)return l[m];for(var n=e.get("length"),r=
0;r<n;r++)r<l.length?k.add(e.get(r),l[r]):k.add(e.get(r),void 0);k.add("arguments",new h(l));var t=hb(k,f);if(t instanceof pa)return"return"===t.a?t.i:t}}())},list:function(a){var b=this.o();b.Ca(arguments.length);for(var c=new h,d=0;d<arguments.length;d++){var e=this.a(arguments[d]);"string"===typeof e&&b.Ca(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.o(),c=new ib,d=0;d<arguments.length-1;d+=2){var e=this.a(arguments[d])+"",f=this.a(arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Ca(g);c.set(e,f)}return c},undefined:function(){}};function sb(a,b){var c=gb(a,b);if(c instanceof pa||c instanceof db||c instanceof h||c instanceof ib||null===c||void 0===c||"string"===typeof c||"number"===typeof c||"boolean"===typeof c)return c}var tb=function(){this.m=va();this.a=new wa(this.m)},ub=function(a,b,c){var d=new db(b,c);d.m=!0;a.a.set(b,d)};tb.prototype.$b=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.i(c)};tb.prototype.i=function(a){for(var b,c=0;c<arguments.length;c++)b=sb(this.a,arguments[c]);return b};
tb.prototype.o=function(a,b){var c=za(this.a);c.a=a;for(var d,e=1;e<arguments.length;e++)d=sb(c,arguments[e]);return d};var vb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var wb={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof h)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new h(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.i(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.i(a,this.get(e),e,this)&&d.push(this.get(e));return new h(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.i(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.i(a,this.get(e),e,this));return new h(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g==d)throw Error("TypeError: Reduce on List with no elements.");}for(var k=f;k<d;k++)this.has(k)&&(e=b.i(a,e,this.get(k),k,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var k=f;0<=k;k--)this.has(k)&&(e=b.i(a,e,this.get(k),k,this));return e},reverse:function(){for(var a=vb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):ua(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new h(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.i(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=vb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.i(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):ua(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var xb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),yb=new pa("break"),zb=new pa("continue"),Bb=function(a,b){return this.a(a)+this.a(b)},Cb=function(a,b){return this.a(a)&&this.a(b)},Db=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(!(c instanceof h))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"==typeof a){if(0<=C(xb,b))return pb(a[b].apply(a,vb(c)),this.m);throw Error("TypeError: "+b+" is not a function");}if(a instanceof h){if(a.has(b)){var d=a.get(b);if(d instanceof db){var e=vb(c);e.unshift(this.m);return d.i.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=C(wb.supportedMethods,b)){var f=vb(c);f.unshift(this.m);
return wb[b].apply(a,f)}}if(a instanceof db||a instanceof ib){if(a.has(b)){var g=a.get(b);if(g instanceof db){var k=vb(c);k.unshift(this.m);return g.i.apply(g,k)}throw Error("TypeError: "+b+" is not a function");}if("toString"==b)return a instanceof db?a.a:a.toString();if("hasOwnProperty"==b)return a.has.apply(a,vb(c))}throw Error("TypeError: Object has no '"+b+"' property.");},Eb=function(a,b){a=this.a(a);if("string"!=typeof a)throw Error("Invalid key name given for assignment.");var c=this.m;if(!c.has(a))throw Error("Attempting to assign to undefined value "+
b);var d=this.a(b);c.set(a,d);return d},Fb=function(a){var b=za(this.m),c=hb(b,Array.prototype.slice.apply(arguments));if(c instanceof pa)return c},Gb=function(){return yb},Hb=function(a){for(var b=this.a(a),c=0;c<b.length;c++){var d=this.a(b[c]);if(d instanceof pa)return d}},Ib=function(a){for(var b=this.m,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.a(arguments[c+1]);ya(b,d,e,!0)}}},Jb=function(){return zb},Kb=function(a,b,c){var d=new h;b=this.a(b);for(var e=
0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.m.add(a,this.a(f))},Lb=function(a,b){return this.a(a)/this.a(b)},Mb=function(a,b){return this.a(a)==this.a(b)},Nb=function(a){for(var b,c=0;c<arguments.length;c++)b=this.a(arguments[c]);return b};
function Ob(a,b,c){if("string"==typeof b)for(var d=0;d<b.length;d++){var e=a(d),f=hb(e,c);if(f instanceof pa){if("break"==f.a)break;if("return"==f.a)return f}}else if(b instanceof ib||b instanceof h||b instanceof db)for(var g=b.bc(),k=g.length(),l=0;l<k;l++){var m=a(g.get(l)),n=hb(m,c);if(n instanceof pa){if("break"==n.a)break;if("return"==n.a)return n}}}
var Pb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Ob(function(e){d.set(a,e);return d},b,c)},Qb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Ob(function(e){var f=za(d);ya(f,a,e,!0);return f},b,c)},Rb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Ob(function(e){var f=za(d);f.add(a,e);return f},b,c)},Tb=function(a){return this.m.get(this.a(a))},Ub=function(a,b){var c;a=this.a(a);b=this.a(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+
a+".");a instanceof ib||a instanceof h||a instanceof db?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:qa(b)&&(c=a[b]));return c},Vb=function(a,b){return this.a(a)>this.a(b)},Wb=function(a,b){return this.a(a)>=this.a(b)},Xb=function(a,b){return this.a(a)===this.a(b)},Yb=function(a,b){return this.a(a)!==this.a(b)},Zb=function(a,b,c){var d=[];this.a(a)?d=this.a(b):c&&(d=this.a(c));var e=this.H(d);if(e instanceof pa)return e},$b=function(a,b){return this.a(a)<this.a(b)},ac=function(a,b){return this.a(a)<=
this.a(b)},bc=function(a,b){return this.a(a)%this.a(b)},cc=function(a,b){return this.a(a)*this.a(b)},dc=function(a){return-this.a(a)},ec=function(a){return!this.a(a)},fc=function(a,b){return this.a(a)!=this.a(b)},gc=function(){return null},hc=function(a,b){return this.a(a)||this.a(b)},ic=function(a,b){var c=this.a(a);this.a(b);return c},jc=function(a){return this.a(a)},kc=function(a){return Array.prototype.slice.apply(arguments)},lc=function(a){return new pa("return",this.a(a))},mc=function(a,b,c){a=
this.a(a);b=this.a(b);c=this.a(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof db||a instanceof h||a instanceof ib)&&a.set(b,c);return c},nc=function(a,b){return this.a(a)-this.a(b)},oc=function(a,b,c){a=this.a(a);var d=this.a(b),e=this.a(c);if(!Ga(d)||!Ga(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,k=0;k<d.length;k++)if(g||a===this.a(d[k]))if(f=this.a(e[k]),f instanceof pa){var l=f.a;if("break"==l)return;if("return"==
l||"continue"==l)return f}else g=!0;if(e.length==d.length+1&&(f=this.a(e[e.length-1]),f instanceof pa&&("return"==f.a||"continue"==f.a)))return f},pc=function(a,b,c){return this.a(a)?this.a(b):this.a(c)},qc=function(a){a=this.a(a);return a instanceof db?"function":typeof a},rc=function(a){for(var b=this.m,c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}},sc=function(a,b,c,d){var e,f=this.a(d);if(this.a(c)&&(e=this.H(f),e instanceof pa)){if("break"==e.a)return;if("return"==
e.a)return e}for(;this.a(a);){e=this.H(f);if(e instanceof pa){if("break"==e.a)break;if("return"==e.a)return e}this.a(b)}},tc=function(a){return~Number(this.a(a))},uc=function(a,b){return Number(this.a(a))<<Number(this.a(b))},vc=function(a,b){return Number(this.a(a))>>Number(this.a(b))},wc=function(a,b){return Number(this.a(a))>>>Number(this.a(b))},xc=function(a,b){return Number(this.a(a))&Number(this.a(b))},yc=function(a,b){return Number(this.a(a))^Number(this.a(b))},zc=function(a,b){return Number(this.a(a))|
Number(this.a(b))};var Bc=function(){this.a=new tb;Ac(this)};Bc.prototype.$b=function(a){return this.a.i(a)};
var Dc=function(a,b){return Cc.a.o(a,b)},Ac=function(a){function b(e,f){var g=d.a,k=String(f);rb.hasOwnProperty(e)&&ub(g,k||e,rb[e])}function c(e,f){ub(d.a,String(e),f)}var d=a;b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);c(0,Bb);c(1,Cb);c(2,Db);c(3,Eb);c(53,Fb);c(4,Gb);c(5,Hb);c(52,Ib);c(6,Jb);c(9,Hb);c(50,Kb);c(10,Lb);c(12,Mb);c(13,Nb);c(47,Pb);c(54,Qb);c(55,Rb);c(15,Tb);c(16,Ub);c(17,Ub);c(18,Vb);c(19,Wb);c(20,Xb);c(21,Yb);c(22,Zb);c(23,$b);c(24,ac);c(25,bc);c(26,cc);c(27,
dc);c(28,ec);c(29,fc);c(45,gc);c(30,hc);c(32,ic);c(33,ic);c(34,jc);c(35,jc);c(46,kc);c(36,lc);c(43,mc);c(37,nc);c(38,oc);c(39,pc);c(40,qc);c(41,rc);c(42,sc);c(58,tc);c(57,uc);c(60,vc);c(61,wc);c(56,xc);c(62,yc);c(59,zc)},Fc=function(){var a=Cc,b=Ec();ub(a.a,"require",b)},Gc=function(a,b){a.a.a.P=b};
var Hc=[],Ic={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Jc=function(a){return Ic[a]},Kc=/[\x00\x22\x26\x27\x3c\x3e]/g;var Oc=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Pc={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Qc=function(a){return Pc[a]};Hc[7]=function(a){return String(a).replace(Oc,Qc)};
Hc[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Oc,Qc)+"'"}};var Xc=/['()]/g,Yc=function(a){return"%"+a.charCodeAt(0).toString(16)};Hc[12]=function(a){var b=
encodeURIComponent(String(a));Xc.lastIndex=0;return Xc.test(b)?b.replace(Xc,Yc):b};var Zc=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,$c={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},ad=function(a){return $c[a]};Hc[16]=function(a){return a};var cd;
var dd=[],ed=[],fd=[],gd=[],hd=[],id={},jd,kd,ld,md=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},nd=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=id[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):cd(c,e,b)},pd=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=od(a[e],b,c));
return d},qd=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=id[b];return c?c.priorityOverride||0:0},od=function(a,b,c){if(Ga(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(od(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=dd[f];if(!g||b.fd(g))return;c[f]=!0;try{var k=pd(g,b,c);k.vtp_gtmEventId=b.id;d=nd(k,b);ld&&(d=ld.vg(d,k))}catch(x){b.Ne&&b.Ne(x,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[od(a[l],b,c)]=od(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var r=od(a[n],b,c);kd&&(m=m||r===kd.Nb);d.push(r)}return kd&&m?kd.yg(d):d.join("");case "escape":d=od(a[1],b,c);if(kd&&Ga(a[1])&&"macro"===a[1][0]&&kd.Xg(a))return kd.rh(d);d=String(d);for(var t=2;t<a.length;t++)Hc[a[t]]&&(d=Hc[a[t]](d));return d;case "tag":var q=a[1];if(!gd[q])throw Error("Unable to resolve tag reference "+q+".");return d={Ae:a[2],
index:q};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var w=rd(u,b,c),v=!!a[4];return v||2!==w?v!==(1===w):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},rd=function(a,b,c){try{return jd(pd(a,b,c))}catch(d){JSON.stringify(a)}return 2};var sd=function(){var a=function(b){return{toString:function(){return b}}};return{Jd:a("convert_case_to"),Kd:a("convert_false_to"),Ld:a("convert_null_to"),Md:a("convert_true_to"),Nd:a("convert_undefined_to"),ai:a("debug_mode_metadata"),ya:a("function"),tf:a("instance_name"),xf:a("live_only"),zf:a("malware_disabled"),Af:a("metadata"),bi:a("original_vendor_template_id"),Ef:a("once_per_event"),Td:a("once_per_load"),ae:a("setup_tags"),ce:a("tag_id"),de:a("teardown_tags")}}();var td=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.i=a;this.a=c};la(td,Error);function ud(a,b){if(Ga(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)ud(a[c],b[c])}};var vd=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.m=a;this.i=b;this.a=[]};la(vd,Error);var wd=function(a){var b=a.a.slice();a.i&&(b=a.i(b));return b};var yd=function(){return function(a,b){a instanceof vd||(a=new vd(a,xd));b&&a.a.push(b);throw a;}};function xd(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ea(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var zd=null,Cd=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}var c=[],d=[];zd=Ad(a);for(var e=0;e<ed.length;e++){var f=ed[e],g=Bd(f);if(g){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var m=[],n=0;n<gd.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Bd=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=zd(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=zd(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},Ad=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=rd(fd[c],a));return b[c]}};var Dd=function(){this.a={}};function Ed(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(k){g="string"===typeof k?g+(": "+k):k instanceof Error?g+(": "+k.message):g+"."}if(!f)throw new td(c,d,g);}}function Fd(a,b,c){return function(){var d=arguments[0];if(d){var e=a.a[d],f=a.a.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));Ed(e,b,d,g);Ed(f,b,d,g)}}}};var Jd=function(a){var b=Gd.B,c=this;this.i=new Dd;this.a={};var d={},e=Fd(this.i,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Ma(a,function(f,g){var k={};Ma(g,function(l,m){var n=Hd(l,m);k[l]=n.assert;d[l]||(d[l]=n.L)});c.a[f]=function(l,m){var n=k[l];if(!n)throw Id(l,{},"The requested permission "+l+" is not configured.");var r=Array.prototype.slice.call(arguments,0);n.apply(void 0,r);e.apply(void 0,r)}})},Ld=function(a){return Kd.a[a]||
function(){}};function Hd(a,b){var c=md(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=Id;try{return nd(c)}catch(d){return{assert:function(e){throw new td(e,{},"Permission "+e+" is unknown.");},L:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function Id(a,b,c){return new td(a,b,c)};var Nd=!1;var Od={};Od.Rh=Qa('');Od.Eg=Qa('');var Pd=Nd,Qd=Od.Eg,Rd=Od.Rh;
var ee=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},fe=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;ee(b,"/*")&&(b=b.slice(0,-2));ee(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var k=d[d.length-1];return a.lastIndexOf(k)===a.length-k.length},ge=/^[a-z0-9-]+$/i,he=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
ie=function(a,b){var c;if(!(c="https:"!=a.protocol||a.port&&"443"!=a.port)){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!ge.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var k;var l=a,m=b[g];if(!he.exec(m))throw Error("Invalid Wildcard");var n=m.slice(8),r=n.slice(0,n.indexOf("/")),t;var q=l.hostname,u=r;if(0!==u.indexOf("*."))t=q.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var w=q.toLowerCase().indexOf(u.toLowerCase());
t=-1===w?!1:q.length===u.length?!0:q.length!==u.length+w?!1:"."===q[w-1]}if(t){var v=n.slice(n.indexOf("/"));k=fe(l.pathname+l.search,v)?!0:!1}else k=!1;if(k)return!0}return!1};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var je,ke=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.gg&&(l["fix_"+m]=!0),l.Ce=l.Ce||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},r={comment:function(){var q=k.indexOf("--\x3e");if(0<=q)return{content:k.substr(4,q),length:q+3}},endTag:function(){var q=k.match(d);if(q)return{tagName:q[1],length:q[0].length}},atomicTag:function(){var q=r.startTag();
if(q){var u=k.slice(q.length);if(u.match(new RegExp("</\\s*"+q.tagName+"\\s*>","i"))){var w=u.match(new RegExp("([\\s\\S]*?)</\\s*"+q.tagName+"\\s*>","i"));if(w)return{tagName:q.tagName,U:q.U,content:w[1],length:w[0].length+q.length}}}},startTag:function(){var q=k.match(c);if(q){var u={};q[2].replace(e,function(w,v,x,y,A){var B=x||y||A||f.test(v)&&v||null,z=document.createElement("div");z.innerHTML=B;u[v]=z.textContent||z.innerText||B});return{tagName:q[1],U:u,Gb:!!q[3],length:q[0].length}}},chars:function(){var q=
k.indexOf("<");return{length:0<=q?q:k.length}}},t=function(){for(var q in n)if(n[q].test(k)){var u=r[q]();return u?(u.type=u.type||q,u.text=k.substr(0,u.length),k=k.slice(u.length),u):null}};l.Ce&&function(){var q=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,u=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,w=[];w.Le=function(){return this[this.length-1]};w.hd=function(z){var D=this.Le();return D&&D.tagName&&D.tagName.toUpperCase()===z.toUpperCase()};w.ug=
function(z){for(var D=0,H;H=this[D];D++)if(H.tagName===z)return!0;return!1};var v=function(z){z&&"startTag"===z.type&&(z.Gb=q.test(z.tagName)||z.Gb);return z},x=t,y=function(){k="</"+w.pop().tagName+">"+k},A={startTag:function(z){var D=z.tagName;"TR"===D.toUpperCase()&&w.hd("TABLE")?(k="<TBODY>"+k,B()):l.ki&&u.test(D)&&w.ug(D)?w.hd(D)?y():(k="</"+z.tagName+">"+k,B()):z.Gb||w.push(z)},endTag:function(z){w.Le()?l.Gg&&!w.hd(z.tagName)?y():w.pop():l.Gg&&(x(),B())}},B=function(){var z=k,D=v(x());k=z;if(D&&
A[D.type])A[D.type](D)};t=function(){B();return v(x())}}();return{append:function(q){k+=q},xh:t,ri:function(q){for(var u;(u=t())&&(!q[u.type]||!1!==q[u.type](u)););},clear:function(){var q=k;k="";return q},si:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.vi="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.ui=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.m=b;a.s=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var n="<"+m.tagName,r;for(r in m.U){var t=m.U[r];n+=
" "+r+'="'+(t?t.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return n+(m.Gb?"/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.i=function(k){var l={},m;for(m in k){var n=k[m];l[m]=n&&n.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var g in b)a.a=a.a||!b[g]&&g;je=a})();(function(){function a(){}function b(r){return void 0!==r&&null!==r}function c(r,t,q){var u,w=r&&r.length||0;for(u=0;u<w;u++)t.call(q,r[u],u)}function d(r,t,q){for(var u in r)r.hasOwnProperty(u)&&t.call(q,u,r[u])}function e(r,
t){d(t,function(q,u){r[q]=u});return r}function f(r,t){r=r||{};d(t,function(q,u){b(r[q])||(r[q]=u)});return r}function g(r){try{return m.call(r)}catch(q){var t=[];c(r,function(u){t.push(u)});return t}}var k={Xf:a,Yf:a,Zf:a,$f:a,hg:a,ig:function(r){return r},done:a,error:function(r){throw r;},Ah:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function r(q,u,w){var v="data-ps-"+u;if(2===arguments.length){var x=q.getAttribute(v);return b(x)?String(x):x}b(w)&&""!==w?q.setAttribute(v,
w):q.removeAttribute(v)}function t(q,u){var w=q.ownerDocument;e(this,{root:q,options:u,Hb:w.defaultView||w.parentWindow,Sa:w,qc:je("",{gg:!0}),Uc:[q],sd:"",td:w.createElement(q.nodeName),Db:[],Ia:[]});r(this.td,"proxyof",0)}t.prototype.write=function(){[].push.apply(this.Ia,arguments);for(var q;!this.Wb&&this.Ia.length;)q=this.Ia.shift(),"function"===typeof q?this.ng(q):this.Cd(q)};t.prototype.ng=function(q){var u={type:"function",value:q.name||q.toString()};this.od(u);q.call(this.Hb,this.Sa);this.Re(u)};
t.prototype.Cd=function(q){this.qc.append(q);for(var u,w=[],v,x;(u=this.qc.xh())&&!(v=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("script"):!1)&&!(x=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("style"):!1);)w.push(u);this.Wh(w);v&&this.Qg(u);x&&this.Rg(u)};t.prototype.Wh=function(q){var u=this.kg(q);u.qe&&(u.dd=this.sd+u.qe,this.sd+=u.vh,this.td.innerHTML=u.dd,this.Th())};t.prototype.kg=function(q){var u=this.Uc.length,w=[],v=[],x=[];c(q,function(y){w.push(y.text);if(y.U){if(!/^noscript$/i.test(y.tagName)){var A=
u++;v.push(y.text.replace(/(\/?>)/," data-ps-id="+A+" $1"));"ps-script"!==y.U.id&&"ps-style"!==y.U.id&&x.push("atomicTag"===y.type?"":"<"+y.tagName+" data-ps-proxyof="+A+(y.Gb?" />":">"))}}else v.push(y.text),x.push("endTag"===y.type?y.text:"")});return{wi:q,raw:w.join(""),qe:v.join(""),vh:x.join("")}};t.prototype.Th=function(){for(var q,u=[this.td];b(q=u.shift());){var w=1===q.nodeType;if(!w||!r(q,"proxyof")){w&&(this.Uc[r(q,"id")]=q,r(q,"id",null));var v=q.parentNode&&r(q.parentNode,"proxyof");
v&&this.Uc[v].appendChild(q)}u.unshift.apply(u,g(q.childNodes))}};t.prototype.Qg=function(q){var u=this.qc.clear();u&&this.Ia.unshift(u);q.src=q.U.src||q.U.ci;q.src&&this.Db.length?this.Wb=q:this.od(q);var w=this;this.Vh(q,function(){w.Re(q)})};t.prototype.Rg=function(q){var u=this.qc.clear();u&&this.Ia.unshift(u);q.type=q.U.type||q.U.TYPE||"text/css";this.Xh(q);u&&this.write()};t.prototype.Xh=function(q){var u=this.mg(q);this.Ug(u);q.content&&(u.styleSheet&&!u.sheet?u.styleSheet.cssText=q.content:
u.appendChild(this.Sa.createTextNode(q.content)))};t.prototype.mg=function(q){var u=this.Sa.createElement(q.tagName);u.setAttribute("type",q.type);d(q.U,function(w,v){u.setAttribute(w,v)});return u};t.prototype.Ug=function(q){this.Cd('<span id="ps-style"/>');var u=this.Sa.getElementById("ps-style");u.parentNode.replaceChild(q,u)};t.prototype.od=function(q){q.nh=this.Ia;this.Ia=[];this.Db.unshift(q)};t.prototype.Re=function(q){q!==this.Db[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.Db.shift(),this.write.apply(this,q.nh),!this.Db.length&&this.Wb&&(this.od(this.Wb),this.Wb=null))};t.prototype.Vh=function(q,u){var w=this.lg(q),v=this.Kh(w),x=this.options.Xf;q.src&&(w.src=q.src,this.Fh(w,v?x:function(){u();x()}));try{this.Tg(w),q.src&&!v||u()}catch(y){this.options.error(y),u()}};t.prototype.lg=function(q){var u=this.Sa.createElement(q.tagName);d(q.U,function(w,v){u.setAttribute(w,v)});q.content&&(u.text=q.content);return u};t.prototype.Tg=function(q){this.Cd('<span id="ps-script"/>');
var u=this.Sa.getElementById("ps-script");u.parentNode.replaceChild(q,u)};t.prototype.Fh=function(q,u){function w(){q=q.onload=q.onreadystatechange=q.onerror=null}var v=this.options.error;e(q,{onload:function(){w();u()},onreadystatechange:function(){/^(loaded|complete)$/.test(q.readyState)&&(w(),u())},onerror:function(){var x={message:"remote script failed "+q.src};w();v(x);u()}})};t.prototype.Kh=function(q){return!/^script$/i.test(q.nodeName)||!!(this.options.Ah&&q.src&&q.hasAttribute("async"))};
return t}();l.postscribe=function(){function r(){var v=u.shift(),x;v&&(x=v[v.length-1],x.Yf(),v.stream=t.apply(null,v),x.Zf())}function t(v,x,y){function A(H){H=y.ig(H);w.write(H);y.$f(H)}w=new n(v,y);w.id=q++;w.name=y.name||w.id;var B=v.ownerDocument,z={close:B.close,open:B.open,write:B.write,writeln:B.writeln};e(B,{close:a,open:a,write:function(){return A(g(arguments).join(""))},writeln:function(){return A(g(arguments).join("")+"\n")}});var D=w.Hb.onerror||a;w.Hb.onerror=function(H,M,O){y.error({ni:H+
" - "+M+":"+O});D.apply(w.Hb,arguments)};w.write(x,function(){e(B,z);w.Hb.onerror=D;y.done();w=null;r()});return w}var q=0,u=[],w=null;return e(function(v,x,y){"function"===typeof y&&(y={done:y});y=f(y,k);v=/^#/.test(v)?l.document.getElementById(v.substr(1)):v.mi?v[0]:v;var A=[v,x,y];v.qh={cancel:function(){A.stream?A.stream.abort():A[1]=a}};y.hg(A);u.push(A);w||r();return v.qh},{streams:{},oi:u,ei:n})}();ke=l.postscribe}})();function le(a){return""+a}
function me(a,b){var c=[];return c};var ne=function(a,b){var c=new db(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.a(d[e]);return b.apply(this,d)});c.m=!0;return c},oe=function(a,b){var c=new ib,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Da(e)?c.set(d,ne(a+"_"+d,e)):(Ea(e)||p(e)||"boolean"==typeof e)&&c.set(d,e)}c.m=!0;return c};var pe=function(a,b){F(this.i.a,["apiName:!string","message:?string"],arguments);var c={},d=new ib;return d=oe("AssertApiSubject",c)};var qe=function(a,b){F(this.i.a,["actual:?*","message:?string"],arguments);var c={},d=new ib;return d=oe("AssertThatSubject",c)};function re(a){return function(){for(var b=[],c=this.m,d=0;d<arguments.length;++d)b.push(qb(arguments[d],c));return pb(a.apply(null,b))}}var te=function(){for(var a=Math,b=se,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=re(a[e].bind(a)))}return c};var ue=function(a){var b;return b};var ve=function(a){var b;return b};var we=function(a){F(this.i.a,["uri:!string"],arguments);return encodeURI(a)};var xe=function(a){F(this.i.a,["uri:!string"],arguments);return encodeURIComponent(a)};var ye=function(a){F(this.i.a,["message:?string"],arguments);};var ze=function(a,b){F(this.i.a,["min:!number","max:!number"],arguments);return Ia(a,b)};var Ae=function(){return(new Date).getTime()};var Be=function(a,b,c){var d=a.m.a;if(!d)throw Error("Missing program state.");d.fg.apply(null,Array.prototype.slice.call(arguments,1))};var Ce=function(){Be(this,"read_container_data");var a=new ib;a.set("containerId",'GTM-9R9D');a.set("version",'624');a.set("environmentName",'');a.set("debugMode",Pd);a.set("previewMode",Rd);a.set("environmentMode",Qd);a.m=!0;return a};var De=function(a){return null===a?"null":a instanceof h?"array":a instanceof db?"function":typeof a};var Ee=function(a){function b(c){return function(d){try{return c(d)}catch(e){(Pd||Rd)&&a.call(this,e.message)}}}return{parse:b(function(c){return pb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(qb(c))})}};var Fe=function(a){return Pa(qb(a,this.m))};var Ge=function(a){return Number(qb(a,this.m))};var He=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var Ie=function(a,b,c){var d=null,e=!1;F(this.i.a,["tableObj:!List","keyColumnName:!string","valueColumnName:!string"],arguments);d=new ib;for(var f=0;f<a.length();f++){var g=a.get(f);g instanceof ib&&g.has(b)&&g.has(c)&&(d.set(g.get(b),g.get(c)),e=!0)}return e?d:null};var se="floor ceil round max min abs pow sqrt".split(" ");var Je=function(){var a={};return{Mg:function(b){return a.hasOwnProperty(b)?a[b]:void 0},Jh:function(b,c){a[b]=c},reset:function(){a={}}}},Ke=function(a,b){F(this.i.a,["apiName:!string","mock:?*"],arguments);};var Le=function(){this.a={}};Le.prototype.get=function(a,b){var c=this.a.hasOwnProperty(a)?this.a[a]:void 0;return c};Le.prototype.add=function(a,b,c){if(this.a.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";this.a[a]=c?void 0:Da(b)?ne(a,b):oe(a,b)};function Me(){var a={};return a};var I={fb:"_ee",Sc:"_syn",di:"_uei",Hc:"event_callback",Mb:"event_timeout",K:"gtag.config",ja:"allow_ad_personalization_signals",Ic:"restricted_data_processing",cb:"allow_google_signals",ka:"cookie_expires",Lb:"cookie_update",eb:"session_duration",ma:"user_properties",xa:"transport_url",O:"ads_data_redaction"};I.Ke=[I.ja,I.cb,I.Lb];I.Oe=[I.ka,I.Mb,I.eb];var E=window,K=document,Ne=navigator,Oe=K.currentScript&&K.currentScript.src,Pe=function(a,b){var c=E[a];E[a]=void 0===c?b:c;return E[a]},Qe=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Re=function(a,b,c){var d=K.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Qe(d,b);c&&(d.onerror=c);var e;if(null===oa)b:{var f=ma.document,g=f.querySelector&&f.querySelector("script[nonce]");
if(g){var k=g.nonce||g.getAttribute("nonce");if(k&&na.test(k)){oa=k;break b}}oa=""}e=oa;e&&d.setAttribute("nonce",e);var l=K.getElementsByTagName("script")[0]||K.body||K.head;l.parentNode.insertBefore(d,l);return d},Se=function(){if(Oe){var a=Oe.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Te=function(a,b){var c=K.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=K.body&&K.body.lastChild||
K.body||K.head;d.parentNode.insertBefore(c,d);Qe(c,b);void 0!==a&&(c.src=a);return c},Ue=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Ve=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},We=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},N=function(a){E.setTimeout(a,0)},Xe=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Ye=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Ze=function(a){var b=K.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},$e=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},af=function(a){Ne.sendBeacon&&Ne.sendBeacon(a)||Ue(a)},bf=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var cf={},R=function(a,b){cf[a]=cf[a]||[];cf[a][b]=!0},df=function(a){for(var b=[],c=cf[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var ef=[];function ff(){var a=Pe("google_tag_data",{});a.ics||(a.ics={entries:{},set:gf,update:hf,addListener:jf,notifyListeners:kf,active:!1});return a.ics}
function gf(a,b,c,d,e,f){var g=ff();g.active=!0;if(void 0!=b){var k=g.entries,l=k[a]||{},m=l.region,n=c&&p(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(n===e||(n===d?m!==e:!n&&!m)){var r=!!(f&&0<f&&void 0===l.update),t={region:n,initial:"granted"===b,update:l.update,quiet:r};k[a]=t;r&&E.setTimeout(function(){k[a]===t&&t.quiet&&(t.quiet=!1,lf(a),kf(),R("TAGGING",2))},f)}}}
function hf(a,b){var c=ff();c.active=!0;if(void 0!=b){var d=mf(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=mf(a);f.quiet?(f.quiet=!1,lf(a)):g!==d&&lf(a)}}function jf(a,b){ef.push({ue:a,Hg:b})}function lf(a){for(var b=0;b<ef.length;++b){var c=ef[b];Ga(c.ue)&&-1!==c.ue.indexOf(a)&&(c.Ve=!0)}}function kf(){for(var a=0;a<ef.length;++a){var b=ef[a];if(b.Ve){b.Ve=!1;try{b.Hg.call()}catch(c){}}}}
var mf=function(a){var b=ff().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},nf=function(a){return!(ff().entries[a]||{}).quiet},of=function(){return ff().active},pf=function(a,b){ff().addListener(a,b)},qf=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!nf(b[e]))return!0;return!1}if(c()){var d=!1;pf(b,function(){d||c()||(d=!0,a())})}else a()},rf=function(a,b){if(!1===mf(b)){var c=!1;pf([b],function(){!c&&mf(b)&&(a(),c=!0)})}};var sf=[I.s,I.J],tf=function(a){var b=a[I.Eh];b&&R("GTM",40);var c=a[I.Nh];c&&R("GTM",41);for(var d=Ga(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<sf.length;f++){var g=sf[f],k=a[sf[f]],l=d[e];ff().set(g,k,l,"US","US-WA",c)}},uf=function(a){for(var b=0;b<sf.length;b++){var c=sf[b],d=a[sf[b]];ff().update(c,d)}ff().notifyListeners()},vf=function(a){var b=mf(a);return void 0!=b?b:!0},wf=function(){for(var a=[],b=0;b<sf.length;b++){var c=mf(sf[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+
a.join("")},xf=function(a){rf(a,I.s)},yf=function(a,b){qf(a,b)};var Af=function(a){return zf?K.querySelectorAll(a):null},Bf=function(a,b){if(!zf)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!K.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Cf=!1;if(K.querySelectorAll)try{var Df=K.querySelectorAll(":root");Df&&1==Df.length&&Df[0]==K.documentElement&&(Cf=!0)}catch(a){}var zf=Cf;var Gd={},Rf=null,Sf=Math.random();Gd.B="GTM-9R9D";Gd.Rb="5r0";Gd.Sd="";var Tf={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},Uf="www.googletagmanager.com/gtm.js";
var Vf=Uf,Wf=null,Xf=null,Yf=null,Zf="//www.googletagmanager.com/a?id="+Gd.B+"&cv=624",$f={},ag={},bg=function(){var a=Rf.sequence||0;Rf.sequence=a+1;return a};
var cg=function(){return"&tc="+gd.filter(function(a){return a}).length},fg=function(){dg||(dg=E.setTimeout(eg,500))},eg=function(){dg&&(E.clearTimeout(dg),dg=void 0);void 0===gg||hg[gg]&&!ig&&!jg||(kg[gg]||lg.Zg()||0>=mg--?(R("GTM",1),kg[gg]=!0):(lg.yh(),Ue(ng()),hg[gg]=!0,og=pg=jg=ig=""))},ng=function(){var a=gg;if(void 0===a)return"";var b=df("GTM"),c=df("TAGGING");return[qg,hg[a]?"":"&es=1",rg[a],b?"&u="+b:"",c?"&ut="+c:"",cg(),ig,jg,pg,og,"&z=0"].join("")},sg=function(){return[Zf,"&v=3&t=t","&pid="+
Ia(),"&rv="+Gd.Rb].join("")},tg="0.005000">Math.random(),qg=sg(),ug=function(){qg=sg()},hg={},ig="",jg="",og="",pg="",gg=void 0,rg={},kg={},dg=void 0,lg=function(a,b){var c=0,d=0;return{Zg:function(){if(c<a)return!1;Ta()-d>=b&&(c=0);return c>=a},yh:function(){Ta()-d>=b&&(c=0);c++;d=Ta()}}}(2,1E3),mg=1E3,vg=function(a,b){if(tg&&!kg[a]&&gg!==a){eg();gg=a;og=ig="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";rg[a]="&e="+c+"&eid="+a;fg()}},wg=function(a,b,c){if(tg&&!kg[a]&&
b){a!==gg&&(eg(),gg=a);var d,e=String(b[sd.ya]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;ig=ig?ig+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var k=(id[g]?"1":"2")+d;og=og?og+"."+k:"&ti="+k;fg();2022<=ng().length&&eg()}},xg=function(a,b,c){if(tg&&!kg[a]){a!==gg&&(eg(),gg=a);var d=c+b;jg=jg?jg+
"."+d:"&epr="+d;fg();2022<=ng().length&&eg()}};var yg={},zg=new Ka,Ag={},Bg={},Eg={name:"dataLayer",set:function(a,b){G(bb(a,b),Ag);Cg()},get:function(a){return Dg(a,2)},reset:function(){zg=new Ka;Ag={};Cg()}},Dg=function(a,b){if(2!=b){var c=zg.get(a);if(tg){var d=Fg(a);c!==d&&R("GTM",5)}return c}return Fg(a)},Fg=function(a){var b=a.split("."),c=!1,d=void 0;return c?d:Gg(b)},Gg=function(a){for(var b=Ag,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Hg=function(a,b){Bg.hasOwnProperty(a)||(zg.set(a,b),G(bb(a,b),Ag),Cg())},Cg=function(a){Ma(Bg,function(b,c){zg.set(b,c);G(bb(b,void 0),Ag);G(bb(b,c),Ag);a&&delete Bg[b]})},Ig=function(a,b,c){yg[a]=yg[a]||{};var d=1!==c?Fg(b):zg.get(b);"array"===mb(d)||"object"===mb(d)?yg[a][b]=G(d):yg[a][b]=d},Jg=function(a,b){if(yg[a])return yg[a][b]},Kg=function(a,b){yg[a]&&delete yg[a][b]};var Ng=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Og=/:[0-9]+$/,Pg=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var k=f[g].split("=");if(decodeURIComponent(k[0]).replace(/\+/g," ")===b){var l=k.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},Sg=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Qg(a.protocol)||Qg(E.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
E.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||E.location.hostname).replace(Og,"").toLowerCase());return Rg(a,b,c,d,e)},Rg=function(a,b,c,d,e){var f,g=Qg(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Tg(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(Og,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||R("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=C(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Pg(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Qg=function(a){return a?a.replace(":",
"").toLowerCase():""},Tg=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},Ug=function(a){var b=K.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||R("TAGGING",1),c="/"+c);var d=b.hostname.replace(Og,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},Vg=function(a){function b(m){var n=m.split("=")[0];return 0>d.indexOf(n)?m:n+"=0"}function c(m){return m.split("&").map(b).filter(function(n){return void 0!=
n}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),e=Ug(a),f=a.split(/[?#]/)[0],g=e.search,k=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===k[0]&&(k=k.substring(1));g=c(g);k=c(k);""!==g&&(g="?"+g);""!==k&&(k="#"+k);var l=""+f+g+k;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};function Wg(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),k=g[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var Xg={},Yg=function(a){return void 0==Xg[a]?!1:Xg[a]};var $g=function(a,b,c,d){return Zg(d)?Wg(a,String(b||document.cookie),c):[]},ch=function(a,b,c,d,e){if(Zg(e)){var f=ah(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=bh(f,function(g){return g.Xb},b);if(1===f.length)return f[0].id;f=bh(f,function(g){return g.Bb},c);return f[0]?f[0].id:void 0}}};function dh(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=$g(b,f,!1,d).indexOf(c)}
var hh=function(a,b,c,d){function e(v,x,y){if(null==y)return delete k[x],v;k[x]=y;return v+"; "+x+"="+y}function f(v,x){if(null==x)return delete k[x],v;k[x]=!0;return v+"; "+x}if(!Zg(c.Ea))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=eh(b),g=a+"="+b);var k={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.hh);g=e(g,"samesite",
c.Ch);c.Gh&&(g=f(g,"secure"));g=f(g,c.flags);var m=c.domain;if("auto"===m){for(var n=fh(),r=void 0,t=!1,q=0;q<n.length;++q){var u="none"!==n[q]?n[q]:void 0,w=e(g,"domain",u);try{d&&d(a,k)}catch(v){r=v;continue}t=!0;if(!gh(u,c.path)&&dh(w,a,b,c.Ea))return 0}if(r&&!t)throw r;return 1}m&&"none"!==m&&(g=e(g,"domain",m));d&&d(a,k);return gh(m,c.path)?1:dh(g,a,b,c.Ea)?0:1},ih=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return hh(a,b,c)};
function bh(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var k=a[g],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function ah(a,b,c){for(var d=[],e=$g(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),k=g.shift();if(!b||-1!==b.indexOf(k)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),Xb:1*l[0]||1,Bb:1*l[1]||1}))}}return d}
var eh=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},jh=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,kh=/(^|\.)doubleclick\.net$/i,gh=function(a,b){return kh.test(document.location.hostname)||"/"===b&&jh.test(a)},fh=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;kh.test(e)||jh.test(e)||a.push("none");
return a},Zg=function(a){if(!Yg("gtag_cs_api")||!a||!of())return!0;if(!nf(a))return!1;var b=mf(a);return null==b?!0:!!b};var mh=function(){for(var a=Ne.userAgent+(K.cookie||"")+(K.referrer||""),b=a.length,c=E.history.length;0<c;)a+=c--^b++;var d=1,e,f,g;if(a)for(d=0,f=a.length-1;0<=f;f--)g=a.charCodeAt(f),d=(d<<6&268435455)+g+(g<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ta()/1E3)].join(".")},ph=function(a,b,c,d,e){var f=nh(b);return ch(a,f,oh(c),d,e)},qh=function(a,b,c,d){var e=""+nh(c),f=oh(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},nh=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},oh=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function rh(a,b,c){var d,e=a.zb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Ta())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var sh=["1"],th={},xh=function(a){var b=uh(a.prefix);th[b]||vh(b,a.path,a.domain)||(wh(b,mh(),a),vh(b,a.path,a.domain))};function wh(a,b,c){var d=qh(b,"1",c.domain,c.path),e=rh(c);e.Ea="ad_storage";ih(a,d,e)}function vh(a,b,c){var d=ph(a,b,c,sh,"ad_storage");d&&(th[a]=d);return d}function uh(a){return(a||"_gcl")+"_au"};function yh(){for(var a=zh,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Ah(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var zh,Bh;function Ch(a){zh=zh||Ah();Bh=Bh||yh();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),g=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|g>>4,n=(g&15)<<2|k>>6,r=k&63;e||(r=64,d||(n=64));b.push(zh[l],zh[m],zh[n],zh[r])}return b.join("")}
function Dh(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Bh[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}zh=zh||Ah();Bh=Bh||yh();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=k&&(c+=String.fromCharCode(g<<6&192|k)))}};var Eh;var Ih=function(){var a=Fh,b=Gh,c=Hh(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){Ve(K,"mousedown",d);Ve(K,"keyup",d);Ve(K,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Jh=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};Hh().decorators.push(f)},Kh=function(a,b,c){for(var d=Hh().decorators,e={},f=0;f<d.length;++f){var g=
d[f],k;if(k=!c||g.forms)a:{var l=g.domains,m=a,n=!!g.sameHost;if(l&&(n||m!==K.location.hostname))for(var r=0;r<l.length;r++)if(l[r]instanceof RegExp){if(l[r].test(m)){k=!0;break a}}else if(0<=m.indexOf(l[r])||n&&0<=l[r].indexOf(m)){k=!0;break a}k=!1}if(k){var t=g.placement;void 0==t&&(t=g.fragment?2:1);t===b&&Xa(e,g.callback())}}return e},Hh=function(){var a=Pe("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Lh=/(.*?)\*(.*?)\*(.*)/,Mh=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Nh=/^(?:www\.|m\.|amp\.)+/,Oh=/([^?#]+)(\?[^#]*)?(#.*)?/;function Ph(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var Rh=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Ch(String(d))))}var e=b.join("*");return["1",Qh(e),e].join("*")},Qh=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Eh)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,k=0;8>k;k++)g=
g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}Eh=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Eh[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Th=function(){return function(a){var b=Ug(E.location.href),c=b.search.replace("?",""),d=Pg(c,"_gl",!1,!0)||"";a.query=Sh(d)||{};var e=Sg(b,"fragment").match(Ph("_gl"));a.fragment=Sh(e&&e[3]||"")||{}}},Uh=function(a){var b=Th(),c=Hh();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(Xa(d,e.query),a&&Xa(d,e.fragment));return d},
Sh=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Lh.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var k=g[3],l;a:{for(var m=g[2],n=0;n<b;++n)if(m===Qh(k,n)){l=!0;break a}l=!1}if(l){for(var r={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)r[t[q]]=Dh(t[q+1]);return r}}}}catch(u){}};
function Vh(a,b,c,d){function e(n){var r=n,t=Ph(a).exec(r),q=r;if(t){var u=t[2],w=t[4];q=t[1];w&&(q=q+u+w)}n=q;var v=n.charAt(n.length-1);n&&"&"!==v&&(n+="&");return n+m}d=void 0===d?!1:d;var f=Oh.exec(c);if(!f)return"";var g=f[1],k=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+g+k+l}
function Wh(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Kh(b,1,c),e=Kh(b,2,c),f=Kh(b,3,c);if(Ya(d)){var g=Rh(d);c?Xh("_gl",g,a):Yh("_gl",g,a,!1)}if(!c&&Ya(e)){var k=Rh(e);Yh("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,n=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){Yh(m,n,r,void 0);break a}if("form"===r.tagName.toLowerCase()){Xh(m,n,r);break a}}"string"==typeof r&&Vh(m,n,r,void 0)}}
function Yh(a,b,c,d){if(c.href){var e=Vh(a,b,c.href,void 0===d?!1:d);Ng.test(e)&&(c.href=e)}}
function Xh(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var k=e[g];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=K.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=Vh(a,b,c.action);Ng.test(m)&&(c.action=m)}}}
var Fh=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Wh(e,e.hostname)}}catch(g){}},Gh=function(a){try{if(a.action){var b=Sg(Ug(a.action),"host");Wh(a,b)}}catch(c){}},Zh=function(a,b,c,d){Ih();Jh(a,b,"fragment"===c?2:1,!!d,!1)},$h=function(a,b){Ih();Jh(a,[Rg(E.location,"host",!0)],b,!0,!0)},ai=function(){var a=K.location.hostname,b=Mh.exec(K.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Nh,""),l=e.replace(Nh,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},bi=function(a,b){return!1===a?!1:a||b||ai()};var ci=/^\w+$/,di=/^[\w-]+$/,ei=/^~?[\w-]+$/,fi={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},gi=function(){if(!Yg("gtag_cs_api")||!of())return!0;var a=mf("ad_storage");return null==a?!0:!!a},hi=function(a,b){nf("ad_storage")?gi()?a():rf(a,"ad_storage"):b?R("TAGGING",3):qf(function(){hi(a,!0)},["ad_storage"])},ki=function(a){var b=[];if(!K.cookie)return b;var c=$g(a,K.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=ii(c[d]);e&&-1===C(b,e)&&b.push(e)}return ji(b)};
function li(a){return a&&"string"==typeof a&&a.match(ci)?a:"_gcl"}
var ni=function(){var a=Ug(E.location.href),b=Sg(a,"query",!1,void 0,"gclid"),c=Sg(a,"query",!1,void 0,"gclsrc"),d=Sg(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Pg(e,"gclid",!1,void 0);c=c||Pg(e,"gclsrc",!1,void 0)}return mi(b,c,d)},mi=function(a,b,c){var d={},e=function(f,g){d[g]||(d[g]=[]);d[g].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(di))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":Yg("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},pi=function(a){var b=ni();hi(function(){return oi(b,a)})};
function oi(a,b,c){function d(m,n){var r=qi(m,e);r&&(ih(r,n,f),g=!0)}b=b||{};var e=li(b.prefix);c=c||Ta();var f=rh(b,c,!0);f.Ea="ad_storage";var g=!1,k=Math.round(c/1E3),l=function(m){return["GCL",k,m].join(".")};a.aw&&(!0===b.xi?d("aw",l("~"+a.aw[0])):d("aw",l(a.aw[0])));a.dc&&d("dc",l(a.dc[0]));a.gf&&d("gf",l(a.gf[0]));a.ha&&d("ha",l(a.ha[0]));a.gp&&d("gp",l(a.gp[0]));return g}
var si=function(a,b){var c=Uh(!0);hi(function(){for(var d=li(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==fi[f]){var g=qi(f,d),k=c[g];if(k){var l=Math.min(ri(k),Ta()),m;b:{for(var n=l,r=$g(g,K.cookie,void 0,"ad_storage"),t=0;t<r.length;++t)if(ri(r[t])>n){m=!0;break b}m=!1}if(!m){var q=rh(b,l,!0);q.Ea="ad_storage";ih(g,k,q)}}}}oi(mi(c.gclid,c.gclsrc),b)})},qi=function(a,b){var c=fi[a];if(void 0!==c)return b+c},ri=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function ii(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var ti=function(a,b,c,d,e){if(Ga(b)){var f=li(e),g=function(){for(var k={},l=0;l<a.length;++l){var m=qi(a[l],f);if(m){var n=$g(m,K.cookie,void 0,"ad_storage");n.length&&(k[m]=n.sort()[n.length-1])}}return k};hi(function(){Zh(g,b,c,d)})}},ji=function(a){return a.filter(function(b){return ei.test(b)})},ui=function(a,b){for(var c=li(b.prefix),d={},e=0;e<a.length;e++)fi[a[e]]&&(d[a[e]]=fi[a[e]]);hi(function(){Ma(d,function(f,g){var k=$g(c+g,K.cookie,void 0,"ad_storage");if(k.length){var l=k[0],m=ri(l),
n={};n[f]=[ii(l)];oi(n,b,m)}})})};function vi(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var wi=function(){function a(e,f,g){g&&(e[f]=g)}var b=["aw","dc"];if(of()){var c=ni();if(vi(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);$h(function(){return d},3);$h(function(){var e={};return e._up="1",e},1)}}},xi=function(){var a;if(gi()){for(var b=[],c=K.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({zd:f[1],value:f[2]})}var g={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(g[b[k].zd]||(g[b[k].zd]=[]),g[b[k].zd].push({timestamp:l[1],Jg:l[2]}))}a=g}else a={};return a};var yi=/^\d+\.fls\.doubleclick\.net$/;function zi(a,b){nf(I.s)?vf(I.s)?a():xf(a):b?R("GTM",42):yf(function(){zi(a,!0)},[I.s])}function Ai(a){var b=Ug(E.location.href),c=Sg(b,"host",!1);if(c&&c.match(yi)){var d=Sg(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Bi(a,b,c){if("aw"==a||"dc"==a){var d=Ai("gcl"+a);if(d)return d.split(".")}var e=li(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!vf(I.s)&&c,g;g=ni()[a]||[];if(0<g.length)return f?["0"]:g}var k=qi(a,e);return k?ki(k):[]}
var Ci=function(a){var b=Ai("gac");if(b)return!vf(I.s)&&a?"0":decodeURIComponent(b);var c=xi(),d=[];Ma(c,function(e,f){for(var g=[],k=0;k<f.length;k++)g.push(f[k].Jg);g=ji(g);g.length&&d.push(e+":"+g.join(","))});return d.join(";")},Di=function(a,b){var c=ni().dc||[];zi(function(){xh(b);var d=th[uh(b.prefix)],e=!1;if(d&&0<c.length){var f=Rf.joined_au=Rf.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var k=0;k<c.length;k++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[k]+"&auiddc="+d;af(l);e=f[g]=
!0}}null==a&&(a=e);if(a&&d){var m=uh(b.prefix),n=th[m];n&&wh(m,n,b)}})};var Ei=/[A-Z]+/,Fi=/\s/,Gi=function(a){if(p(a)&&(a=Sa(a),!Fi.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Ei.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],C:d}}}}},Ii=function(a){for(var b={},c=0;c<a.length;++c){var d=Gi(a[c]);d&&(b[d.id]=d)}Hi(b);var e=[];Ma(b,function(f,g){e.push(g)});return e};
function Hi(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.C[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Ji=function(){var a=!1;return a};var Li=function(a,b,c,d){return(2===Ki()||d||"http:"!=E.location.protocol?a:b)+c},Ki=function(){var a=Se(),b;if(1===a)a:{var c=Vf;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=K.getElementsByTagName("script"),k=0;k<g.length&&100>k;k++){var l=g[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var Zi=function(a){return vf(I.s)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=Vg(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})};var $i=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),aj={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},bj={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},cj="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var ej=function(a){var b=Dg("gtm.whitelist");b&&R("GTM",9);var c=b&&Za(Ra(b),aj),d=Dg("gtm.blacklist");d||(d=Dg("tagTypeBlacklist"))&&R("GTM",3);d?
R("GTM",8):d=[];dj()&&(d=Ra(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=C(Ra(d),"google")&&R("GTM",2);var e=d&&Za(Ra(d),bj),f={};return function(g){var k=g&&g[sd.ya];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=ag[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>C(c,k))if(l&&0<l.length)for(var r=0;r<
l.length;r++){if(0>C(c,l[r])){R("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var q=0<=C(e,k);if(q)t=q;else{var u=La(e,l||[]);u&&R("GTM",10);t=u}}var w=!m||t;w||!(0<=C(l,"sandboxedScripts"))||c&&-1!==C(c,"sandboxedScripts")||(w=La(e,cj));return f[k]=w}},dj=function(){return $i.test(E.location&&E.location.hostname)};var fj={vg:function(a,b){b[sd.Jd]&&"string"===typeof a&&(a=1==b[sd.Jd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(sd.Ld)&&null===a&&(a=b[sd.Ld]);b.hasOwnProperty(sd.Nd)&&void 0===a&&(a=b[sd.Nd]);b.hasOwnProperty(sd.Md)&&!0===a&&(a=b[sd.Md]);b.hasOwnProperty(sd.Kd)&&!1===a&&(a=b[sd.Kd]);return a}};var gj={active:!0,isWhitelisted:function(){return!0}},hj=function(a){var b=Rf.zones;!b&&a&&(b=Rf.zones=a());return b};var ij=function(){};var jj=!1,kj=0,lj=[];function mj(a){if(!jj){var b=K.createEventObject,c="complete"==K.readyState,d="interactive"==K.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){jj=!0;for(var e=0;e<lj.length;e++)N(lj[e])}lj.push=function(){for(var f=0;f<arguments.length;f++)N(arguments[f]);return 0}}}function nj(){if(!jj&&140>kj){kj++;try{K.documentElement.doScroll("left"),mj()}catch(a){E.setTimeout(nj,50)}}}var oj=function(a){jj?a():lj.push(a)};var pj={},qj={},rj=function(a,b,c,d){if(!qj[a]||Tf[b]||"__zone"===b)return-1;var e={};ob(d)&&(e=G(d,e));e.id=c;e.status="timeout";return qj[a].tags.push(e)-1},sj=function(a,b,c,d){if(qj[a]){var e=qj[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function tj(a){for(var b=pj[a]||[],c=0;c<b.length;c++)b[c]();pj[a]={push:function(d){d(Gd.B,qj[a])}}}
var wj=function(a,b,c){qj[a]={tags:[]};Da(b)&&uj(a,b);c&&E.setTimeout(function(){return tj(a)},Number(c));return vj(a)},uj=function(a,b){pj[a]=pj[a]||[];pj[a].push(Wa(function(){return N(function(){b(Gd.B,qj[a])})}))};function vj(a){var b=0,c=0,d=!1;return{add:function(){c++;return Wa(function(){b++;d&&b>=c&&tj(a)})},eg:function(){d=!0;b>=c&&tj(a)}}};var xj=function(){function a(d){return!Ea(d)||0>d?0:d}if(!Rf._li&&E.performance&&E.performance.timing){var b=E.performance.timing.navigationStart,c=Ea(Eg.get("gtm.start"))?Eg.get("gtm.start"):0;Rf._li={cst:a(c-b),cbt:a(Xf-b)}}};var Bj={},Cj=function(){return E.GoogleAnalyticsObject&&E[E.GoogleAnalyticsObject]},Dj=!1;
var Ej=function(a){E.GoogleAnalyticsObject||(E.GoogleAnalyticsObject=a||"ga");var b=E.GoogleAnalyticsObject;if(E[b])E.hasOwnProperty(b)||R("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);E[b]=c}xj();return E[b]},Fj=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Cj();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Hj=function(a){},Gj=function(){return E.GoogleAnalyticsObject||"ga"};var Nj=function(){return!1},Oj=function(){var a={};return function(b,c,d){}};function Pj(a,b,c,d){var e=gd[a],f=Qj(a,b,c,d);if(!f)return null;var g=od(e[sd.ae],c,[]);if(g&&g.length){var k=g[0];f=Pj(k.index,{F:f,D:1===k.Ae?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Qj(a,b,c,d){function e(){if(f[sd.zf])k();else{var v=pd(f,c,[]),x=rj(c.id,String(f[sd.ya]),Number(f[sd.ce]),v[sd.Af]),y=!1;v.vtp_gtmOnSuccess=function(){if(!y){y=!0;var z=Ta()-B;wg(c.id,gd[a],"5");sj(c.id,x,"success",z);g()}};v.vtp_gtmOnFailure=function(){if(!y){y=!0;var z=Ta()-B;wg(c.id,gd[a],"6");sj(c.id,x,"failure",z);k()}};v.vtp_gtmTagId=f.tag_id;
v.vtp_gtmEventId=c.id;wg(c.id,f,"1");var A=function(){var z=Ta()-B;wg(c.id,f,"7");sj(c.id,x,"exception",z);y||(y=!0,k())};var B=Ta();try{nd(v,c)}catch(z){A(z)}}}var f=gd[a],g=b.F,k=b.D,l=b.terminate;if(c.fd(f))return null;var m=od(f[sd.de],c,[]);if(m&&m.length){var n=m[0],r=Pj(n.index,{F:g,D:k,terminate:l},c,d);if(!r)return null;g=r;k=2===n.Ae?l:r}if(f[sd.Td]||f[sd.Ef]){var t=f[sd.Td]?hd:c.Lh,q=g,u=k;if(!t[a]){e=Wa(e);var w=Rj(a,t,e);g=w.F;k=w.D}return function(){t[a](q,u)}}return e}
function Rj(a,b,c){var d=[],e=[];b[a]=Sj(d,e,c);return{F:function(){b[a]=Tj;for(var f=0;f<d.length;f++)d[f]()},D:function(){b[a]=Uj;for(var f=0;f<e.length;f++)e[f]()}}}function Sj(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Tj(a){a()}function Uj(a,b){b()};var Xj=function(a,b){for(var c=[],d=0;d<gd.length;d++)if(a.Ab[d]){var e=gd[d];var f=b.add();try{var g=Pj(d,{F:f,D:f,terminate:f},a,d);g?c.push({cf:d,We:qd(e),$b:g}):(Vj(d,a),f())}catch(l){f()}}b.eg();c.sort(Wj);for(var k=0;k<c.length;k++)c[k].$b();return 0<c.length};function Wj(a,b){var c,d=b.We,e=a.We;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.cf,k=b.cf;f=g>k?1:g<k?-1:0}return f}
function Vj(a,b){if(!tg)return;var c=function(d){var e=b.fd(gd[d])?"3":"4",f=od(gd[d][sd.ae],b,[]);f&&f.length&&c(f[0].index);wg(b.id,gd[d],e);var g=od(gd[d][sd.de],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var Yj=!1,Zj=function(a,b,c,d,e){if("gtm.js"==b){if(Yj)return!1;Yj=!0}vg(a,b);var f=wj(a,d,e);Ig(a,"event",1);Ig(a,"ecommerce",1);Ig(a,"gtm");var g={id:a,name:b,fd:ej(c),Ab:[],Lh:[],Ne:function(){R("GTM",6)}};g.Ab=Cd(g);var k=Xj(g,f);"gtm.js"!==b&&"gtm.sync"!==b||Hj(Gd.B);if(!k)return k;for(var l=0;l<g.Ab.length;l++)if(g.Ab[l]){var m=gd[l];if(m&&!Tf[String(m[sd.ya])])return!0}return!1};function bk(a,b){}function ck(a,b){return dk()?bk(a,b):void 0}
function dk(){var a=!1;return a};var ek=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.a={};this.globalConfig={};this.F=function(){};this.D=function(){};this.eventId=void 0},fk=function(a){var b=new ek;b.eventModel=a;return b},gk=function(a,b){a.targetConfig=b;return a},hk=function(a,b){a.containerConfig=b;return a},ik=function(a,b){a.a=b;return a},jk=function(a,b){a.globalConfig=b;return a},kk=function(a,b){a.F=b;return a},lk=function(a,b){a.D=b;return a};
ek.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.a[a])return this.a[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var mk=function(a){function b(e){Ma(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Ma(c,function(e){d.push(e)});return d};var nk;if(3===Gd.Rb.length)nk="g";else{var ok="G";nk=ok}
var pk={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:nk,OPT:"o"},qk=function(a){var b=Gd.B.split("-"),c=b[0].toUpperCase(),d=pk[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Gd.Rb.length){var g="w";f="2"+g}else f="";return f+d+Gd.Rb+e};function rk(){var a=!1;a=of();return a}
function sk(a,b,c){function d(r){var t;Rf.reported_gclid||(Rf.reported_gclid={});t=Rf.reported_gclid;var q=f+(r?"gcu":"gcs");if(!t[q]){t[q]=!0;var u=[],w=function(B,z){z&&u.push(B+"="+encodeURIComponent(z))},v="https://www.google.com";if(of()){var x=vf(I.s);w("gcs",wf());r&&w("gcu","1");w("rnd",n);if((!f||g&&"aw.ds"!==g)&&vf(I.s)){var y=ki("_gcl_aw");w("gclaw",y.join("."))}w("url",String(E.location).split(/[?#]/)[0]);w("dclid",tk(b,k));!x&&b&&(v="https://pagead2.googlesyndication.com")}
w("gclid",tk(b,f));w("gclsrc",g);w("gtm",qk(!c));var A=v+"/pagead/landing?"+u.join("&");af(A)}}var e=ni(),f=e.gclid||"",g=e.gclsrc,k=e.dclid||"",l=!a&&(!f||g&&"aw.ds"!==g?!1:!0),m=rk();if(l||m){var n=""+mh();m?yf(function(){d();vf(I.s)||xf(function(){return d(!0)})},[I.s]):d()}}
function tk(a,b){var c=a&&!vf(I.s);if(b&&c)return"0";return b}
var Dk=function(a){return!(void 0===a||null===a||0===(a+"").length)},Ek=function(a,b){var c;if(2===b.ba)return a("ord",Ia(1E11,1E13)),!0;if(3===b.ba)return a("ord","1"),a("num",Ia(1E11,1E13)),!0;if(4===b.ba)return Dk(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.ba)c="1";else if(6===b.ba)c=b.ud;else return!1;Dk(c)&&a("qty",c);Dk(b.Vb)&&a("cost",b.Vb);Dk(b.transactionId)&&a("ord",b.transactionId);return!0},Gk=function(a,b,c){function d(A,B,z){r.hasOwnProperty(A)||(B=String(B),n.push(";"+A+"="+(z?
B:Fk(B))))}var e=a.Zc,f=a.xd,g=a.protocol;g+=f?"//"+e+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";var k=";",l=!0;l=vf(I.s);var m=!l&&a.Cb;m&&(g="https://ade.googlesyndication.com/ddm/activity",k="/",f=!1);var n=[k,"src="+Fk(e),";type="+Fk(a.bd),";cat="+Fk(a.rb)],r=a.Ag||{};Ma(r,function(A,B){n.push(";"+Fk(A)+"="+Fk(B+""))});if(Ek(d,a)){Dk(a.Cc)&&d("u",a.Cc);Dk(a.Bc)&&d("tran",a.Bc);
d("gtm",qk());of()&&(d("gcs",wf()),c&&d("gcu","1"));!1===a.ag&&d("npa","1");if(a.Yc){var t=void 0===a.Cb?!0:!!a.Cb,q=Bi("dc",a.Qa,t);q&&q.length&&d("gcldc",q.join("."));var u=Bi("aw",a.Qa,t);u&&u.length&&d("gclaw",u.join("."));var w=Ci(t);w&&d("gac",w);xh({prefix:a.Qa,
zb:a.xg,domain:a.wg,flags:a.hi});var v=th[uh(a.Qa)];v&&d("auiddc",v)}Dk(a.qd)&&d("prd",a.qd,!0);Ma(a.Bd,function(A,B){d(A,B)});n.push(b||"");if(Dk(a.oc)){var x=a.oc||"";m&&(x=Vg(x));d("~oref",x)}var y=g+n.join("")+"?";f?Te(y,a.F):Ue(y,a.F,a.D)}else N(a.D)},Fk=encodeURIComponent,Hk=function(a,b){var c=!1;c=!0;c&&of()?yf(function(){Gk(a,b);vf(I.s)||
xf(function(){Gk(a,b,!0)})},[I.s]):Gk(a,b)};var xl={},yl=["G","GP"];xl.ef="";var zl=xl.ef.split(",");function Al(){var a=Rf;return a.gcq=a.gcq||new Bl}
var Cl=function(a,b,c){Al().register(a,b,c)},Dl=function(a,b,c,d){Al().push("event",[b,a],c,d)},El=function(a,b){Al().push("config",[a],b)},Fl={},Gl=function(a){return!0},Hl=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.a=!1},Il=function(a,b,c,d,e){this.type=a;this.m=b;this.da=c||"";
this.a=d;this.i=e},Bl=function(){this.m={};this.i={};this.a=[]},Jl=function(a,b){var c=Gi(b);return a.m[c.containerId]=a.m[c.containerId]||new Hl},Kl=function(a,b,c){if(b){var d=Gi(b);if(d&&1===Jl(a,b).status&&Gl(d.prefix)){Jl(a,b).status=2;var e={};tg&&(e.timeoutId=E.setTimeout(function(){R("GTM",38);fg()},3E3));a.push("require",[e],d.containerId);Fl[d.containerId]=Ta();if(Ji()){}else{var g="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",k=("http:"!=E.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=ck(c,g)||k;Re(l)}}}},Ll=function(a,b,c,d){if(d.da){var e=Jl(a,d.da),
f=e.m;if(f){var g=G(c),k=G(e.targetConfig[d.da]),l=G(e.containerConfig),m=G(e.i),n=G(a.i),r=Dg("gtm.uniqueEventId"),t=Gi(d.da).prefix,q=lk(kk(jk(ik(hk(gk(fk(g),k),l),m),n),function(){xg(r,t,"2");}),function(){xg(r,t,"3");});try{xg(r,t,"1");f(d.da,b,d.m,q)}catch(u){
xg(r,t,"4");}}}};
Bl.prototype.register=function(a,b,c){if(3!==Jl(this,a).status){Jl(this,a).m=b;Jl(this,a).status=3;c&&(Jl(this,a).i=c);var d=Gi(a),e=Fl[d.containerId];if(void 0!==e){var f=Rf[d.containerId].bootstrap,g=d.prefix.toUpperCase();Rf[d.containerId]._spx&&(g=g.toLowerCase());var k=Dg("gtm.uniqueEventId"),l=g,m=Ta()-f;if(tg&&!kg[k]){k!==gg&&(eg(),gg=k);var n=l+"."+Math.floor(f-e)+"."+Math.floor(m);pg=pg?pg+","+n:"&cl="+n}delete Fl[d.containerId]}this.flush()}};
Bl.prototype.push=function(a,b,c,d){var e=Math.floor(Ta()/1E3);Kl(this,c,b[0][I.xa]||this.i[I.xa]);this.a.push(new Il(a,e,c,b,d));d||this.flush()};
Bl.prototype.flush=function(a){for(var b=this;this.a.length;){var c=this.a[0];if(c.i)c.i=!1,this.a.push(c);else switch(c.type){case "require":if(3!==Jl(this,c.da).status&&!a)return;tg&&E.clearTimeout(c.a[0].timeoutId);break;case "set":Ma(c.a[0],function(l,m){G(bb(l,m),b.i)});break;case "config":var d=c.a[0],e=!!d[I.wc];delete d[I.wc];var f=Jl(this,c.da),g=Gi(c.da),k=g.containerId===g.id;e||(k?f.containerConfig={}:f.targetConfig[c.da]={});f.a&&e||Ll(this,I.K,d,c);f.a=!0;delete d[I.fb];k?G(d,f.containerConfig):
G(d,f.targetConfig[c.da]);break;case "event":Ll(this,c.a[1],c.a[0],c)}this.a.shift()}};var Ml=function(a,b){return!0};var Nl=function(a,b){var c;F(this.i.a,["path:!string"],[a]);Be(this,"access_globals","execute",a);for(var d=a.split("."),e=E,f=e[d[0]],g=1;f&&g<d.length;g++)e=f,f=f[d[g]];if("function"!==mb(f))return;for(var k=[],l=1;l<arguments.length;l++)k.push(qb(arguments[l],this.m));c=pb((0,this.m.P)(f,e,k),this.m);return c};var Ol=function(a){};var Pl=function(a){var b;F(this.i.a,["path:!string"],arguments);Be(this,"access_globals","read",a);var c=a.split("."),d=E,e;for(e=0;e<c.length-1;e++)if(d=d[c[e]],null==d)return;b=d[c[e]];return pb(b,this.m)};var Ql=function(a,b){var c=null;F(this.i.a,["functionPath:!string","arrayPath:!string"],arguments);Be(this,"access_globals","readwrite",a);Be(this,"access_globals","readwrite",b);var d=a.split("."),e=ab(d),f=d[d.length-1];if(void 0===e)throw Error("Path "+a+" does not exist.");var g=e[f];if(g&&!Da(g))return null;if(g)return pb(g,this.m);var k;g=function(){if(!Da(k.push))throw Error("Object at "+b+" in window is not an array.");k.push.call(k,
arguments)};e[f]=g;var l=b.split("."),m=ab(l),n=l[l.length-1];if(void 0===m)throw Error("Path "+l+" does not exist.");k=m[n];void 0===k&&(k=[],m[n]=k);c=function(){g.apply(g,Array.prototype.slice.call(arguments,0))};return pb(c,this.m)};var Rl=function(a){var b;F(this.i.a,["path:!string"],arguments);Be(this,"access_globals","readwrite",a);var c=a.split("."),d=ab(c),e=c[c.length-1];if(void 0===d)throw Error("Path "+a+" does not exist.");var f=d[e];void 0===f&&(f=[],d[e]=f);b=function(){if(!Da(f.push))throw Error("Object at "+a+" in window is not an array.");f.push.apply(f,Array.prototype.slice.call(arguments,0))};return pb(b,this.m)};var Sl=function(a){var b;return b};var Tl=function(a,b){b=void 0===b?!0:b;var c;return c};var Ul=function(a,b){var c;return c};var Vl=function(a,b){var c;return c};var Wl=function(a){var b="";return b};var Xl=function(a){var b="";return b};var Yl=function(a,b){};var Zl={},$l=function(a,b,c,d){F(this.i.a,["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);Be(this,"inject_script",a);var e=this.m,f=function(){b instanceof db&&b.Fa(e)},g=function(){c instanceof db&&c.Fa(e)};if(!d){Re(a,f,g);return}var k=d;Zl[k]?(Zl[k].onSuccess.push(f),Zl[k].onFailure.push(g)):(Zl[k]={onSuccess:[f],onFailure:[g]},f=function(){for(var l=Zl[k].onSuccess,m=0;m<l.length;m++)N(l[m]);l.push=function(n){N(n);
return 0}},g=function(){for(var l=Zl[k].onFailure,m=0;m<l.length;m++)N(l[m]);Zl[k]=null},Re(a,f,g));};var am=function(){return!1},bm={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var cm=function(){};var dm=function(a,b){var c=!1;return c};var em=function(a,b,c){};var fm=function(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};var gm=function(a,b,c){F(this.i.a,["path:!string","value:?*","overrideExisting:?boolean"],arguments);Be(this,"access_globals","readwrite",a);var d=a.split("."),e=E,f;for(f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e)return!1;if(void 0===e[d[f]]||c)return e[d[f]]=qb(b,this.m),!0;return!1};var hm=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};var im=function(a,b,c){var d=this;};var jm={},km={};jm.getItem=function(a){var b=null;return b};
jm.setItem=function(a,b){};
jm.removeItem=function(a){};jm.clear=function(){};var lm=function(a){var b;return b};function mm(a){}
function nm(a,b){var c;return pb(c,this.m)}function om(){var a="";return a}
function pm(){var a="";return a}
var Ec=function(){var a=new Le;Ji()?(a.add("injectHiddenIframe",Ca),a.add("injectScript",Ca)):(a.add("injectHiddenIframe",Yl),a.add("injectScript",$l));var b=em;a.add("Math",te());a.add("TestHelper",Me());a.add("addEventCallback",mm);a.add("aliasInWindow",Ml);a.add("assertApi",pe);a.add("assertThat",qe);a.add("callInWindow",
Nl);a.add("callLater",Ol);a.add("copyFromDataLayer",nm);a.add("copyFromWindow",Pl);a.add("createArgumentsQueue",Ql);a.add("createQueue",Rl);a.add("decodeUri",ue);a.add("decodeUriComponent",ve);a.add("encodeUri",we);a.add("encodeUriComponent",xe);a.add("fail",ye);a.add("fromBase64",Sl,!("atob"in E));a.add("generateRandom",ze);a.add("getContainerVersion",Ce);a.add("getCookieValues",Tl);a.add("getQueryParameters",Ul);a.add("getReferrerQueryParameters",Vl);a.add("getReferrerUrl",Wl);a.add("getTimestamp",
Ae);a.add("getType",De);a.add("getUrl",Xl);a.add("localStorage",bm,!am());a.add("logToConsole",cm);a.add("makeInteger",Fe);a.add("makeNumber",Ge);a.add("makeString",He);a.add("makeTableMap",Ie);a.add("mock",Ke);a.add("queryPermission",dm);a.add("readCharacterSet",om);a.add("readTitle",pm);a.add("sendPixel",b);a.add("setCookie",fm);a.add("setInWindow",gm);a.add("sha256",im);a.add("toBase64",lm,!("btoa"in E));return function(c){var d;if(a.a.hasOwnProperty(c))d=a.get(c,this);else throw Error(c+" is not a valid API name.");return d}};var Cc,Kd;
function qm(){var a=data.runtime||[],b=data.runtime_lines;Cc=new Bc;rm();cd=function(e,f,g){sm(f);var k=new ib;Ma(f,function(q,u){k.set(q,pb(u))});Cc.a.a.o=yd();var l={fg:Ld(e),eventId:void 0!==g?g.id:void 0,Zb:e,log:function(){}};if(Nj()){var m=Oj(),n=void 0,r=void 0;l.fa={i:{},a:function(q,u,w){1===u&&(n=q);7===u&&(r=w);m(q,u,w)},m:Je()};l.log=function(q,u){if(n){var w=Array.prototype.slice.call(arguments,1);m(n,4,{level:q,source:r,message:w})}}}var t=Dc(l,[e,k]);Cc.a.a.o=void 0;t instanceof pa&&
"return"===t.a&&(t=t.i);return qb(t)};Fc();for(var c=0;c<a.length;c++){var d=a[c];if(!Ga(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&ud(d,b[c]);Cc.$b(d)}}function sm(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Da(b)&&(a.gtmOnSuccess=function(){N(b)});Da(c)&&(a.gtmOnFailure=function(){N(c)})}
function rm(){var a=Cc;Rf.SANDBOXED_JS_SEMAPHORE=Rf.SANDBOXED_JS_SEMAPHORE||0;Gc(a,function(b,c,d){Rf.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{Rf.SANDBOXED_JS_SEMAPHORE--}})}function tm(a){void 0!==a&&Ma(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");ag[e]=ag[e]||[];ag[e].push(b)}})};var um=["HA","GF","GP","G"],vm="G".split(/,/);vm.push("DC");vm.push("UA");vm.push("AW");var wm=!1;
wm=!0;var xm=null,ym={},zm={},Am;function Bm(a,b){var c={event:a};b&&(c.eventModel=G(b),b[I.Hc]&&(c.eventCallback=b[I.Hc]),b[I.Mb]&&(c.eventTimeout=b[I.Mb]));return c}
var Gm={config:function(a){},event:function(a){var b=a[1];if(p(b)&&!(3<a.length)){var c;if(2<a.length){if(!ob(a[2])&&void 0!=a[2])return;c=a[2]}var d=Bm(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=Kd.i;d.a[b]?d.a[b].push(c):d.a[b]=[c]}},set:function(a){var b;
2==a.length&&ob(a[1])?b=G(a[1]):3==a.length&&p(a[1])&&(b={},ob(a[2])||Ga(a[2])?b[a[1]]=G(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}};var Hm={policy:!0};var Im=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Km=function(a){var b=Jm(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Lm=!1,Mm=[];function Nm(){if(!Lm){Lm=!0;for(var a=0;a<Mm.length;a++)N(Mm[a])}}var Om=function(a){Lm?N(a):Mm.push(a)};var en=function(a){if(dn(a))return a;this.a=a};en.prototype.Pg=function(){return this.a};var dn=function(a){return!a||"object"!==mb(a)||ob(a)?!1:"getUntrustedUpdateValue"in a};en.prototype.getUntrustedUpdateValue=en.prototype.Pg;var fn=[],gn=!1,hn=function(a){return E["dataLayer"].push(a)},jn=function(a){var b=Rf["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function kn(a){var b=a._clear;Ma(a,function(f,g){"_clear"!==f&&(b&&Hg(f,void 0),Hg(f,g))});Wf||(Wf=a["gtm.start"]);var c=a.event,d=a["gtm.uniqueEventId"];if(!c)return!1;d||(d=bg(),a["gtm.uniqueEventId"]=d,Hg("gtm.uniqueEventId",d));Yf=c;var e=ln(a);Yf=null;switch(c){case "gtm.init":R("GTM",19),e&&R("GTM",20)}return e}
function ln(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=Rf.zones;d=e?e.checkState(Gd.B,c):gj;return d.active?Zj(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function mn(){for(var a=!1;!gn&&0<fn.length;){gn=!0;delete Ag.eventModel;Cg();var b=fn.shift();if(null!=b){var c=dn(b);if(c){var d=b;b=dn(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var g=e[f],k=Dg(g,1);if(Ga(k)||ob(k))k=G(k);Bg[g]=k}}try{if(Da(b))try{b.call(Eg)}catch(u){}else if(Ga(b)){var l=b;if(p(l[0])){var m=
l[0].split("."),n=m.pop(),r=l.slice(1),t=Dg(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,r)}catch(u){}}}else{if(Na(b)){a:{if(b.length&&p(b[0])){var q=Gm[b[0]];if(q&&(!c||!Hm[b[0]])){b=q(b);break a}}b=void 0}if(!b){gn=!1;continue}}a=kn(b)||a}}finally{c&&Cg(!0)}}gn=!1}return!a}function nn(){var a=mn();try{Im(E["dataLayer"],Gd.B)}catch(b){}return a}
var pn=function(){var a=Pe("dataLayer",[]),b=Pe("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};oj(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Om(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<Rf.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new en(arguments[e])}else d=[].slice.call(arguments,0);var f=c.apply(a,d);fn.push.apply(fn,d);if(300<
this.length)for(R("GTM",4);300<this.length;)this.shift();var g="boolean"!==typeof f||f;return mn()&&g};fn.push.apply(fn,a.slice(0));on()&&N(nn)},on=function(){var a=!0;return a};var qn={};qn.Nb=new String("undefined");
var rn=function(a){this.a=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===qn.Nb?b:a[d]);return c.join("")}};rn.prototype.toString=function(){return this.a("undefined")};rn.prototype.valueOf=rn.prototype.toString;qn.Nf=rn;qn.Rc={};qn.yg=function(a){return new rn(a)};var sn={};qn.zh=function(a,b){var c=bg();sn[c]=[a,b];return c};qn.we=function(a){var b=a?0:1;return function(c){var d=sn[c];if(d&&"function"===typeof d[b])d[b]();sn[c]=void 0}};qn.Xg=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};qn.rh=function(a){if(a===qn.Nb)return a;var b=bg();qn.Rc[b]=a;return'google_tag_manager["'+Gd.B+'"].macro('+b+")"};qn.ih=function(a,b,c){a instanceof qn.Nf&&(a=a.a(qn.zh(b,c)),b=Ca);return{dd:a,F:b}};var tn=function(a,b,c){function d(f,g){var k=f[g];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Xe(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},un=function(a){Rf.hasOwnProperty("autoEventsSettings")||(Rf.autoEventsSettings={});var b=Rf.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},vn=function(a,b,c){un(a)[b]=c},wn=function(a,b,c,d){var e=un(a),f=Ua(e,b,d);e[b]=c(f)},xn=function(a,b,c){var d=un(a);return Ua(d,b,c)};var yn=["input","select","textarea"],zn=["button","hidden","image","reset","submit"],An=function(a){var b=a.tagName.toLowerCase();return!Ha(yn,function(c){return c===b})||"input"===b&&Ha(zn,function(c){return c===a.type.toLowerCase()})?!1:!0},Bn=function(a){return a.form?a.form.tagName?a.form:K.getElementById(a.form):$e(a,["form"],100)},Cn=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(An(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var Dn=!!E.MutationObserver,En=void 0,Fn=function(a){if(!En){var b=function(){var c=K.body;if(c)if(Dn)(new MutationObserver(function(){for(var e=0;e<En.length;e++)N(En[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Ve(c,"DOMNodeInserted",function(){d||(d=!0,N(function(){d=!1;for(var e=0;e<En.length;e++)N(En[e])}))})}};En=[];K.body?b():N(b)}En.push(a)};var $n=E.clearTimeout,ao=E.setTimeout,S=function(a,b,c){if(Ji()){b&&N(b)}else return Re(a,b,c)},bo=function(){return E.location.href},co=function(a){return Sg(Ug(a),"fragment")},eo=function(a){return Tg(Ug(a))},T=function(a,b){return Dg(a,b||2)},fo=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=hn(a)):d=hn(a);return d},go=function(a,b){E[a]=b},U=function(a,b,c){b&&(void 0===E[a]||c&&!E[a])&&(E[a]=
b);return E[a]},ho=function(a,b,c){return $g(a,b,void 0===c?!0:!!c)},io=function(a,b){if(Ji()){b&&N(b)}else Te(a,b)},jo=function(a){return!!xn(a,"init",!1)},ko=function(a){vn(a,"init",!0)},lo=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Vf;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";S(Li("https://","http://",c))},mo=function(a,b){var c=a[b];return c};
var no=qn.ih;function Ko(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var Lo=new Ka;function Mo(a,b){function c(g){var k=Ug(g),l=Sg(k,"protocol"),m=Sg(k,"host",!0),n=Sg(k,"port"),r=Sg(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function No(a){return Oo(a)?1:0}
function Oo(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Ga(c)){for(var d=0;d<c.length;d++)if(No({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var g=0;g<f.length;g++)if(b[f[g]]){e=b[f[g]](c);break a}}catch(t){}}e=!1}return e;case "_ew":return Ko(b,c);case "_eq":return String(b)==String(c);
case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var k;k=String(b).split(",");return 0<=C(k,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var l;var m=a.ignore_case?"i":void 0;try{var n=String(c)+m,r=Lo.get(n);r||(r=new RegExp(c,m),Lo.set(n,r));l=r.test(b)}catch(t){l=!1}return l;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Mo(b,c)}return!1};var Po=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Qo={},Ro=encodeURI,Y=encodeURIComponent,So=Ue;var To=function(a,b){if(!a)return!1;var c=Sg(Ug(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Uo=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Qo.Yg=function(){var a=!1;return a};function lq(){return E.gaGlobal=E.gaGlobal||{}}var mq=function(){var a=lq();a.hid=a.hid||Ia();return a.hid};var vq=window,wq=document,xq=function(a){var b=vq._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===vq["ga-disable-"+a])return!0;try{var c=vq.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Wg("AMP_TOKEN",String(wq.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return wq.getElementById("__gaOptOutExtension")?!0:!1};function Aq(a,b){delete b.eventModel[I.fb];if(a!==I.K){var c=b.getWithConfig(I.mc);if(Ga(c)){R("GTM",26);for(var d={},e=0;e<c.length;e++){var f=c[e],g=b.getWithConfig(f);void 0!==g&&(d[f]=g)}b.eventModel=d}}Cq(b.eventModel)}var Cq=function(a){Ma(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[I.ma]||{};Ma(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Fq=function(a,b,c){Dl(b,c,a)},Gq=function(a,b,c){Dl(b,c,a,!0)},Iq=function(a,b){};
function Hq(a,b){}var Z={b:{}};


Z.b.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.g="jsm";Z.__jsm.h=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=U("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.b.flc=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;Hk(b,c)}(function(b){Z.__flc=b;Z.__flc.g="flc";Z.__flc.h=!0;Z.__flc.priorityOverride=0})(function(b){var c=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,d=Uo(b.vtp_customVariable||[],"key","value")||{},e={rb:b.vtp_activityTag,Yc:c,Qa:b.vtp_conversionCookiePrefix||void 0,Vb:void 0,ba:{UNIQUE:3,SESSION:4}[b.vtp_ordinalType]||2,Zc:b.vtp_advertiserId,bd:b.vtp_groupTag,D:b.vtp_gtmOnFailure,F:b.vtp_gtmOnSuccess,
oc:b.vtp_useImageTag?void 0:b.vtp_url,protocol:"",ud:void 0,xd:!b.vtp_useImageTag,sessionId:b.vtp_sessionId,Bc:b.vtp_transactionVariable,transactionId:void 0,Cc:b.vtp_userVariable,Bd:d};var f=!vf(I.s)&&void 0!=T(I.O)&&!1!==T(I.O);e.Cb=f;if(b.vtp_enableAttribution){var g=b.vtp_attributionFields||[];if(g.length){S("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(e,U("google_attr").build([Uo(g,
"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(e)})}();
Z.b.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.g="sp";Z.__sp.h=!0;Z.__sp.priorityOverride=0})(function(a){var b=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",c=a.vtp_gtmOnFailure,d=function(){var f=U("google_trackConversion");if(Da(f)){var g={};"DATA_LAYER"==a.vtp_customParamsFormat?g=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(g=Uo(a.vtp_customParams,
"key","value"));var k={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(g.event=a.vtp_eventName),a.vtp_eventValue&&(k.value=a.vtp_eventValue),a.vtp_eventItems&&(k.items=a.vtp_eventItems));var l={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:g,google_gtag_event_data:k,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:qk()};a.vtp_rdp&&(l.google_restricted_data_processing=!0);a.vtp_userId&&(l.google_user_id=a.vtp_userId);
f(l)||c()}else c()},e=function(){S(b,d,c)};if(of()){yf(function(){vf(I.s)?e():xf(e)},[I.s]);return}xj();e()})}();Z.b.c=["google"],function(){(function(a){Z.__c=a;Z.__c.g="c";Z.__c.h=!0;Z.__c.priorityOverride=0})(function(a){return a.vtp_value})}();

Z.b.e=["google"],function(){(function(a){Z.__e=a;Z.__e.g="e";Z.__e.h=!0;Z.__e.priorityOverride=0})(function(a){return String(Jg(a.vtp_gtmEventId,"event"))})}();
Z.b.f=["google"],function(){(function(a){Z.__f=a;Z.__f.g="f";Z.__f.h=!0;Z.__f.priorityOverride=0})(function(a){var b=T("gtm.referrer",1)||K.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Sg(Ug(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):eo(String(b)):String(b)})}();Z.b.k=["google"],function(){(function(a){Z.__k=a;Z.__k.g="k";Z.__k.h=!0;Z.__k.priorityOverride=0})(function(a){return ho(a.vtp_name,T("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.b.fls=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;Hk(b,c)}(function(b){Z.__fls=b;Z.__fls.g="fls";Z.__fls.h=!0;Z.__fls.priorityOverride=0})(function(b){var c;if(b.vtp_enableProductReporting){var d=function(t){t=t||[];for(var q=[],u=[["i","id"],["p","price"],["q","quantity"],["c","country"],["l","language"],["a","accountId"]],w=0;w<t.length;w++)for(var v=0;v<u.length;v++){var x=u[v],y=t[w][x[1]];void 0!==y&&q.push(x[0]+
(w+1)+":"+Y(y))}return q.join("|")};switch(b.vtp_dataSource){case "DATA_LAYER":c=d(T("ecommerce.purchase.products"));break;case "JSON":c=d(b.vtp_productData);break;case "STRING":for(var e=(b.vtp_productData||"").split("|"),f=0;f<e.length;f++){var g=e[f].split(":");g[1]=g[1]&&Y(g[1])||"";e[f]=g.join(":")}c=e.join("|")}}var k=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,l=Uo(b.vtp_customVariable||
[],"key","value")||{},m={rb:b.vtp_activityTag,Yc:k,Qa:b.vtp_conversionCookiePrefix||void 0,Vb:b.vtp_revenue,ba:"ITEM_SOLD"===b.vtp_countingMethod?6:5,Zc:b.vtp_advertiserId,bd:b.vtp_groupTag,D:b.vtp_gtmOnFailure,F:b.vtp_gtmOnSuccess,oc:b.vtp_useImageTag?void 0:b.vtp_url,qd:c,protocol:"",ud:b.vtp_quantity,xd:!b.vtp_useImageTag,Bc:b.vtp_transactionVariable,transactionId:b.vtp_orderId,Cc:b.vtp_userVariable,Bd:l};var n=!vf(I.s)&&void 0!=T(I.O)&&!1!==T(I.O);
m.Cb=n;if(b.vtp_enableAttribution){var r=b.vtp_attributionFields||[];if(r.length){S("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(m,U("google_attr").build([Uo(r,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(m)})}();
Z.b.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Z.__access_globals=b;Z.__access_globals.g="access_globals";Z.__access_globals.h=!0;Z.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],k=0;k<c.length;k++){var l=c[k],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(n,r,t){if(!p(t))throw d(n,{},"Key must be a string.");if("read"===r){if(-1<C(e,t))return}else if("write"===r){if(-1<C(f,t))return}else if("readwrite"===r){if(-1<C(f,t)&&-1<C(e,t))return}else if("execute"===r){if(-1<C(g,t))return}else throw d(n,{},"Operation must be either 'read', 'write', or 'execute', was "+r);throw d(n,{},"Prohibited "+r+" on global variable: "+
t+".");},L:a}})}();Z.b.r=["google"],function(){(function(a){Z.__r=a;Z.__r.g="r";Z.__r.h=!0;Z.__r.priorityOverride=0})(function(a){return Ia(a.vtp_min,a.vtp_max)})}();
Z.b.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.g="u";Z.__u.h=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=T("gtm.url",1);c=c||bo();var d=b[a("vtp_component")];if(!d||"URL"==d)return eo(String(c));var e=Ug(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?Ga(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var n=0;n<m.length;n++){var r=Sg(e,"QUERY",void 0,void 0,m[n]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=Sg(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.b.v=["google"],function(){(function(a){Z.__v=a;Z.__v.g="v";Z.__v.h=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=T(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.b.ua=["google"],function(){var a,b={},c=function(e){yf(function(){d(e)},[I.J,I.s])},d=function(e){var f={},g={},k={},l={},m={};if(e.vtp_gaSettings){var n=e.vtp_gaSettings;G(Uo(n.vtp_fieldsToSet,"fieldName","value"),g);G(Uo(n.vtp_contentGroup,"index","group"),k);G(Uo(n.vtp_dimension,"index","dimension"),l);G(Uo(n.vtp_metric,"index","metric"),m);e.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var r=G(n);e=G(e,r)}G(Uo(e.vtp_fieldsToSet,
"fieldName","value"),g);G(Uo(e.vtp_contentGroup,"index","group"),k);G(Uo(e.vtp_dimension,"index","dimension"),l);G(Uo(e.vtp_metric,"index","metric"),m);vf(I.J)||(g.storage="none"),vf(I.s)||(g.allowAdFeatures=!1,g.storeGac=!1);var t=Ej(e.vtp_functionName);if(Da(t)){var q="",u="";e.vtp_setTrackerName&&"string"==typeof e.vtp_trackerName?""!==e.vtp_trackerName&&(u=e.vtp_trackerName,q=u+"."):(u="gtm"+bg(),
q=u+".");var w={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},v={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,
allowAdFeatures:!0,allowAdPersonalizationSignals:!0},x=function(P){var Q=[].slice.call(arguments,0);Q[0]=q+Q[0];t.apply(window,Q)},y=function(P,Q){return void 0===Q?Q:P(Q)},A=function(P,Q){if(Q)for(var Ja in Q)Q.hasOwnProperty(Ja)&&x("set",P+Ja,Q[Ja])},B=function(){},
z=function(P,Q,Ja){var $a=0;if(P)for(var Fa in P)if(P.hasOwnProperty(Fa)&&(Ja&&w[Fa]||!Ja&&void 0===w[Fa])){var Va=v[Fa]?Qa(P[Fa]):P[Fa];"anonymizeIp"!=Fa||Va||(Va=void 0);Q[Fa]=Va;$a++}return $a},D={name:u};z(g,D,!0);t("create",e.vtp_trackingId||f.trackingId,D);x("set","&gtm",qk(!0));of()&&x("set","&gcs",wf());e.vtp_enableRecaptcha&&x("require","recaptcha","recaptcha.js");(function(P,Q){void 0!==e[Q]&&x("set",P,e[Q])})("nonInteraction","vtp_nonInteraction");A("contentGroup",k);A("dimension",l);A("metric",m);var H={};z(g,H,!1)&&x("set",H);var M;
e.vtp_enableLinkId&&x("require","linkid","linkid.js");x("set","hitCallback",function(){var P=g&&g.hitCallback;Da(P)&&P();e.vtp_gtmOnSuccess()});if("TRACK_EVENT"==e.vtp_trackType){e.vtp_enableEcommerce&&(x("require","ec","ec.js"),B());var O={hitType:"event",eventCategory:String(e.vtp_eventCategory||f.category),eventAction:String(e.vtp_eventAction||f.action),eventLabel:y(String,e.vtp_eventLabel||f.label),eventValue:y(Pa,e.vtp_eventValue||
f.value)};z(M,O,!1);x("send",O);}else if("TRACK_SOCIAL"==e.vtp_trackType){}else if("TRACK_TRANSACTION"==e.vtp_trackType){}else if("TRACK_TIMING"==
e.vtp_trackType){}else if("DECORATE_LINK"==e.vtp_trackType){}else if("DECORATE_FORM"==e.vtp_trackType){}else if("TRACK_DATA"==e.vtp_trackType){}else{e.vtp_enableEcommerce&&(x("require","ec","ec.js"),B());if(e.vtp_doubleClick||"DISPLAY_FEATURES"==e.vtp_advertisingFeaturesType){var W=
"_dc_gtm_"+String(e.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");x("require","displayfeatures",void 0,{cookieName:W})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==e.vtp_advertisingFeaturesType){var xa="_dc_gtm_"+String(e.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");x("require","adfeatures",{cookieName:xa})}M?x("send","pageview",M):x("send","pageview");}if(!a){var Ba=e.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";e.vtp_useInternalVersion&&!e.vtp_useDebugVersion&&(Ba="internal/"+Ba);a=!0;var Oa=ck(g._x_19,"/analytics.js"),sa=Li("https:","http:","//www.google-analytics.com/"+Ba,g&&g.forceSSL);S("analytics.js"===Ba&&Oa?Oa:sa,function(){var P=Cj();P&&P.loaded||e.vtp_gtmOnFailure();},e.vtp_gtmOnFailure)}}else N(e.vtp_gtmOnFailure)};
Z.__ua=c;Z.__ua.g="ua";Z.__ua.h=!0;Z.__ua.priorityOverride=0}();

Z.b.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Z.__inject_script=b;Z.__inject_script.g="inject_script";Z.__inject_script.h=!0;Z.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!p(f))throw d(e,{},"Script URL must be a string.");try{if(ie(Ug(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},L:a}})}();




Z.b.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gp"];(function(b){Z.__gclidw=b;Z.__gclidw.g="gclidw";Z.__gclidw.h=!0;Z.__gclidw.priorityOverride=100})(function(b){N(b.vtp_gtmOnSuccess);var c,d,e,f;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain,b.vtp_enableCookieFlagsFeature&&(f=b.vtp_cookieFlags));var g=null;b.vtp_enableCookieUpdateFeature&&(g=!0,void 0!==b.vtp_cookieUpdate&&(g=!!b.vtp_cookieUpdate));var k={prefix:e,path:c,domain:d,flags:f};b.vtp_enableCrossDomainFeature&&
(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||(b.vtp_enableCrossDomain||ai())&&si(a,k));pi(k);ui(["aw","dc"],k);Di(g,k);var l=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var m=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(","),n=b.vtp_urlPosition,r=!!b.vtp_formDecoration;ti(a,m,n,r,l);}var t=T(I.O);
sk(!1,void 0!=t&&!1!==t);b.vtp_enableUrlPassthroughFeature&&b.vtp_enableUrlPassthrough&&wi()})}();

Z.b.aev=["google"],function(){function a(q,u){var w=Jg(q,"gtm");if(w)return w[u]}function b(q,u,w,v){v||(v="element");var x=q+"."+u,y;if(n.hasOwnProperty(x))y=n[x];else{var A=a(q,v);if(A&&(y=w(A),n[x]=y,r.push(x),35<r.length)){var B=r.shift();delete n[B]}}return y}function c(q,u,w){var v=a(q,t[u]);return void 0!==v?v:w}function d(q,u){if(!q)return!1;var w=e(bo());Ga(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var v=[w],x=0;x<u.length;x++)if(u[x]instanceof RegExp){if(u[x].test(q))return!1}else{var y=
u[x];if(0!=y.length){if(0<=e(q).indexOf(y))return!1;v.push(e(y))}}return!To(q,v)}function e(q){m.test(q)||(q="http://"+q);return Sg(Ug(q),"HOST",!0)}function f(q,u,w){switch(q){case "SUBMIT_TEXT":return b(u,"FORM."+q,g,"formSubmitElement")||w;case "LENGTH":var v=b(u,"FORM."+q,k);return void 0===v?w:v;case "INTERACTED_FIELD_ID":return l(u,"id",w);case "INTERACTED_FIELD_NAME":return l(u,"name",w);case "INTERACTED_FIELD_TYPE":return l(u,"type",w);case "INTERACTED_FIELD_POSITION":var x=a(u,"interactedFormFieldPosition");
return void 0===x?w:x;case "INTERACT_SEQUENCE_NUMBER":var y=a(u,"interactSequenceNumber");return void 0===y?w:y;default:return w}}function g(q){switch(q.tagName.toLowerCase()){case "input":return Xe(q,"value");case "button":return Ye(q);default:return null}}function k(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var u=0,w=0;w<q.elements.length;w++)An(q.elements[w])&&u++;return u}}function l(q,u,w){var v=a(q,"interactedFormField");return v&&Xe(v,u)||w}var m=/^https?:\/\//i,n={},r=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){Z.__aev=q;Z.__aev.g="aev";Z.__aev.h=!0;Z.__aev.priorityOverride=0})(function(q){var u=q.vtp_gtmEventId,w=q.vtp_defaultValue,v=q.vtp_varType;switch(v){case "TAG_NAME":var x=a(u,"element");return x&&x.tagName||
w;case "TEXT":return b(u,v,Ye)||w;case "URL":var y;a:{var A=String(a(u,"elementUrl")||w||""),B=Ug(A),z=String(q.vtp_component||"URL");switch(z){case "URL":y=A;break a;case "IS_OUTBOUND":y=d(A,q.vtp_affiliatedDomains);break a;default:y=Sg(B,z,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return y;case "ATTRIBUTE":var D;if(void 0===q.vtp_attribute)D=c(u,v,w);else{var H=q.vtp_attribute,M=a(u,"element");D=M&&Xe(M,H)||w||""}return D;case "MD":var O=q.vtp_mdValue,da=b(u,"MD",Mn);return O&&da?Pn(da,
O)||w:da||w;case "FORM":return f(String(q.vtp_component||"SUBMIT_TEXT"),u,w);default:return c(u,v,w)}})}();


Z.b.awc=["nonGoogleScripts"],function(){var a=!1,b=function(c){if(a)c.vtp_gtmOnSuccess();else{var d=c.vtp_channel||"na",e,f,g;if(c.vtp_group&&0<=c.vtp_group.indexOf(":")){e=c.vtp_group;for(var k=c.vtp_group.split("|"),l=[],m=g=0;m<k.length;m++)if(k[m]){var n=k[m].split(":");if(2==n.length&&n[0]&&n[1]){var r=parseFloat(n[1]);isNaN(r)||(l.push(Y(n[0])+":"+r),g+=r)}}f=l.join("|")}else g=c.vtp_orderValue||0,e=(c.vtp_group||"DEFAULT")+":"+g,f=Y(c.vtp_group||"DEFAULT")+":"+Y(g);var t=c.vtp_testMode?"1":
"0";try{var q=["merchant="+Y(c.vtp_merchantId),"ref="+Y(c.vtp_orderRef),"amount="+Y(g),"parts="+f,"ch="+Y(d),"testmode="+t];c.vtp_currency&&q.push("cr="+Y(c.vtp_currency));c.vtp_discountCode&&q.push("vc="+Y(c.vtp_discountCode));So("https://www.awin1.com/sread.img?tt=ns&tv=2&"+q.join("&"))}catch(w){}try{var u={};u.orderRef=c.vtp_orderRef;u.amount=g;c.vtp_currency&&(u.currency=c.vtp_currency);u.parts=e;c.vtp_discountCode&&(u.voucher=c.vtp_discountCode);u.channel=d;u.test=t;E.AWIN={Tracking:{Sale:u}};
S("https://www.dwin1.com/"+c.vtp_merchantId+".js",c.vtp_gtmOnSuccess,c.vtp_gtmOnFailure);a=!0}catch(w){N(c.vtp_gtmOnFailure)}}};Z.__awc=b;Z.__awc.g="awc";Z.__awc.h=!0;Z.__awc.priorityOverride=0}();
Z.b.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=U("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}},g=function(k){function l(){var v=!1;v=!0;v&&of()?
yf(function(){var x=vf(I.s),y=!x&&void 0!=T(I.O)&&!1!==T(I.O);!k.vtp_transportUrl&&y&&(m.google_transport_url="https://pagead2.googlesyndication.com/");t("gcs",wf());b.push(m);x||xf(function(){m=G(m);!k.vtp_transportUrl&&m.google_transport_url&&delete m.google_transport_url;t("gcs",wf());t("gcu","1");b.push(m)})},[I.s]):b.push(m)}xj();var m={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,google_conversion_value:k.vtp_conversionValue||
0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:qk()};k.vtp_rdp&&(m.google_restricted_data_processing=!0);void 0!=T(I.O)&&!1!==T(I.O)&&(m.google_gtm_url_processor=function(v){return v=Zi(v)});var n=function(v){return function(x,y,A){var B="DATA_LAYER"==v?T(A):k[y];B&&(m[x]=B)}},r=n("JSON");r("google_conversion_currency","vtp_currencyCode");r("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(r=n(k.vtp_productReportingDataSource),
r("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),r("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),r("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),r("google_basket_discount","vtp_discount","discount"),r("google_conversion_items","vtp_items","items"),m.google_conversion_items&&m.google_conversion_items.map&&(m.google_conversion_items=m.google_conversion_items.map(function(v){return{value:v.price,quantity:v.quantity,item_id:v.id}})));
var t=function(v,x){(m.google_additional_conversion_params=m.google_additional_conversion_params||{})[v]=x},q=function(v){return function(x,y,A,B){var z="DATA_LAYER"==v?T(A):k[y];B(z)&&t(x,z)}};var u=ck(k.vtp_transportUrl,"/pagead/conversion_async.js");u||(u=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":
"https://www.google.com/pagead/conversion_async.js");k.vtp_enableNewCustomerReporting&&(r=q(k.vtp_newCustomerReportingDataSource),r("vdnc","vtp_awNewCustomer","new_customer",function(v){return void 0!=v&&""!==v}),r("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(v){return void 0!=v&&""!==v}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(m.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),m.google_read_gcl_cookie_opt_out=
!1):m.google_read_gcl_cookie_opt_out=!0;var w=!0;w&&l();a||(a=!0,S(u,f(),e(u)))};
Z.__awct=g;Z.__awct.g="awct";Z.__awct.h=!0;Z.__awct.priorityOverride=0}();Z.b.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.g="remm";Z.__remm.h=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=0;f<c.length;f++){var g=c[f].key||"";d&&(g="^"+g+"$");var k=new RegExp(g,e);if(k.test(b)){var l=c[f].value;a.vtp_replaceAfterMatch&&(l=String(b).replace(k,l));return l}}return a.vtp_defaultValue})}();
Z.b.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.g="smm";Z.__smm.h=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Uo(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



Z.b.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.g="paused";Z.__paused.h=!0;Z.__paused.priorityOverride=0})(function(a){N(a.vtp_gtmOnFailure)})}();
Z.b.hid=["google"],function(){(function(a){Z.__hid=a;Z.__hid.g="hid";Z.__hid.h=!0;Z.__hid.priorityOverride=0})(function(){return qn.Nb})}();
Z.b.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=K.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Qe(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];k.firstChild;)r.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,r,l,g)()}else d.insertBefore(k,null),l()}else f()}catch(t){N(g)}}}var b=function(d,e,f){oj(function(){var g,k=Rf;k.postscribe||(k.postscribe=ke);g=k.postscribe;var l={done:e},m=K.createElement("div");m.style.display="none";m.style.visibility="hidden";K.body.appendChild(m);try{g(m,d,l)}catch(n){N(f)}})};var c=function(d){if(K.body){var e=
d.vtp_gtmOnFailure,f=no(d.vtp_html,d.vtp_gtmOnSuccess,e),g=f.dd,k=f.F;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,k,e):a(K.body,Ze(g),k,e)()}else ao(function(){c(d)},
200)};Z.__html=c;Z.__html.g="html";Z.__html.h=!0;Z.__html.priorityOverride=0}();




Z.b.img=["customPixels"],function(){(function(a){Z.__img=a;Z.__img.g="img";Z.__img.h=!0;Z.__img.priorityOverride=0})(function(a){var b=Ze('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}So(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();




var Jq={};Jq.macro=function(a){if(qn.Rc.hasOwnProperty(a))return qn.Rc[a]},Jq.onHtmlSuccess=qn.we(!0),Jq.onHtmlFailure=qn.we(!1);Jq.dataLayer=Eg;Jq.callback=function(a){$f.hasOwnProperty(a)&&Da($f[a])&&$f[a]();delete $f[a]};function Kq(){Rf[Gd.B]=Jq;Xa(ag,Z.b);kd=kd||qn;ld=fj}
function Lq(){Xg.gtm_3pds=!0;Rf=E.google_tag_manager=E.google_tag_manager||{};if(Rf[Gd.B]){var a=Rf.zones;a&&a.unregisterChild(Gd.B);}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)dd.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)gd.push(e[f]);for(var g=b.predicates||[],k=0;k<g.length;k++)fd.push(g[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],r={},t=0;t<n.length;t++)r[n[t][0]]=Array.prototype.slice.call(n[t],1);ed.push(r)}id=Z;jd=No;var q=data.permissions||{},u=data.sandboxed_scripts,w=data.security_groups;qm();Kd=new Jd(q);if(void 0!==
u)for(var v=["sandboxedScripts"],x=0;x<u.length;x++){var y=u[x].replace(/^_*/,"");ag[y]=v}tm(w);Kq();pn();jj=!1;kj=0;if("interactive"==K.readyState&&!K.createEventObject||"complete"==K.readyState)mj();else{Ve(K,"DOMContentLoaded",mj);Ve(K,"readystatechange",mj);if(K.createEventObject&&K.documentElement.doScroll){var A=!0;try{A=!E.frameElement}catch(H){}A&&nj()}Ve(E,"load",mj)}Lm=!1;"complete"===K.readyState?Nm():Ve(E,"load",Nm);a:{if(!tg)break a;E.setInterval(ug,864E5);}
Xf=(new Date).getTime();}}
(function(a){a()})(Lq);

})()
