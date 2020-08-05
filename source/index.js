'use strict'

// Import
const BasePlugin = require('docpad-baseplugin')
const pathUtil = require('path')
const fsUtil = require('fs')

// Export & Define Associated Files Plugin
module.exports = class AssociatedfilesPlugin extends BasePlugin {
	// Plugin name
	get name() {
		return 'associatedfiles'
	}

	// Plugin config
	get initialConfig() {
		return {
			associatedFilesPath: 'associated-files',
			useRelativeBase: false,
			sorting: null, // [name:1, date:-1]
			paging: null, // {limit: 1}
		}
	}

	// DocPad is ready now
	// Lets use this time to extend our file model
	docpadReady(opts, next) {
		// Prepare
		const { docpad } = opts
		const { DocumentModel } = docpad
		const config = this.config

		// Extend our prototype
		DocumentModel.prototype.getAssociatedFilesPath = function () {
			// Fetch our configuration
			const { associatedFilesPath, useRelativeBase } = config

			// Prepare
			const document = this

			// Retrieve the document base name, minding relative paths.
			const documentBase =
				useRelativeBase || document.get('associatedFilesRelative')
					? document.get('relativeBase')
					: document.get('basename')

			// Find the associated files path for the document.
			const documentAssociatedFilesPath =
				document.get('associatedFilesPath') || documentBase

			// Get the clean path for the associated files.
			let documentAssociatedFilesPathNormalized = document.getPath(
				documentAssociatedFilesPath,
				associatedFilesPath
			)
			if (
				['\\', '/'].includes(
					documentAssociatedFilesPathNormalized.slice(-1)
				) === false
			) {
				documentAssociatedFilesPathNormalized += pathUtil.sep
			}
			return documentAssociatedFilesPathNormalized
		}
		DocumentModel.prototype.getAssociatedFiles = function (sorting, paging) {
			// Prepare
			const document = this
			const documentAssociatedFilesPath = document.getAssociatedFilesPath()

			// Defaults
			if (sorting == null) {
				sorting = config.sorting || [{ name: 1 }, { date: -1 }]
			}
			if (paging == null) {
				paging = config.paging || null
			}

			// Fetch our associated files, and cache
			const associatedFilesCollection = docpad.getFilesAtPath(
				documentAssociatedFilesPath,
				sorting,
				paging
			)

			// Return
			return associatedFilesCollection
		}

		// Done
		next()
	}
}
