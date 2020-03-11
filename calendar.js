var spacers = 6;
var a29 = false;
var student_available_times = {};
var current_day = [10, "MARCH", 2020]
var down, up, col_down, col_up;
var table, rows, boxes;
document.addEventListener('DOMContentLoaded', function() {
    var days = document.getElementsByClassName('days')[0];

    var back_arrow = document.getElementsByClassName('prev')[0];
    var front_arrow = document.getElementsByClassName('next')[0];

    front_arrow.addEventListener("click", next_month);
    back_arrow.addEventListener("click", prev_month);

    for (var i = 1; i <= 31; i++) {
        id = "d" + i;
        my = document.getElementById(id);
        my.addEventListener("click", function() {
            make_active(event.target);
        });
    }

    table = document.getElementsByTagName('table')[0];
    rows = table.getElementsByTagName('tr');
    boxes = {}
    for (var i = 1; i < rows.length; i++) {
        boxes[rows[i].getElementsByTagName('th')[0].innerText] = rows[i].getElementsByTagName('td');
    }

    for (var key in boxes) {
        for (var i = 0; i < boxes[key].length; i++) {
            boxes[key][i].addEventListener("mousedown", function() {
                if (event.target.tagName == 'TD') {
                    k = event.target.parentElement.getElementsByTagName('th')[0].innerText
                    for (var j = 0; j < boxes[k].length; j++) {
                        if (event.target == boxes[k][j]) { col_down = j }
                    }
                    down = k;
                }

            })
            boxes[key][i].addEventListener("mouseup", function() {
                k = event.target.parentElement.getElementsByTagName('th')[0].innerText
                var column;
                for (var j = 0; j < boxes[k].length; j++) {
                    if (event.target == boxes[k][j]) { col_up = j }
                }
                up = k;
                if (col_down == col_up) {
                    make_hours(down, up, col_down);
                }
            })
        }
    }
});

function next_month() {
    var ind = months.findIndex(ifcurrent)
    if (ind == 11) {
        ind = -1;
        plusyear();
    }
    month.remove();
    new_mo = document.createElement('div');
    new_mo.setAttribute("id", "month");
    new_mo.innerText = months[ind + 1];
    month_name.insertBefore(new_mo, year);
    check_days(ind + 1, 'next');
    if (ind == -1) { ind = 11 };
    add_spacers(spacers, ind, 'next');
};

function prev_month() {
    var ind = months.findIndex(ifcurrent)
    if (ind == 0) {
        ind = 12;
        minusyear();
    }
    month.remove();
    new_mo = document.createElement('div');
    new_mo.setAttribute("id", "month");
    new_mo.innerText = months[ind - 1];
    month_name.insertBefore(new_mo, year);
    check_days(ind - 1, 'prev');
    add_spacers(spacers, ind, 'prev');
};

var months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
var days_per = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var days_leap = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function ifcurrent(curr_month) {
    return curr_month == month.innerText;
}

function plusyear() {
    number = parseInt(year.innerText);
    number++;
    year.remove();
    new_year = document.createElement('span');
    new_year.setAttribute('id', 'year');
    new_year.setAttribute('style', "font-size:18px")
    new_year.innerText = number;
    month_name.appendChild(new_year)
}

function minusyear() {
    number = parseInt(year.innerText);
    number--;
    year.remove();
    new_year = document.createElement('span');
    new_year.setAttribute('id', 'year');
    new_year.setAttribute('style', "font-size:18px")
    new_year.innerText = number;
    month_name.appendChild(new_year)
}

function add_spacers(current, ind, prev_or_next) {
    if (parseInt(year.innerText) % 4 == 0) {
        lookup = days_leap;
    } else { lookup = days_per };
    if (prev_or_next == 'next') {
        month_ind = ind;
        spacers = (current + lookup[month_ind]) % 7;
    } else {
        month_ind = ind;
        if (month_ind == 0) {
            month_ind = 11;
        } else { month_ind--; }
        spacers = 7 - (7 - current + lookup[month_ind]) % 7
    }
    for (var i = 0; i < current; i++) {
        j = i + 1;
        current_id = 'spacer' + j;
        document.getElementById(current_id).remove();
    }

    for (var i = 0; i < spacers; i++) {
        j = i + 1;
        current_id = 'spacer' + j;
        new_spacer = document.createElement('li');
        new_spacer.setAttribute('id', current_id)
        new_spacer.innerText = 30;
        new_spacer.setAttribute('style', 'margin-right: 4px;')
        cal_tag = document.getElementsByClassName('days')[0]
        cal_tag.insertBefore(new_spacer, d1);
    }
}

function check_days(month_ind, prev_or_next) {
    doc = document.getElementsByClassName('days')[0];
    if (prev_or_next == 'prev') {
        if (month_ind == 11) {
            var a = 0;
        } else {
            var a = month_ind + 1;
        }
    } else {
        if (month_ind == 0) {
            var a = 11;
        } else {
            var a = month_ind - 1;
        }
    }
    number = parseInt(year.innerText);
    if (number % 4 == 0) {
        d_before = days_leap[a]
        d = days_leap[month_ind];
        if (d == 31) {
            if (d_before == 30) {
                tag = document.createElement('li');
                tag.setAttribute('id', 'd31');
                if (a29) { tag.setAttribute('style', 'margin-right: 4px;') }
                tag = add_span(31, tag);
                doc.appendChild(tag);
            } else if (d_before == 29) {
                tag1 = document.createElement('li');
                tag1.setAttribute('id', 'd30');
                if (a29) { tag1.setAttribute('style', 'margin-right: 4px;') }
                tag1 = add_span(30, tag1);
                doc.appendChild(tag1);
                tag2 = document.createElement('li');
                tag2.setAttribute('id', 'd31');
                if (a29) { tag2.setAttribute('style', 'margin-right: 4px;') }
                tag2 = add_span(31, tag2);
                doc.appendChild(tag2);
            }
        } else if (d == 30) {
            if (d_before == 31) {
                d31.remove()
            } else if (d_before == 29) {
                tag = document.createElement('li');
                tag.setAttribute('id', 'd30');
                if (a29) { tag.setAttribute('style', 'margin-right: 4px;') }
                tag = add_span(30, tag);
                doc.appendChild(tag);
            }
        } else {
            d31.remove();
            d30.remove();
            a29 = true;
        }
    } else {
        d_before = days_per[a]
        d = days_per[month_ind];
        if (d == 31) {
            if (d_before == 30) {
                tag = document.createElement('li');
                tag.setAttribute('id', 'd31');
                if (a29) { tag.setAttribute('style', 'margin-right: 4px;') }
                tag = add_span(31, tag);
                doc.appendChild(tag);
            } else if (d_before == 28) {
                tag1 = document.createElement('li');
                tag1.setAttribute('id', 'd29');
                if (a29) { tag1.setAttribute('style', 'margin-right: 4px;') }
                tag1 = add_span(29, tag1);
                doc.appendChild(tag1);
                tag2 = document.createElement('li');
                tag2.setAttribute('id', 'd30');
                if (a29) { tag2.setAttribute('style', 'margin-right: 4px;') }
                tag2 = add_span(30, tag2);
                doc.appendChild(tag2);
                tag3 = document.createElement('li');
                tag3.setAttribute('id', 'd31');
                if (a29) { tag3.setAttribute('style', 'margin-right: 4px;') }
                tag3 = add_span(31, tag3);
                doc.appendChild(tag3);
            }
        } else if (d == 30) {
            if (d_before == 31) {
                d31.remove()
            } else if (d_before == 28) {
                tag1 = document.createElement('li');
                tag1.setAttribute('id', 'd30');
                tag1 = add_span(30, tag1);
                if (a29) { tag1.setAttribute('style', 'margin-right: 4px;') }
                doc.appendChild(tag1);
                tag2 = document.createElement('li');
                tag2.setAttribute('id', 'd29');
                if (a29) { tag2.setAttribute('style', 'margin-right: 4px;') }
                tag2 = add_span(29, tag2);
                doc.appendChild(tag2);
            }
        } else {
            d31.remove();
            d30.remove();
            d29.remove();
            a29 = true;
        }
    };
}

function add_span(number, tag) {
    n = document.createElement('span');
    n.setAttribute('class', 'inactive');
    n.innerText = number;
    tag.appendChild(n);
    return tag;
}

function make_active(target) {
    if (target.tagName == 'SPAN') {
        d = document.getElementsByClassName('days')[0];
        active_span = document.getElementsByClassName('active')[0];
        active = active_span.parentElement;
        number = parseInt(active_span.innerText);
        active_span.remove()
        new_span = document.createElement('span')
        new_span.setAttribute('class', 'inactive')
        new_span.innerText = number;
        active.appendChild(new_span);
        target_li = target.parentElement;
        number = parseInt(target.innerText)
        target.remove()
        new_span = document.createElement('span')
        new_span.setAttribute('class', 'active')
        new_span.innerText = number;
        target_li.appendChild(new_span);
        current_day = [number, month.innerText, year.innerText];
    }
}

function a(start_year) {
    current_year = start_year;
    while (current_year <= start_year + 4) {
        for (var i in months) {
            if (current_year % 4 == 0) {
                iterate = days_leap
            } else {
                iterate = days_per
            }
            if (current_year == start_year) {
                if (i > 8) {
                    make_days(i, student_available_times, iterate, current_year);
                }
            } else if (current_year == start_year + 4) {
                if (i < 6) {
                    make_days(i, student_available_times, iterate, current_year);
                }
            } else {
                make_days(i, student_available_times, iterate, current_year);
            }
        }
        current_year++;
    }

    console.log(student_available_times)
}

function make_days(i, dict, iterate, current_year) {
    for (var j = 1; j <= iterate[i]; j++) {
        mo = parseInt(i) + 1;
        my_date = j + '/' + mo + '/' + current_year;
        dict[my_date] = [];
    }
}

function make_hours(s, e, column) {
    console.log(s.cellIndex)
    for (key in boxes) {
        if (make_float(key) >= make_float(s) && make_float(key) <= make_float(e)) {
            current_td = boxes[key][column];
            if (current_td.className != "stage-blue" || current_td.className != "stage-purple" || current_td.className != "stage-orange" || current_td.className != "stage-green") {
                to_delete = 2 * (make_float(e) - make_float(s));
                if (make_float(key) == make_float(s)) {
                    current_td.setAttribute("class", 'stage-pink');
                    current_td.setAttribute("rowspan", parseInt(to_delete + 1))
                } else {
                    current_td.remove()
                }
            }
        }
    }
}

function make_float(key) {
    hour = parseInt(key);
    if (key[3] == '3') { hour = hour + 0.5 }
    return hour;
}

function row_colour(col) {
    c = ['stage-green', 'stage-blue', 'stage-purple', 'stage-orange']
    return c[col]
}