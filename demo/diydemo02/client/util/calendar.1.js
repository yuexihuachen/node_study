var moment = require('moment');

var calendar=function(el,opts,cb){
    this.parentEl = 'body';
    this.element = el;
    this.startDate = moment().startOf('day');
    this.endDate = moment().endOf('day');

    this.locale = {
        direction: 'ltr',
        format: moment.localeData().longDateFormat('L'),
        separator: ' - ',
        applyLabel: 'Apply',
        cancelLabel: 'Cancel',
        weekLabel: 'W',
        customRangeLabel: 'Custom Range',
        daysOfWeek: moment.weekdaysMin(),
        monthNames: moment.monthsShort(),
        firstDay: moment.localeData().firstDayOfWeek()
    };

    this.callback = function() { };
    this.isShowing = false;

    //参数
    var options=opts;

    if (typeof options.template !== 'string')
            options.template = '<div class="daterangepicker dropdown-menu single opensright">' +
                '<div class="calendar left single">' +
                    '<div class="calendar-table"></div>' +
                '</div>' +
            '</div>';

    this.parentEl = document.body;
    this.parentEl.append(options.template);
    this.container = document.querySelector('.daterangepicker');

     if (typeof options.startDate === 'object'){
        this.startDate = moment(options.startDate);
     }

    this.singleDatePicker = true;

    this.endDate = this.startDate.clone();

    this.startDate = this.startDate.startOf('day');
    this.endDate = this.endDate.endOf('day');

     //
    // event listeners
    //
    this.root=this.container;
    var objOpts={
        clickPrev:this.root.querySelector('.prev'),
        clickNext:this.root.querySelector('.next '),
        clickDate:this.root.querySelector('td.available '),
        hoverDate:this.root.querySelector('td.available ')
    };

    clickPrev.addEventListener("click", function(){
        this.clickPrev.bind(this);
    }, false);
    clickNext.addEventListener("click", function(){
       this.clickNext.bind(this);
    }, false);
    clickDate.addEventListener("click", function(){
        this.clickDate.bind(this);
    }, false);
    hoverDate.addEventListener("click", function(){
        this.hoverDate.bind(this);
    }, false);

    if(this.element.tagName.toLowerCase()==="input"){
        var handler = function(event){
            switch(event.type){
            case "click":
            case "focus":
                this.show.bind(this);
            break;
            case "keyup":
                this.elementChanged.bind(this);
            break;
            case "keydown":
                this.keydown.bind(this);
            break;
            }
        }
        this.element.onclick=handler;
        this.element.onfocus=handler;
        this.element.onkeyup=handler;
        this.element.onkeydown=handler;

        // this.element.addEventListener("click", function(){
        //     this.show.bind(this);
        // }, false);
        // this.element.addEventListener("focus", function(){
        //     this.show.bind(this);
        // }, false);
        // this.element.addEventListener("keyup", function(){
        //     this.elementChanged.bind(this);
        // }, false);
        // this.element.addEventListener("keydown", function(){
        //     this.keydown.bind(this);
        // }, false);
    }

    this.element.val(this.startDate.format(this.locale.format));

}

calendar.prototype={
    constructor: calendar,
    renderCalendar:function(){
            var month = 2;
            var year = 2017;
            var hour = 0;
            var minute = 0;
            var second = 0;
            var daysInMonth = moment([year, month]).daysInMonth();
            var firstDay = moment([year, month, 1]);
            var lastDay = moment([year, month, daysInMonth]);
            var lastMonth = moment(firstDay).subtract(1, 'month').month();
            var lastYear = moment(firstDay).subtract(1, 'month').year();
            var daysInLastMonth = moment([lastYear, lastMonth]).daysInMonth();
            var dayOfWeek = firstDay.day();

            // start
            var locale={"direction":"ltr","format":"MM/DD/YYYY","separator":" - ","applyLabel":"Apply","cancelLabel":"Cancel","weekLabel":"W","customRangeLabel":"Custom Range","daysOfWeek":["日","一","二","三","四","五","六"],"monthNames":["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],"firstDay":0};
            //end
            //initialize a 6 rows x 7 columns array for the calendar
            var calendar = [];
            calendar.firstDay = firstDay;
            calendar.lastDay = lastDay;

            for (var i = 0; i < 6; i++) {
                calendar[i] = [];
            }
            //populate the calendar with date objects
            var startDay = daysInLastMonth - dayOfWeek + locale.firstDay + 1;
            if (startDay > daysInLastMonth)
                startDay -= 7;

            if (dayOfWeek == locale.firstDay)
                startDay = daysInLastMonth - 6;

            var curDate = moment([lastYear, lastMonth, startDay, 12, minute, second]);

            var col, row;
            for (var i = 0, col = 0, row = 0; i < 42; i++, col++, curDate = moment(curDate).add(24, 'hour')) {
                if (i > 0 && col % 7 === 0) {
                    col = 0;
                    row++;
                }
                calendar[row][col] = curDate.clone().hour(hour).minute(minute).second(second);
                curDate.hour(12);
            }

            //
            // Display the calendar
            //
            var minDate = false;
            var maxDate = false;
            var selected = false;
            var arrow = locale.direction == 'ltr' ? {left: 'chevron-left', right: 'chevron-right'} : {left: 'chevron-right', right: 'chevron-left'};

            var html = '<table class="table-condensed">';
            html += '<thead>';
            html += '<tr>';

            html += '<th class="prev available"><i class="fa fa-' + arrow.left + ' glyphicon glyphicon-' + arrow.left + '"></i></th>';
            
            var dateHtml = locale.monthNames[calendar[1][1].month()] + calendar[1][1].format(" YYYY");

            html += '<th colspan="5" class="month">' + dateHtml + '</th>';

            html += '<th class="next available"><i class="fa fa-' + arrow.right + ' glyphicon glyphicon-' + arrow.right + '"></i></th>';

            html += '</tr>';
            html += '<tr>';

            locale.daysOfWeek.forEach(function(dayOfWeek,index){
                html += '<th>' + dayOfWeek + '</th>';
            });

            html += '</tr>';
            html += '</thead>';
            html += '<tbody>';

            for (var row = 0; row < 6; row++) {
                html += '<tr>';
                for (var col = 0; col < 7; col++) {
                    var classes = [];
                    //highlight today's date
                    if (calendar[row][col].isSame(new Date(), "day"))
                        classes.push('today');

                    //highlight weekends
                    if (calendar[row][col].isoWeekday() > 5)
                        classes.push('weekend');

                    //grey out the dates in other months displayed at beginning and end of this calendar
                    if (calendar[row][col].month() != calendar[1][1].month())
                        classes.push('off');

                    //don't allow selection of dates before the minimum date
                    if (minDate && calendar[row][col].isBefore(minDate, 'day'))
                        classes.push('off', 'disabled');

                    //don't allow selection of dates after the maximum date
                    if (maxDate && calendar[row][col].isAfter(maxDate, 'day'))
                        classes.push('off', 'disabled');

                    //highlight the currently selected start date
                    if (calendar[row][col].format('YYYY-MM-DD') == '2017-03-24')
                        classes.push('active', 'start-date');

                    //highlight the currently selected end date
                    if (calendar[row][col].format('YYYY-MM-DD') == '2017-03-24')
                        classes.push('active', 'end-date');

                    var cname = '', disabled = false;
                    for (var i = 0; i < classes.length; i++) {
                        cname += classes[i] + ' ';
                        if (classes[i] == 'disabled')
                            disabled = true;
                    }
                    if (!disabled)
                        cname += 'available';

                    html += '<td class="' + cname.replace(/^\s+|\s+$/g, '') + '" data-title="' + 'r' + row + 'c' + col + '">' + calendar[row][col].date() + '</td>';

                }
                html += '</tr>';
            }

            html += '</tbody>';
            html += '</table>';

           this.element.append(html)
    }
}

module.exports=calendar;