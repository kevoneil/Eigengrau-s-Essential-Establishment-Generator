document.cookie = 'SameSite=Strict'

Setting.addHeader('Content Settings')

if (State.metadata.get('ignoreGender') !== settings.ignoreGender) {
  settings.ignoreGender = State.metadata.get('ignoreGender')
}

if (State.metadata.get('showTutorial') !== settings.showTutorial) {
  settings.showTutorial = State.metadata.get('showTutorial')
}

if (State.metadata.get('disableAnalytics') !== settings.disableAnalytics) {
  settings.disableAnalytics = State.metadata.get('disableAnalytics')
  window['ga-disable-UA-119249239-1'] = settings.disableAnalytics
}

if (State.metadata.get('showBiomeGeneration') !== settings.showBiomeGeneration) {
  settings.showBiomeGeneration = State.metadata.get('showBiomeGeneration')
}

if (State.metadata.get('forceOneColumn') !== settings.forceOneColumn) {
  settings.forceOneColumn = State.metadata.get('forceOneColumn')
}

if (State.metadata.get('showVerboseErrors') !== settings.showVerboseErrors) {
  settings.showVerboseErrors = State.metadata.get('showVerboseErrors')
}

if (settings.showVerboseErrors) {
  jQuery('error-view').css('display', 'block')
}

if (settings.forceOneColumn) {
  jQuery('html').addClass('force-one-column')
}

function settingShowTutorial () {
  const showTutorial = State.metadata.get('showTutorial')
  if (settings.showTutorial !== showTutorial) {
    State.metadata.set('showTutorial', settings.showTutorial)
  }
}

function settingIgnoreGender () {
  const ignoreGender = State.metadata.get('ignoreGender')
  if (settings.ignoreGender !== ignoreGender) {
    State.metadata.set('ignoreGender', settings.ignoreGender)
    State.variables.town.ignoreGender = settings.ignoreGender
  }
}

function settingShowBiomeGeneration () {
  const showBiomeGeneration = State.metadata.get('showBiomeGeneration')
  if (settings.showBiomeGeneration !== showBiomeGeneration) {
    State.metadata.set('showBiomeGeneration', settings.showBiomeGeneration)
  }
}

function settingHideAds () {
  if (settings.hideAds === true) {
    settings.hideAds = true
  } else {
    settings.hideAds = false
  }
}

function settingDisableAnalytics () {
  const disableAnalytics = State.metadata.get('disableAnalytics')
  if (settings.disableAnalytics !== disableAnalytics) {
    State.metadata.set('disableAnalytics', settings.disableAnalytics)
    window['ga-disable-UA-119249239-1'] = settings.disableAnalytics
  }
}

function settingForceOneColumn () {
  const forceOneColumn = State.metadata.get('forceOneColumn')
  if (settings.forceOneColumn !== forceOneColumn) {
    State.metadata.set('forceOneColumn', settings.forceOneColumn)
  }
  if (settings.forceOneColumn) {
    jQuery('html').addClass('force-one-column')
  } else {
    jQuery('html').removeClass('force-one-column')
  }
}

function settingShowVerboseErrors () {
  const showVerboseErrors = State.metadata.get('showVerboseErrors')
  if (settings.showVerboseErrors !== showVerboseErrors) {
    State.metadata.set('showVerboseErrors', settings.showVerboseErrors)
  }
  if (settings.showVerboseErrors) {
    jQuery('error-view').css('display', 'block')
  } else {
    jQuery('error-view').css('display', 'none')
  }
}

Setting.addToggle('showTutorial', {
  label: 'Show tutorial?',
  onChange: settingShowTutorial
})

Setting.addToggle('showCelsius', {
  label: 'Show celsius?'
})

Setting.addToggle('showMetric', {
  label: 'Show metric?'
})

Setting.addToggle('showBiomeGeneration', {
  label: 'Edit biome before generation?',
  desc: 'If you want to specify the biome and demographics before town creation, enable this.',
  onChange: settingShowBiomeGeneration
})

Setting.addToggle('showSliders', {
  label: 'Show sliders?',
  desc: 'If you would like to change the variables of buildings, enable this. Warning: feature is in beta.'
})

Setting.addToggle('silverStandard', {
  label: '<span id="silver" class="tip dotted" title="This is based off the popular homebrew rule where money is divided by ten, so the silver is the standard, reserving gold for kings, making it feel truly like a treasure.">Silver Standard?</span>'
})

Setting.addToggle('ignoreGender', {
  label: 'Ignore gender?',
  desc: 'If you would rather NPCs not be limited in the professions that they take due to sexism, enable this.',
  onChange: settingIgnoreGender
})

Setting.addToggle('forceOneColumn', {
  label: '<span id="oneColumn" class="tip dotted" title="Force one column for larger screens.">Force one column?</span>',
  onChange: settingForceOneColumn
})

Setting.addToggle('hideAds', {
  label: '<span id="ads" class="tip dotted" title="This is free, open-source software. Please consider supporting us- this option is available to give people a cleaner interface (for streaming, etc.).">Hide ads?</span>',
  onChange: settingHideAds
})

Setting.addToggle('showVerboseErrors', {
  label: '<span id="verboseErrors" class="tip dotted" title="This shows the SugarCube errors.">Show debugging information?</span>',
  onChange: settingShowVerboseErrors
})

Setting.addToggle('disableAnalytics', {
  label: '<span id="analytics" class="tip dotted" title="We just use analytics to know how many people use the site, and what they find useful- nothing sinister, we swear!">Disable analytics?</span>',
  onChange: settingDisableAnalytics
})

Setting.save()
