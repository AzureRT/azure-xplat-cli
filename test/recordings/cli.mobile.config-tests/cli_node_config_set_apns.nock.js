// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '5e7d1bb6-4953-44fe-8a54-43fbdb53b989',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Mobilytics Test1',
    registeredProviders: ['website', 'mobileservice'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/mobileservices/clitestnode9673/pushsettings', '*')
  .reply(200, "{\"apnsCredentials\":{\"apnsCertificate\":\"MIINQgIBAzCCDP4GCSqGSIb3DQEHAaCCDO8EggzrMIIM5zCCBfAGCSqGSIb3DQEHAaCCBeEEggXdMIIF2TCCBdUGCyqGSIb3DQEMCgECoIIE\\/jCCBPowHAYKKoZIhvcNAQwBAzAOBAiEuVaLjf7TNwICB9AEggTYwZ78rmS5Np9kNUnXK1xZrVQoM2pgVEaSKN8PipM5Rg2UaUbyiIu5NJ3r6+3lXpxUiuW1k6VDDLYqWdRTw6c79fZB61ucpFHKy4rA9yke8+aQvFq6ZUVmh5ArhpTbraQ1f6mWqWr39\\/pAA4YHyHPkYNrVLOBYh+Q8XsiQq6smL81xj0P8uohqhW5mwoEzAc5\\/i50iV+YM5yNRkWpPg\\/NyJ5gd+3kVcaakx1\\/Z+6PESE9S6fSSuVfiepuccFWJIks2IUjPzmuLOY1fRvSO6tzFW8FKYK0bMhDxYD6PUVhhaLECfIvX624z3pgV6B5fFoH+Zq2bhqqI7BUN54mmJaUCjGQ5uuVn\\/Q4b\\/rylIi8aoFWx2Hg0VdjAxH+sl9s4\\/kDTKH\\/uzpjMkbjVzq+uGREIFjYfgR8g5Z09pjYDVxucrJ\\/SzKrh+80YkJuwRy2lG59FoOgo8EzJDV7iq32X1068crCcaGhtvDsMMMYOFvyl1\\/URB2zENTHMrDDqwgNfXp8R6y5t2qwxIQ1JdXsc\\/eplJLZFxSjnzZckeE3+20pouocM2SU8mCjSROyfPJpDfMFYeLjzcoTwZAm16l3k6kRZGO0FCOwbplgFuzqX1RYZOs5H3rfbR\\/Bei+it7\\/4iG3nrBmMs5+5a2mWPGeuZeMSDg4NW2AuUOd3K6j\\/26LdFSoGBXXr\\/TlaVj1mLApVM+d\\/OSsWXVzTTIytiUjE2PTEyznsOZxOFQfghHWCun9fFFL+uo73agaTm4Ry\\/Mj8tpn+zBsQ7u+YhTvcyraBwO3\\/Op6sjxR9cQ5cXIyG3Ato6ieqJX+4iTpCgGGpPPK2SpidVjWcb\\/PnrTBD8+rzcJs2Rf1CdpgLOx9hlKbOqDunwe+zKHJx74zREY5SvhJwkkjjJ1Ciywu8pFqBY4QJs5kg+MXUPs0DOpYoo839d1uv+Fgo3q4NvuPT9DjkBy\\/Th85O3Ed\\/LaDLtm1z4jSFTMtwFvYA3xBsMHQZwpfH6MwjeMd8ir7R8wuZr1adDWdj5oKxzRdp6Ng8KxCX0UaYGmUDphCySK7uwg\\/rIrAQ8mjD4FjQqY\\/NufuuNo3jfyhgEjYG4CZm1yWxujcuBHronqOIeL9zN\\/kdVPJG+UnkfkZjokHwUIO0FhlpqHz21k5gwh1X3uuOAq5M20oJ2nnvLYCwGfCRa0dfR8Kcm7rIF8YF0sDeI6\\/bzDRaH77ychUbmhfKSjbNtwqJ0xG7Kmy0RoN01bk2oCRZN1sUiBBkt44GzaURLo6yKWH4V8osOQ9HqOeyOHHNjatQmSBmdSc1Dk\\/7mb+IdbIiaiy0a+RsWj0PgNtYyfeql6SnKFfrJKAolwGhUydotyFXVL5xZawhqKScL5d2urG0swYIMXA3ZJrKfAJtY55iLmA9Zm4sK3mf5TnmWzetZm3QKGBXyC3KrklGH1+xS4NdO2ya0fUQhf1voMrxF1XtRG8vzFKggubG+wgAUO0HPSnl65kjiN+NJCmXi4K467GVLZTUeK4\\/9XEyI8oiCGaF86R3YQ9LztJbmx+\\/ty8iRwHa0CJzGKxGNbpAlLrun+Rb\\/8YKIaQv4P+JB9f1VXO52NcQ5BY22gdZW1OWtyppaKE0stoS6IrQs\\/M8KeyzQuRGuE9bHZBqhRqp09ydVuS1s0FQyczGBwzATBgkqhkiG9w0BCRUxBgQEAQAAADA\\/BgkqhkiG9w0BCRQxMh4wAGEAegB1AHIAZQAgAG0AbwBiAGkAbABlACAAYQBwAHAAIAB0AGUAcwB0AGkAbgBnMGsGCSsGAQQBgjcRATFeHlwATQBpAGMAcgBvAHMAbwBmAHQAIABFAG4AaABhAG4AYwBlAGQAIABDAHIAeQBwAHQAbwBnAHIAYQBwAGgAaQBjACAAUAByAG8AdgBpAGQAZQByACAAdgAxAC4AMDCCBu8GCSqGSIb3DQEHBqCCBuAwggbcAgEAMIIG1QYJKoZIhvcNAQcBMBwGCiqGSIb3DQEMAQYwDgQIGMVpZefxG8ECAgfQgIIGqPu7gNz5nzkFAKanKZ85oWQxcy1kgRc3PyXT0+HtTH1UWzPDE8QqnnMAsHHFrPQhlJFVs9plBvseCD8svz3BkXtxwb5XCVcJhk7nhb4qZXEpQQVHdPFpA1KvJ1uZas4QGTKKjkpPS7nVeYzbjquMKZ7l7Puj4ylkshsBJWaCi\\/Hs0Pr0N791qnROg1GmsKH09HkTm1DCreBu8+18zSr+InIavcFS3iE4dVs5Bk2MhBKgdcXn72EeWSsn6zbb3IITPdUikJzD7l1L9\\/Hs5LRznBea+Elcz0\\/NPRWLs5W1P4CxdhliXq4Pha\\/9s1tPJ6v8POViNaBYG5ZjNR9pxFd1Zg1dJk+Fv+JeY9duG7NmiEXyrUIxvQsvyvqkdbtm3q2H5RigbqwvHbyQ6D2HDycxujzrrKVtzoY7S2IgkHf+wyljgTQmxrpwDOOGNKzzr1czTW8CZKhcdFmKSuMm0rpzAWrslfts8HSyfDKORLW1LSokqq4YB9\\/vWds6zVT4SXPgQfrjB2Ewyhka8AINdxbCZVB1oAwZMJNpIYnusW4c4LoUtw8PIVtw6AgukSyhuDVmd016JPRyqwicp+hdMWo58XErI3AUSMKPIwJoYwTCD1OssgFWnmmd8K3YEwSUQUm2n1dkjiSAb\\/YsZheR0F5AUejEW2pOO6M\\/ukvyLFejD3QtFw0VhjjCk\\/SPdW87nqJu8hj67rRecSeqw8ugXME5Q7tAmnxi8bgPRvwu5wpLIYPNaHEbobZfHqoe3vjayO4nuUgEtGM8f\\/hyDagmJtNFzpd6e4WOtNp0xnQNk52OedYPJnd0K5IQBiLcBaaFovxS0j4T87T\\/pSrY1N+upmQPKzZVJVtyrbnIoA3Z\\/kjhJqnkMk2QdRlQOhBK5d1EixWX9YVqPk+CpecLTWiszM9W8XeW1pnYI4xHQW+e68HbY4Ukqwes\\/Z2X4kfAfazngYJW8HOH4dmn04EBdvt2\\/ZalD215nyMzDZwurcG3TTWb+WsEAfI3DKANw0N702fJpD22to\\/EptgU7IAZKrHWuI\\/IbiaeqwabDDeiHLOmqwYeeLiNH2UhiTntAwAzLmPDNLFZdEMR2vEF6DyyRMcn16QI8R86uEZHe\\/dOdxfqgvm8A7oFhD1qFx8xsBuym3sw0\\/NPu\\/tWB9hUGw0qmWwSePuK\\/5AgYHyTxuO\\/zGFhQF3vFTMfOy\\/7fgE6ShdYRMpZiJiS6fyNhqyvPE+DNwktXDdTcL2KiHqJ64S3WjjC6wB+CLx\\/C0OFXPdbQQ+G+PsNVapA9\\/kkm5tG82c5IV3LFnjXanOCJ0zV7Q1PsEQgPTBgphitN8OBrNebIYG1GBhZvPAAPZOdVhfMFp28+1IX\\/TGvhkK8lRtqYbOWjwDGcdszmdmCq7YbhNa2DijXZyyNN4bOW3o0QVXK7tWxS1gYhcguBahSVnVuqenhCeGM7OMu+fPMbbdJSERHzWymroZSFe3DrkUcGP7tr0X0ipCMOCQKVHYnu9Ssr9cOPdI8OlYnPPqO406QDNaZnIcuF3ddK3tiHf5feyiw0vVqg+Jwduhy5jtbItNiksQLuvUNhPIVKnCXf4LAd0chYT+k4v21H3ZjNxj\\/VVjshE9B50sMHJGUc6YX0xd+b8s9NiIMWZ91VhAwk9PMhuo7VolFMnkCiI2E3BgSu7Apst5scoGxHWHrHiuYgUR8tm5XUIKln4HLE\\/u2SAZfapYvGsXQrdq2yXTrz2T3w9C5\\/snRVjL35C3YW3er3uM1F03fE6Ej5ZoY2t33VeVP2yFu1FCFABbcS9R6yq8isFBfPrel3s3pIZYy3bVwfuMcvT4ie39\\/7STnKTWexeycp+vXQ74amX6ETk7Ys0O3eFg0Znkfl8WYSs96qpYMRmeL4dUU0EPOx6j7Cz9h9WEBSMiIAYZMAWQOoQmvTyrk\\/dAGECTfC5pnsxW3kTQ9aC84ohl7XTh1vnFIbDum2EvWvggEOVy8XrjxHF+TX1G37k+dgkZbtWbyYG6ufEZZW+GkjEkgROPm9DG46hf5dQsP1OXyqRPsp7d2sT5RE3lDRGOYV4gLgEBqvH1G+7t63jagveLWSNEvO\\/HcnkcMf+3ZK\\/GgQXB3pYR417ob\\/uvaReEYKRCRjFOjjCkG\\/Af79IkcGiYVkvT3mVnJ3RM0G0Gsygbpiz\\/JxSUqT37nim96tLPaCk8kEhre4G25duR4oua5eggC4Q9tdh18bk9NgTzg5MjXaBwohl2ZiMNL1Mu4\\/LXBb\\/1NziiAR4EUdTMPtEHJKdpSIjA7MB8wBwYFKw4DAhoEFBdiWpFEEtauXf5YdVwuBIWQdJiIBBQEjXLo74HbhPwF7ZS7tAkIcBkiTgICB9A=\",\"certificateKey\":\"password\",\"endpoint\":\"gateway.sandbox.push.apple.com\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4714',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': 'a655bebab4b6b05baf80a42d046c442a',
  date: 'Mon, 29 Jun 2015 22:08:03 GMT' });
 return result; }]];
