/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';

console.log('Hello from the extend-navigation-block plugin!');
/**
 * Styles
 */
import './style.scss';

// Add custom attribute to navigation block
addFilter(
    'blocks.registerBlockType',
    'extend-navigation-block/navigation-attributes',
    ( settings, name ) => {
        if ( name !== 'core/navigation' ) {
            return settings;
        }

        return {
            ...settings,
            attributes: {
                ...settings.attributes,
                accordionActive: {
                    type: 'boolean',
                    default: false,
                }
            },
        };
    }
);

// Add custom controls to navigation block
const withCustomControls = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {
        if ( props.name !== 'core/navigation' ) {
            return <BlockEdit { ...props } />;
        }

        const { attributes, setAttributes } = props;
        const blockProps = useBlockProps({
            className: attributes.accordionActive ? 'accordion-enabled' : '',
        });

        return (
            <Fragment>
                <div {...blockProps}>
                    <BlockEdit { ...props } />
                </div>
                <InspectorControls>
                    <PanelBody
                        title="Navigation Extensions"
                        initialOpen={ true }
                    >
                        <ToggleControl
                            label="Accordion on Mobile"
                            checked={ !! attributes.accordionActive }
                            onChange={ ( value ) => setAttributes( { accordionActive: value } ) }
                        />
                    </PanelBody>
                </InspectorControls>
            </Fragment>
        );
    };
}, 'withCustomControls' );

addFilter(
    'editor.BlockEdit',
    'extend-navigation-block/with-custom-controls',
    withCustomControls
);

