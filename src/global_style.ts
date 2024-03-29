import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html,body{
  background: #11161D;
}
input[type=number]::-webkit-inner-spin-button {
  opacity: 0;
}
input[type=number]:hover::-webkit-inner-spin-button,
input[type=number]:focus::-webkit-inner-spin-button {
  opacity: 0.25;
}
/* width */
::-webkit-scrollbar {
  width: 15px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #2d313c;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #5b5f67;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #5b5f67;
}
.ant-slider-track, .ant-slider:hover .ant-slider-track {
  background-color: #d44eb7;
  opacity: 0.75;
}
.ant-slider-track,
.ant-slider ant-slider-track:hover {
  background-color: #d44eb7;
  opacity: 0.75;
}
.ant-slider-dot-active,
.ant-slider-handle,
.ant-slider-handle-click-focused,
.ant-slider:hover .ant-slider-handle:not(.ant-tooltip-open)  {
  border: 2px solid #d44eb7; 
}
.ant-table-tbody > tr.ant-table-row:hover > td {
  background: #273043;
}
.ant-table-tbody > tr > td {
  border-bottom: 8px solid #1A2029;
}
.ant-table-container table > thead > tr:first-child th {
  border-bottom: none;
}
.ant-divider-horizontal.ant-divider-with-text::before, .ant-divider-horizontal.ant-divider-with-text::after {
  border-top: 1px solid #434a59 !important;
}
.ant-layout { 
  background: radial-gradient(
    circle,
    rgba(28, 28, 28, 1) 0%,
    rgba(6, 6, 6, 1) 50%,
    rgba(48, 24, 50, 1) 100%
  );
  
  }
  .ant-table {
    background: #212734;
  }
  .ant-table-thead > tr > th {
    background: #1A2029;
  }
.ant-select-item-option-content {
  img {
    margin-right: 4px;
  }
}
.ant-modal-content {
  background: rgb(28, 28, 28);
  
}

.ant-select-show-search.ant-select:not(.ant-select-customize-input) .ant-select-selector {
  cursor: pointer;
}

@-webkit-keyframes highlight {
  from { background-color: #d44eb7;}
  to {background-color: #1A2029;}
}
@-moz-keyframes highlight {
  from { background-color: #d44eb7;}
  to {background-color: #1A2029;}
}
@-keyframes highlight {
  from { background-color: #d44eb7;}
  to {background-color: #1A2029;}
}
.flash {
  -moz-animation: highlight 0.5s ease 0s 1 alternate ;
  -webkit-animation: highlight 0.5s ease 0s 1 alternate;
  animation: highlight 0.5s ease 0s 1 alternate;
}`;
