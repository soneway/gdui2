<template>
  <div>
      <gd-table :columns="columns" :scroll="{y: '240px', x: '1600px'}" :data="data"></gd-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          title: "姓名",
          key: "name",
          width: 100,
          fixed: "left"
        },
        {
          title: "日期",
          key: "date",
          width: 100
        },
        {
          title: "年龄",
          key: "age"
        },
        {
          title: "Address",
          width: 240,
          style: {
            fontWeight: "bold"
          },
          render: (h, params) => {
            const { row } = params;
            return <a href="http://qq.com">{row.address}</a>;
          },
          fixed: "right"
        }
      ],
      data: [
        {
          name: "张三",
          age: 18,
          address: "广东广州",
          date: "2016-10-03"
        },
        {
          name: "李四",
          age: 24,
          address: "广东深圳",
          date: "2016-10-01"
        },
        {
          name: "王五",
          age: 30,
          address: "北京",
          date: "2016-10-02"
        },
        {
          name: "刘六",
          age: 26,
          address: "上海",
          date: "2016-10-04"
        },
        {
          name: "刘六",
          age: 26,
          address: "上海",
          date: "2016-10-04"
        },
        {
          name: "刘六",
          age: 26,
          address: "上海",
          date: "2016-10-04"
        },
        {
          name: "刘六",
          age: 26,
          address: "上海",
          date: "2016-10-04"
        },
        {
          name: "刘六",
          age: 26,
          address: "上海",
          date: "2016-10-04"
        },
        {
          name: "刘六",
          age: 26,
          address: "上海",
          date: "2016-10-04"
        },
        {
          name: "刘六",
          age: 26,
          address: "上海",
          date: "2016-10-04"
        },
        {
          name: "刘六",
          age: 26,
          address: "上海",
          date: "2016-10-04"
        },
        {
          name: "刘六",
          age: 26,
          address: "上海",
          date: "2016-10-04"
        }
      ],

    };
  }
};
</script>
