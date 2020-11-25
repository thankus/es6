import React,{useEffect} from 'react';
import {  } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
// 引入 ECharts 主模块
import echarts from 'echarts';



function List() {
  useEffect(()=>{
    let element = document.getElementById('echart');
      let myChart = echarts.init(element);
      var option = {
        title: {
                left: 'left',
                text: '秀珍',
                show:true
        },
        tooltip: {
                trigger: 'axis',
                formatter:'{a}:{c}',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#000'
                    }
                }
        },
        grid: {
             show:false,
             top:'30',
             bottom:'60',
             right:'60',
             left:'60'
        },
        legend: {
             show:true,
             selectedMode:'single',    //设置显示单一图例的图形，点击可切换
             bottom:10,
             left:50,
             textStyle:{
             color:'#666',
             fontSize:12
             },
             itemGap:20,
                data:['设备一','设备二','设备三'],
                 inactiveColor:'#ccc'
            },
        xAxis: [
                {
                    type: 'category',
                    data: ['一号', '青岛', '烟台', '威海', '潍坊', '东营', '日照',
                '滨州','莱芜','淄博','德州','聊城','临沂','泰安','菏泽','济宁','枣庄'],
                    axisPointer: {
                        type: 'shadow' // 鼠标移入的竖条
                    },
                    axisTick: {
                        show:true,
                        interval: 0
                  },
                }
        ],
       
       //设置两个y轴，左边显示数量，右边显示概率
       
            yAxis: [
                {
                    type: 'value',
                    name: '数量',
                    show:true,
                   interval: 50,
                   axisLabel: {
                    formatter: '{value} 个'
                   } 
                },
            ],
       
       //每个设备分数量、概率2个指标，只要让他们的name一致，即可通过，legeng进行统一的切换
       
            series: [
                 {
                     name:'设备三',
                     type:'line',
                     data:[75,65,85,66,45,55,56,42,78,69,70,36,42,50,65,75,80],
                     smooth: 0.6,
                     symbolSize:10,
                     itemStyle:{
                       normal:{
                       color:"red"
                       }
                     },
                     areaStyle:{}
                 }
             ]
         };
    
      myChart.setOption(option);
  },[])

  return (
    <div className="list">
      <div className="echart" id="echart"></div>
      
    </div>
  );
}

export default List;
