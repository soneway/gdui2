// 组件入口

// 组件
import GdIcon from './icon';
import GdInput from './input';
import GdLoading from './loading';
import GdButton from './button';
import GdCheckbox from './checkbox';
import GdRadio from './radio';
import GdModal from './modal';
import GdForm from './form';
import GdFormItem from './form-item';
import GdSelect from './select';
import GdOption from './option';
import GdCheckList from './check-list';
import GdCheckItem from './check-item';
import GdRegionPicker from './region-picker';
import GdTabsPane from './tabs-pane';
import GdTabs from './tabs';
import GdTag from './tag';
import GdPoptip from './poptip';
import GdTable from './table';
import GdPagination from './pagination';
import GdStep from './step';
import GdSteps from './steps';
import GdUpload from './upload';
import GdCol from './col';
import GdRow from './row';
import GdTree from './tree';
import GdTreeX from './tree-x';
import GdHeader from './header';
import GdFooter from './footer';
import GdDatepicker from './datepicker';
import GdTimelineItem from './timeline-item';
import GdTimeline from './timeline';
import GdBreadcrumbItem from './breadcrumb-item';
import GdBreadcrumb from './breadcrumb';
import GdConfirmPoptip from './confirm-poptip';
import GdRate from './rate';
import RenderCell from './render-cell';

// 特殊组件
import pageLoading from './page-loading';
import alert from './alert';
import confirm from './confirm';
import toast from './toast';

// IE处理
import '../scripts/utils/ie';

const components = {
  GdIcon,
  GdInput,
  GdLoading,
  GdButton,
  GdRow,
  GdCol,
  GdCheckbox,
  GdRadio,
  GdModal,
  GdForm,
  GdFormItem,
  GdSelect,
  GdOption,
  GdCheckList,
  GdCheckItem,
  GdRegionPicker,
  GdTabs,
  GdTag,
  GdTabsPane,
  GdPoptip,
  GdTable,
  GdPagination,
  GdSteps,
  GdStep,
  GdUpload,
  GdTree,
  GdTreeX,
  GdHeader,
  GdFooter,
  GdDatepicker,
  GdTimeline,
  GdTimelineItem,
  GdBreadcrumb,
  GdBreadcrumbItem,
  GdConfirmPoptip,
  GdRate,
  RenderCell,
};

const $loading = pageLoading;
const $alert = alert.show;
const $confirm = confirm.show;
const $toast = toast;

function install (Vue) {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  });

  Object.assign(Vue.prototype, {
    $loading,
    $alert,
    $confirm,
    $toast,
  });
}

// install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ...components,
};

export {
  $loading,
  $alert,
  $confirm,
  $toast,
};
