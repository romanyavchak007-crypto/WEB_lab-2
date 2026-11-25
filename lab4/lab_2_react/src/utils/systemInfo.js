export async function getSystemInfo() {
  const info = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    appVersion: navigator.appVersion,
    appName: navigator.appName,
    vendor: navigator.vendor,
    language: navigator.language,
    languages: navigator.languages,
    cookieEnabled: navigator.cookieEnabled,
    onLine: navigator.onLine,
    hardwareConcurrency: navigator.hardwareConcurrency,
    deviceMemory: navigator.deviceMemory ?? 'Не надано браузером',
    maxTouchPoints: navigator.maxTouchPoints,
    doNotTrack: navigator.doNotTrack ?? 'Не надано браузером',
    screen: {
      width: screen.width, height: screen.height,
      availWidth: screen.availWidth, availHeight: screen.availHeight,
      colorDepth: screen.colorDepth, pixelDepth: screen.pixelDepth,
    },
    devicePixelRatio: window.devicePixelRatio,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };
  if (navigator.userAgentData) {
    info.userAgentData = navigator.userAgentData.toJSON();
    try {
      info.userAgentData = {
        ...info.userAgentData,
        ...await navigator.userAgentData.getHighEntropyValues([
          'architecture', 'bitness', 'model', 'platformVersion', 'fullVersionList',
        ]),
      };
    } catch { /* Додаткові відомості можуть бути недоступні. */ }
  }
  return info;
}

export function readStorage() {
  return Object.keys(localStorage).map((key) => [key, localStorage.getItem(key)]);
}
