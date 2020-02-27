<template>
  <div>
    <gd-table
      :columns="columns"
      :data="data">
    </gd-table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        columns: [
          {
            title: '姓名',
            key: 'name',
            width: 100
          },
          {
            title: '日期',
            key: 'date',
            width: 120
          },
          {
            title: '年龄',
            key: 'age',
            width: 80
          },
          {
            title: 'Address',
            width: 240,
            style: {
              fontWeight: 'bold',
            },
            render: (h, params) => {
              const { row } = params;
              return <a href="http://qq.com">
                {row.address}
              </a>;
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
