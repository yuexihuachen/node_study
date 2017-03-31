var React = require('react');
var moment = require('moment');

class Calendar extends React.Component{
    constructor(props){
      super(props);
  }
  componentDidMount(){

  }
  render(){
      const data=this.props;
      console.log(data);
      if(data && data.data && data.data!=null){
        var month = data.data.month,
              year = data.data.year,
              hour =0, 
              second =0,
              minute =0;
        var daysInMonth = moment([year, month]).daysInMonth(),
              firstDay = moment([year, month, 1]),
              lastDay = moment([year, month, daysInMonth]),
              lastMonth = moment(firstDay).subtract(1, 'month').month(),
              lastYear = moment(firstDay).subtract(1, 'month').year(),
              daysInLastMonth = moment([lastYear, lastMonth]).daysInMonth(),
              dayOfWeek = firstDay.day();     
        var locale={"format":"MM/DD/YYYY","daysOfWeek":["日","一","二","三","四","五","六"],"monthNames":["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],"firstDay":0};
        var calendar = [[],[],[],[],[],[],[]];

        var startDay = daysInLastMonth - dayOfWeek + locale.firstDay + 1;
        if (startDay > daysInLastMonth){
            startDay -= 7;
        }

        if (dayOfWeek == locale.firstDay){
            startDay = daysInLastMonth - 6;
        }

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

        var arrow = {left: 'chevron-left', right: 'chevron-right'};

        var dateHtml = locale.monthNames[calendar[1][1].month()] + calendar[1][1].format(" YYYY");

        var trArr=[];
        for (var row = 0; row < 6; row++) {
            var html=[];
            for (var col = 0; col < 7; col++) {
                var classes = [];
                if (calendar[row][col].isSame(new Date(), "day"))
                classes.push('today');
                if (calendar[row][col].isoWeekday() > 5)
                classes.push('weekend');
                if (calendar[row][col].month() != calendar[1][1].month())
                classes.push('off');
                if (calendar[row][col].format('YYYY-MM-DD') == '2017-03-24')
                classes.push('active', 'start-date');
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
                html.push(<td className={cname.replace(/^\s+|\s+$/g, '')} data-title={'r' + row + 'c' + col}>calendar[row][col].date() + </td>);
            }
            trArr[row]=html

            }
      }
      

        return (
          <div>
            <div className="daterangepicker dropdown-menu ltr single opensright show-calendar" style={{top: "101px", left: "173px", right: "auto",display:"block"}}>
                <div className="calendar left single">
                  <div className="calendar-table">
                      <div>日历</div>
                      <table className="table-condensed">
                          <thead>
                              <tr>
                                  <th className="prev available"><i className="fa fa-chevron-left glyphicon glyphicon-chevron-left"></i></th>
                                  <th colSpan="5" className="month">{dateHtml}</th>
                                  <th className="next available"><i className="fa fa-chevron-right glyphicon glyphicon-chevron-right"></i></th>
                              </tr>
                              <tr>
                                  {
                                      locale && locale.daysOfWeek.map((item,index)=>{
                                          return <th key={index}>{item}</th>
                                      })
                                  }
                              </tr>
                          </thead>
                          <tbody>
                              {
                                  trArr && trArr.map((item,index)=>{
                                       return <tr key={index}>
                                          item.map((item,index)=>{
                                                  item
                                          })
                                      </tr>
                                  })
                              }
                          </tbody>
                      </table>
                  </div>
                </div>
             </div>
          </div>
        )
  }
}

module.exports = Calendar;


