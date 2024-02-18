import{j as e}from"./jsx-runtime-DzgN-JE8.js";import{r as n}from"./index-CO9pbFv1.js";import{B as u}from"./button-DspplXvf.js";import{C as Q}from"./checkbox-CV8bxokx.js";import{M as X,T as g}from"./text-field-BXFhdFNe.js";import{T as M}from"./typography-Bi0c9UO4.js";import{_ as i}from"./extends-CCbyfPlC.js";import{a as ee,b as G,e as C,$ as I,c as te,g as ne}from"./index-BdoMW9Dj.js";import{$ as D}from"./index-Bgmr7iML.js";import{h as oe,$ as re,a as ae,b as ce,c as se}from"./Combination-CzoprAGf.js";import{$ as le}from"./index-s65smdVy.js";import{$ as S}from"./index-CyCYRzoy.js";import{M as de}from"./select-BYVufGij.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-iWjfmL1M.js";import"./clsx-B-dksMZM.js";import"./index-BT32HCm8.js";import"./index-BEk9yI-S.js";import"./index-BmOxlfpJ.js";const O=n.memo(t=>e.jsxs("svg",{fill:"none",height:16,width:17,xmlns:"http://www.w3.org/2000/svg",...t,children:[e.jsx("path",{d:"M12.5 2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Zm-8 1.333h8a.667.667 0 0 1 .667.667v5.573l-2.134-1.82a1.847 1.847 0 0 0-2.346 0L3.833 11.8V4a.667.667 0 0 1 .667-.667Zm8 9.334H4.873L9.54 8.773a.52.52 0 0 1 .62 0l3.007 2.56V12a.667.667 0 0 1-.667.667Z",fill:"#fff"}),e.jsx("path",{d:"M5.833 6.667a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",fill:"#fff"})]}));try{O.displayName="IconImage",O.__docgenInfo={description:"",displayName:"IconImage",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: SVGSVGElement | null) => void) | RefObject<SVGSVGElement> | null"}}}}}catch{}const R=""+new URL("reactImg-4Hgq1ct3.png",import.meta.url).href,Z="Dialog",[U,Je]=ee(Z),[ie,p]=U(Z),pe=t=>{const{__scopeDialog:a,children:o,open:c,defaultOpen:s,onOpenChange:r,modal:l=!0}=t,d=n.useRef(null),m=n.useRef(null),[x=!1,j]=te({prop:c,defaultProp:s,onChange:r});return n.createElement(ie,{scope:a,triggerRef:d,contentRef:m,contentId:D(),titleId:D(),descriptionId:D(),open:x,onOpenChange:j,onOpenToggle:n.useCallback(()=>j(J=>!J),[j]),modal:l},o)},H="DialogPortal",[ue,K]=U(H,{forceMount:void 0}),fe=t=>{const{__scopeDialog:a,forceMount:o,children:c,container:s}=t,r=p(H,a);return n.createElement(ue,{scope:a,forceMount:o},n.Children.map(c,l=>n.createElement(S,{present:o||r.open},n.createElement(le,{asChild:!0,container:s},l))))},E="DialogOverlay",me=n.forwardRef((t,a)=>{const o=K(E,t.__scopeDialog),{forceMount:c=o.forceMount,...s}=t,r=p(E,t.__scopeDialog);return r.modal?n.createElement(S,{present:c||r.open},n.createElement(ge,i({},s,{ref:a}))):null}),ge=n.forwardRef((t,a)=>{const{__scopeDialog:o,...c}=t,s=p(E,o);return n.createElement(se,{as:ne,allowPinchZoom:!0,shards:[s.contentRef]},n.createElement(I.div,i({"data-state":z(s.open)},c,{ref:a,style:{pointerEvents:"auto",...c.style}})))}),h="DialogContent",he=n.forwardRef((t,a)=>{const o=K(h,t.__scopeDialog),{forceMount:c=o.forceMount,...s}=t,r=p(h,t.__scopeDialog);return n.createElement(S,{present:c||r.open},r.modal?n.createElement(xe,i({},s,{ref:a})):n.createElement($e,i({},s,{ref:a})))}),xe=n.forwardRef((t,a)=>{const o=p(h,t.__scopeDialog),c=n.useRef(null),s=G(a,o.contentRef,c);return n.useEffect(()=>{const r=c.current;if(r)return oe(r)},[]),n.createElement(Y,i({},t,{ref:s,trapFocus:o.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:C(t.onCloseAutoFocus,r=>{var l;r.preventDefault(),(l=o.triggerRef.current)===null||l===void 0||l.focus()}),onPointerDownOutside:C(t.onPointerDownOutside,r=>{const l=r.detail.originalEvent,d=l.button===0&&l.ctrlKey===!0;(l.button===2||d)&&r.preventDefault()}),onFocusOutside:C(t.onFocusOutside,r=>r.preventDefault())}))}),$e=n.forwardRef((t,a)=>{const o=p(h,t.__scopeDialog),c=n.useRef(!1),s=n.useRef(!1);return n.createElement(Y,i({},t,{ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:r=>{var l;if((l=t.onCloseAutoFocus)===null||l===void 0||l.call(t,r),!r.defaultPrevented){var d;c.current||(d=o.triggerRef.current)===null||d===void 0||d.focus(),r.preventDefault()}c.current=!1,s.current=!1},onInteractOutside:r=>{var l,d;(l=t.onInteractOutside)===null||l===void 0||l.call(t,r),r.defaultPrevented||(c.current=!0,r.detail.originalEvent.type==="pointerdown"&&(s.current=!0));const m=r.target;((d=o.triggerRef.current)===null||d===void 0?void 0:d.contains(m))&&r.preventDefault(),r.detail.originalEvent.type==="focusin"&&s.current&&r.preventDefault()}}))}),Y=n.forwardRef((t,a)=>{const{__scopeDialog:o,trapFocus:c,onOpenAutoFocus:s,onCloseAutoFocus:r,...l}=t,d=p(h,o),m=n.useRef(null),x=G(a,m);return re(),n.createElement(n.Fragment,null,n.createElement(ae,{asChild:!0,loop:!0,trapped:c,onMountAutoFocus:s,onUnmountAutoFocus:r},n.createElement(ce,i({role:"dialog",id:d.contentId,"aria-describedby":d.descriptionId,"aria-labelledby":d.titleId,"data-state":z(d.open)},l,{ref:x,onDismiss:()=>d.onOpenChange(!1)}))),!1)}),be="DialogTitle",ve=n.forwardRef((t,a)=>{const{__scopeDialog:o,...c}=t,s=p(be,o);return n.createElement(I.h2,i({id:s.titleId},c,{ref:a}))});const _e="DialogClose",ye=n.forwardRef((t,a)=>{const{__scopeDialog:o,...c}=t,s=p(_e,o);return n.createElement(I.button,i({type:"button"},c,{ref:a,onClick:C(t.onClick,()=>s.onOpenChange(!1))}))});function z(t){return t?"open":"closed"}const Ce=pe,Me=fe,Oe=me,je=he,De=ve,Ee=ye,Ie="_overlay_tq0n8_1",Se="_content_tq0n8_11",Re="_header_tq0n8_20",ke="_closeButton_tq0n8_28",$={overlay:Ie,"overlay-show":"_overlay-show_tq0n8_1",content:Se,"content-show":"_content-show_tq0n8_1",header:Re,closeButton:ke},f=({children:t,title:a,...o})=>e.jsx(Ce,{...o,children:e.jsx(Me,{children:e.jsx(Oe,{className:$.overlay,children:e.jsxs(je,{className:$.content,children:[e.jsxs("div",{className:$.header,children:[e.jsx(De,{asChild:!0,children:e.jsx(M,{as:"h3",variant:"h3",children:a})}),e.jsx(Ee,{className:$.closeButton,children:e.jsx(X,{})})]}),t]})})})});try{f.displayName="Modal",f.__docgenInfo={description:"",displayName:"Modal",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}const Xe={argTypes:{},component:f,tags:["autodocs"],title:"Components/Modal"},b={args:{children:"Modal content",open:!0,title:"Modal title"},render:t=>{const[a,o]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>o(!0),variant:"primary",children:"Open Modal"}),e.jsx(f,{...t,onOpenChange:o,open:a,children:"Modal content"})]})}},v={args:{children:"Modal content",open:!0,title:"Modal title"},render:t=>{const[a,o]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>o(!0),variant:"primary",children:"Open Modal"}),e.jsx(f,{...t,onOpenChange:o,open:a,children:e.jsx("div",{style:{padding:"18px 24px"},children:e.jsx(M,{variant:"body1",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamdsa"})})})]})}},_={args:{children:"Modal content",open:!0,title:"Modal title"},render:t=>{const[a,o]=n.useState(!1),[c,s]=n.useState(!1),r=["Select-box_1","Select-box_2","Select-box_3","Select-box_4","Select-box_5"];return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>o(!0),variant:"primary",children:"Open Modal"}),e.jsx(f,{...t,onOpenChange:o,open:a,children:e.jsxs("div",{style:{padding:"24px"},children:[e.jsx(de,{items:r,label:"Select-box"}),e.jsx(g,{label:"Input"}),e.jsx(g,{label:"Input"}),e.jsx(Q,{checked:c,label:"Check-box",onChange:s}),e.jsxs("div",{style:{alignItems:"center",display:"flex",justifyContent:"space-between",marginTop:"30px"},children:[e.jsx(u,{variant:"secondary",children:"Button Secondary"}),e.jsx(u,{variant:"primary",children:"Button Primary"})]})]})})]})}},y={args:{children:"Modal content",open:!0,title:"Modal title"},render:t=>{const[a,o]=n.useState(!1),[c,s]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>o(!0),variant:"primary",children:"Open Modal"}),e.jsx(f,{...t,onOpenChange:o,open:a,children:e.jsxs("div",{style:{padding:"24px"},children:[e.jsxs("div",{style:{marginBottom:"20px"},children:[e.jsx(M,{variant:"subtitle2",children:"Question"}),e.jsx(g,{label:"Question?",placeholder:"Name"}),e.jsx("div",{style:{marginBottom:"12px"},children:e.jsx("img",{alt:"react",src:R,style:{width:"100%"}})}),e.jsxs(u,{fullWidth:!0,variant:"secondary",children:[e.jsx(O,{}),"Change cover"]})]}),e.jsxs("div",{children:[e.jsx(M,{variant:"subtitle2",children:"Answer"}),e.jsx(g,{label:"Answer?",placeholder:"Name"}),e.jsx("div",{style:{marginBottom:"12px"},children:e.jsx("img",{alt:"react",src:R,style:{width:"100%"}})}),e.jsxs(u,{fullWidth:!0,variant:"secondary",children:[e.jsx(O,{}),"Change cover"]}),e.jsx(g,{label:"Input"}),e.jsx(Q,{checked:c,label:"Check-box",onChange:s})]})]})})]})}};var k,w,B;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: 'Modal content',
    open: true,
    title: 'Modal title'
  },
  render: args => {
    const [open, setOpen] = useState(false);
    return <>\r
        <Button onClick={() => setOpen(true)} variant={'primary'}>\r
          Open Modal\r
        </Button>\r
        <Modal {...args} onOpenChange={setOpen} open={open}>\r
          Modal content\r
        </Modal>\r
      </>;
  }
}`,...(B=(w=b.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var F,T,A;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    children: 'Modal content',
    open: true,
    title: 'Modal title'
  },
  render: args => {
    const [open, setOpen] = useState(false);
    return <>\r
        <Button onClick={() => setOpen(true)} variant={'primary'}>\r
          Open Modal\r
        </Button>\r
        <Modal {...args} onOpenChange={setOpen} open={open}>\r
          <div style={{
          padding: '18px 24px'
        }}>\r
            <Typography variant={'body1'}>\r
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\r
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamdsa\r
            </Typography>\r
          </div>\r
        </Modal>\r
      </>;
  }
}`,...(A=(T=v.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var N,P,q;_.parameters={..._.parameters,docs:{...(N=_.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: 'Modal content',
    open: true,
    title: 'Modal title'
  },
  render: args => {
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState(false);
    const items = ['Select-box_1', 'Select-box_2', 'Select-box_3', 'Select-box_4', 'Select-box_5'];
    return <>\r
        <Button onClick={() => setOpen(true)} variant={'primary'}>\r
          Open Modal\r
        </Button>\r
        <Modal {...args} onOpenChange={setOpen} open={open}>\r
          <div style={{
          padding: '24px'
        }}>\r
            <MySelect items={items} label={'Select-box'} />\r
            <TextField label={'Input'} />\r
            <TextField label={'Input'} />\r
            <Checkbox checked={checked} label={'Check-box'} onChange={setChecked} />\r
            <div style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '30px'
          }}>\r
              <Button variant={'secondary'}>Button Secondary</Button>\r
              <Button variant={'primary'}>Button Primary</Button>\r
            </div>\r
          </div>\r
        </Modal>\r
      </>;
  }
}`,...(q=(P=_.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var L,V,W;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: 'Modal content',
    open: true,
    title: 'Modal title'
  },
  render: args => {
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState(false);
    return <>\r
        <Button onClick={() => setOpen(true)} variant={'primary'}>\r
          Open Modal\r
        </Button>\r
        <Modal {...args} onOpenChange={setOpen} open={open}>\r
          <div style={{
          padding: '24px'
        }}>\r
            <div style={{
            marginBottom: '20px'
          }}>\r
              <Typography variant={'subtitle2'}>Question</Typography>\r
              <TextField label={'Question?'} placeholder={'Name'} />\r
              <div style={{
              marginBottom: '12px'
            }}>\r
                <img alt={'react'} src={reactImg} style={{
                width: '100%'
              }} />\r
              </div>\r
              <Button fullWidth variant={'secondary'}>\r
                <IconImage />\r
                Change cover\r
              </Button>\r
            </div>\r
            <div>\r
              <Typography variant={'subtitle2'}>Answer</Typography>\r
              <TextField label={'Answer?'} placeholder={'Name'} />\r
              <div style={{
              marginBottom: '12px'
            }}>\r
                <img alt={'react'} src={reactImg} style={{
                width: '100%'
              }} />\r
              </div>\r
              <Button fullWidth variant={'secondary'}>\r
                <IconImage />\r
                Change cover\r
              </Button>\r
              <TextField label={'Input'} />\r
              <Checkbox checked={checked} label={'Check-box'} onChange={setChecked} />\r
            </div>\r
          </div>\r
        </Modal>\r
      </>;
  }
}`,...(W=(V=y.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};const et=["Default","ModalWithText","ModalWithForm","ModalWithQuestionAndAnswer"];export{b as Default,_ as ModalWithForm,y as ModalWithQuestionAndAnswer,v as ModalWithText,et as __namedExportsOrder,Xe as default};
