# Placeholder Text

Simple CKEditor 4 plugin that adds placeholder text to the editor.

## Usage

Add to configuration variable `config.placeholdertext`, which contains desired placeholder for the editor:

```javascript
CKEDITOR.replace( 'editor', {
	placeholdertext: 'Type your comment'
} );
```

## Compatibility

It's compatible with latest Chrome and Safari versions. It should also work in Firefox after activating proper experimental flag.

## Hacking around

First install `placeholdertext` as a part of CKEditor 4 dev repository:

```bash
cd PATH_TO_CKEDITOR_DEV/plugins
git clone git@github.com:Comandeer/ckeditor-plugin-placeholdertext.git placeholdertext
npm install
```

Then run bender:

```bash
npm test
```

and go to http://localhost:1030 to run the tests.

## License

The plugin is licensed under [MIT license](https://opensource.org/licenses/MIT).
