# Authenticate

*After receiving a confirmation email from Wink, that your application has been approved:*

Sign into [developer.wink.com](https://developer.wink.com), and expand the details for your application.

![](https://i.imgur.com/JSw4w2t.png)

Copy the Client ID and Client Secret, and create/update your config.json as follows:

```json
{
  "bridge": {
    "name": "Homebridge",
    "username": "CF:23:3F:E3:CE:53",
    "port": 51826,
    "pin": "012-34-567"
  },
  "platforms": [
    {
      "platform": "Wink",
      "name": "Wink",
      "client_id": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      "client_secret": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    }
  ]
}
```

Start homebridge, and the plugin should output a log similar to the one below.

```sh
[12/12/2017, 2:43:36 PM] Loaded plugin: homebridge-wink3
[12/12/2017, 2:43:36 PM] Registering platform 'homebridge-wink.Wink'
[12/12/2017, 2:43:36 PM] ---
[12/12/2017, 2:43:36 PM] Loaded config.json with 0 accessories and 1 platforms.
[12/12/2017, 2:43:36 PM] ---
[12/12/2017, 2:43:36 PM] Loading 1 platforms...
[12/12/2017, 2:43:36 PM] [Wink] Initializing Wink platform...
Scan this code with your HomeKit App on your iOS device to pair with Homebridge:

    ┌────────────┐
    │ 012-34-567 │
    └────────────┘

[12/12/2017, 2:43:36 PM] [Wink] To authenticate, go here using a web browser: http://192.168.1.133:8888
[12/12/2017, 2:43:36 PM] Homebridge is running on port 51826.
```

The specific line of interest is this one:

> To authenticate, go here using a web browser: http://192.168.1.133:8888

Navigate to the URL, and you should be redirected to the Wink website to authenticate.

If you see an error message that reads "Redirect URI is not authorized.", then you need to update *Redirect URI* in the [Wink Developer portal](https://developer.wink.com), so that it matches.

![](https://i.imgur.com/z8jCMRQ.png)
