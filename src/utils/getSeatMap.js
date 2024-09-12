export default (timeSlot = '10pm') => {
    return fetch('/api/seat-map', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({timeSlot})}).then(res => res.json())
}

export const getTimeSlots =  () => {
    return fetch('/api/time-slots', {method: 'POST', headers: {'Content-Type': 'application/json'}}).then(res => res.json())
}
