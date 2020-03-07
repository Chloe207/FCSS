var spacers = 6;
var a29 = false;
document.addEventListener('DOMContentLoaded', function() {
    var days = document.getElementsByClassName('days')[0];

    var back_arrow = document.getElementsByClassName('prev')[0];
    var front_arrow = document.getElementsByClassName('next')[0];

    front_arrow.addEventListener("click", next_month);
    back_arrow.addEventListener("click", prev_month);
    d1.addEventListener("click", function() {
        make_active(event.target);
    });
    d2.addEventListener("click", function() {
        make_active(event.target);
    });
    d3.addEventListener("click", function() {
        make_active(event.target);
    });
    d4.addEventListener("click", function() {
        make_active(event.target);
    });
    d5.addEventListener("click", function() {
        make_active(event.target);
    });
    d6.addEventListener("click", function() {
        make_active(event.target);
    });
    d7.addEventListener("click", function() {
        make_active(event.target);
    });
    d8.addEventListener("click", function() {
        make_active(event.target);
    });
    d9.addEventListener("click", function() {
        make_active(event.target);
    });
    d10.addEventListener("click", function() {
        make_active(event.target);
    });
    d11.addEventListener("click", function() {
        make_active(event.target);
    });
    d12.addEventListener("click", function() {
        make_active(event.target);
    });
    d13.addEventListener("click", function() {
        make_active(event.target);
    });
    d14.addEventListener("click", function() {
        make_active(event.target);
    });
    d15.addEventListener("click", function() {
        make_active(event.target);
    });
    d16.addEventListener("click", function() {
        make_active(event.target);
    });
    d17.addEventListener("click", function() {
        make_active(event.target);
    });
    d18.addEventListener("click", function() {
        make_active(event.target);
    });
    d19.addEventListener("click", function() {
        make_active(event.target);
    });
    d20.addEventListener("click", function() {
        make_active(event.target);
    });
    d21.addEventListener("click", function() {
        make_active(event.target);
    });
    d22.addEventListener("click", function() {
        make_active(event.target);
    });
    d23.addEventListener("click", function() {
        make_active(event.target);
    });
    d24.addEventListener("click", function() {
        make_active(event.target);
    });
    d25.addEventListener("click", function() {
        make_active(event.target);
    });
    d26.addEventListener("click", function() {
        make_active(event.target);
    });
    d27.addEventListener("click", function() {
        make_active(event.target);
    });
    d28.addEventListener("click", function() {
        make_active(event.target);
    });
    d29.addEventListener("click", function() {
        make_active(event.target);
    });
    d30.addEventListener("click", function() {
        make_active(event.target);
    });
    d31.addEventListener("click", function() {
        make_active(event.target);
    });

    // var newParagraph = document.createElement('p');
    // newParagraph.innerText = 'New par';
    // document.body.appendChild(newParagraph);
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
        target_li.appendChild(new_span)
    }
}