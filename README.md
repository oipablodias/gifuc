![Logo](http://kintal.org/gifuc/gifuc.png)

# GIFUC (Gmail Inbox Favicon Unread Count)

See how many unread messages are in your Inbox at the tab's icon.

## Installation

Go to Chrome web store and click `install`:

https://chrome.google.com/webstore/detail/gifuc-google-inbox-favico/pmjhnbcanebjkgkgieddinccembflgam

Or download the source code and install it as an `unpacked extension`:

1. Download the source code and unzip the file;
2. Open `chrome://extensions` or go to menu `Window > Extensions`;
3. Enable `Developer mode`;
4. `Load packed extension...` and select the unziped folder;
5. Open (or reload) your Google Inbox window.

## Usage

Install the extension and access your Google Inbox account.

It reads the Gmail Atom Feed every 30 seconds to get the unread messages count.

## TODO

1. Watch DOM changes to get rid of 30s loop?
2. Customize badge color? (useful when you work with more than one e-mail tab)
3. (...)

## Contributing

1. Fork it;
2. Create a branch: `git checkout -b some-feature`
3. Commit changes: `git commit -am 'A brief explanation'`
4. Push to branch: `git push origin some-feature`
5. Submit a pull request

## History

I'm trying to move from Gmail to Inbox and the lack of unread count was not helping. So I decided to write a simple extension to cover it until Google releases its own unread count.

Thanks to [Extensionizr](http://extensionizr.com/) and [favico.js](https://github.com/ejci/favico.js).


## License

MIT