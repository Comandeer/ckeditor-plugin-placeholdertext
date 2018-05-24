/* bender-tags: editor */
/* bender-ckeditor-plugins: wysiwygarea,placeholdertext,toolbar */

( function() {
	'use strict';

	bender.editors = {
		classic: {
			config: {
				placeholdertext: 'Type your comment'
			}
		},

		divarea: {
			config: {
				extraPlugins: 'divarea',
				placeholdertext: 'Type your comment'
			}
		},

		inline: {
			creator: 'inline',
			config: {
				placeholdertext: 'Type your comment'
			}
		}
	};

	var tests = {
		'test getting data from editor': function( editor ) {
			assert.areSame( '', editor.getData(), 'placeholder text is not part of editor data' );
		},

		'test placeholder present on editor initialisation': function( editor ) {
			assert.areSame( 1, editor.editable().find( '[data-cke-placeholdertext]' ).count() );
		},

		'test placeholder disappear on editor focus and reappears on blur': function( editor ) {
			editor.editable().$.focus();

			setTimeout( function() {
				resume( function() {
					assert.areSame( 0, editor.editable().find( '[data-cke-placeholdertext]' ).count(), 0,
						'placeholder is hidden on focus' );

					CKEDITOR.document.getById( 'focus-trap' ).$.focus();

					setTimeout( function() {
						resume( function() {
							assert.areSame( 1, editor.editable().find( '[data-cke-placeholdertext]' ).count(),
								'placeholder is visible on blur' );
						} );
					}, 300 );

					wait();
				} );
			}, 150 );

			wait();
		}
	};

	tests = bender.tools.createTestsForEditors( CKEDITOR.tools.objectKeys( bender.editors ), tests );

	bender.test( tests );
}() );
