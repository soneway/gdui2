<template>
  <div>
    <gd-table border :columns="columns2" :scroll="{y: '240px', x: '2100px'}" :data="data2"></gd-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns2: [
        {
          title: "Name",
          key: "name",
          width: 100,
          fixed: "left",
          rowSpan: (row, trIdx, tdIdx) => {
            if (trIdx % 2 === 0) {
              return 2;
            }
            return 0;
          }
        },
        {
          title: "Other",
          children: [
            {
              title: "Age",
              key: "age",
              width: 150,
              colSpan: (row, trIdx, tdIdx) => {
                if ([0, 4, 5].includes(trIdx)) {
                  return 2;
                }
                return 1;
              }
            },
            {
              title: "Address",
              children: [
                {
                  title: "Street",
                  key: "street",
                  width: 150,
                  colSpan: (row, trIdx, tdIdx) => {
                    if ([0, 4, 5].includes(trIdx)) {
                      return 0;
                    }
                    return 1;
                  }
                },
                {
                  title: "Block",
                  children: [
                    {
                      title: "Building",
                      key: "building",
                      width: 100
                    },
                    {
                      title: "Door No.",
                      key: "number",
                      width: 100
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: "Company",
          children: [
            {
              title: "Company Address",
              key: "companyAddress",
              width: 200
            },
            {
              title: "Company Name",
              key: "companyName"
            }
          ]
        },
        {
          title: "Gender",
          key: "gender",
          width: 80,
          fixed: "right"
        }
      ],
      data2: []
    };
  },
  mounted() {
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        key: i,
        name: "John Brown",
        age: i + 1,
        street: "Lake Park",
        building: "C",
        number: 2035,
        companyAddress: "Lake Street 42",
        companyName: "SoftLake Co",
        gender: "M"
      });
    }

    this.data2 = data;
  }
};
</script>

<style lang='less'>
</style>