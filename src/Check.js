import moment from 'moment';

function check(dateStr) {
    const signDate = moment(dateStr, "YYYY/MM/D kk:mm")
    const startDate = moment({ year: signDate.year(), month: signDate.month(), day: signDate.date(), hour: 8, minute: 30, second: 0, millisecond: 0 })
    const endtDate = moment({ year: signDate.year(), month: signDate.month(), day: signDate.date(), hour: 17, minute: 30, second: 0, millisecond: 0 })
    if (signDate.isBetween(startDate, endtDate)) {
        return false
    } else {
        return true
    }
}

export default check;