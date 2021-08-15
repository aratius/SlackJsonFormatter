import moment from 'moment'

// tsでややこしいからjsにする
moment.updateLocale('ja', {
  weekdays: ["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"],
  weekdaysShort: ["日","月","火","水","木","金","土"],
});

export const getTime = (ts: string): string => {
  // const unix = ts.
  const m = moment.unix(Math.round(Number(ts)))

  return m.format("HH:mm (ddd)")
}