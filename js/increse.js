let h = document.getElementById('hour')
let m = document.getElementById('minutes')
let s = document.getElementById('seconds')

let sinais = document.getElementsByClassName('sinais')
let avaSong = document.getElementById('song')
let display = document.getElementById('display')

function hrs(btn) {
    let value = h.value
    let id = btn.getAttribute("id")
    let calc = (id == "hour-plus") ? value = parseInt(value) + 1 : value = parseInt(value) - 1

    if (calc >= 0 && calc <= 23) {
        if(value < 10) {
            value = `0${value}`
        }
        h.setAttribute("value", value)
    }
}

function mins(btn) {
    let value = m.getAttribute('value')
    let id = btn.getAttribute("id")
    let calc = (id == "min-plus") ? m.value = parseInt(value) + 1 : m.value = parseInt(value) - 1
     
    if (calc >= 0 && calc <= 59) {
        if(m.value < 10) {
            m.value = `0${m.value}`
        }
        m.setAttribute("value", m.value)
    }
}

function secs(btn) {
    let value = s.getAttribute('value')
    let id = btn.getAttribute("id")
    let calc = (id == "sec-plus") ? s.value = parseInt(value) + 1 : s.value = parseInt(value) - 1
     
    if (calc >= 0 && calc <= 59) {
        if(s.value < 10) {
            s.value = `0${s.value}`
        }
        s.setAttribute("value", s.value)
    }
}

// TIMER DEC
let interval 

function start() {
    interval = setInterval(timer, 1000)
}

function stop() {
    clearInterval(interval)
}

function reset() {
    window.location.reload()
}

function timer() {
    if(s.value == 0 && m.value == 0 && h.value == 0) {
        h.value = 0
        m.value = 0
        s.value = 0

        if(h.value < 10) {
            h.value = `0${h.value}`
        }
        if (m.value < 10) {
            m.value = `0${m.value}` 
        }
        if (s.value < 10) {
            s.value = `0${s.value}`
        } 

        avaSong.play()
    } else if(s.value != 0) {
        s.value--
        if(s.value < 10) {
            s.value = `0${s.value}`
        }
    } else if (m.value != 0 && s.value == 0) {
            s.value = 59
            m.value--

            if(m.value < 10) {
                m.value = `0${m.value}`
            }
    } else if(h.value != 0 && m.value == 0) {
        m.value = 60
        h.value--
        if(h.value < 10) {
            h.value = `0${h.value}`
        }
    }
    return
}

