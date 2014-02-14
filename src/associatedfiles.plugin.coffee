# Export Plugin
module.exports = (BasePlugin) ->
	# Define Associated Files Plugin
	class AssociatedfilesPlugin extends BasePlugin
		# Plugin name
		name: 'associatedfiles'

		# Plugin config
		config:
			associatedFilesPath: 'associated-files'
			useRelativeDirPath: false
			sorting: null  # [name:1, date:-1]
			paging: null  # {limit: 1}

		# DocPad is ready now
		# Lets use this time to extend our file model
		docpadReady: (opts,next) ->
			# Prepare
			{docpad} = opts
			{DocumentModel} = docpad
			config = @config
			pathUtil = require('path')
			fsUtil = require('fs')

			# Fetch our configuration
			associatedFilesPath = @config.associatedFilesPath
			createAssociatedFilesPath = @config.createAssociatedFilesPath

			# Extend our prototype
			DocumentModel::getAssociatedFilesPath = ->
				documentAssociatedFilesPath = @get('associatedFilesPath') or @get('basename')
				_associatedFilesPath = associatedFilesPath
				if config.useRelativeDirPath
					_associatedFilesPath += pathUtil.sep + @get('relativeDirPath')
				documentAssociatedFilesPathNormalized = @getPath(documentAssociatedFilesPath, _associatedFilesPath)
				unless documentAssociatedFilesPathNormalized.slice(-1) in ['\\','/']
					documentAssociatedFilesPathNormalized += pathUtil.sep
				return documentAssociatedFilesPathNormalized
			DocumentModel::getAssociatedFiles = (sorting,paging) ->
				# Prepare
				document = @
				documentAssociatedFilesPath = document.getAssociatedFilesPath()
				sorting ?= config.sorting or [name:1, date:-1]
				paging ?= config.paging or null

				# Fetch our associated files, and cache
				associatedFilesCollection = docpad.getFilesAtPath(documentAssociatedFilesPath, sorting, paging)

				# Return
				return associatedFilesCollection

			# Done
			next()