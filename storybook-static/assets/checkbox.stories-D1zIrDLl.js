import{j as b}from"./jsx-runtime-DzgN-JE8.js";import{r as u}from"./index-CO9pbFv1.js";import{C as k}from"./checkbox-CV8bxokx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./typography-Bi0c9UO4.js";import"./extends-CCbyfPlC.js";import"./index-BdoMW9Dj.js";import"./index-BT32HCm8.js";import"./index-iWjfmL1M.js";import"./index-CyCYRzoy.js";const O={argTypes:{},component:k,tags:["autodocs"],title:"Components/MyCheckbox"},e={render:i=>{const[s,C]=u.useState(!1);return b.jsx(k,{...i,checked:s,label:"Check-box",onChange:()=>C(!s)})}},r={args:{checked:!0,disabled:!1,label:"Check-box"}},o={args:{checked:!1,disabled:!1,label:"Check-box"}};var c,a,t;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(false);
    return <Checkbox {...args} checked={checked} label={'Check-box'} onChange={() => setChecked(!checked)} />;
  }
}`,...(t=(a=e.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};var n,d,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: false,
    label: 'Check-box'
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,p,h;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    label: 'Check-box'
  }
}`,...(h=(p=o.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const R=["Controlled","UncontrolledChecked","UncontrolledUnchecked"];export{e as Controlled,r as UncontrolledChecked,o as UncontrolledUnchecked,R as __namedExportsOrder,O as default};
