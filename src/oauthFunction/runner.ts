var run = require('./app');

let context = {
    log: (message: string) => {
        console.log(message);
    }
};

let body = {
    channelId: "channelId",
    conversationId: "conversationId",
    idToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjJLVmN1enFBaWRPTHFXU2FvbDd3Z0ZSR0NZbyJ9.eyJhdWQiOiIyYjliM2RiZS1mN2JjLTQ2NDctOWZkMi0yMGI5MjcwOTllODQiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vNmNkNGRiNjAtNzEwZi00OGU3LWI3ZjAtY2I4YWVkNTczY2E5L3YyLjAiLCJpYXQiOjE1MDg4NDQ4MzUsIm5iZiI6MTUwODg0NDgzNSwiZXhwIjoxNTA4ODQ4NzM1LCJhaW8iOiJBVFFBeS84R0FBQUF1MCtIY0J3Ync0N2h1MGdiWU01VG9Vck1VUzRTcTRLV0M2Tk92V1VlOXR0cC9CV0xMOFQrWGoyd0ZSKzV2UjVmIiwibmFtZSI6ImRldiIsIm9pZCI6IjYwZTMyZjI0LTQzNTQtNDNhNi05MGRiLTI5ZDY4YjZjODAzMiIsInByZWZlcnJlZF91c2VybmFtZSI6ImRldkBhdG9tb2JpbGVhcHBvdXRsb29rLm9ubWljcm9zb2Z0LmNvbSIsInN1YiI6IktsTWZiektaODZqU2xZSXJtR1JxSm5hVXpsTnhuWDBxWVV1bnYwLU9aN2siLCJ0aWQiOiI2Y2Q0ZGI2MC03MTBmLTQ4ZTctYjdmMC1jYjhhZWQ1NzNjYTkiLCJ2ZXIiOiIyLjAifQ.aAS7kKuBekY-HwBRC1q4FvbVxQXa69bTiCkOyT14daKfZAgFA53bzE898E55ZQi7aB23pSmxzi5g-tYmJqDK5j6vVo85H2AOnpUI41iU2931Nm6oa9M2vNFKi109WSKqReFInK5U4Rq64JnTAeBkAmRadbbeLl2q7Oc1VoC9_bts4JEgGB5s7xffv3BRl2Mu_6jBDHcKVYCYWVIB-ksd_LIsfOYgOBbOcAwEvgZCVHxSYeLzr9shVos2zd9AoHBlgAU3adWw_9jfqQ575lwTiu4i0dL4bNXb9hEZUQHIBPYmVFCa6YxmLGsmwtkFE2hAm3-5TZmvQntp_tpytFFKzA",
    userId: "userId",
};

let headers = {
    authorization: "Bearer eyJ0eXAiOiJKV1QiLCJub25jZSI6IkFRQUJBQUFBQUFCSGg0a21TX2FLVDVYcmp6eFJBdEh6QWhtV1NtTjg4b1lWUkhQTmQ3WlNsNXNtR091WXFBNE93RWRxLV9RcEI2TzBZUzAtU2dtTU54T2VnVTZEUkJXeFp0UVFDSWdMYUZKMXRUQlhISTRPaHlBQSIsImFsZyI6IlJTMjU2IiwieDV0IjoiMktWY3V6cUFpZE9McVdTYW9sN3dnRlJHQ1lvIiwia2lkIjoiMktWY3V6cUFpZE9McVdTYW9sN3dnRlJHQ1lvIn0.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82Y2Q0ZGI2MC03MTBmLTQ4ZTctYjdmMC1jYjhhZWQ1NzNjYTkvIiwiaWF0IjoxNTA4ODQ0ODM1LCJuYmYiOjE1MDg4NDQ4MzUsImV4cCI6MTUwODg0ODczNSwiYWNyIjoiMSIsImFpbyI6IlkyTmdZRmk4OHVyVlAySWNDODVlMzhUelFxSDFVc0dpblA5Sy9uS2xrU3dzWnZlaXZIb0EiLCJhbXIiOlsicHdkIl0sImFwcF9kaXNwbGF5bmFtZSI6IkFUTyBNb2JpbGUgQXBwIEhhY2sgQ29udmVyZ2VkIEFwcCAoTmF0aXZlIEFwcCwgRnVuY3Rpb24gQXBwLCBHcmFwaCBBUEkpIiwiYXBwaWQiOiIyYjliM2RiZS1mN2JjLTQ2NDctOWZkMi0yMGI5MjcwOTllODQiLCJhcHBpZGFjciI6IjAiLCJkZXZpY2VpZCI6ImY2ZjRjZDE1LWE1M2EtNDQ2MC04MTI1LTliMGNhZTA1ZDU2ZSIsImVfZXhwIjoyNjI4MDAsImlwYWRkciI6IjEuMTI1LjEwNC4yMTAiLCJuYW1lIjoiZGV2Iiwib2lkIjoiNjBlMzJmMjQtNDM1NC00M2E2LTkwZGItMjlkNjhiNmM4MDMyIiwicGxhdGYiOiIzIiwicHVpZCI6IjEwMDMwMDAwQTVDRDBGRkIiLCJzY3AiOiJVc2VyLlJlYWQiLCJzdWIiOiJDM0dGd1ZhajliSFBOS2RaaHFRNGFiVW1DNThWS05xbEE0NEJWbWxkVHVnIiwidGlkIjoiNmNkNGRiNjAtNzEwZi00OGU3LWI3ZjAtY2I4YWVkNTczY2E5IiwidW5pcXVlX25hbWUiOiJkZXZAYXRvbW9iaWxlYXBwb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJkZXZAYXRvbW9iaWxlYXBwb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ1dGkiOiJ5dUgzVFZ1VlBVQ0lUS1JiNHVJWEFBIiwidmVyIjoiMS4wIn0.k0G7qrbAmJ0cslZngwFKA3xa5zjsuQz3TsoayRm8IEgD4OXRnT_P_hyDIOt4G9JVGBZHfWHvx5v_hpWwlqpB13V8k1uu5mFSIK-ru8Ecx1PbreS7e-SkIXsXfd9EYRgOER-9vJMr4mp4wLyedEdcuTL_RRfGppRjMIzMJcvD717SZQhIzkveVxntVQpsod33LOWCAiSSfN4XHlX1ePhKOTsEuHeDCtRGMSXTHaXkwMdGyA5kGVmOXGl84OYuf6fzQm1euDjwEUFGBpltuEYFMJ-mYUw5PfhjYHGSKoDq2G261OcHDl8pFyTeT-GsTyUjgdoCOO1C7tSyitR58v5Fpw"
};

let req = {
    headers: headers,
    body: body
};

run(context, req);