(function() {
  $log.succes("Uninstalling fireplace 😔")
  URL.revokeObjectURL(le._apps.fireplace.secretBlobURL)
  le._apps.fireplace = null
  $log.succes("✔️ Uninstalled fireplace.")
})()