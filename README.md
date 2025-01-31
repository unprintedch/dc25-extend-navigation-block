# Extend Navigation Block

A lightweight WordPress plugin that extends the core Navigation block with accordion functionality for mobile devices, following WordPress core standards and best practices.

## Description

This plugin enhances the WordPress core Navigation block by adding accordion behavior to submenus in the mobile/off-canvas view, while maintaining full compatibility with core functionality.

### Key Features

- Adds accordion functionality to submenus in mobile view
- Preserves all core Navigation block features
- Uses WordPress core APIs and standards
- No custom markup - works with existing navigation structure
- Maintains accessibility standards

### Technical Approach

The plugin is built following WordPress core development principles:
- Uses the official Block Editor API for extensions
- Leverages WordPress's HTML Tag Processor for DOM manipulation
- Utilizes WordPress's block attributes system
- Follows core coding standards and best practices

### Implementation Details

- Extends core Navigation block through filters
- Uses `WP_HTML_Tag_Processor` for HTML modifications
- Implements proper block registration via `block.json`
- Follows WordPress block development conventions
- Maintains separation of concerns (editor/frontend)

## Installation

1. Upload the plugin files to `/wp-content/plugins/extend-navigation-block`
2. Activate the plugin through the 'Plugins' screen in WordPress
3. Edit any Navigation block and find the new "Accordion on Mobile" toggle in the block settings sidebar

## Usage

1. Edit a page with a Navigation block
2. Open the block settings sidebar
3. Enable "Accordion on Mobile" option
4. View the page on mobile or use the responsive preview to see the accordion in action

## Requirements

- WordPress 6.4 or higher
- Block Editor (Gutenberg)

## Development

Built using:
- `@wordpress/scripts` for build process
- WordPress core development tools
- Standard block development practices

## License

GPLv2 or later 

## Say Hi! 👋

Found a bug? Want to grab a coffee? Just want to say thanks?
I'm David, a WordPress developer who loves clean code and typography.

- 🌍 Website: [unprinted.ch](https://unprinted.ch)
- 💻 GitHub: [@davidcorradini](https://github.com/unprintedch)

