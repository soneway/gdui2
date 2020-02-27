<template>
  <div>
    <gd-table
      border
      :columns="columns1"
      :data="data">
    </gd-table>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        columns1: [
          {
            title: '姓名',
            key: 'name',
          },
          {
            title: '日期',
            key: 'date',
          },
          {
            title: '年龄',
            key: 'age',
          },
          {
            title: 'Address',
            render: (h, { row }) => {
              return <div>
                <div>{row.address}</div>
                <div>{row.address}</div>
                <div>{row.address}</div>
                <div>{row.address}</div>
              </div>;
            },
          },
        ],
        data: [
          {
            name: '张三',
            age: 18,
            address: '广东广州',
            date: '2016-10-03',
          },
          {
            name: '李四',
            age: 24,
            address: '广东深圳',
            date: '2016-10-01',
          },
          {
            name: '王五',
            age: 30,
            address: '北京',
            date: '2016-10-02',
          },
          {
            name: '刘六',
            age: 26,
            address: '上海',
            date: '2016-10-04',
          },
        ],
      };
    },
  };
</script>
