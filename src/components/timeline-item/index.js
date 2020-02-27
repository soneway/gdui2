import TimelineItem from '../timeline/timeline-item';

TimelineItem.install = function (Vue) {
  Vue.component(TimelineItem.name, TimelineItem);
};

export default TimelineItem;
