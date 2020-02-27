<template>
  <div :class="_class">

    <Select
      v-if="!provinceHidden"
      v-model="province"
      :size="size"
      :style="_itemStyle"
      placeholder="请选择省份"
      :disabled="curProvinceDisabled"
      :readonly="provinceReadonly"
      @optionclick="onProvinceClick"
      :data-source="provinceDataSource">
    </Select>

    <Select
      v-if="!cityHidden"
      v-model="city"
      :size="size"
      :style="_itemStyle"
      placeholder="请选择城市"
      :disabled="curCityDisabled"
      :readonly="cityReadonly"
      @optionclick="onCityClick"
      :data-source="cityDataSource">
    </Select>

    <Select
      v-if="!countyHidden"
      v-model="county"
      :size="size"
      :style="_itemStyle"
      placeholder="请选择区县"
      :disabled="curCountyDisabled"
      :readonly="countyReadonly"
      @optionclick="onCountyClick"
      :data-source="countyDataSource">
    </Select>

  </div>
</template>

<script>
  import Select from '../select';

  const name = 'gd-region-picker';

  export default {
    name,
    components: {
      Select,
    },
    props: {
      value: {
        type: Array,
        default () {
          return [];
        },
      },
      size: String,
      itemWidth: String,
      disabled: Boolean,
      readonly: Boolean,
      pcaJson: {
        type: Object,
        required: true,
        default () {
          return {};
        },
      },
      provinceHidden: Boolean,
      provinceDisabled: Boolean,
      provinceReadonly: Boolean,
      cityHidden: Boolean,
      cityDisabled: Boolean,
      cityReadonly: Boolean,
      countyHidden: Boolean,
      countyDisabled: Boolean,
      countyReadonly: Boolean,
    },
    data () {
      return {
        province: this.value[0],
        city: this.value[1],
        county: this.value[2],
      };
    },
    computed: {
      _class () {
        return [
          name,
          {
            [`${name}-readonly`]: this.readonly,
          },
        ];
      },
      _itemStyle () {
        return {
          width: this.itemWidth,
        };
      },

      provinceData () {
        return this.pcaJson;
      },
      provinceDataSource () {
        return this.getDataArray(this.provinceData);
      },
      cityData () {
        return this.provinceData[this.province] || {};
      },
      cityDataSource () {
        return this.getDataArray(this.cityData);
      },
      countyData () {
        return this.cityData[this.city] || {};
      },
      countyDataSource () {
        return this.getDataArray(this.countyData);
      },
      curProvinceDisabled () {
        const { disabled, provinceDisabled } = this;
        return disabled || provinceDisabled;
      },
      curCityDisabled () {
        const { disabled, cityDisabled, cityData } = this;
        return disabled || cityDisabled || !Object.keys(cityData).length;
      },
      curCountyDisabled () {
        const { disabled, countyDisabled, countyData } = this;
        return disabled || countyDisabled || !Object.keys(countyData).length;
      },
    },
    watch: {
      value (value = []) {
        const [province, city, county] = value;
        this.province = province;
        this.city = city;
        this.county = county;
      },
      province () {
        this.updateValue();
      },
      city () {
        this.updateValue();
      },
      county () {
        this.updateValue();
      },
    },

    methods: {
      updateValue () {
        const array = [];
        const { province, city, county } = this;
        if (province) {
          array.push(province);
        }
        if (city) {
          array.push(city);
        }
        if (county) {
          array.push(county);
        }

        // v-model
        this.$emit('input', array);
        this.$emit('change', array);
      },

      onProvinceClick (value, oldValue) {
        this.city = this.county = '';
        if (value === oldValue) {
          this.province = '';
        }
      },
      onCityClick (value, oldValue) {
        this.county = '';

        if (value === oldValue) {
          this.city = '';
        }
      },
      onCountyClick (value, oldValue) {
        if (value === oldValue) {
          this.county = '';
        }
      },

      // 获取数组
      getDataArray (data) {
        // 数组
        if (Array.isArray(data)) {
          return data.map((item) => ({ label: item, value: item }));
        }
        return Object.keys(data)
          .map((key) => ({ label: key, value: key }));
      },

    },
  };
</script>
