/* global CKEDITOR */

/**
 * @license Copyright (c) 2018, Comandeer. All rights reserved.
 * For licensing, see LICENSE.
 */

/**
 * @fileOverview Simple CKEditor 4 plugin that adds placeholder text to the editor.
 */
( function() {
	var config = {
		placeholderTemplate: '<p data-cke-placeholdertext>{PLACEHOLDER}</p>'
	};

	function isEditorEmpty( editor ) {
		return editor.getData().length === 0;
	}

	function applyPlaceholder( evt ) {
		var editor = evt.listenerData.editor,
			placeholder = config.placeholderTemplate.replace( '{PLACEHOLDER}', editor.config.placeholdertext );

		if ( isEditorEmpty( editor ) ) {
			editor.editable().setHtml( placeholder );
		}
	}

	function removePlaceholder( evt ) {
		var editor = evt.listenerData.editor,
			placeholder = editor.editable().findOne( '[data-cke-placeholdertext]' );

		placeholder.remove();
	}

	function fixGetData( evt ) {
		var fragment = evt.data.dataValue,
			children = fragment.children;


		if ( children.length > 1 ||
			typeof children[ 0 ].attributes[ 'data-cke-placeholdertext' ] === 'undefined' ) {
			return;
		}

		children.length = 0;
	}

	CKEDITOR.plugins.add( 'placeholdertext', {
		init( editor ) {
			editor.on( 'contentDom', applyPlaceholder, null, { editor: editor } );
			editor.on( 'focus', removePlaceholder, null, { editor: editor } );
			editor.on( 'blur', applyPlaceholder, null, { editor: editor } );

			editor.on( 'toDataFormat', fixGetData, null, null, 9 );
		}
	} );

	CKEDITOR.plugins.placeholdertext = config;
}() );
